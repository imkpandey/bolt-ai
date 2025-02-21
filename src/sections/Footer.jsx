import LogoIcon from "@/assets/logo.svg";
import XSocial from "@/assets/social-x.svg";
import InstaSocial from "@/assets/social-instagram.svg";
import YTSocial from "@/assets/social-youtube.svg";
const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15 bg-black">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 bg-black">
          <div className="flex gap-2 items-center lg:flex-1">
            <LogoIcon className="w-6 h-6" />
            <div className="font-medium">Bolt AI</div>
          </div>
          <nav className="flex flex-col lg:flex-row gap-5 lg-gap-7 lg:flex-1 lg:justify-center">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
          </nav>
          <div className="flex gap-5 lg:flex-1 lg:justify-end">
            <XSocial className="text-white/40 hover:text-white transition" />
            <InstaSocial className="text-white/40 hover:text-white transition" />
            <YTSocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
