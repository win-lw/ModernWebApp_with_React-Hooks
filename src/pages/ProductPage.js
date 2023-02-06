import React from 'react'
import {Table, Image, Badge, Spinner} from "react-bootstrap"
import axios from 'axios'
import { format, } from 'date-fns'
import { th } from 'date-fns/locale'
import { BsCartPlus, BsEyeFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

//redux
import { addToCart } from '../redux/actions/cartAction'
import {useDispatch, useSelector} from 'react-redux'

const ProductPage = () => {
    const [product, setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    //redux
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart)
    const total = useSelector(state => state.cartReducer.total)


    const getData = async () => {
        try {
            setLoading(true)
            const resp = await axios.get('https://api.codingthailand.com/api/course');
            // console.log(resp.data.data)
            setProduct(resp.data.data)
        } catch (error){
            console.log(error)
            setError(error)

        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {


        getData()

    },[]);

    if (loading === true) {
        return (
            <div className=' text-center mt-5'>
            <Spinner animation="border" variant="dark" />
            </div>
        )
    }

    if (error) {
        return (
            <div className=' text-center mt-5 text-danger'>
            <p>เกิดข้อผิดพลาดดจาก Server กรุณาลองใหม่</p>
            <p>{error.response.data.message}</p>
            </div>
        )
    }

    const addCart = (p) => {
        //console.log(p)
        const product = {
            id: p.id,
            name: p.title,
            price: p.view, //สมมุติว่า p.view คือ price
            qty: 1
        }

        //call action
        dispatch(addToCart(product, cart))
    }





  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <h2>คอร์สเรียน</h2>
            {
                total > 0 && <h4>คอร์สในตะกร้าจำนวน {total} ชิ้น</h4>
            }
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>ชื่อคอร์ส</th>
          <th>รายละเอียด</th>
          <th>วันที่สร้าง</th>
          <th>views</th>
          <th>รูปภาพ</th>
          <th>เครื่องมือ</th>
        </tr>
      </thead>
      <tbody>

        {
            product.map((p, index) => {
                return (
                    <tr key={p.id}>
                     <td>{p.id}</td>
                     <td>{p.title}</td>
                     <td>{p.detail}</td>
                     <td>
                        {
                            format(new Date(p.date), 'dd MMMM yyyy', {locale: th})
                        }
                     </td>
                     <td>
                        <Badge variant='success'>{p.view}</Badge>
                     </td>
                     <td>
                        <Image src={p.picture} thumnail alt={p.picture} width={100} />
                     </td>
                     <td>
                        <Link to={`/detail/${p.id}/title/${p.title}`}>

                            <BsEyeFill />
                        </Link>
                        <button onClick={() => addCart(p)} className='btn btn-outline-info ml-2'>
                            <BsCartPlus />
                        </button>
                     </td>
                    </tr>
                )

            })
        }
      </tbody>
    </Table>

            </div>
        </div>

    </div>
  )
}

export default ProductPage