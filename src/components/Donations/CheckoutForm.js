import React from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import axios from 'axios';


const CheckoutForm = ({amount,setAmount}) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
  
      const {error,paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      });
  
      if(!error){
      const { id } = paymentMethod;
  
      const {data} = await axios.post('http://localhost:3001/api/checkout', {
          id,
          amount: (amount * 100)
        });
      
      // console.log(data);
    
    }
  
    }
  
  
    return (
        // <form onSubmit={handleSubmit} className="card card-body" >
        // <img src="https://images.unsplash.com/photo-1459682687441-7761439a709d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVja3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="img-fluid" />
        
        // <h3 className="text-center my-2"> $ {amount} </h3>
        
        // <button onClick={ () => setAmount(100) } > 100</button>
        // <button onClick={ () => setAmount(200) } > 200</button>
        // <button onClick={ () => setAmount(500) } > 500</button>
        // <button onClick={ () => setAmount(1000) } > 1000</button>
    
        // <div className="form-group">
        // <CardElement className="form-control"/>
        // </div>
        // <button className="btn btn-success">
        //     Donar
        // </button>
        // </form>

<div className="grid md:grid-cols-2">
    <div className="col-span-1">

      <h2 className="text-5xl	text-center	text-purple-700 font-bold">1000</h2>

      <div className="ml-5 mt-5 w-3/4 px-2 py-2 bg-gray-100 rounded-md shadow-md">
       <div className="grid grid-cols-2">
         <div className="col-span-1">
          <p className="font-bold">Luis Rojas</p>
         </div>
         <div className="col-span-1">
          <p className="text-right text-purple-600 font-bold">$ 1000</p>
         </div>
       </div>
      
       <small>Un mensaje de felicitacion</small> 
        
      </div>

    </div>

    <div className="col-span-1 ">

      <h1 className="md:text-4xl	text-xl	 text-center			 my-2 mx-2 font-bold">Donar ${amount}</h1>
      <div className="mx-8 md:mx-0">
        <button onClick={ () => setAmount(100) }   className="px-4 py-4 font-bold  bg-gray-300 w-32 inline-block mx-2 my-2 rounded-lg	">100 MXN</button>
        <button onClick={ () => setAmount(200) }   className="px-4 py-4 font-bold  bg-gray-300 w-32 inline-block mx-2 my-2 rounded-lg	">200 MXN</button>
        <button onClick={ () => setAmount(500) }   className="px-4 py-4 font-bold  bg-gray-300 w-32 inline-block mx-2 my-2 rounded-lg	">500 MXN</button>
        <button onClick={ () => setAmount(1000) }  className="px-4 py-4 font-bold  bg-gray-300 w-32 inline-block mx-2 my-2 rounded-lg	">1000 MXN</button>
      </div>

    {/* <input type="text" className="w-3/4 border-black bg-gray-200 rounded-lg	mt-3 ml-3 p-2" placeholder="Ingresa otra cantidad" /> */}
        <CardElement  className="w-10/12 border-black bg-gray-200 rounded-lg mt-3 ml-3 p-2" />
    <textarea  className="w-10/12  border-black bg-gray-200 rounded-lg	mt-3  ml-3 p-2" placeholder="Agrega un mensaje" name="" id="" cols="20" rows="5"></textarea>
    <button  className="block mx-3 bg-purple-500 hover:bg-purple-600 px-5 py-3 rounded text-white font-normal">Donar</button>
  </div>
  
  </div>


    )
}

export default CheckoutForm