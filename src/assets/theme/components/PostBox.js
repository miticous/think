import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Dimensions, Text } from 'react-native';
import styles from '../styles/app';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const PostBox = ({ data }) => {
  const { mediaUrl } = data;
  const boxHeight = Dimensions.get(`window`).height * 0.95;

  return (
    <View style={{ flex: 1, height: boxHeight }}>
      <View style={[styles.defaultViewBox, styles.containerFluid, { paddingVertical: 0, flex: 1 }]}>
        <PostHeader {...data} />
      </View>
      <View style={[{ flex: 6 }]}>
        <Image source={{ uri: mediaUrl }} style={styles.fullImage} />
      </View>
      <View style={[styles.containerFluid, { flex: 3 }]}>
        <PostFooter />
      </View>
      <View>
        <Text>TODO: COMMENTS</Text>
      </View>
    </View>
  );
};

PostBox.propTypes = {
  data: PropTypes.shape({ mediaUrl: PropTypes.string }).isRequired,
};

export default PostBox;
