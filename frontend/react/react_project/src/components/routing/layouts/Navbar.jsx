import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[10vh] bg-amber-600 text-amber-50 flex justify-center items-center gap-16'>
        <Link to='/home'>Products</Link>
        <Link to='/home/cart'>Cart</Link>
        <Link to='/home/payments'>Payments</Link>
    </div>
  )
}

export default Navbar