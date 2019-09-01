import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/app';

const MediaGrid = props => {
  const { data, onPressItem } = props;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.mediaGrid}
            activeOpacity={1}
            onPress={() => onPressItem({ item, index })}
          >
            <Image source={{ uri: item.mediaUrl }} style={styles.defaultImage} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

MediaGrid.defaultProps = {
  onPressItem: () => false,
};

MediaGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onPressItem: PropTypes.func,
};

export default MediaGrid;
