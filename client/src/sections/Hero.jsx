import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImg from "../images/hero.jpg"
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-[center_25%]"
        style={{
          backgroundImage: `url(${heroImg})`, // replace with your image
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          {/* Subtext */}
          <p className="text-sm text-green-700 mb-4 italic">
            Nurtured by Nature, Crafted for Life
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
            The Purest <br />
            Essence of{" "}
            <span className="text-green-700 italic">Well-being.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            Curating the world's most potent organic botanicals to restore your
            body's natural harmony and elevate your daily rituals.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Link to='/shop-page'>
              <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl">
                Shop Now
              </Button>
            </Link>
            
            <Link to='/blog-page'>
              <Button
                variant="outline"
                className="border-gray-300 px-6 py-3 rounded-xl"
              >
                Read Blog
              </Button>
            </Link>
              
          </div>
        </motion.div>
      </div>
    </section>
  );
}