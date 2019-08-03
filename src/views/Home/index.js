/* eslint-disable import/no-named-as-default */
import React from 'react';
import { connect } from 'react-redux';
import { Creators as PersonActions } from '../../ducks/person';
import bindActionCreatorsExt from '../../helpers/bindActionCreatorsExt';
import HomeComponent from './component';

const ActionCreators = Object.assign({}, { personActions: PersonActions });

const Home = props => <HomeComponent {...props} />;

const mapStateToProps = state => ({
  message: state.PersonReducer.message,
});

const mapDispatchToProps = dispatch => bindActionCreatorsExt(ActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
