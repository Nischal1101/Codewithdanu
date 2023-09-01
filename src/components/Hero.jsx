import Typed from "react-typed";
import one from "../assets/one.jpeg";
import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import Footer from "./Footer";
import context from "../context/Context";
import { useContext } from "react";

const Hero = () => {
  const menu = useContext(context);
  const items = [
    {
      image: one,
      topic: " Being Handsome tutorial-100 Days of learning.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut,vero quis, est modi quia, iusto fugiat corrupti deserunt sit quasi numquam non eum ab tempora ducimus enim reprehenderit sapiente voluptatum reiciendis inventore accusamus.",
    },
    {
      image: two,
      topic: " Being Nice guy tutorial-20 Days of learning.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut,vero quis, est modi quia, iusto fugiat corrupti deserunt sit quasi numquam non eum ab tempora ducimus enim reprehenderit sapiente voluptatum reiciendis inventore accusamus.",
    },
    {
      image: three,
      topic: " Being Machine learner tutorial-100 Years of learning.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ut,vero quis, est modi quia, iusto fugiat corrupti deserunt sit quasi numquam non eum ab tempora ducimus enim reprehenderit sapiente voluptatum reiciendis inventore accusamus.",
    },
  ];
  return (
    <div>
      <section
        className={`${
          !menu.menuOn ? "px-12" : ""
        }  dark:bg-gray-900 dark:text-white`}
      >
        {menu.menuOn ? (
          <div className=" flex justify-center  pb-8 bg-[#f3e8ff] dark:bg-[#677589]">
            <ul className="mt-8 font-semibold text-[#a855f7]">
              <li>Home</li>
              <li>Courses</li>
              <li>Tutorial</li>
              <li>Blog</li>
              <li>Notes</li>
              <li>Contact</li>
              <li>My Gear</li>
              <li>Work With Us</li>
            </ul>
          </div>
        ) : (
          <div className="pt-16 text-center leading-8">
            <h1 className="text-3xl font-semibold">
              Welcome to{" "}
              <span className="text-4xl font-semibold text-[#8229d0] ">
                GlowWithDanu
              </span>{" "}
            </h1>
            <h4 className="font-semibold text-lg mt-2">
              Get{" "}
              <Typed
                className=" text-[#8321d9]  "
                strings={[
                  "Beautiful Face",
                  "Glowing skin",
                  "Rich height",
                  "Nasalu eyes",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              ></Typed>
            </h4>
            <p className="mt-5 ">
              Are you not Handsome like me? Confused on which course to take? I
              have got you covered. Browse courses and find out the best course
              for you. Its free! Glow with Danu is my attempt to teach basics
              and those glowing techniques to people in short time which took me
              ages to built.
            </p>
            <div className="flex gap-3 justify-center mt-6 font-semibold">
              <button className="py-0.5 px-3 bg-[#020304] text-white rounded dark:bg-[#b9c3d5] dark:text-black">
                Free Courses
              </button>
              <button className="py-0.5 px-3 bg-[#9ca3af] rounded dark:text-black">
                Explore Blog
              </button>
            </div>
          </div>
        )}

        <div className={`mt-16 ${menu.menuOn ? "px-12" : ""} `}>
          <h1 className="text-4xl text-center">Recommended Courses</h1>
          <div>
            {items.map((item, index) => (
              <div
                key={index}
                className=" mt-16 shadow-2xl rounded-3xl dark:bg-[#1e293b]"
              >
                <img
                  className="object-contain w-full object-center rounded-t-3xl "
                  src={item.image}
                  alt="loading"
                />
                <p className="ml-4">Free Course</p>
                <h2 className="ml-4 font-semibold text-xl">{item.topic}</h2>
                <p className="ml-4">{item.description}</p>
                <div className="mt-8  ml-4 ">
                  <button className=" bg-[#9333ea] px-3 rounded-3xl py-1.5 text-white font-semibold mb-6">
                    Start watching
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hero;
