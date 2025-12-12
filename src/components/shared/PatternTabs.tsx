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
      <TabsList className="w-full flex gap-2 h-12 bg-white rounded-xl shadow-sm">
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
