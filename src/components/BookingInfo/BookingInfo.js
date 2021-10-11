import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./BookingInfo.css";
const BookingInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="booking">
      <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.exampleRequired && (
          <span className="error">This field is required</span>
        )}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input placeholder="Phone" defaultValue="" {...register("phone")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default BookingInfo;
