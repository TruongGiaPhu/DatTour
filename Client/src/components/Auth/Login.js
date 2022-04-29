import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSession } from '../Redux/Action/ActionSession';
import User from '../API/User';
import s from "./Login.module.scss";

function Login() {
  let usenavigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const [error_username, set_error_username] = useState(false)
  const [error_password, set_error_password] = useState(false)

  const [navigate, set_Navigate] = useState(false)


  const handler_Login = (e) => {

      e.preventDefault()

      const fetchData = async () => {

          const params = {
              username,
              password
          }

          const response = await User.Post_Login(params)

          if (response === "Failed"){
              set_error_username(true)
              set_Navigate(false)
          }else{
              if (response === "Login Failed"){
                  set_error_username(false)
                  set_error_password(true)
                  set_Navigate(false)
              }else{

                 console.log(response)

                  const action = addSession(response._id)
                  dispatch(action)

                  sessionStorage.setItem('id_user', response._id)

                  set_Navigate(true)
              }
          }

      }

      fetchData()
  }

  useEffect(() => {
    if (navigate){
        return usenavigate("/");
      }
    }, [navigate]);
 
  return (
    <div>
      <div className={s.backgroundImage}>
        <div className={s.center}>
          <Link to='/'>
            <img
              className={s.imageLogo}
              src="https://htweb.vn/wp-content/uploads/2019/12/Travel-nen-xanh.jpg"
              alt=""
            />
          </Link>
          <form method="post">
            <div className={s.txt_field}>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                required
              />
              {
                  error_username && <span style={{ color: 'red' }}>Sai Tài Khoản</span>
              }
              <br />
              <span></span>
              <label>Username</label>
            </div>
            <div className={s.txt_field}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
              {
                  error_password && <span style={{ color: 'red' }}>Sai Mật Khẩu</span>
              }
              <span></span>
              <label>Password</label>
            </div>
            <input type="submit" value="Đăng nhập" onClick={handler_Login} />
            <div className={s.signup_link}>
              Bạn chưa có tài khoản? <Link to='/register'>Đăng ký ngay</Link>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;
