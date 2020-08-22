import React, {useEffect, useState} from 'react';
//import Slider from '../../components/Slider';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Post from '../../components/Post';
import FormFillter from '../../components/FormFillter';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

function HomePage() {
    useEffect(() => {
        fetchRankingFeeds();
    }, []);

    const [listFeeds, setListFeed] = useState([]);
    const getAllFeedUrl = '/ranking_feeds';

    const fetchRankingFeeds = () => {
        axios.get(getAllFeedUrl)
            .then(res => {
                const feeds = res.data.ranking_feeds;
                setListFeed(feeds)
            });
    }
    return(
        <Router>
            <Row>
               <Col sm={4} className="leftCol">
                    <h4 className="center">Ranking Request</h4>
                    <FormFillter />
                    <ul >
                     {listFeeds.map((feeds, idx) => (
                        <div key={idx.toString()}>
                            <Link to={`/list_feed/${feeds.user_id}/${feeds.request_timestamp}`} >
                                <li style={{color: 'black'}}>
                                    <div>User:{feeds.user_id}, request_timestamp:{feeds.request_timestamp}</div>
                                </li>
                            </Link>
                        </div>
                     ))}
                     </ul>
               </Col>
               <Col sm={7} className="rightCol">
                    <Route path="/list_feed/:id/:time_stamp" component={Post} />
               </Col>
               <Col sm={1}></Col>
           </Row>
        </Router>
    )
}

export default HomePage;
