import styled from 'styled-components';


export const StyledCard = styled.div`

    width: 300px ;
    height: 150px ;
    margin: 10px ;
    padding: 10px 0 ;
    display: flex ;
    border-radius:10px ;
    border : 2px solid ${props => props.bordercolor};
	box-shadow:0 0  10px ${props => props.bordercolor};
    

    .svg-card{
        animation: myAnim 2s ease 0s 1 normal forwards;
    }

    @keyframes myAnim {
	0%,
	100% {
		transform: translateX(0%) scale(0.7);
		transform-origin: 50% 50%;
	}

	15% {
		transform: translateX(-30px) rotate(-6deg) scale(0.7);
	}

	30% {
		transform: translateX(15px) rotate(6deg) scale(0.7);
	}

	45% {
		transform: translateX(-15px) rotate(-3.6deg) scale(0.7);
	}

	60% {
		transform: translateX(9px) rotate(2.4deg) scale(0.7);
	}

	75% {
		transform: translateX(-6px) rotate(-1.2deg) scale(0.7);
	}
}

    /* &:hover > .svg-card{
        transform: rotate(360deg) scale(0.7) ;
    }  */
    
`