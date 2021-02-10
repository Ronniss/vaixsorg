import React from 'react'

export const Button = ({title, className}) => {
  return (
    <>
      {/*<button className={`${className} font-bold py-2 px-4 rounded-full`}>
        {title}
      </button> */}
      <button className={`btn ${className} `}>
        {title}
      </button>
    </>
  )
}
