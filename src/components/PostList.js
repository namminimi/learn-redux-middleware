import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({posts}) => {
    console.log(posts)
    return (
        <ul>
            {posts.map(post=><Link key={post.id} to={`/${post.id}`}><li>
                {post.title}
            </li></Link>)}
        </ul>
    );
};

export default PostList;