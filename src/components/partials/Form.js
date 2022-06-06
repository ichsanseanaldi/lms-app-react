import React from 'react'
import { StyledButton } from '../../style/components/StyledButton'
import { StyledForm } from '../../style/components/StyledForm'
import { InputGroup } from './InputGroup'
import { primary, white } from '../../style/ColorVariable'
import DOMPurify from 'dompurify';
import { StyledTextArea } from '../../style/components/StyledTextarea'

export const Form = (props) => {
    return (
        <div>

            <StyledForm onSubmit={props.onSubmit} width="400px" height="500px" >
                <div className='flex flex-center' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.svg) }} />
                <div className='text-center m-t-10 m-b-20'>
                    <p className='form-header'>{props.header}</p>
                </div>
                {props.err &&
                    <div className='text-center red'>
                        <strong>
                            {props.err}
                        </strong>
                    </div>
                }
                <div className='m-t-10'>
                    <InputGroup type={props.typeOne} name={props.nameOne} placeholder={props.nameOne} value={props.valueOne} onChange={props.onChangeOne} login={props.login} />
                </div>
                <div className='m-t-10'>
                    {props.typeTwo === 'textarea' ?

                        <>
                            <label htmlFor={props.nameTwo}>{props.nameTwo}</label>
                            <StyledTextArea name={props.nameTwo} id={props.nameTwo} cols="30" rows="10" placeholder={props.nameTwo} value={props.valueTwo} onChange={props.onChangeTwo} required />
                        </>

                        :

                        props.typeTwo && <InputGroup type={props.typeTwo} name={props.nameTwo} placeholder={props.nameTwo} value={props.valueTwo} onChange={props.onChangeTwo} login={props.login} />
                    }
                </div>
                <StyledButton width="100%" color={white} backgroundcolor={primary}>Submit</StyledButton>
            </StyledForm>
        </div>
    )
}
