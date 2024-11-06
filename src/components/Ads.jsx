import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import data from "./tops.json"; // Correct if tops.json is in the same directory
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

export default function Ads() {
    console.log(data); 
    const navigate = useNavigate();
    return (
        <div className="w-[390px]">
            <Navbar />
            <br />
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
            >
                <SwiperSlide>
                    <img
                        src='/ad1.png' // Ensure this image path is correct
                        alt=""
                        className="w-full h-[230px] object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='/ad2.png' // Ensure this image path is correct
                        alt=""
                        className="w-full h-[230px] object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src='/ad3.png' // Ensure this image path is correct
                        alt=""
                        className="w-full h-[230px] object-cover rounded-xl"
                    />
                </SwiperSlide>
            </Swiper>
            <br />
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                centeredSlides={true}
                loop={true} // Optional: Enables infinite looping
                navigation
                pagination
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index} onClick={()=>navigate(`/${item.link}`)}>
                            <div
                                className={`w-[170px] h-[120px] rounded-xl relative flex items-center justify-center ${item.bgColor === 'yellow-200' ? 'bg-yellow-200' : ''} ${item.bgColor === 'blue-300' ? 'bg-blue-300' : ''} ${item.bgColor === 'red-200' ? 'bg-red-200' : ''} ${item.bgColor === 'green-200' ? 'bg-green-200' : ''} ${item.bgColor === 'purple-200' ? 'bg-purple-200' : ''} ${item.bgColor === 'gray-200' ? 'bg-gray-200' : ''}`}
                            >
                                <p className="text-[50px] absolute top-[-8px]">{item.icon}</p>
                                <p className="text-4xl font-semibold absolute bottom-6">{item.title}</p>
                                <FaAngleRight className="text-2xl absolute bottom-1 right-1" />
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}
