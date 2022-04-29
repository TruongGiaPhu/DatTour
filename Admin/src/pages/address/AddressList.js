import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from '../../dummyData';
import './AddressList.css'
import Quocgia from '../../components/API/QuocGia';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function AddressList() {

    const [data, setData] = useState([]);


    const [quocgia, setQuocgia] = useState('');

    useEffect(() => {

        fetchData1()
    }, [])

    const fetchData1 = async () => {
        const response = await Quocgia.Get_All_QuocGia()
        setData(response)
    }

    const rowData = data?.map(quocgia => {
        return {
            name: quocgia?.name,
            id: quocgia?._id,
        };
    });


    const handleFormSubmit = e => {
        e.preventDefault();

        const fetchData = async () => {
            const data = {
                name: quocgia
            }
            const response = await Quocgia.Post_QuocGia(data)
            if (response === 'quoc gia is exits') {
                toast('🚀 Thêm thất bại');
            }
            else {
                toast('🦄 Thêm thành công');
            }
            fetchData1()
        }
        fetchData()
    }

    const handleDelete = (id) => {

    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 300 },
        {
            field: 'name', headerName: 'Họ tên', width: 250,
        },
        // {
        //     field: "action",
        //     headerName: "",
        //     width: 100,
        //     renderCell: (params) => {
        //         return (
        //             <>
        //                 <Link to={params.row.id}>
        //                     <button className="userListEdit">Xem</button>
        //                 </Link>
        //                 {/* <DeleteOutline
        //           className="userListDelete"
        //           onClick={() => handleDelete(params.row.id)}
        //         /> */}
        //             </>
        //         );
        //     },
        // },

    ];

    return (
        <div className='userList'>
            <div className='productListTitleContainer'>
                <h2 className='productTitle'>Bảng quốc gia</h2>
                <div className='Address'>
                    <label className='productListTitle'>Nhập tên quốc gia</label>
                    <input type="text" className='AddressInput' value={quocgia} onChange={
                        e => setQuocgia(e.target.value)
                    } />

                </div>
                <Link to='newProduct'>
                    <input className='productListAddButton' type="submit" value="Thêm" onClick={handleFormSubmit} />
                </Link>

            </div>
            <DataGrid className='datagrid'
                rows={rowData}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
            // checkboxSelection
            />
            <ToastContainer />
        </div>
    )
}

export default AddressList