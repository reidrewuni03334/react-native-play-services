type GooglePlayServicesStatus = {
  AVAILABLE: 10,
  GMS_DISABLED: 20,
  GMS_NEED_UPDATE: 30,
  INVALID: 30
};

declare module "react-native-play-services" {
  const GooglePlayServicesStatus: GooglePlayServicesStatus;
  const checkPlayServicesStatus: () => Promise<GooglePlayServicesStatus>;
  const sync: (params: {
    onGmsDisabled?: () => void
    onGmsNeedUpdate?: () => void
  }) => Promise<void>;
  const goToSetting: () => Promise<void>;
  const goToMarket: () => Promise<void>;
}
