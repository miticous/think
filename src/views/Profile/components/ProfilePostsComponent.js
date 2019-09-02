import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import PostBox from '../../../assets/theme/components/PostBox';

const ProfilePostsComponent = ({
  t,
  data,
  initialScrollIndex,
  onPressDetachedLike,
  onPressOthers,
}) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <PostBox
        t={t}
        data={item}
        onPressDetachedLike={onPressDetachedLike}
        onPressOthers={onPressOthers}
      />
    )}
    initialScrollIndex={initialScrollIndex}
    getItemLayout={(item, index) => ({
      length: Dimensions.get(`window`).height,
      offset: Dimensions.get(`screen`).height * index * 0.95,
      index,
    })}
  />
);

ProfilePostsComponent.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  initialScrollIndex: PropTypes.number.isRequired,
  onPressDetachedLike: PropTypes.func.isRequired,
  onPressOthers: PropTypes.func.isRequired,
};

export default ProfilePostsComponent;
