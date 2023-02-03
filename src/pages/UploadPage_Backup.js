import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SUPPORTED_IMAGE_FORMAT = ['image/jpg', 'image/jpeg']

const UploadPage = () => {
  const history = useHistory();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <h1>อัปโหลดรูปภาพ</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="exampleFormControlFile1">
                เลือกไฟล์ภาพที่นี่
              </label>
              <input
                type="file"
                name="picture"
                {...register('exampleRequired', { required: true })}
                // ref={register({
                //   required: 'กรุณาใส่รูปภาพก่อน',
                // })}
                className={`form-control-file ${errors.picture ? "is-invalid" : ""}`}
                id="exampleFormControlFile"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              {/* {
                errors.picture && errors.picture.type === 'required' && (
                    <div className="invalid-feedback">
                        {errors.picture.message}
                    </div>
                )
              } */}
            </div>

            <button className="btn btn-primary" type="submit">Upload...</button>

          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadPage;
