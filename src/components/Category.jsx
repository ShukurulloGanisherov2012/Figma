import React from 'react';
import categoryDate from './category.json'
import Navbar from './Navbar';

export default function Category() {
  return (
    <div>
      {
        categoryDate.map((category) => { return (
          <div key={category.id} className='hover:border-2'>
            <img src={category.image} alt="" />
          </div>
        ) })
      }
    </div>
  )
}
