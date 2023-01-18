import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PORT, myIP } from "@env";

export default async function verifyAndInsert(user) {
  const Userthings = await fetch(`http://${myIP}:${PORT}/userVerify`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uid: user }),
  });
}