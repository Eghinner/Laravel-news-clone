import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'

const bounce = keyframes({
  'from, 0%, 100%, to': {
    transform: 'scale(0.0)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
})

export const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	/*background-color: rgba(0,0,0,0.5);*/
	background-color: #fafa;
`
export const Spinner = styled.div`
	  width: 60px;
	  height: 60px;
	  position: relative;
	  margin: 100px auto;

	  .double-bounce1, .double-bounce2 {
	  width: 100%;
	  height: 100%;
	  border-radius: 50%;
	  background-color: #333;
	  opacity: 0.6;
	  position: absolute;
	  top: 0;
	  left: 0;

	  -webkit-animation: ${bounce} 2.0s infinite ease-in-out;
	  animation: ${bounce} 2.0s infinite ease-in-out;
	  }
	  .double-bounce2 {
	  -webkit-animation-delay: -1.0s;
	  animation-delay: -1.0s;
	  }
`
