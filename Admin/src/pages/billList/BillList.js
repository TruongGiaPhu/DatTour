import './BillList.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { billRows } from '../../dummyData';
// import SearchBar from 'material-ui-search-bar'

export default function Bill() {
  const [data, setData] = useState(billRows);



  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username', headerName: 'Họ và tên', width: 200
    },

    {
      field: 'tourname',
      headerName: 'Tour',
      width: 160,
    },

    {
      field: 'startday',
      headerName: 'Ngày bắt đầu',
      width: 130,
    },
    {
      field: 'enddate',
      headerName: 'Ngày kết thúc',
      width: 130,
    },

    {
      field: 'numberofpeople',
      headerName: 'Số người',
      width: 90,
    },

    {
      field: 'price',
      headerName: 'Giá',
      width: 130,
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      width: 120,
    },
    {
      field: "action",
      headerName: "",
      width: 60,
      renderCell: (params) => {
        return (
          <>
            <Link to={"bill" + params.row.id}>
              <button className="billListEdit">Xem</button>
            </Link>
          </>
        );
      },
    },


  ];
  return (
    <div className='billList'>
      {/* <SearchBar 
    
      /> */}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        checkboxSelection


      />
    </div>
  )
}

