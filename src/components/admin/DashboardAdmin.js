import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogout } from '../../hooks/useLogout';
import { useRefresh } from '../../hooks/useRefresh';
import { deleteAkunThunk, getAkunThunk } from '../../redux/admin/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { black, grey, magenta, white, yellow } from '../../style/ColorVariable';
import { StyledButton } from '../../style/components/StyledButton';

export const DashboardAdmin = () => {

    const [token, tokenExp] = useRefresh('admin');
    const akun = useSelector(state => state.admin.akun);

    akun.sort((a, b) => a.role > b.role ? 1 : -1);

    const dispatch = useDispatch();
    const logout = useLogout();

    useEffect(() => {
        dispatch(getAkunThunk(token, tokenExp))
    }, [dispatch])

    return (
        <>
            <StyledContainer flex="flex">
                <div className='text-center m-all-20 p-20-ub'>
                    <StyledButton as={Link} to={'/register'} width="100%" color={black} backgroundcolor={yellow}>
                        <strong>
                            Add Akun Guru
                        </strong>
                    </StyledButton>
                    <StyledButton onClick={logout} width="100%" color={white} backgroundcolor={magenta}>
                        <strong>
                            Logout
                        </strong>
                    </StyledButton>
                </div>
                <StyledWrapper>
                    <StyledHeading backgroundcolor={grey}>
                        Dashboard Admin
                    </StyledHeading>
                    <div className='flex flex-column'>
                        <h1>Daftar Akun:</h1>
                        <div className='flex flex-center-between-rev text-center border-round bg-prime p-20-all m-t-10'>
                            <h3 className='flex'>No</h3>
                            <h3 className='flex'>Username</h3>
                            <h3 className='flex'>Role</h3>
                            <h3>Action</h3>
                        </div>
                        <div className='flex flex-center flex-column'>
                            {akun && akun.map((e, i) => {
                                return (
                                    <div className='flex flex-center-between-rev text-center border-round p-20-lr w-100 m-t-10' key={e.id_akun}>
                                        <h1 className='flex'>{i + 1}</h1>
                                        <h1 className='flex'>{e.username}</h1>
                                        <h1 className='flex'>{e.role}</h1>
                                        <StyledButton onClick={() => dispatch(deleteAkunThunk(e.id_akun, token, tokenExp))} width="15%" color={white} backgroundcolor={magenta}>
                                            <strong>
                                                Hapus Akun
                                            </strong>
                                        </StyledButton>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </StyledWrapper>
            </StyledContainer>
        </>

    )
}
