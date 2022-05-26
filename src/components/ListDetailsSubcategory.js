import React from 'react'

function ListDetailsSubcategory() {
  return (
    <div className="flex gap-2 ml-6 flex-nowrap justify-center text-fem-dark-600">
        <button className="text-fem-100 duration-500">All</button>
        <button className="hover:text-fem-light-400 duration-500">Active</button>
        <button className="hover:text-fem-light-400 duration-500">Completed</button>
    </div>
  )
}

export default ListDetailsSubcategory