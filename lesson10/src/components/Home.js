import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
        <ul>
            <li><Link to ='/auth/login'>Login</Link></li>
            <li><Link to ='/auth/register'>Register</Link></li>
            <li><Link to ='/products/12'>Product</Link></li>
            <li><Link to ='/invoices/123'>Invoice</Link></li>
            <li><Link to ='/cart'>Cart</Link></li>
            <li><Link to ='/profile'>Profile</Link></li>
            <li><Link to ='/about'>About</Link></li>
        </ul>
    </div>
  )
}
