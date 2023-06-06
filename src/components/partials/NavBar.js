import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarLanding = () => {
    return (
        <div className='fixed-nav'>
            <div className='flex nav-main'>
                <div className='flex'>
                    <h2 className='p-10-ub'>
                        <Link to={'/'}>
                            <h4>
                                <i>FWTL.</i>
                            </h4>
                        </Link>
                    </h2>
                </div>
                <div className='flex flex-j-end nav-link-group'>
                    <div className='link-nav-main'>
                        <Link to={'/'}>Home</Link>
                    </div>
                    <div className='link-nav-main'>
                        <Link to={'/login'}>Log In</Link>
                    </div>
                </div>
            </div >
        </div>
    )
}
