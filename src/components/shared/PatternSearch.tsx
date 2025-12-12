import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const PatternSearch = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="relative w-full">
    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
    <Input
      placeholder="Search..."
      className="pl-10 h-12 rounded-xl bg-white shadow-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
