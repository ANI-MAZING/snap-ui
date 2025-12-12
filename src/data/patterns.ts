import type { PatternMeta } from "@/types/pattern";

export const patterns: PatternMeta[] = [
  // ---------------- GRADIENTS ----------------

  {
    id: "gradient-blue",
    name: "Blue Gradient",
    category: "gradients",
    styles: {
      background: "linear-gradient(135deg, #60a5fa, #4338ca)"
    }
  },

  {
    id: "gradient-sunset",
    name: "Sunset Glow",
    category: "gradients",
    isNew: true,
    styles: {
      background: "linear-gradient(135deg, #fb923c, #ec4899)"
    }
  },

  {
    id: "gradient-green",
    name: "Emerald Mist",
    category: "gradients",
    styles: {
      background: "linear-gradient(135deg, #10b981, #065f46)"
    }
  },

  {
    id: "gradient-midnight",
    name: "Midnight",
    category: "gradients",
    styles: {
      background: "linear-gradient(to bottom, #0f172a, #1e293b)"
    }
  },

  {
    id: "mesh-purple",
    name: "Purple Mesh",
    category: "gradients",
    styles: {
      background: "#0f0f1f",
      layers: [
        "radial-gradient(at 20% 30%, rgba(168,85,247,0.5), transparent 60%)",
        "radial-gradient(at 80% 70%, rgba(79,70,229,0.4), transparent 60%)"
      ]
    }
  },

  {
    id: "mesh-red-blue",
    name: "Red Blue Mesh",
    category: "gradients",
    styles: {
      background: "#141414",
      layers: [
        "radial-gradient(at 25% 25%, rgba(239,68,68,0.45), transparent 70%)",
        "radial-gradient(at 75% 75%, rgba(59,130,246,0.45), transparent 70%)"
      ]
    }
  },

  {
    id: "radial-sunburst",
    name: "Sunburst Radial",
    category: "gradients",
    styles: {
      background: "radial-gradient(circle at center, #fef3c7, #f59e0b)"
    }
  },

  // ---------------- GEOMETRIC ----------------

  {
    id: "dots-classic",
    name: "Dots Pattern",
    category: "geometric",
    styles: {
      background:
        "radial-gradient(circle, rgba(0,0,0,0.25) 2px, transparent 1px)",
      layers: ["repeating-linear-gradient(#0001_1px, transparent 2px)"]
    }
  },

  {
    id: "dots-light",
    name: "Soft Dots",
    category: "geometric",
    styles: {
      background:
        "radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 1px)",
      layers: ["repeating-linear-gradient(#fff2_1px, transparent 2px)"]
    }
  },

  {
    id: "grid-lines",
    name: "Grid Lines",
    category: "geometric",
    styles: {
      background:
        "linear-gradient(#0002 1px, transparent 1px), linear-gradient(90deg, #0002 1px, transparent 1px)",
      layers: [],
    }
  },

  {
    id: "grid-spaced",
    name: "Spaced Grid",
    category: "geometric",
    styles: {
      background:
        "linear-gradient(#ffffff0d 1px, transparent 1px), linear-gradient(90deg, #ffffff0d 1px, transparent 1px)",
      layers: [],
      opacity: 1,
    }
  },

  {
    id: "checkerboard",
    name: "Checkerboard",
    category: "geometric",
    styles: {
      background:
        "conic-gradient(from 0deg, #0002 90deg, #0000 90deg)",
      layers: [],
    }
  },

  {
    id: "stripes-diagonal",
    name: "Diagonal Stripes",
    category: "geometric",
    styles: {
      background:
        "repeating-linear-gradient(45deg, #555 0px, #555 12px, #222 12px, #222 24px)"
    }
  },

  // ---------------- DECORATIVE ----------------

  {
    id: "waves-soft",
    name: "Soft Waves",
    category: "decorative",
    styles: {
      background:
        "url('https://assets.codepen.io/1468070/wave-pattern.svg') center/cover"
    }
  },

  {
    id: "abstract-blobs",
    name: "Abstract Blobs",
    category: "decorative",
    styles: {
      layers: [
        "radial-gradient(at 20% 20%, rgba(239,68,68,0.4), transparent 60%)",
        "radial-gradient(at 70% 60%, rgba(96,165,250,0.4), transparent 60%)",
        "radial-gradient(at 50% 80%, rgba(52,211,153,0.4), transparent 50%)"
      ]
    }
  },

  {
    id: "soft-glass",
    name: "Soft Glass",
    category: "decorative",
    styles: {
      background: "rgba(255,255,255,0.1)",
      layers: [],
      noise: true
    }
  },

  // ---------------- EFFECTS ----------------

  {
    id: "noise-dark",
    name: "Noise Dark",
    category: "effects",
    styles: {
      background: "#111",
      noise: true
    }
  },

  {
    id: "noise-light",
    name: "Noise Light",
    category: "effects",
    styles: {
      background: "#fafafa",
      noise: true
    }
  },

  {
    id: "radial-glow",
    name: "Radial Glow",
    category: "effects",
    styles: {
      background: "#000",
      layers: [
        "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)"
      ]
    }
  },
];
