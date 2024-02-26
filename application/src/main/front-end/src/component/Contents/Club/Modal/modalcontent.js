import React, { useState, useEffect } from "react";
import axios from "axios";

import SwiperImage from "./swiperimage";
import { TextComponent } from "./formatText";

const ModalContents = ({ clubId, tags }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8080/${clubId}/club/modal`)
      .then((Response) => {
        setData(Response.data);
        setIsLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
        setIsLoading(false);
      });
  }, [clubId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px]">
      {/* 이미지 슬라이드 */}
      <div>
        <SwiperImage modalImage={data.modalImage} />
      </div>

      {/* 부스 (제목) */}
      <p className="text-xl text-center font-bold mt-5">{data.modalTitle}</p>

      {/* 부스 (내용) */}
      <div className="px-4 pt-2">
          <TextComponent Content={data.modalContents} />
      </div>

      {/* 하단 태그 */}
      <div className="ml-3 text-left">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block px-1 text-sm font-semibold text-blue-700 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* 하단 버튼 */}
      {/* [추가] 위치 추가 시 버튼 연결 작업 */}
      <div className="flex justify-center space-x-3 mt-2 mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-9 rounded-full">
          부스 위치
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-9 rounded-full">
          부원 모집
        </button>
      </div>
    </div>
  );
};

export default ModalContents;
