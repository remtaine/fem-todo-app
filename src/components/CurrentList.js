import React from 'react'
import ListDetailsDesktop from './ListDetailsDesktop'
import ListDetailsMobile from './ListDetailsMobile'
import ListDetailsMobileSubcategory from './ListDetailsMobileSubcategory'
import ListItem from './ListItem'

function CurrentList() {
    
  return (
  <section className="w-full">
    <div className="rounded shadow bg-fem-light-100 dark:bg-fem-dark-200 ">
      <ul className="flex flex-col">
        <ListItem />
        <ListItem text="Walk the dog"/>
        <ListItem text="Read a book"/>
      </ul>
      <ListDetailsDesktop />
      <ListDetailsMobile />
    </div>
    <div className="block sm:hidden">
      <ListDetailsMobileSubcategory />
    </div>
  </section>
  )
}

export default CurrentList
