import React , {useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './Pagination';

function ListPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(3); 

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            const res = await axios.get('/posts');
            setPosts(res.data.posts);
            setLoading(false);
        };

        fetchPost();
    }, []);

    // Get current post
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Posts posts={currentPosts} loading={loading} / >
            <Pagination postPerPage={postPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}

export default ListPost
