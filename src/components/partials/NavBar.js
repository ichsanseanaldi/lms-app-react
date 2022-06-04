import React from 'react'
import { Link } from 'react-router-dom'

export const NavBarLanding = () => {
    return (
        <div className='p-20-ub flex'>
            <div className='flex'>
                <strong className='link-nav brand'>
                    <Link to={'/'}>
                        <i>
                            FWTL
                        </i>
                    </Link>
                </strong>
            </div>
            <div className='flex flex-j-end'>
                <div className='link-nav'>
                    <Link to={'/'} > Home</Link>
                </div>
                <div className='link-nav'>
                    <Link to={'/login'} > Login</Link>
                </div>
            </div>
        </div>
    )
}
