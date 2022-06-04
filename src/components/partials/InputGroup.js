import React from 'react'
import { StyledInput } from '../../style/components/StyledInput'

export const InputGroup = ({ type, name, id, value, onChange }) => {
    return (
        <div className='flex flex-column'>
            <label htmlFor={name}>{name}</label>
            <StyledInput type={type} name={name} id={id} value={value} onChange={onChange} placeholder={name} border={true} required />
        </div>
    )
}
