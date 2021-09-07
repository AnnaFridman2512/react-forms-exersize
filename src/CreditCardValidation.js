import React from "react";
import { useForm } from "react-hook-form";


export default function CreditCardValidation() {
    const { register, formState: { errors }  , handleSubmit } = useForm();
    const onSubmit = data => console.log(data);//you can see the data from the input printed to the console

    

  
    return (
      <>
      <h1>Credit card validation Homework</h1>
       {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/ }
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>Enter Card-Number
       {/* include validation with required or other standard HTML validation rules */}
       <input {...register("CardNumber", { 
         required: true,
         minLength: 8,
         pattern: /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
          })} 
          />
      {errors?.CardNumber?.type === "required" && <p>This field is required</p>}
      {errors?.CardNumber?.type === "minLength" && (
        <p>Enter at least 8 numbers</p>
      )}
      {errors?.CardNumber?.type === "pattern" && (
        <p>Enter valid card number</p>
      )}
      </div>
      <div>Enter Expiry-Date<input {...register("ExpiryDate", { 
        required: true,
        pattern:/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
      })}
      />
      {errors?.ExpiryDate?.type === "required" && <p>This field is required</p>}
      {errors?.ExpiryDate?.type === "pattern" && (
        <p>Enter valid expiration date: dd/yy</p>
      )}
      </div>
   
      <div>Enter CVV <input {...register("CVV", { 
        required: true,
        minLength:3,
        maxLength:3,
        pattern:/^[0-9]*$/
         })} 
         />
         {errors?.CVV?.type === "required" && <p>This field is required</p>}
         {errors?.CVV?.type === "minLength" && (
        <p>Enter at least 3 numbers</p>
      )}
        {errors?.CVV?.type === "maxLength" && (
        <p>Enter maximum 3 numbers</p>
      )}
        {errors?.CVV?.type === "pattern" && (
          <p>Numbers only!</p>
      )}
      </div>
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

