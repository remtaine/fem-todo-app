import React from 'react'
import PropTypes from 'prop-types'

function ButtonsGradient(props) {
  return (
    <div className="flex items-center justify-center rounded-full p-[1px] bg-fem-light-200 dark:bg-fem-dark-600 duration-500 group-hover:bg-gradient-to-br from-fem-200 via-fem-100 to-fem-300">
        <button onClick={props.clickAction} className="bg-fem-light-100 dark:bg-fem-dark-200 hover:opacity-60 duration-500 w-4 h-4 rounded-full flex justify-center items-center">
        
        </button>
    </div>
  )
}

ButtonsGradient.propTypes = {
  clickAction: PropTypes.func,
}

ButtonsGradient.defaultProps = {
  clickAction: () => {console.log("Button pressed!")},
}

export default ButtonsGradient