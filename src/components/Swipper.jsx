import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import bgImgHero from "../img/hero/hero__right__card__bg.png";

export default function Swipper() {
  return (
    <>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div
            id="hero__box"
            className="overflow-hidden md:max-w-[643px] max-h-[599px] h-[450px] md:h-[599px] rounded-[20px] flex items-end"
            style={{
              backgroundImage: `url(${bgImgHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div
              id="hero"
              className="w-full pt-8 pl-5 xl:pl-[46px] md:pr-[138px] leading-[3 px] text-white pb-10 md:pb-[117px] font-semibold text-[32px] transition_default"
              style={{
                background: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) -30.18%,
                        rgba(0, 0, 0, 0.5) 20.46%
                      )`,
              }}
            >
              <h2 className="font-semibold text-2xl text-white">
                Ходовые позиции по кабелю с низкой ценой "от" 2
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="hero__box"
            className="overflow-hidden md:max-w-[643px] max-h-[599px] h-[450px] md:h-[599px] rounded-[20px] flex items-end"
            style={{
              backgroundImage: `url(${bgImgHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div
              id="hero"
              className="w-full pt-8 pl-5 xl:pl-[46px] md:pr-[138px] leading-[3 px] text-white pb-10 md:pb-[117px] font-semibold text-[32px] transition_default"
              style={{
                background: `linear-gradient(
                          180deg,
                          rgba(0, 0, 0, 0) -30.18%,
                          rgba(0, 0, 0, 0.5) 20.46%
                        )`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            >
              <h2 className="font-semibold text-2xl text-white">
                Ходовые позиции по кабелю с низкой ценой "от" 2
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="hero__box"
            className="overflow-hidden md:max-w-[643px] max-h-[599px] h-[450px] md:h-[599px] rounded-[20px] flex items-end"
            style={{
              backgroundImage: `url(${bgImgHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div
              id="hero"
              className="w-full pt-8 pl-5 xl:pl-[46px] md:pr-[138px] leading-[3 px] text-white pb-10 md:pb-[117px] font-semibold text-[32px] transition_default"
              style={{
                background: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0) -30.18%,
                        rgba(0, 0, 0, 0.5) 20.46%
                      )`,
              }}
            >
              <h2 className="font-semibold text-2xl text-white">
                Ходовые позиции по кабелю с низкой ценой "от" 2
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
