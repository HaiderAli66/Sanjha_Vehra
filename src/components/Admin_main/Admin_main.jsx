// import React from 'react'
import "./Admin_main.css";
import { PlusOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

function Admin_main() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div className="">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-lg-4 pic_uper">
            <>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader haider"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </>
          </div>
        </div>

        <div className="row justify-content-center title_penal">
          <div className="col-lg-12">
            <div className="admin_title ">
              <h1 className="m-0 d-flex justify-content-start admin_dead">
                Heading
              </h1>
            </div>

            <div className="mt-3">
              <h6 className="date_admin">August 27,2022</h6>
            </div>

            <div className="admin_detail mt-3">
              <p className="mb-0 detail_coor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, totam illo veritatis possimus magni fugiat vero libero
                nihil adipisci assumenda blanditiis optio natus laboriosam
                corporis fugit mollitia numquam praesentium animi? Sit
                cupiditate provident, enim a vel mollitia distinctio laborum
                culpa, quisquam, fugiat error numquam impedit. Suscipit
                excepturi saepe cupiditendis quibusdam ea. Voluptatem harum modi
                ad, ab repudiandae quae? Perferendis nobis totam reprehenderit
                mollitia quos repudiandae tempora a nostrum expedita veniam
                doloremque dignissimos voluptatum facilis magni, maxime ratione
                iure maiores asperiores quibusdam? Voluptas, ipsam neque.
                Recusandae beatae tempore non nobis? Quidem fugit maiores
                eveniet corporis minus! Praesentium hic sapiente qias eius vel
                dolorum inventore ex.
              </p>
            </div>
          </div>
        </div>

        <div className="row gallry_penal mb-5">
          <div className="col-lg-3">
            <>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader haider"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </>
          </div>

          <div className="col-lg-3 mt-md-0 mt-4">
            <>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader haider"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </>
          </div>

          <div className="col-lg-3 mt-md-0 mt-4">
            <>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader haider"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </>
          </div>

          <div className="col-lg-3 mt-md-0 mt-4">
            <>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader haider"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin_main;
