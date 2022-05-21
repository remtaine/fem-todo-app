import React from 'react'

function ButtonsGradient() {
  return (
    <div className="flex items-center justify-center rounded-full p-[3px] bg-fem-light-200 duration-500 group-hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <button className="bg-fem-light-100 hover:opacity-60 duration-500 w-3 h-3 rounded-full"></button>
    </div>
  )
}

export default ButtonsGradient