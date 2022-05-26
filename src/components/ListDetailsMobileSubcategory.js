import React from 'react'

function ListDetailsMobileSubcategory() {
  return (
    <div className="flex gap-4 pt-4 pb-3 my-4 rounded-md shadow flex-nowrap justify-center text-fem-dark-600 bg-fem-light-100 dark:bg-fem-dark-200">
        <button className="text-fem-100 duration-500">All</button>
        <button className="hover:text-fem-light-400 duration-500">Active</button>
        <button className="hover:text-fem-light-400 duration-500">Completed</button>
    </div>
  )
}

export default ListDetailsMobileSubcategory