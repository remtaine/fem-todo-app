import React from 'react'
import ButtonsGradient from './ui/ButtonsGradient'

function CurrentList() {
    
  return (
    <section className="rounded shadow bg-fem-light-100 py-2 px-4 w-[420px]">
    <ul className="flex ">
      <div className="flex items-center gap-2 border-b-[1px]border-fem-light-300 mb-2 group w-full">
        <ButtonsGradient />
        <span className="">Go to the groceries</span>
        <div className="ml-auto flex gap-2">
          <button className="ml-auto"><i className="fa-solid fa-pen hidden group-hover:block hover:-translate-y-[2px] ease-in-out duration-500"></i></button>
          <button className="ml-auto"><i className="fa-solid fa-xmark hidden group-hover:block hover:-translate-y-[2px] ease-in-out duration-500"></i></button>
        </div>
      </div>
    </ul>
    <div className="text-fem-light-500 flex justify-between text-[0.5rem]">
      <button className="hover:text-fem-light-400 duration-500">5 items left</button>
      {/* <span className="mx-1">|</span> */}
      <div className="flex gap-2  ml-6 flex-nowrap">
        <button className="hover:text-fem-light-400 duration-500">All</button>
        <button className="hover:text-fem-light-400 duration-500">Active</button>
        <button className="hover:text-fem-light-400 duration-500">Completed</button>
      </div>
      {/* <span className="mx-1">|</span> */}
      <button className="hover:text-fem-light-400 duration-500">Clear Completed</button>
    </div>
  </section> 
  )
}

export default CurrentList
