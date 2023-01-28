import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px',
        borderBottom: '1px solid black',
        marginBottom: 10,
      }}
    >
      <div style={{ display: 'flex', gap: 5 }}>
        <NavLink to="home">Home</NavLink>
        <NavLink to="login">Login</NavLink>
        <NavLink to="dashboard">Dashboard</NavLink>
      </div>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
