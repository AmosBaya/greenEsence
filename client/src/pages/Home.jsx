import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import BlogSection from '../sections/BlogIntro'
import ProductSection from '../sections/ProductsSection'

export default function HomePage(){
    return(
        <div>
            <Navbar />
            <Hero />
            <BlogSection />
            <ProductSection />
            <Footer/>
        </div>
    )
}