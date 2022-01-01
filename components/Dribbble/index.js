import React from 'react'
import PropTypes from 'prop-types'


const Dribbble = ({data}) => {
  return (
   <div className="flex flex-col justify-center my-10">
      <h1 className="flex justify-center items-center font-display text-4xl text-purple-700 pb-10">Project and Exploration</h1>
      
      <div className="flex flex-wrap  justify-center gap-8 ">
      {data.map((data) => {
        return(
            <div key={data.id} className="w-96 border border-purple-300 p-4 rounded-lg ">
              <img src={data.images.normal} alt="images-for-dribbble" className="rounded-lg"/>
              <h1 dangerouslySetInnerHTML={{
                __html:`${data.title}`
              }} className='font-body  font-bold text-purple-700 text-lg  py-2' ></h1>
              <p dangerouslySetInnerHTML={{
                __html: `${data.description}`
              }} className='font-body text-md text-gray-500'/>
            </div>

        )
      })}
      </div>

   </div>
  )
}


Dribbble.propTypes = {
  data : PropTypes.array
}

export default Dribbble
