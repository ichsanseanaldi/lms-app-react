import React from 'react';
import { useSelector } from 'react-redux';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { yellow } from '../../style/ColorVariable';
import { NavBarSiswa } from '../partials/NavBarSiswa';

export const BadgesDetail = () => {

    const badges = useSelector(state => state.user.badges);

    return (

        <StyledContainer flex="flex">
            <NavBarSiswa />
            <StyledWrapper>
                <StyledHeading backgroundcolor={yellow}>
                    Badges Collection
                </StyledHeading>
                <div className='p-20-lr m-t-10 '>
                    <div className='flex flex-center flex-wrap'>
                        {/* {badges.length > 0 && badges.map(e => {
                            return (
                                <div className='p-20-all m-lr-20'>
                                    <div className='flex flex-center' dangerouslySetInnerHTML={{ __html: e.badge.badge_svg }} />
                                    <div className='p-10-all text-center'>
                                        <h2 className='caveat m-t-10'>{e.badge.nama_badges}</h2>
                                        <p className='m-t-10'>{e.badge.deskripsi_badges}</p>
                                    </div>
                                </div>
                            )
                        })} */}
                        
                    </div>
                    <h1>Badges empty</h1>
                </div>
            </StyledWrapper>
        </StyledContainer>


    )
}