import React from 'react'
import './WidgetLg.css'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Giao dịch mới</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Khách hàng</th>
            <th className="widgetLgTh">Ngày</th>
            <th className="widgetLgTh">Giá</th>
            <th className="widgetLgTh">Trạng thái</th>
          </tr>
        </thead>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg'
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src='https://toigingiuvedep.vn/wp-content/uploads/2021/11/hinh-anh-chan-dung-cuc-dep-1.jpg' alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
