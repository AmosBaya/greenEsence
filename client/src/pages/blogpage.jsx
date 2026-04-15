import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/services";
import NavBar from '../sections/Navbar'
import Footer from "../sections/Footer";

export default function BlogPage() {
 const [blogs, setBlogs] = useState([]);
 const [loading, setLoading]= useState(true);

  useEffect(() => {
    getBlogs()
      .then((res) => setBlogs(res.data.data))
      .catch(console.error);
  }, []);

  const filtered = blogs.filter(
    (b) => b.status === "published" && !b.isDeleted
  );

  const featured = filtered[0];
  const secondary = filtered[1];
  const rest = filtered.slice(2);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-pulse text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  if(!loading && !blogs){
    return(
      <div className="flex justify-center py-20 text-gray-500">
        No Blogs found.
      </div>
    )
  }

  return (
    <>
    <NavBar />
    <section className="bg-[#F7F6F2] min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest text-gray-500 mb-3">
            INSIGHTS & RITUALS
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900">
            Our Health Blog
          </h1>

          <div className="w-16 h-[2px] bg-green-700 mx-auto mt-4" />
        </div>

        {/* CATEGORIES SECTION */}
        <div className="flex justify-center gap-3 mb-14 flex-wrap">
          {["All", "Nutrition", "Wellness", "Lifestyle"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full text-sm bg-white text-gray-700 hover:bg-green-700 hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED SECTION */}
        {featured && (
          <div className="grid lg:grid-cols-3 gap-10 mb-16">

            {/* BIG FEATURED BLOG IMAGE*/}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2"
            >
              <Card className="overflow-hidden rounded-2xl border-none bg-transparent">
                <img
                  src={featured.images?.[0]}
                  className="w-full h-[400px] object-cover rounded-2xl"
                />

                <CardContent className="pt-6 px-0">
                  <p className="text-sm text-gray-500 mb-2">
                    {new Date(featured.createdAt).toDateString()} •{" "}
                    {featured.readTime} min read
                  </p>

                  <h2 className="text-2xl font-semibold mb-3 text-gray-900">
                    {featured.title}
                  </h2>

                  <p className="text-gray-600 mb-4">
                    {featured.exerpt}
                  </p>

                  <Button variant="link" className="px-0 text-green-700">
                    Read Full Article →
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* SIDE FEATURED BLOG */}
            {secondary && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="overflow-hidden rounded-2xl border-none bg-white shadow-sm">
                  <img
                    src={secondary.images?.[0]}
                    className="w-full h-[220px] object-cover"
                  />

                  <CardContent>
                    <p className="text-xs text-gray-500 mb-2">
                      {new Date(secondary.createdAt).toDateString()} •{" "}
                      {secondary.readTime} min read
                    </p>

                    <h3 className="font-semibold text-lg mb-2">
                      {secondary.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {secondary.exerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        )}

        {/*ALL OTHER GRID BLOGS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rest.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-none bg-white rounded-2xl overflow-hidden hover:shadow-md transition">

                <img
                  src={blog.images?.[0]}
                  className="w-full h-56 object-cover"
                />

                <CardContent>
                  <p className="text-xs text-gray-500 mb-2">
                    {new Date(blog.createdAt).toDateString()} •{" "}
                    {blog.readTime} min read
                  </p>

                  <h3 className="font-semibold text-lg mb-2 text-gray-900">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {blog.exerpt}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* LOAD MORE */}
        <div className="flex justify-center mt-16">
          <Button className="bg-green-700 hover:bg-green-800 rounded-full px-8">
            Load Older Posts
          </Button>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}