import * as React from "react";
import styles from "./TruncatedText.module.css";

interface OwnProps {
  children: string;
  maxWidth?: string | number;
}

const TruncatedText = (props: OwnProps) => (
  <div
    title={props.children}
    className={styles.text}
    style={{
      maxWidth: props.maxWidth
    }}
  >
    <text>{props.children}</text>
  </div>
);

export default TruncatedText;
