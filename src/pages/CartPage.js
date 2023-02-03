import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { clearAllCart } from '../redux/actions/cartAction'
import { useHistory } from 'react-router-dom'

const CartPage = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const dispatch = useDispatch()
  const history = useHistory()
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h2>ตะกร้าสินค้า ซื้อไปแล้ว {total} ชิ้น</h2>

            <button onClick={() =>{
              dispatch(clearAllCart());
            }} className="btn btn-danger btn-sm mb-3 ml-3">เคลียร์ตะกร้า</button>
            <button onClick={() =>{
              history.push('/pdf')
            }} className="btn btn-info btn-sm mb-3 float-right mr-3">รายงาน PDF</button>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ลำดับ</th>
                  <th>รหัสสินค้า</th>
                  <th>ชื่อสินค้า</th>
                  <th>ราคา</th>
                  <th>จำนวน</th>
                  <th>รวมทั้งหมด</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((c, index) => {
                  return (
                    <tr key={c.id}>
                      <td>{index + 1}</td>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>{c.price}</td>
                      <td>{c.qty}</td>
                      <td>{c.price * c.qty}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
