import Image from "next/image"
import iam from '../../public/mobile-login.png'
import Link from 'next/link'
import React from 'react'
const Hero = () => {
  return(
    <div className="flex container lg:container justify-start flex-col items-center flex-col-reverse lg:flex-row  mt-4">
      <div className="basis-1/2 text-xl font-body">
       <p className="font-display text-gray-400 text-xl lg:text-left text-center">Halo, I`m Muhammad Fauzi</p>
       <p className="font-display text-purple-600 lg:text-left text-center lg:text-4xl text-3xl mb-4 ">IT Support That can Help <br /> Your Business and UI Design Activists on Dribbble </p>
        <p className="font-body text-gray-600 tracking-normal text-base lg:text-lg lg:text-left text-center">I am from Indonesia, I have 4 years experience as IT Support, 2 years 8 months working as IT Support at PT. Visoft Media Indonesia and 1 Year 11 Months Working as IT Staff & Digital Publishing Helpdesk at CV. Gema Insani Press.</p>
        <div className="flex space-x-4 lg:justify-start justify-center lg:mt-12 my-6">
          <button className="flex pl-4 items-center py-3 bg-purple-600 rounded text-white font-body w-48 hover:bg-purple-700 ease-in duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="pl-2">My Whatsapp</p>
          </button>
          <Link href="/home">
          <button className="flex pl-4 items-center py-3 border-2  border-purple-600 rounded text-purple-600 font-body w-48 hover:bg-purple-200 hover:text-white ease-in duration-300 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <p className="pl-2">Download CV</p>
          </button>
          </Link>
        </div>
        
      </div>
      <div className="basis-1/2  pt-2  lg: pt-4">
        <Image src={iam} alt="image" />
      </div>

    </div>
  )
}

export default Hero