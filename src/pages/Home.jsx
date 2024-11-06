import React from 'react'
import { Ads, Category } from '../components'

export default function Home() {
  return (
    <div className='w-[390px]'>
      <Ads />
      <br />
      <hr className='size-3 bg-gray-200 w-[390px]' />
      <br />
      <Category />
    </div>
  )
}
