import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Menu = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <TouchableOpacity>
          <Text>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
