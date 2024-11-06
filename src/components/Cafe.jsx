import React, { useState } from 'react';
import { IoMap, IoSearch } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BiSlider, BiSliderAlt } from "react-icons/bi";
import 'swiper/css';

export default function Cafe() {
    const data = [
        { name: "Ochiqlar", id: 0 },
        { name: "Eng yaqinlari", id: 1 },
        { name: "Reyting", id: 2 },
        { name: "Narx", id: 3 }
    ];
    
    const [activeIndexes, setActiveIndexes] = useState(Array(data.length).fill(false));

    const handleClick = (index) => {
        // Toggle current index
        const newActiveIndexes = [...activeIndexes];
        newActiveIndexes[index] = !newActiveIndexes[index];
        setActiveIndexes(newActiveIndexes);
    };
    const navigate = useNavigate();

    return (
        <div>
            <div className="text-gray-700 font-medium py-4 px-10 bg-gray-200">
                <div className="bg-white flex items-center p-2 gap-2 rounded-lg">
                    <IoSearch className="size-7" />
                    <div className="w-[1px] bg-gray-400 h-8"></div>
                    <input type="text" className="outline-none" />
                    <div className="w-[1px] bg-gray-400 h-8"></div>
                    <IoMap className="size-7" color="gray" />
                </div>
            </div>
            <div className="flex justify-between items-center mt-2 px-5">
                <h1 className='text-2xl font-bold'>Kafelar</h1>
                <BiSliderAlt color='gray' size={30} />
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={2.5}
                className="w-[100%] relative top-2"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div
                            onClick={() => handleClick(index)}
                            className={`w-[110px] h-[40px] rounded-full flex items-center justify-center cursor-pointer ${
                                activeIndexes[index] ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'
                            }`}
                        >
                            <span className="text-lg">{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex flex-col gap-5 w-[100%] mt-10  ">
                <img onClick={()=>navigate('/single/kfc')} src="/kfccard.png" className=' w-[100%] object-contain' alt="" />
                <img onClick={()=>navigate('/single/bro')} src="/brocard.png" className=' w-[100%] object-contain' alt="" />
                <img onClick={()=>navigate('/single/kfc')} src="/kfccard.png" className=' w-[100%] object-contain' alt="" />
                <img onClick={()=>navigate('/single/bro')} src="/brocard.png" className=' w-[100%] object-contain' alt="" />
            </div>
        </div>
    );
}
