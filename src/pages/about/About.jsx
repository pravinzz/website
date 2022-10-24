// import React, { useEffect, useState, useTransition } from 'react'
// import './About.scss';
// import axios from 'axios';
// import { Input } from 'antd';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Navbar from '../../components/Navbar/Navbar'




// const About = () => {
//   const [Product, setProduct] = useState([])
//   const [search, setSearch] = useState("")


//   const getProductsData = async () => {
//     try {
//       const data = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");
//       console.log(data.data);
//       setProduct(data.data)
//     }
//     catch (e) {
//       console.log(e);
//     }
//   }

//   useEffect(() => {
//     getProductsData();
//   }, []);
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));




//   return (
//     <div>
//       <Navbar />
//       <h1>Welcome to About</h1>
//       <br />
//       <Input
//         placeholder="search here.."
//         type='text'
//         onChange={e => {
//           setSearch(e.target.value);
//         }}
//       />
//       <br />
//       <br />


//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 700 }} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Product</StyledTableCell>
//               <StyledTableCell >Price</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Product.filter(item => {
//               if (search == "") {
//                 return item
//               }
//               else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
//                 return item
//               }
//             }).
//               map((Item) => {

//                 return (
//                   <p>
//                     {Item.name} - {Item.price}
//                   </p>
//                 )
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>


//       {/* {Product.filter(item => {
//         if (search == "") {
//           return item
//         }
//         else if (item.name.toLowerCase().includes(search.toLocaleLowerCase())) {
//           return item
//         }
//       }).
//         map((Item) => {

//           return (
//             <p>
//               {Item.name} - {Item.price}
//             </p>
//           )
//         })} */}
//     </div>

//   );
// };

// export default About







import React from 'react'
import './About.scss';
import Navbar from '../../components/Navbar/Navbar';
import furtimimage from '../images/furtimimage.jpg'
import beach from '../images/blue.jpg'
import { Col, Row } from 'antd';
import { Divider, Steps } from 'antd';
import { useState } from 'react';


const About = () => {
  const { Step } = Steps;


  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', current);
    setCurrent(value);
  };







  return (
    <div className='main-container-about'>
      <Navbar />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='container-one'>


        <Row>
          <Col span={13} className='bg-color'>
            <div>
              <h1>About us </h1>
              <h3>
                Furtim is a software development and software consultancy company, pioneer in design and <br />
                delivering software solutions using latest and cutting-edge technologies.
                <br />
                <br />
                At Furtim, we partner with you to drive digital transformation that will power efficiency, drive <br />
                growth and build credibility
                for your businesses. We do this by parterning with you to deliver smart technology <br />
                solutions that are aligned to your specific needs.
                <br />
                <br />
                At Furtim, our team is passionate about technology and the positive impact it can have on people <br />
                and organisations. Yes, it is one thing to love technology, and at Furtim what makes us unique is that <br />
                we focus on getting to know you and your business first. Once we understand you and your business we can <br />
                then get to work on finding a technology solution that best suits your needs. That is where the fun begins!
              </h3>
            </div>
          </Col>
          <Col span={1} className='bg-color'></Col>
          <Col span={10} className='bg-color'>
            <img src={furtimimage} />
          </Col>
        </Row>
        {/* firsthalf done*/}
        <div >
          <img src={beach} className='interval' />
        </div>

        <h1 className='title'>THE STORY</h1>
        <br />
        <br />
        <div className='step-align'>
          <Steps progressDot current={1} direction="vertical">
            <Step title="Finished" description="This is a description. This is a description." />
            <Step title="Finished" description="This is a description. This is a description." />
            <Step title="In Progress" description="This is a description. This is a description." />
            <Step title="Waiting" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </div>
      </div>


    </div>
  )
}

export default About
