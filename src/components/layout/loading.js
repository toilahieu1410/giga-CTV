import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"

const Loading = ({color}) => {

  const colorDefaul = color || "#3590de"

  return (
    <View style={[styles.container, styles.loading]}>
      <ActivityIndicator size="large" color={colorDefaul}/>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flexDirection: "row",
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10
  }
})