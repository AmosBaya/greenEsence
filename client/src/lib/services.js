import api from "./api";

// BLOGS ROUTES
export const getBlogs = () => api.get("/blogs");

export const getBlogById = (id) => api.get(`/blogs/${id}`);

// PRODUCTS ROUTES
export const getProducts = () => api.get("/products");

export const getProductById = (id) => api.get(`/products/${id}`);