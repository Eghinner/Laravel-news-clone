import React, { useState, useEffect } from 'react'
import { List } from './Posts.styled'
import axios from 'axios'

const Posts = () => {

	const [loading, setLoading] = useState(false)
	const [posts, setPosts] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
			const response = await axios.get('http://127.0.0.1:8000/api/posts')
			setPosts(response.data)
			console.log(response)
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false)
		}
		fetchData()
	}, [])
	useEffect(() => {
		console.log(posts)
	}, [posts])
	return (
		<List>
			{loading && <div>Loading</div>}
			{!loading && (
			      <li>
			        <h2>Doing stuff with data</h2>
			        {
			        	// posts.map(item => (<h2>{item.name}</h2>))
			        }
			      </li>
			)}
		</List>
	)
}

export default Posts