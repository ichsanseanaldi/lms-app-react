import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer } from '../style/components/StyledContainer'
import { StyledWrapper } from '../style/components/StyledWrapper'
import { NavBarLanding } from './partials/NavBar'
import { StyledHeading } from '../style/components/StyledHeading'
import { primary, white } from '../style/ColorVariable'
import { StyledButton } from '../style/components/StyledButton'
import bg from '../assets/gamification.png'


export const LandingPage = () => {
    return (

        <StyledContainer main>

            <NavBarLanding />

            <StyledWrapper flex="flex" direction="column" main>

                <div className="landing-png flex-only flex-1 flex-center">
                    <img src={bg} alt="" />
                </div>

                <div className='flex-only flex-2 flex-column flex-center landing-desc'>

                    <StyledHeading backgroundcolor={primary} landing>Fun Way To Learn!</StyledHeading>
                    <p className='p-10-all'>Learning Management System made for teachers and students to make learning process more fun and exciting!</p>
                    <StyledButton
                        as={Link}
                        to={'/login'}
                        backgroundcolor={primary}
                        color={white}
                    >
                        Get Started
                    </StyledButton>

                </div>

            </StyledWrapper>

        </StyledContainer>

    )
}
