import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PatternTabs = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  return (
    <Tabs value={value} onValueChange={onChange} className="w-full">
      <TabsList className="md:grid
            grid-cols-2 sm:grid-cols-3 md:grid-cols-6
            w-full h-auto p-1.5 rounded-[15px]
            backdrop-blur-md shadow-lg border
             mb-8 transition-all duration-300
            bg-white/70 border-gray-200/30 hover:bg-white/80">
        <TabsTrigger value="all">All Patterns</TabsTrigger>
        <TabsTrigger value="gradients">Gradients</TabsTrigger>
        <TabsTrigger value="geometric">Geometric</TabsTrigger>
        <TabsTrigger value="decorative">Decorative</TabsTrigger>
        <TabsTrigger value="effects">Effects</TabsTrigger>
        <TabsTrigger value="favourites">Favourites</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
