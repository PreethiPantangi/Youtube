import React from 'react'

const Button = ({buttonsList}) => {
  return (
    <div>
        {buttonsList.map(button => <button key={button} className='bg-gray-100 px-2 py-2 mr-2 rounded-lg'>{button}</button>)}
    </div>
  )
}

export default Button