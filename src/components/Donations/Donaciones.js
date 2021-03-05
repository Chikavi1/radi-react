import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js';
import {  Elements } from '@stripe/react-stripe-js'

import { withRouter } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_6Lh2y6pOLjooJHlRimCh1U7J00klDjsUau');


export const Donaciones = ({history}) => {

  const [ amount, setAmount] = useState(100);
  console.log(amount);

    return (
      <Elements stripe={stripePromise}>
        <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm amount={amount} setAmount={setAmount}/>
          </div>
        </div>
        </div>
      </Elements>
          
    )
}

export default withRouter(Donaciones)