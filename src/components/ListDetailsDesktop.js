import React from 'react'
import ListDetailsClear from './ListDetailsClear'
import ListDetailsLeft from './ListDetailsLeft'
import ListDetailsSubcategory from './ListDetailsSubcategory'

function ListDetailsDesktop() {
  return (
  <div className="hidden sm:flex text-fem-light-400  flex-col gap-2 item-center justify-center sm:flex-row sm:justify-between text-xs px-4 py-3 pb-2">
      <ListDetailsLeft />
      <ListDetailsSubcategory />
      <ListDetailsClear />
    </div>
  )
}

export default ListDetailsDesktop