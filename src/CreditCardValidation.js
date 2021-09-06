import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function CreditCardValidation() {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);//you can see the data from the input printed to the console
  
  
  
    return (
      <>
      <h1>Credit card validation Homework</h1>
       {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/ }
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>Enter Card-Number<input {...register("Card-Number", { required: "This fiels is required." })} /></div>
          <ErrorMessage errors={errors} name="Card-Number" />
          <div>Enter Expiry-Date<input {...register("Expiry-Date", { required: "This field is required." })} /></div>
          <ErrorMessage errors={errors} name="Expiry-Date" />
          <div>Enter CVV <input {...register("CVV", { required: "This is field required." })} /></div>
          <ErrorMessage errors={errors} name="CVV" />
          
          
          
          <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      />

          <input type="submit" />
      </form>
      </>
    );
  }

  /**4242424242424242 Visa
4000056655665556 Visa (debit)
5555555555554444 Mastercard
2223003122003222 Mastercard (2-series)
5200828282828210 Mastercard (debit)
5105105105105100 Mastercard (prepaid)
378282246310005 American Express
371449635398431 American Express
6011111111111117 Discover
6011000990139424 Discover
3056930009020004 Diners Club
36227206271667 Diners Club (14 digit card)
3566002020360505 JCB
6200000000000005 UnionPay*/