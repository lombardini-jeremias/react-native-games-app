import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { Screen } from "../components/Screen";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-70`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Hello there, This is About section !
        </Text>
      </ScrollView>
    </Screen>
  );
}
