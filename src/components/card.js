import React from "react"
import PropTypes from "prop-types"
import moduleStyle from "./card.module.css"

const CardHeaderText = ({children}) => (
  <h2 className={moduleStyle.headerText}>
    {children}
  </h2>
)

const CardSecondaryText = ({children}) => (
  <h2 className={moduleStyle.secondaryText}>
    {children}
  </h2>
)

const CardSupportingText = ({children}) => (
  <p className={moduleStyle.supportingText}>
    {children}
  </p>
)

const Card = ({children}) => {
  return (
    <div className={moduleStyle.card}>
      {children}
    </div>
  )
}

Card.propTypes = {}

Card.defaultProps = {}

export default Card
export {Card, CardHeaderText, CardSecondaryText, CardSupportingText}