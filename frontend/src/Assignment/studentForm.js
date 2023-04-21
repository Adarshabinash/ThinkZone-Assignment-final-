import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function StudentForm({ closeForm, onSubmit, student }) {
  const schema = yup.object().shape({
    name: yup.string().required("This field is required").min(4),
    gender: yup.string().required("Must have a gender"),
    class: yup.string().required("Must have a registered class"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { ...student },
  });

  return (
    <div>
      <h1>This is a student registration form</h1>
      <br /> <hr />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Fullname" {...register("name")} />{" "}
        <p>{errors.fullname?.message}</p>
        <br />
        <label>Male</label>
        <input type="radio" {...register("gender")} value="male" />
        <label>Female</label>
        <input type="radio" {...register("gender")} value="female" /> <br />
        <p>{errors.gender?.message}</p>
        <select {...register("class")}>
          <option value="Class-I">Class-I</option>
          <option value="Class-II">Class-II</option>
          <option value="Class-III">Class-III</option>
          <option value="Class-IV">Class-IV</option>
          <option value="Class-V">Class-V</option>
        </select>
        <p>{errors.class?.message}</p>
        <br />
        <button>Submit</button>
        <button onClick={() => closeForm()}>Cancel</button>
      </form>
    </div>
  );
}

export default StudentForm;
