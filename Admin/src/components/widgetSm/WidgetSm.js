import React from 'react'
import './WidgetSm.css'
import { Visibility } from '@material-ui/icons'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>Thành viên mới</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListItem'>
          <img src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Chưa</span>
            <span className='widgetSmUserTitle'>Công việc</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Biết</span>
            <span className='widgetSmUserTitle'>Công việc</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt='' className='widgetSmImg' />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Làm</span>
            <span className='widgetSmUserTitle'>Công việc</span>
          </div>
          <button className='widgetSmButton'>
            <Visibility className='widgetSmIcon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
