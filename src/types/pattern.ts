export type PatternStyles = {
  background?: string;
  layers?: string[];
  noise?: boolean;
  opacity?: number;
};

export interface PatternMeta {
  id: string;
  name: string;
  category: string;
  tags?: string[];
  isNew?: boolean;
  styles: PatternStyles;
}
