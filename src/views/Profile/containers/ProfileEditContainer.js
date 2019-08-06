/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import { Creators as PersonActions } from '../../../ducks/person';
import bindActionCreatorsExt from '../../../helpers/bindActionCreatorsExt';
import ProfileEditComponent from '../components/ProfileEditComponent';

const ActionCreators = Object.assign({}, { personActions: PersonActions });

const ProfileEditContainer = props => <ProfileEditComponent {...props} />;

const mapStateToProps = state => ({
  message: state.PersonReducer.message,
});

const mapDispatchToProps = dispatch => bindActionCreatorsExt(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEditContainer);
