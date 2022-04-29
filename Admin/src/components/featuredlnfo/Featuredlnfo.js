import React from 'react'
import './Featuredlnfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import PersonIcon from '@mui/icons-material/Person';

export default function Featuredlnfo(props) {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Tổng khách hàng</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'><PersonIcon /> {props.totalCustomers}</span>
          {/* <span className='featuredMoneyRate'>-11.4<ArrowDownward className='featuredIcon negative' /></span> */}
        </div>
        <span className='featuredSub'>Toàn bộ khách hàng</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Doanh thu năm {props.Year}</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{props.numberYear}₫</span>
          <span className='featuredMoneyRate'>-11.4<ArrowUpward className='featuredIcon ' /></span>
        </div>
        <span className='featuredSub'>Danh thu trong năm</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Tổng doanh thu</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>{props.tong}₫</span>
          <span className='featuredMoneyRate'>-11.4<ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className='featuredSub'>Toàn bộ doanh thu đã bán </span>
      </div>
    </div>
  )
}
