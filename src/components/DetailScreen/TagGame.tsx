import { Pressable, Text, View } from 'react-native';

const TagGame = ({ title, className }: { title: string, className?: string }) => {
    const getTagStyle = (pressed: boolean) => ({
        borderWidth: 1,
        borderColor: '#374151',
        backgroundColor: pressed ? '#374151' : 'transparent',
    });
    return (
        <Pressable
            onPress={() => console.log('Tag')}
        >
            {({ pressed }) => (
                <View style={getTagStyle(pressed)} className={`px-2 py-1 rounded-md m-1 ${className || ''}`}>
                    <Text className="text-gray-400">{title}</Text>
                </View>
            )}
        </Pressable>
    );
};

export default TagGame;
