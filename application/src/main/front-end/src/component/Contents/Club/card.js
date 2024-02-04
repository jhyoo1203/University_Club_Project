import React, { useState } from "react";

import Modal from './modal';

const Card = ({ clubName, tags, initialLikes, imageUrl, iconUrl }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 하트를 클릭할 때 호출되는 함수입니다.
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1); // 이미 좋아요가 되어 있다면 하나 감소
    } else {
      setLikes(likes + 1); // 좋아요가 되어 있지 않다면 하나 증가
    }
    setIsLiked(!isLiked); // 좋아요 상태를 토글
  };

    // 모달을 여는 함수
    const openModal = () => setIsModalOpen(true);

    // 모달을 닫는 함수
    const closeModal = () => setIsModalOpen(false);
  

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-400" onDoubleClick={toggleLike} onClick={openModal}>
      <div className="max-h-48 bg-gray-200 border-b border-gray-400">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={`Club ${clubName}`}
        />
      </div>
      <div className="px-4 py-3 flex items-center">
        <img
          className="w-8 h-8 rounded-full border border-gray-500"
          src={iconUrl}
          alt="Club Icon"
        />
        <div className="font-bold text-xl flex-grow text-center -ml-5">{clubName}</div>
      </div>
      <div className="text-left px-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="px-5 pb-2 -mt-1 ">
        <button onClick={toggleLike} className="flex items-center focus:outline-none">
          {/* 조건부 렌더링을 사용하여 하트 아이콘을 토글합니다. */}
          {isLiked ? (
            <span className="text-red-500 text-2xl">♥</span>
          ) : (
            <span className="text-gray-400 text-2xl">♡</span>
          )}
          <span className="text-gray-700 text-base font-semibold ml-1">{likes}</span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {/* 모달 내용 */}
        <img src={imageUrl} alt={clubName} className="w-full max-w-xs mx-auto mt-4" />
        <h2 className="text-lg font-bold text-center mt-4">{clubName}</h2>
        <p className="text-sm text-center mt-2">
          모달 내용 {clubName}에 대한 자세한 정보...
        </p>
        {/* 태그 정보 표시 */}
        <div className="mt-4 text-center">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Card;
