// REVIEWED: 2024-03-22 by [Oh Yeon Taek]
import React, { useState } from "react";

import Feed from "./feed.js";
import Banner from "component/Recycle/banner";

function Club() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const categories = ["전체", "공연", "체육", "취미", "종교", "기타"];

  // 데이터 치환
  const categoryMapping = {
    "전체": "all",
    "공연": "1",
    "체육": "2",
    "취미": "3",
    "종교": "4",
    "기타": "5"
  };

  return (
    <div className="flex flex-col items-center">
      
      {/* 배너 */}
      <Banner
        title="🎊 축제 참여 동아리 목록"
        subtitle="궁금한 동아리 피드를 클릭해보자! 👋"
      />

      {/* 동아리 분류 선택 */}
      <div className="flex justify-center space-x-1.5 mb-1">
        {categories.map((category) => (

          // 선택X
          <div
            key={category}
            className={`relative text-center cursor-pointer px-3 py-2 ${
              selectedCategory === category ? "font-bold text-lg" : "text-lg text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}

            {/* 선택 O */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1 mx-auto w-full ${
                selectedCategory === category ? "bg-black drop-shadow-md" : "bg-transparent"
              }`}
              style={{ marginBottom: "-1px" }}
            />
          </div>
        ))}
      </div>

      <Feed category={categoryMapping[selectedCategory] || selectedCategory} />
    </div>
  );
}
export default Club;
