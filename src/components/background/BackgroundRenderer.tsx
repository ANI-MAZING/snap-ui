import { usePreviewStore } from "@/store/usePreviewStore";
import { PatternRenderer } from "@/components/patterns/PatternRenderer";
import { AnimatePresence, motion } from "framer-motion";

export const BackgroundRenderer = ({ children }: { children: React.ReactNode }) => {
  const styles = usePreviewStore((s) => s.styles);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence>
        {styles && (
          <motion.div
            key="bg-style-preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 -z-10"
          >
            <PatternRenderer styles={styles} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
