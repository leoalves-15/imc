import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack  = {
    Home: undefined;
    Login: undefined;
    //exemple if you want pass one parameters
    // Home: {
    //     title: string
    // };
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;