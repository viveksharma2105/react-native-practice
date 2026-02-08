import { View, Text } from "react-native";
import React from "react";

const NameComponent = () => {
  return (
    <View>
      <Text
        style={{
          width: 200,
          borderRadius: 10,
          shadowColor: '#000',
          padding: 20,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        Vivek Sharma
      </Text>
    </View>
  );
};

export default NameComponent;
