import styled from "@emotion/styled";
import React, { useEffect } from "react";
import "./notification.css";
import DoneIcon from "@mui/icons-material/Done";
import CancelIcon from "@mui/icons-material/Cancel";

const Container = styled.div({
  position: "fixed",
  top: "10%",
  right: "10%",
  width: "200px",
  height: "5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "9999",
  opacity: "0.9",
  borderRadius: "8px",
  fontSize: "12px",
  userSelect: "none",
  animation: "fadeIn 0.5s ease-in-out",
  cursor: "pointer",
  transition: "all 0.5s ease",
});

const IconContainer = styled.div({
  fontSize: "6px",
  marginRight: "8px",
  cursor: "pointer",
});

const Notification = ({ notification }) => {
  let timeout;

  // console.log(notification);

  const handleClose = (time = notification.duration) => {
    timeout = setTimeout(() => {
      notification.set(false);
    }, time);
  };

  useEffect(() => {
    handleClose();
    return () => {
      clearTimeout(timeout);
    };
  }, [notification.message, notification.type]);

  const ICONS = {
    "notification-success": DoneIcon,
    "notification-error": CancelIcon,
  };

  const Icon = ICONS[notification.type];
  return (
    notification.message && (
      <Container className={notification.type}>
        <IconContainer>
          <Icon />
        </IconContainer>
        {notification.message}
      </Container>
    )
  );
};

export default Notification;
