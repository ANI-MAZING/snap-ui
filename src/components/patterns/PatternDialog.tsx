import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { usePatternViewStore } from "@/store/usePatternViewStore";
import { Button } from "@/components/ui/button";
import { useCopy } from "@/hooks/useCopy";
import { PatternRenderer } from "@/components/patterns/PatternRenderer";
import { toast } from "sonner";
import { generatePatternJSX } from "@/lib/generatePatternJSX";

export const PatternDialog = () => {
  const { open, selected, closeView } = usePatternViewStore();
  const { copy } = useCopy();

  if (!selected) return null;

  // Exported code for user (styles object)
  const code = generatePatternJSX(selected.styles)

  return (
    <Dialog open={open} onOpenChange={closeView}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        
        {/* Live fullscreen preview area */}
        <div className="relative w-full h-[400px] bg-black/5 rounded-t-lg overflow-hidden">
          <PatternRenderer styles={selected.styles} />
        </div>

        <div className="p-6 space-y-4">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selected.name}</DialogTitle>
            <DialogDescription>
              Category: {selected.category}
            </DialogDescription>
          </DialogHeader>

          {/* Code Block */}
          <div>
            <p className="font-medium mb-2">Pattern Styles:</p>
            <pre className="bg-muted/50 p-4 rounded-lg text-sm overflow-x-auto whitespace-pre">
            {code}
            </pre>

          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => {
                copy(code);
                toast("Copied JSX!");
              }}
            >
              Copy Styles
            </Button>

            <Button variant="secondary" onClick={closeView}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
