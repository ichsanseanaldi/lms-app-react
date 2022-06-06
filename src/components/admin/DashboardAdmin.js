import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLogout } from '../../hooks/useLogout';
import { useRefresh } from '../../hooks/useRefresh';
import { deleteAkunThunk, getAkunThunk } from '../../redux/admin/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { black, grey, magenta, primary, white, yellow } from '../../style/ColorVariable';
import { StyledButton } from '../../style/components/StyledButton';
import { Modal } from '../partials/Modal';

export const DashboardAdmin = () => {

    const [token, tokenExp] = useRefresh('admin');
    const akun = useSelector(state => state.admin.akun);
    const [load, setLoad] = useState(false)
    const [toggle, setToggle] = useState(false);

    akun.sort((a, b) => a.role > b.role ? 1 : -1);

    const dispatch = useDispatch();
    const logout = useLogout();

    useEffect(() => {
        setLoad(true)
        dispatch(getAkunThunk(token, tokenExp))
        setLoad(false)
    }, [dispatch])

    const toggler = () => {
        setToggle(!toggle);
    }

    return (
        <StyledContainer flex="flex" admin>
            <div className='text-center m-all-20 p-20-ub btn-admin-wrapper'>
                <StyledButton as={Link} to={'/register'} width="100%" color={black} backgroundcolor={yellow}>
                    <strong>
                        Add Akun Guru
                    </strong>
                </StyledButton>
                <StyledButton onClick={toggler} width="100%" color={white} backgroundcolor={magenta}>
                    <strong>
                        Logout
                    </strong>
                </StyledButton>
            </div>
            <StyledWrapper admin>
                <StyledHeading backgroundcolor={grey}>
                    Dashboard Admin
                </StyledHeading>
                <div className='flex flex-column'>
                    <p className='brand'>Daftar Akun:</p>
                    <div className='flex flex-center-between-rev text-center border-round bg-prime p-20-all m-t-10 row-admin'>
                        <h3 className='flex'>No</h3>
                        <h3 className='flex'>Username</h3>
                        <h3 className='flex'>Role</h3>
                        <h3 className="flex">Action</h3>
                    </div>
                    <div className='flex flex-center flex-column'>
                        {akun && akun.map((e, i) => {
                            return (
                                <div className='flex flex-center-between-rev text-center border-round p-20-lr w-100 m-t-10 row-admin' key={e.id_akun}>
                                    <h2 className='flex'>{i + 1}</h2>
                                    <h2 className='flex'>{e.username}</h2>
                                    <h2 className='flex'>{e.role}</h2>

                                    <StyledButton onClick={() => dispatch(deleteAkunThunk(e.id_akun, token, tokenExp))} width="10%" className="flex" color={white} backgroundcolor={magenta}>
                                        <strong>
                                            Hapus Akun
                                        </strong>
                                    </StyledButton>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {
                    load &&

                    <Modal
                        load={true}
                    />

                }
                {toggle &&
                    <div className='fixed full bg-modal flex flex-center'>
                        <div className='bg-w p-20-all text-center border-round'>
                            <div className='p-20-all'>
                                <h2>Log Out?</h2>
                            </div>
                            <div className='flex flex-center'>
                                <StyledButton width="100%" color={white} backgroundcolor={primary} onClick={logout}>Yes</StyledButton>
                                <StyledButton width="100%" color={magenta} onClick={toggler}>No</StyledButton>
                            </div>
                        </div>
                    </div>
                }
            </StyledWrapper>
        </StyledContainer>

    )
}
