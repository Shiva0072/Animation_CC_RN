import { Text, View, Animated, StyleSheet } from "react-native";
import React, { useEffect } from "react";

export default Ball = () => {
  useEffect(() => {
    const position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 400 },
    }).start();
  }, []);

  return (
    <Animated.View style={this.position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "black",
    borderWidth: 10,
    backgroundColor: "black",
  },
});
