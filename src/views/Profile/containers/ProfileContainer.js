import React from 'react';
import PropTypes from 'prop-types';
import ProfileComponent from '../components/ProfileComponent';

const ProfileContainer = ({
  navigation,
  dispatch,
  creators,
  personReducer
}) => (
  <ProfileComponent
    onPress={() => navigation.navigate(`ProfileEdit`)}
    onPress2={() => dispatch(creators.setMessage(`PRESS ME`))}
    message={personReducer.message}
  />
);

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  creators: PropTypes.shape({}).isRequired,
  personReducer: PropTypes.shape({}).isRequired,
};

export default ProfileContainer;
