
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBaseScreenControls } from "src/core/navigation/NavManager";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "src/ui/components/DefaultSecondaryHeader";

export default function Index(){
    useBaseScreenControls();
    
    return(
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Home" createSeparation={true}/>
            <DefaultSecondaryHeader/>
                <Text> test </Text>
        </SafeAreaView>
    );
}