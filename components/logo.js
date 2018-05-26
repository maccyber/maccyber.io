import { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  componentDidMount () {
    document.addEventListener('mousemove', this.onMouseMove)
  }

  componentWillUnmount () {
    document.removeEventListener('mousemove', this.onMouseMove)
  }

  onMouseMove (e) {
    const slowDownX = 20
    const centerOfScreenX = window.innerWidth / 2
    const mouseX = e.screenX
    const shiftX = (mouseX - centerOfScreenX) / slowDownX
    this.setState({ shiftX })
  }

  render () {
    return (
      <div>
        <img src='static/logo.png' alt='square' />
        <style jsx>
          {`
            img {
              width: 200px;
              height: auto;
              position: relative;
              display: block;
              margin-right: auto;
              margin-left: auto;
              left: ${this.state.shiftX}px
            }
          `}
        </style>
      </div>
    )
  }
}
