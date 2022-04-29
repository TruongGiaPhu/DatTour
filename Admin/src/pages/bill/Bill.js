import { LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Autorenew } from '@material-ui/icons'
import React from 'react'
import './Bill.css'




export default function Bill() {


    const handleFormSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className='bill'>
            <div className='billTitleContainer'>
                <h1 className='billTitle'>Hóa đơn</h1>
                {/* <Link to='/newbill'>
                    <button className='billAddButton'>Create</button> </Link> */}
            </div>
            <div className='billContainer'>
                <div className='billShowLeft'>
                    <div className='billShowTop'>
                        <img className='billShowImg'
                            alt=''
                            src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg'
                        />
                        <div className='billShowTopTitle'>
                            <span className='billShowUserName'> phú</span>
                        </div>
                    </div>
                    <div className='billShowBottom'>
                        <span className='billShowTitle'>Thông tin tài khoản</span>
                        <div className='billShowInfo'>
                            <PermIdentity className='billShowIcon' />
                            <span className='billShowInfoTitle'>phutruong456321</span>
                        </div>

                        <div className='billShowInfo'>
                            <PhoneAndroid className='billShowIcon' />
                            <span className='billShowInfoTitle'>0987976998</span>
                        </div>
                        <div className='billShowInfo'>
                            <MailOutline className='billShowIcon' />
                            <span className='billShowInfoTitle'>phutruong456321@gmail.com</span>
                        </div>
                        <div className='billShowInfo'>
                            <LocationSearching className='billShowIcon' />
                            <span className='billShowInfoTitle'>Chợ Mới | An Giang</span>
                        </div>
                        <span className='billShowTitle'>Trạng thái</span>
                        <div className='billShowInfo'>
                            <Autorenew className='billShowIcon' />
                            <span className='billShowInfoTitle'>Chờ đuyệt</span>
                        </div>
                    </div>

                </div>
                <div className='billShowRight'>
                    <div className='billShowBottom'>
                        {/* <span className='billUpdateTitle'>Chỉnh sửa</span> */}
                        <form className='billUpdateForm'>
                            <div className='billUpdateLeft'>
                                <div className='billUpdateItem'>
                                    <label >Tên tour</label>
                                    <input type='text' placeholder='7 núi' className='billUpdateInput' />
                                </div>
                                <div className='billUpdateItem'>
                                    <label >Ngày</label>
                                    <input type='date' placeholder='20/1/2022' className='billUpdateInput' />
                                </div>
                                <div className='billUpdateItem'>
                                    <label >Giá</label>
                                    <input type='text' placeholder='120.000đ' className='billUpdateInput' />
                                </div>
                                <div className='billUpdateItem'>
                                    <label >Ghi chú</label>
                                    <textarea className='billUpdateInput'></textarea>
                                </div>

                            </div>

                            <div className='billUpdateRight'>

                                <div className='billUpdateItem'>
                                    <label >Tổng số người</label>
                                    <input type='number' placeholder='8' className='billUpdateInput' />
                                </div>
                                <div className='billUpdateItem'>
                                    <label >Người lớn</label>
                                    <input type='number' placeholder='5' className='billUpdateInput' />
                                </div>
                                <div className='billUpdateItem'>
                                    <label >Trẻ em</label>
                                    <input type='number' placeholder='3' className='billUpdateInput' />
                                </div>
                                {/* <div className='billUpdateItem'>
                                    <label >Em bé</label>
                                    <input type='number' placeholder='0' className='billUpdateInput' />
                                </div> */}
                                <button className='billUpadateButton' onClick={handleFormSubmit}>Duyệt </button>
                                <button className='billUpadateButtonCancel' onClick={handleFormSubmit}>Hủy </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
