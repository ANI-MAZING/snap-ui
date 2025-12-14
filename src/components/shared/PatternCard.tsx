import type { PatternMeta } from "@/types/pattern";
import { Star, Copy, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePreviewStore } from "@/store/usePreviewStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { PatternRenderer } from "@/components/patterns/PatternRenderer";
import { useCopy } from "@/hooks/useCopy";
import { toast } from "sonner";
import { useInView } from "react-intersection-observer"

export const PatternCard = ({ pattern }: { pattern: PatternMeta }) => {
  const setPreview = usePreviewStore((s) => s.setPreview);

  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);
  const isFavorite = useFavoritesStore((s) => s.favorites.includes(pattern.id));

  const { copy } = useCopy();

  const { ref, inView } = useInView({
  triggerOnce: true,
  rootMargin: "200px", // render early for smooth scroll
});


  const handleCopy = () => {
    const code = JSON.stringify(pattern.styles, null, 2);
    copy(code);
    toast("Copied pattern styles!");
  };


  return (
    <Card
    ref={ref}
      className="
        relative group w-full h-56 rounded-2xl overflow-hidden cursor-pointer 
        shadow-sm bg-white transition hover:shadow-md 
      "
    >
      {/* Thumbnail */}
      <div className="absolute inset-0 pointer-events-none">
        {inView && (
        <div className="absolute inset-0 pointer-events-none scale-[1.1]">
            <PatternRenderer styles={pattern.styles} isThumbnail />
        </div>
        )}

      </div>

      {/* Favorite Icon */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(pattern.id);
        }}
        className="
          absolute top-3 left-3 z-31 p-1 rounded-full bg-white shadow-sm 
          hover:scale-110 transition cursor-pointer
        "
      >
        <Star
          className={`w-5 h-5 ${
            isFavorite
              ? "fill-yellow-400 text-yellow-500"
              : "fill-white text-gray-400"
          }`}
        />
      </div>

      {/* New Badge */}
      {pattern.isNew && (
        <Badge className="absolute top-3 right-3 z-20 bg-purple-600 text-white">
          New
        </Badge>
      )}

      {/* Hover Overlay */}
      <div
        className="
          absolute inset-0 z-30 bg-black/0 group-hover:bg-black/30 
          transition flex  items-center justify-center opacity-0 
          group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
        "
      >
        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              setPreview(pattern.styles);
            }}
          >
            <Eye className="w-4 h-4 mr-1" /> Preview
          </Button>

          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
          >
            <Copy className="w-4 h-4 mr-1" /> Copy
          </Button>
        </div>
      </div>
    </Card>
  );
};
