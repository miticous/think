import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from '../components/ProfileComponent';
import { profileSpotLights, profilePersonalImages, profileTaggedImages } from '../../../mocks';

// eslint-disable-next-line no-unused-vars
const ProfileContainer = ({ navigation, dispatch, creators, personReducer, t }) => {
  const [navigationState, setNavigationState] = useState({
    index: 0,
    routes: [{ key: `personal` }, { key: `tagged` }],
  });

  return (
    <ProfileComponent
      t={t}
      profileSpotLights={profileSpotLights}
      profilePersonalImages={profilePersonalImages}
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
