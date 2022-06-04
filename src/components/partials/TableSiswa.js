import React from 'react'
import { StyledTable } from '../../style/components/StyledTable'
import { Link } from 'react-router-dom';

export const TableSiswa = (props) => {

    return (
        <div className='m-t-20'>
            <h4>Tabel daftar {props.title}:</h4>
            <StyledTable>
                <thead>
                    <tr>
                        <th width="1%">No</th>
                        <th width="4%">{props.title}</th>
                        <th width="2%">Point</th>
                        <th width="3%">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.value.length > 0 && props.title === 'Materi' ?

                            props.value !== undefined && props.value.map((e, i) => {
                                return (
                                    e.course_materi !== undefined &&
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.course_materi.judul_materi}</td>
                                        <td>{e.course_materi.point_materi}</td>
                                        <td>
                                            <Link to={`/course-materi/${e.course_materi.id_materi}`}>Lihat</Link>
                                        </td>
                                    </tr>
                                )
                            })

                            :

                            props.value !== undefined && props.value.map((e, i) => {
                                return (
                                    e.course_exercise !== undefined &&
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{e.course_exercise.judul_exercise}</td>
                                        <td>{e.course_exercise.point_exercise}</td>
                                        <td>
                                            {e.isFinished === 'false' ?

                                                <Link to={`/course-exercise-siswa/${e.id_exercise}`}>Lihat</Link>

                                                :

                                                <p>Exercise telah diselesaikan</p>
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </StyledTable>

        </div>
    )
}