import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import RewiewsBtn from "./RewiewsBtn";
export default function Rewiews() {
  const swiperBtn = useSwiper();
  return (
    <>
      <section className="pb-[39px]">
        <div className="max-w-[1336px] mx-auto xl:px-0 px-5">
          <h4 className="title_1 mb-5">Отзывы</h4>
          <div className="max-w-[1336px w-full]">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                1000:{
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                500: {
                    slidesPerView: 1.5,
                }
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="rounded-[20px] bg-white py-4 md:py-[32px] px-4 md:pl-[39px] py-0pr-[45px] max-w-[424px]">
                  <h5
                    id="subtitle"
                    className="font-normal text-lg text-[#3C3D46] mb-[13px]"
                  >
                    ООО "Север-Верфь"
                  </h5>
                  <h6
                    id="reweivs__title"
                    className="sm: md:text-xl font-semibold text-[#000000] mb-5 md:mb-[75px]"
                  >
                    Профессионализм и внимательное отношение к партнерам
                  </h6>
                  <p
                    id="reveives__text"
                    className="font-normal text-xs md:text-[15px] text-[#3C3D46] mb-5 md:mb-11"
                  >
                    Российский производитель программного обеспечения NFWare
                    (ИНН 7729783338) выражает Вам свое почтение и благодарность
                    команде ООО РТК Новые технологии за сотрудничество.
                    Оперативные отгрузки и высокое качество поставляемой
                    продукции позволили нам бесперебойно осуществлять свою
                    деятельность.&nbsp;Российский производит....
                  </p>
                  <a
                    id="reweivs__link"
                    href="#"
                    className="font-semibold text-sm md:text-lg text-[#3C3D46] border-b border-[#3C3D46]"
                  >
                    Показать полностью
                  </a>
                </div>
              </SwiperSlide>
              <RewiewsBtn/>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
