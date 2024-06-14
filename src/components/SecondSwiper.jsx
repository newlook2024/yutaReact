import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../img/proud/1.png";
import img1 from "../img/proud/2.png";
import img2 from "../img/proud/3.png";
import { Pagination } from "swiper/modules";

export default function SecondSwiper() {
  const [swiperImgData, setSwiperImgData] = useState([
    {
      img: img,
      id: 1,
    },
    {
      img: img1,
      id: 2,
    },
    {
      img: img2,
      id: 3,
    },
  ]);
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
        {swiperImgData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div
                className="max-w-[1336px] xl:max-w-[797px] xl:max-h-[531px] pt-[250px] xl:pt-[308px] xl:h-[531px] w-full rounded-[20px] overflow-hidden"
                style={{
                  backgroundImage: `url(${data.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div
                  className="md:pt-[46px] md:pb-[69px] py-8 pl-8 md:pl-[55px]"
                  style={{
                    background: `linear-gradient(
                         180deg,
                         rgba(0, 0, 0, 0) -30.18%,
                         rgba(0, 0, 0, 0.7) 20.46%
                       )`,
                  }}
                >
                  <p className="max-w-[550px] font-semibold text-xl md:text-3xl text-white">
                    Обеспечили кабельной продукцмей объекты чемпионата мира по
                    футболу 2018
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
