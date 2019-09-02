import React from 'react';
import PropTypes from 'prop-types';
import ProfilePostsComponent from '../components/ProfilePostsComponent';
import { profilePersonalPosts } from '../../../mocks';

const onPressDetachedLike = () => {};

const onPressOthers = () => {};

const ProfilePostsContainer = ({
  navigation,
  // dispatch, creators, personReducer,
  t,
}) => {
  const {
    state: {
      params: {
        params: { index },
      },
    },
  } = navigation;

  return (
    <ProfilePostsComponent
      t={t}
      initialScrollIndex={index}
      data={profilePersonalPosts}
      onPressDetachedLike={onPressDetachedLike}
      onPressOthers={onPressOthers}
    />
  );
};

ProfilePostsContainer.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({ params: PropTypes.shape({ index: PropTypes.number.isRequired }) }),
    }),
  }).isRequired,
  // dispatch: PropTypes.func.isRequired,
  // creators: PropTypes.shape({}).isRequired,
  // personReducer: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfilePostsContainer;
