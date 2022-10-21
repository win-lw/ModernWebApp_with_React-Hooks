import React from "react";
import { Spinner, Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import axios from "axios";
import { BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const pageSize = 15;

const HospitalPage = () => {
  const [hospital, setHospital] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  //pagination
  const [page, setPage] = React.useState(1);
  const [total, setTotal] = React.useState(0)

  const getData = async (page) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`
      );
      // console.log(resp.data.data)
      setHospital(resp.data.data);
      setTotal(resp.data.meta.pagination.total)
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData(page);
  }, [page]);

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

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>สถานพยาบาล</h2>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>code</th>
                  <th>ชื่อสถานพยาบาล</th>
                </tr>
              </thead>
              <tbody>
                {hospital.map((h, index) => {
                  return (
                    <tr key={h.id}>
                      <td>{h.id}</td>
                      <td>{h.code}</td>
                      <td>{h.h_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            <Pagination
              activePage={page}
              itemsCountPerPage={pageSize}
              totalItemsCount={total}
              pageRangeDisplayed={15}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
              prevPageText="ก่อนหน้า"
              nextPageText="ต่อไป"
              firstPageText="หน้าแรก"
              lastPageText="หน้าสุดท้าย"

            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HospitalPage;
