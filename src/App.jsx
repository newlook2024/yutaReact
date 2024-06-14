import { useState } from "react";
import headerLogo from "./img/header/header__logo.svg";
import ComponentSwiper from "./components/Swipper";
import rangeImg from "./img/range/range__1.png";
import rangeImg1 from "./img/range/range__img_1.png";
import rangeImg2 from "./img/range/range_2.png";
import rangeImg3 from "./img/range/range_4.png";
import rangeImg4 from "./img/range/range_5.png";
import rangeImg5 from "./img/range/range_6.png";
import rangeImg6 from "./img/range/range_7.png";
import rangeImg7 from "./img/range/range_8.png";
// PRODUCTS IMAGE
import products from "./img/products/1.png";
import products1 from "./img/products/2.png";
import products2 from "./img/products/3.png";
import products3 from "./img/products/4.png";
import products4 from "./img/products/5.png";
import products5 from "./img/products/6.png";
import products6 from "./img/products/7.png";
import products7 from "./img/products/8.png";
import SecondSwiper from "./components/SecondSwiper";
import Rewiews from "./components/Rewiews";
import behruzniBrati from "./img/brand/brat.png";

import brand1 from "./img/brand/1.png";
import brand2 from "./img/brand/2.png";
import brand3 from "./img/brand/3.png";
import brand4 from "./img/brand/4.png";
import brand5 from "./img/brand/5.png";
import brand6 from "./img/brand/6.png";
import brand7 from "./img/brand/7.png";
import brand8 from "./img/brand/8.png";
import brand9 from "./img/brand/9.png";
import brand10 from "./img/brand/10.png";
import brand11 from "./img/brand/11.png";

