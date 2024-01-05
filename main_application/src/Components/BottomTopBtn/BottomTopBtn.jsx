import React, { useState, useEffect } from "react";
import "./BottomTopBtn.css";

const BottomTopBtn = () => {
  const [TopBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {TopBtn && (
        <button onClick={scrollUp} className="Top-btn">
          ^
        </button>
      )}
    </div>
  );
};

export default BottomTopBtn;
