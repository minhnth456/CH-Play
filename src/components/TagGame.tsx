import { Pressable, Text, View } from 'react-native';

const TagGame = ({ title, className, style }: { title: string, className?: string, style?: any }) => {
    const getTagStyle = (pressed: boolean) => ({
        borderWidth: 1,
        borderColor: '#374151',
        backgroundColor: pressed ? '#374151' : 'transparent',
        ...style,
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
