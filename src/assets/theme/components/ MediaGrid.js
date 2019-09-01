import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image } from 'react-native';
import styles from '../styles/app';

const MediaGrid = props => {
  const { data } = props;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.mediaGrid}>
            <Image source={{ uri: item.url }} style={styles.defaultImage} />
          </View>
        )}
      />
    </View>
  );
};

MediaGrid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MediaGrid;
