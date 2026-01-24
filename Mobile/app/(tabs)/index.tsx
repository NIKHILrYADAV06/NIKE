import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignOutButton from '@/components/SignOutButton'
const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#0F1A24]">
            <View className="flex-1 items-center justify-center">
                <Text className="text-[#1DA1F2]">HomeScreen</Text>
                <SignOutButton />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})