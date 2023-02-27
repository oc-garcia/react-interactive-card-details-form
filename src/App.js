import "./App.css";

function App() {
  return (
    <main>
      <div class="start__status">
        <section class="card__container">
          <div class="card__front">
            <img src="images/card-logo.svg" alt="card logo" class="card__logo" />
            <h1 class="card__number" id="card__number">
              0000 0000 0000 0000
            </h1>
            <div class="card__details">
              <p class="card__name" id="card__name">
                Jane Appleseed
              </p>
              <div class="card__date-container">
                <p class="card__date" id="card__month">
                  00
                </p>
                <p class="card__date">/</p>
                <p class="card__date" id="card__year">
                  00
                </p>
              </div>
            </div>
          </div>
          <div class="card__back">
            <p class="card__security-nr" id="card__cvc">
              000
            </p>
          </div>
        </section>
        <section class="form__container" id="form">
          <label class="form__name-label" for="form__name">
            Cardholder Name
          </label>
          <input type="text" id="form__name" placeholder="e.g. Jane Appleseed" required />
          <span class="form__name-error" id="span__name"></span>
          <label class="form__number-label" for="form__number">
            Card Number
          </label>
          <input type="number" id="form__number" placeholder="e.g. 1234 5678 9123 0000" required />
          <span class="form__name-error" id="span__number"></span>
          <div class="flex__container">
            <div class="labels">
              <label class="date__label">Exp. Date (MM/YY)</label>
              <div class="flex__item">
                <input type="number" id="form__date-month" placeholder="MM" min="01" max="12" required />
                <input type="number" id="form__date-year" placeholder="YY" min="22" max="40" required />
              </div>
              <span class="form__name-error" id="span__date"></span>
            </div>
            <div class="inputs">
              <label class="cvc__label" for="form__cvc">
                CVC
              </label>
              <input type="number" id="form__cvc" placeholder="e.g. 123" required />
              <span class="form__name-error" id="span__cvc"></span>
            </div>
          </div>
          <button class="form__submit" type="submit" id="btn__submit">
            Confirm
          </button>
        </section>
        <section class="hide__container" id="thanks__card">
          <img src="images/icon-complete.svg" alt="" />
          <h2 class="completed__title">Thank you!</h2>
          <p class="completed__text">We've added your card details</p>
          <button class="completed__submit" type="submit" id="reset">
            Continue
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
