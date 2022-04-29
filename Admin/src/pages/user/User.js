import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import User_ from '../../components/API/User'


import './User.css'


export default function User() {


    const [data, setData] = useState([]);





    useEffect(() => {
        const url = window.location.href
        const valueUrl = url.split('/')
        console.log(valueUrl);
        const fetchData = async () => {
            const response = await User_.Get_KhachHang(valueUrl[4])
            setData(response)
        }
        fetchData()
    }, [])


    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Tài khoản người dùng</h1>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowImg'
                            alt=''
                            src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg'
                        />
                        <div className='userShowTopTitle'>
                            <span className='userShowUserName'> {data.name}</span>
                            {/* <span className='userShowUserTitle'> Software Engineer</span> */}
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Thông tin tài khoản</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>{data.username}</span>
                        </div>
                        {/* <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>7.8.2000</span>
                        </div> */}

                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>{data.phone}</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>{data.email}</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>{data.address}</span>
                        </div>
                    </div>
                </div>
                <div className='userListBooked'>
                    <table className='userListTableBooked'>
                        <thead >
                            <tr>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Tour
                                </th>
                                <th>
                                    Ngày
                                </th>
                                <th>
                                    số người
                                </th>
                                <th>
                                    Giá
                                </th>
                                <th>
                                    Trạng thái
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    7 núi
                                </td>
                                <td>
                                    20/1/2022
                                </td>
                                <td>
                                    8
                                </td>
                                <td>
                                    1.200.000đ
                                </td>
                                <td>
                                    Hoàng thành
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
