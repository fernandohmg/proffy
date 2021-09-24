import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import styles from "./styles";

interface PageHeaderProps {
  title: string;
}

function PageHeader({ title }: PageHeaderProps) {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<any, "PageHeader">>();

  function handleGoBack() {
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default PageHeader;
