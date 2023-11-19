import { NativeStackScreenProps } from "@react-navigation/native-stack";
import JobPostingForm from "../screens/Post/PostJobScreen";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  JobViews: undefined;
  JobSingleView: undefined;
  JobPostForm: undefined;
  JobFindTabs: undefined;
  JobPostTabs: undefined;
  FindTab: undefined;
  PostTab: undefined;
  JobTabs: undefined;
  Profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
