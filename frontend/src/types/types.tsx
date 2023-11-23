import {NativeStackScreenProps} from "@react-navigation/native-stack";
import JobPostingForm from "../screens/Post/PostJobScreen";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type RootStackParamList = {
    //welcome to login
    Welcome: undefined;
    Login: undefined;
    Register: undefined;

    //find job
    JobViews: undefined;
    JobSingleView: undefined;

    //post job
    JobPostForm: undefined;

    //two tabs
    JobFindTabs: undefined;
    JobPostTabs: undefined;

    //function name
    FindTab: undefined;
    PostTab: undefined;
    JobTabs: undefined;

//profile
    Profile: undefined;
    Applied: undefined;
    Posted: undefined;
    EditProfile: undefined;
    Settings: undefined;

    //function for profile
    Listing: undefined;
    Posting: undefined;
    Details: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;
