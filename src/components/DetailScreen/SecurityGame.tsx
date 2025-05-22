import { Text, View } from 'react-native';
import TitleWithArrow from '../TitleWithArrow';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';

export default function SecurityGame() {
    return (
        <View className="SECURITY px-6">
            <TitleWithArrow title="An toàn dữ liệu" className="py-4" />
            <Text className="text-gray-400">
                Sự an toàn bắt đầu từ việc nắm được nhà phát triển thu nhập và chia sẻ dữ liệu của bạn. Các biện pháp bảo vệ quyền riêng tư và bảo mật dữ liệu có thể thay đổi tùy theo cách sử dụng, khu vực và độ tuổi. Nhà phát triển đã cung cấp thông tin này à có thể sẽ cập nhật theo thời gian
            </Text>
            <View style={{ borderWidth: 1, borderColor: '#374151' }} className="p-4 rounded-lg flex gap-y-6 my-8">
                <View className="flex gap-y-1">
                    <View className="flex flex-row gap-x-4 items-center">
                        <FIcon name="share-2" size={28} color="#374151" />
                        <Text className="text-gray-400 font-semibold flex flex-1">Không chia sẻ dữ liệu với bên thứ 3</Text>
                    </View>
                    <View className="flex justify-end">
                        <Text className="text-gray-500 text-[12px] pl-[45px] basis-4/5">
                            <Text className="underline">Tìm hiểu thêm</Text> về cách nhà phát triển khai báo thông tin về hoạt động chia sẻ dữ liệu
                        </Text>
                    </View>
                </View>
                <View className="flex gap-y-1">
                    <View className="flex flex-row gap-x-4 items-center">
                        <EIcon name="upload-to-cloud" size={28} color="#374151" />
                        <Text className="text-gray-400 font-semibold flex flex-1">Ứng dụng này có thể có thu nhập từ những loại dữ liệu nào sau đây</Text>
                    </View>
                    <View className="flex justify-end">
                        <Text className="text-gray-500 text-[12px] pl-[45px] basis-4/5">
                            <Text className="underline">Tìm hiểu thêm</Text> về cách nhà phát triển khai báo thông tin về hoạt động chia sẻ dữ liệu
                        </Text>
                    </View>
                </View>
                <View className="flex gap-y-1">
                    <View className="flex flex-row gap-x-4 items-center">
                        <EIcon name="lock" size={28} color="#374151" />
                        <Text className="text-gray-400 font-semibold flex flex-1">Dữ liệu được mã hóa khi di chuyển</Text>
                    </View>
                </View>
                <View className="flex gap-y-1">
                    <View className="flex flex-row gap-x-4 items-center">
                        <EIcon name="upload-to-cloud" size={28} color="#374151" />
                        <Text className="text-gray-400 font-semibold flex flex-1">Có thể xóa tài khoản</Text>
                    </View>
                    <View className="flex justify-end">
                        <Text className="text-gray-500 text-[12px] pl-[45px] basis-4/5">
                            Bạn có thể yêu cầu <Text className="underline">xóa dữ liệu đã thu nhập</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
