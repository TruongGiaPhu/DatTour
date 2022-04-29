import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                    <h2>Liên hệ</h2>
                        <a>Địa chỉ: HUTECH 18DTHD5</a>
                        <a href='tel:0339268737'>SĐT: 0339268737</a>
                        <a href='mailto:buikhactien0203@gmail.com'>error@gmail.com</a>
                        <a>Giờ làm việc:</a>
                        <a>8:00 - 18:00</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2> TRONG NƯỚC</h2>
                        <a>Hạ Long</a>
                        <a>Đà Lạt</a>
                        <a>An Giang</a>
                        <a>Quảng Ninh</a>
                        <a>Hutech</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> NGOÀI NƯỚC</h2>
                        <a>Mỹ</a>
                        <a>Pháp</a>
                        <a>Thái Lan</a>
                        <a>Nhật Bản</a>
                    </div>
                    <div className='footer-link-items'>
                        <h2> THÔNG TIN</h2>
                        <a>Bùi Khắc Tiến</a>
                        <a>Hồ Quốc Tuấn</a>
                        <a>Trương Gia Phú</a>
                        <a>Võ Đức Trí</a>
                        <a>Nguyễn Công Kiên</a>
                        <a>Đặng Diệp Dinh Thêm</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            <img className="img-logo" src="https://htweb.vn/wp-content/uploads/2019/12/Travel-nen-xanh.jpg"></img>ERROR
                        </Link>
                    </div>
                    <small className='website-rights'>Made By Nhóm ERROR - 4/2022</small>
                    <div className='social-icons'>
                        <a href='https://www.facebook.com/phu.truong.9615566' className='social-icon-link facebook' target="_blank"
                            aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </a>

                        <a href='https://discord.gg/xEcEgp78zU' className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                        <a className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                        <a className='social-icon-link discord' target="_blank"
                            aria-label='Discord'>
                            <i className='fab fa-discord'></i>
                        </a>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer