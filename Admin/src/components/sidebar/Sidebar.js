import React, { useState } from 'react'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import PublicIcon from '@mui/icons-material/Public';
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Person, OpenInBrowser } from '@material-ui/icons'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

export default function () {

    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'> Dashboard</h3>
                    <ul className='sidebarList'>
                        <NavLink to='/home' className='link navlink ' activeclassname="active" >
                            <li className='sidebarListItem'>
                                <LineStyle className='sidebarIcon' />
                                Trang chủ
                            </li>
                        </NavLink>
                        {/* <NavLink to='/home/time' className='link sidebarListItem' activeClassName="active" exact={true} onClick={Analytics}>
                            <li >
                                <Timeline className='sidebarIcon' />
                                Biểu đồ
                            </li>
                        </NavLink>
                        <NavLink to='/home/trending' className='link sidebarListItem' activeClassName="active" exact={true} onClick={Slales}>
                            <li>
                                <TrendingUp className='sidebarIcon' />
                                Doanh số
                            </li>
                        </NavLink> */}
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'> Quick menu</h3>
                    <ul className='sidebarList'>
                        <NavLink to='/staffs' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <Person className='sidebarIcon' />
                                Nhân viên
                            </li>
                        </NavLink>
                        <NavLink to='/products' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <Storefront className='sidebarIcon' />
                                Sản phẩm
                            </li>
                        </NavLink>
                        <NavLink to='/users' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <PermIdentity className='sidebarIcon' />
                                Người dùng
                            </li>
                        </NavLink>
                        <NavLink to='/bills' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <OpenInBrowser className='sidebarIcon' />
                                Hóa đơn
                            </li>
                        </NavLink>
                        <NavLink to='/ticket' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <ConfirmationNumberIcon className='sidebarIcon' />
                                Vé
                            </li>
                        </NavLink>
                        <NavLink to='/earth' className='link navlink' activeclassname="active">
                            <li className='sidebarListItem'>
                                <PublicIcon className='sidebarIcon' />
                                Quốc gia
                            </li>
                        </NavLink>
                    </ul>
                </div>
                {/* <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Nottifications</h3>
                    <ul className='sidebarList'>
                        <Link to='/chualam' className='link'>
                            <li className={toggleState === 8 ? "sidebarListItem active" : "sidebarListItem"} onClick={() => setToggleState(8)}>
                                <MailOutline className='sidebarIcon' />
                                Mail
                            </li>
                        </Link>
                        <Link to='/chualam' className='link'>
                            <li className={toggleState === 9 ? "sidebarListItem active" : "sidebarListItem"} onClick={() => setToggleState(9)}>
                                <DynamicFeed className='sidebarIcon' />
                                Feedback
                            </li>
                        </Link>
                        <Link to='/chualam' className='link'>
                            <li className={toggleState === 10 ? "sidebarListItem active" : "sidebarListItem"} onClick={() => setToggleState(10)}>
                                <ChatBubbleOutline className='sidebarIcon' />
                                Messages
                            </li>
                        </Link>
                    </ul>
                </div> */}
                {/* <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'> Staff</h3>
                    <ul className='sidebarList'>
                        <Link to='/chualam' className='link'>
                            <li className={toggleState === 11 ? "sidebarListItem active" : "sidebarListItem"} onClick={() => setToggleState(11)}>
                                <WorkOutline className='sidebarIcon' />
                                Manage
                            </li>
                        </Link>
                        <Link to='/chualam' className='link'>
                            <li className={toggleState === 12 ? "sidebarListItem active" : "sidebarListItem"} onClick={() => setToggleState(12)}>
                                <Timeline className='sidebarIcon' />
                                Analytics
                            </li>
                        </Link>
                   
                    </ul>
                </div> */}
            </div>
        </div>
    )
}
