import React from 'react'
import { Link } from 'react-router-dom'

function BottomLinks() {
  return (
    <div className='bg-blue-100'>
      <div className="flex overflow-hidden ">
        <Link to="/contact" className="flex-1 text-center py-4 transition-all duration-300 bg-gradient-to-r from-gray-100 to-gray-300 hover:bg-gray-400 hover:text-white transform hover:scale-105 ">
          <div className="font-semibold">Contact</div>
        </Link>
        <Link to="/donation" className="flex-1 text-center py-4 transition-all duration-300 bg-gray-300 hover:bg-gray-400 hover:text-white transform hover:scale-105 mx-1">
          <div className="font-semibold">Donation</div>
        </Link>
        <Link to="/volunteer" className="flex-1 text-center py-4 transition-all duration-300 bg-gradient-to-r from-gray-300 to-gray-100 hover:bg-gray-400 hover:text-white transform hover:scale-105">
          <div className="font-semibold">Volunteer</div>
        </Link>
      </div>
    </div>
  )
}

export default BottomLinks
