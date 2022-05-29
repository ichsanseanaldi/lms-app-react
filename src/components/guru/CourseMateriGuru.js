import React from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import DOMPurify from 'dompurify';
import { useSelector } from 'react-redux';


export const CourseMateriGuru = () => {

    const { id } = useParams()

    const role = localStorage.getItem('role')

    const [token, tokenExp, resRole] = useRefresh(role)
    const materistore = useSelector(state => state.user.materi)
    const materidetail = materistore.filter(e => e.id_materi == id)

    return (
        <div>
            {materidetail && materidetail.map(e => {
                return (
                    <div key={e.id_materi}>
                        <p>{e.id_materi}</p>
                        <p>{e.judul_materi}</p>
                        <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(e.isi_materi) }} />
                        <p>{e.point_materi}</p>
                    </div>
                )
            })
            }
        </div>

    )

}