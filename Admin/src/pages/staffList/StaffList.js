import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import './StaffList.css'
import Staff from '../../components/API/Staff'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function StaffList() {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    const response = await Staff.Delete_NhanVien(id)
    setData(data.filter((item) => item._id !== id))
    if (response === "Successfully") {
      toast('🦄 Xóa thành công');
    } else {
      toast('🚀 Xóa thất bại');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Staff.Get_All_NhanVien()
      setData(response)
    }
    fetchData()
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:5000/admin/nhan_vien/api/get")
  //     .then((data) => data.json())
  //     .then((data) => setData(data))

  // }, [])
  const rowData = data?.map(staff => {
    return {
      name: staff?.name,
      email: staff?.email,
      phone: staff?.phone,
      gender: staff?.gender,
      id: staff?._id,
      address: staff?.address,
      img: staff?.img
    };
  });



  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'name', headerName: 'Tên nhân viên', width: 200, renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="staffListImg" src={params.row.img} alt="" />
            <span> {params.row.name}</span>
          </div>
        );
      },
    },
    {
      field: 'gender',
      headerName: 'Giới tính',
      width: 120,
    },
    {
      field: 'phone',
      headerName: 'số điện thoại',
      width: 160,
    },
    { field: "email", headerName: 'Email', width: 200 },
    { field: "address", headerName: 'Địa chỉ', width: 200 },
    {
      field: "action",
      headerName: "Điều chỉnh",
      width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={params.row.id}>
              <button className="staffListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="staffListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },

  ];

  return (
    <div className='staffList'>
      <div className='staffTitleContainer' style={{ marginBottom: "5px" }}>
        <h2 className='staffTitle'>Bảng thông tin nhân viên</h2>
        <Link to='newStaff'>
          <button className='staffAddButton'>Thêm</button> </Link>
      </div>
      <DataGrid className='datagrid'
        rows={rowData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
      <ToastContainer autoClose={2000} />
    </div>
  )
}
