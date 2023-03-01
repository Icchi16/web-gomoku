"use client";

import { useState } from "react";

export default function GameBoard() {
  const [boardSize, setBoarSize] = useState(0);

  return <div>This is Game Board {boardSize}</div>;
}
