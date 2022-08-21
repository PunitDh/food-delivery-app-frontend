import styled from "@emotion/styled";

export const Container = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
});

export const AuthContainer = styled.div({
  border: "1px solid #FA901C",
  width: "250px",
  height: "400px",
  borderRadius: "5px",
});

export const AuthHeader = styled.div({
  background: "#FA901C",
  height: "30px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  color: "#FAF9FB",
});

export const AuthLinks = styled.div({
  fontSize: "16px",
  margin: "0 20px",
  color: "rgba(0, 0, 0, 0.7)",
});
