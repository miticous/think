/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import ProfileEditComponent from '../components/ProfileEditComponent';

const ProfileEditContainer = ({
  // navigation,
  dispatch,
  creators: { setMessage },
  personReducer: { message },
}) => <ProfileEditComponent onPress={() => dispatch(setMessage(`Press Me`))} message={message} />;

ProfileEditContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  creators: PropTypes.shape({}).isRequired,
  navigation: PropTypes.shape({}).isRequired,
  personReducer: PropTypes.shape({}).isRequired,
};

export default ProfileEditContainer;
