import React from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from '../components/ProfileComponent';
import { profileSpotLights } from '../../../mocks';

// eslint-disable-next-line no-unused-vars
const ProfileContainer = ({ navigation, dispatch, creators, personReducer, t }) => (
  <ProfileComponent t={t} profileSpotLights={profileSpotLights} />
);

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  creators: PropTypes.shape({}).isRequired,
  personReducer: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default ProfileContainer;
