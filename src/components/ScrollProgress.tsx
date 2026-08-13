import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setP(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* mobile: fina linha horizontal no topo */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-transparent md:hidden"
      >
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${p * 100}%` }}
        />
      </div>

      {/* desktop: linha vertical discreta */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-1/2 right-6 z-[60] hidden h-[36vh] w-px -translate-y-1/2 bg-[color-mix(in_oklab,var(--foreground)_14%,transparent)] md:block"
      >
        <div
          className="w-px bg-primary transition-[height] duration-150 ease-out"
          style={{ height: `${p * 100}%` }}
        />
        <span className="micro absolute top-full right-0 mt-3 block text-primary">
          {String(Math.round(p * 100)).padStart(2, "0")}
        </span>
      </div>
    </>
  );
}
