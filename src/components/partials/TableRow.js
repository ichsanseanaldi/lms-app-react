import React from 'react'
import { StyledRow } from '../../style/components/StyledRow'

export const TableRow = (props) => {

    return (
        <StyledRow
            title={props.title}
            backgroundcolor={props.backgroundcolor}
            width={props.width}
            color={props.color}
            ordinal={props.ordinal}
        >
            {props.title ?

                <div className='flex flex-center-around-rev'>
                    <div className='flex flex-center'>Avatar</div>
                    <div className='flex flex-center'>Rank</div>
                    <div className='flex flex-center'>Nama</div>
                    <div className='flex flex-center'>Point</div>
                    <div className='flex flex-center'>Level</div>
                </div>

                :

                <div className='flex flex-center-around-rev' key={props.iterate}>
                    <div className='flex flex-center'>
                        <div className='avatar-svg' dangerouslySetInnerHTML={{ __html: props.avatar }} />
                    </div>
                    <div className='flex flex-center'>
                        <h1>
                            {props.iterate + 1}{props.ordinal}
                        </h1>
                    </div>
                    <div className='flex flex-center'>
                        <h1>
                            {props.nama}{props.nama === props.currentName ? ' (you)' : ''}
                        </h1>
                    </div>
                    <div className='flex flex-center'>
                        <h1>
                            {props.point}
                        </h1>
                    </div>
                    <div className='flex flex-center'>
                        <h1>
                            {props.level}
                        </h1>
                    </div>
                </div>

            }

        </StyledRow>
    )
}
