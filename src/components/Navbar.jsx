import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Code, Palette, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { toast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, changeTheme } = useTheme();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Services', href: '/services' },
    { name: 'Internship', href: '/internship', icon: Briefcase },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const themeButtons = [
    { name: 'Green', value: 'default', color: 'bg-green-500' },
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Black', value: 'black', color: 'bg-gray-900' },
  ];

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    toast({
      title: "Theme Changed!",
      description: `Switched to ${newTheme === 'default' ? 'Green' : newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} theme`,
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-8 w-8 text-green-500" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl font-bold gradient-text">logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary flex items-center space-x-1 ${
                  location.pathname === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
                <span>{item.name}</span>
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher */}
            <div className="hidden sm:flex items-center space-x-2">
              <Palette className="h-4 w-4 text-muted-foreground" />
              {themeButtons.map((themeBtn) => (
                <button
                  key={themeBtn.value}
                  onClick={() => handleThemeChange(themeBtn.value)}
                  className={`w-6 h-6 rounded-full border-2 transition-all hover:scale-110 ${
                    themeBtn.color
                  } ${
                    theme === themeBtn.value
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border'
                  }`}
                  title={`Switch to ${themeBtn.name} theme`}
                />
              ))}
            </div>

            {/* Get Website CTA */}
            <Button asChild className="hidden sm:inline-flex">
              <Link to="/contact">Get a Website</Link>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Theme Switcher */}
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-muted-foreground mb-2">Theme</p>
                <div className="flex space-x-2">
                  {themeButtons.map((themeBtn) => (
                    <button
                      key={themeBtn.value}
                      onClick={() => {
                        handleThemeChange(themeBtn.value);
                        setIsOpen(false);
                      }}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        themeBtn.color
                      } ${
                        theme === themeBtn.value
                          ? 'border-primary ring-2 ring-primary/20'
                          : 'border-border'
                      }`}
                      title={`Switch to ${themeBtn.name} theme`}
                    />
                  ))}
                </div>
              </div>

              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get a Website
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;