import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
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

const screenWidth = Dimensions.get('window').width;

export default function DetailScreen({ navigation }: { navigation: any }) {
    const [numberLine, setNumberLine] = useState<string>('');

    const route = useRoute();
    const [data, setData] = useState<IData | undefined>(undefined);
    useEffect(() => {
        setData(route.params as IData);
    }, [route.params]);

    // console.log('Data navigation detail: ', data);

    return (
        <View style={styles.viewContainer}>
            <SafeAreaView>
                {data && (
                    <ScrollView>
                        <HeaderNavigate style={styles.headerNavigate} navigation={navigation} moreAction={true} />
                        <View className="BODY">
                            <View style={styles.detailApp} className={`DETAIL_APP`}>
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
                                <View style={styles.comments} className="COMMENTS">
                                    <UserComments data={data.comments} numberLine={numberLine} setNumberLine={setNumberLine} />
                                </View>

                                <View style={styles.support} className="SUPPORT">
                                    <TitleWithArrow style={styles.title} title="Hỗ trợ ứng dụng" icon="chevron-down" />
                                </View>

                            </View>
                        </View>

                    </ScrollView>
                )}
            </SafeAreaView>
        </View >
    );
}

export const styles = StyleSheet.create({
    viewContainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#000',
    },
    headerNavigate: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    detailApp: {
        display: 'flex',
        width: screenWidth,
        rowGap: 16,
    },
    comments: {
        paddingLeft: 24,
        paddingRight: 24,
        rowGap: 48,
    },
    support: {
        paddingLeft: 24,
        paddingRight: 24,
    },
    title: {
        paddingTop: 16,
        paddingBottom: 16,
    },
})