import { Background, Spinner } from './SplashScreen.styled'

const SplashScreen = () => {
	return (
		<Background>
			<Spinner>
				<div className="double-bounce1"></div>
				<div className="double-bounce2"></div>
			</Spinner>
		</Background>
	)
}

export default SplashScreen