import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import User from '../API/User';
import { addSession, deleteSession } from "../Redux/Action/ActionSession";
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const dispatch = useDispatch();

  //Sau khi F5 nó sẽ kiểm tra nếu phiên làm việc của Session vẫn còn thì nó sẽ tiếp tục
  // đưa dữ liệu vào Redux
  if (sessionStorage.getItem("id_user")) {
    const action = addSession(sessionStorage.getItem("id_user"));
    dispatch(action);
  }

  //Get IdUser từ redux khi user đã đăng nhập
  var id_user = useSelector((state) => state.Session.idUser);

  const [active_user, set_active_user] = useState(true);

  const [user, set_user] = useState({});


  // Hàm này dùng để hiện thị
  useEffect(() => {
    if (!id_user) {
      // user chưa đăng nhâp

      set_active_user(false);
    } else {
      // user đã đăng nhập

      const fetchData = async () => {
        const response = await User.Get_User(sessionStorage.getItem("id_user"));
        set_user(response);
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
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img className="img-logo" src="https://htweb.vn/wp-content/uploads/2019/12/Travel-nen-xanh.jpg"></img>ERROR
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fa-solid fa-xmark' : 'fas fa-bars'} />

          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Trang chủ
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tours/624c56d912f46cfd65afad76' className='nav-links' onClick={closeMobileMenu}>
                Tour du lịch
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Liên Hệ
              </Link>
            </li>
            {
              active_user ? (
                <h1></h1>
              ) : (
                <li className='nav-item'>
                  <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                    Đăng ký
                  </Link>
                </li>
              )
            }


            <li className='nav-item'>
              {active_user ? (
                <p className='nav-links width_setting' >{user.name}</p>
              ) : (
                <Link to="/login" className='nav-links width_setting'>Đăng Nhập</Link>
              )}

              {active_user && (
                <ul className="ul_setting">
                  <li className="li_setting"><Link to={`/infomation/${sessionStorage.getItem("id_user")}`}>Thông tin cá nhân</Link></li>
                  <li className="li_setting"><Link to="/history">Lịch sử đặt tour</Link></li>
                  <li className="li_setting"><Link to="/" onClick={handler_logout}>Đăng xuất</Link></li>
                </ul>
              )
              }
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
