import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
import reusable from "./reusable.style";
import NetworkImage from "../Reusable/NetworkImage";
import HeightSpacer from "../Reusable/HeightSpacer";
import Rating from "../Reusable/Rating";
import ReusableText from "../Reusable/ReusableText";
import WidthSpacer from "../Reusable/WidthSpacer";

const ReusableTile = ({ item, onPress }) => {
  // console.log("Data: ", item.imageUrl);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={reusable.rowWidthSpace("flex-start")}>
        <NetworkImage
          source={item.imageUrl}
          width={80}
          height={80}
          radius={12}
        />

        <WidthSpacer width={15} />

        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={8} />

          <ReusableText
            text={item.location}
            family={"medium"}
            size={14}
            color={COLORS.gray}
          />

          <HeightSpacer height={8} />

          <View style={reusable.rowWidthSpace("flex-start")}>
            <Rating rating={item.rating} />

            <WidthSpacer width={5} />

            <ReusableText
              text={` (${item.review}) `}
              family={"medium"}
              size={14}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
});
