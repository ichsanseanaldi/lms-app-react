import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import DOMPurify from 'dompurify';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { green } from '../../style/ColorVariable';


export const CourseMateriGuru = () => {

    const { id } = useParams()

    const materistore = useSelector(state => state.user.materi)
    const materidetail = materistore.filter(e => e.id_materi == id)

    return (
        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={green}>
                    Materi
                </StyledHeading>
                {materidetail && materidetail.map(e => {
                    return (
                        <div key={e.id_materi}>
                            <div className='m-t-20'>
                                <span> <strong>Judul Materi :</strong>  </span>
                                <span>{e.judul_materi}</span>
                            </div>
                            <div className='m-t-20'>
                                <span> <strong>Point Materi :</strong>  </span>
                                <span>{e.point_materi}</span>
                            </div>
                            <div className='m-t-20'>
                                <h3>Isi Materi:</h3>
                                <div id='materi-wrapper' className='bordered p-20-all border-round m-t-10 bg-w' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(e.isi_materi) }} />
                            </div>
                        </div>
                    )
                })
                }
            </StyledWrapper>
        </StyledContainer>

    )

}