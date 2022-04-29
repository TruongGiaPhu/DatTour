import React, { useState, useEffect } from 'react'
import User from '../API/User';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './History.css'

function History() {

  const [historyTours, setHistoryTours] = useState([])

  // Lấy ra tất cả lịch sử đặt tour thuộc id khách hàng
  useEffect(() => {
    const fetchData = async () => {
      const khachhang_id = sessionStorage.getItem("id_user")
      const data = {
        khachhang_id
      }
      const response = await User.Post_HistoryTour(data)
      setHistoryTours(response)
    }
    fetchData()
  }, [])

  const rowData = historyTours?.map(value => {
    return {
      id: value?.[3],
      tour_id: value?.[11],
      image: value?.[8],
      name: value?.[4],
      itinerary: value?.[5],
      price: value?.[6],
      price_kid: value?.[7],
      SLNL: value?.[0],
      SLTE: value?.[1],
      dateCreate: value?.[2]

    }
  });

  console.log(rowData)

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      renderCell: (params) => {
        return (
          <>
            <p className="id_history">{params.row.id}</p>
          </>
        );
      },
    },
    {
      field: 'tour_id',
      headerName: 'Tour_id',
      width: 60,
      renderCell: (params) => {
        return (
          <>
            <p className="Tour_id_history">{params.row.tour_id}</p>
          </>
        );
      },
    },
    {
      field: 'image',
      headerName: 'Hình Ảnh',
      width: 70,
      renderCell: (params) => {
        return (
          <>
            <img src={params.row.image} alt="" className="img_history" />
          </>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Tên Tour',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <p className="name_history">{params.row.name}</p>
          </>
        );
      },
    },
    {
      field: 'itinerary',
      headerName: 'Ngày Bắt Đầu - Kết Thúc',
      width: 190,
      renderCell: (params) => {
        return (
          <>
            <p className="itinerary_history">{params.row.itinerary}</p>
          </>
        );
      },
    },
    {
      field: 'price',
      headerName: 'Giá Người Lớn',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <p className="price_history">{params.row.price}</p>
          </>
        );
      },
    },
    {
      field: 'price_kid',
      headerName: 'Giá Trẻ Em',
      width: 90,
      renderCell: (params) => {
        return (
          <>
            <p className="price_kid_history">{params.row.price_kid}</p>
          </>
        );
      },
    },
    {
      field: 'SLNL',
      headerName: 'Số Người Lớn',
      width: 110,
    },
    {
      field: 'SLTE',
      headerName: 'Số Trẻ Em',
      width: 80,
    },
    {
      field: 'dateCreate',
      headerName: 'Ngày Đặt',
      width: 115,
      renderCell: (params) => {
        return (
          <>
            <p className="dateCreate_history">{params.row.dateCreate}</p>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Điều chỉnh",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id, params.row.tour_id)}
            />
          </>
        );
      },
    },
  ];

  const handleDelete = async (id, tour_id) => {

    const data = {
      tour_id,
      id,

    }

    console.log(data)
    const response = await User.Delete_HistoryTour(data)
    if (response === 'Delete success') {
      toast.success('🦄 Hủy Tour thành công! Chúng tôi sẽ không hoàn tiền')
    } else {
      toast.success('🚀 Hủy Tour Thất Bại!')
    }


    // const data = {
    //   ct_id: id,
    //   tour_id: tour_id
    // }
    // console.log(data)

    // console.log(`data nè: ${data}`);

    // const response = await User.Delete_HistoryTour(data)

    // if (response === 'Delete success') {
    //   toast.success('🦄 Hủy Tour thành công! Chúng tôi sẽ không hoàn tiền')
    // } else {
    //   toast.success('🚀 Hủy Tour Thất Bại!')
    // }



  }

  return (
    <div className="grids wides">
      <div className="title_history">
        <h1>Lịch Sử Đặt Tour</h1>
      </div>
      <div className="container_History">
        <DataGrid className='datagrid'
          rows={rowData}
          disableSelectionOnClick
          columns={columns}
          checkboxSelection
          pageSize={5}
        />
      </div>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default History
