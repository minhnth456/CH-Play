import { Pressable, Text, View } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { useState } from 'react';

export default function Classify({ title, moreOption }: { title: string, moreOption?: boolean }) {
    const [isSelect, setIsSelect] = useState<boolean>(false);

    return (
        <Pressable onPress={() => setIsSelect(!isSelect)}>
            <View
                style={{ backgroundColor: isSelect ? '#0e7490' : 'transparent', borderWidth: 2, borderColor: isSelect ? '#0e7490' : '#374151' }}
                className="flex flex-row justify-between items-center py-2 px-4 rounded-xl"
            >
                {isSelect
                    ?
                    <View className="pr-2">
                        <FIcon name="check" size={16} color="#a5f3fc" />
                    </View>
                    :
                    <></>
                }
                <Text style={{ color: isSelect ? '#a5f3fc' : '#9ca3af' }}>{title}</Text>
                {moreOption
                    ?
                    <View className="flex justify-center items-center pl-4">
                        <ADIcon name="caretdown" size={10} color={`${isSelect ? '#a5f3fc' : '#9ca3af'}`} />
                    </View>
                    :
                    <></>
                }
            </View>
        </Pressable>
    );
}