import React, { useState } from 'react'
import { useRefresh } from '../../hooks/useRefresh';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSiswaThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { Form } from '../partials/Form';
import { yellow } from '../../style/ColorVariable';

export const TambahSiswa = () => {

    const [usernameRegister, setUsername] = useState('');
    const [passwordRegister, setPassword] = useState('');

    const [token, tokenExp] = useRefresh('guru');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const body = {
        username: usernameRegister,
        password: passwordRegister
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addSiswaThunk(body, token, tokenExp))
        navigate(`/dashboard-guru`, { replace: true })
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Tambah Akun Siswa
                </StyledHeading>
                <div className='flex flex-center m-t-20'>
                    <Form
                        typeOne="text"
                        typeTwo="password"
                        nameOne="username"
                        nameTwo="password"
                        onSubmit={post}
                        onChangeOne={handleUsername}
                        onChangeTwo={handlePassword}
                        valueOne={usernameRegister}
                        valueTwo={passwordRegister}
                        header='Tambah Akun Siswa'
                        svg='<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 20C37.5277 20 35.111 20.7331 33.0554 22.1066C30.9998 23.4801 29.3976 25.4324 28.4515 27.7165C27.5054 30.0005 27.2579 32.5139 27.7402 34.9386C28.2225 37.3634 29.413 39.5907 31.1612 41.3388C32.9093 43.087 35.1366 44.2775 37.5614 44.7598C39.9861 45.2421 42.4995 44.9946 44.7836 44.0485C47.0676 43.1024 49.0199 41.5002 50.3934 39.4446C51.7669 37.389 52.5 34.9723 52.5 32.5C52.5 29.1848 51.183 26.0054 48.8388 23.6612C46.4946 21.317 43.3152 20 40 20ZM40 40C38.5166 40 37.0666 39.5601 35.8332 38.736C34.5999 37.9119 33.6386 36.7406 33.0709 35.3701C32.5033 33.9997 32.3547 32.4917 32.6441 31.0368C32.9335 29.582 33.6478 28.2456 34.6967 27.1967C35.7456 26.1478 37.082 25.4335 38.5368 25.1441C39.9917 24.8547 41.4997 25.0032 42.8701 25.5709C44.2406 26.1386 45.4119 27.0999 46.236 28.3332C47.0601 29.5666 47.5 31.0166 47.5 32.5C47.498 34.4885 46.7072 36.395 45.3011 37.8011C43.895 39.2072 41.9885 39.998 40 40Z" fill="black" />
                            <path d="M40 5C33.0777 5 26.3108 7.05271 20.5551 10.8986C14.7993 14.7444 10.3133 20.2107 7.66423 26.6061C5.01516 33.0015 4.32205 40.0388 5.67253 46.8282C7.02301 53.6175 10.3564 59.8539 15.2513 64.7487C20.1461 69.6436 26.3825 72.977 33.1719 74.3275C39.9612 75.678 46.9985 74.9848 53.3939 72.3358C59.7894 69.6867 65.2556 65.2007 69.1015 59.445C72.9473 53.6892 75 46.9223 75 40C74.9894 30.7207 71.2985 21.8244 64.7371 15.263C58.1756 8.70148 49.2793 5.01059 40 5ZM25 65.9425V62.5C25.002 60.5115 25.7928 58.605 27.1989 57.1989C28.605 55.7928 30.5115 55.002 32.5 55H47.5C49.4885 55.002 51.395 55.7928 52.8011 57.1989C54.2072 58.605 54.998 60.5115 55 62.5V65.9425C50.4479 68.6005 45.2713 70.0012 40 70.0012C34.7287 70.0012 29.5521 68.6005 25 65.9425ZM59.98 62.315C59.9302 59.0358 58.5942 55.9075 56.2598 53.604C53.9254 51.3005 50.7796 50.0062 47.5 50H32.5C29.2205 50.0062 26.0746 51.3005 23.7402 53.604C21.4059 55.9075 20.0698 59.0358 20.02 62.315C15.4864 58.2669 12.2893 52.9372 10.8521 47.0317C9.41486 41.1261 9.80526 34.9234 11.9716 29.2446C14.138 23.5659 17.9781 18.6792 22.9834 15.2314C27.9888 11.7837 33.9234 9.93756 40.0013 9.93756C46.0792 9.93756 52.0137 11.7837 57.0191 15.2314C62.0245 18.6792 65.8646 23.5659 68.0309 29.2446C70.1973 34.9234 70.5877 41.1261 69.1504 47.0317C67.7132 52.9372 64.5161 58.2669 59.9825 62.315H59.98Z" fill="black" />
                        </svg>'
                    />
                </div>
            </StyledWrapper>
        </StyledContainer>
    )

}