export default function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <header className="pt-[18px] pb-[10px]">
        <div className="bg-white rounded-[20px] pt-[15px] lg:pt-[30px] pb-[15px] lg:pb-7 max-w-[1336px] px-5 mx-auto xl:pl-[53px] xl:pr-10 flex justify-between lg:justify-normal items-center">
          <a href="#" className="max-w-[113px]">
            <img src={headerLogo} alt="" className="object-cover w-full" />
          </a>
          <ul className="hidden lg:flex items-center ml-3 xl:ml-[55px] gap-5 xl:gap-12">
            <li className="mr-8 font-semibold transition_default hover:text-[#FF8A00] text-lg text-[#3C3D46]">
              ПН-ПТ <br />
              9:00-18:00
            </li>
            <li>
              <a
                href="./index.html#assorti"
                className="font-semibold text-lg transition_default hover:text-[#FF8A00] text-[#3C3D46]"
              >
                Ассортимент
              </a>
            </li>
            <li>
              <a
                href="./index.html#proud"
                className="font-semibold text-lg transition_default hover:text-[#FF8A00] text-[#3C3D46]"
              >
                О компании
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold transition_default hover:text-[#FF8A00] text-lg text-[#3C3D46]"
              >
                +7 (999) 267 03 44
              </a>
            </li>
          </ul>
          <div className="lg:ml-auto flex items-center gap-3 xl:gap-9">
            <button className="sm:block hidden xl:max-h-[68px] max-h-[50px]  w-full xl:py-[23px] xl:px-8 py-[15px] px-6 border transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] border-[#3C3D46] rounded-[95px] font-semibold text-sm xl:text-[15px] text-[#3C3D46]">
              Заказать звонок
            </button>
            <a
              href="./index.html#form"
              className="sm:block hidden xl:max-h-[68px] max-h-[50px] max-w-[50px] xl:max-w-[70px] border border-[#3C3D46] transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] rounded-full py-[18px] px-4 xl:py-6 xl:px-5"
            >
              <svg
                className="w-full object-cover"
                viewBox="0 0 32 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M29.9 3.22767L17.274 13.248C16.9152 13.5329 16.4639 13.6888 15.998 13.6888C15.5321 13.6888 15.0808 13.5329 14.722 13.248L2.102 3.22767C2.03429 3.423 1.99984 3.62751 2 3.83333V19.1667C2 19.675 2.21071 20.1625 2.58579 20.522C2.96086 20.8814 3.46957 21.0833 4 21.0833H28C28.5304 21.0833 29.0391 20.8814 29.4142 20.522C29.7893 20.1625 30 19.675 30 19.1667V3.83333C30.0008 3.62761 29.967 3.4231 29.9 3.22767ZM4 0H28C29.0609 0 30.0783 0.403868 30.8284 1.12276C31.5786 1.84165 32 2.81667 32 3.83333V19.1667C32 20.1833 31.5786 21.1584 30.8284 21.8772C30.0783 22.5961 29.0609 23 28 23H4C2.93913 23 1.92172 22.5961 1.17157 21.8772C0.421427 21.1584 0 20.1833 0 19.1667V3.83333C0 2.81667 0.421427 1.84165 1.17157 1.12276C1.92172 0.403868 2.93913 0 4 0ZM3.58 1.91667L14.732 10.7391C15.0892 11.0218 15.5377 11.1769 16.0009 11.178C16.4642 11.179 16.9134 11.0259 17.272 10.7448L28.536 1.91667H3.58Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <button
            onClick={menuToggle}
            id="hamburger"
            className="xl:max-h-[68px] max-h-[50px] max-w-[50px] w-full h-[50px] lg:hidden flex items-center justify-center xl:max-w-[70px] border border-[#3C3D46] transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          id="res__nav"
          className={`fixed transition_default px-5 pt-[33px] top-0 ${
            menuIsOpen ? "left-0" : "left-[-100%]"
          } bg-white w-full h-full z-20`}
        >
          <div className="">
            <div className="mb-10 flex items-center justify-between">
              <a href="#" className="max-w-[113px] flex w-full">
                <img src={headerLogo} alt="" className="object-cover w-full" />
              </a>
              <button
                id="close"
                onClick={menuToggle}
                className="xl:max-h-[68px] max-h-[50px] max-w-[50px] w-full h-[50px] lg:hidden flex items-center justify-center xl:max-w-[70px] border border-[#3C3D46] transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-start ml-3 mb-5 gap-5">
              <li className="mr-8">
                <a
                  href="#"
                  className="font-semibold hover:text-[#FF8A00] text-lg text-[#3C3D46]"
                >
                  ПН-ПТ 9:00-18:00
                </a>
              </li>
              <li>
                <a
                  href="./index.html#assorti"
                  className="font-semibold text-lg text-[#3C3D46]"
                >
                  Ассортимент
                </a>
              </li>
              <li>
                <a
                  href="./index.html#proud"
                  className="font-semibold text-lg text-[#3C3D46]"
                >
                  О компании
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold hover:text-[#FF8A00] text-lg text-[#3C3D46]"
                >
                  +7 (999) 267 03 44
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <button className="xl:max-h-[68px] max-h-[50px]  w-full xl:py-[23px] xl:px-8 py-[15px] px-6 border transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] border-[#3C3D46] rounded-[95px] font-semibold text-sm xl:text-[15px] text-[#3C3D46]">
                Заказать звонок
              </button>
              <a
                href="./index.html#form"
                className="xl:max-h-[68px] max-h-[50px] max-w-[50px] xl:max-w-[70px] border border-[#3C3D46] transition_default hover:border-[#FF8A00] hover:text-[#FF8A00] rounded-full py-[18px] px-4 xl:py-6 xl:px-5"
              >
                <svg
                  className="w-full object-cover"
                  viewBox="0 0 32 23"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.9 3.22767L17.274 13.248C16.9152 13.5329 16.4639 13.6888 15.998 13.6888C15.5321 13.6888 15.0808 13.5329 14.722 13.248L2.102 3.22767C2.03429 3.423 1.99984 3.62751 2 3.83333V19.1667C2 19.675 2.21071 20.1625 2.58579 20.522C2.96086 20.8814 3.46957 21.0833 4 21.0833H28C28.5304 21.0833 29.0391 20.8814 29.4142 20.522C29.7893 20.1625 30 19.675 30 19.1667V3.83333C30.0008 3.62761 29.967 3.4231 29.9 3.22767ZM4 0H28C29.0609 0 30.0783 0.403868 30.8284 1.12276C31.5786 1.84165 32 2.81667 32 3.83333V19.1667C32 20.1833 31.5786 21.1584 30.8284 21.8772C30.0783 22.5961 29.0609 23 28 23H4C2.93913 23 1.92172 22.5961 1.17157 21.8772C0.421427 21.1584 0 20.1833 0 19.1667V3.83333C0 2.81667 0.421427 1.84165 1.17157 1.12276C1.92172 0.403868 2.93913 0 4 0ZM3.58 1.91667L14.732 10.7391C15.0892 11.0218 15.5377 11.1769 16.0009 11.178C16.4642 11.179 16.9134 11.0259 17.272 10.7448L28.536 1.91667H3.58Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="rounded-[20px] bg-white max-w-[1336px] mx-auto md:pr-0 px-5 md:pl-5 flex lg:flex-row flex-col items-center justify-between">
          <div className="md:pt-[41px] md:pr-[45px] md:pb-8 md:pl-7 mb-5 md:mb-0">
            <h1 className="max-w-[557px] font-semibold mb-[50px] md:mb-[203px] text-2xl md:text-[40px] md:leading-[54px] text-[#3C3D46]">
              Кабельная продукция со склада и под заказ <br />с доставкой по РФ
            </h1>
            <div>
              <button className="max-w-[231px] w-full py-5 hover:bg-[#000000] transition_default hover:text-white pl-[46px] max-h-[71px] mb-5 pr-[67px] flex items-center gap-[10px] border border-[#000000] rounded-[1000px]">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.84848 9.00004C5.62345 9.00004 5.40764 9.08959 5.24852 9.24899C5.08939 9.4084 5 9.6246 5 9.85003C5 10.0755 5.08939 10.2917 5.24852 10.4511C5.40764 10.6105 5.62345 10.7 5.84848 10.7H7.73212L9.95855 19.625C10.1478 20.3815 10.824 20.9 11.6021 20.9H22.1827C22.9488 20.9 23.5996 20.39 23.8007 19.6505L26 11.55H24.2233L22.1818 19.2H11.6012L9.37564 10.275C9.2837 9.90888 9.07177 9.58422 8.77379 9.35305C8.4758 9.12188 8.109 8.99758 7.73212 9.00004H5.84848ZM21.1212 20.9C19.7255 20.9 18.5758 22.0518 18.5758 23.45C18.5758 24.8483 19.7255 26 21.1212 26C22.517 26 23.6667 24.8483 23.6667 23.45C23.6667 22.0518 22.517 20.9 21.1212 20.9ZM13.4848 20.9C12.0891 20.9 10.9394 22.0518 10.9394 23.45C10.9394 24.8483 12.0891 26 13.4848 26C14.8806 26 16.0303 24.8483 16.0303 23.45C16.0303 22.0518 14.8806 20.9 13.4848 20.9ZM16.0303 9.00004V13.25H13.4848L16.8788 16.65L20.2727 13.25H17.7273V9.00004H16.0303ZM13.4848 22.6C13.9634 22.6 14.3333 22.9706 14.3333 23.45C14.3333 23.9294 13.9634 24.3 13.4848 24.3C13.0063 24.3 12.6364 23.9294 12.6364 23.45C12.6364 22.9706 13.0063 22.6 13.4848 22.6ZM21.1212 22.6C21.5998 22.6 21.9697 22.9706 21.9697 23.45C21.9697 23.9294 21.5998 24.3 21.1212 24.3C20.6427 24.3 20.2727 23.9294 20.2727 23.45C20.2727 22.9706 20.6427 22.6 21.1212 22.6Z"
                    fill="currentColor"
                  />
                </svg>
                Заказать
              </button>
              <button className="max-w-[231px] w-full hover:bg-[#000000] transition_default hover:text-white px-10 max-h-[71px] pt-[18px] pb-6 flex items-center gap-[10px] border border-[#000000] rounded-[1000px]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_21_284)">
                    <path
                      d="M9.46022 1.15881L9.46023 1.15881C9.70191 0.918787 10.0287 0.784134 10.3693 0.784227C10.3694 0.784227 10.3695 0.784227 10.3696 0.784227H14.4495H14.45V1.59375L9.46022 1.15881ZM9.46022 1.15881L9.45825 1.16078M9.46022 1.15881L9.45825 1.16078M9.45825 1.16078L1.30024 9.31879L1.29884 9.3202M9.45825 1.16078L1.29884 9.3202M1.29884 9.3202C0.969251 9.6514 0.784226 10.0996 0.784226 10.5669C0.784226 11.0341 0.969251 11.4824 1.29884 11.8136L1.30024 11.815M1.29884 9.3202L1.30024 11.815M1.30024 11.815L5.185 15.6998L5.18641 15.7012M1.30024 11.815L5.18641 15.7012M5.18641 15.7012C5.51761 16.0308 5.96586 16.2158 6.43311 16.2158C6.90036 16.2158 7.3486 16.0308 7.67981 15.7012L7.68121 15.6998M5.18641 15.7012L7.68121 15.6998M7.68121 15.6998L15.8359 7.54508L15.8379 7.5431M7.68121 15.6998L15.8379 7.5431M15.8379 7.5431C16.078 7.30127 16.2127 6.97421 16.2125 6.6334M15.8379 7.5431L16.2125 6.6334M16.2125 6.6334V6.63399H15.4029C15.403 6.76087 15.3529 6.88263 15.2635 6.97266L16.2125 6.6334ZM16.2125 6.6334V2.55171V6.6334Z"
                      stroke="currentColor"
                      strokeWidth="1.61905"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.75 5.3125C12.5399 5.3125 12.3344 5.25019 12.1597 5.13344C11.985 5.01669 11.8488 4.85075 11.7684 4.6566C11.688 4.46246 11.6669 4.24882 11.7079 4.04272C11.7489 3.83661 11.8501 3.64729 11.9987 3.4987C12.1473 3.35011 12.3366 3.24891 12.5427 3.20792C12.7488 3.16692 12.9625 3.18796 13.1566 3.26838C13.3507 3.3488 13.5167 3.48498 13.6334 3.65971C13.7502 3.83443 13.8125 4.03986 13.8125 4.25C13.8125 4.53179 13.7006 4.80204 13.5013 5.0013C13.302 5.20056 13.0318 5.3125 12.75 5.3125Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_21_284">
                      <rect width="17" height="17" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Запрос прайсаw
              </button>
            </div>
          </div>
          <div className="max-w-[500px] rounded-[20px] overflow-hidden md:max-w-[643px] w-full">
            <ComponentSwiper />
          </div>
        </div>
      </section>
      <section className="md:pt-[34px] py-12 md:pb-[34px]">
        <div className="max-w-[1336px] mx-auto px-5 md:px-0">
          <h3 id="assorti" className="title_1">
            Ассортимент:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px]">
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-7 md:mb-[65px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  ВВГ
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  ВБШВ
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АВВГ
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АВБШВ
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Силовой кабель с медной или алюминиевой жилой, ПВХ изоляцией в
                исполнении Э, нг(А), LS, FRLS, FRLS, FRLSTx, ХЛ на напряжение от
                0,66кВ до 6кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg1}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-7 md:mb-[65px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КВВГ
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КВБбШв
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Контрольный кабель с медной жилой в исполнении Э, нг(А), LS,
                FRLS, FRLSLTx, ХЛ на напряжение 0,66кВ и 1кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg2}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[22px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АПвП
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АПвПг
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АПвПу
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АПвПуг
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АПвПуг
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Силовой кабель с алюминиевой или медной жилой, изоляцией из
                сшитого полиэтилена на напряжение от 6кВ до 35кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg3}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[46px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  ААБл
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АСБл
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  ААШв
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  АСБ
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КГ
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Cиловой кабель с алюминиевой или медной жилой, бумажно
                пропитанной изоляцией на напряжение от 1кВ до 10кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg4}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[46px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КГН
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КГТП
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КРШС
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  СИП-1
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  СИП-2
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Гибкий кабель с медной жилой для нестационарной прокладки в
                исполнении Т, ХЛ на напряжение до 1кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg5}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[46px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  СИП-3
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  СБл
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  КРШС
                </button>
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  СИП-4
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Самонесущие изолированные провода с алюминиевой жилой&nbsp; на
                напряжение от 20кВ до 35кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg6}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[18px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  Устройства защиты и управления
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Силовой кабель с медной или алюминиевой жилой, ПВХ изоляцией в
                исполнении Э, нг(А), LS, FRLS, FRLS, FRLSTx, ХЛ на напряжение от
                0,66кВ до 6кВ
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg7}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[18px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  Кабеленесущие системы
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Лотки кабельные, кабельные каналы, трубы, металлоруков, коробки
                распределительные
              </p>
            </div>
            <div className="pt-7 max-h-[500px] lg:h-[432px] lg:max-h-[432px] bg-white pr-[22px] pb-[53px] w-full rounded-[20px]">
              <img
                id="range__img"
                src={rangeImg1}
                alt=""
                className="block md:max-w-[284px] max-w-[200px] mb-6 md:mb-[34px]"
              />
              <div className="pl-5 flex items-center flex-wrap gap-[6px] mb-[18px]">
                <button
                  id="range__btn"
                  className="rounded-[75px] transition_default hover:opacity-60 py-[10px] px-[17px] bg-[#000000] text-white font-medium text-xs md:text-base"
                >
                  Светотехническая продукция
                </button>
              </div>
              <p
                id="range__text"
                className="pl-5 font-normal text-sm md:text-base text-[#000000] max-w-[384px]"
              >
                Силовой кабель с медной или алюминиевой жилой, ПВХ изоляцией в
                исполнении Э, нг(А), LS, FRLS, FRLS, FRLSTx, ХЛ на напряжение от
                0,66кВ до 6кВ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[10px]">
        <div className="bg-white max-w-[1336px] px-5 lg:px-5 xl:px-[43px] rounded-[20px] md:px-5 mx-auto pt-[62px] pb-[66px]">
          <h2 className="title_1 mb-5 md:mb-[65px]">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={27}
                height={31}
                viewBox="0 0 27 31"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2529 17.317L12.5357 17.6013L12.8185 17.3171L19.85 10.2511C19.85 10.2511 19.85 10.2511 19.8501 10.2511C19.9565 10.1442 20.1003 10.0845 20.25 10.0845C20.3997 10.0845 20.5436 10.1443 20.65 10.2511C20.7564 10.3581 20.8166 10.5035 20.8166 10.6556C20.8166 10.8076 20.7564 10.9531 20.65 11.06L12.9357 18.8099L12.9353 18.8102C12.8827 18.8632 12.8203 18.9051 12.7518 18.9337C12.6832 18.9623 12.6098 18.977 12.5357 18.977C12.4616 18.977 12.3882 18.9623 12.3196 18.9337C12.2511 18.9051 12.1887 18.8632 12.1361 18.8102L12.1357 18.8099L8.27859 14.9349C8.22589 14.882 8.18399 14.819 8.15538 14.7496C8.12675 14.6802 8.112 14.6058 8.112 14.5305C8.112 14.4553 8.12675 14.3808 8.15538 14.3114C8.18399 14.242 8.22589 14.179 8.27859 14.1261C8.33129 14.0731 8.39375 14.0312 8.46235 14.0027C8.53096 13.9742 8.60442 13.9595 8.67857 13.9595C8.75272 13.9595 8.82619 13.9742 8.89479 14.0027C8.9634 14.0312 9.02585 14.0731 9.07855 14.1261L12.2529 17.317ZM0.398933 5.8119V5.81185C0.398914 5.67421 0.448314 5.54146 0.537649 5.43791C0.6269 5.33445 0.749952 5.26712 0.88406 5.24774C5.29082 4.61818 9.49787 2.99251 13.1885 0.493229C13.281 0.431661 13.3894 0.398933 13.5 0.398933C13.6107 0.398933 13.7191 0.431687 13.8116 0.493301C17.5017 2.99231 21.7081 4.61797 26.1143 5.24778L26.1146 5.24782C26.249 5.26691 26.3724 5.33415 26.4619 5.43769C26.5515 5.54125 26.601 5.67412 26.6011 5.8119C26.6011 5.81192 26.6011 5.81194 26.6011 5.81196V14.5305C26.6011 18.2143 25.516 21.3844 23.3765 24.0472C21.2324 26.7156 18.0105 28.8975 13.7033 30.563L13.703 30.5631C13.5723 30.6137 13.4277 30.6137 13.2971 30.5631L13.2967 30.563C8.98944 28.8975 5.76761 26.7161 3.62354 24.0479C1.48403 21.3854 0.398933 18.2153 0.398933 14.5305V5.8119ZM1.86151 6.24788L1.52964 6.30448V6.64114V14.5305C1.52964 17.9004 2.50477 20.8299 4.48654 23.3118C6.46333 25.7875 9.42205 27.7936 13.3523 29.3604L13.5 29.4193L13.6477 29.3604C17.578 27.7936 20.5367 25.7869 22.5135 23.3111C24.4952 20.8289 25.4704 17.8995 25.4704 14.5305V6.64114V6.30448L25.1385 6.24788C21.3688 5.60503 17.7532 4.25481 14.4807 2.26771L13.7115 1.78666L13.5 1.65438L13.2885 1.78666L12.5192 2.26772C9.24679 4.25481 5.63122 5.60503 1.86151 6.24788Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="0.797865"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Наш товар сертифицирован
              </p>
            </div>
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={32}
                height={23}
                viewBox="0 0 32 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7553 4.60461C15.9764 4.60461 16.1885 4.69489 16.3449 4.85557C16.5013 5.01625 16.5891 5.23419 16.5891 5.46143V8.03188C16.5891 8.25912 16.5013 8.47705 16.3449 8.63774C16.1885 8.79842 15.9764 8.88869 15.7553 8.88869C15.5341 8.88869 15.322 8.79842 15.1656 8.63774C15.0093 8.47705 14.9214 8.25912 14.9214 8.03188V5.46143C14.9214 5.23419 15.0093 5.01625 15.1656 4.85557C15.322 4.69489 15.5341 4.60461 15.7553 4.60461ZM8.63749 7.57262C8.79386 7.412 9.00592 7.32176 9.22702 7.32176C9.44813 7.32176 9.66019 7.412 9.81656 7.57262L11.3425 9.13888C11.42 9.21855 11.4815 9.31312 11.5235 9.41721C11.5655 9.52129 11.587 9.63285 11.587 9.74551C11.587 9.85817 11.5655 9.96973 11.5235 10.0738C11.4815 10.1779 11.42 10.2725 11.3425 10.3521C11.265 10.4318 11.1729 10.495 11.0716 10.5381C10.9704 10.5812 10.8618 10.6034 10.7521 10.6034C10.6425 10.6034 10.5339 10.5812 10.4326 10.5381C10.3313 10.495 10.2393 10.4318 10.1618 10.3521L8.63749 8.78416C8.48117 8.62349 8.39335 8.40559 8.39335 8.17839C8.39335 7.9512 8.48117 7.7333 8.63749 7.57262ZM5.74902 14.8864C5.74902 14.6592 5.83688 14.4412 5.99325 14.2805C6.14963 14.1199 6.36172 14.0296 6.58288 14.0296H9.22786C9.44901 14.0296 9.6611 14.1199 9.81748 14.2805C9.97386 14.4412 10.0617 14.6592 10.0617 14.8864C10.0617 15.1136 9.97386 15.3316 9.81748 15.4923C9.6611 15.653 9.44901 15.7432 9.22786 15.7432H6.58288C6.36172 15.7432 6.14963 15.653 5.99325 15.4923C5.83688 15.3316 5.74902 15.1136 5.74902 14.8864ZM21.5922 14.8864C21.5922 14.6592 21.6801 14.4412 21.8365 14.2805C21.9928 14.1199 22.2049 14.0296 22.4261 14.0296H24.9276C25.1488 14.0296 25.3609 14.1199 25.5173 14.2805C25.6736 14.4412 25.7615 14.6592 25.7615 14.8864C25.7615 15.1136 25.6736 15.3316 25.5173 15.4923C25.3609 15.653 25.1488 15.7432 24.9276 15.7432H22.4261C22.2049 15.7432 21.9928 15.653 21.8365 15.4923C21.6801 15.3316 21.5922 15.1136 21.5922 14.8864ZM22.8497 7.61033C22.734 7.49259 22.5795 7.42375 22.4167 7.4174C22.254 7.41106 22.0949 7.46767 21.9708 7.57605L14.9998 13.704C14.8374 13.8446 14.7055 14.0187 14.6127 14.215C14.5198 14.4113 14.4681 14.6254 14.4609 14.8435C14.4537 15.0616 14.4911 15.2788 14.5707 15.4811C14.6503 15.6835 14.7704 15.8664 14.9231 16.018C15.0759 16.1696 15.2579 16.2866 15.4574 16.3615C15.6569 16.4363 15.8695 16.4672 16.0814 16.4523C16.2933 16.4374 16.4997 16.3769 16.6875 16.2749C16.8752 16.1728 17.04 16.0314 17.1711 15.8597L22.898 8.49627C22.9973 8.36797 23.0473 8.20664 23.0383 8.04298C23.0294 7.87932 22.9623 7.72473 22.8497 7.60861V7.61033Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.874029 15.2771C0.876001 13.0519 1.35706 10.854 2.28363 8.83671C3.2102 6.81945 4.55995 5.03149 6.23865 3.59765C7.91735 2.16381 9.88454 1.11865 12.0029 0.53512C14.1213 -0.0484065 16.3397 -0.156232 18.5035 0.219171C20.6672 0.594574 22.724 1.44416 24.5303 2.70861C26.3367 3.97307 27.849 5.62193 28.9617 7.54007C30.0744 9.45822 30.7607 11.5994 30.9727 13.8142C31.1847 16.029 30.9172 18.2641 30.189 20.3633C29.3556 22.7582 26.7102 23.4252 24.6605 22.7524C22.198 21.9439 18.7398 21.0112 15.9586 21.0112C13.1793 21.0112 9.71737 21.9439 7.2567 22.7524C5.20708 23.4252 2.56162 22.7582 1.72819 20.3633C1.16133 18.7292 0.872499 17.0093 0.874029 15.2771ZM15.9586 1.89763C13.8475 1.89708 11.767 2.40986 9.89181 3.39294C8.01661 4.37603 6.4014 5.80073 5.18175 7.54748C3.96209 9.29422 3.17357 11.312 2.88237 13.4316C2.59116 15.5512 2.80577 17.7106 3.50818 19.7287C3.89095 20.8277 5.24856 21.403 6.67594 20.9328C9.1649 20.1186 12.8625 19.0998 15.9586 19.0998C19.0547 19.0998 22.7542 20.1167 25.2413 20.9347C26.6687 21.403 28.0263 20.8277 28.4091 19.7287C29.1115 17.7106 29.3261 15.5512 29.0349 13.4316C28.7437 11.312 27.9551 9.29422 26.7355 7.54748C25.5158 5.80073 23.9006 4.37603 22.0254 3.39294C20.1502 2.40986 18.0698 1.89708 15.9586 1.89763Z"
                  fill="currentColor"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Быстро отвечаем
              </p>
            </div>
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={27}
                height={26}
                viewBox="0 0 27 26"
                fill="cuurentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.1048 9.86309H25.2095V4.51355C25.2095 4.27709 25.1151 4.05031 24.9472 3.8831C24.7793 3.7159 24.5516 3.62196 24.3142 3.62196H2.82675C2.61475 3.6254 2.40841 3.55381 2.24445 3.41993C2.0805 3.28604 1.96958 3.09856 1.93144 2.89086V2.56989C1.96958 2.36218 2.0805 2.1747 2.24445 2.04082C2.40841 1.90693 2.61475 1.83534 2.82675 1.83878H23.9381C24.1756 1.83878 24.4033 1.74485 24.5712 1.57764C24.7391 1.41044 24.8334 1.18366 24.8334 0.947193C24.8334 0.710728 24.7391 0.483949 24.5712 0.316744C24.4033 0.149538 24.1756 0.055603 23.9381 0.055603H2.82675C2.1144 0.055603 1.43122 0.337408 0.927515 0.839025C0.423806 1.34064 0.140825 2.02098 0.140825 2.73037C0.134373 2.83727 0.134373 2.94445 0.140825 3.05134V21.3913C0.14434 21.8714 0.242771 22.3461 0.430498 22.7882C0.618226 23.2304 0.891573 23.6314 1.23493 23.9684C1.57829 24.3053 1.98494 24.5717 2.43165 24.7521C2.87836 24.9326 3.3564 25.0236 3.83845 25.0201H24.3142C24.5516 25.0201 24.7793 24.9262 24.9472 24.759C25.1151 24.5918 25.2095 24.365 25.2095 24.1285V18.779H26.1048C26.3422 18.779 26.57 18.685 26.7379 18.5178C26.9058 18.3506 27.0001 18.1239 27.0001 17.8874V10.7547C27.0001 10.5182 26.9058 10.2914 26.7379 10.1242C26.57 9.95702 26.3422 9.86309 26.1048 9.86309ZM23.4189 23.2369H3.83845C3.34048 23.2417 2.86075 23.0505 2.50363 22.7049C2.1465 22.3593 1.94086 21.8872 1.93144 21.3913V5.29815C2.22203 5.38218 2.52445 5.41832 2.82675 5.40514H23.4189V9.86309H17.1517C15.9644 9.86309 14.8258 10.3328 13.9863 11.1688C13.1468 12.0048 12.6751 13.1387 12.6751 14.321C12.6751 15.5034 13.1468 16.6373 13.9863 17.4733C14.8258 18.3093 15.9644 18.779 17.1517 18.779H23.4189V23.2369ZM25.2095 16.9958H17.1517C16.4393 16.9958 15.7562 16.714 15.2525 16.2124C14.7487 15.7108 14.4658 15.0304 14.4658 14.321C14.4658 13.6116 14.7487 12.9313 15.2525 12.4297C15.7562 11.9281 16.4393 11.6463 17.1517 11.6463H25.2095V16.9958Z"
                  fill="cuurentColor"
                />
                <path
                  d="M18.046 15.5227C18.7953 15.5227 19.4028 14.976 19.4028 14.3016C19.4028 13.6272 18.7953 13.0805 18.046 13.0805C17.2967 13.0805 16.6892 13.6272 16.6892 14.3016C16.6892 14.976 17.2967 15.5227 18.046 15.5227Z"
                  fill="cuurentColor"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Гибкое ценообразование под проекты
              </p>
            </div>
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={34}
                height={27}
                viewBox="0 0 34 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.2724 22.025C28.2724 23.0527 27.8751 24.0384 27.1679 24.7651C26.4607 25.4918 25.5015 25.9 24.5013 25.9C23.5011 25.9 22.5419 25.4918 21.8347 24.7651C21.1274 24.0384 20.7301 23.0527 20.7301 22.025C20.7301 20.9973 21.1274 20.0117 21.8347 19.285C22.5419 18.5583 23.5011 18.15 24.5013 18.15C25.5015 18.15 26.4607 18.5583 27.1679 19.285C27.8751 20.0117 28.2724 20.9973 28.2724 22.025ZM13.1878 22.025C13.1878 23.0527 12.7905 24.0384 12.0833 24.7651C11.376 25.4918 10.4168 25.9 9.41666 25.9C8.41649 25.9 7.45728 25.4918 6.75005 24.7651C6.04282 24.0384 5.64551 23.0527 5.64551 22.025C5.64551 20.9973 6.04282 20.0117 6.75005 19.285C7.45728 18.5583 8.41649 18.15 9.41666 18.15C10.4168 18.15 11.376 18.5583 12.0833 19.285C12.7905 20.0117 13.1878 20.9973 13.1878 22.025Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20.7298 22.025H13.1875M28.2721 22.025H29.4231C29.7549 22.025 29.9209 22.025 30.0596 22.0064C30.559 21.9425 31.0234 21.7094 31.3794 21.3439C31.7353 20.9784 31.9626 20.5014 32.0252 19.9883C32.0433 19.8442 32.0433 19.6737 32.0433 19.3327V15.05C32.0433 12.3779 31.0102 9.81532 29.1714 7.92589C27.3326 6.03646 24.8387 4.97498 22.2383 4.97498M1.87402 1.09998H16.9586C19.0916 1.09998 20.1581 1.09998 20.8203 1.78198C21.484 2.46088 21.484 3.55673 21.484 5.74998V18.925M1.87402 14.6625V18.15C1.87402 19.5993 1.87402 20.3231 2.17722 20.8625C2.37581 21.2159 2.66143 21.5094 3.00537 21.7135C3.53031 22.025 4.23477 22.025 5.64518 22.025M1.87402 5.74998H10.9248M1.87402 10.4H7.90787"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Оперативно доставляем по РФ и СНГ
              </p>
            </div>
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={30}
                height={29}
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 5H29L26 18H8M26 22H9L4 1H1"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24C9.89543 24 9 24.8954 9 26C9 27.1046 9.89543 28 11 28Z"
                  stroke="currenColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Всегда в наличии редкие позиции
              </p>
            </div>
            <div
              id="choose_card"
              className="w-full text-[#000000] hover:text-[#FF8A00] flex items-center gap-3 md:gap-[25px] border border-black hover:border-[#FF8A00] transition_default rounded-[1000px] pl-5 pr-2 md:pr-0 md:pl-10 md:pt-8 py-4 md:pb-10"
            >
              <svg
                width={34}
                height={33}
                viewBox="0 0 34 33"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1957 0.353516L33.7809 12.4033L27.4459 31.9003H6.94555L0.610596 12.4033L17.1957 0.353516ZM32.3122 12.8805L17.1957 1.89778L2.07928 12.8805L7.85325 30.651H26.5382L32.3122 12.8805Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.1958 0.12323L33.9999 12.3322L27.5813 32.0866H6.81022L0.391602 12.3322L17.1958 0.12323ZM17.1958 2.12807L2.29832 12.9517L7.98863 30.4647H26.4029L32.0932 12.9517L17.1958 2.12807ZM32.3122 12.8805L17.1958 1.89778L2.0793 12.8805L7.85327 30.651H26.5382L32.3122 12.8805ZM6.94557 31.9003H27.4459L33.7809 12.4033L17.1958 0.353516L0.610617 12.4033L6.94557 31.9003Z"
                  fill="currentColor"
                />
                <path
                  d="M7.69824 16.0071C10.3683 16.7046 17.8325 17.6811 26.3288 16.0071L16.9235 20.014L23.6287 28.1169L16.9235 23.7093L10.3983 27.9388L16.9235 20.014L7.69824 16.0071Z"
                  fill="currentColor"
                />
                <path
                  d="M20.7776 10.0412V9.39453H23.8241V10.0412H22.6885V13.104H21.9133V10.0412H20.7776Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.6843 10.1343V9.30133H23.9172V10.1343H22.7815V13.1971H21.82V10.1343H20.6843ZM21.9131 10.0411V13.104H22.6884V10.0411H23.824V9.39448H20.7775V10.0411H21.9131Z"
                  fill="currentColor"
                />
                <path
                  d="M20.4073 10.6931H19.6139C19.5994 10.5905 19.5699 10.4993 19.5252 10.4196C19.4805 10.3387 19.4231 10.2699 19.3531 10.2132C19.2831 10.1564 19.2022 10.1129 19.1104 10.0827C19.0198 10.0526 18.9214 10.0375 18.8152 10.0375C18.6232 10.0375 18.4559 10.0852 18.3134 10.1806C18.1709 10.2747 18.0605 10.4124 17.982 10.5935C17.9035 10.7734 17.8642 10.992 17.8642 11.2492C17.8642 11.5137 17.9035 11.7358 17.982 11.9158C18.0617 12.0957 18.1728 12.2315 18.3152 12.3233C18.4577 12.4151 18.6226 12.4609 18.8097 12.4609C18.9148 12.4609 19.012 12.4471 19.1013 12.4193C19.1919 12.3915 19.2722 12.3511 19.3422 12.2979C19.4123 12.2436 19.4702 12.1778 19.5161 12.1005C19.5632 12.0232 19.5958 11.9351 19.6139 11.8361L20.4073 11.8397C20.3867 12.0099 20.3354 12.1742 20.2533 12.3323C20.1724 12.4893 20.0631 12.63 19.9255 12.7544C19.789 12.8775 19.626 12.9753 19.4364 13.0478C19.248 13.119 19.0349 13.1547 18.797 13.1547C18.4662 13.1547 18.1703 13.0798 17.9095 12.9301C17.6499 12.7803 17.4446 12.5636 17.2937 12.2798C17.144 11.9961 17.0691 11.6525 17.0691 11.2492C17.0691 10.8447 17.1452 10.5005 17.2973 10.2168C17.4495 9.93302 17.6559 9.71687 17.9168 9.56835C18.1776 9.41862 18.471 9.34375 18.797 9.34375C19.012 9.34375 19.2112 9.37394 19.3948 9.43431C19.5795 9.49469 19.7431 9.58284 19.8856 9.69876C20.0281 9.81347 20.144 9.95415 20.2334 10.1208C20.3239 10.2874 20.3819 10.4782 20.4073 10.6931Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.5119 10.7863H19.5329L19.5216 10.7062C19.5085 10.6134 19.4821 10.5336 19.4438 10.4652C19.4048 10.3945 19.3548 10.3346 19.2943 10.2855C19.2337 10.2364 19.163 10.1982 19.0812 10.1712C19.0011 10.1446 18.9124 10.1306 18.815 10.1306C18.6392 10.1306 18.4905 10.1741 18.3651 10.258C18.24 10.3407 18.1398 10.4634 18.0673 10.6306C17.9953 10.7957 17.9573 11.001 17.9573 11.2492C17.9573 11.5049 17.9953 11.7135 18.0671 11.8783C18.1407 12.0442 18.2408 12.1646 18.3656 12.245C18.4915 12.3261 18.6384 12.3678 18.8096 12.3678C18.9064 12.3678 18.9942 12.355 19.0736 12.3303C19.1543 12.3056 19.2249 12.2699 19.2854 12.224C19.3459 12.177 19.396 12.1202 19.4359 12.053L19.4365 12.052C19.477 11.9855 19.5059 11.9084 19.5222 11.8193L19.5362 11.7426L20.5122 11.747L20.4996 11.8508C20.4777 12.0326 20.4229 12.2076 20.3359 12.3753C20.2496 12.5426 20.1333 12.6921 19.9878 12.8235C19.842 12.9551 19.6688 13.0587 19.4696 13.1348C19.2689 13.2107 19.0441 13.2478 18.7969 13.2478C18.4515 13.2478 18.1394 13.1695 17.863 13.0109C17.5872 12.8518 17.3699 12.6216 17.2113 12.3236C17.0529 12.0234 16.9758 11.6639 16.9758 11.2492C16.9758 10.8332 17.0541 10.4731 17.2151 10.1728C17.3749 9.87478 17.5933 9.64533 17.8704 9.48749C18.1465 9.32904 18.4561 9.25061 18.7969 9.25061C19.0207 9.25061 19.2298 9.28205 19.4238 9.34584C19.6187 9.40956 19.7924 9.50296 19.9443 9.62651C20.0966 9.74921 20.2203 9.89953 20.3152 10.0765C20.4121 10.2549 20.4731 10.4573 20.4997 10.6822L20.5119 10.7863ZM20.2333 10.1208C20.3105 10.263 20.3641 10.4227 20.3939 10.6C20.399 10.6305 20.4034 10.6616 20.4072 10.6932H19.6138C19.5993 10.5905 19.5697 10.4994 19.5251 10.4197C19.4804 10.3388 19.423 10.2699 19.353 10.2132C19.283 10.1564 19.2021 10.1129 19.1103 10.0828C19.0197 10.0526 18.9213 10.0375 18.815 10.0375C18.6231 10.0375 18.4558 10.0852 18.3133 10.1806C18.1708 10.2748 18.0604 10.4124 17.9819 10.5935C17.9034 10.7735 17.8641 10.992 17.8641 11.2492C17.8641 11.5137 17.9034 11.7358 17.9819 11.9158C18.0616 12.0957 18.1726 12.2315 18.3151 12.3233C18.4576 12.4151 18.6224 12.461 18.8096 12.461C18.9147 12.461 19.0119 12.4471 19.1012 12.4193C19.1918 12.3915 19.2721 12.3511 19.3421 12.2979C19.4122 12.2436 19.4701 12.1778 19.516 12.1005C19.5631 12.0232 19.5957 11.9351 19.6138 11.8361L20.4072 11.8397C20.4034 11.8709 20.3986 11.902 20.3927 11.9328C20.3668 12.07 20.3202 12.2032 20.2532 12.3324C20.1723 12.4893 20.063 12.63 19.9254 12.7544C19.7889 12.8775 19.6259 12.9754 19.4363 13.0478C19.2479 13.1191 19.0348 13.1547 18.7969 13.1547C18.4661 13.1547 18.1702 13.0798 17.9094 12.9301C17.6498 12.7803 17.4445 12.5636 17.2936 12.2798C17.1438 11.9961 17.069 11.6525 17.069 11.2492C17.069 10.8447 17.1451 10.5006 17.2972 10.2168C17.4493 9.93303 17.6558 9.71688 17.9167 9.56836"
                  fill="currentColor"
                />
                <path
                  d="M16.6041 11.2492C16.6041 11.6537 16.5275 11.9979 16.3741 12.2816C16.222 12.5654 16.0143 12.7821 15.751 12.9319C15.489 13.0804 15.1944 13.1547 14.8671 13.1547C14.5375 13.1547 14.2416 13.0798 13.9796 12.9301C13.7176 12.7803 13.5105 12.5636 13.3583 12.2798C13.2062 11.9961 13.1301 11.6525 13.1301 11.2492C13.1301 10.8447 13.2062 10.5005 13.3583 10.2168C13.5105 9.93302 13.7176 9.71687 13.9796 9.56835C14.2416 9.41862 14.5375 9.34375 14.8671 9.34375C15.1944 9.34375 15.489 9.41862 15.751 9.56835C16.0143 9.71687 16.222 9.93302 16.3741 10.2168C16.5275 10.5005 16.6041 10.8447 16.6041 11.2492ZM15.809 11.2492C15.809 10.9872 15.7698 10.7662 15.6913 10.5863C15.614 10.4064 15.5047 10.2699 15.3634 10.1769C15.2221 10.084 15.0567 10.0375 14.8671 10.0375C14.6776 10.0375 14.5121 10.084 14.3708 10.1769C14.2296 10.2699 14.1197 10.4064 14.0412 10.5863C13.9639 10.7662 13.9253 10.9872 13.9253 11.2492C13.9253 11.5112 13.9639 11.7322 14.0412 11.9121C14.1197 12.0921 14.2296 12.2285 14.3708 12.3215C14.5121 12.4145 14.6776 12.4609 14.8671 12.4609C15.0567 12.4609 15.2221 12.4145 15.3634 12.3215C15.5047 12.2285 15.614 12.0921 15.6913 11.9121C15.7698 11.7322 15.809 11.5112 15.809 11.2492Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.7512 12.9319C16.0144 12.7822 16.2221 12.5654 16.3742 12.2816C16.5276 11.9979 16.6043 11.6537 16.6043 11.2492C16.6043 10.8447 16.5276 10.5006 16.3742 10.2168C16.2221 9.93303 16.0144 9.71688 15.7512 9.56836C15.4891 9.41863 15.1945 9.34376 14.8673 9.34376C14.5376 9.34376 14.2418 9.41863 13.9797 9.56836C13.7177 9.71688 13.5106 9.93303 13.3585 10.2168C13.2063 10.5006 13.1303 10.8447 13.1303 11.2492C13.1303 11.6525 13.2063 11.9961 13.3585 12.2798C13.5106 12.5636 13.7177 12.7803 13.9797 12.9301C14.2418 13.0798 14.5376 13.1547 14.8673 13.1547C15.1945 13.1547 15.4891 13.0804 15.7512 12.9319ZM15.7972 13.0129L15.7971 13.0129C15.5199 13.1701 15.2092 13.2478 14.8673 13.2478C14.5229 13.2478 14.2109 13.1695 13.9335 13.011C13.6553 12.852 13.4362 12.6219 13.2764 12.3238C13.1154 12.0235 13.0371 11.6641 13.0371 11.2492C13.0371 10.8332 13.1154 10.4731 13.2764 10.1728C13.4362 9.87467 13.6553 9.6452 13.9337 9.4874C14.211 9.32895 14.523 9.25061 14.8673 9.25061C15.2092 9.25061 15.5199 9.32899 15.7972 9.48736C16.0767 9.6451 16.2964 9.87452 16.4563 10.1726C16.6186 10.473 16.6974 10.8332 16.6974 11.2492C16.6974 11.6653 16.6185 12.0255 16.4562 12.3259C16.2963 12.624 16.0766 12.8539 15.7972 13.0129ZM15.606 10.6235L15.6058 10.6231C15.5346 10.4572 15.4361 10.3362 15.3123 10.2548C15.1881 10.173 15.0409 10.1306 14.8673 10.1306C14.6936 10.1306 14.5465 10.173 14.4222 10.2548C14.2984 10.3363 14.1993 10.4573 14.1268 10.6233C14.056 10.7883 14.0186 10.9959 14.0186 11.2492C14.0186 11.5025 14.056 11.7101 14.1268 11.8751C14.1993 12.0411 14.2984 12.1622 14.4222 12.2437C14.5465 12.3255 14.6936 12.3678 14.8673 12.3678C15.0409 12.3678 15.1881 12.3255 15.3123 12.2437C15.4361 12.1622 15.5346 12.0413 15.6058 11.8754L15.606 11.8749C15.678 11.71 15.716 11.5025 15.716 11.2492C15.716 10.9959 15.678 10.7885 15.606 10.6235ZM14.0413 11.9121C13.964 11.7322 13.9254 11.5112 13.9254 11.2492C13.9254 10.9872 13.964 10.7662 14.0413 10.5863C14.1198 10.4064 14.2297 10.2699 14.371 10.1769C14.5123 10.084 14.6777 10.0375 14.8673 10.0375C15.0568 10.0375 15.2223 10.084 15.3636 10.1769C15.5048 10.2699 15.6141 10.4064 15.6914 10.5863C15.7699 10.7662 15.8091 10.9872 15.8091 11.2492C15.8091 11.5112 15.7699 11.7322 15.6914 11.9121C15.6141 12.0921 15.5048 12.2285 15.3636 12.3215C15.2223 12.4145 15.0568 12.461 14.8673 12.461C14.6777 12.461 14.5123 12.4145 14.371 12.3215C14.2297 12.2285 14.1198 12.0921 14.0413 11.9121Z"
                  fill="currentColor"
                />
                <path
                  d="M12.9139 9.39453V10.0412H11.2367V13.104H10.4524V9.39453H12.9139Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.007 9.30133V10.1343H11.3297V13.1971H10.3591V9.30133H13.007ZM11.2366 10.0411H12.9138V9.39448H10.4523V13.104H11.2366V10.0411Z"
                  fill="currentColor"
                />
              </svg>
              <p
                id="choose__text"
                className="font-normal text-base md:text-2xl"
              >
                Качество ГОСТ, ТУ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[10px]">
        <div className="max-w-[1336px] mx-auto px-5 xl:px-0 flex lg:flex-row flex-col md:gap-[10px]">
          <div className="max-w-[489px] w-full lg:pr-[53px] lg:bg-white lg:pt-[55px] rounded-[20px] lg:pb-[175px] lg:pl-[43px]">
            <h3 className="font-semibold text-2xl mb-5 md:text-[35px] md:leading-[54px] lg:mb-10">
              Мы реализуем кабельную <br />
              продукцию заводов:
            </h3>
          </div>
          <div className="hidden md:flex flex-col gap-10 md:gap-[108px] max-w-[1336px] lg:max-w-[797px] w-full pl-[60px] pr-[81px] pt-[66px] pb-[51px] bg-white rounded-[20px]">
            <div className="max-w-[656px] flex flex-wrap md:flex-nowrap w-full items-center gap-10 md:justify-between">
              <img id="brands" src={products} alt="" className="object-cover" />
              <img
                id="brands"
                src={products1}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products2}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products3}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex max-w-[656px] flex-wrap md:flex-nowrap w-full items-center gap-10 md:justify-between">
              <img
                id="brands"
                src={products4}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products5}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products6}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products7}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid bg-white rounded-[20px] p-5 md:hidden grid-cols-2 gap-20">
            <img
              src={products1}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products2}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products3}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products4}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products5}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products6}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products7}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products1}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
          </div>
        </div>
      </section>
      <section className="pb-[39px]">
        <div
          id="proud"
          className="max-w-[1336px] mx-auto px-5 xl:px-0 flex xl:flex-row flex-col items-center gap-[10px]"
        >
          <div className="w-full xl:max-w-[489px] xl:max-h-[655px] xl:pt-10 xl:pl-10 xl:pr-[133px] p-5 xl:pb-12 bg-white rounded-[20px]">
            <h4 className="xl:mb-[194px] title_1">
              Кейсы, которыми <br />
              мы гордимся:
            </h4>
            <button className="hover:opacity-50 transition_default py-2 pl-2 md:py-[18px] md:pl-10 max-w-[200px] md:max-w-[315px] w-full bg-black rounded-[1000px] flex items-center gap-1 font-normal text-sm md:text-lg text-white">
              <svg
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16.5H9M23 16.5H26M16 26.5V23.5M16 9.50002V6.50002"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 16.5H18M16 18.5V14.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 7.83801C12.5195 6.95891 14.2445 6.49731 16 6.50001C21.523 6.50001 26 10.977 26 16.5C26 22.023 21.523 26.5 16 26.5C10.477 26.5 6 22.023 6 16.5C6 14.679 6.487 12.97 7.338 11.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Зафиксируйте скидку
            </button>
          </div>
          <div className="max-w-[1336px] xl:max-w-[797px] w-full">
            <SecondSwiper />
          </div>
        </div>
      </section>
      <Rewiews />
      <section className="pb-[10px]">
        <div className="max-w-[1336px] mx-auto px-5 xl:px-0 flex lg:flex-row flex-col md:gap-[10px]">
          <div className="max-w-[489px] w-full lg:pr-[53px] lg:bg-white lg:pt-[55px] rounded-[20px] lg:pb-[175px] lg:pl-[43px]">
            <h3 className="font-semibold text-2xl mb-5 md:text-[35px] md:leading-[54px] lg:mb-10">
              Наши <br /> клиенты:
            </h3>
          </div>
          <div className="hidden md:flex flex-col gap-10 md:gap-[108px] max-w-[1336px] lg:max-w-[797px] w-full pl-[60px] pr-[81px] pt-[66px] pb-[51px] bg-white rounded-[20px]">
            <div className="max-w-[656px] flex flex-wrap md:flex-nowrap w-full items-center gap-10 md:justify-between">
              <img id="brands" src={products} alt="" className="object-cover" />
              <img
                id="brands"
                src={products1}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products2}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products3}
                alt=""
                className="object-cover"
              />
            </div>
            <div className="flex max-w-[656px] flex-wrap md:flex-nowrap w-full items-center gap-10 md:justify-between">
              <img
                id="brands"
                src={products4}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products5}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products6}
                alt=""
                className="object-cover"
              />
              <img
                id="brands"
                src={products7}
                alt=""
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid bg-white rounded-[20px] p-5 md:hidden grid-cols-2 gap-20">
            <img
              src={products1}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products2}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products3}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products4}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products5}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products6}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products7}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
            <img
              src={products1}
              alt=""
              className="object-cover max-w-[161px] w-full"
            />
          </div>
        </div>
      </section>
      <section className="pb-[50px]">
        <div className="max-w-[1336px] mx-auto px-5">
          <h5 className="title_1">Наши реквизиты:</h5>
          <div className="flex items-center md:flex-row flex-col gap-[10px] lg:mb-0 mb-[10px] md:mb-5">
            <div className="w-full md:max-w-[270px] md:max-h-[342px] h-[342px] bg-white py-[35px] rounded-[20px] pr-[59px] pl-[52px] flex flex-col items-center">
              <img
                src={behruzniBrati}
                alt=""
                className="object-cover mb-9 max-w-[159px] h-[159px]"
              />
              <h5 className="font-semibold text-xl text-[#000000] mb-3">
                Сергей Мох
              </h5>
              <p className="font-normal text-xs text-[#000000]">
                Коммерческий <br />
                директор ООО ЮТА
              </p>
            </div>
            <div className="max-h-[342px] h-[342px] bg-white py-[35px] md:pr-[70px] md:pl-[38px] px-5 rounded-[20px] flex items-center gap-1 sm:gap-5 md:gap-9 max-w-[633px] w-full">
              <ul className="flex flex-col gap-[6px] sm:gap-2">
                <li>
                  <a
                    href="#"
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    Юридический адрес:
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    ИНН
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    КПП
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    ОГРН
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    ОКПО
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    БИК
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    Корр. счёт
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    Расч. счёт
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-bold text-xs lg:text-base text-[#3E3C49]"
                  >
                    Банк
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-[6px] sm:gap-2">
                <li>
                  <a
                    href="#"
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    603089 Н.Новгород, Полтавская 32, оф. 17
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    5262364830
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    526201001
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    119527
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    119527
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    042202603
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    042202603
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    042202603
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    id="brand_link"
                    className="font-medium text-xs lg::text-base text-[#3E3C49]"
                  >
                    Волго-Вятский банк ПАО Сбербанк
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-h-[342px] h-[342px] lg:grid grid-cols-1 hidden p-2 bg-white rounded-[20px] max-w-[424px]">
              <iframe
                src="https://yandex.uz/maps/10329/andijan/?ll=72.353874%2C40.759811&z=14"
                frameBorder={0}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="lg:hidden grid grid-cols-1 max-h-[342px] h-[342px] p-2 bg-white rounded-[20px] w-full">
            <iframe
              src="https://yandex.uz/maps/10329/andijan/?ll=72.353874%2C40.759811&z=14"
              frameBorder={0}
              className="h-full w-full"
            />
          </div>
        </div>
      </section>
      <section className="pb-12 md:pb-[116px]">
        <div className="max-w-[1336px] mx-auto px-5">
          <h5 className="title_1 max-w-[544px]">
            Выгодное предложение на продукцию брендов:
          </h5>
          <div className="bg-white p-10 md:pt-[73px] md:pl-[58px] md:pb-[65px] md:pr-[63px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 sm:gap-x-[70px] lg:gap-x-[141px] gap-y-6 sm:gap-y-10 lg:gap-y-20 rounded-[20px]">
            <img id="brands" src={brand1} alt="" className="object-cover" />
            <img id="brands" src={brand2} alt="" className="object-cover" />
            <img id="brands" src={brand3} alt="" className="object-cover" />
            <img id="brands" src={brand4} alt="" className="object-cover" />
            <img id="brands" src={brand5} alt="" className="object-cover" />
            <img id="brands" src={brand6} alt="" className="object-cover" />
            <img id="brands" src={brand7} alt="" className="object-cover" />
            <div className="lg:block hidden" />
            <img id="brands" src={brand8} alt="" className="object-cover" />
            <img id="brands" src={brand9} alt="" className="object-cover" />
            <img id="brands" src={brand10} alt="" className="object-cover" />
            <img id="brands" src={brand11} alt="" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="pb-9 md:pb-[50px]">
        <div
          id="form"
          className="bg-white max-w-[686px] mx-auto px-5 py-6 md:py-[54px] md:pl-[83px] md:pr-[93px] rounded-[20px]"
        >
          <h5 className="title_1 text-center mb-5 md:mb-[50px]">
            Появились вопросы?
          </h5>
          <form className="">
            <input
              required=""
              type="text"
              className="w-full border border-[#b5b1b7] bg-[#EFEDF0] pt-[15px] pb-[13px] pl-6 rounded-[750px] mb-[10px]"
              placeholder="Ваше имя"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[10px]">
              <input
                required=""
                type="tel"
                className="w-full border border-[#b5b1b7] bg-[#EFEDF0] pt-[15px] pb-[13px] pl-6 rounded-[750px] mb-[10px]"
                placeholder="+7 (___) ___ __ __"
              />
              <input
                required=""
                type="email"
                className="w-full border border-[#b5b1b7] bg-[#EFEDF0] pt-[15px] pb-[13px] pl-6 rounded-[750px] mb-[10px]"
                placeholder="Email"
              />
            </div>
            <textarea
              required=""
              name=""
              className="w-full bg-[#EFEDF0] border border-[#b5b1b7] h-[174px] pt-[15px] pb-[13px] pl-6 rounded-[20px] mb-4 md:mb-[25px]"
              id=""
              cols={30}
              rows={10}
              placeholder="Опишите кратко суть Вашего вопроса..."
              defaultValue={""}
            />
            <p className="font-normal text-xs mb-3 text-center">
              Отправляя форму, Вы соглашаетесь на обработку Ваших персональных
              данных
            </p>
            <button
              type="button"
              className="w-full py-4 md:px-[157px] rounded-[750px] bg-black text-white font-medium text-lg hover:bg-[#FF8A00] hover:text-white transition_default"
            >
              Отправить вопрос
            </button>
          </form>
        </div>
      </section>
      <footer className="pb-5 md:pb-[34px]">
        <div className="bg-[#000000] max-w-[1336px] mx-auto px-5 rounded-[20px] pt-[29px] md:pr-12 md:pl-9 pb-[35px] flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 sm:justify-between">
          <div className="flex flex-col gap-[30px]">
            <a href="#" className="">
              <img src="./img/footer/footer__logo.svg" alt="" className="" />
            </a>
            <p className="font-extrabold text-sm md:text-base text-white">
              ПН-ПТ 9:00-18:00
            </p>
            <p className="font-medium text-base md:text-lg hover:text-white transition_default text-[#525252]">
              Все права защищены
            </p>
          </div>
          <ul className="flex flex-col gap-4 md:gap-[50px]">
            <li>
              <a
                href="#"
                className="transition_default hover:opacity-50 text-base md:text-lg font-semibold text-white"
              >
                Ассортимент
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition_default hover:opacity-50 text-base md:text-lg font-semibold text-white"
              >
                Запросить прайс
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition_default hover:opacity-50 text-base md:text-lg font-semibold text-white"
              >
                О компании
              </a>
            </li>
          </ul>
          <div className="flex flex-col gap-6">
            <a
              href="#"
              className="font-semibold transition_default hover:opacity-50 text-base md:text-lg text-white"
            >
              +7 (999) 267 03 44
            </a>
            <button className="max-w-[183px] transition_default hover:bg-white hover:text-black py-3 sm:py-[23px] px-8 border transition_default border-white rounded-[95px] font-semibold text-xs md:text-[15px] text-white">
              Заказать звонок
            </button>
            <a
              href="#"
              className="font-semibold text-sm md:text-base text-white border-b border-white max-w-[105px]"
            >
              Написать нам
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
