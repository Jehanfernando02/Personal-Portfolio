import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const headerRef = useRef(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure header height and update on resize/scroll
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle window resize - close menu on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Navbar links
  const navLinks = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-primary shadow-lg" : "py-5 bg-gradient-to-r from-primary to-secondary"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="relative z-10">
              <h1 className="text-xl md:text-2xl font-bold text-light-text">
                Jehan Fernando
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`font-medium text-base relative transition-all duration-300 ${
                    location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                      ? "text-accent font-semibold"
                      : "text-light-text hover:text-accent"
                  }`}
                >
                  {item}
                  {/* Gradient underline for active link */}
                  {location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`) && (
                    <motion.span
                      layoutId="active-link"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  )}
                </Link>
              ))}
              {/* Download CV Link */}
              <a
                href="/assets/cv.pdf" // Path to your CV file
                download="Jehan-Fernando-CV.pdf" // Suggested filename for download
                className="font-medium text-base text-light-text hover:text-accent transition-all duration-300"
              >
                Download CV
              </a>
            </nav>

            {/* Hamburger Button */}
            <button
              className={`md:hidden relative z-10 p-2 rounded-md focus:outline-none ${
                isMenuOpen ? "opened" : ""
              }`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-light-text rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-light-text rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "mb-1.5"
                  }`}
                ></span>
                <span
                  className={`block w-6 h-0.5 bg-light-text rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 bg-primary bg-opacity-98 z-0 pt-20 md:hidden"
            >
              <div className="container mx-auto px-6">
                <motion.nav className="flex flex-col items-center">
                  {navLinks.map((item) => (
                    <motion.div
                      key={item}
                      variants={menuItemVariants}
                      className="py-4 w-full border-b border-gray-700 border-opacity-20"
                    >
                      <Link
                        to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className={`block text-center text-xl font-semibold transition-colors ${
                          location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                            ? "text-accent"
                            : "text-light-text hover:text-accent"
                        }`}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  {/* Download CV Link in Mobile Menu */}
                  <motion.div
                    variants={menuItemVariants}
                    className="py-4 w-full border-b border-gray-700 border-opacity-20"
                  >
                    <a
                      href="/assets/cv.pdf" // Path to your CV file
                      download="Jehan-Fernando-CV.pdf" // Suggested filename for download
                      className="block text-center text-xl font-semibold text-light-text hover:text-accent transition-colors"
                    >
                      Download CV
                    </a>
                  </motion.div>
                </motion.nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer div to prevent content from being hidden under the fixed header */}
      <div style={{ height: `${headerHeight}px` }}></div>
    </>
  );
}

export default Header;