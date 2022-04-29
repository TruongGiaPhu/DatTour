import React, { useState, useEffect } from 'react'
import './Topbar.css'
import { Settings } from '@material-ui/icons'
import Dropdown from '../dropdown/Dropdown'
import { Link } from 'react-router-dom';
import { ExitToApp, AccountBox } from '@material-ui/icons';
import { useDispatch, useSelector } from "react-redux";
import { addSession, deleteSession } from "../Redux/Action/ActionSession";
import staff from '../API/Staff';




export default function Topbar() {
    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => setDropdown(true);

    const onMouseLeave = () => setDropdown(false);

    const dispatch = useDispatch();

    //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
    // đưa dữ liệu vào Redux
    if (sessionStorage.getItem("id_user")) {
        const action = addSession(sessionStorage.getItem("id_user"));
        dispatch(action);
    }

    //Get IdUser từ redux khi user đã đăng nhập
    var id_user = useSelector((state) => state.Session.idUser);

    // console.log(`id_user: ${id_user}`);

    const [user, set_user] = useState({});

    // Hàm này dùng để hiện thị
    useEffect(() => {


        const fetchData = async () => {
            const response = await staff.Get_NhanVien(sessionStorage.getItem("id_user"));
            set_user(response);
            console.log(response);
        };

        fetchData();

    }, []);



    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className='topLeft'>
                    <Link to='/home' className='link'>  <span className='logo'>ERROR</span></Link>
                </div>
                <div className='topRight'>
                    <div className='topbarIcons'>
                        {/* <div className='topbarIconContainer'>
                            <NotificationsNone />
                            <span className='topIconBadge'>2</span>
                        </div>
                        <div className='topbarIconContainer'>
                            <Language />
                            <span className='topIconBadge'>2</span>
                        </div> */}
                        <div className='topbarIconContainer'>
                            <Settings />
                        </div>
                        <div onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}>
                            <img src={user.img} alt='' className='topAvatar' />
                            {dropdown && <Dropdown />}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}