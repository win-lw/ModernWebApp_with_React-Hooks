import React from "react"
import { Spinner, Table, Button } from "react-bootstrap"
import axios from "axios"
import { BsPencil, BsTrash } from "react-icons/bs"
import { useHistory } from 'react-router-dom'

const IndexPage = () => {
  const [category, setCategory] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const history = useHistory()

  const getData = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.codingthailand.com/api/category`
      );
      // console.log(resp.data.data)
      setCategory(resp.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading === true) {
    return (
      <div className=" text-center mt-5">
        <Spinner animation="border" variant="dark" />
      </div>
    );
  }

  if (error) {
    return (
      <div className=" text-center mt-5 text-danger">
        <p>เกิดข้อผิดพลาดดจาก Server กรุณาลองใหม่</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Button 
            className="mb-3 mt-3" 
            variant="success" 
            onClick={() => history.push('/category/create')}>
              เพิ่มข้อมูล
            </Button>

            <h2>หมวดหมู่ข่าว</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>หมวดหมู่ข่าว</th>
                  <th>เครื่องมือ</th>
                </tr>
              </thead>
              <tbody>
                {category.map((c, index) => {
                  return (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name}</td>
                      <td>
                        <Button 
                        className="ml-2" 
                        variant="outline-info" 
                        size='sm'
                        //แก้ไขข้อมูลโดยใช้ history.push
                        onClick={() => history.push('/category/edit/' + c.id)}
                        >
                          <BsPencil />
                        </Button>

                        <Button 
                        className="ml-2" 
                        variant="outline-danger" 
                        size='sm'
                        //ลบข้อมูลโดยใช้ axios 
                        onClick={ async () => {
                          const isConfirm = window.confirm('ต้องการลบข้อมูล ' + c.name + '?')
                          if(isConfirm === true) {
                            const resp = await axios.delete('https://api.codingthailand.com/api/category/' + c.id)
                            alert(resp.data.message)
                            history.go(0) //Refresh
                          }
                        }}>
                          <BsTrash />
                        </Button>
                      </td>
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

export default IndexPage;
