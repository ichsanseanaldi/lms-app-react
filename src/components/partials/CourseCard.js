import React from 'react'
import { Link } from 'react-router-dom';
import { StyledCourseCard } from '../../style/components/StyledCourseCard'

export const CourseCard = (props) => {

    return (
        <StyledCourseCard key={props.iterate} backgroundcolor={props.bg}>
            <div className='flex flex-center'>
                <svg width="90" height="90" viewBox="0 0 168 168" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.0429 34H0.304688V150.667C0.304688 159.833 7.83688 167.333 17.0429 167.333H134.21V150.667H17.0429V34ZM150.948 0.666626H50.5193C41.3133 0.666626 33.7811 8.16663 33.7811 17.3333V117.333C33.7811 126.5 41.3133 134 50.5193 134H150.948C160.154 134 167.687 126.5 167.687 117.333V17.3333C167.687 8.16663 160.154 0.666626 150.948 0.666626ZM150.948 117.333H50.5193V17.3333H150.948V117.333ZM67.2575 59H134.21V75.6666H67.2575V59ZM67.2575 84H100.734V100.667H67.2575V84ZM67.2575 34H134.21V50.6666H67.2575V34Z" fill="black" />
                </svg>

            </div>
            <div className='flex flex-column relative'>
                <div className="bg-w p-20-all ">
                    <div >
                        <h2>{props.judul}</h2>
                    </div>
                    <div>
                        <p className='o-hide'>{props.deskripsi ? props.deskripsi : 'No Description'}</p>
                    </div>

                </div>
                <div className='card-btn'>

                    {props.btn ?

                        <div className='flex flex-center'>

                            {props.joint ?

                                <p className='text-center p-15-all w-100'>Sudah Join</p>

                                :

                                props.materi.length < 1 || props.exercise.length < 1 ?

                                    <p className='text-center p-15-all w-100'>No Materi / Exercise</p>

                                    :

                                    <button className='text-center p-15-all w-100' type='submit' onClick={props.post}>Join Course</button>
                            }

                        </div>

                        :

                        <Link to={`${props.url}${props.id}`} className="flex flex-center p-10-all">
                            <span>Course Detail</span>
                            <div className='rotate-90'>
                                <svg width="20" height="20" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8756 27.0004L25 30L50 5.99915L43.7511 0L25 17.9975L6.24889 0L0 5.99915L21.8756 27.0004Z" fill="black" />
                                </svg>
                            </div>
                        </Link>

                    }
                </div>
            </div>
        </StyledCourseCard>
    )
}
