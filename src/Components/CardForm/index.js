import styles from "./CardForm.module.css";

import React, { useState } from "react";
import CardLogo from "../../Assets/card-logo.svg";
import { useForm } from "react-hook-form";
import SubmittedSection from "./SubmittedSection";

export default function CardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let [submitted, setSubmitted] = useState(true);

  const onSubmit = () => {
    setSubmitted(true);
  };

  const [inputText, setText] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  return (
    <main className={styles.formContainer}>
      <section className={styles.cardSection}>
        <div>
          <div className={styles.cardFront}>
            <img src={CardLogo} alt="Card logo" className={styles.cardLogo} />
            <p>
              {inputText.number !== ""
                ? inputText.number
                    .split("")
                    .map((d, i) => (i % 4 === 0 ? " " + d : d))
                    .join("")
                    .trim()
                    .slice(0, 19)
                : "0000 0000 0000 0000"}
            </p>
            <div>
              <p>{inputText.name !== "" ? inputText.name : "Jane Appleseed"}</p>
              <p>
                {inputText.month !== "" ? inputText.month.slice(0, 2) : "09"}/
                {inputText.year !== "" ? inputText.year.slice(0, 2) : "24"}
              </p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <p>{inputText.cvc !== "" ? inputText.cvc.slice(0, 3) : "000"}</p>
          </div>
        </div>
      </section>
      { submitted === false ? <section className={styles.formSection}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="form__name">Cardholder Name</label>
          <input
            id="form__name"
            placeholder="e.g. Jane Appleseed"
            className={errors.name ? styles.inputError : styles.inputOk}
            {...register("name", { required: "Can't be blank" })}
            onChange={(e) => {
              setText({
                ...inputText,
                name: e.target.value,
              });
            }}
          />
          <span>{errors.name?.message}</span>
          <label htmlFor="form__number">Card Number</label>
          <input
            id="form__number"
            placeholder="e.g. 1234 5678 9123 0000"
            className={errors.creditcard ? styles.inputError : styles.inputOk}
            {...register("creditcard", {
              required: "Can't be blank",
              pattern: { value: /^[0-9]/i, message: "Wrong format, numbers only" },
              maxLength: { value: 16, message: "Too long for a Credit Card" },
              minLength: { value: 16, message: "Too short for a Credit Card" },
            })}
            onChange={(e) => {
              setText({
                ...inputText,
                number: e.target.value,
              });
            }}
          />
          <span>{errors.creditcard?.message}</span>
          <div className={styles.formSubContainer}>
            <div>
              <label>Exp. Date (MM/YY)</label>
              <div>
                <input
                  placeholder="MM"
                  className={errors.month ? styles.inputError : styles.inputOk}
                  {...register("month", {
                    required: "Month can't be blank",
                    min: { value: 1, message: "Check month input" },
                    max: { value: 12, message: "Check month input" },
                    pattern: { value: /^[0-9]/i, message: "Wrong format, numbers only" },
                  })}
                  onChange={(e) => {
                    setText({
                      ...inputText,
                      month: e.target.value,
                    });
                  }}
                />
                <input
                  type="number"
                  placeholder="YY"
                  className={errors.year ? styles.inputError : styles.inputOk}
                  {...register("year", {
                    required: "Year can't be blank",
                    min: { value: 23, message: "Expired credit card" },
                    pattern: { value: /^[0-9]/i, message: "Wrong format, numbers only" },
                  })}
                  onChange={(e) => {
                    setText({
                      ...inputText,
                      year: e.target.value,
                    });
                  }}
                />
              </div>
              <span>
                {errors.month?.message} {errors.year?.message}
              </span>
            </div>
            <div className={styles.cvcContainer}>
              <label htmlFor="form__cvc">CVC</label>
              <input
                id="form__cvc"
                placeholder="e.g. 123"
                className={errors.cvc ? styles.inputError : styles.inputOk}
                {...register("cvc", {
                  required: "Can't be blank",
                  pattern: { value: /^[0-9]{3,4}$/, message: "Incorrect format" },
                })}
                onChange={(e) => {
                  setText({
                    ...inputText,
                    cvc: e.target.value,
                  });
                }}
              />
              <span>{errors.cvc?.message}</span>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </section> 
      : 
      <SubmittedSection /> }
    </main>
  );
}
