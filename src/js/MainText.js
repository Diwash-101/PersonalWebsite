import "./MainText.css";
import React, { useState, useEffect } from "react";

const Typewriter = ({ texts }) => {
  const [currentText, setCurrentText] = useState(texts[0][0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [sleepTime, setSleepTime] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentText === texts[currentIndex]) {
        // If the current text is complete, start deleting
        // TODO: Implement a delay here
        setSleepTime(500);
        setIsDeleting(true);
      } else if (currentText.length === 0 && isDeleting) {
        // If the current text is fully deleted and the deletion is in progress,
        // move to the next text and stop deleting
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }

      if (isDeleting) {
        // Delete the next character from the current text
        setSleepTime(100);
        const newText = texts[currentIndex].substring(
          0,
          currentText.length - 1
        );
        setCurrentText(newText);
      } else {
        // Add the next character to the current text
        const newText = texts[currentIndex].substring(
          0,
          currentText.length + 1
        );
        setCurrentText(newText);
      }
    }, sleepTime); // Typing speed

    return () => {
      clearInterval(interval);
    };
  }, [currentText, currentIndex, isDeleting, texts]);

  return <div className="description">{currentText}&nbsp;</div>;
};

function MainText() {
  const texts = ["Student", "TechInthusiast", "Photographer", "Gamer"];
  return (
    <p className="ltext">
      <Typewriter texts={texts} />
    </p>
  );
}

export default MainText;
