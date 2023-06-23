import React from "react";
import styles from "./form.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  date: string;
  color: string;
  salary: number;
};

export default function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data);
  const watchSalary: number = watch("salary");

  function getErrorMessage(field: string): React.ReactNode {
    const fieldErrors = (errors as any)[field];

    return fieldErrors ? (
      <span className={styles.form__errorMessage}>{fieldErrors.message}</span>
    ) : null;
  }

  return (
    <section id="form" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <form className={styles.form__form}>
            {/* Name */}
            <label>
              Name:
              <input
                className={`${
                  getErrorMessage("name") ? styles.form__error : ""
                }`}
                type="text"
                {...register("name", { required: "Field required" })}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {getErrorMessage("name")}
            </label>
            {/* Email */}
            <label>
              Email:
              <input
                className={`${
                  getErrorMessage("email") ? styles.form__error : ""
                }`}
                type="email"
                {...register("email", {
                  required: "Field required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {getErrorMessage("email")}
            </label>
            {/* Date of birth */}
            <label>
              Date of birth:
              <input
                className={`${
                  getErrorMessage("date") ? styles.form__error : ""
                }`}
                type="date"
                max={"2023-05-22"}
                {...register("date", { required: "Field required" })}
              />
              {getErrorMessage("date")}
            </label>
            {/* Fav Colour */}
            <label>
              Favourite colour:
              <select
                className={`${
                  getErrorMessage("color") ? styles.form__error : ""
                }`}
                {...register("color", { required: "Field required" })}
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </select>
              {getErrorMessage("color")}
            </label>
            {/* Salary */}
            <label>
              {"Salary expectation:"}
              {watchSalary && <span>{watchSalary}</span>}
              <input
                type="range"
                min="25000"
                max="150000"
                step="5000"
                className={`${
                  getErrorMessage("salary") ? styles.form__error : ""
                }`}
                {...register("salary", { required: "Field required" })}
              ></input>
              {getErrorMessage("salary")}
            </label>
            <button className={styles.form__submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
