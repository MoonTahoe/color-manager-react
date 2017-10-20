import React from 'react'
import { connect } from 'react-redux'
import { actions } from 'color-manager-redux'
import Trash from 'react-icons/lib/fa/trash'
import './ColorList.css'

const mapStateToProps = ({colors}) => ({colors})

const mapDispatchToProps = dispatch =>
  ({
    onRemoveColor(color) {
        debugger;
        dispatch(actions.removeColor(color))
    }
  })

const ColorListItem = ({name, hex, onSelect=f=>f}) =>
  <li onClick={onSelect}>
    <div className='circle' style={{ backgroundColor: hex }}/>
    <span>{name}</span>
    <span role="button" onMouseUp={onSelect}>
      <Trash />
    </span>
  </li>

const ColorList = ({colors=[], onRemoveColor=f=>f}) =>
  <ul className="color-list">
    {(!colors.length) ?
      <li>No colors listed</li> :
      colors.map((color, i) =>
        <ColorListItem key={i} {...color}
          onSelect={() => onRemoveColor(color.name)}/>
      )
    }
  </ul>

export default connect(mapStateToProps, mapDispatchToProps)(ColorList)
