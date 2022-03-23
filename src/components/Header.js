import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ( { title, onAdd, showAdd } ) => {
  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? '#C05C6B' : '#5CC07F'} onClick={onAdd} />)}
    </header>
  )
}

// create default props
Header.defaultProps = {
  title : "Task Tracker"
}

// create own props type
Header.propTypes = {
  title : PropTypes.string.isRequired
}


export default Header;