import React from 'react';
import { Text, View } from 'react-native';
import CircledImage from '../../../assets/theme/components/CircledImage';
import ItemLabel from '../../../assets/theme/components/ItemLabel';
import styles, { constants } from '../../../assets/theme/styles/app';

const ProfileComponent = () => (
  <View style={styles.containerFluid}>
    <View style={styles.horizontalItemsContainer}>
      <CircledImage
        url="https://scontent.fbfh1-1.fna.fbcdn.net/v/t1.0-1/p320x320/65876301_898588210478638_8099955273944268800_n.jpg?_nc_cat=110&_nc_oc=AQmBlAOh2A7pUOR4X-N1_WBSzb_LsMbwfMd_cOghRTS1effEmUh2QSlCFp5yLGPzwQA&_nc_ht=scontent.fbfh1-1.fna&oh=50768f6a3f58adf31cd9d8e8a6f2ca98&oe=5DDD041A"
        size={120}
        color={constants.primary}
      />
      <ItemLabel
        labelText="Images"
        onClick={() => false}
        item={<Text style={styles.profileInteractionsCount}>31</Text>}
      />
      <ItemLabel
        labelText="Feeds"
        item={<Text style={styles.profileInteractionsCount}>121</Text>}
      />
      <ItemLabel labelText="About" item={<Text style={styles.profileInteractionsCount}>21</Text>} />
    </View>
  </View>
);

ProfileComponent.propTypes = {};

export default ProfileComponent;
