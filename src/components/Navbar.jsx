import React from 'react';
import { IoLocationOutline } from "react-icons/io5";

export default function Navbar() {
    return (
        <div className='flex justify-between bg-gray-200'>
            
            <div className='text-gray-700 font-medium flex py-3 px-2 bg-gray-200 items-center gap-1'>
                <IoLocationOutline className='size-5' />
                <select className='bg-gray-200 text-gray-700 font-medium outline-none'>
                    <option>Navoiy-city</option>
                    <option>Samarqand</option>
                    <option>Farg'ona</option>
                    <option>Sirdaryo</option>
                    <option>Toshkent</option>
                </select>
            </div>

            <div className='text-gray-700 font-medium flex py-3 px-3 bg-gray-200 items-center gap-1'>
                <select className='bg-gray-200 text-gray-700 font-medium outline-none'>
                    <option>Uz</option>
                    <option>Eng</option>
                    <option>Ru</option>
                </select>
            </div>
        </div>
    )
}
