import './ProductList.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import Product from '../../components/API/Product';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function ProductList() {
  const [data, setData] = useState([]);

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await Product.Get_All_Tour()
      setProduct(response)
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    const response = await Product.Delete_Tour(id)
    setProduct(product.filter((item) => item._id !== id))
    if (response === "Successfully") {
      toast('🦄 Xóa thành công');
    } else {
      toast('🚀 Xóa thất bại');
    }
  }


  const rowData = product?.map(product => {
    return {
      name: product?.name,
      price: product?.price,
      price_kid: product?.price_kid,
      img: product?.img,
      quocgia_id: product?.quocgia_id.name,
      id: product?._id,
    };
  });

  console.log(rowData);

  const columns = [
    {
      field: 'id', headerName: 'ID', width: 90, className: 'idproduc',
    },
    {
      field: 'name', headerName: 'Tour', width: 300, renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            <span> {params.row.name}</span>
          </div>
        );
      },
    },
    // { field: 'amount', headerName: 'số lượng', width: 100 },

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
      field: 'quocgia_id',
      headerName: 'Quốc gia',
      width: 200,
    },
    // {
    //   field: ' phuongtien_id',
    //   headerName: 'Phương tiện',
    //   width: 150,
    // },
    {
      field: "action",
      headerName: "Điều chỉnh",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={params.row.id} >
              <button className="productListEdit" >Edit</button>
            </Link>

            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },


  ];


  return (

    <div className='productList'>
      <div className='productListTitleContainer'>
        <h2 className='productTitle'>Bảng sản phẩm</h2>
        <Link to='newProduct'>
          <button className='productListAddButton'>Thêm</button>
        </Link>
      </div>
      <DataGrid className='datagrid'
        rows={rowData}
        disableSelectionOnClick
        columns={columns}
        pageSize={9}
        checkboxSelection
      />
      <ToastContainer autoClose={2000} />
    </div>

  )
}
