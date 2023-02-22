import { css, Button } from "@nextui-org/react";
import styles from "./SideBar.module.css";

export const SIDEBAR_SIZE = 230;

export default function SideBar() {
  return (
    <div className={styles.SideBar}>
      <h1>Gomoku</h1>
      <Button>VS Friend</Button>
      <Button>VS Bot</Button>
      <Button>Guide</Button>
      <div>Game make by SirIcchi16</div>
    </div>
  );
}
