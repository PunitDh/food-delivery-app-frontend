import { useState } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState({
    message: null,
    type: null,
    duration: 5000,
  });
  return {
    message: notification.message,
    type: notification.type,
    duration: notification.duration,
    set: (message, type, duration = 5000) =>
      setNotification({ message, type, duration }),
    SUCCESS: "notification-success",
    ERROR: "notification-error",
  };
};
