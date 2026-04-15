import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Minus, Plus, Heart } from "lucide-react";


export default function ProductDetail(){
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data.data))
      .catch(console.error)
      .finally(()=> setLoading(false))
  }, [id]);

  if(loading){
    return(
      <div className="flex justify-center py-20">
        <div className="animate-pulse text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  if (!product && !loading) {
    return (
      <div className="flex justify-center py-20 text-gray-500">
        Product not found.
      </div>
    );
  }
  
  return (
    <section className="bg-[#F7F6F2] min-h-screen px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT: IMAGES */}
          <div>
            <motion.img
              src={product.images?.[activeImage] || product.image}
              className="w-full h-[500px] object-cover rounded-2xl mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />

            {/* THUMBNAILS */}
            <div className="flex gap-3">
              {(product.images || [product.image]).map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    activeImage === i ? "border-green-700" : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="flex flex-col justify-center">

            {/* CATEGORY */}
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              {product.category || "Organic Skincare"}
            </p>

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* PRICE */}
            <p className="text-2xl text-gray-900 mb-4">
              ${product.price.toFixed(2)}
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>

            {/* QUANTITY */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border rounded-full px-4 py-2">
                <button onClick={() => setQty(Math.max(1, qty - 1))}>
                  <Minus size={16} />
                </button>

                <span className="mx-4">{qty}</span>

                <button onClick={() => setQty(qty + 1)}>
                  <Plus size={16} />
                </button>
              </div>

              <Button className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8">
                Add to Cart
              </Button>
            </div>

            {/* WISHLIST */}
            <button className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Heart className="w-4 h-4" />
              Save to Wishlist
            </button>

            {/* FEATURES */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-4 rounded-xl text-center text-sm">
                🌿 100% Organic
              </div>
              <div className="bg-white p-4 rounded-xl text-center text-sm">
                🐰 Cruelty Free
              </div>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-16 max-w-4xl">

          <div className="flex gap-6 border-b mb-6 text-sm">
            <button className="pb-2 border-b-2 border-green-700">
              Description
            </button>
            <button className="pb-2 text-gray-500">
              Benefits
            </button>
            <button className="pb-2 text-gray-500">
              How to Use
            </button>
          </div>

          {/* CONTENT */}
          <div className="text-gray-700 leading-relaxed">
            {product.longDescription ||
              "Crafted with natural botanical extracts, this product is designed to restore balance, nourish the body, and promote overall wellness. Carefully formulated to deliver visible and lasting results."}
          </div>

          {/* EXTRA INFO */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-4 rounded-xl">
              🌲 <strong>Natural Extracts</strong>
              <p className="text-sm text-gray-600 mt-1">
                Supports skin vitality and rejuvenation.
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl">
              💧 <strong>Deep Hydration</strong>
              <p className="text-sm text-gray-600 mt-1">
                Locks in moisture and improves texture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}