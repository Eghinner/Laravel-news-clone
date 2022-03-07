import { Routes, Route } from "react-router-dom"
import Register from './Register'
import Login from './Login'
import NotFound from './NotFound'
import Home from './Home'

 const Pages = () => {
 	return (
      <Routes>
      	<Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
 	)
 }

 export default Pages