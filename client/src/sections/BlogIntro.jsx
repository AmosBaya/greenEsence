import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function BlogSection({ blogs = [] }) {
  const visibleBlogs = blogs
    .filter((blog) => blog.status === "published" && !blog.isDeleted)
    .slice(0, 6);

  // Container animation (stagger children)
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // Card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Title Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-12"
        >
          Latest Articles
        </motion.h2>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {visibleBlogs.map((blog) => (
            <motion.div key={blog._id} variants={item}>
              <Card className="bg-transparent border-none overflow-hidden group cursor-pointer">

                {/* Image */}
                <div className="relative h-60 rounded-xl overflow-hidden">
                  <img
                    src={blog.images?.[0] || "/fallback.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <CardContent className="pt-6 px-0">

                  {/* Category + Date */}
                  <p className="text-sm text-gray-400 mb-2">
                    {blog.category?.name || "Health"} —{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold leading-snug mb-3 transition group-hover:text-green-400">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {blog.exerpt}
                  </p>

                  {/* Read Time */}
                  <p className="text-xs text-gray-500">
                    {blog.readTime} min read
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}