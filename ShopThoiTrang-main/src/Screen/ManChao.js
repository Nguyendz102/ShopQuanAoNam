import { useEffect } from "react";
import { Image, View, Text } from "react-native";

const ManChao = (props) => {
    const navigation = props.navigation;
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        },4000)
    },[]);
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Image
            source={require('../Screen/image/LogoChao.png')}
            style={{width:150, height:150, borderRadius:10}}>
            </Image>
            <Text style={{fontSize:12,fontWeight:'600',fontStyle:"italic", marginTop: 10}}>
                Hân Hạnh Được Phục Vụ Quý Khách.....
            </Text>
            
        </View>
    );
};
export default ManChao;