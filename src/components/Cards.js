import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import CardsData from './CardsData';
import './style.css'

const Cards = () => {

  const dispatch=useDispatch()

  const [data, setData] = useState(CardsData)
  // console.log(data)


  const clickHandler=(element)=>{
    // console.log(element)
        dispatch(ADD(element))
  }

  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Tejas Recipies</h2>
      
      <div className='row d-flex justify-content-center align-item-center'>
        {
          data.map((element, id) => {
            return (
              <React.Fragment key={element.id}>

                <Card style={{ width: '22rem',border:"none"}} className='mx-2 mt-4 card_style'>
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className='mt-3' />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                        Price: ₹ {element.price}
                    </Card.Text>
                     <div className='button_div d-flex justify-content-center'>
                    <Button variant="primary" className='col-lg-12' onClick={()=>clickHandler(element)}>Add To Cart</Button>
                           
                     </div>
                  </Card.Body>
                </Card>
              </React.Fragment>
            )
          })
        }



      </div>
    </div>
  )
}

export default Cards
