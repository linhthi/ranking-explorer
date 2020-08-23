import React from 'react'

function Posts({posts, loading}) {
    if(loading) {
        return <h2>Loading...</h2>
    }

    return <ul>
        {posts.map(post => (
            <li key={post.id}>
                {post.content}
            </li>
        ))}
    </ul>
};

export default Posts
