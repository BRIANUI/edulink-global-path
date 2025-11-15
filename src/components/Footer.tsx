import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Edu</span>
              <span className="text-2xl font-bold">Link</span>
            </div>
            <p className="text-muted-foreground">
              EduLink Worldwide — East Africa's trusted study-abroad consultancy. 15+ years of experience · Over 1,000 students placed · 99% visa success rate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Khrishna Centre, E4, 3rd Floor<br />Woodvale Grove, Westlands, Nairobi</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <span>+254 731 367 057</span>
                  <span className="text-xs">Canada: +254 704 595 341</span>
                  <span className="text-xs">Malaysia: +254 777 367 057 / +254 727 367 057</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>info@edulinkmy.com</span>
              </li>
            </ul>
          </div>

          {/* Study Destinations */}
          <div>
            <h3 className="font-semibold mb-4">Study Destinations</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/malaysia" className="text-muted-foreground hover:text-primary transition-colors">
                  Study in Malaysia
                </NavLink>
              </li>
              <li>
                <NavLink to="/canada" className="text-muted-foreground hover:text-primary transition-colors">
                  Study in Canada
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EduLink Worldwide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
