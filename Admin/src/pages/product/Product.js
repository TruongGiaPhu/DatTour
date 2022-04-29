import React, { useState, useEffect } from 'react'
import './Product.css'
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData'
import Product_Details from '../../components/API/Product'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PhuongTien from '../../components/API/PhuongTien'
import Quocgia from '../../components/API/QuocGia'

export default function Product() {
    // const [file, setFile] = useState(null);
    const [data, setData] = useState([])
    const [phuongTien, setPhuongTien] = useState([])
    const [quocGia, setQuocGia] = useState([])

    // console.log(p);
    useEffect(() => {
        const url = window.location.href
        const valueUrl = url.split('/')
        const fetchData = async () => {
            const response = await Product_Details.Get_Detail_Tour(valueUrl[4])
            setData(response)
            const response1 = await PhuongTien.Get_All_PhuongTien()
            setPhuongTien(response1)
            console.log(response1)
            const response2 = await Quocgia.Get_All_QuocGia()
            setQuocGia(response2)
        }
        fetchData()

    }, [])

    // console.log(NewPhuongTien);
    // const NewPhuongTien = phuongTien?.map(product => {
    //     return {
    //         id: product?._id,
    //         name: product?.name,
    //     };
    // })

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (data.name === '' || data.price === '' || data.price_kid === '' || data.description === '' || data.image === '' || data.image1 === '' || data.image2 === '' || data.image3 === '' || data.phuongTien === '' || data.service === '' || data.itinerary === '') {
            toast('🚀 Thay đổi thất bại');
            toast('🚀 Vui lòng nhập đầy đủ thông tin');
        } else {
            const url = window.location.href
            const valueUrl = url.split('/')
            const fetchData = async () => {
                const response = await Product_Details.Put_Tour(valueUrl[4], data)
                console.log(response)
                if (response === 'Connect can be empty') {
                    toast('🚀 Thay đổi thất bại');
                } else {
                    toast('🦄 Thay đổi thành công');
                }
            }
            fetchData()
        }
    }

    const handlOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }




    // const rowData = data?.map(product => {
    //     return {
    //         name: product?.name,
    //         price: product?.price,
    //         price_kid: product?.price_kid,
    //         img: product?.img,
    //         quocgia_id: product?.quocgia_id,
    //         id: product?._id,

    //     };
    // });

    // console.log(phuongTien.loaiphuongtien_id)

    return (
        <div className='product'>
            <div className='productTitleContainer'>
                <h1 className='productTitle'>Thông tin sản phẩm</h1>
            </div>
            <div className='productTop'>
                <div className='productTopLeft'>
                    <Chart data={productData} dataKey='Sales' tile='Sales' />
                </div>
                <div className='productTopRight'>
                    <div className='productInfoTop'>
                        <img className='productInfoImg' alt='' src={data.img} />
                        <span className='productName'>{data.name}</span>
                    </div>
                    <div className='productInfoBottom'>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Mã:</span>
                            <span className='productInfoValue'>{data._id}</span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Quốc gia:</span>
                            <span className='productInfoValue'>
                                {
                                    quocGia?.map(product => {
                                        if (product._id === data.quocgia_id) {
                                            return product.name
                                        }
                                    })
                                }
                            </span>
                        </div>
                        <div className='productInfoItem'>
                            <span className='productInfoKey'>Phương tiện:</span>
                            <span className='productInfoValue'>{phuongTien &&
                                phuongTien.map(product => {
                                    if (product._id === data.phuongtien_id) {
                                        return product.name
                                    }
                                })
                            }</span>
                        </div>
                        {/* <div className='productInfoItem'>
                            <span className='productInfoKey'>Số lượng tour:</span>
                            <span className='productInfoValue'>123</span>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='productBottom'>
                <form className='productForm'>
                    <div className='productFormLeft'>
                        <div className='productFromIMG'>
                            <img className='productImg' alt='' src={data.img} />
                            <img className='productImg' alt='' src={data.img1} />
                            <img className='productImg' alt='' src={data.img2} />
                            <img className='productImg' alt='' src={data.img3} />
                        </div>
                        <div className='productFromItem'>
                            <label>URL ảnh 1</label>
                            <input type='text' placeholder='nhập giá' value={data.img} name='img' onChange={handlOnChange} />
                        </div>
                        <div className='productFromItem'>
                            <label>URL ảnh 2</label>
                            <input type='text' placeholder='nhập giá' value={data.img1} name='img1' onChange={handlOnChange} />
                        </div>
                        <div className='productFromItem'>
                            <label>URL ảnh 3</label>
                            <input type='text' placeholder='nhập giá' value={data.img2} name='img2' onChange={handlOnChange} />
                        </div>
                        <div className='productFromItem'>
                            <label>URL ảnh 4</label>
                            <input type='text' placeholder='nhập giá' value={data.img3} name='img3' onChange={handlOnChange} />
                        </div>


                        <div className='productFromItem'>
                            <label>Tên Tour</label>
                            <input type='text' placeholder='nhập giá' value={data.name} name='name' onChange={handlOnChange} />
                        </div>
                        <div className='productFromItem'>
                            <label>Vé người lớn</label>
                            <input type='text' placeholder='nhập giá' value={data.price} name='price' onChange={handlOnChange} />
                        </div>
                        <div className='productFromItem'>
                            <label>Vé trẻ em</label>
                            <input type='text' placeholder='nhập giá' value={data.price_kid} name='price_kid' onChange={handlOnChange} />
                        </div>

                    </div>
                    <div className='productFormRight'>

                        <div className='productFromItem'>
                            <label>Phương Tiện</label>
                            <select id="active" name='phuongtien_id' onChange={handlOnChange}>
                                {phuongTien.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.loaiphuongtien_id.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='productFromItem'>
                            <label>Dịch vụ</label>
                            <textarea value={data.service} name='service' onChange={handlOnChange}></textarea>
                        </div>
                        <div className='productFromItem'>
                            <label>Hành trình</label>
                            <textarea value={data.itinerary} name='itinerary' onChange={handlOnChange}></textarea>
                        </div>
                        <div className='productFromItem'>
                            <label>Miêu tả</label>
                            <textarea value={data.description} name='description' onChange={handlOnChange}></textarea>
                        </div>
                        <input className='productButton' type='submit' value='Cập nhật' onClick={handleFormSubmit} />
                    </div>
                </form>
                <ToastContainer autoClose={2000} theme="dark" />
            </div>
        </div>
    )
}
