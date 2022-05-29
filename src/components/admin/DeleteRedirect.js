import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const DeleteRedirect = () => {

    const navigate = useNavigate()

    useEffect(() => {

        navigate('/dashboard-admin');

    }, [])

    return (
        <div>Deleting...</div>
    )
}
