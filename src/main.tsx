import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "@studio-freight/lenis";
import App from "./App";
import "./index.css";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScroll />
    <App />
  </StrictMode>
);