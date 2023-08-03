import React from 'react'

function CartItem(props) {
  return (
    <>
    <div className='container mt-4'>
      
    <div className='row '>
    <div className='col-md-3'><img src={props.item.image} class="card-img-top" alt="..." /><h4 className='mt-2'>{ props.item.title}</h4></div>
  
    <div className='col-md-4'>
    <button type="button" class="btn btn-outline-dark" 
    onClick={()=>{
        props.iQuantity(props.item._id,props.user, props.quantity)
    }}> <i className='fa fa-plus'></i></button>
                    <button type="button" class="btn btn-dark">{props.quantity}</button>
                    <button type="button" class="btn btn-outline-dark" onClick={()=>{
        props.dQuantity(props.item._id,props.user, props.quantity)
    }} >
                    <i className='fa fa-minus'></i></button>
                

    </div>
    https://images.pexels.com/photos/2112648/pexels-photo-2112648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
    <div className='col-md-2'><span className='badge bg-secondary mx-6 px-4'>₹{props.item.price * props.quantity}</span></div>
    
    </div>
    </div>
    </>
  )
}

export default CartItem