import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarLanding = () => {
    return (
        <div className='p-20-ub flex'>
            <div className='flex'>
                <h2 className='link-nav-main'>
                    <Link to={'/'}>
                        FWTL
                    </Link>
                </h2>
            </div>
            <div className='flex flex-j-end'>
                <div className='link-nav-main'>
                    <Link to={'/'} > Home</Link>
                </div>
                <div className='link-nav-main'>
                    <Link to={'/login'} > Log In</Link>
                </div>
            </div>
        </div >
    )
}
