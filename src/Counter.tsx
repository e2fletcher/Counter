import React from "react";

import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <button
      className={styles.button}
      onClick={() => setCount((count) => count + 1)}
    >
      Contador {count}
    </button>
  );
}
