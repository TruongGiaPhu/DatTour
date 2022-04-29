import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Tour from "../API/Tour";
import User from "../API/User";

import "./TourDetails.css";
import DetailCard from "./DetailCard";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Tour_Details() {


    const [tour, setTour] = useState([])

    const [quantityNL, setQuantityNL] = useState(1)
    const [quantityTE, setQuantityTE] = useState(0)

    const [id, setId] = useState('')

    setInterval(Get_Id, 100);

    function Get_Id() {
      const url = window.location.href
      const valueUrl = url.split('/')
      setId(valueUrl[5])
    }

      // Lấy thông tin tour
        useEffect(() => {
          const url = window.location.href
          const valueUrl = url.split('/')
          const fetchData = async () => {
              const response = await Tour.Get_Tour_Id(valueUrl[5])
              setTour(response)
          }
          fetchData()
      }, [id])
      
      const handler_Submit = (e) => {

        e.preventDefault()
        
        console.log(tour._id, tour.name, tour.price,tour.price_kid, tour.itinerary, quantityNL, quantityTE);

        const fetchData = async () => {
                              
          const data = {
            SLNL: quantityNL,
            SLTE: quantityTE,
            tour_id: tour._id,
            khachhang_id: (sessionStorage.getItem("id_user")) 
          }
          console.log(`data nè: ${data}`);

          const response = await User.Post_BookingTour(data)

          if(response === 'Rất xin lỗi quý khách! Tour đã hết chỗ!'){
            toast.error('🚀 Rất xin lỗi quý khách! Tour đã hết chỗ!')
          }else if(response.name === 'False'){
            toast.error(response.msg)
          }else if(response.name === 'False Kid'){
            toast.error(response.msg)
          }else if(response === 'Booking success'){
            toast.success('🦄 Đặt Tour thành công!')
          }else if(response === 'Số lượng người lớn phải lớn hơn 0'){
            toast.error('🚀 Số lượng người lớn phải lớn hơn 0')
          }else if(response === 'Số lượng trẻ em không được âm'){
            toast.error('🚀 Số lượng trẻ em không được âm')
          }else if(response === 'Số lượng người lớn không được rỗng'){
            toast.error('🚀 Số lượng người lớn không được rỗng')
          }else if(response === 'Số lượng trẻ em không được rỗng'){
            toast.error('🚀 Số lượng trẻ em không được rỗng')
          }
        }

        fetchData()

      }


  return (
    <div className="details">
    <div className="grids wides">
      <div className="rows">
        <div className="cols l-7 m-7 c-12">
            <div className="rows">
              <div className="image_product_details">
                  <Carousel infiniteLoop autoPlay>
                        <div className="image">
                          <img src={tour.img} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img1} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img2} alt="moblile"></img>
                        </div>
                        <div className="image">
                          <img src={tour.img3} alt="moblile"></img>
                        </div>
                  </Carousel>
              </div>
            </div>
            <div className="rows">
              <h1 className="Mota">Mô Tả:</h1>
              <p className="description">{tour.description}.</p>
            </div>
        </div>
        
        <div className="colsInfo cols l-5 m-5 c-0">
          <form action="post">
            <div className="rows">
              <h2>{tour.name}</h2>
            </div>
            <div className="rows">
              <div className="cols l-6 m-6 c-6">
                <ul className="Info_tour1">
                    <li>Giá người lớn:</li>
                    <li>Giá trẻ em:</li>
                    <li>Ngày khởi hành:</li>
                    <li>Ngày kết thúc:</li>
                    <li>Khởi hành từ:</li>
                    <li>Số lượng người lớn:</li>
                    <li>Số lượng trẻ em:</li>
                  </ul>
              </div>
              <div className="cols l-6 m-6 c-6">
                <ul className="Info_tour2">
                  <li className="li_price">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(tour.price)+ ' VNĐ'}</li>
                  <li className="li_price_kid">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(tour.price_kid)+ ' VNĐ'}</li>
                  <li>{tour.itinerary}</li>
                  <li>TP. Hồ Chí Minh</li>
                  <li>
                    <input 
                      type="number" 
                      value={quantityNL}
                      onChange={(e) => setQuantityNL(e.target.value)}
                      required
                    />
                  </li>
                  <li>
                    <input 
                      type="number" 
                      value={quantityTE}
                      onChange={(e) => setQuantityTE(e.target.value)}
                      required
                    />
                  </li>
                </ul>
              </div>
            </div>
            <input type="submit" value="Đặt Tour" onClick={handler_Submit} 
            />
          </form>
        </div>
    </div>
    <div className="rows">
        <div className="cols l-12 m-12 c-12">
            <div className="related-product">
            <div>
                <h1> Tour Hot </h1>
                <DetailCard/>
            </div>
            <div className="jad"></div>
            </div>
        </div>
    </div>
  </div>
  <ToastContainer autoClose={2000} />
  </div>
  );
}

export default Tour_Details;
