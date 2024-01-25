import React from "react";

import Instagram from "../../image/footer_image/instagram.png";
import Youtube from "../../image/footer_image/youtube.png";

function Footer() {
  return (
    <footer className="flex flex-col items-center mt-10 mb-10 bg-slate-800 text-white">
      <div className="flex space-x-4 mt-5">
        <img src={Instagram} alt="Instagram" className="h-8 w-8" />
        <img src={Youtube} alt="Youtube" className="h-8 w-8" />
      </div>

      <p className="mt-4">
        강릉원주대학교 원주 캠퍼스 | TEL : 033-642-7001
      </p>

      <p className="mt-4 mb-5">
        Copyright D:D:D 2024. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;