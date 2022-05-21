import React from 'react'

function Header() {
  return (
<header className="flex justify-between w-full text-fem-light-100 items-center">
          <h1 className="uppercase tracking-[0.4rem] font-bold align-baseline">Todo</h1>
          <button className="px-1 rounded group flex justify-center items-center">
            <i className="fa-solid fa-sun hidden group-hover:-translate-y-[2px] duration-500"></i>
            <i className="fa-solid fa-moon hiddn group-hover:-translate-y-[2px] duration-500"></i>
          </button>
        </header>
  )
}

export default Header