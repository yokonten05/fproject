import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//CSS
import "./PayScreen.css";

//Components
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import ImageResize from "../../components/ImageResize/ImageResize";

const Dashboard = () => {
  return (
    <div>
      <Menu />
      <Header />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">ชำระเงิน</h1>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-12"></div>
              <div className="col-lg-5 col-md-5 col-sm-12">
                <div className="card card-primary">
                  <div className="card-body">
                    <div className="col-12 text-center">
                      <ImageResize
                        imageUrl="/dist/img/promptPay.png"
                        width="60%"
                      />
                    </div>
                    <div className="col-12 text-center">
                      <ImageResize
                        imageUrl="/dist/img/QR_code.png"
                        width="60%"
                      />
                    </div>
                  </div>
                  <div className="card-footer text-center">
                    <p>ชื่อร้านค้า:</p>
                    <p>ชื่อ นามสกุล:</p>
                    <p>หมายเลขพร้อมเพย์:</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
