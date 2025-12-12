import type { PatternStyles } from "@/types/pattern";

export function generatePatternJSX(styles: PatternStyles) {
  let code = `<div className="relative w-full h-full overflow-hidden">`;

  // Background
  if (styles.background) {
    code += `
  <div
    className="absolute inset-0"
    style={{ background: "${styles.background}" }}
  />`;
  }

  // Additional layers
  if (styles.layers && styles.layers.length > 0) {
    styles.layers.forEach((layer) => {
      code += `
  <div
    className="absolute inset-0"
    style={{ background: "${layer}" }}
  />`;
    });
  }

  // Noise layer
  if (styles.noise) {
    code += `
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
  />`;
  }

  code += `
</div>`;

  return code.trim();
}
