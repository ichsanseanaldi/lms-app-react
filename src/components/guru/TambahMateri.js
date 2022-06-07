import React, { useState, useRef } from 'react';
import { useRefresh } from '../../hooks/useRefresh';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { addMateriThunk } from '../../redux/user/thunk';
import { StyledContainer } from '../../style/components/StyledContainer';
import { StyledWrapper } from '../../style/components/StyledWrapper';
import { StyledHeading } from '../../style/components/StyledHeading';
import { NavBarGuru } from '../partials/NavBarGuru';
import { green, primary, white } from '../../style/ColorVariable';
import { InputGroup } from '../partials/InputGroup';
import { StyledButton } from '../../style/components/StyledButton';
import { StyledSelect } from '../../style/components/StyledSelect';

export const TambahMateri = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [judulMateri, setJudulMateri] = useState('');
    const [isiMateri, setIsiMateri] = useState('');
    const [pointMateri, setPointMateri] = useState(50);
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
        <StyledContainer flex="flex">
            <NavBarGuru />
            <StyledWrapper>
                <StyledHeading backgroundcolor={green}>
                    Tambah Materi
                </StyledHeading>
                <div className='m-t-20 p-10-all'>
                    <form onSubmit={post} className="form">
                        <InputGroup type="text" name="Judul Materi" value={judulMateri} onChange={e => setJudulMateri(e.target.value)} />
                        <p>Isi Materi</p>
                        <Editor
                            apiKey='2tx0fzvqg14cvw2o8v6i8chwin1kcmyxbvs0rvskx3tsng56'
                            onInit={(evt, editor) => editorRef.current = editor}
                            onChange={() => setIsiMateri(editorRef.current.getContent())}
                            init={{
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
                        <div className='p-10-all '>
                            <p>Point Materi</p>
                            <StyledSelect value={pointMateri} onChange={e => setPointMateri(e.target.value)}>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </StyledSelect >
                        </div>
                        <StyledButton width="100%" backgroundcolor={primary} color={white}>Submit</StyledButton>
                    </form>
                </div>
            </StyledWrapper>
        </StyledContainer>
    );
}