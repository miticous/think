import React from 'react';
import ProfileContainer from './containers/ProfileContainer';
import ProfileEditContainer from './containers/ProfileEditContainer';

export const Profile = props => <ProfileContainer {...props} />;

export const ProfileEdit = props => <ProfileEditContainer {...props} />;
