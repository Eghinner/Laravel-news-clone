import React, { useState, useEffect } from 'react'
import { List } from './Posts.styled'
import useAxios from '../../hooks/useAxios'

const Posts = () => {

	// const [posts, setPosts] = useState(null)
	const { response, loading, error } = useAxios('/api/posts')
	console.log(response)
	return (
		<List>
			<li>
				{loading && <div>Loading</div>}
				{!loading && 'hey'
					response.length > 0
					? response.map((post) => <h2>{post.name}</h2>)
					: 'No Posts'
				}
			</li>
		</List>
	)
}

export default Posts