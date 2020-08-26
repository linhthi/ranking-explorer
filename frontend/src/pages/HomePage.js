import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../components/Post';
import {Form, FormControl, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';

function HomePage() {
    
    useEffect(() => {
        fetchRankingFeeds();
    }, []);

    const [listFeeds, setListFeed] = useState([]);

    /***
     * user_id, timestamp: to filter list ranking
     * listFiltered: to store a list that filtered
     */
    const [user_id, setUser_id] = useState("");
    const [timestamp, setTimestamp] = useState("");
    const [listFiltered, setListFiltered] = useState([]);

    // Get ranking feed without filter
    const getAllFeedUrl = '/ranking_feeds';
    const fetchRankingFeeds = () => {
        axios.get(getAllFeedUrl)
            .then(res => {
                const feeds = res.data.ranking_feeds;
                setListFeed(feeds);
                setListFiltered(feeds);
            });
    }

    // Take user_id from input form
    const handleOnchangeUserid = event => {
        setUser_id(event.target.value);
        
    }

    // Take timestamp input from form
    const handleOnchangeTimestamp = event => {
        setTimestamp(event.target.value)
    }
    
    // Filter ranking
    const filter = () => {

        if (user_id != "" && timestamp != "") {
            const reslult = listFeeds.filter(feed => {
                if (feed.user_id.toLowerCase().includes(user_id) && feed.request_timestamp <= parseInt(timestamp)) {
                    return feed;
                }
            })
            setListFiltered(reslult);
        }
        else if (user_id != "" || timestamp != "") {
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
    useEffect(() => {
        const filltered_by_id = listFeeds.filter(feed => feed.user_id.toLowerCase().includes(user_id));
        setListFiltered(filltered_by_id);
    }, [user_id]);


    return(
        <Container>
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
                                <FormControl placeholder="req_timestamp" onChange={handleOnchangeTimestamp } />
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
                        
                        <li key={idx}>
                            <Link to={`/list_feed/${feeds.id}/${feeds.user_id}/${feeds.request_timestamp}`} >
                                <div className="back">
                                    user:{feeds.user_id}, req_tp:{feeds.request_timestamp}
                                </div>
                            </Link>
                        </li>
                    ))}
                     </ul>
                    {/* End of the list ranking */}
               </Col>

               {/* Right Column to dislay list feed */}
               <Col sm={8} className="rightCol">
                   <h4 className="center">List feeds</h4>
                   {/* Route to post list detail */}
                    <Route path="/list_feed/:id/:user_id/:req_ts" render={(props) => (
                        <Post key={props.match.params.id} {...props} />)}
                   />
               </Col>
               {/* End of the right column */}
               {/* <Col sm={1}></Col> */}
           </Row>
        </Router>
        </Container>
    )
}

export default HomePage;
