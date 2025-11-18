// components/FlightToast.js
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function FlightToast({ message, type = "info", onHide }) {
  const slideAnim = useRef(new Animated.Value(80)).current; // start off-screen

  useEffect(() => {
    // Slide in
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start();

    // Auto hide
    const timeout = setTimeout(() => {
      Animated.timing(slideAnim, {
        toValue: 80,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onHide && onHide());
    }, 3500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Animated.View
      style={[
        styles.toast,
        {
          transform: [{ translateY: slideAnim }],
          borderLeftColor:
            type === "delay"
              ? "#fbbf24" // amber
              : type === "cancel"
              ? "#ef4444" // red
              : "#60a5fa", // blue
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toast: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#1f2937",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    maxWidth: 260,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    borderLeftWidth: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
  },
});
