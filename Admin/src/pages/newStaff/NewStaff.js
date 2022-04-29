import React, { useEffect, useState } from 'react'
import './NewStaff.css'
import Staff from '../../components/API/Staff'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function NewUser() {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [enterThePassword, setEnterThePassword] = useState('');
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [identity, setIdentity] = useState('')
    const [date, setDate] = useState('')
    const [gender, setGender] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name === '' || img === '' || username === '' || password === '' || enterThePassword === '' || email === '' || phone === '' || address === '' || identity === '' || date === '') {
            toast('🚀 Vui lòng điền đầy đủ thông tin');
        } else if (!email.match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)) {
            toast('🚀 Vui lòng nhập đúng định dạng email');
        } else if (!phone.match(/^[0-9]{10,11}$/)) {
            toast('🚀 Vui lòng nhập đúng định dạng số điện thoại');
        } else if (password.length < 6) {
            toast('🚀 Mật khẩu phải có ít nhất 6 ký tự');
        } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,32}/)) {
            toast('🚀 Mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 ký tự số và 1 ký tự đặc biệt')
        } else if (password !== enterThePassword) {
            toast('🚀 Mật khẩu không trùng khớp');
        } else {
            const fetchData = async () => {
                const data = {
                    name,
                    img,
                    username,
                    password,
                    email,
                    phone,
                    address,
                    identity,
                    date,
                    gender,
                }

                const response = await Staff.Post_NhanVien(data)
                console.log(response)
                if (response === 'Tài khoản hoặc email đã tồn tại') {
                    toast.error('Tài khoản hoặc email đã tồn tại')
                } else {
                    toast.success('Thêm thành công')
                    setEmail('')
                    setName('')
                    setPhone('')
                    setAddress('')
                    setUsername('')
                    setPassword('')
                    setIdentity('')
                    setEnterThePassword('')
                    setDate('')
                    setGender('')
                    setImg('')
                }
                // setEmail(null)
                // setName(null)
                // setPhone(null)
                // setAddress(null)
                // setUsername(null)
                // setPassword(null)
                // setIdentity(null)
                // setEnterThePassword(null)
                // setDate(null)
                // setGender(null)
                // setImg(null)

            }
            fetchData()
        }





    }

    const handleChange = (e) => {
        setGender(e.target.value)
    }


    return (
        <div className='newUser'>
            <h1 className='newUserTitle'>Thêm nhân viên mới</h1>
            <form className='newUserForm'>
                <div className='newUserFormLeft'>
                    <div className='newUserItem'>
                        <img className='newUserAvatar' alt='' src={img} />
                    </div>
                    <div className='newUserItem'>
                        <label>Nhập URL ảnh</label>
                        <input className='newUserAvatarInput' placeholder='Nhập linh URL ảnh' value={img} type='url'
                            onChange={(e) => setImg(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Họ và tên</label>
                        <input type='text' placeholder='Nhập họ và tên' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Email</label>
                        <input type='text' placeholder='Nhập email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Số điện thoại</label>
                        <input type='text' placeholder='Nhập số điện thoại' maxLength="10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                </div>
                <div className='newUserFormRight'>
                    <div className='newUserItem'>
                        <label>Tài khoản</label>
                        <input type='text' placeholder='Nhập tài khoản' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Mật khẩu</label>
                        <input type='password' placeholder='Nhập mật khẩu' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Nhập lại mật khẩu</label>
                        <input type='password' placeholder='Nhập lại mật khẩu' value={enterThePassword} onChange={(e) => setEnterThePassword(e.target.value)} />
                    </div>

                    <div className='newUserItem'>
                        <label>Địa chỉ</label>
                        <input type='text' placeholder='Nhập địa chỉ' value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>Giới Tính</label>
                        <div className='newUserGende'   >
                            <input type='radio' name='gender' id='male' value='Nam' onChange={handleChange} />
                            <label htmlFor='male'>Nam</label>
                            <input type='radio' name='gender' id='female' value='Nữ' onChange={handleChange} />
                            <label htmlFor='female'>Nữ</label>
                            <input type='radio' name='gender' id='other' value='Khác' onChange={handleChange} />
                            <label htmlFor='other'>Khác</label>
                        </div>
                    </div>
                    <div className='newUserItem'>
                        <label>Ngày sinh</label>
                        <input type='text' placeholder='vui lòng nhập đúng định dạng dd/mm/yyyy' value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className='newUserItem'>
                        <label>CMND/CCCD</label>
                        <input type='text' placeholder='nhập CMND|CCCD' maxLength="12" value={identity} onChange={(e) => setIdentity(e.target.value)} />
                    </div>
                    <input className='newUserButton' type='submit' value='Thêm' onClick={handleSubmit} />
                </div>
            </form>
            <ToastContainer autoClose={2000} />
        </div>
    )
}
