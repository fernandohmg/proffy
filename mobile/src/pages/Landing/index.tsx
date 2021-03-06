import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import studyIcon from "../../assets/images/icons/study.png";
import landingImg from "../../assets/images/landing.png";
import styles from "./styles";

type LandingScreenProp = NativeStackNavigationProp<any, "Landing">;

function Landing({
  navigation: { navigate },
}: NativeStackScreenProps<any, any>) {
  // const { navigate } = useNavigation();
  const navigation = useNavigation<LandingScreenProp>();

  function handleNavigateToGiveClassesPage() {
    // navigate("GiveClasses");
    navigation.navigate("GiveClasses");
  }

  function handleNavigateToStudyPages() {
    navigation.navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          style={[styles.button, styles.buttonPrimary]}
          onPress={handleNavigateToStudyPages}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.button, styles.buttonSecondary]}
          onPress={handleNavigateToGiveClassesPage}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
