import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookFormClass() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);//you can see the data from the input printed to the console



  return (
    <>
    <h1>React Hook Form - class example</h1>
     {/*"handleSubmit" will validate your inputs before invoking "onSubmit"*/ }
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} />
        <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>
        <input type="submit" />
    </form>
    </>
  );
}