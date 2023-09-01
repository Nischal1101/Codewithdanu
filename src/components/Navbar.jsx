import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import Hero from "./Hero";
import { useContext, useState } from "react";
import context from "../context/Context";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const menu = useContext(context);
  return (
    <main className={darkMode ? "dark" : ""}>
      <nav className="shadow-xl text-[#8229d0] px-2 dark:bg-gray-900">
        <div className="flex justify-between  py-6 items-center font-bold ">
          <div className="flex gap-3 items-center">
            <p>
              <span className="font-bold">&lt;/&gt;</span>GlowWithDanu
            </p>
            <div className="flex items-center">
              <button
                onClick={() => {
                  console.log(menu.meuOn);
                  menu.setMenuOn(!menu.menuOn);
                }}
                className="flex  items-center"
              >
                Menu
              </button>
              <MdArrowDropDown className="" size={30} />
            </div>

            <div>
              <BsFillMoonStarsFill
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
              />
            </div>
          </div>
          <button className="bg-[#6b21a8] py-1.5 px-3 rounded-xl text-white">
            Login
          </button>
        </div>
        <hr className="" />
        <div className="flex justify-between py-2 text-2xl">
          <AiFillHome onClick={()=>menu.setMenuOn(false)}/>
          <AiOutlineSearch />
        </div>
      </nav>
      <Hero />
    </main>
  );
};

export default Navbar;
