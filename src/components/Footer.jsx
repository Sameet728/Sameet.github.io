import React from 'react'

const Footer = ({darkmode}) => {
  return (
    <>
    <div className={`${darkmode ?"bg-gray-950 text-white" :""} border-t border-grey-400`}>
<h2 className='text-center p-2 m-0'>Copyright © 2024 Sameet Pisal. All Rights Reserved.</h2>
    </div>
    </>
  )
}

export default Footer