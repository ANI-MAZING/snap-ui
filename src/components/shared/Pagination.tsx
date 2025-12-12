import { Button } from "../ui/button";

export const Pagination = ({
  currentPage,
  totalPages,
  onChange,
}: {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      
      {/* Prev */}
      <Button
        variant="outline"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </Button>

      {/* Page numbers */}
      <div className="flex gap-1">
        {pages.map((num) => (
          <Button
            key={num}
            variant={num === currentPage ? "default" : "outline"}
            onClick={() => onChange(num)}
            className="w-10"
          >
            {num}
          </Button>
        ))}
      </div>

      {/* Next */}
      <Button
        variant="outline"
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
};
