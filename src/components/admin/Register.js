import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addAkunThunk } from '../../redux/admin/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { grey } from '../../style/ColorVariable';
import { Form } from '../partials/Form';

export const Register = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [token, tokenExp] = useRefresh('admin');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const post = (e) => {

        e.preventDefault();

        dispatch(addAkunThunk({
            username: usernameRegister,
            password: passwordRegister
        }, token, tokenExp))

        navigate('/dashboard-admin');
    }

    return (

        <StyledContainer>
            <StyledWrapper>
                <StyledHeading backgroundcolor={grey}>
                    Register Akun Guru
                </StyledHeading>
                <div className='m-t-20 flex flex-center'>
                    <Form
                        typeOne="text"
                        typeTwo="password"
                        nameOne="username"
                        nameTwo="password"
                        onSubmit={post}
                        onChangeOne={e => setUsername(e.target.value)}
                        onChangeTwo={e => setPassword(e.target.value)}
                        valueOne={usernameRegister}
                        valueTwo={passwordRegister}
                    />
                </div>
            </StyledWrapper>
        </StyledContainer>
    )
}
