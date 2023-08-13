import React from 'react'
import { StyledBar } from '../../style/components/StyledBar'

export const LevelBar = (props) => {

    const pointSiswa = props.pointSiswa;
    const currentLevel = props.currentLevel;
    const percentage = Math.round((pointSiswa * 100) / (currentLevel * 100 + 100));
    const nextLevelPoint = currentLevel * 100 + 100;


    if (!isNaN(nextLevelPoint)) {
        return (
            <div>
                <StyledBar data={percentage.toString()} >
                    <p>{pointSiswa} / {nextLevelPoint} ({percentage}%)</p>
                </StyledBar>
            </div>

        )
    }
    else {
        return (
            <div className='text-center'>
                <p>Please wait...</p>
            </div>
        )
    }


}
