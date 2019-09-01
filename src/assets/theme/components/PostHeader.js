import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import CircledImage from './CircledImage';
import styles, { constants } from '../styles/app';
import Icon from './Icon';

const PostHeader = ({ authorProfileImage, authorUserName, location }) => (
  <View style={[styles.horizontalItemsContainer, styles.centeredItemsContainer]}>
    <View style={{ flex: 1.2 }}>
      <CircledImage url={authorProfileImage} size={35} color={constants.primary} />
    </View>
    <View style={{ flex: 5 }}>
      <Text style={styles.mediumBoldText}>{authorUserName}</Text>
      <Text style={styles.lowerDefaultText}>{location}</Text>
    </View>
    <View style={[styles.rightedItemsContaner, { flex: 1 }]}>
      <Icon name="More" width={constants.mediumIconSize} height={constants.mediumIconSize} />
    </View>
  </View>
);

PostHeader.propTypes = {
  authorProfileImage: PropTypes.string.isRequired,
  authorUserName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PostHeader;
