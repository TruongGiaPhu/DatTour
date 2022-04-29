// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import '../CSS/grids.css'
// import './Tours.css'

// function Products(props) {

//     const { tours } = props
//     return (
//         <>
//             {
//                 tours && tours.map((value, index) => (
//                     <div key={index} className="cols_Item cols l-4 m-6 c-12">
//                         <div className="rows rowsItem">
//                             <Link to={`/tour/detail/${value._id}`} className="Link_Item">
//                                 <div>
//                                     <img className="tour_image" src={value.img}/>
//                                 </div>
//                                 <div className="div_item_name">
//                                     <h4 className="item_name">{value.name}</h4>
//                                 </div>
//                                  <div className="price_div">
//                                     <span className="price_span">{new Intl.NumberFormat('vi-VN',{style: 'decimal',decimal: 'VND'}).format(value.price)+ ' VNĐ'}</span>
//                                 </div>
//                             </Link>
//                         </div>
//                     </div>                    
//                 ))
//             }
//         </>
//     );
// }

// export default Products;