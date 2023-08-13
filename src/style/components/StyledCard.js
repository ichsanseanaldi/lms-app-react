import styled, { keyframes } from 'styled-components';

const myAnim = keyframes`

	0%,
	100% {
		transform: translateX(0%) scale(0.7) ; 
		transform-origin: 50% 50%;
	}

	15% {
		transform: translateX(-30px) rotate(-6deg) scale(0.7) ;
	}

	30% {
		transform: translateX(15px) rotate(6deg) scale(0.7) ;
	}

	45% {
		transform: translateX(-15px) rotate(-3.6deg) scale(0.7) ;
	}

	60% {
		transform: translateX(9px) rotate(2.4deg) scale(0.7) ;
	}

	75% {
		transform: translateX(-6px) rotate(-1.2deg) scale(0.7) ;
	}


`

export const StyledCard = styled.div`

    width: 300px ;
    height: 150px ;
    margin: 10px ;
    padding: 10px 0 ;
    display: flex ;
    border-radius:10px;
	color: #FFF ;
	background-color:${props => props.bordercolor};
	box-shadow:5px 5px 10px rgba(0,0,0,0.2);
	

	.svg-card{
		transform:scale(0.7);
		transition:0.2s;
	}

    &:hover .svg-card{
       transform:scale(0.75);
    }

	@media (max-width:920px){
		width:250px ;
	}

	@media (max-width:700px){

		.svg-card{
			padding:0 ;
		}

	}
 
    
`