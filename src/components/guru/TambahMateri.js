import React, { useState, useMemo, useRef } from 'react';
import { useAxiosPost } from '../../hooks/useAxiosPost';
import { useRefresh } from '../../hooks/useRefresh';
import { useParams } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react';

export const TambahMateri = () => {

    const { id } = useParams();

    const [judulMateri, setJudulMateri] = useState('');
    const [isiMateri, setIsiMateri] = useState('');
    const [pointMateri, setPointMateri] = useState('');
    const [x, token, tokenExp, resRole] = useRefresh('guru');
    const post = useAxiosPost('/guru/add-materi', {
        judulMateri: judulMateri,
        isiMateri: isiMateri,
        pointMateri: pointMateri,
        idCourse: id
    }, token, tokenExp, `/dashboard-${resRole}`)

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            setIsiMateri(editorRef.current.getContent());
        }
    };

    return (
        <>

            <form onSubmit={post}>
                <p>Judul Materi</p>
                <input type="text" name="judulMateri" id="judulMateri" value={judulMateri} onChange={e => setJudulMateri(e.target.value)} />
                <Editor
                    apiKey='0xan1y7lhv54pk6jsw0mf25rrffc5kgl23mkqfi1g2v79vbm'
                    onInit={(evt, editor) => editorRef.current = editor}
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