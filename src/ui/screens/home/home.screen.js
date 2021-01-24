import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import colors from '~/ui/global_styles/colors'

export const HomeScreen = () => (
  <SafeAreaView style={{
    flex: 1,
    backgroundColor: colors.rocket,
  }}>
    <ScrollView>
      <Text style={{
        color: colors.gray4,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>Home Screen</Text>
    </ScrollView>
  </SafeAreaView>
)
