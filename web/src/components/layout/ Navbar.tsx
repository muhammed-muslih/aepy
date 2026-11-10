import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "@/components/layout/Container";
import { navLinks } from "@/constants/Navbar";
import { Menu, X, Search, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="relative z-50 w-full bg-aepy-cream">
      <Container>
        <div className="flex h-24 w-full min-w-0 items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/images/logo/aepy_logo_transparent.png"
              alt="Aepy Bakery"
              className="w-24 object-contain sm:w-28"
            />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-8"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200 ${isActive ? "text-aepy-orange" : "text-aepy-chocolate hover:text-aepy-orange"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    {isActive && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-aepy-orange" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-5 lg:flex">
            {/* <button
              type="button"
              aria-label="Search"
              className="text-aepy-chocolate transition-colors hover:text-aepy-orange"
            >
              <Search size={23} strokeWidth={1.8} />
            </button> */}

            <button
              type="button"
              aria-label="Shopping bag"
              className="relative text-aepy-chocolate transition-colors hover:text-aepy-orange"
            >
              <ShoppingBag size={23} strokeWidth={1.8} />
              <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-aepy-orange text-[10px] text-white">
                0
              </span>
            </button>
          </div>
          {/* Mobile menu toggle */}
          <button
            type="button"
            className="text-aepy-chocolate lg:hidden transition-colors hover:text-aepy-orange"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-0 right-0 top-full w-full border-t border-aepy-chocolate/10 bg-aepy-cream px-6 py-5 shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-aepy-orange/10 text-aepy-orange"
                        : "text-aepy-chocolate hover:bg-aepy-orange/10"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
