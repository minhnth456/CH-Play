import { Text, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import TagGame from './TagGame';
import { IData } from '../../interfaces/product';

export default function AboutGame({ data }: { data: IData }) {
    return (
        <>
            <View className="ABOUT_APP px-6 flex">
                <TitleWithArrow title="Về trò chơi này" className="py-4" />
                <Text className="text-gray-400">
                    {data.desc}
                </Text>
            </View>

            <View className="TAGS_APP px-4 flex flex-row flex-wrap justify-start">
                {data.tags.map((item) => (
                    <TagGame key={item} title={item} />
                ))}
            </View>
        </>
    );
}
