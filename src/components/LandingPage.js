import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer } from '../style/components/StyledContainer'
import { StyledWrapper } from '../style/components/StyledWrapper'
import { NavBarLanding } from './partials/NavBar'
import { StyledHeading } from '../style/components/StyledHeading'
import { black, magenta, primary, white, yellow } from '../style/ColorVariable'
import { StyledButton } from '../style/components/StyledButton'
import bg from '../assets/gamification.png'


export const LandingPage = () => {
    return (

        <StyledContainer>

            <NavBarLanding />

            <StyledWrapper flex="flex" main>

                <div className='flex-only flex-2 flex-column landing-desc'>

                    <StyledHeading backgroundcolor={magenta} landing>Fun Way To Learn!</StyledHeading>
                    <p className='p-20-ub'>
                        Fun Way To Learn is an LMS implemented with Gamification Concept built with React js, 
                        It can be used by any student, teacher or group of people who would like to learn something. 
                        This app saves time and effort by focusing on content and user interface. 
                        There are several level with better rewards and higher scores as they progress.
                        It can be used as a simple homework tracker, or as a complex smart grading scheme for higher education.
                    </p>
                    <StyledButton
                        as={Link}
                        to={'/login'}
                        color={black}
                        width="20%"
                        textAlign="center"
                        main
                    >
                        Get Started
                    </StyledButton>

                </div>

                <div className="landing-png flex-only flex-1 flex-center">
                    <img src={bg} alt="" />
                </div>

            </StyledWrapper>

        </StyledContainer>

    )
}
