import React, { useState, useEffect } from 'react'
import User from '../API/User';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'

import './Infomation.css'

function Infomation() {

    const [user, setTours] = useState([])
    
    const id_user = sessionStorage.getItem("id_user")

    useEffect(() => {
        const fetchData = async () => {
            const response = await User.Get_User(id_user)
            setTours(response)
        }
        fetchData()
        
    }, [id_user])

  return (
    <div className="grids wides">
        <div className="rows rowsInfo">
        <div className='profile'>
            <div className='profileTitleContainer'>
                <h1 className='profileTitle'>Hồ sơ cá nhân</h1>
            </div>
            <div className='profileContainer'>
                <div className='profileShow'>
                <div className='profileShowTop'>
                    <img className='profileShowImg'
                    alt=''
                    src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg'
                    />
                    <div className='profileShowTopTitle'>
                    <span className='profileShowUserName'>{user.name}</span>
                    
                    </div>
                </div>
                <div className='profileShowBottom'>
                    <span className='profileShowTitle'>HỒ SƠ</span>
                    <div className='profileShowInfo'>
                    <PermIdentity className='profileShowIcon' />
                    <span className='profileShowInfoTitle'>{user.gender} Nam</span>
                    </div>
                    <div className='profileShowInfo'>
                    <CalendarToday className='profileShowIcon' />
                    <span className='profileShowInfoTitle'>2.3.2000</span>
                    </div>
                    <span className='profileShowTitle'>PHƯƠNG THỨC LIÊN HỆ</span>
                    <div className='profileShowInfo'>
                    <PhoneAndroid className='profileShowIcon' />
                    <span className='profileShowInfoTitle'>{user.phone}</span>
                    </div>
                    <div className='profileShowInfo'>
                    <MailOutline className='profileShowIcon' />
                    <span className='profileShowInfoTitle'>{user.email}</span>
                    </div>
                    <div className='profileShowInfo'>
                    <LocationSearching className='profileShowIcon' />
                    <span className='profileShowInfoTitle'>{user.address} TP. Hồ Chí Minh</span>
                    </div>
                </div>
                </div>
                <div className='profileUpdate'>
                <span className='profileUpdateTitle'>Thay đổi thông tin cá nhân</span>
                <form className='profileUpdateForm'>
                    <div className='profileUpdateLeft'>
                    <div className='profileUpdateItem'>
                        <label >Họ và tên</label>
                        <input type='text' placeholder='nhập họ và tên' className='profileUpdateInput' />
                    </div>
                    <div className='profileUpdateItem'>
                        <label >Năm sinh</label>
                        <input type='text' placeholder='dd/mm/yy' className='profileUpdateInput' />
                    </div>
                    <div className='profileUpdateItem'>
                        <label >Email</label>
                        <input type='text' placeholder='abcd@gmail.com' className='profileUpdateInput' />
                    </div>
                    <div className='profileUpdateItem'>
                        <label >Số điện thoại</label>
                        <input type='text' placeholder='+84 12345678' className='profileUpdateInput' />
                    </div>
                    <div className='profileUpdateItem'>
                        <label >Địa chỉ</label>
                        <input type='text' placeholder='Chợ Mới | An Giang' className='profileUpdateInput' />
                    </div>
                    </div>
                    <div className='profileUpdateRight'>
                    <div className='profileUpdateUpload'>

                    </div>
                    <div className='profileUpdateItem'>
                        <label >Mật khẩu</label>
                        <input type='password' placeholder='nhập mật khẩu cũ' className='profileUpdateInput' />
                    </div>
                    <div className='profileUpdateItem'>
                        <label >Mật khẩu mới</label>
                        <input type='password' placeholder='Nhập mật khẩu mới' className='profileUpdateInput' />
                    </div>
                    <button className='profileUpadateButton'>Thay đổi </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Infomation
