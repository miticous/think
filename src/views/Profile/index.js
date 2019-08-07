import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../ducks/person';
import ProfileContainer from './containers/ProfileContainer';
import ProfileEditContainer from './containers/ProfileEditContainer';

export const Profile = props => {
  const PersonReducer = useSelector(state => state.PersonReducer);
  const dispatch = useDispatch(Creators);

  return (
    <ProfileContainer
      {...props}
      dispatch={dispatch}
      creators={Creators}
      personReducer={PersonReducer}
    />
  );
};

export const ProfileEdit = props => {
  const PersonReducer = useSelector(state => state.PersonReducer);
  const dispatch = useDispatch(Creators);

  return (
    <ProfileEditContainer
      {...props}
      dispatch={dispatch}
      creators={Creators}
      personReducer={PersonReducer}
    />
  );
};
