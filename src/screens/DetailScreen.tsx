import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import HeaderNavigate from '../components/HeaderNavigate';
import TitleWithArrow from '../components/TitleWithArrow';
import UserComments from '../components/DetailScreen/UserComments';
import { useRoute } from '@react-navigation/native';
import { IData } from './../interfaces/product';
import HeaderGame from '../components/DetailScreen/HeaderGame';
import ImageList from '../components/DetailScreen/ImageList';
import AboutGame from '../components/DetailScreen/AboutGame';
import SecurityGame from '../components/DetailScreen/SecurityGame';
import RankingGame from '../components/DetailScreen/RankingGame';

export default function DetailScreen({ navigation }: { navigation: any }) {
    const [numberLine, setNumberLine] = useState<string>('');

    const route = useRoute();
    const [data, setData] = useState<IData | undefined>(undefined);
    useEffect(() => {
        setData(route.params as IData);
    }, [route.params]);

    console.log('Data navigation detail: ', data);

    return (
        <View className="bg-black flex-1">
            <SafeAreaView>
                {data && (
                    <ScrollView>
                        <HeaderNavigate navigation={navigation} className="px-4 py-2" moreAction={true} />
                        <View className="BODY">
                            <View className={`DETAIL_APP flex w-screen gap-y-4`}>
                                {/* HeaderGame  */}
                                <HeaderGame data={data} />

                                {/* ImageGame  */}
                                <ImageList data={data} />

                                {/* AboutGame */}
                                <AboutGame data={data} />

                                {/* SECURITY  */}
                                <SecurityGame />

                                {/* RANKING  */}
                                <RankingGame />

                                {/* Comments  */}
                                <View className="COMMENTS px-6 gap-y-12">
                                    <UserComments data={data.comments} numberLine={numberLine} setNumberLine={setNumberLine} />
                                </View>

                                <View className="SUPPORT px-6">
                                    <TitleWithArrow title="Hỗ trợ ứng dụng" icon="chevron-down" className="py-4" />
                                </View>

                            </View>
                        </View>

                    </ScrollView>
                )}
            </SafeAreaView>
        </View >
    );
}
