import React from 'react'
import PropTypes from 'prop-types'
import ButtonsGradient from './ui/ButtonsGradient'

function ListItem(props) {
  return (
    <li className="flex items-center gap-2 border-b-[1px] px-4 py-2 border-fem-light-300 dark:border-fem-dark-700 group w-full font-light text-xl">
        <ButtonsGradient />
        {/* <span className="pt-1 break-words">{props.text}</span> */}
        <span className="pt-1 break-words">{props.text}</span>
        <div className="ml-auto flex gap-2">
            <button className=""><i className="fa-solid fa-xmark hidden group-hover:block hover:-translate-y-1 ease-in-out duration-500"></i></button>
        </div>
    </li>
  )
}

ListItem.propTypes = {
    text: PropTypes.string,
    isChecked: PropTypes.bool,
}
ListItem.defaultProps = {
    text: "Go to the groceries",
    isChecked: false,
}

export default ListItem