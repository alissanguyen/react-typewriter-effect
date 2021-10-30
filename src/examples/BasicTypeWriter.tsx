import * as React from "react";
import { useTypewriter } from "../useTypewriter";
import "./custom.css";

const BasicTypewriter: React.FC = () => {
  const targetText =
    "Welcome to React Typewriter. This is a basic typewriter. You can also display emojis, like this 😜🤩🥳😍!";
  const { textValue: typedText } = useTypewriter({
    targetText: targetText,
    typingDelayMillis: 50,
  });

  return <div className="basic-typewriter">{typedText}</div>;
};

export default BasicTypewriter;
