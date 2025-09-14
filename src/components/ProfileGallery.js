import React, { useEffect, useState } from "react";
import "./ProfileGallery.css";

// Grab all images from /assets/profile
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../assets/profileIimage/alby", false, /\.(png|jpe?g|webp|gif)$/)
);

const ProfileGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [useInfiniteDesktop, setUseInfiniteDesktop] = useState(false);
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const checkLayout = () => {
      setIsMobile(window.innerWidth <= 768);

      // Approx total width of all desktop images
      const imgWidth = 220; // must match .profile-img width
      const gap = 32; // 2rem
      const total = images.length * imgWidth + (images.length - 1) * gap;

      setUseInfiniteDesktop(total > window.innerWidth);

      // Reset scroll
      setStartScroll(false);
      if (total > window.innerWidth) {
        // Wait for fade-in animation (0.8s * images)
        const delay = images.length * 300; // 300ms per image
        setTimeout(() => setStartScroll(true), delay);
      }
    };

    checkLayout();
    window.addEventListener("resize", checkLayout);
    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  return (
    <div className="profile-gallery">
      {!isMobile ? (
        useInfiniteDesktop ? (
          <div className={`desktop-carousel ${startScroll ? "scrolling" : ""}`}>
            <div className="desktop-track">
              {[...images, ...images].map((src, i) => (
                <img
                  key={`desk-${i}`}
                  src={src}
                  alt={`Age ${i + 1}`}
                  className="desktop-img"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="stack-wrapper">
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Age ${i + 1}`}
                className="profile-img"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        )
      ) : (
        <div className="carousel">
          <div className="carousel-track">
            {[...images, ...images].map((src, i) => (
              <img
                key={`mob-${i}`}
                src={src}
                alt={`Age ${i + 1}`}
                className="carousel-img"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileGallery;
