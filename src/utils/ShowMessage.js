import { showMessage as showToast } from "react-native-flash-message";
import { Colors } from '../const'

export const showMessage = (message, type) => {
  showToast({
    message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? Colors.topaz : Colors.fadedRed
  });
}