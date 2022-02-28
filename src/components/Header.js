// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();
  return (
    <header>
      <p>Select your Games!</p>
      {/* <NavLink to="ping-pong" className={({ isActive }) => isActive ? 'active' : ''}>PingPong</NavLink>
      <NavLink to="tetris" className={({ isActive }) => isActive ? 'active' : ''}>Tetris</NavLink> */}
      <button onClick={() => { navigate(`/ping-pong`) }}>PingPong</button>
      <button onClick={() => { navigate(`/tetris`) }}>Tetris</button>
    </header>
  )
}

export default Header;