import React, { useState } from "react";
import { StyleSheet, Dimensions, Text } from "react-native";
import { SceneMap, TabView, TabBar } from "react-native-tab-view";
import { colors, fontSize, spacing } from "../theme/theme";
import SavedLists from "../components/SavedSection/SavedLists";
import Downloads from "../components/SavedSection/Downloads";
import ScreenWrapper from "../components/ScreenWrapper";

const ListsRoute = () => <SavedLists />;
const DownloadsRoute = () => <Downloads />;

const renderScene = SceneMap({
  lists: ListsRoute,
  downloads: DownloadsRoute,
});

const SavedScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "lists", title: "Lists" },
    { key: "downloads", title: "Downloads" },
  ]);

  // Customize TabBar
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      indicatorStyle={styles.indicator}
      renderLabel={({ route, focused }) => (
        <Text
          style={{
            color: focused ? colors.offWhiteFont : colors.darkFont,
            fontSize: fontSize.large,
            margin: -10,
            paddingRight: spacing.xxxlarge,
          }}
        >
          {route.title}
        </Text>
      )}
    />
  );

  return (
    <ScreenWrapper>
      <Text style={styles.savedText}>Saved</Text>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={renderTabBar}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  savedText: {
    color: colors.offWhiteFont,
    fontSize: fontSize.xxxlarge,
    marginTop: spacing.xxxxlarge,
    marginBottom: spacing.small,
    marginLeft: spacing.large,
  },
  tabBar: {
    backgroundColor: colors.primaryColor,
  },
  indicator: {
    backgroundColor: colors.spottiDark,
  },
});

export default SavedScreen;
