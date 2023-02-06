import React from "react";

import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

const HomePage = () => {
  const history = useHistory();
  // const { isLoading, error, data, isFetching } = useQuery(["getData"], () =>
  //   fetch("https://api.codingthailand.com/api/news?page=1&per_page=3").then(
  //     (res) => res.json()
  //   )
  // );

  const query = useQuery("getData", () => {
    const controller = new AbortController();
    const signal = controller.signal;

    const promise = fetch(
      "https://api.codingthailand.com/api/news?page=1&per_page=3",
      {
        method: "get",
        signal: signal,
      }
    ).then((res) => res.json());

    //cancel request
    promise.cancel = () => controller.abort();

    return promise;
  });

  const { isLoading, error, data, isFetching } = query;

  if (isLoading === true) {
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
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <>
      <main role="main">
        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">คอร์สเรียนออนไลน์</h1>
            <p>
              เว็บไซต์สำหรับเรียนและพัฒนา ไม่ว่าจะเป็น Web และ Mobile App
              เราอยู่ในยุคที่มีการเปลี่ยนแปลงรวดเร็วมากจนคาดไม่ถึง
              ทัศนคติแห่งการเรียนรู้ที่ดีเท่านั้นที่จะทำให้เราก้าวทัน
              และรับมือกับการเปลี่ยนแปลงต่างๆ ในอนาคตได้ โค้ชเอก...
            </p>
            <p>
              <button onClick={() => {
                  history.replace("/product");
                }} className="btn btn-info btn-lg" href="#">
                เข้าสู่คอร์สเรียน!
              </button>
            </p>
          </div>
        </div>
        <div className="container">
          {/* Example row of columns */}
          <div className="row">
            <div className="mx-auto">
              {isFetching ? "กำลังอัปเดต..." : null}
            </div>

            {data.data.map((news, index) => {
              return (
                <div className="col-md-4" key={news.id}>
                  <h2>{news.topic}</h2>
                  <p>{news.detail}</p>
                  <p>วันที่: {news.dateadd}</p>
                </div>
              );
            })}
          </div>
          <hr />
        </div>{" "}
        {/* /container */}
      </main>
    </>
  );
};

export default HomePage;
