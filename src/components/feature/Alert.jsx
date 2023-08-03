import React,{ useEffect} from 'react'
import toast, { Toaster } from 'react-hot-toast';


function Alert(props) {
    const notify = () => toast(props.msg);

    useEffect(() => {
        notify(); 
  
      },[]);
  return (
    <div>
    
    <Toaster />
  </div>
  )
}

export default Alert