import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn, logOut } from 'redux/slices/userSlice';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    const form = e.target;
    e.preventDefault();
    dispatch(logIn(form.elements.login.value));
    console.log(form.elements.login.value);
    form.reset();
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="login" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
};
