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
                    <h1 className='flex flex-center'>Avatar</h1>
                    <h1 className='flex flex-center'>Rank</h1>
                    <h1 className='flex flex-center'>Name</h1>
                    <h1 className='flex flex-center'>Point</h1>
                    <h1 className='flex flex-center'>Level</h1>
                </div>

                :

                <div className='flex flex-center-around-rev' key={props.iterate}>
                    <div className='flex flex-center'>
                        <div className='avatar-svg' dangerouslySetInnerHTML={{ __html: props.avatar }} />
                    </div>
                    <div className='flex flex-center'>
                        <p>
                            {props.iterate + 1}{props.ordinal}
                        </p>
                    </div>
                    <div className='flex flex-center'>
                        <p>
                            {props.nama}{props.nama === props.currentName ? ' (you)' : ''}
                        </p>
                    </div>
                    <div className='flex flex-center'>
                        <p>
                            {props.point}
                        </p>
                    </div>
                    <div className='flex flex-center'>
                        <p>
                            {props.level}
                        </p>
                    </div>
                </div>

            }

        </StyledRow>
    )
}
