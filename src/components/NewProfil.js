import React, { useState } from 'react'
import { useRefresh } from '../hooks/useRefresh';
import { useDispatch } from 'react-redux';
import { addProfilThunk } from '../redux/user/thunk';
import { useNavigate } from 'react-router-dom';
import { Form } from './partials/Form';
import { StyledContainer } from '../style/components/StyledContainer';
import { StyledWrapper } from '../style/components/StyledWrapper';
import img from '../assets/card-profil-2.svg'
import { avatars } from '../assets/AvatarSvg';

export const NewProfil = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const role = localStorage.getItem('role');

    const [token, tokenExp, resRole] = useRefresh(role);
    const [nip, setNip] = useState('');
    const [namaGuru, setNamaGuru] = useState('');
    const [namaSiswa, setNamaSiswa] = useState('');
    const [avatar, setAvatar] = useState('')

    const body = (() => {
        if (resRole === 'guru') {
            return {
                nip: nip,
                namaGuru: namaGuru
            }
        }
        else {
            return {
                avatarSvg: avatar,
                namaSiswa: namaSiswa
            }
        }
    })();

    const post = () => {
        dispatch(addProfilThunk(body, token, tokenExp, resRole));
        navigate(`/tr`, { replace: true });
    }

    const handleNip = e => {
        setNip(e.target.value)
    }

    const handleNamaGuru = e => {
        setNamaGuru(e.target.value)
    }

    const handleNamaSiswa = e => {
        setNamaSiswa(e.target.value)
    }

    const svg = `<svg width="68" height="54" viewBox="0 0 68 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6667 20.3334C25.6667 21.6595 25.14 22.9312 24.2023 23.8689C23.2646 24.8066 21.9928 25.3334 20.6667 25.3334C19.3407 25.3334 18.0689 24.8066 17.1312 23.8689C16.1935 22.9312 15.6667 21.6595 15.6667 20.3334C15.6667 19.0073 16.1935 17.7355 17.1312 16.7978C18.0689 15.8602 19.3407 15.3334 20.6667 15.3334C21.9928 15.3334 23.2646 15.8602 24.2023 16.7978C25.14 17.7355 25.6667 19.0073 25.6667 20.3334ZM12.3334 31.1667C12.3334 30.5037 12.5968 29.8678 13.0656 29.3989C13.5345 28.9301 14.1704 28.6667 14.8334 28.6667H26.5001C27.1631 28.6667 27.799 28.9301 28.2678 29.3989C28.7367 29.8678 29.0001 30.5037 29.0001 31.1667V32C29.0001 32 29.0001 38.6667 20.6667 38.6667C12.3334 38.6667 12.3334 32 12.3334 32V31.1667ZM35.6667 20.75C35.6667 19.6 36.6001 18.6667 37.7501 18.6667H53.5834C53.857 18.6667 54.1279 18.7206 54.3807 18.8253C54.6334 18.93 54.8631 19.0834 55.0566 19.2769C55.25 19.4704 55.4035 19.7 55.5082 19.9528C55.6129 20.2055 55.6667 20.4765 55.6667 20.75C55.6667 21.0236 55.6129 21.2945 55.5082 21.5473C55.4035 21.8001 55.25 22.0297 55.0566 22.2232C54.8631 22.4166 54.6334 22.5701 54.3807 22.6748C54.1279 22.7795 53.857 22.8334 53.5834 22.8334H37.7501C36.6001 22.8334 35.6667 21.9 35.6667 20.75ZM37.7501 30.3334C37.1975 30.3334 36.6676 30.5529 36.2769 30.9436C35.8862 31.3343 35.6667 31.8642 35.6667 32.4167C35.6667 32.9692 35.8862 33.4991 36.2769 33.8898C36.6676 34.2805 37.1975 34.5 37.7501 34.5H53.5834C54.1359 34.5 54.6659 34.2805 55.0566 33.8898C55.4473 33.4991 55.6667 32.9692 55.6667 32.4167C55.6667 31.8642 55.4473 31.3343 55.0566 30.9436C54.6659 30.5529 54.1359 30.3334 53.5834 30.3334H37.7501ZM0.666748 7.41671C0.666748 5.53809 1.41303 3.73642 2.74141 2.40803C4.06979 1.07965 5.87146 0.333374 7.75008 0.333374H60.2501C62.1287 0.333374 63.9304 1.07965 65.2588 2.40803C66.5871 3.73642 67.3334 5.53809 67.3334 7.41671V46.5834C67.3334 48.462 66.5871 50.2637 65.2588 51.592C63.9304 52.9204 62.1287 53.6667 60.2501 53.6667H7.75008C5.87146 53.6667 4.06979 52.9204 2.74141 51.592C1.41303 50.2637 0.666748 48.462 0.666748 46.5834V7.41671ZM7.75008 4.50004C6.97653 4.50004 6.23467 4.80733 5.68769 5.35431C5.14071 5.90129 4.83341 6.64316 4.83341 7.41671V46.5834C4.83341 48.195 6.14008 49.5 7.75008 49.5H60.2501C61.0236 49.5 61.7655 49.1928 62.3125 48.6458C62.8595 48.0988 63.1667 47.3569 63.1667 46.5834V7.41671C63.1667 6.64316 62.8595 5.90129 62.3125 5.35431C61.7655 4.80733 61.0236 4.50004 60.2501 4.50004H7.75008Z" fill="black"/>
                </svg>`


    return (

        <StyledContainer flex="flex" alignItems="center">
            <StyledWrapper flex="flex">
                <div className='flex flex-column flex-center order-2'>
                    <img className='svg w-h-50 m-t-20 m-b-20' src={img} alt="profil" />
                    <div className='text-center'>
                        <h1>Welcome Newcomers !</h1>
                        <p>Sebelum mulai, tolong isi profilmu dulu ya...</p>
                    </div>
                </div>
                <div className='flex flex-center m-t-20'>

                    {resRole === 'guru' ?

                        <Form
                            typeOne="text"
                            typeTwo="text"
                            nameOne="nip"
                            nameTwo="nama Guru"
                            onSubmit={post}
                            onChangeOne={handleNip}
                            onChangeTwo={handleNamaGuru}
                            valueOne={nip}
                            valueTwo={namaGuru}
                            header='Profil Guru'
                            svg={svg}
                        />

                        :

                        <div className='flex flex-column flex-center'>
                            <p>Pilih avatar mu!</p>
                            <div className='flex flex-wrap flex-center m-b-10 m-t-10'>
                                {avatars.map((e) => {
                                    return (
                                        <div key={e.id} className="m-lr-10 p-10-all flex flex-column flex-center">
                                            <div className='avatar-svg' dangerouslySetInnerHTML={{ __html: e.svg }} />
                                            <input className='m-t-10 radio' type="radio" name="svg" id={e.id} value={e.svg} onChange={e => setAvatar(e.target.value)} required />
                                        </div>
                                    )
                                })
                                }
                            </div>

                            < Form
                                typeOne="text"
                                nameOne="nama Siswa"
                                onSubmit={post}
                                onChangeOne={handleNamaSiswa}
                                valueOne={namaSiswa}
                                header='Profil Siswa'
                                svg={svg}
                            />

                        </div>

                    }

                </div>
            </StyledWrapper>
        </StyledContainer>
    )
}