import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {
  /* Default accounts-react button element */

  render () {
    const { onClick, text, social } = this.props

    return (
      <button onClick={onClick} className={ social ? 'social-btn ' + social : ''}>
        {social ? 'Continue with ' + text[0].toUpperCase() + text.substr(1)
        : text}
      </button>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
