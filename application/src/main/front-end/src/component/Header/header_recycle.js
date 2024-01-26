import React from "react"

function HeaderRecycle({ onClick, imageSrc, altText, label }) {
    return(
        <div onClick={onClick} className="flex flex-col items-center">
        <div className="rounded-full p-[2px] mb-1 bg-gradient-to-r from-story-start via-story-middle to-story-end">
          <div className="rounded-full bg-white w-12 h-12 overflow-hidden flex justify-center items-center">
            <img
              src={imageSrc}
              alt={altText}
              className="w-8 h-8 object-cover"
            />
          </div>
        </div>
        <span className="text-xs font-medium">{label}</span>
      </div> 
    )
}

export default HeaderRecycle;