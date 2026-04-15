import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "../images/hero.jpg"

export default function ProductSection({ products = [] }) {
  const visibleProducts = products.slice(0, 4);

  return (
    <section className="bg-[#F7F6F2] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Editor’s Choice
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Hand-selected for potency and purity
            </p>
          </div>

          <button className="text-sm text-gray-700 hover:text-green-700 transition">
            View All Products →
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-transparent group cursor-pointer">

                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={product.image ||   heroImg}
                    alt={product.name}
                    className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <CardContent className="px-0 pt-4">

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-gray-500 mb-3">
                    {product.description}
                  </p>

                  {/* Bottom Row */}
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      ${product.price}
                    </span>

                    <Button
                      variant="ghost"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
