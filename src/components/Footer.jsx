import two from "../assets/two.jpeg";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="px-5 dark:bg-gray-900 dark:text-white pb-9">
      <div className="flex justify-center items-center pt-16 gap-3 ">
        <img className="w-12 h-12 rounded-full" src={two} alt="loading" />
        <p className="font-bold text-xl">GlowWithDanu</p>
      </div>
      <p className="text-center mt-4">copyright &#169; 2023 glowWithDanu.com</p>
      <div className="flex gap-4 text-2xl justify-center mt-2 mb-6">
        <AiOutlineFacebook />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
        <AiOutlineLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
