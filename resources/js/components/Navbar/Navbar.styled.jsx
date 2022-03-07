import styled from '@emotion/styled'
import { keyframes } from '@emotion/css'


const fadeInRight = keyframes({
    'from, 0%, to': {
        opacity: '0',
        transform: 'translate3d(100%,0,0)'
    },
    '100%': {
        opacity: '1',
        transform: 'none'
    }
})

export const Input = styled.input`
	border: solid 1px grey;
	padding: .2rem 1rem;
	font-weight: 500;
	font-size: 1rem;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
	&:active, &:focus {
		outline: none;
	}
`

export const Button = styled.button`
	background-color: grey;
	border: solid 1px grey;
	padding: .2rem 1rem;
	font-weight: 500;
	font-size: 1rem;
	border-top-right-radius: 1rem;
	border-bottom-right-radius: 1rem;
`

export const Nav = styled.nav`
  position: fixed;
  left:0;right:0;top:0;
  height:50px;
  background: white;
  box-shadow:0 0px 9px 4px rgba(#000, .1), 0 -5px 2px 2px rgba(#000, .1);
  z-index:1000;
  min-width:580px;
  a,a:hover{color: desaturate(navy,80%); text-decoration : none; font-weight:600;}
`
export const Logo = styled.a`
	position:relative;
	float:left;
	height:50px;
	line-height:50px;
	padding:0 15px;
	font-size:22px;
	font-weight:900;
	text-transform:uppercase;
	span{
	  display:inline-block;
	  position:relative;
	  top:-8px;
	  font-size:13pt;
	}
	&:hover{
      background: grey;
    }
`

export const Links = styled.ul`
	float:right;
	margin-right: 30px;
	position:relative;

	li{
	  float:left;
	  list-style:none;
	  position:relative;
	  margin:10px;
	  display:inline-block;

	  &>a{
	    position:relative;
	    display:inline-block;
	    padding:0 10px;
	    line-height:30px;
	    height:30px;

	    &:hover{
	      color: #222;
	      background: desaturate(navy,80%);
	      border-radius:2px;
	    }

	    &[class^="trigger-"]{padding-right:40px;}
	  }

	  ul{
	      position:absolute;
	      left:0;
	      margin:0;
	      background: #fff;
	      border-radius:2px;
	      box-shadow:0 0 5px rgba(#000, .15);
	      display:none;

	      >li{
	        clear:both;
	        list-style:none;
	        display:block;
	        padding:0 10px;
	        margin:0;
	        width:100%;

	        &:hover{
	          background:lighten( desaturate(navy,80%),40);
	          >a{
	            background:lighten( desaturate(navy,80%),40);
	          }
	        }
	      }
	    }

	  &:hover {
	      > .drop{
	        display:block;
	        animation: ${fadeInRight} .3s ease;
	        -webkit-animation: ${fadeInRight} .3s ease;
	    }
	  }
	}
`
