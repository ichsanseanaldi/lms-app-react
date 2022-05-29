import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from 'react-redux';
import { verifyMateriThunk } from '../../redux/user/thunk';

export const CourseMateriSiswa = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [token, tokenExp] = useRefresh('siswa')
    const materistore = useSelector(state => state.user.materi)
    const materidetail = materistore.filter(e => e.id_materi == id)

    const body = {
        idmateri: materidetail[0] !== undefined && materidetail[0].course_materi.id_materi,
        pointmateri: materidetail[0] !== undefined && materidetail[0].course_materi.point_materi
    }

    const post = () => {
        dispatch(verifyMateriThunk(body, token, tokenExp))
        navigate(-1, { replace: true })
    }

    return (
        <div>
            {id}
            {materidetail && materidetail.map(e => {

                return (
                    <div key={e.course_materi.id_materi}>
                        <p>{e.course_materi.id_materi}</p>
                        <p>{e.course_materi.judul_materi}</p>
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(e.course_materi.isi_materi) }} />
                        <p>{e.course_materi.point_materi}</p>
                        {e.isFinished === 'false' &&
                            <>
                                <button onClick={post}>Selesai Materi</button>
                            </>
                        }
                    </div>
                )
            })
            }
        </div>

    )

}