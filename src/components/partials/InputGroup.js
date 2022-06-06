import React from 'react'
import { StyledInput } from '../../style/components/StyledInput'

export const InputGroup = ({ type, name, id, value, onChange, login }) => {
    return (
        <div className='flex flex-column'>
            <label htmlFor={name}>{name}</label>
            <StyledInput
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={`${name} ${login ? '' : '(min. 5 char, max. 20 char)'}`}
                border={true}
                pattern=".{5,10}"
                required
            />
        </div>
    )
}
