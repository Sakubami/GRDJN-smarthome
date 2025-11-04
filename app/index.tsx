import { SafeAreaView } from "react-native-safe-area-context";
import DefaultHeader from "src/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "src/ui/components/DefaultSecondaryHeader";

export default function Index() {
    return(
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Home" createSeparation={true}/>
            <DefaultSecondaryHeader/>
        </SafeAreaView>
    );
}