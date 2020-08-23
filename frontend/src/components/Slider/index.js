import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {

    return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://thietkehomexinh.com/wp-content/uploads/2017/03/nha-hang-ha-noi-01.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Không gian ấm cúng</h3>
                    <p>Được bố trí một cách hài hòa, tinh tế</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://newwaypms.com/upload/news/cach-tinh-food-cost-cho-mon-an.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Thực đơn</h3>
                    <p>Đa dạng với nhiều món hấp dẫn</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://nhahangmaison.vn/wp-content/uploads/2018/12/mon-bo-nha-hang-maison-36a-hoang-cau.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Thực đơn</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );

}

export default Slider;