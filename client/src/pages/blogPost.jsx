import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getBlogById } from "@/lib/services";


export default function SingleBlog() {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading]= useState(true);

  useEffect(() => {
    getBlogById(id)
      .then((res) => setBlog(res.data.data))
      .catch(console.error)
      .finally(()=> setLoading(false));
  }, [id]);
  

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <div className="animate-pulse text-gray-500">
          Loading...
        </div>
      </div>
    );
  }

  if(!loading && !blog){
    <div className="flex justify-center py-20 text-gray-500">
      Blog not found.
    </div>
  }

  return (
    <section className="bg-[#F7F6F2] min-h-screen px-6 md:px-12 py-16">
      <div className="max-w-4xl mx-auto">

        {/* IMAGE */}
        <motion.img
          src={blog.images?.[0]}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* META */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-gray-500 mb-2">
            {blog.category?.name || "Health"} •{" "}
            {new Date(blog.createdAt).toDateString()} •{" "}
            {blog.readTime} min read
          </p>

          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
            {blog.title}
          </h1>

          {/* EXCERPT */}
          <p className="text-lg text-gray-600 mb-10">
            {blog.exerpt}
          </p>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="prose prose-lg max-w-none text-gray-800"
        >
          {blog.content}
        </motion.div>

        {/* TAGS */}
        {blog.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {blog.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}