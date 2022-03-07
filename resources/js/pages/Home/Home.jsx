import React from 'react'
import Navbar from '../../components/Navbar'
import { Container, Header } from './Home.styled'
import Comments from '../../components/Comments'
import Posts from '../../components/Posts'
const Home = () => {
  return (
  	<React.Fragment>
    	<Navbar></Navbar>
    	<Header>
    		<h1>BLOG</h1>
    		<p>All the latest posts</p>
    	</Header>
    	<Container>
    		<Posts />
    		<Comments />
    	</Container>
    </React.Fragment>
  )
}

export default Home
