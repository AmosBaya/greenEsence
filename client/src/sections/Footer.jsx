import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Green Escence Organics
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Nurturing your health naturally through organic remedies, wellness
            products, and trusted health insights.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebook className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer" />
            <FaTwitter className="w-5 h-5 hover:text-white cursor-pointer" />
          </div>
        </div>
        

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: support@greenescence.com</li>
            <li>Phone: +254 700 000000</li>
            <li>Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-medium mb-4">
            Join the Organic Circle
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Get exclusive wellness tips and offers.
          </p>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
            />
            <Button className="bg-green-700 hover:bg-green-800">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500 px-6">
        <p>
          © {new Date().getFullYear()} Green Escence Organics. All rights reserved.
        </p>

        <p className="mt-2 max-w-2xl mx-auto text-xs text-gray-600">
          Disclaimer: This website provides health-related information for
          educational purposes only and is not a substitute for professional
          medical advice.
        </p>
      </div>
    </footer>
  );
}