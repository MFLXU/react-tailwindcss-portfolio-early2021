import React from "react";

function Loading() {
  return (
    <div className="w-full h-[100vh] z-[1000] fixed top-0 bg-indigo-600 flex items-center justify-center loading">
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        
       <p id="lt-1" className="text-4xl font-extrabold text-white text-center opacity-0">Hola</p>
       <p id="lt-2" className="text-4xl font-extrabold text-white text-center opacity-0">مرحبًا</p>
       <p id="lt-3" className="text-4xl font-extrabold text-white text-center opacity-0">Bonjour</p>
       <p id="lt-4" className="scaleUp text-7xl font-extrabold text-white text-center opacity-0">Hello</p>
       <p id="lt-5" className="text-4xl font-extrabold text-white text-center opacity-0">Привет</p>
       <p id="lt-6" className="text-4xl font-extrabold text-white text-center opacity-0">你好</p>
       <p id="lt-7" className="text-4xl font-extrabold text-white text-center opacity-0">नमस्ते</p>
      </div>
    </div>
  );
}

export default Loading;
