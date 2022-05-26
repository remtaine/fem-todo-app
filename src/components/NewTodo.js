import React from 'react'
import ButtonsGradient from './ui/ButtonsGradient'

function NewTodo() {
  return (
    <section className="w-full group flex justify-center items-center  px-4 gap-2 rounded shadow text-2xl bg-fem-light-100 dark:bg-fem-dark-200">
        <ButtonsGradient />
        <div className="w-full">
            <input type="text" name="" id="" placeholder="Create a new todo..." className="w-full dark:placeholder-fem-dark-500 text-2xl pt-1 h-16 outline-none dark:bg-fem-dark-200"/>
        </div>
        <button className="ml-auto"><i className="fa-solid fa-plus hidden group-hover:block hover:-translate-y-[2px] ease-in-out duration-500"></i></button>
    </section>
  )
}

export default NewTodo