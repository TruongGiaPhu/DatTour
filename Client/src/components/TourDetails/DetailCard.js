import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import CardItem from '../Cards/CardItem';
import Tour from "../API/Tour";

function DetailCard() {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const [tours, setTours] = useState([])

          // Lấy tất cả tour
          useEffect(() => {
            const fetchData = async () => {
                const response = await Tour.Get_All_Tour()
                setTours(response)
            }
            fetchData()
          }, [])

    return (
        <div> 
            <Slider {...settings}>
                {
                    tours && tours.map((value, index) => (
                        <div key={index}>
                            <CardItem
                                src={value.img}
                                text={value.name}
                                label='Hot'
                                path={`/tour/detail/${value._id}`}
                                price={value.price}
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default DetailCard


