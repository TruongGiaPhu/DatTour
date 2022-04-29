import React, { useState, useEffect } from 'react';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useHist } from 'react-router-dom';
import validateInfo from './validateInfo';
import { TabTitle } from '../generalFuntions/GeneralFuntions';
import Staff from '../API/Staff';
import { addSession } from '../Redux/Action/ActionSession';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    TabTitle('Đăng nhập');

    const [showPassword, setShowPassword] = useState(true);
    const handleShowHidePassword = () => setShowPassword(!showPassword);

    // const [values, setValues] = useState({
    //     username: '',
    //     password: '',
    // });

    const [errors, setErrors] = useState({});

    let usenavigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const [error_username, set_error_username] = useState(false);
    const [error_password, set_error_password] = useState(false);

    const [navigate, set_Navigate] = useState(false);

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setValues({
    //         ...values,
    //         [name]: value
    //     });
    // };

    // const handleFormSubmit = e => {
    //     e.preventDefault();
    //     setErrors(validateInfo(values));
    //     // console.log(values)
    // }

    const handler_Login = (e) => {
        setErrors(validateInfo({ username, password }));
        e.preventDefault();
        const fetchData = async () => {
            const params = {
                username,
                password,
            };

            const response = await Staff.Post_Login(params);

            if (response === 'Failed') {
                set_error_username(true);
                set_Navigate(false);
            } else {
                if (response === 'wrong password') {
                    set_error_username(false);
                    set_error_password(true);
                    set_Navigate(false);
                } else {
                    console.log(response);

                    const action = addSession(response._id);
                    dispatch(action);

                    sessionStorage.setItem('id_user', response._id);
                    set_Navigate(true);
                }
            }
        };
        fetchData();
    };

    useEffect(() => {
        if (navigate) {
            return usenavigate('/home');
        }
    }, [navigate]);

    return (
        <div className="login">
            <img
                src="https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg"
                className="loginImg"
                alt=""
            />

            <div className="loginContent">
                <h1>Login</h1>
                <form method="post">
                    <div className="loginField">
                        <span className="fa fa-user"></span>
                        <input
                            type="text"
                            required
                            placeholder="nhập tài khoản"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    {error_username && (
                        <span style={{ color: 'red' }}>Sai Tài Khoản</span>
                    )}
                    {errors.username && (
                        <p className="error">{errors.username}</p>
                    )}
                    <div className="loginField space">
                        <span className="fa fa-lock"></span>
                        <input
                            type={showPassword ? 'password' : 'text'}
                            className="pass-key"
                            required
                            placeholder="nhập mật khẩu"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span onClick={handleShowHidePassword}>
                            <i
                                className={
                                    showPassword
                                        ? 'far fa-eye'
                                        : 'far fa-eye-slash'
                                }
                            ></i>
                        </span>
                    </div>
                    {error_password && (
                        <span style={{ color: 'red' }}>Sai Mật Khẩu</span>
                    )}
                    {errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                    {/* <div className="loginForgotPass">
                        <Link to='/forgot' className='link linkForgot'>Quen</Link>
                    </div> */}
                    {/* <br /> */}
                    <div className="loginField spaceButton">
                        <input
                            type="submit"
                            value="Đăng nhập"
                            className="loginButton"
                            onClick={handler_Login}
                        />
                    </div>
                </form>
                <ToastContainer autoClose={2000} />
            </div>
        </div>
    );
}
