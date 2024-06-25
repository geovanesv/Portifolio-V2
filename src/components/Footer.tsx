import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white body-font backdrop-blur-lg bg-transparent md:h-[10vh]">
      <div className="md:px-[15%] py-6 md:py-0 mx-auto flex items-center sm:flex-row flex-col font-thin">
        <Link
          href="/"
          className="hidden md:flex title-font font-medium items-center md:justify-start justify-center"
        >
          <span className="ml-3 text-xl">Geovane Araujo</span>
        </Link>
        <p className="text-gray-500 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:py-2 sm:mt-0 mt-4">
          © 2024 
          {/* <span className="red-text">Gs</span> */}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-3">
          
          <Link
            href="https://github.com/geovanesv"
            target="_blank"
            className="hover:text-[#1fbeda]"
          >
            <i className="uil uil-github text-2xl"></i>
          </Link>

          <Link
            href="https://www.linkedin.com/in/geovanesaraujo/"
            target="_blank"
            className="hover:text-[#1fbeda]"
          >
            <i className="uil uil-linkedin text-2xl"></i>
          </Link>
          
          <Link
            href="https://www.instagram.com/_geovane_araujo_/"
            className="hover:text-[#1fbeda]"
            target="_blank"
          >
            <i className="uil uil-instagram text-2xl"></i>
          </Link>
          
          
          <Link
            href="https://twitter.com/Geovane_ofc206"
            target="_blank"
            className="hover:text-[#1fbeda]"
          >
            <i className="uil uil-twitter text-2xl"></i>
          </Link>

        </span>
      </div>
    </footer>
  );
};

export default Footer;
