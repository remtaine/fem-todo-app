import React from 'react'
import ListDetailsClear from './ListDetailsClear'
import ListDetailsLeft from './ListDetailsLeft'
import ListDetailsSubcategory from './ListDetailsSubcategory'

function ListDetailsMobile() {
  return (
    <div className="sm:hidden flex text-fem-light-400 justify-between gap-2 item-center justify-center md:flex-row md:justify-between text-xs px-4 py-3 pb-2">
      <ListDetailsLeft />
      <ListDetailsClear />
    </div>
  )
}

export default ListDetailsMobile