/* eslint-disable react/prop-types */
import React from 'react';
import { PropTypes } from 'prop-types';
import ProfileComponent from '../components/ProfileComponent';

const ProfileContainer = ({ navigation }) => (
  <ProfileComponent onPress={() => navigation.navigate(`ProfileEdit`)} />
);

ProfileContainer.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default ProfileContainer;
