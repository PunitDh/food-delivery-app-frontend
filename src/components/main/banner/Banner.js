import styled from "@emotion/styled";
import React from "react";

const Container = styled.div({
  width: "100%",
  height: "auto",
  backgroundColor: "#FAF9FB",
  padding: "10px",
  paddingBottom: "100px",
});

const BannerWrapper = styled.div({
  width: "100%",
  height: "130px",
  borderRadius: "10px",
  background: `url(https://prateek-khindri-food-delivery-app.s3.ap-southeast-2.amazonaws.com/banner-bg.jpg) no-repeat center`,
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  alignItems: "center",
  padding: "0px 10px",
});

const BannerContent = styled.div({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

const BannerContentHeading = styled.h3({
  fontSize: "18px",
  fontWeight: "500",
  color: "#2A2B3C",
});

const BannerContentParagraph = styled.p({
  fontSize: "14px",
  width: "200px",
  color: "#989594",
  margin: "5px 0",
});

const BannerContentDiscount = styled.span({
  color: "#F8901C",
  fontWeight: "600",
});

const BannerContentLink = styled.a`
  background: #f8901c;
  padding: 5px 15px;
  border-radius: 100vw;
  color: #faf9fb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
    transition: 0.5s;
  }
`;
const Banner = ({ name, discount, link }) => {
  return (
    <Container>
      <BannerWrapper>
        <BannerContent>
          <BannerContentHeading>Hello {name}</BannerContentHeading>
          <BannerContentParagraph>
            Get free discount for every{" "}
            <BannerContentDiscount>${discount}</BannerContentDiscount>
          </BannerContentParagraph>

          <BannerContentLink href="#">Learn More</BannerContentLink>
        </BannerContent>
      </BannerWrapper>
    </Container>
  );
};

export default Banner;
