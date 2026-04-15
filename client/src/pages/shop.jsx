import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getProducts } from "@/lib/services";
import Footer from "../sections/Footer";
import NavBar from "../sections/Navbar";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20 text-gray-500 animate-pulse">
        Loading...
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        No products found.
      </div>
    );
  }

  return (
    <>
    <NavBar />
    <section className="bg-[#F7F6F2] min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            CURATED SELECTION
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Organic Essentials
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product._id || index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-none rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">

                <div className="overflow-hidden">
                  <img
                    src={product.image || "/fallback.jpg"}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <CardContent className="p-5">

                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                    {product.category || "Organic"}
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-900 font-medium">
                      ${Number(product.price || 0).toFixed(2)}
                    </span>

                    <Button
                      size="sm"
                      className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-2 rounded-full px-4"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add
                    </Button>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}