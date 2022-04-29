import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'

export default class Slider1 extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
        };
        return (
            <div className="slider" >
                <Slider className="sliderContent"{...settings}>
                    <div>
                        <img className="sliderContentImg" alt="" src="https://sgp1.digitaloceanspaces.com/tz-mag-vn/wp-content/uploads/2019/04/040404041616/dia-diem-du-lich-phap-10.jpg" />
                    </div>
                    <div>
                        <img className="sliderContentImg" alt="" src="https://img.nhandan.com.vn/Files/Images/2021/06/27/travel_hoi_an-1624775443712.jpg" />
                    </div>
                    <div>
                        <img className="sliderContentImg" alt="" src="http://media.bizwebmedia.net/sites/126613/data/Upload/2016/7/san_francisco.jpg" />
                    </div>
                    <div>
                        <img className="sliderContentImg" alt="" src="https://visaheme.com/wp-content/uploads/2019/03/song-seine-du-lich-phap.jpg" />
                    </div>
                    <div>
                        <img className="sliderContentImg" alt="" src="https://media.travel.com.vn/tour/tfd_220304102238_039802.jpg" />
                    </div>
                    <div>
                        <img className="sliderContentImg" alt="" src="https://media.travel.com.vn/tour/tfd_220304102257_345733.jpg" />
                    </div>
                </Slider>
            </div>
        );
    }
}