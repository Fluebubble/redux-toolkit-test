import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/slices/userSlice';

export const UserMenu = () => {
  const login = useSelector(state => state.login);
  console.log(login);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <>
          {login} <button onClick={() => dispatch(logOut())}>Logout</button>
        </>
      </div>
    </>
  );
};
