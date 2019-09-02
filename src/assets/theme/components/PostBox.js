import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Dimensions } from 'react-native';
import styles from '../styles/app';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import LikeBox from './LikeBox';

const PostBox = ({ t, data, onPressDetachedLike, onPressOthers }) => {
  const { mediaUrl, likes } = data;
  const boxHeight = Dimensions.get(`window`).height * 0.95;

  return (
    <View style={{ flex: 1, height: boxHeight }}>
      <View style={[styles.defaultViewBox, styles.containerFluid, { paddingVertical: 0, flex: 1 }]}>
        <PostHeader {...data} />
      </View>
      <View style={[{ flex: 7 }]}>
        <Image source={{ uri: mediaUrl }} style={styles.fullImage} />
      </View>
      <View style={[styles.containerFluid, { flex: 2 }]}>
        <PostFooter />
        <View style={styles.defaultViewBox}>
          <LikeBox
            t={t}
            data={likes}
            onPressDetachedLike={onPressDetachedLike}
            onPressOthers={onPressOthers}
          />
        </View>
      </View>
    </View>
  );
};

PostBox.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.shape({
    mediaUrl: PropTypes.string,
    likes: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
  onPressDetachedLike: PropTypes.func.isRequired,
  onPressOthers: PropTypes.func.isRequired,
};

export default PostBox;
