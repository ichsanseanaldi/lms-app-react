import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { CourseCard } from '../partials/CourseCard';
import { StyledAddCard } from '../../style/components/StyledAddCard';
import { magenta, white } from '../../style/ColorVariable';
import { StyledButton } from '../../style/components/StyledButton';

export const CourseList = () => {

    const course = useSelector(state => state.user.course);

    const color = ['#1DCDFF', "#FF2E63", '#FFC700', '#6AFF45', "#A1EAFB", "#00FFAB", "#00FFAB"];

    return (

        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={magenta}>
                    Course List
                </StyledHeading>
                <div className='m-t-20'>
                    <div>
                        <p>
                            Berikut adalah daftar courses yang dimiliki oleh mu:
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap m-t-20 course-wrapper'>
                    {course[0] === '' ?

                        <div>

                            <h1>Tidak ada course..</h1>
                            <div>
                                <StyledButton as={Link} to={'/add-course'} backgroundcolor={magenta} color={white} >Buat Course + </StyledButton>
                            </div>

                        </div>

                        :

                        <div className='flex flex-wrap course-wrapper'>
                            {
                                course.map((course, i) => {
                                    return (

                                        <CourseCard
                                            bg={color[i]}
                                            judul={course.judul_course}
                                            deskripsi={course.deskripsi_course}
                                            id={course.id_course}
                                            url='/course-detail-guru/'

                                        />

                                    )
                                })

                            }
                            <Link to={'/add-course'}>
                                <StyledAddCard>
                                    <div className='flex flex-center flex-column'>
                                        <div>
                                            <svg className='rotate-anim-hov' width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 25C141.25 25 175 58.75 175 100C175 141.25 141.25 175 100 175C58.75 175 25 141.25 25 100C25 58.75 58.75 25 100 25ZM100 12.5C51.875 12.5 12.5 51.875 12.5 100C12.5 148.125 51.875 187.5 100 187.5C148.125 187.5 187.5 148.125 187.5 100C187.5 51.875 148.125 12.5 100 12.5Z" fill="black" />
                                                <path d="M150 93.75H106.25V50H93.75V93.75H50V106.25H93.75V150H106.25V106.25H150V93.75Z" fill="black" />
                                            </svg>

                                        </div>
                                        <h1>Tambah Course</h1>
                                    </div>
                                </StyledAddCard>
                            </Link>
                        </div>
                    }
                </div>
            </StyledWrapper>
        </StyledContainer>
    )
}
