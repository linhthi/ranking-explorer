import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './style.css';
import Container from 'react-bootstrap/Container';

function TopBar() {
    return (
        <Container>
             <Navbar className="topbar" bg="light" variant="light" fixed="top">
                <Nav className="mr-auto">
                    <Link to='/' className="topbar__style">Trang chủ</Link>
                    <Link to='/menu' className="topbar__style">Thực đơn</Link>
                    <Link to='/promotions' className="topbar__style">Khuyến mãi</Link>
                    <Link to='/order' className="topbar__style">Đặt bàn</Link>
                    <Link to='/personal' className="topbar__style">Cá nhân</Link>
                </Nav>
            </Navbar>
        </Container>
    ); 
}

export default TopBar;