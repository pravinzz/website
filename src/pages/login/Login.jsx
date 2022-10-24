import React from 'react'
import './Login.scss';
import { Input, Card, Form, Button, Row, Col, Spin } from 'antd';
import { Outlet, Link } from "react-router-dom";
import { AudioOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { useState, useEffect } from 'react';





const Login = () => {



  const [isBtnLoading, setisBtnLoading] = useState(`false`);
  const [loadings, setLoadings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);



  const openNotification = () => {
    notification.open({
      message: 'WELCOME',
      description: 'LOGIN SUCCESS !!',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };



  // Button
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  // Button

  const handleSubmit = () => {
    // console.log(firstName, lastName, email, mobile, reenterpassword, password);
    setisBtnLoading(true);

  }



  return (
    <div className='login-page-container'>
      {isLoading == false ?
        <div className='spinner'>
          <Spin />
        </div> :
        <div className='left-container'>
          <div className='container-one'>
            <Card className="card-align"

              title="LOGIN "
              extra={<Link to="/signup" className='signup-align'>or signup</Link>}
              style={{
                width: 960,
                height: 930,

              }}>
              <div className='alignments'>
                <Form rules={[{ type: "email", message: 'The input is not valid Email' }, { message: 'Please enter your email!', required: true }]}>
                  <h4>* Email id</h4>
                  <Input placeholder="email id" className="input-align" />
                  <h4>* Password</h4>
                  <Input.Password placeholder="password" className="input-align" />
                </Form>
                <Row>
                  <Col span={10}>
                    {/* <Link to='/forgetpassword'>
                    Forget Password ?
                  </Link> */}
                  </Col>
                  <Col span={1}>
                  </Col>
                  <Col span={10}>
                    <div>
                      {/* <Link to="/home">
                      <Button type="primary" className="buton-align" onClick={openNotification} icon={<ArrowRightOutlined />}>
                        login
                      </Button>
                    </Link> */}
                      <Link to="/home">
                      {!isBtnLoading && <Button htmlType="submit" type="primary" icon={<ArrowRightOutlined />} size="large"
                        className="ant-btn-primary" onClick={() => handleSubmit()}>Login </Button>}
                      {isBtnLoading && <Button htmlType="submit" type="primary" icon={<ArrowRightOutlined />} loading={loadings[0]} onClick={() => enterLoading(0)} size="large"
                        className="ant-btn-primary">Login </Button>}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Card>
          </div>
        </div>
      } :
    </div>

  )
}

export default Login;







