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
                <p className='red'>
                    Due to Terms Changes in Heroku as hosting provider, 
                    the whole backend functionality will be disabled start from 28-Nov-2022, 
                    any and all interactions after login might be inaccessible.
                </p>
                <p className='m-t-10'>
                    However, the source code are available in 
                    <a style={{display:'inline',color:'blue',textDecoration:'underline',padding:'0 5px'}} href="https://github.com/ichsanseanaldi" target="_blank">
                        My Github
                    </a>
                </p>
            </StyledForm>
        </div>
    )
}
