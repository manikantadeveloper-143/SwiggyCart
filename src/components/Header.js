import React, { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link,NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from '@mui/material';
import { DLT } from '../redux/actions/action';
import { UndoRounded } from '@mui/icons-material';
import './style.css'


const Header = () => {

  const [price,setPrice]=useState(0)

  const getData=useSelector(state=>state.cartReducer.carts)
  // console.log(getData)


   const dispatch=useDispatch()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt=(id)=>{
    dispatch(DLT(id))
  }

  const total=()=>{
    let price=0;
    getData.map((ele,k)=>{
        price = ele.price*ele.qnty + price
    })
    setPrice(price)
  }

  useEffect(()=>{
    total()
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 70 }}>
        <Container>
          <NavLink to='/' className='text-light text-decoration-none mx-4 fs-3'>Tejas Restaurent</NavLink>
          <Nav className="me-auto">
            <Link to='/' className='text-light text-decoration-none mx-20px fs-4'>Home</Link>
          </Nav>

          <Badge badgeContent={getData.length} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <i className="fa-solid fa-cart-shopping text-light" style={{ fontSize: 25, cursor: "pointer" }}></i>

          </Badge>
        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {
          getData.length ? 
          <div className='card_details' style={{width:"24rem",padding:10}}>
             <Table>
                 <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Restaurent</th>
                    </tr>
                 </thead>
                 <tbody>
                  {
                    getData.map((e)=>{
                      return (
                        <React.Fragment key={e.id}>
                         <tr>
                           <td>
                           <NavLink to={`/cart/${e.id}`}   onClick={handleClose}><img src={e.imgdata} style={{width:"5rem",height:"5rem"}}/></NavLink> 
                            </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : ₹ {e.price}</p>
                            <p>quantity :  {e.qnty}</p>
                            <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                              <i className='fas fa-trash smalltrash'></i>
                            </p>
                          </td>
                          <td className='mt-5' style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                      
                              <i className='fas fa-trash largetrash my-1'></i>
                          </td>
                         </tr>
                        </React.Fragment>
                      )
                    })
                  }
                  <p className='text-center'>Total : ₹ {price}</p>
                 </tbody>
             </Table>
          </div> 
          : 
          <div className='card_details d-flex justify-content-center align-items-center' style={{width:"20rem",padding:5,position:"relative"}}>
          <i className='fas fa-close smallclose' 
          onClick={handleClose}
          style={{position:"absolute",top:0,right:20,fontSize:23,cursor:"pointer"}}></i>
          
          <p style={{fontSize:22,marginLeft:-20}}> Your Cart is Empty</p>
          <img src='./cart.gif' alt="" className='empty_img' style={{width:"5rem",padding:10,marginLeft:20}}/>
        </div>
        }
         
       
      </Menu>
      </Navbar>
      {/* <pre>{JSON.stringify(getData)}</pre> */}

    </>
  )
}

export default Header




