import React from "react"
import {StyledButton} from "../../style/components/StyledButton"
import {StyledForm} from "../../style/components/StyledForm"
import {InputGroup} from "./InputGroup"
import {primary, white} from "../../style/ColorVariable"
import {StyledTextArea} from "../../style/components/StyledTextarea"

export const Form = (props) => {
  return (
    <div>
      <StyledForm onSubmit={props.onSubmit} width='400px' height='500px'>
        {props.err && (
          <div className='text-center red'>
            <strong>{props.err}</strong>
          </div>
        )}
        <div className='m-t-10'>
          <InputGroup
            type={props.typeOne}
            name={props.nameOne}
            placeholder={props.nameOne}
            value={props.valueOne}
            onChange={props.onChangeOne}
            login={props.login}
            disabled
          />
        </div>
        <div className='m-t-10'>
          {props.typeTwo === "textarea" ? (
            <>
              <label htmlFor={props.nameTwo}>{props.nameTwo}</label>
              <StyledTextArea
                name={props.nameTwo}
                id={props.nameTwo}
                cols='30'
                rows='10'
                placeholder={props.nameTwo}
                value={props.valueTwo}
                onChange={props.onChangeTwo}
                required
                disabled
              />
            </>
          ) : (
            props.typeTwo && (
              <InputGroup
                type={props.typeTwo}
                name={props.nameTwo}
                placeholder={props.nameTwo}
                value={props.valueTwo}
                onChange={props.onChangeTwo}
                login={props.login}
                disabled
              />
            )
          )}
        </div>
        <StyledButton width='100%' color={white} backgroundcolor={primary} main>
          Try DEMO - without functionality
        </StyledButton>
        <p className='m-t-10'>
          Due to certain changes, server app functionality are disabled, However
          you can still access it. Click the button above!
        </p>
        <p className='m-t-10'>
          The source code are available in
          <a
            style={{
              display: "inline",
              color: "blue",
              textDecoration: "underline",
              padding: "0 5px",
            }}
            href='https://github.com/ichsanseanaldi'
            target='_blank'
            rel='noreferrer'
          >
            My Github
          </a>
        </p>
      </StyledForm>
    </div>
  )
}
