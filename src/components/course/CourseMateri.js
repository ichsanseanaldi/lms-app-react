import React from 'react'
import { useParams } from 'react-router-dom'
import { useRefresh } from '../../hooks/useRefresh'
import useAxiosGetAll from '../../hooks/useAxiosGetAll'
import DOMPurify from 'dompurify';
import { useAxiosPost } from '../../hooks/useAxiosPost';
import useAxiosGetSingle from '../../hooks/useAxiosGetSingle';

export const CourseMateri = () => {

    const { id } = useParams();

    const role = localStorage.getItem('role');

    const [username, token, tokenExp, resRole] = useRefresh(role);
    const res = useAxiosGetSingle(`course/get-course-materi-detail/${id}`, token, tokenExp);

    const { materi, joint } = res;

    const post = useAxiosPost(`course/verify-materi`, {
        idmateri: materi && materi.id_materi,
        pointmateri: materi && materi.point_materi
    }, token, tokenExp, `/dashboard-${resRole}`)

    return (
        <div>
            {materi &&
                <div key={materi.id_materi}>
                    <p>{materi.id_materi}</p>
                    <p>{materi.judul_materi}</p>
                    <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(materi.isi_materi) }} />
                    <p>{materi.point_materi}</p>
                    {resRole === 'siswa' && joint.isFinished === 'false' &&
                        <>
                            <button onClick={post}>Selesai Materi</button>
                        </>
                    }
                </div>
            }
        </div>

    )

}