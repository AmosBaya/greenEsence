import BlogPage from './pages/blogpage';
import HomePage from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from './pages/productDetail';
import ShopPage from './pages/shop';
import SingleBlog from './pages/blogPost';

function App() {
  return (
    <>

     <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/blog-page' element={ <BlogPage />}/>
          <Route path='/shop-page' element={ <ShopPage />}/>
          <Route path='/single-blog' element={ <SingleBlog />}/>
          <Route path='/product-details' element={<ProductDetail/>}/>
        </Routes>
     </BrowserRouter>


    </>
  )
}

export default App
