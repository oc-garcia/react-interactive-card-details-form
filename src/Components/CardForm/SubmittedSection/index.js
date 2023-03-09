import React from 'react'
import styles from './Submitted.module.css'
import completedLogo from './icon-complete.svg'

export default function SubmittedSection() {
  return (
    <section className={styles.thanksContainer}>
      <img src={completedLogo} alt='Completed logo'/>
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button>Continue</button>
    </section>
  )
}
