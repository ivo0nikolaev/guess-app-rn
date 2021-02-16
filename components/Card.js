import React from "react";

import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowRadius: 1,
    shadowOffset: {
      width: 0.5,
      height: 2,
    },
    shadowOpacity: 0.26,
    backgroundColor: "white",

    //Because Android
    elevation: 8,

    borderRadius: 10,
  },
});

export default Card;
