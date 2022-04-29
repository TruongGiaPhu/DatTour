import './UserList.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from '../../dummyData';
import User from '../../components/API/User';

export default function UserList() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };



  useEffect(() => {
    const fetchData = async () => {
      const response = await User.Get_All_khachHang()
      setData(response)
    }
    fetchData()
  }, [])


  // console.log(data);
  const rowData = data?.map(user => {
    return {
      name: user?.name,
      id: user?._id,
      phone: user?.phone,
      email: user?.email,
      gender: user?.gender,
      address: user?.address,
    };
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name', headerName: 'Họ tên', width: 250,
    },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'phone', headerName: 'Số điện thoại', width: 130 },
    {
      field: 'address',
      headerName: 'Địa chỉ',
      width: 120,
    },
    {
      field: 'gender',
      headerName: 'Giới tính',
      width: 140,
    },
    {
      field: "action",
      headerName: "",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={params.row.id}>
              <button className="userListEdit">Xem</button>
            </Link>
            {/* <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            /> */}
          </>
        );
      },
    },

  ];


  return (
    <div className='userList'>
      <div className='userListTitleContainer'>
        <h2 className='userTitle'>Tài khoản người dùng</h2>
      </div>
      <DataGrid className='datagrid'
        rows={rowData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}
