import styles from "./CardForm.module.sass";

import React from "react";
import { ReactComponent as CardLogo } from "../../Assets/card-logo.svg";

export default function CardForm() {
  return (
    <main className={styles.formContainer}>
      <section className={styles.cardSection}>
        <div>
          <div className={styles.cardFront}>
            <CardLogo />
            <p>4591 6489 6389 101E</p>
            <div>
              <p>Felicia Leire</p>
              <p>09/00</p>
            </div>
          </div>
          <div className={styles.cardBack}>
            <p>000</p>
          </div>
        </div>
      </section>
      <section className={styles.formSection}>
        <form className={styles.form}>
          <label htmlFor="form__name">Cardholder Name</label>
          <input type="text" id="form__name" placeholder="e.g. Jane Appleseed" />
          <span></span>
          <label htmlFor="form__number">Card Number</label>
          <input type="number" id="form__number" placeholder="e.g. 1234 5678 9123 0000" />
          <span></span>
          <div>
            <div>
              <label>Exp. Date (MM/YY)</label>
              <div>
                <input type="number" placeholder="MM" />
                <input type="number" placeholder="YY" />
              </div>
              <span></span>
            </div>
            <div>
              <label htmlFor="form__cvc">CVC</label>
              <input type="number" id="form__cvc" placeholder="e.g. 123" />
              <span></span>
            </div>
          </div>
          <button>Confirm</button>
        </form>
      </section>
    </main>
  );
}
