import React from 'react'
import { StyledRow } from '../../style/components/StyledRow'

export const TableRow = (props) => {

    return (
        <StyledRow
            title={props.title}
            backgroundcolor={props.backgroundcolor}
            width={props.width}
            color={props.color}
        >
            {props.title ?

                <div className='flex flex-center-around-rev'>
                    <div>Rank</div>
                    <div>Nama</div>
                    <div>Point</div>
                    <div>Level</div>
                </div>

                :

                <div className='flex flex-center-around-rev' key={props.iterate}>
                    <div>
                        <h1>
                            {props.iterate + 1}{props.ordinal}
                        </h1>
                    </div>
                    <div>
                        <h1>
                            {props.nama}
                        </h1>
                    </div>
                    <div>
                        <h1>
                            {props.point}
                        </h1>
                    </div>
                    <div>
                        <h1>
                            {props.level}
                        </h1>
                    </div>
                </div>

            }

        </StyledRow>
    )
}
