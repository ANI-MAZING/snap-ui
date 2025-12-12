import { useState } from "react";

export function useCopy() {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Reset after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return { copied, copy };
}
