import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from '../components/ProfileComponent';
import { profileSpotLights, profilePersonalPosts, profileTaggedImages } from '../../../mocks';

// eslint-disable-next-line no-unused-vars
const ProfileContainer = ({ navigation, dispatch, creators, personReducer, t }) => {
  const [navigationState, setNavigationState] = useState({
    index: 0,
    routes: [{ key: `personal` }, { key: `tagged` }],
  });

  return (
    <ProfileComponent
      t={t}
      navigation={navigation}
      profileSpotLights={profileSpotLights}
      profilePersonalPosts={profilePersonalPosts}
      profileTaggedImages={profileTaggedImages}
      navigationState={navigationState}
      setNavigationState={setNavigationState}
    />
  );
};

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  creators: PropTypes.shape({}).isRequired,
  personReducer: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfileContainer;
