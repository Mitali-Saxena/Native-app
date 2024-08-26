import styled from "styled-components";
import {View} from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#fffffffff",
    secondary: "#E5E7E8",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

export const StyledContainer = styled.View`
flex:1;
padding: 25px,
padding-top: ${StatusBarHeight + 10}px
background-color: ${primary};
`

export const innerContainer = styled.View`
flex: 1;
width: 100%
align-items: center;
`;

