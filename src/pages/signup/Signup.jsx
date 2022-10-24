
// import React, { useEffect } from 'react';
// import './Signup.scss';
// import { Card, Button, Form, Col, Row, Spin } from 'antd';
// import { Input } from 'antd';
// import { Outlet, Link } from "react-router-dom";
// import { PlusOutlined, LoadingOutlined, ArrowRightOutlined, MobileOutlined } from '@ant-design/icons';
// import { message, Upload, notification } from 'antd';
// import { useState } from 'react';
// import 'antd/dist/antd.css';
// import { PoweroffOutlined } from '@ant-design/icons';
// import { Space } from 'antd';




// const Signup = () => {


//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [reenterpassword, setReenterpassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);




//   useEffect(() => {
//     localStorage.clear();
//     setTimeout(() => {
//       setIsLoading(true);
//     }, 1000);
//   }, []);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     if (id === "firstName") {
//       setFirstName(value);
//     }
//     if (id === "lastName") {
//       setLastName(value);
//     }
//     if (id === "email") {
//       setEmail(value);
//     }
//     if (id === "mobile") {
//       setMobile(value);
//     }
//     if (id === "password") {
//       setPassword(value);
//     }
//     if (id === "reenterpassword") {
//       setReenterpassword(value);
//     }
//   }


//   const handleSubmit = () => {
//     console.log(firstName, lastName, email, mobile, reenterpassword, password);
//     // setisBtnLoading(true);

//   }


//   const openNotification = () => {
//     notification.open({
//       message: 'Notification Title',
//       description:
//         'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
//       onClick: () => {
//         console.log('Notification Clicked!');
//       },
//     });
//   };



//   return (
//     <div className='signup-page-container'>
//       {isLoading == false ?
//         <div className='spinner'>
//           <Spin />
//           </div>:
//           <div className='left-container' style={{ width: 1000, height: 930 }}>
//             {/* formmmmm */}
//             <Form>
//               <Row>
//                 <Col span={10}>
//                   <br />
//                   <br />
//                   <h3>First Name</h3>
//                   <Form.Item rules={{ message: 'Please enter your phone number!', }}>
//                     <Input placeholder="First Name" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" style={{ width: 300, height: 40 }} className="form-align" type='text' />
//                     {firstName}
//                   </Form.Item>
//                 </Col>
//                 <Col span={2}>
//                 </Col>
//                 <Col span={10}>
//                   <br />
//                   <br />
//                   <h3>Last Name</h3>
//                   <Input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: 300, height: 40 }} className="form-align" type='text' />
//                   {lastName}
//                 </Col>
//               </Row>
//               <div className="alignment">

//                 <Row>
//                   <Col span={10}>
//                     <br />
//                     <br />
//                     <h3>Email id </h3>
//                     <Input placeholder="Email" type='text' value={email} onChange={e => setEmail(e.target.value)} style={{ width: 300, height: 40 }} className="form-align" />
//                     {email}
//                   </Col>
//                   <Col span={2}>
//                   </Col>
//                   <Col span={10}>
//                     <br />
//                     <br />
//                     <h3>Mobile</h3>
//                     <Form.Item
//                       name="mobile"

//                       rules={[
//                         {
//                           pattern: /^(?:\d*)$/,
//                           message: "Value should contain just number",
//                         },
//                         {
//                           max: 10,
//                           min: 10,
//                           message: "phone number must be 10 digits",
//                         },
//                         {
//                           message: 'Please enter your phone number!',
//                           required: true
//                         }
//                       ]}

//                       style={{ width: 300, height: 40 }}
//                     >
//                       <Input id='mobile' placeholder="Phone Number"
//                         value={mobile} onChange={e => setMobile(e.target.value)} type='number' className="form-align-mobile" />
//                       {mobile}
//                     </Form.Item>
//                   </Col>
//                 </Row>
//               </div>
//               <div className="alignment">
//                 <Row>
//                   <Col span={10}>
//                     <br />
//                     <br />
//                     <h3>Password</h3>
//                     <Input.Password value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" style={{ width: 300, height: 40 }} className="form-align" />

//                   </Col>
//                   <Col span={2}>
//                   </Col>
//                   <Col span={10}>
//                     <br />
//                     <br />
//                     <h3>Re Enter Password</h3>
//                     <Input.Password value={reenterpassword} onChange={e => setReenterpassword(e.target.value)} placeholder="Re enter password" style={{ width: 300, height: 40 }} className="form-align" />
//                   </Col>

//                 </Row>
//               </div>
//               <div>
//                 <br />
//                 <br />

