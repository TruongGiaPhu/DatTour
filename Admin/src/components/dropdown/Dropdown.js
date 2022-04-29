import React, { useState, useEffect } from 'react'
import './Dropdown.css'
import { ExitToApp, AccountBox } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addSession, deleteSession } from "../Redux/Action/ActionSession";
import staff from '../API/Staff';


export default function Dropdown() {
    const dispatch = useDispatch();

    //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
    // đưa dữ liệu vào Redux
    if (sessionStorage.getItem("id_user")) {
        const action = addSession(sessionStorage.getItem("id_user"));
        dispatch(action);
    }

    // console.log(sessionStorage.getItem("id_user"));

    //Get IdUser từ redux khi user đã đăng nhập
    var id_user = useSelector((state) => state.Session.idUser);

    // console.log(`id_user: ${id_user}`);

    const [active_user, set_active_user] = useState(true);

    const [user, set_user] = useState({});

    // console.log(user);
    // Hàm này dùng để hiện thị
    useEffect(() => {
        if (!id_user) {
            // user chưa đăng nhâp

            set_active_user(false);
        } else {
            // user đã đăng nhập

            const fetchData = async () => {
                const response = await staff.Get_NhanVien(sessionStorage.getItem("id_user"));
                set_user(response);
                console.log(response);
            };

            fetchData();

            set_active_user(true);
        }
    }, [id_user]);

    // Hàm này dùng để xử lý phần log out
    const handler_logout = () => {
        const action = deleteSession("");
        dispatch(action);

        sessionStorage.clear();
    };
    return (
        <div className="dropdown" >
            <div className="menu">
                <ul className='dropdownListItem'>
                    <Link to={`/Profile/${id_user}`} className='link'>
                        <li className='dropdownItem'>
                            <AccountBox className='dropdownIcon' />Hồ sơ
                        </li>
                    </Link>
                    <Link to='/' className='link' onClick={handler_logout}>
                        <li className='dropdownItem' >
                            <ExitToApp className='dropdownIcon' />Đăng xuất
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    )
}
