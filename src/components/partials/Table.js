import React from 'react'
import { StyledTable } from '../../style/components/StyledTable'
import { Link } from 'react-router-dom';

export const Table = (props) => {

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

                            props.value.map((e, i) => {
                                return (
                                    <tr>
                                        <td>
                                            <strong>{i + 1}</strong>
                                        </td>
                                        <td>
                                            <p>{e.judul_materi}</p>
                                        </td>
                                        <td>
                                            <p>{e.point_materi}</p>
                                        </td>
                                        <td>
                                            <Link to={`/course-materi-guru/${e.id_materi}`}>Lihat</Link>
                                        </td>
                                    </tr>
                                )
                            })

                            :

                            props.value.map((e, i) => {
                                return (
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>{e.judul_exercise}</td>
                                        <td>{e.point_exercise}</td>
                                        <td>
                                            <Link to={`/course-exercise-guru/${e.id_exercise}`}>Lihat</Link>
                                        </td>
                                    </tr>
                                )
                            })
                    }
                </tbody>
            </StyledTable>
            <Link className='p-10-all text-center' to={`/add-${props.title.toLowerCase()}/${props.id}`}>Tambah {props.title} +</Link>
        </div>
    )
}
