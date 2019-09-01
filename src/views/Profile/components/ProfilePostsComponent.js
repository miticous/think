import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import PostBox from '../../../assets/theme/components/PostBox';

const ProfilePostsComponent = ({ data, initialScrollIndex }) => (
  <FlatList
    data={data}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => <PostBox data={item} />}
    initialScrollIndex={initialScrollIndex}
    getItemLayout={(item, index) => ({
      length: Dimensions.get(`window`).height,
      offset: Dimensions.get(`screen`).height * index * 0.95,
      index,
    })}
  />
);

ProfilePostsComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  initialScrollIndex: PropTypes.number.isRequired,
};

export default ProfilePostsComponent;
