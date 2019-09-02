import React from 'react';
import { View, Text } from 'react-native';
import { isEmpty, not } from 'ramda';
import PropTypes from 'prop-types';
import styles, { constants } from '../styles/app';
import CircledImage from './CircledImage';

const getTopLikes = data => {
  if (not(isEmpty(data))) {
    return data.map(like => {
      const { mainImage, username } = like;

      return (
        <View key={username} style={{ flex: 1 }}>
          <CircledImage url={mainImage} size={constants.smallIconSize} color="#fff" />
        </View>
      );
    });
  }
  return [];
};

const getDetachedLike = data => {
  if (not(isEmpty(data))) {
    return data[0].username;
  }
  return ``;
};

const LikeBox = ({ t, data, onPressDetachedLike, onPressOthers }) => (
  <View style={styles.horizontalItemsContainer}>
    <View style={[styles.horizontalItemsContainer, styles.centeredItemsContainer, { flex: 1 }]}>
      {getTopLikes(data)}
    </View>
    <View style={[styles.centeredItemsContainer, { flex: 5, marginLeft: 15 }]}>
      <Text>
        {t(`app:liked_by`)}
        {` `}
        <Text onPress={() => onPressDetachedLike(data)} style={{ fontWeight: `bold` }}>
          {getDetachedLike(data)}
        </Text>
        {` `}
        {t(`app:and`)}
        {` `}
        <Text onPress={onPressOthers} style={{ fontWeight: `bold` }}>
          {t(`app:others`)}
        </Text>
      </Text>
    </View>
  </View>
);

LikeBox.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPressDetachedLike: PropTypes.func.isRequired,
  onPressOthers: PropTypes.func.isRequired,
};

export default LikeBox;
