import { useState, useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const VisibleTypewriter = ({ text, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`text-center ${className}`}>
      {isVisible && (
        <Typewriter
          words={[text]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      )}
    </div>
  );
};

export default VisibleTypewriter;

