import { useSwiper } from "swiper/react";
import { useState, useEffect } from "react";

export default function ReviewsBtn() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd)
    };

    swiper.on("slideChange", handleSlideChange);

    // Unmount qilinganda event listenerni tozalash
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className="flex items-center pt-5 gap-[30px]">
      <button
        style={isBeginning ? { opacity: "0.35" } : {}}
        onClick={() => swiper.slidePrev()}
        className="swiper-button-prev"
      >
        <svg
          width={12}
          height={20}
          viewBox="0 0 12 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6097 1.1463L1.7073 10.0487"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M10.6097 18.9512L1.70731 10.0487"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button style={isEnd ? {opacity: '0.35'} : {}} onClick={() => swiper.slideNext()} className="swiper-button-next">
        <svg
          width={12}
          height={21}
          viewBox="0 0 12 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.80481 19.061L10.7072 10.1586"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
          <path
            d="M1.80481 1.25616L10.7072 10.1586"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
