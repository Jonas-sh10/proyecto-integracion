import {NavLink} from 'react-router-dom';
import './header.css'

const Header = () => {
  const LinkIsActive = (isActive) => {
    return isActive ? 'header-list-link is-active' : 'header-list-link';
  }
  return (
    <header>
        <nav className='header'>
          <NavLink 
            to="/" 
            className='header-logo'> 
                innovative idea project
          </NavLink>
          <ul className='header-nav-list'>
            <NavLink to="/" className = {({isActive}) => LinkIsActive(isActive)} >Home</NavLink>
            <NavLink to="/characters" className = {({isActive}) => LinkIsActive(isActive)}>Characters</NavLink>
            <NavLink to="/episodes" className = {({isActive}) => LinkIsActive(isActive)}>Episodes</NavLink>
            <NavLink to="/locations" className = {({isActive}) => LinkIsActive(isActive)}>Locations</NavLink>
            <NavLink to="/about" className = {({isActive}) => LinkIsActive(isActive)}>About</NavLink>
          </ul>
        </nav>
    </header>
  )
}

export default Header;