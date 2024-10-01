import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { spacing } from "../../theme/theme";
import ScreenWrapper from "../ScreenWrapper";
import ActionButtonsSection from "./ActionButtonsSection";
import TitleSection from "./TitleSection";
import SpottiDescriptionSection from './SpottiDescriptionSection';
import Divider from "../../ui/Divider";
import SpottiRatingSection from "./SpottiRatingSection";
import ImagesSection from "./ImagesSection";

const SpottiFullView = ({ route }) => {
const { spotti: { 
  id, 
  name,
  tags,
  rating, 
  hoursofOperation, 
  category, 
  description, 
  bestTimeToVisit, 
  pictures
} } = route.params || {};

  return (
    <ScreenWrapper style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Action Buttons Section */}
        <View style={styles.sectionPadding}>
          <ActionButtonsSection name={name} id={id} />
        </View>
        {/* Images Section*/}
        <View style={styles.sectionPadding}>
          <ImagesSection images={pictures} />
        </View>
        {/* Title Section */}
        <View style={styles.sectionPadding}>
          <TitleSection
            title={name}
            rating={rating}
            category={category}
            hoursofOperation={hoursofOperation}
            bestTimeToVisit={bestTimeToVisit}
            tags={tags}
          />
        </View>
        <View style={styles.sectionPadding}>
          <Divider />
        </View>
        {/* Spotti Description Section */}
        <View style={styles.sectionPadding}>
          <SpottiDescriptionSection description={description} />
        </View>
        {/* Spotti Rating Section*/}
        <View style={styles.sectionPadding}>
          <SpottiRatingSection rating={rating} />
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionPadding: {
    paddingBottom: spacing.xlarge
  },
})

export default SpottiFullView;