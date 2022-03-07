import React, { Suspense } from 'react'
import SplashScreen from './components/SplashScreen'
const Pages = React.lazy(() => import('./pages'))

const App = () => {
  return (
    <Suspense fallback={ <SplashScreen/> }>
      <Pages />
    </Suspense>
  )
}

export default App