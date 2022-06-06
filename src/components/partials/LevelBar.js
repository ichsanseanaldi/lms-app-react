import React from 'react'
import { StyledBar } from '../../style/components/StyledBar'

export const LevelBar = (props) => {

    const pointSiswa = props.pointSiswa;
    const currentLevel = props.currentLevel;
    const percentage = Math.round((pointSiswa * 100) / (currentLevel * 100 + 100));

    return (
        <StyledBar data={percentage} >
            {pointSiswa}/{currentLevel * 100 + 100} ({percentage}%)
        </StyledBar>
    )
}
