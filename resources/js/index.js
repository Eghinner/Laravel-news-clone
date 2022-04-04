import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import { css } from '@emotion/css'

const app = document.getElementById('root')
const myStyle = css`
  *,
  *:before,
  *:after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
`
app.classList.add(myStyle)
ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
app
)
