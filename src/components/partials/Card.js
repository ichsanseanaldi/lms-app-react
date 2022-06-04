import React from 'react'
import { StyledCard } from '../../style/components/StyledCard'
import DOMPurify from 'dompurify';
import { StyledHeading } from '../../style/components/StyledHeading';

export const Card = (props) => {
    return (
        <StyledCard bordercolor={props.bordercolor}>
            <div className='flex flex-center svg-card' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.svg) }} />
            <div className='flex flex-column flex-center-start b-r p-20-lr'>
                <p className='card-header'> {props.judul}</p>
                <StyledHeading>
                    <i>
                        {props.value}
                    </i>
                </StyledHeading>
            </div>
        </StyledCard>
    )
}
