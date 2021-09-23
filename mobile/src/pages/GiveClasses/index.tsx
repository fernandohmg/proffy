import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveClassesBgImage from "../../assets/images/give-classes-background.png";
import styles from "./styles";

type GiveClassesScreenProp = NativeStackNavigationProp<any, "GiveClasses">;

function GiveClasses() {
  const { goBack } = useNavigation<GiveClassesScreenProp>();

  function handleNavigateToBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        resizeMode="contain"
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um proffy</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={handleNavigateToBack}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
