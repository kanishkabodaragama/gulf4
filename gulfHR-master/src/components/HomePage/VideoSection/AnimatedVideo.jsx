import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./animatedVideo.css";

const AnimatedVideo = () => {
  const { t } = useTranslation("translation");
  const videoRef = useRef(null);
  const [width, setWidth] = useState("80%");

  useEffect(() => {
    // Store the current value of videoRef
    const currentVideoRef = videoRef.current;

    const handleScroll = ([entry]) => {
      if (entry.isIntersecting) {
        const ratio = entry.intersectionRatio;
        const newWidth = 80 + 20 * ratio;
        setWidth(`${newWidth}%`);
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      // Use the stored reference in cleanup
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []); // Dependencies array remains empty as we're using the stored reference

  return (
    <div className="video-container" ref={videoRef} style={{ width }}>
      <video className="responsive-video" src="/videos/VideoSection/HomeVideo.mp4" autoPlay loop muted />
      <div className="videotext">
        <h4>{t("hvc-1")}</h4>
        <h4 className="mt-3">{t("hvc-2")}</h4>
        <h4 className="mt-3">{t("hvc-3")}</h4>
      </div>
    </div>
  );
};

export default AnimatedVideo;
