import { useState, useEffect } from "react";
import './NewProduct.css'
import Product from "../../components/API/Product";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Quocgia from "../../components/API/QuocGia";
import Phuongtien from "../../components/API/PhuongTien";

export default function NewProduct() {
    const [images, setImages] = useState([])

    const [quocgia, setQuocgia] = useState([])
    const [phuongtien, setPhuongTien] = useState([])

    // const [data, setData] = useState([])

    const [name, setName] = useState('')
    const [itinerary, setItinerary] = useState('')
    const [price, setPrice] = useState('')
    const [price_kid, setPriceKid] = useState('')
    const [quocgia_id, setQuocgiaId] = useState('')
    const [service, setService] = useState('')
    // const [diemden_id, setDiemdenId] = useState('')
    const [phuongtien_id, setPhuongtienId] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState('')
    const [img1, setImg1] = useState('')
    const [img2, setImg2] = useState('')
    const [img3, setImg3] = useState('')




    useEffect(() => {
        const fetchData = async () => {
            const response = await Quocgia.Get_All_QuocGia()
            setQuocgia(response)
            const response1 = await Phuongtien.Get_All_PhuongTien()
            setPhuongTien(response1)
        }
        fetchData()
    }, [])


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (name === '' || itinerary === '' || price === '' || price_kid === '' || service === '' || description === '' || img === '' || img1 === '' || img2 === '' || img3 === '') {
            toast.error("Vui lòng nhập đầy đủ thông tin")
        } else if (price < 0 || price_kid < 0) {
            toast.error("Giá không được nhỏ hơn 0")
        } else if (!/^[0-9]*$/.test(price) || !/^[0-9]*$/.test(price_kid)) {
            toast.error("Giá phải là số")
        } else if (quocgia_id === '') {
            toast.error("Vui lòng chọn quốc gia")
        } else if (phuongtien_id === '') {
            toast.error("Vui lòng chọn phương tiện")
        } else {
            const fetchData = async () => {
                const data = {
                    name,
                    itinerary,
                    price,
                    price_kid,
                    description,
                    service,
                    img,
                    img1,
                    img2,
                    img3,
                    quocgia_id,
                    phuongtien_id,
                }
                console.log(data);
                const response = await Product.Post_Tour(data)
                console.log(response);

                if (response === 'Tên tour đã tồn tại') {
                    toast.error('Tên tour đã tồn tại')
                } else {
                    toast.success('Thêm thành công')
                    setImg('')
                    setImg1('')
                    setImg2('')
                    setImg3('')
                    setName('')
                    setItinerary('')
                    setPrice('')
                    setPriceKid('')
                    setQuocgiaId('')
                    setService('')
                    setDescription('')
                    setPhuongtienId('')

                }
            }
            fetchData()

        }
    }


    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Thêm sản phẩm mới</h1>
            <form className="addProductForm">
                <div className='addProductFormLeft'>
                    <div className="addProductFormLeftItem">

                    </div>
                    <div className="addProductItem">
                        <label>Ảnh </label>
                        <div className='addProductItemImg'>
                            <img src={img} className='addProductImg' alt="" />
                            <img src={img1} className='addProductImg' alt="" />
                            <img src={img2} className='addProductImg' alt="" />
                            <img src={img3} className='addProductImg' alt="" />
                        </div>
                    </div>

                    <div className="addProductItem">
                        <label>ảnh 1</label>
                        <input type="url" placeholder="Nhập ảnh 1" value={img} onChange={(e) => setImg(e.target.value)} />
                    </div>
                    <div className="addProductItem">
                        <label>ảnh 2</label>
                        <input type="url" placeholder="Nhập ảnh 2" value={img1} onChange={(e) => setImg1(e.target.value)} />
                    </div>
                    <div className="addProductItem">
                        <label>ảnh 3</label>
                        <input type="url" placeholder="Nhập ảnh 3" value={img2} onChange={(e) => setImg2(e.target.value)} />
                    </div>
                    <div className="addProductItem">
                        <label>ảnh 4</label>
                        <input type="url" placeholder="Nhập ảnh 4" value={img3} onChange={(e) => setImg3(e.target.value)} />
                    </div>

                    <div className="addProductItem addProductItemHeight">
                        <label>Mô tả</label>
                        <textarea placeholder="Nhập mô tả" required value={itinerary} onChange={(e) => setItinerary(e.target.value)} ></textarea>
                    </div>
                    <div className="addProductItem addProductItemHeight">
                        <label>Hành trình</label>
                        <textarea placeholder="Nhập hành trình" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="addProductItem addProductItemHeight">
                        <label>dịch vụ</label>
                        <textarea placeholder="Nhập dịch vụ" required value={service} onChange={(e) => setService(e.target.value)}></textarea>
                    </div>
                </div>
                <div className='addProductFormRight'>
                    <div className="addProductItem">
                        <label>Tên Tour</label>
                        <input type="text" placeholder="Nhập tên địa danh" required value={name} onChange={(e) => setName(e.target.value)} />
                        {/* {
                            nameExist && <p className='nameExist' >Tên tour đã tồn tại</p>
                        } */}
                    </div>
                    <div className="addProductItem">
                        <label>Giá người lớn</label>
                        <input type="text" placeholder="Nhập giá người lớn" required value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="addProductItem">
                        <label>Giá trẻ em</label>
                        <input type="text" placeholder="Nhập giá trẻ em" required value={price_kid} onChange={(e) => setPriceKid(e.target.value)} />
                    </div>

                    <div className="addProductItem">
                        <label>Quốc gia</label>
                        <select id="active" name="quocgia_id" onChange={(e) => {
                            setQuocgiaId(e.target.value)
                        }}>
                            <option value=''>---Chọn quốc gia---</option>
                            {
                                quocgia.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )
                                })
                            }
                            {/* <option>---Chọn quốc gia---</option>
                            <option value='624c56d912f46cfd65afad76'>Việt Nam</option>
                            <option value='625123fb5ae9234f45aa7ffc'>Mỹ</option>
                            <option value='62512814089178658d8a0beb'>Pháp</option>
                            <option value='625131d35ae9234f45aa8029'>Thái Lan</option>
                            <option value='6252729f2e6805bcb8d14c07'>Nhật Bản</option> */}
                        </select>
                    </div>
                    <div className="addProductItem">
                        <label>Phương tiện</label>
                        <select id="active" name="phuongtien_id" onChange={(e) => {
                            setPhuongtienId(
                                e.target.value
                            )
                        }}>
                            <option value='' >---Chọn phương tiện---</option>
                            {
                                phuongtien.map((item, index) => {
                                    return (
                                        <option key={index} value={item._id}>{item.name}</option>
                                    )
                                }
                                )
                            }
                        </select>
                    </div>

                    <input type="submit" value="Thêm" className="addProductButton" onClick={handleFormSubmit} />
                    {/* {
                        success && <p className='success' >Thêm thành công</p>
                    } */}
                    <ToastContainer autoClose={2000} />
                </div>
            </form>
        </div>
    )
}
