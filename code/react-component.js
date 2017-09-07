// @flow

import React from 'react'

type Props = {
  label: string,
  pressed: boolean,
  onchange: boolean => void,
}

type State = {
  pressed: boolean
}

export default class ToggleButton extends React.Component<Props, State> {
  state = { pressed: false }

  handleClick = () => {
    this.setState({ pressed: !this.state.pressed }, () => {
      this.props.onchange(this.state.pressed)
    })
  }

  render() {
    return <button onclick={this.handleClick}>
      {this.props.label}
    </button>
  }
}
