import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className='flex justify-center items-center max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]'>
    <div className='spinner'></div>
  </div>
  )
}

export default Spinner
