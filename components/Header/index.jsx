import { Platform } from 'react-native';
import HeaderIOS from './iOS';
import HeaderAndroid from './Android';

const Header = Platform.select({
    ios: () => HeaderIOS,
    android: () => HeaderAndroid,
    default: () => HeaderIOS,
})();

export default Header;