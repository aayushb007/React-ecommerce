import React,{useState} from 'react'

function ProductItem(props) {
 
  const [showDetails, setShowDetails] = useState(false);
const handleToggleDetails = () => {
  setShowDetails(!showDetails);
};

const addCart = async() => {
  const response = fetch(`http://localhost:3000/add-to-cart/${props.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
   
  })
  const data = await response;
  if(data.status){
    alert('Added to cart');
  }
  else{
      alert('Failed to add to cart');
    }

}
  return (
    <>
      <div className='col-md-4'>
        <div class="card my-2"  >
          <img src={props.product.image} onClick={handleToggleDetails} class="card-img-top" alt="..." />
          <div class="card-body">
            <h2 class="card-title">{props.product.title} &nbsp;&nbsp;&nbsp; <span className='badge bg-secondary mx-6 px-4'>₹{props.product.price}</span> </h2>
            <h2 class="card-text"></h2>
            {
            showDetails && (
                <>
                <button className="btn btn-sm  rounded-pill btn-success mx-1">Pay Now</button>

                <button className="btn btn-sm rounded-pill btn-warning mx-2" onClick={addCart} >Add to Cart</button>
                </>
              )}
            
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
        </div>
       
      



    </>
  )
}

export default ProductItem