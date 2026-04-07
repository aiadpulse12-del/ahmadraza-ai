import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    const counter = { val: 0 };

    tl.to(barRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    })
      .to(
        counter,
        {
          val: 100,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            const v = Math.round(counter.val);
            setProgress(v);
            if (percentRef.current) percentRef.current.textContent = `${v}%`;
          },
        },
        0
      )
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.95,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (preloaderRef.current) preloaderRef.current.style.display = "none";
          onComplete();
        },
      });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="orb orb-violet w-96 h-96 top-1/4 left-1/4 animate-glow-pulse" />
      <div className="orb orb-blue w-80 h-80 bottom-1/4 right-1/4 animate-glow-pulse" style={{ animationDelay: "1s" }} />
      <div className="preloader-text">M.Ahmad Raza</div>
      <div className="progress-track">
        <div ref={barRef} className="progress-bar" />
      </div>
      <span ref={percentRef} className="progress-percent">0%</span>
    </div>
  );
};

export default Preloader;
