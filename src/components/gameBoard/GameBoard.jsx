"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";

export default function GameBoard() {
  const boardRef = useRef(null);

  const [boardSize, setBoardSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setBoardSize(boardRef.current.clientWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={boardRef}>{boardSize}</div>;
}
