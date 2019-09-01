import React from 'react';
// import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles, { constants } from '../styles/app';
import Icon from './Icon';

const PostFooter = () => (
  <View style={styles.horizontalItemsContainer}>
    <View style={{ flex: 1 }}>
      <Icon
        name="Hearth"
        width={constants.mediumIconSize}
        height={constants.mediumIconSize}
        fill="#3b3b3b"
      />
    </View>
    <View style={{ flex: 1 }}>
      <Icon
        name="Comment"
        width={constants.mediumIconSize}
        height={constants.mediumIconSize}
        fill="#3b3b3b"
      />
    </View>
    <View style={{ flex: 1, flexGrow: 4 }}>
      <Icon
        name="Share"
        width={constants.mediumIconSize}
        height={constants.mediumIconSize}
        fill="#3b3b3b"
      />
    </View>
    <View style={{ flex: 1, alignItems: `flex-end` }}>
      <Icon
        name="Bookmark"
        width={constants.mediumIconSize}
        height={constants.mediumIconSize}
        fill="#3b3b3b"
      />
    </View>
  </View>
);

export default PostFooter;