//                 <Button type="primary" size="medium" htmlType='submit' className="ant-btn-primary"
//                   onClick={() => handleSubmit()} icon={<ArrowRightOutlined onOk={openNotification} />}>
//                   SUBMIT
//                 </Button>

//                 {/* <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
//                     Click me!
//                   </Button>  */}

//               </div>

//             </Form>
//             {/* formmmmm */}

//           </div>
//      }  :

//     </div>
//   );
// };

// export default Signup;



import React, { useEffect } from 'react';
import './Signup.scss';
import { Card, Button, Form, Col, Row, Spin } from 'antd';
import { Input } from 'antd';
import { Outlet, Link } from "react-router-dom";
import { PlusOutlined, LoadingOutlined, ArrowRightOutlined, MobileOutlined } from '@ant-design/icons';
import { message, Upload, notification } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { PoweroffOutlined } from '@ant-design/icons';
import { Space } from 'antd';








const Signup = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [reenterpassword, setReenterpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    localStorage.clear();
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);



  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "contact") {
      setContact(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "reenterpassword") {
      setReenterpassword(value);
    }
  }


  const handleSubmit = () => {
    console.log(firstName, lastName, email, contact);
    // setisBtnLoading(true);

  }


  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  return (

    <div className="signup-page-container">
      {isLoading == false ?
        <div className='spinner'>
          <Spin />
        </div> :
        <Row>
          <Col span={12}>
            <div className="left-container">
              <Card className="card-align" style={{ width: 930, height: 900 }} title="SIGN UP" extra={<Link to="/">or Login</Link>}>

                {/* formmmmm */}
                <Form>
                  <Row>
                    <Col span={10}>
                      <br />
                      <br />
                      <h3>First Name</h3>
                      <Form.Item rules={{ message: 'Please enter your phone number!', }}>
                        <Input placeholder="First Name" value={firstName} onChange={(e) => handleInputChange(e)} id="firstName" style={{ width: 300, height: 40 }} className="form-align" type='text' />
                        {firstName}
                      </Form.Item>
                    </Col>
                    <Col span={2}>
                    </Col>
                    <Col span={10}>
                      <br />
                      <br />
                      <h3>Last Name</h3>
                      <Input placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} style={{ width: 300, height: 40 }} className="form-align" type='text' />
                      {lastName}
                    </Col>
                  </Row>
                  <div className="alignment">

                    <Row>
                      <Col span={10}>
                        <br />
                        <br />
                        <h3>Email id </h3>
                        <Input placeholder="Email" type='text' value={email} onChange={e => setEmail(e.target.value)} style={{ width: 300, height: 40 }} className="form-align" />
                        {email}
                      </Col>
                      <Col span={2}>
                      </Col>
                      <Col span={10}>
                        <br />
                        <br />
                        <h3>Mobile</h3>
                        <Form.Item
                          name="mobile"

                          rules={[
                            {
                              pattern: /^(?:\d*)$/,
                              message: "Value should contain just number",
                            },
                            {
                              max: 10,
                              min: 10,
                              message: "phone number must be 10 digits",
                            },
                            {
                              message: 'Please enter your phone number!',
                              required: true
                            }
                          ]}

                          style={{ width: 300, height: 40 }}
                        >
                          <Input id='mobile' placeholder="Phone Number"
                            value={contact} onChange={e => setContact(e.target.value)} type='number' className="form-align-mobile" />
                          {contact}
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                  <div className="alignment">
                    <Row>
                      <Col span={10}>
                        <br />
                        <br />
                        <h3>Password</h3>
                        <Input.Password value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" style={{ width: 300, height: 40 }} className="form-align" />

                      </Col>
                      <Col span={2}>
                      </Col>
                      <Col span={10}>
                        <br />
                        <br />
                        <h3>Re Enter Password</h3>
                        <Input.Password value={reenterpassword} onChange={e => setReenterpassword(e.target.value)} placeholder="Re enter password" style={{ width: 300, height: 40 }} className="form-align" />
                      </Col>

                    </Row>
                  </div>
                  <div>
                    <br />
                    <br />

                    <Button type="primary" size="medium" htmlType='submit' className="ant-btn-primary"
                      onClick={() => handleSubmit()} icon={<ArrowRightOutlined onOk={openNotification} />}>
                      SUBMIT
                    </Button>

                    {/* <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                    Click me!
                  </Button>  */}

                  </div>

                </Form>
                {/* formmmmm */}
              </Card>
            </div>
          </Col>
          <Col span={12}>
            <div className="right-container">
              <Card className="card-align1" style={{ height: 900 }}>

                <h1>“If we replace all of our guns with Burger it would end all wars immediately.” CHEERS!!!</h1>


              </Card>
            </div>
          </Col>
        </Row>

      } :
    </div>
  )
}
export default Signup;

