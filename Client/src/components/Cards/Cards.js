import React, {  useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import Tour from '../API/Tour'

import './Cards.css';
import CardItem from './CardItem';
import CardDometic from './CardDometic';
import CardForeign from './CardForeign';


function Cards() {
  
  const [tours, setTours] = useState([])
  const [tours5, setTours5] = useState([])

  // Lấy danh sách tất cả tour
  useEffect(() => {
      const fetchData = async () => {
          const response = await Tour.Get_All_Tour()
          const tours5Item = response.slice(0, 4)
          setTours5(tours5Item)
      }
      fetchData()
  }, [])

  console.log(`tours nè: ${tours}`);
  console.log(`tours5 nè: ${tours5}`);



  return (
    <div className='cards'>
        <h1>Top 4 Địa Điểm Du Lịch Đáng Đến Nhất</h1>
        <div className='cards__container'>
            {
              tours5 && tours5.map((value, index) => (
                <div className='cols l-6 m-6 c-6' key={index}>
                  <div >
                    <CardItem
                      src={value.img}
                      text={value.name}
                      label='Hot'
                      path={`/tour/detail/${value._id}`}
                      price={value.price}
                    />
                  </div>
                </div>
              ))
            }
        </div>
        <br />
        <br />
        <br />
        <div className='card_Slider'>
          <div className=''>
            <h1> Trong nước </h1>
            < CardDometic />
          </div>

        </div>
        <br />
        <br />
        <br />
        <div className='card_Slider'>
          <div className=''>
            <h1> Quốc Tế </h1>
            <CardForeign />
          </div>
        </div>
      </div>
  )
}

export default Cards

