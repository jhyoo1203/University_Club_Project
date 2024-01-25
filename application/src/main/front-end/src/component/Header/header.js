import React from "react";

// Header 재사용
import HeaderRecycle from "./header_recycle";

// Header 이미지 import
import Main from "../../image/header_image/main.png";
import Club from "../../image/header_image/club.png";
import Location from "../../image/header_image/location.png";
import Event from "../../image/header_image/event.png";


function Header() {
  return (
    <header className="flex flex-col items-center mb-10">
      <div className="flex justify-center items-center space-x-10 mb-3">
        <HeaderRecycle
          href="/main"
          imageSrc={Main}
          altText="메인"
          label="메인"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={Club}
          altText="핵심 동아리"
          label="핵심 동아리"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={Location}
          altText="부스 위치"
          label="부스 위치"
        />
        <HeaderRecycle
          href="/main"
          imageSrc={Event}
          altText="이벤트"
          label="이벤트"
        />
      </div>
    </header>
  );
}

export default Header;
