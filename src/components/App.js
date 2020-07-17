import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const store = useSelector((store) => store);
  console.log('store', store);
  return <div className="container">{loading ? null : 'Redux Polls'}</div>;
}
