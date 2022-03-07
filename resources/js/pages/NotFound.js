import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const NotFound = () => {
	return (
		<React.Fragment>
			<div className="background">
				<div className="shape"></div>
				<div className="shape"></div>
			</div>
			<div className="error__content">
				<div className="error__msg">404</div>
				<div className="gohome"><Link to="/">C'mon, go home</Link></div>
			</div>
		</React.Fragment>
	)
}

export default NotFound