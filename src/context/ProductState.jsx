import React,{useState} from 'react'
import ProductContext from './ProductContext'
function ProductState(props) {
    const apiUrl = 'http://localhost:3000/admin'
    const productInitial = [

    ]
    const getProduct = async()=>{
        const response = await fetch(`${apiUrl}/items`,{
            method:'GET',
            headers:{
                            'Content-Type':'application/json',
                            'Authorization': localStorage.getItem('token')
                    }
        })
        const data = await response.json()
        console.log(data);
        setProducts(data);
    }

    const [products, setProducts] = useState(productInitial);
  return (
    
 
    <ProductContext.Provider value={{ getProduct , products}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState