import React, { useEffect, useState, useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, direction = "left" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 transform ${
        isVisible ? (direction === "left" ? "animate-slide-in-left" : "animate-slide-in-right") : ""
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
