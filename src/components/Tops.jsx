import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import data from './tops.json';
import { FaAngleRight, FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

export default function TopsDetail() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-1'>
      <div className='text-gray-700 font-medium  py-2 px-2 bg-gray-200'>
        <div className="flex items-center gap-2">
          <FaArrowLeft className='size-9 rounded-lg cursor-pointer hover:bg-gray-300 active:bg-gray-400 p-2' onClick={() => navigate('/')} />
          <h1 className='text-xl font-bold'>Tops</h1>
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          className='w-[100%] relative top-2'
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleClick(index)}
                className={`w-[100px] h-[40px] rounded-full flex items-center justify-center cursor-pointer ${activeIndex === index ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-800'
                  }`}
              >
                <span className="text-lg">{item.title}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="p-5 flex flex-col gap-1">
        <div className="w-[100%] flex gap-1 h-[80px]">
          <div className="w-1/2 bg-gray-300 rounded-xl"></div>
          <div className="w-1/4 bg-gray-300 rounded-xl"></div>
          <div className="w-1/4 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="w-[100%] flex gap-1 h-[160px]">
          <div className="w-1/2 bg-gray-300 rounded-xl flex justify-center items-center text-xl font-medium">Logolar</div>
          <div className="w-1/2 rounded-xl flex flex-col gap-1">
            <div className="h-1/2 bg-gray-300 rounded-xl flex justify-center items-center text-xl font-medium">Logolar</div>
            <div className="h-1/2 bg-gray-300 rounded-xl flex justify-center items-center text-xl font-medium">Logolar</div>
          </div>
        </div>
        <div className="w-[100%] flex gap-1 h-[80px] ">
          <div className="w-1/4 bg-gray-300 rounded-xl"></div>
          <div className="w-1/2 bg-gray-300 rounded-xl"></div>
          <div className="w-1/4 bg-gray-300 rounded-xl"></div>
        </div>
        <div className="w-[100%] flex gap-1 h-[160px]">
          <div className="w-1/2 rounded-xl flex flex-col gap-1">
            <div className="h-1/2 bg-gray-300 rounded-xl"></div>
            <div className="h-1/2 bg-gray-300 rounded-xl"></div>
          </div>
          <div className="w-1/2 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
