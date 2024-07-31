import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <header className="bg-white text-black py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
          <div className="flex items-center justify-center space-x-2.5">
            <img
              src="/imageLogo.svg"
              alt="logo"
              className="w-[40px] h-[40px]"
            />
            <h1 className="text-xl font-bold">
              <span style={{ color: "indigo" }}>Talk</span> business
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-start items-center space-x-4">
            <Link className="hover:text-gray-500 transition-colors" href="/">
              Home
            </Link>
            <Link
              className="hover:text-gray-500 transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-gray-500 transition-colors"
              href="/*"
            >
              Services
            </Link>
            <Link
              className="hover:text-gray-500 transition-colors"
              href="/*"
            >
              System
            </Link>
            <button className="btn btn-outline btn-secondary">
              Contact us
            </button>
          </nav>
        </div>
      </header>
      <main className="flex flex-col gap-4 p-4 md:p-0">
        <div className="flex items-center justify-center text-center">
          <h1 className="my-16 text-2xl md:text-4xl w-full md:w-[500px] h-auto md:h-[50px]">
            Agile focused business services and more.
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="px-4 md:px-[20rem] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Perspiciatis quae officiis autem numquam cumque provident ipsa At illo autem repudiandae aut eum ipsam voluptatum magnam eos dolorem quam soluta eius vitae sunt placeat quod ab quis nesciunt nostrum eaque nihil quas cumque aliquam Quaerat eligendi facilis reiciendis quae qui nemo consequuntur voluptas nobis aliquam cupiditate molestias corporis suscipit ipsum dolores itaque Possimus minima vel aperiam maxime natus cupiditate magni aut praesentium voluptas alias quaerat nemo asperiores molestias Deserunt recusandae dicta rem harum quod reiciendis mollitia asperiores fugit animi blanditiis Qui iure vero pariatur quaerat expedita nemo nam autem repellat impedit
          </p>
          <img
            className="w-full"
            src="/imageofbg2.svg"
            alt="working on computer"
          />
          <p className="px-4 md:px-[20rem] text-justify my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Perspiciatis quae officiis autem numquam cumque provident ipsa At illo autem repudiandae aut eum ipsam voluptatum magnam eos dolorem quam soluta eius vitae sunt placeat quod ab quis nesciunt nostrum eaque nihil quas cumque aliquam Quaerat eligendi facilis reiciendis quae qui nemo consequuntur voluptas nobis aliquam cupiditate molestias corporis suscipit ipsum dolores itaque Possimus minima vel aperiam maxime natus cupiditate magni aut praesentium voluptas alias quaerat nemo asperiores molestias Deserunt recusandae dicta rem harum quod reiciendis mollitia asperiores fugit animi blanditiis Qui iure vero pariatur quaerat expedita nemo nam autem repellat impedit
          </p>
        </div>
      </main>
      <footer
        style={{ backgroundColor: "#160530" }}
        className="pt-12 pb-8 bg-darkBg"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="max-w-full md:max-w-[575px] mb-4 md:mb-0">
              <h3 className="text-4xl md:text-[58px] font-semibold leading-snug md:leading-[70px] text-[#f2f2f2] mb-2">
                Let’s start working to build a brighter future.
              </h3>
              <p className="text-[16px] leading-[28px] text-[#f2f2f2] mb-8 md:mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Elementum posuere eget elementum vulputate elementum viverra
                sapien tellus aenean.
              </p>
              <span className="text-[16px] font-bold leading-[21px] text-[#f2f2f2]">
                Fb In Tw Ln
              </span>
            </div>
            <form className="w-full md:w-auto flex flex-col md:flex-row md:min-w-[450px] border border-[#E0CFFC]">
              <input
                type="text"
                className="flex-grow px-6 py-4 bg-transparent outline-none text-[#f2f2f2] placeholder:text-[20px]"
                placeholder="Join our mailing list"
              />
              <button
                type="submit"
                className="text-[#f2f2f2] bg-transparent py-4 px-6"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-32">
            <Link href="/" className="inline-block mb-4 md:mb-0">
              <Image src="/footer-logo.svg" alt="logo" width={200} height={40} />
            </Link>
            <p className="text-[14px] leading-[38px] text-[#f2f2f2]">
              Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

