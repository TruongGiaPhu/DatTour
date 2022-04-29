import './Home.css'
import React, { useEffect, useState } from 'react'
import Featuredlnfo from '../../components/featuredlnfo/Featuredlnfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import DoanhThu from '../../components/API/DoanhThu'
import ChartC from '../../components/chart/ChartC'




export default function Home() {

  // const [data, setData] = useState([])
  const [thang, setThang] = useState('')
  // const [thang1, setThang1] = useState('')
  const [nam, setNam] = useState('')
  const [tong, setTong] = useState('')

  const [quocgia, setQuocgia] = useState('')

  const [khachhang, setKhachhang] = useState('')




  useEffect(() => {
    const fetchData = async () => {
      const response = await DoanhThu.Get_All_DoanhThu()
      setTong(response)
      console.log(response)
      const response1 = await DoanhThu.Get_DoanhThu_TheoNam(2022)
      setNam(response1)
      const response2 = await DoanhThu.Get_All_KhachHang()
      setKhachhang(response2)
    }
    fetchData()
  }, [])

  return (
    <div className='home'>
      <Featuredlnfo totalCustomers={khachhang.KH} Month={thang.thang} tong={tong.sum} numberYear={nam.sum} Year={nam.nam} />
      <Chart data={userData} title="Biểu đồ Tour " grid dataKey="Active User" />
      {/* <ChartC data={data} title="Biểu đồ Doanh Thu Quốc Gia" grid dataKey="Doanh Thu" /> */}
      {/* <div className='homeWidgets'> */}
      {/* <WidgetSm /> */}
      <WidgetLg />
      {/* </div> */}


    </div>

  )
}
