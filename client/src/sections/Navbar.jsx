import { ShoppingCartIcon } from "lucide-react";
import { useId } from "react";

import Logo from "../components/logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Updated navigation links
const navigationLinks = [
  { active: true, href: "#", label: "Home" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Shop" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
];

export default function Component() {
  const id = useId();

  return (
    <header className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        
        {/* Left side */}
        <div className="flex flex-1 items-center gap-2">
          
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-40 p-2 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-1">
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem className="w-full" key={link.label}>
                      <NavigationMenuLink
                        active={link.active}
                        className="py-2 px-2"
                        href={link.href}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

          {/* Logo */}
          <div className="flex items-center">
            <a className="text-primary hover:text-primary/90" href="#">
              <Logo />
            </a>
          </div>
        </div>

        {/* Middle navigation */}
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-6">
            {navigationLinks.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink
                  active={link.active}
                  className="font-medium text-foreground hover:text-primary"
                  href={link.href}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <Button className="flex items-center gap-2 bg-orange-600">
            <ShoppingCartIcon size={18} />
            <span className="hidden md:inline">Shop Now</span>
        </Button>
     </div>

      </div>
    </header>
  );
}

