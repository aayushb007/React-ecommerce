import React,{useEffect,useState} from 'react'
import CartItem from './CartItem';

function Cart() {
    const [carts, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    let [totalAmount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const getCart = async()=>{
    const response = await fetch(`http://localhost:3000/cart`,{
        method:'GET',
        headers:{
                        'Content-Type':'application/json',
                        'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
    })
    const data = await response.json();
    setTimeout(() => {
    console.log(data);
    setCart(data);
    setLoading(false); 
  }, 1000);
}

const iQuantity = async(index,user,quant)=>{
//   setQuantity(quant);
const newQuant = quant + 1;
  console.log(index,user,quant);
  const body  =JSON.stringify({ id:user,quantity:quant});
  setQuantity(quant ++ )
  console.log(body);
  const response = await fetch(`http://localhost:3000/edit-quant/${index}`,{
    method:'PUT',
    headers:{
                        'Content-Type':'application/json',
                        // 'Authorization': 'Bearer '+localStorage.getItem('token')
                },
    body:JSON.stringify({ id:localStorage.getItem('user'),quantity:quant})
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (data.success) {
    setCart(prevCarts => {
      const updatedCarts = prevCarts.map(cart => {
   
        if (cart._id === user) {
          console.log(cart);
          return { ...cart, quantity: newQuant };
        }
        return cart;
      });
      return updatedCarts;
    });
  }
    

}

const dQuantity = async(index, user, quant)=>{
  console.log(index,user,quant);
  const newQuant = quant - 1;
  const body  =JSON.stringify({ id:user,quantity:quant});
  setQuantity(quant --)
  console.log(body);
  const response = await fetch(`http://localhost:3000/edit-quant/${index}`,{
    method:'PUT',
    headers:{
                        'Content-Type':'application/json',
                        // 'Authorization': 'Bearer '+localStorage.getItem('token')
                },
    body:JSON.stringify({ id:localStorage.getItem('user'),quantity:quant})
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (data.success) {
    setCart(prevCarts => {
      const updatedCarts = prevCarts.map(cart => {
        console.log(cart._id ===user);
        if (cart._id === user) {
          console.log('yaa buddy updated');
          return { ...cart, quantity: newQuant };
        }
        return cart;
      });
      return updatedCarts;
    });
  }
    
}
useEffect(() => {

    getCart();
  },[]);
  useEffect(() => {
    // Calculate the total amount when carts or their quantities change
    const totalPrice = carts.reduce((total, cart) => total + cart.quantity * cart.itemId.price, 0);
    setTotalAmount(totalPrice);
  }, [carts]);

  if (loading) {
    return <h1 className='text-center mt-4'>Loading...</h1>;
  }
  return (
    <div>
       <h2 className='text-center'> <i class="fa fa-shopping-cart fa-3x" ></i> Cart</h2>

      {carts.map(cart => (
        <>
        
        <CartItem item={cart.itemId} user={cart._id} quantity={cart.quantity}  iQuantity={iQuantity} dQuantity={dQuantity} setQuantity={setQuantity}/>
        
        </>
      ))}
      <div className='text-center'>
             <h2>Total: <span className='badge bg-secondary mx-6 px-4'>₹{totalAmount}</span> </h2>
        </div>
    </div>


    
  )
}

export default Cart