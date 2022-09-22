import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRefresh } from '../../hooks/useRefresh';
import { getAllSiswaThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { NavBarGuru } from '../partials/NavBarGuru';
import { TableRow } from '../partials/TableRow';
import { NavBarSiswa } from '../partials/NavBarSiswa';
import { StyledHeading } from '../../style/components/StyledHeading';
import { orange } from '../../style/ColorVariable';

export const Leaderboard = () => {

    const role = localStorage.getItem('role');

    const [token, tokenExp] = useRefresh(role);

    const dispatch = useDispatch()

    const [load, setLoad] = useState(true);

    useEffect(() => {
        dispatch(getAllSiswaThunk(token, tokenExp))
        setLoad(false)
    }, [dispatch])

    const siswa = useSelector(state => state.user.siswalist);
    const profil = useSelector(state => state.user.profil);
    const mainColor = ['#E52B17', '#EA5706', '#FF9961']
    const accentColor = ['#FFFFFF', '#FFFFFF', '#FFFFFF']
    const ordinal = ['st', 'nd', 'rd', 'th', 'th']

    siswa.sort((a, b) => b.point_siswa - a.point_siswa)

    return (
        <StyledContainer flex="flex">
            {role === 'guru' ? <NavBarGuru /> : <NavBarSiswa />}
            <StyledWrapper>
                <div className='w-100'>

                    <StyledHeading backgroundcolor={orange}>
                        Leaderboard
                    </StyledHeading>

                    <div>
                        <div className='m-t-10 flex flex-center flex-column'>
                            <TableRow
                                title={true}
                                width="100%"
                            />

                            {load && siswa.length < 0 ?

                                <div className='m-t-20 p-20-all flex flex-column flex-center'>
                                    <div className='borders p-20-all'></div>
                                    <h1 className='m-t-20'>Loading...</h1>
                                </div>

                                :

                                siswa.map((e, i) => {
                                    return (
                                        <TableRow
                                            currentName={profil.nama_siswa ? profil.nama_siswa : ''}
                                            width="98%"
                                            iterate={i}
                                            backgroundcolor={mainColor[i]}
                                            color={accentColor[i]}
                                            ordinal={i < 5 ? ordinal[i] : 'th'}
                                            nama={e.nama_siswa}
                                            avatar={e.avatarSvg}
                                            level={e.level_siswa}
                                            point={e.point_siswa}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </StyledWrapper>
        </StyledContainer >

    )
}