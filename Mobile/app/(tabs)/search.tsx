import { Feather } from "@expo/vector-icons";
import { View, TextInput, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TRENDING_TOPICS = [
    { topic: "#ReactNative", tweets: "125K" },
    { topic: "#TypeScript", tweets: "89K" },
    { topic: "#WebDevelopment", tweets: "234K" },
    { topic: "#AI", tweets: "567K" },
    { topic: "#TechNews", tweets: "98K" },
    { topic: "#ReactNative", tweets: "125K" },
    { topic: "#TypeScript", tweets: "89K" },
    { topic: "#WebDevelopment", tweets: "234K" },
    { topic: "#AI", tweets: "567K" },
    { topic: "#TechNews", tweets: "98K" },
];

const SearchScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#0F1A24]">
            {/* HEADER */}
            <View className="px-4 py-3 border-b border-[#0F1A24]">
                <View className="flex-row items-center bg-[#0F1A24] rounded-full px-4 py-3">
                    <Feather name="search" size={20} color="#657786" />
                    <TextInput
                        placeholder="Search Twitter"
                        className="flex-1 ml-3 text-base text-white"
                        placeholderTextColor="#657786"
                    />
                </View>
            </View>

            <ScrollView className="flex-1">
                <View className="p-4">
                    <Text className="text-xl font-bold text-white mb-4">Trending for you</Text>
                    {TRENDING_TOPICS.map((item, index) => (
                        <TouchableOpacity key={index} className="py-3 border-b border-[#0F1A24]">
                            <Text className="text-gray-500 text-sm">Trending in Technology</Text>
                            <Text className="font-bold text-white text-lg">{item.topic}</Text>
                            <Text className="text-gray-500 text-sm">{item.tweets} Tweets</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchScreen;