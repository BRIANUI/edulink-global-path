import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import logo from "@/assets/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="EduLink Logo" className="h-16 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink
              to="/programs"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Programs
            </NavLink>
            <NavLink
              to="/malaysia"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Malaysia
            </NavLink>
            <NavLink
              to="/canada"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Canada
            </NavLink>
            <NavLink
              to="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
              activeClassName="text-primary"
            >
              Contact
            </NavLink>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="flex flex-col items-end mr-2">
              <Button
                size="sm"
                className="bg-accent hover:bg-accent/90"
                onClick={() => window.open("https://wa.me/254731367057?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20abroad.", "_blank")}
              >
                Get a Free 3-Minute Review
              </Button>
              <span className="text-xs text-muted-foreground mt-1">All services are 100% FREE — no hidden fees.</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <NavLink
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/programs"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </NavLink>
            <NavLink
              to="/malaysia"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Malaysia
            </NavLink>
            <NavLink
              to="/canada"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Canada
            </NavLink>
            <NavLink
              to="/about"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/blog"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <div className="pt-4 space-y-2">
              <Button
                className="w-full bg-accent hover:bg-accent/90"
                onClick={() => {
                  window.open("https://wa.me/254731367057?text=Hi%20EduLink%2C%20I%27m%20interested%20in%20studying%20abroad.", "_blank");
                  setIsOpen(false);
                }}
              >
                Get a Free 3-Minute Review
              </Button>
              <span className="text-xs text-muted-foreground text-center block">All services are 100% FREE — no hidden fees.</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
