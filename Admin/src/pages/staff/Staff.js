import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import React, { useEffect, useState } from 'react'
import './Staff.css'
import staff from '../../components/API/Staff'
import { TabTitle } from '../../components/generalFuntions/GeneralFuntions'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function Staff() {

    const [data, setData] = useState([]);


    useEffect(() => {
        const url = window.location.href
        const valueUrl = url.split('/')
        // console.log(`gdfgdfg`)
        // console.log(valueUrl[4])
        const fetchData = async () => {
            const response = await staff.Get_NhanVien(valueUrl[4])
            setData(response)
        }
        fetchData()
    }, [])

    const handlOnChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const url = window.location.href
        const valueUrl = url.split('/')
        const fetchData = async () => {
            const response = await staff.Put_NhanVien(valueUrl[4], data)
            console.log(response)
            if (response === 'Connect can be empty') {
                toast('🚀 Thay đổi thất bại');
            } else {
                toast('🦄 Thay đổi thành công');
            }
        }
        fetchData()
    }
    return (
        <>
            <div className='staff'>
                <div className='staffTitleContainer'>
                    <h1 className='staffTitle'>Thông tin nhân viên</h1>

                </div>
                <div className='staffContainer'>
                    <div className='staffShow'>
                        <div className='staffShowTop'>
                            <img className='staffShowImg'
                                alt=''
                                src={data.img}
                            />
                            <div className='staffShowTopTitle'>
                                <span className='staffShowStaffName'>{data.name}</span>
                                <span className='staffShowStaffTitle'></span>
                            </div>
                        </div>
                        <div className='staffShowBottom'>
                            <span className='staffShowTitle'>Thông tin</span>
                            <div className='staffShowInfo'>
                                <PermIdentity className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.username}</span>
                            </div>
                            <div className='staffShowInfo'>
                                <CreditCardIcon className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.identity}</span>
                            </div>
                            <div className='staffShowInfo'>
                                <CalendarToday className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.date}</span>
                            </div>
                            <span className='staffShowTitle'>Phương thức liên lạc</span>
                            <div className='staffShowInfo'>
                                <PhoneAndroid className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.phone}</span>
                            </div>
                            <div className='staffShowInfo'>
                                <MailOutline className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.email}</span>
                            </div>
                            <div className='staffShowInfo'>
                                <LocationSearching className='staffShowIcon' />
                                <span className='staffShowInfoTitle'>{data.address}</span>
                            </div>
                        </div>
                    </div>
                    <div className='staffUpdate'>
                        <span className='staffUpdateTitle'>Chỉnh sửa</span>
                        <form className='staffUpdateForm'>
                            <div className='staffUpdateLeft'>

                                <div className='staffUpdateItem'>
                                    <label >Họ và tên</label>
                                    <input type='text' className='staffUpdateInput' name="name" value={data.name} onChange={handlOnChange} />
                                </div>
                                <div className='staffUpdateItem'>
                                    <label >Email</label>
                                    <input type='text' className='staffUpdateInput' value={data.email} name='email' onChange={handlOnChange} />
                                </div>
                                <div className='staffUpdateItem'>
                                    <label >Phone</label>
                                    <input type='text' className='staffUpdateInput' maxLength="10" value={data.phone} name='phone' onChange={handlOnChange} />
                                </div>
                                <div className='staffUpdateItem'>
                                    <label >Address</label>
                                    <input type='text' className='staffUpdateInput' value={data.address} name='address' onChange={handlOnChange} />
                                </div>
                                <div className='staffUpdateItem'>
                                    <label >Nhập CMND|CCCD</label>
                                    <input type='url' className='staffUpdateInput' maxLength="12" value={data.identity} name='identity' onChange={handlOnChange} />
                                </div>

                            </div>

                            <div className='staffUpdateRight'>
                                <div className='staffUpdateItem'>
                                    <img className='staffUpdateImg' alt='' src={data.img} />
                                </div>
                                <div className='staffUpdateItem'>
                                    <label >Nhập URL ảnh</label>
                                    <input type='url' className='staffUpdateInput' value={data.img} name='img' onChange={handlOnChange} />
                                </div>

                                <input className='staffUpadateButton' onClick={handleFormSubmit} type='submit' value='Cập nhật' />
                            </div>
                        </form>
                        <ToastContainer autoClose={2000} theme="dark" />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Staff
