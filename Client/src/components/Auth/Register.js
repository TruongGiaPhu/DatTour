import React, { useState } from "react";
import { Link } from "react-router-dom";

import User from '../API/User';
import s from "./Register.module.scss";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function Register() {


  const [username, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [confirm, setConFirm] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')


  const [errorEmail, setEmailError] = useState(false)
  const [errorFullname, setFullnameError] = useState(false)
  const [errorUsername, setUsernameError] = useState(false)
  const [errorPassword, setPasswordError] = useState(false)
  const [errorConfirm, setConfirmError] = useState(false)
  const [errorCheckPass, setCheckPass] = useState(false)

  const handler_signup = (e) => {

      e.preventDefault()

      if (!email){
          setEmailError(true)
          return
      }else{
          setEmailError(false)
      }

      if (!name) {
          setFullnameError(true)
          setUsernameError(false)
          setPasswordError(false)
          setConfirmError(false)
          return
      } else {
          setFullnameError(false)
          setUsernameError(false)
          setPasswordError(false)
          setConfirmError(false)

          if (!username){
              setFullnameError(false)
              setUsernameError(true)
              setPasswordError(false)
              setConfirmError(false)
              return
          }else{
              setFullnameError(false)
              setUsernameError(false)
              setPasswordError(false)
              setConfirmError(false)

              if (!password){
                  setFullnameError(false)
                  setUsernameError(false)
                  setPasswordError(true)
                  setConfirmError(false)
                  return
              }else{
                  setFullnameError(false)
                  setUsernameError(false)
                  setPasswordError(false)
                  setConfirmError(false)

                  if (!confirm){
                      setFullnameError(false)
                      setUsernameError(false)
                      setPasswordError(false)
                      setConfirmError(true)
                      return
                  }else{
                      setFullnameError(false)
                      setUsernameError(false)
                      setPasswordError(false)
                      setConfirmError(false)

                      if (password !== confirm){
                          setFullnameError(false)
                          setUsernameError(false)
                          setPasswordError(false)
                          setConfirmError(false)
                          setCheckPass(true)
                          return
                      }else{
                          setConfirmError(false)
                          setCheckPass(false)
                          
                          const fetchData = async () => {
                              
                              const data = {
                                  name,
                                  email,
                                  username,
                                  password   
                              }

                              const response = await User.Post_Register(data)

                              console.log(response)

                              if (response === 'T??i kho???n ???? t???n t???i'){
                                toast.error('T??i kho???n ???? t???n t???i')
                              }else if(response === 'Email ???? t???n t???i'){
                                toast.error('Email ???? t???n t???i')
                              }else {
                                toast.success('????ng k?? th??nh c??ng')
                                setUserName('')
                                setPassWord('')
                                setName('')
                                setConFirm('')
                              }  
                          }

                          fetchData()

                      }

                  }
                  
              }
          }

      }
  }


  return (
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
              errorUsername && <span style={{ color: 'red' }}>* Username kh??ng ???????c b??? tr???ng!</span>
            }
            <span></span>
            <label>Username</label>
          </div>
          <div className={s.txt_field}>
            <input
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              type="password"
              required
            />
            {
              errorPassword && <span style={{ color: 'red' }}>* Password kh??ng ???????c b??? tr???ng!</span>
            }
            <span></span>
            <label>Password</label>
          </div>
          <div className={s.txt_field}>
            <input
              value={confirm}
              onChange={(e) => setConFirm(e.target.value)}
              type="password"
              required
            />
            {
              errorCheckPass && <span style={{ color: 'red' }}>* X??c nh???n m???t kh???u kh??ng ch??nh x??c</span>
            }
            {
              errorConfirm && <span style={{ color: 'red' }}>* Confirm Password kh??ng ???????c b??? tr???ng!</span>
            }
            <span></span>
            <label>Confirm Password</label>
          </div>
          <div className={s.txt_field}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            {
              errorEmail && <span style={{ color: 'red' }}>* Email kh??ng ???????c b??? tr???ng!</span>
            }            
            <span></span>
            <label>Email</label>
          </div>
          <div className={s.txt_field}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            {
              errorFullname && <span style={{ color: 'red' }}>* T??n kh??ng ???????c b??? tr???ng!</span>
            }
            <span></span>
            <label>Full Name</label>
          </div>
          <div className={s.pass}></div>
          <input type="submit" value="????ng k??" onClick={handler_signup} />
          <div className={s.signup_link}>
            <span>B???n ???? c?? t??i kho???n? <Link to='/login'>????ng nh???p ngay</Link> </span>
          </div>
        </form>
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}


export default Register
