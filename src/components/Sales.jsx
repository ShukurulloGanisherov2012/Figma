import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'

export default function Sales() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='text-gray-700 font-medium  py-2 px-2 bg-gray-200'>
                <div className="flex items-center gap-2">
                    <FaArrowLeft className='size-9 rounded-lg cursor-pointer hover:bg-gray-300 active:bg-gray-400 p-2' onClick={() => navigate('/')} />
                    <h1 className='text-xl font-bold'>Sales</h1>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <img src="/kfc.png" alt="" />
                <img src="/kfc.png" alt="" />
                <img src="/kfc.png" alt="" />
                <img src="/kfc.png" alt="" />
                <img src="/kfc.png" alt="" />
            </div>
        </div>
    )
}
