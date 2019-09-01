import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
import CircledImage from '../../../assets/theme/components/CircledImage';
import ItemLabel from '../../../assets/theme/components/ItemLabel';
import styles, { constants } from '../../../assets/theme/styles/app';
import SpotLightsCarousel from '../../../assets/theme/components/SpotLightsCarousel';
import DefaultButton from '../../../assets/theme/components/DefaultButton';
import MediaGrid from '../../../assets/theme/components/ MediaGrid';
import TabBar from '../../../assets/theme/components/TabBar';

const ProfileComponent = ({
  t,
  navigationState,
  setNavigationState,
  profileSpotLights,
  profilePersonalPosts,
  profileTaggedImages,
  navigation,
}) => {
  const { navigate } = navigation;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.containerFluid}>
        <View style={styles.horizontalItemsContainer}>
          <CircledImage
            url="https://scontent.fbfh1-1.fna.fbcdn.net/v/t1.0-1/p320x320/65876301_898588210478638_8099955273944268800_n.jpg?_nc_cat=110&_nc_oc=AQmBlAOh2A7pUOR4X-N1_WBSzb_LsMbwfMd_cOghRTS1effEmUh2QSlCFp5yLGPzwQA&_nc_ht=scontent.fbfh1-1.fna&oh=50768f6a3f58adf31cd9d8e8a6f2ca98&oe=5DDD041A"
            size={100}
            color={constants.primary}
          />
          <ItemLabel
            labelText={t(`app:images`)}
            onClick={() => false}
            item={<Text style={styles.profileInteractionsCount}>31</Text>}
          />
          <ItemLabel
            labelText="feeds"
            item={<Text style={styles.profileInteractionsCount}>121</Text>}
          />
          <ItemLabel
            labelText={t(`app:about`)}
            item={<Text style={styles.profileInteractionsCount}>21</Text>}
          />
        </View>
        <View style={styles.defaultViewBox}>
          <Text style={styles.mediumBoldText}>Murilo Medeiros</Text>
        </View>
        <View>
          <Text style={styles.mediumDefaultText}>
            Goianiense, 25{`\n`}Floripa-SC 📍{`\n`}Engenheiro de Software 💻{`\n`}Mid laner 🕹{`\n`}
            Arthur Medeiros 💙{`\n`}“Legends never die...”
          </Text>
        </View>
        <View style={styles.defaultViewBox}>
          <DefaultButton name={t(`app:edit_profile`)} onPress={() => false} />
        </View>
        <View style={styles.defaultViewBox}>
          <SpotLightsCarousel data={profileSpotLights} addSpotlightText={t(`app:new`)} />
        </View>
      </View>
      <TabView
        navigationState={navigationState}
        onIndexChange={index => setNavigationState({ ...navigationState, index })}
        renderScene={SceneMap({
          personal: () => (
            <MediaGrid
              data={profilePersonalPosts}
              onPressItem={params => navigate(`ProfilePosts`, { params })}
            />
          ),
          tagged: () => <MediaGrid data={profileTaggedImages} />,
        })}
        renderTabBar={props => <TabBar {...props} />}
      />
    </ScrollView>
  );
};

ProfileComponent.defaultProps = {
  profileSpotLights: [],
};

ProfileComponent.propTypes = {
  t: PropTypes.func.isRequired,
  profileSpotLights: PropTypes.arrayOf(PropTypes.shape({})),
  navigationState: PropTypes.shape({}).isRequired,
  setNavigationState: PropTypes.func.isRequired,
  profilePersonalPosts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  profileTaggedImages: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default ProfileComponent;
