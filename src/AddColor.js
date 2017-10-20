import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'color-manager-redux'
import './AddColor.css'

const mapDispatchToProps = dispatch =>
  ({
    onNewColor(name, hex) {
      dispatch(actions.addColor(name, hex))
    }
  })

const AddColor = ({ onNewColor=f=>f }) => {

  let _name, _hex

  const submit = e => {
    e.preventDefault()
    onNewColor(_name.value, _hex.value)
    _name.value = ''
    _hex.value = '#000000'
    _name.focus()
  }

  return (
    <form className="add-color" onSubmit={submit}>
      <input ref={input => _name = input}
        type="text"
        placeholder="color name..." required/>
      <input ref={input => _hex = input}
        type="color" required/>
      <button>ADD</button>
    </form>
  )

}

export default connect(null, mapDispatchToProps)(AddColor)
