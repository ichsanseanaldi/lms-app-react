import React, { useState, useRef } from 'react';
import { useRefresh } from '../../hooks/useRefresh';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { addMateriThunk } from '../../redux/user/thunk';

export const TambahMateri = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [judulMateri, setJudulMateri] = useState('');
    const [isiMateri, setIsiMateri] = useState('');
    const [pointMateri, setPointMateri] = useState('');
    const [token, tokenExp] = useRefresh('guru');

    const body = {
        judulMateri: judulMateri,
        isiMateri: isiMateri,
        pointMateri: pointMateri,
        idCourse: id
    }

    const post = (e) => {
        e.preventDefault();
        dispatch(addMateriThunk(body, token, tokenExp))
        navigate(`/dashboard-guru`, { replace: true })
    }

    const editorRef = useRef(null);

    return (
        <>

            <form onSubmit={post}>
                <p>Judul Materi</p>
                <input type="text" name="judulMateri" id="judulMateri" value={judulMateri} onChange={e => setJudulMateri(e.target.value)} />
                <Editor
                    apiKey='0xan1y7lhv54pk6jsw0mf25rrffc5kgl23mkqfi1g2v79vbm'
                    onInit={(evt, editor) => editorRef.current = editor}
                    onChange={() => setIsiMateri(editorRef.current.getContent())}
                    init={{
                        width: 500,
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help ',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <p>Point Materi</p>
                <input type="text" name="pointMateri" id="pointMateri" value={pointMateri} onChange={e => setPointMateri(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </>
    );
}