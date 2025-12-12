import type { PatternStyles } from "@/types/pattern";

export const PatternRenderer = ({
  styles,
  isThumbnail = false,
}: {
  styles: PatternStyles;
  isThumbnail?: boolean;
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background */}
      {styles.background && (
        <div
          className="absolute inset-0"
          style={{
            background: styles.background,
            opacity: isThumbnail ? 0.9 : styles.opacity ?? 1,
            transform: isThumbnail ? "scale(1.2)" : undefined,
            transformOrigin: "center",
          }}
        />
      )}

      {/* Layers */}
      {styles.layers?.map((layer, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: layer,
            transform: isThumbnail ? "scale(1.2)" : undefined,
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Noise (expensive → disable for thumbnails) */}
      {styles.noise && !isThumbnail && (
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />
      )}
    </div>
  );
};
