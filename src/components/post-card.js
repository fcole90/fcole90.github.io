import React from "react"
import PropTypes from "prop-types"
import Card, { CardHeaderText, CardSecondaryText, CardSupportingText } from "./card"

const PostCard = (props) => {
  return (
    <Card>
      <CardHeaderText>{props.title}</CardHeaderText>
      <CardSecondaryText>{`Posted on: ${props.date}`}</CardSecondaryText>
      <CardSupportingText>{props.excerpt}</CardSupportingText>
    </Card>
  )
}

PostCard.propTypes = {}

PostCard.defaultProps = {}

export default PostCard