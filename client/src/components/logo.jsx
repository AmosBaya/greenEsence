import logo from "../images/essenceLogo.png";
import words from "../images/essenceWords.png"


export default function Logo() {
 return (
  <div className="flex items-center gap-2 p-6">
    <img
      src={logo}
      alt="Logo"
      className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain"
    />
    <img
      src={words}
      alt="Logo words"
      className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain"
    />
  </div>
 );
}
