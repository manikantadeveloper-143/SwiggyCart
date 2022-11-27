import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { ADD, REMOVE } from '../redux/actions/action';
import {DLT} from '../redux/actions/action';
import './style.css'

const CardsDetails = () => {
  const [data, setData] = useState([])



  const { id } = useParams()

  const getdata = useSelector((state) => state.cartReducer.carts)
  // console.log(getdata)

  const dispatch = useDispatch()

  const clickHandler=(element)=>{
    // console.log(element)
        dispatch(ADD(element))
  }

  const remove=(item)=>{
    dispatch(REMOVE(item))
  }

  const dlt = (id) => {
    dispatch(DLT(id))
    history('/')
  }

  const history=useNavigate()

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id == id
    })
    setData(compareData)
  }


  useEffect(() => {
    compare()

  }, [id])
  return (
    <>
      <div className='container mt-2 '>
        <h2 className='text-center'>Item Details Page</h2>

        <section className='container mt-3'>
          <div className='itemdetails'>
            {
              data.map((ele, id) => {
                return (
                  <React.Fragment key={ele.id}>
                    <div className='items_img ms-3'>
                      <img src={ele.imgdata} />

                    </div>
                    <div className='details'>
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurent</strong> : {ele.rname}</p>
                            <p><strong>Price</strong> :₹ {ele.price}</p>
                            <p><strong>Dishes</strong> : {ele.address}</p>
                            <p><strong>Total</strong> :₹ {ele.price *ele.qnty}</p>
                            <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:"100",cursor:"pointer",background:"#ddd",color:"#111"}}>
                               <span style={{fontSize:24}} onClick={ele.qnty<=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                               <span style={{fontSize:22}}>{ele.qnty}</span>
                               <span style={{fontSize:24}} onClick={()=>clickHandler(ele)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating : </strong>  <span style={{ backgroundColor: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★</span></p>
                            <p><strong>Order Review: </strong> <span >{ele.somedata}</span></p>
                            <p><strong>Remove: </strong><span><i className='fas fa-trash' onClick={()=>dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i></span></p>

                          </td>
                        </tr>
                      </Table>
                    </div>

                  </React.Fragment>
                )
              })
            }


          </div>
        </section>
      </div>

    </>
  )
}

export default CardsDetails
