import React from "react"

export const CardServices = ({title, description, link}) => {
  return (
    <div>
      <h3 className="text-opacity-0 text-red-100">{title}</h3>
      <p>{description}</p>
      <a>{link}</a>
    </div>
  )
} 

