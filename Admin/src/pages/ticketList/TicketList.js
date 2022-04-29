import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Ticket from '../../components/API/Ticket';
import Product from '../../components/API/Product';
import './TicketList.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function ProductList() {
  const [data, setData] = useState([]);
  const [tour_id, setTour_id] = useState('');
  const [quantity, setQuantity] = useState('');
  const [quantity_kid, setQuantity_kid] = useState('');

  const [dataTour, setDataTour] = useState([]);

  console.log(dataTour);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Ticket.Get_All_Ve()
      setData(response)
      const response1 = await Product.Get_All_Tour()
      setDataTour(response1)
    }
    fetchData()
  }, [])

  const rowData = data?.map(product => {
    return {

      price: product?.price,
      price_kid: product?.price_kid,
      quantity: product?.quantity,
      quantity_kid: product?.quantity_kid,
      id: product?._id,
      tour_id: product?.tour_id,

    };
  });
  console.log(rowData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity === '' || quantity_kid === '') {
      toast('🚀 Vui lòng nhập đầy đủ thông tin');
    } else if (tour_id === '') {
      toast('🚀 Vui lòng chọn lại tour');
    } else if (!/^[0-9]*$/.test(quantity) || !/^[0-9]*$/.test(quantity_kid)) {
      toast('🚀 Vui lòng nhập số');
    } else {
      const fetchData = async () => {
        const data = {
          tour_id,
          quantity,
          quantity_kid,
        }
        const response = await Ticket.Post_Ve(data)
        console.log(response)
        if (response === "Tour is exist") {
          toast('🚀 Thêm thất bại tour đã tồn tại');
        }
        else {
          toast('🦄 Thêm thành công');
        }
      }
      fetchData()
    }


  }


  const columns = [
    {
      field: 'id', headerName: 'ID Vé', width: 300, className: 'idproduc',
    },
    // {
    //   field: 'name', headerName: 'Tour', width: 300, renderCell: (params) => {
    //     return (
    //       <div className="productListItem">
    //         <img className="productListImg" src={params.row.img} alt="" />
    //         <span> {params.row.name}</span>
    //       </div>
    //     );
    //   },
    // },
    {
      field: 'tour_id', headerName: 'số lượng', width: 300, renderCell: (params) => {
        return (
          <div >
            {
              dataTour.map((tour, index) => {
                if (tour._id === params.row.tour_id) {
                  return (
                    <div key={index} className="productListItem">
                      <img className="productListImg" src={tour.img} alt="" />
                      <span>{tour.name}</span>
                    </div>
                  )
                }
              })
            }
          </div>
        );
      },
    },

    {
      field: 'price',
      headerName: 'Giá Người lớn',
      width: 180,
    },
    {
      field: 'price_kid',
      headerName: 'Giá trẻ em',
      width: 180,
    },
    {
      field: 'quantity',
      headerName: 'SL người lớn',
      width: 100,
    },
    {
      field: 'quantity_kid',
      headerName: 'SL trẻ em',
      width: 100,
    },
    // {
    //   field: "action",
    //   headerName: "Điều chỉnh",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={params.row.id} >
    //           <button className="productListEdit" >Xem</button>
    //         </Link>

    //       </>
    //     );
    //   },
    // },


  ];


  return (
    <div className='TicketList'>
      <div className='productListTitleContainer'>
        <h2 className='productTitle'>Bảng vé</h2>
      </div>
      <form>
        <div className='ticketListItem'>
          <label>Chọn Tour</label>
          <select name='tour_id' onChange={(e) => setTour_id(e.target.value)} >
            {dataTour?.map((tour, index) => {
              return (
                <option value={tour?._id} key={index}> {tour?.name}</option>
              )
            })}
          </select>
        </div>
        <div className='ticketList '>
          <div className='ticketListItem'>
            <label>Số lượng người lớn</label>
            <input type="text" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
          <div className='ticketListItem'>
            <label>Số lượng trẻ em</label>
            <input type="text" name='quantity_kid' value={quantity_kid} onChange={(e) => setQuantity_kid(e.target.value)} />
          </div>
          <div className='ticketListItem' >
            <input type="submit" value="Thêm" onClick={handleSubmit} />
          </div>
        </div>

      </form>
      <ToastContainer autoClose={2000} />
      <DataGrid className='datagrid'
        rows={rowData}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
      // checkboxSelection

      />
      <ToastContainer autoClose={2000} />
    </div>

  )
}
