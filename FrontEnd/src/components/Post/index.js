import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Post({match}) {

    useEffect(() => {
        fetchFeeds();
    }, []);

    const [listResult, setListResult] = useState([]);
    const [isDone, setIsDone] = useState(false);

    const fetchFeeds = () => {
        let getAllFeedUrl = `/list_feed/user/${match.params.id}`;
        setListResult([]);
        axios.get(getAllFeedUrl)
            .then(res => {
                const feeds = res.data.feeds;
                for (let i = 0; i < feeds.length; i++) {
                    axios.get(`/posts/${feeds[i].id}`)
                        .then(res => {
                            const item = res.data.post;
                            const feed = {post: item, feed: feeds[i]}
                            listResult.push(feed);
                            setListResult(listResult);
                            if (i === feeds.length - 1) {
                                setIsDone(true);
                            }
                        })
                }
            });
    }

    return (
        <>
        {isDone ? 
         <ul>
         {listResult.map((item, idx) => (
            <li key={idx.toString()} className="post">
                <div style={{display: 'inline'}}>
                    <img src="https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-260nw-1365533969.jpg"className="imgProfile"></img>
                    <h5>user_{item.post.user_id} {item.post.source != "" ? "> " : ""}{item.post.source}</h5>
                </div>
                <div className="create_time" style={{color: 'gray', fontSize: '12px', marginLeft: '10px'}}>{item.post.create_time}</div>
                <div>{item.post.content}</div>
                {/* <img src={item.post.media}></img> */}
                
            </li>
         ))}
         </ul>
         : "loading"
        }
       
        </>
    )
}

export default Post;
