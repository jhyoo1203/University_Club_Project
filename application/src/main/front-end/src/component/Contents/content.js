import React from "react";

import Main from "../Contents/Main/main.js"
import Club from "../Contents/Club/club.js"

function Content( {activeMainContent} ) {
  return (
    <div className="max-w-screen-lg container mx-auto bg-white">
      {activeMainContent === 'Main' && <Main />}
      {activeMainContent === 'Club' && <Club />}
      {/* {activeMainContent === 'Location' && <Location />}
      {activeMainContent === 'Event' && <Event />} */}
    </div>
  );
}

export default Content;
