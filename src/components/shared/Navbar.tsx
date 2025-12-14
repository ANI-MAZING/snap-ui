import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/store/useThemeStore";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Patterns", path: "/pattern" },
  { name: "Favorites", path: "/favorite" },
];

export const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          SnapUI
        </Link>

        {/* DESKTOP NAV */}
        {/* Render desktop nav only on non-mobile widths to avoid mobile sheet staying active */}
        <nav className="hidden md:flex gap-6 items-center" aria-hidden>
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-primary underline underline-offset-4"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* MOBILE NAV - only render when viewport is small to avoid false-active state */}
        {typeof window !== "undefined" && (
          <MobileSheetNav onToggleTheme={toggleTheme} theme={theme} location={location} />
        )}
      </div>
    </header>
  );
};

const MobileSheetNav = ({
  onToggleTheme,
  theme,
  location,
}: {
  onToggleTheme: () => void;
  theme: string | undefined;
  location: ReturnType<typeof useLocation>;
}) => {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 767px)").matches : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    // modern API
    if (mql.addEventListener) mql.addEventListener("change", handler);
    else mql.addListener(handler as any);
    // sync
    setIsMobile(mql.matches);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", handler);
      else mql.removeListener(handler as any);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6" />
      </SheetTrigger>
      <SheetContent className="w-64 flex flex-col gap-6 py-10">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-medium ${active ? "text-primary" : "text-foreground"}`}
            >
              {item.name}
            </Link>
          );
        })}

        {/* Theme Toggle */}
        <Button variant="outline" onClick={onToggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </SheetContent>
    </Sheet>
  );
};
