import React from "react"
import {magenta, primary, white} from "../../style/ColorVariable"
import {StyledButton} from "../../style/components/StyledButton"

export const Modal = (props) => {
  return (
    <div className='fixed full bg-modal flex flex-center'>
      {props.load ? (
        <div className='bg-w p-20-all text-center border-round flex-only flex-column flex-center'>
          <div className='borders p-20-all'></div>
          <h2 className='m-t-20 p-20-all'>Loading....</h2>
        </div>
      ) : (
        <div className='bg-w p-20-all text-center border-round'>
          {props.data && props.data.length > 0 ? (
            <div>
              <div className='pyro full'>
                <div className='before'></div>
                <div className='after'></div>
              </div>

              <div className='p-20-all'>
                <h2>Kamu mendapatkan reward!!</h2>
                <div className='flex flex-center'>
                  {props.data.map((e) => {
                    return (
                      <div
                        className='text-center flex-only flex-column flex-center b-card'
                        key={e.id_badges}
                      >
                        <div className='flex flex-center'>
                          <div
                            dangerouslySetInnerHTML={{__html: e.badge_svg}}
                          />
                        </div>
                        <div>
                          <h2 className='caveat p-10-all'>{e.nama_badges}</h2>
                          <p className='p-10-all o-hide'>
                            {e.deskripsi_badges}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              {props.result && (
                <div>
                  <p>
                    Benar : <strong>{props.result.benar}</strong>
                  </p>
                  <p>
                    Salah : <strong>{props.result.salah}</strong>
                  </p>
                  <p>
                    Point yang didapat : <strong>{props.result.point}</strong>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className='p-20-all'>
              <h2>{props.ask}</h2>
              <p>{props.desc}</p>
            </div>
          )}
          {props.toggle ? (
            <div className='flex flex-center'>
              <StyledButton
                width='100%'
                color={white}
                backgroundcolor={primary}
                onClick={props.onClick}
              >
                Ya
              </StyledButton>
              <StyledButton width='100%' color={magenta} onClick={props.toggle}>
                Tidak
              </StyledButton>
            </div>
          ) : (
            <div className='flex flex-center'>
              <StyledButton
                width='100%'
                color={white}
                backgroundcolor={primary}
                onClick={props.onClick}
              >
                Done
              </StyledButton>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
