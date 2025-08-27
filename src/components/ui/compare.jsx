"use client";;
import { SparklesCore } from "@/components/ui/sparkles";
import { cn } from "@/lib/utils";
import { CaretRightIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useRef, useState } from "react";

export const Compare = ({
  firstImage = "",
  secondImage = "",
  className,
  firstImageClassName,
  secondImageClassname,
  initialSliderPercentage = 10,
  slideMode = "hover",
  showHandlebar = true,
  autoplay = false,
  autoplayDuration = 5000
}) => {
  const [sliderXPercent, setSliderXPercent] = useState(initialSliderPercentage);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef(null);

  const [isMouseOver, setIsMouseOver] = useState(false);

  const autoplayRef = useRef(null);

  const startAutoplay = useCallback(() => {
    if (!autoplay) return;

    const startTime = Date.now();
    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress =
        (elapsedTime % (autoplayDuration * 2)) / autoplayDuration;
      const percentage = progress <= 1 ? progress * 100 : (2 - progress) * 100;

      setSliderXPercent(percentage);
      autoplayRef.current = setTimeout(animate, 16);
    };

    animate();
  }, [autoplay, autoplayDuration]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  function mouseEnterHandler() {
    setIsMouseOver(true);
    stopAutoplay();
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    if (slideMode === "hover") {
      setSliderXPercent(initialSliderPercentage);
    }
    if (slideMode === "drag") {
      setIsDragging(false);
    }
    startAutoplay();
  }

  const handleStart = useCallback((clientX) => {
    if (slideMode === "drag") {
      setIsDragging(true);
    }
  }, [slideMode]);

  const handleEnd = useCallback(() => {
    if (slideMode === "drag") {
      setIsDragging(false);
    }
  }, [slideMode]);

  const handleMove = useCallback((clientX) => {
    if (!sliderRef.current) return;
    if (slideMode === "hover" || (slideMode === "drag" && isDragging)) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)));
      });
    }
  }, [slideMode, isDragging]);

  const handleMouseDown = useCallback((e) => handleStart(e.clientX), [handleStart]);
  const handleMouseUp = useCallback(() => handleEnd(), [handleEnd]);
  const handleMouseMove = useCallback((e) => handleMove(e.clientX), [handleMove]);

  const handleTouchStart = useCallback((e) => {
    if (!autoplay) {
      handleStart(e.touches[0].clientX);
    }
  }, [handleStart, autoplay]);

  const handleTouchEnd = useCallback(() => {
    if (!autoplay) {
      handleEnd();
    }
  }, [handleEnd, autoplay]);

  const handleTouchMove = useCallback((e) => {
    if (!autoplay) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove, autoplay]);

  return (
    <div
      ref={sliderRef}
      className={cn("w-[400px] h-[400px] overflow-hidden", className)}
      style={{
        position: "relative",
        cursor: slideMode === "drag" ? "grab" : "col-resize",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={mouseLeaveHandler}
      onMouseEnter={mouseEnterHandler}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}>
      <AnimatePresence initial={false}>
        <motion.div
          className="h-full w-px absolute top-0 m-auto z-30 bg-black"
          style={{
            left: `${sliderXPercent}%`,
            top: "0",
            zIndex: 40,
          }}
          transition={{ duration: 0 }}>
          {showHandlebar && (
            <div
              className="size-10 rounded-full top-1/2 -translate-y-1/2 bg-white border z-30 -right-5 absolute flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40]">
              <CaretRightIcon className="h-4 w-4 text-black" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div
        className="overflow-hidden w-full h-full relative z-20 pointer-events-none">
        <AnimatePresence initial={false}>
          {firstImage ? (
            <motion.div
              className={cn(
                "absolute inset-0 z-20 rounded-2xl shrink-0 w-full h-full select-none overflow-hidden",
                firstImageClassName
              )}
              style={{
                clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
              }}
              transition={{ duration: 0 }}>
              <img
                alt="first image"
                src={firstImage}
                className={cn(
                  "absolute inset-0  z-20 rounded-2xl shrink-0 w-full h-full select-none",
                  firstImageClassName
                )}
                draggable={false} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <AnimatePresence initial={false}>
        {secondImage ? (
          <motion.img
            className={cn(
              "absolute top-0 left-0 z-[19] rounded-2xl w-full h-full select-none",
              secondImageClassname
            )}
            alt="second image"
            src={secondImage}
            draggable={false} />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

const MemoizedSparklesCore = React.memo(SparklesCore);
