"use client";

import { useLayoutEffect, useRef, useState, useEffect } from "react";
import styles from "./GameBoard.module.css";

export default function GameBoard() {
  const boardRef = useRef(null);

  const [boardSize, setBoardSize] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      console.log("resized", boardSize);
      setBoardSize(boardRef.current.offsWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={boardRef} className={styles.BoardGame}>
      {boardSize}
    </div>
  );
}
