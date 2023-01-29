import { useDispatch, useSelector } from 'react-redux';
import { getClicksValue, update } from 'redux/slices/clicksSlice';

export const ClickBar = () => {
  const numberOfClicks = useSelector(getClicksValue);
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(update())}>
        Number of clicks {numberOfClicks}
      </button>
    </>
  );
};
