import React, {useEffect, useState} from 'react';
//import Slider from '../../components/Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../../components/Post';
import {Form, FormControl, Button} from 'react-bootstrap';
// import FormFillter from '../../components/FormFillter';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';
import {useAppContext} from '../../ContextApp/useContextApp';

function HomePage() {
    const { updateFeed } = useAppContext();
    
    useEffect(() => {
        fetchRankingFeeds();
    }, []);

    const [listFeeds, setListFeed] = useState([]);
    const [user_id, setUser_id] = useState("");
    const [timestamp, setTimestamp] = useState("");
    const [listFiltered, setListFiltered] = useState([]);
    const getAllFeedUrl = '/ranking_feeds';

    const fetchRankingFeeds = () => {
        axios.get(getAllFeedUrl)
            .then(res => {
                const feeds = res.data.ranking_feeds;
                setListFeed(feeds);
                setListFiltered(feeds);
                updateFeed(feeds);
            });
    }

    function viewDetailList() {
        
    }

    const handleOnchangeUserid = event => {
        setUser_id(event.target.value);
    }

    const handleOnchangeTimestamp = event => {
        setTimestamp(event.target.value)
    }
    
    const filter = () => {
        if (user_id != "" || timestamp != "") {
            const reslult = listFeeds.filter(feed => {
                if (feed.user_id == user_id || feed.request_timestamp <= parseInt(timestamp)) {
                    return feed;
                }
            })
            setListFiltered(reslult);
        }
        else {
            window.location.href='/';
        }
    }


    return(
        <Router>
            <Row>
               <Col sm={4} className="leftCol">
                    <h4 className="center">Ranking Request</h4>
                    {/* Form tp filler */}
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col sm={1}></Col>

                            <Col sm={3} className="my-1">
                                <Form.Label srOnly>
                                    Name
                                </Form.Label>
                                <Form.Control placeholder="user_id" onChange={handleOnchangeUserid}/>
                            </Col>

                            <Col sm={4} className="my-1">
                                <Form.Label srOnly>
                                    Username
                                </Form.Label>
                                <FormControl placeholder="req_timestamp" onChange={handleOnchangeTimestamp}/>
                            </Col>

                            <Col xs="auto" className="my-1">
                                <Button type="button" onClick={filter}>Filter</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                    {/* End of form */}
                    
                    {/* List the list ranking random */}
                    <ul >
                     {listFiltered.map((feeds, idx) => (
                        <div key={idx.toString()}>
                            <Link to={`/list_feed/${feeds.user_id}/${feeds.request_timestamp}`} >
                                <a onClick={viewDetailList}>
                                    <li style={{color: 'black'}}>
                                        <div>User:{feeds.user_id}, request_timestamp:{feeds.request_timestamp}</div>
                                    </li>
                                </a>
                            </Link>
                        </div>
                     ))}
                     </ul>
               </Col>
               <Col sm={7} className="rightCol">
                   <h4 className="center">List feeds</h4>
                    <Route path="/list_feed/:id/:timestamp" component={Post} />
               </Col>
               <Col sm={1}></Col>
           </Row>
        </Router>
    )
}

export default HomePage;
