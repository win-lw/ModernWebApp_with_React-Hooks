import React from "react";
import { Card, CardDeck, Spinner, Button,Badge } from "react-bootstrap";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const DetailPage = () => {
  const { id, title } = useParams();
  const history = useHistory()

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      // console.log(resp.data.data)
      setDetail(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(
    () => {
      getData(id);
    },
    [id]
  );

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
          <div className="col-md-12 mt-3">

          <div className="text-right">
          <Badge bg="light" text="dark">
          {title} - [{id}]
      </Badge>{' '}
          <Button variant="info" onClick={() => {
              history.goBack()
          }}>ย้อนกลับ</Button>{' '}
          
          </div>

            <div className="row mt-4">
              <CardDeck>
                {detail.length > 0 ? (
                  detail.map((d, index) => {
                    return (
                      <div className="col-md-4" key={d.ch_id}>
                        <Card className="mb-4 shadow-sm">
                          <Card.Body>
                            <Card.Title>{d.ch_title}</Card.Title>
                            <Card.Text>{d.ch_dateadd}</Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })
                ) : (
                  <div className="mx-auto">ไม่พบข้อมูล...</div>
                )}
              </CardDeck>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
