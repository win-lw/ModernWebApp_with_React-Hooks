import React from "react";

import { useParams, useHistory } from "react-router-dom";
import { Spinner, CardDeck, Card, Button } from "react-bootstrap";
import axios from "axios";

const DetailPage = () => {
  const { id, title } = useParams()
  const history = useHistory()

  const [detail, setDetail] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const cancelToken = React.useRef(null)

  const getData = async (id) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id,
        {
          cancelToken: cancelToken.current.token,
        }
      );
      //console.log(resp.data.data)
      setDetail(resp.data.data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    cancelToken.current = axios.CancelToken.source();

    getData(id);

    return () => {
      // console.log('exit product page')
      cancelToken.current.cancel();
    };
  }, [id]);

  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <p>เกิดข้อผิดพลาดจาก Server กรุณาลองใหม่</p>
        <p>{error.response.data.message}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12">

            <Button variant="secondary" onClick={() => {
                history.goBack()
            }}>ย้อนกลับ</Button>

          <h2>
            {title} - {id}
          </h2>

          <div className="row">
           
              {detail.length > 0 ? (
                <CardDeck>  
                    {
                        detail.map((d, index) => {
                            return <div className="col-md-4" key={d.ch_id}>
                                <Card className="mb-4 shadow-sm">
                                      <Card.Body>
                                          <Card.Title>{d.ch_title}</Card.Title>
                                          <Card.Text>{d.ch_dateadd}</Card.Text>
                                      </Card.Body>
                                </Card>
                            </div>;
                          })
                    }
                </CardDeck>
              ) : (
                <div className="mx-auto">ไม่พบข้อมูล...</div>
              )}
            
          </div>

          <hr />

        </div>
      </div>
    </div>
  );
};

export default DetailPage;
