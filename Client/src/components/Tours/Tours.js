import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Tour from "../API/Tour";
import '../CSS/grids.css'
import './Tours.css'

function Tours() {

    const [id, setId] = useState('0')
    const [tours, setTours] = useState([])
    const [countrys, setCountrys] = useState([])
    const [search, setSearch] = useState('')
    


    //Lấy danh sách tất cả quốc gia
    useEffect(() => {
        const fetchData2 = async () => {
            const response = await Tour.Get_Country()
            setCountrys(response)
        }
        fetchData2()
    }, [])

    //Lấy id của quốc gia trên URL
    setInterval(Get_Id, 100);
    console.log(id);

    function Get_Id() {
      const url = window.location.href
      const valueUrl = url.split('/')
      if (valueUrl[4] !== 'all')
        setId(valueUrl[4])
    }

    // Lấy tất cả tour thuộc 1 quốc gia
    useEffect(() => {
        const fetchData = async () => {
            if(id !== '0'){
                const response = await Tour.Get_All_Tour_Country(id)
                setTours(response)
            }
        }
        fetchData()
    }, [id])


    return (
        <div className="grids wides">
            <div className="rows rowProducts">
                <div className="colDanhMuc cols l-2 m-2 c-12">
                    <h2 className="DanhMuc">QUỐC GIA</h2>
                    <div className="rows">
                        <div className="colNuocNgoai cols l-12 m12 c-12">    
                            <ul className="item_ul">
                                { 
                                    countrys && countrys.map((value, index) => (
                                        <li 
                                            key={index} 
                                            className="item_li"
                                        >
                                        <Link to={`/tours/${value._id}`} className="quocgia_decoration">{value.name}</Link>  
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="cols l-10 m-10 c-12">

                    <div className="rows Search">
                        <div className="cols l-12 m-12 c-12">
                            <input 
                                type="text" 
                                className="input_Search" 
                                placeholder="  Search here..." 
                                value={search} 
                                onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>

                    <div className="rows rowsTours">
                    {
                        tours && tours.filter(value => {
                            if (search === '') {
                                return value
                            }else if (value.name.toLowerCase().includes(search.toLowerCase()) || 
                                        value.price.includes(search)) {
                                return value
                            }
                        }).map((value, index) => (
                            <div key={index} className="cols_Item cols l-4 m-6 c-12">
                                <div className="rows rowsItem">
                                    <Link to={`/tour/detail/${value._id}`} className="Link_Item">
                                        <div>
                                            <img className="tour_image" alt="" src={value.img}/>
                                        </div>
                                        <div className="div_item_name">
                                            <h4 className="item_name">{value.name}</h4>
                                        </div>
                                        <div className="price_div">
                                            <span className="price_span">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(value.price)+ ' VNĐ'}</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>                    
                        ))
                    }
                    </div>  
                </div>
            </div>
        </div>
    )

}

export default Tours




























































