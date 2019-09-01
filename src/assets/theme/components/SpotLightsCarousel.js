import React from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import CircledImage from './CircledImage';
import { constants } from '../styles/app';
import ItemLabel from './ItemLabel';

const SpotLightsCarousel = ({ data, addSpotlightText }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={{ marginRight: 10 }}>
      <ItemLabel
        item={<CircledImage iconName="Plus" size={60} color={constants.primary} />}
        labelText={addSpotlightText}
      />
    </View>
    <FlatList
      data={data}
      horizontal
      ItemSeparatorComponent={() => <View style={{ marginHorizontal: 5 }} />}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item: { mainImage, title } }) => (
        <ItemLabel
          labelText={title}
          item={<CircledImage url={mainImage} size={60} color={constants.primary} />}
        />
      )}
    />
  </ScrollView>
);

SpotLightsCarousel.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  addSpotlightText: PropTypes.string.isRequired,
};

export default SpotLightsCarousel;
