import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../components/PostList';
import { getPosts } from '../modules/posts';


const PostListContainer = () => {
    //상태값 받아오기
    const {data, loading, error} = useSelector(state=>state.posts.posts);
    const dispatch = useDispatch()
    //컴포넌트 마운트 됬을때 포스트목록 요청
    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch])
    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생</div>
    if(!data) return null;
    return (
        <PostList posts={data}/>
    );
};

export default PostListContainer;