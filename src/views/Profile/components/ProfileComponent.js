import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import CircledImage from '../../../assets/theme/components/CircledImage';

const ProfileComponent = ({ onPress, message, onPress2 }) => (
  <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
    <CircledImage url="https://scontent.fbfh1-1.fna.fbcdn.net/v/t1.0-1/p320x320/65876301_898588210478638_8099955273944268800_n.jpg?_nc_cat=110&_nc_oc=AQmBlAOh2A7pUOR4X-N1_WBSzb_LsMbwfMd_cOghRTS1effEmUh2QSlCFp5yLGPzwQA&_nc_ht=scontent.fbfh1-1.fna&oh=50768f6a3f58adf31cd9d8e8a6f2ca98&oe=5DDD041A" />
  </View>
);

ProfileComponent.propTypes = {
  onPress: PropTypes.func.isRequired,
  onPress2: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default ProfileComponent;
