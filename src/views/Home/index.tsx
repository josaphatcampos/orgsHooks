import React from "react";
import Header from "./components/Header.tsx";
import { Text } from "react-native";
import Producers from "./components/Producers.tsx";

// @ts-ignore
export default function Home(){
  return <Producers header={Header} />;
}
