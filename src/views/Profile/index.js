import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Creators } from '../../ducks/person';
import ProfileContainer from './containers/ProfileContainer';
import ProfileEditContainer from './containers/ProfileEditContainer';
import ProfilePostsContainer from './containers/ProfilePostsContainer';

export const Profile = props => {
  const PersonReducer = useSelector(state => state.PersonReducer);
  const dispatch = useDispatch(Creators);
  const { t } = useTranslation();

  return (
    <ProfileContainer
      {...props}
      t={t}
      dispatch={dispatch}
      creators={Creators}
      personReducer={PersonReducer}
    />
  );
};

export const ProfileEdit = props => {
  const PersonReducer = useSelector(state => state.PersonReducer);
  const dispatch = useDispatch(Creators);
  const { t } = useTranslation();

  return (
    <ProfileEditContainer
      {...props}
      t={t}
      dispatch={dispatch}
      creators={Creators}
      personReducer={PersonReducer}
    />
  );
};

export const ProfilePosts = props => {
  // const PersonReducer = useSelector(state => state.PersonReducer);
  const dispatch = useDispatch(Creators);
  const { t } = useTranslation();

  return <ProfilePostsContainer {...props} t={t} dispatch={dispatch} creators={Creators} />;
};
