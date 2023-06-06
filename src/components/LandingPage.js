import React from 'react'
import { Link } from 'react-router-dom'
import { StyledContainer } from '../style/components/StyledContainer'
import { StyledWrapper } from '../style/components/StyledWrapper'
import { NavBarLanding } from './partials/NavBar'
import { StyledHeading } from '../style/components/StyledHeading'
import { black, magenta } from '../style/ColorVariable'
import { StyledButton } from '../style/components/StyledButton'

export const LandingPage = () => {
    return (

        <StyledContainer>

            <NavBarLanding />

            <StyledWrapper flex="flex" main direction="column" justifyContent="center" alignItems="center">

                <StyledHeading backgroundcolor={black} landing>&#x1F3AE; Fun Way To Learn! &#x1F3C6;</StyledHeading>

                <p className='text-center main-paragraph'>
                    Fun Way To Learn is an LMS implemented with Gamification Concept, 
                    It can be used by any student, teacher or group of people in learning progress. 
                    There are several level with better rewards and higher scores as they progress.
                    It can be used as a simple homework tracker, or as a complex smart grading scheme for higher education.
                </p>

                <StyledButton
                    as={Link}
                    to={'/login'}
                    color='#FFF'
                    width="20%"
                    textAlign="center"
                    main
                    backgroundcolor={magenta}
                >
                    Get Started
                </StyledButton>

            </StyledWrapper>

        </StyledContainer>

    )
}
