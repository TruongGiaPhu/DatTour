import React, { useState, useEffect } from 'react'
import './Profile.css'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import staff from '../../components/API/Staff';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Profile() {


  const [data, setData] = useState([]);

  const [password, setPassword] = useState('');
  const [newPasswrod, setNewPasswrod] = useState('');
  const [enterThePassword, setEnterThePassword] = useState('');

  const [click, setClick] = useState(false);


  useEffect(() => {
    const url = window.location.href
    const valueUrl = url.split('/')
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

    // if(password === enterThePassword){

    // }
    // else{}
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

    // if (password === '' || newPasswrod === '' || enterThePassword === '') {

    // } else {
    //   const fetchData = async () => {
    //     const data = {
    //       oldpassword: password,
    //       passwrod: newPasswrod,
    //     }

    //     const response = await staff.Put_Change_Password(valueUrl[4], data)
    //     console.log(response)
    //     if (response === 'Wrong password') {
    //       toast('🚀 Mật khẩu cũ không đúng');
    //     }
    //     if (response === 'Connect can be empty') {
    //       toast('🚀 Thay đổi thất bại');
    //     } else {
    //       toast('🦄 Thay đổi thành công');
    //     }

    //   }
    //   fetchData()
    // }



  }







  return (
    <div className='profile'>
      <div className='profileTitleContainer'>
        <h1 className='profileTitle'>Hồ sơ cá nhân</h1>
      </div>
      <div className='profileContainer'>
        <div className='profileShow'>
          <div className='profileShowTop'>
            <img className='profileShowImg'
              alt=''
              src={data.img}
            />
            <div className='profileShowTopTitle'>
              <span className='profileShowUserName'>{data.name}</span>
              <span className='profileShowPosition'></span>
            </div>
          </div>
          <div className='profileShowBottom'>
            <span className='profileShowTitle'>HỒ SƠ</span>
            <div className='profileShowInfo'>
              <PermIdentity className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.username}</span>
            </div>
            <div className='profileShowInfo'>
              <CreditCardIcon className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.identity}</span>
            </div>
            <div className='profileShowInfo'>
              <CalendarToday className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.date}</span>
            </div>
            <span className='profileShowTitle'>PHƯƠNG THỨC LIÊN HỆ</span>
            <div className='profileShowInfo'>
              <PhoneAndroid className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.phone}</span>
            </div>
            <div className='profileShowInfo'>
              <MailOutline className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.email}</span>
            </div>
            <div className='profileShowInfo'>
              <LocationSearching className='profileShowIcon' />
              <span className='profileShowInfoTitle'>{data.address}</span>
            </div>
          </div>
        </div>
        <div className='profileUpdate'>
          <span className='profileUpdateTitle'>Thay đổi thông tin cá nhân</span>
          <form className='profileUpdateForm'>
            <div className='profileUpdateLeft'>

              <div className='profileUpdateItem'>
                <label >Họ và tên</label>
                <input type='text' value={data.name} name='name' className='profileUpdateInput' onChange={handlOnChange} />
              </div>
              <div className='profileUpdateItem'>
                <label >CMND|CCCD</label>
                <input type='text' value={data.identity} name='identity' maxLength="12" className='profileUpdateInput' onChange={handlOnChange} />
              </div>
              <div className='profileUpdateItem'>
                <label >Năm sinh</label>
                <input type='date' value={data.date} name='date' className='profileUpdateInput' onChange={handlOnChange} data-date-format="dd-mm-yyyy" placeholder="dd-mm-yyyy" />
              </div>
              <div className='profileUpdateItem'>
                <label >Số điện thoại</label>
                <input type='text' value={data.phone} name='phone' maxLength="10" className='profileUpdateInput' onChange={handlOnChange} />
              </div>
              <div className='profileUpdateItem'>
                <label >Email</label>
                <input type='text' value={data.email} name='email' className='profileUpdateInput' onChange={handlOnChange} />
              </div>
              <div className='profileUpdateItem'>
                <label >Địa chỉ</label>
                <input type='text' value={data.address} name='address' className='profileUpdateInput' onChange={handlOnChange} />
              </div>

            </div>
            <div className='profileUpdateRight'>
              <div className='profileUpdateItem'>
                <img className='profileFromUpdateImg' alt='' src={data.img} />
              </div>
              <div className='profileUpdateItem'>
                <label >Nhập URL ảnh</label>
                <input type='url' className='profileUpdateInput' value={data.img} name='img' onChange={handlOnChange} />
              </div>
              <div className='profileUpdateItem'>
                <label >Mật khẩu</label>
                <input type='text' placeholder='nhập mật khẩu cũ' className='profileUpdateInput' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className='profileUpdateItem'>
                <label >Mật khẩu mới</label>
                <input type='text' placeholder='Nhập mật khẩu mới' className='profileUpdateInput' value={newPasswrod} onChange={(e) => setNewPasswrod(e.target.value)} />
              </div>
              <div className='profileUpdateItem'>
                <label >Nhập lại mật khẩu mới</label>
                <input type='text' placeholder='Nhập mật khẩu mới' className='profileUpdateInput' value={enterThePassword} onChange={(e) => setEnterThePassword(e.target.value)} />
              </div>
              <input className='profileUpadateButton' type='submit' value='Cập nhật' onClick={handleFormSubmit} />

            </div>
          </form>
          <ToastContainer autoClose={2000} theme="dark" />
        </div>
      </div>
    </div>
  )
}
