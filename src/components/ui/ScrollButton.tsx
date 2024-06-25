"use client";

import { useState, useEffect } from "react";
import { ChevronsUp } from "lucide-react";

export default function ScrollButton() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > window.innerHeight * 0.6) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= window.innerHeight * 0.6) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className="fixed bottom-6 right-6 z-50" id="scrollbtn">
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="backdrop-blur-xl duration-150 border-2 border-[#1fbeda] hover:text-white hover:bg-[#1fbeda] hover:shadow-lg hover:shadow-[#1fbeda] red-text rounded-xl p-2 shadow-md"
        >
          <ChevronsUp size={24} />
        </button>
      )}
    </div>
  );
}
