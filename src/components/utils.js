import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "Karla", "Poppins";

  margin-bottom: 1rem;

  b {
    color: #05d9d3;
  }
`;

export const BannerText = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;

  margin-bottom: 1.5rem;

  span {
    color: #05d9d3;
    font-family: "Montserrat", sans-serif;
  }

  @media (min-width: 500px) {
    font-size: 3rem;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;
