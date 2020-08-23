import React, {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {useAppContext} from '../../ContextApp/useContextApp';

function FormFillter() {
    const {
        feed,
        updateFeed
    } = useAppContext();


    const [user_id, setUser_id] = useState("");
    const [timestamp, setTimestamp] = useState(0);

    const handleOnchangeUserid = event => {
        setUser_id(event.target.value)
    }

    const handleOnchangeTimestamp = event => {
        setTimestamp(event.target.value)
    }
    
    const filter = () => {
        
    }

    return(
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
                    <Button type="submit" onClick={filter}>Filter</Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default FormFillter;