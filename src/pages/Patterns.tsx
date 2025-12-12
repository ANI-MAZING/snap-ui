import { useState, useMemo } from "react";
import { patterns } from "@/data/patterns";
import { PatternCard } from "@/components/shared/PatternCard";
import { PatternTabs } from "@/components/shared/PatternTabs";
import { PatternSearch } from "@/components/shared/PatternSearch";
import { Pagination } from "@/components/shared/Pagination";
import { Navbar } from "@/components/shared/Navbar";

import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useTagFilterStore } from "@/store/useTagFilterStore";
import { BackgroundRenderer } from "@/components/background/BackgroundRenderer";


export default function PatternPage() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 20;

  // GLOBAL favorite/tag state
  const favorites = useFavoritesStore((s) => s.favorites);
  const activeTag = useTagFilterStore((s) => s.activeTag);
  const clearTag = useTagFilterStore((s) => s.clearTag);

  // ---------------- FILTERING LOGIC ----------------
  const filtered = useMemo(() => {
    return patterns.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.tags?.some((t) =>
          t.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTag = activeTag ? (p.tags?.includes(activeTag) ?? false) : true;

      let matchesTab;
      if (tab === "all") matchesTab = true;
      else if (tab === "favourites") matchesTab = favorites.includes(p.id);
      else matchesTab = p.category === tab;

      return matchesTab && matchesSearch && matchesTag;
    });
  }, [tab, search, favorites, activeTag]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  // Reset page on filter changes
  const resetPage = () => setCurrentPage(1);

  return (
    <>
    <BackgroundRenderer>
    <div className="space-y-8 p-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-4xl font-bold">Pattern Library</h1>
        <p className="text-muted-foreground mt-1">
          Tap on mobile or hover on desktop to see options
        </p>
      </div>

      {/* TABS */}
      <PatternTabs
        value={tab}
        onChange={(v) => {
          setTab(v);
          resetPage();
        }}
      />

      {/* SEARCH BAR */}
      <PatternSearch
        value={search}
        onChange={(v) => {
          setSearch(v);
          resetPage();
        }}
      />

      {/* TAG FILTER INFO */}
      {activeTag && (
        <div className="flex items-center gap-3 mt-2">
          <p className="text-sm">
            Filtering by tag: <strong>{activeTag}</strong>
          </p>

          <button
            onClick={clearTag}
            className="text-sm underline text-blue-600"
          >
            Clear Tag
          </button>
        </div>
      )}

      {/* RESULT COUNT */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} patterns
      </p>

      {/* PATTERN GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginated.map((p) => (
          <PatternCard key={p.id} pattern={p} />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={setCurrentPage}
        />
      )}
    </div>
    </BackgroundRenderer>
    </>
  );
}
