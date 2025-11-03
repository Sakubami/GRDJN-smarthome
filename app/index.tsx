import DefaultHeader from "@/ui/components/DefaultHeaders";
import DefaultSecondaryHeader from "@/ui/components/DefaultSecondaryHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    return(
        <SafeAreaView style={{ flex:1, backgroundColor:"#e6e6e6"}}>
            <DefaultHeader headerTitle="Home" createSeparation={true}/>
            <DefaultSecondaryHeader/>
        </SafeAreaView>
    );
}