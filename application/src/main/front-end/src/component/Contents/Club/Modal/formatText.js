import React, { useState, useEffect } from "react";

export const formatText = (text) => {
  const paragraphs = text.split("\\n\\n");

  return paragraphs.map((paragraph, pIndex) => {
    const lines = paragraph.split("\\n");
    const paragraphContent = lines.map((line, lineIndex) => {
      const parts = line.split("*").map((part, partIndex) => {
        if (partIndex % 2 === 1) {
          return (
            <span key={partIndex} style={{ fontWeight: "bold" }}>
              {part}
            </span>
          );
        }
        return part;
      });

      return (
        <React.Fragment key={lineIndex}>
          {parts}
          {lineIndex < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });

    // 각 단락을 <p> 태그로 감싸서 반환합니다.
    return <p key={pIndex}>{paragraphContent}</p>;
  });
};

export const TextComponent = ({ Content }) => {
  const maxLength = 200; // 최대 표시 길이, 필요에 따라 조정
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayContent, setDisplayContent] = useState("");

  useEffect(() => {
    if (Content.length > maxLength && !isExpanded) {
      setDisplayContent(`${Content.substring(0, maxLength)}...`);
    } else {
      setDisplayContent(Content);
    }
  }, [Content, isExpanded, maxLength]);

  return (
    <div>
      {formatText(displayContent)}
      {Content.length > maxLength && (
        <div className="flex justify-center mt-3">
          <button
            className="rounded-full font-bold bg-blue-500 text-white px-2 py-1 transition ease-in-out duration-150 mx-auto"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "⬆️ 숨기기" : "⬇️ 더 보기"}
          </button>
        </div>
      )}
    </div>
  );
};
