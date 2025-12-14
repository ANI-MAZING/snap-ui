import { useState, useMemo } from "react";
import { patterns } from "@/data/patterns";
import { PatternCard } from "@/components/shared/PatternCard";
import { PatternSearch } from "@/components/shared/PatternSearch";
import { Pagination } from "@/components/shared/Pagination";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { Navbar } from "@/components/shared/Navbar";
import { BackgroundRenderer } from "@/components/background/BackgroundRenderer";

export default function FavoritePage() {
  const favorites = useFavoritesStore((s) => s.favorites);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 20;

  // Filter to only patterns that user favorited
  const filtered = useMemo(() => {
    const favPatterns = patterns.filter((p) => favorites.includes(p.id));

    return favPatterns.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    );
  }, [favorites, search]);

  const pages = Math.ceil(filtered.length / perPage);

  const paginated = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  if (favorites.length === 0)
    return (
      <div className="p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold">No Favorites Yet</h2>
        <p className="text-muted-foreground">
          Add patterns to your favorites and they’ll appear here.
        </p>
      </div>
    );

  return (
    <>
    <BackgroundRenderer>
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Favorites</h1>
        <p className="text-muted-foreground mt-1">
          All patterns you've marked as favorites.
        </p>
      </div>

      {/* SEARCH */}
      <PatternSearch
        value={search}
        onChange={(v) => {
          setSearch(v);
          setPage(1);
        }}
      />

      {/* COUNT */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} patterns
      </p>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {paginated.map((p) => (
          <PatternCard key={p.id} pattern={p} />
        ))}
      </div>

      {/* PAGINATION */}
      {pages > 1 && (
        <Pagination currentPage={page} totalPages={pages} onChange={setPage} />
      )}
    </div>
    </BackgroundRenderer>
    </>
  );
}
