import styled from "styled-components";

export const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  font-family: "Outfit", sans-serif;

  margin-bottom: 1.5rem;

  span {
    color: #05d9d3;
  }
`;

export const BannerText = styled.h1`
  font-size: 2.5rem;
  font-family: "Erode", sans-serif;

  margin-bottom: 1.5rem;
  line-height: 1;

  span {
    color: #05d9d3;
    font-family: "Erode", sans-serif;
  }

  @media (min-width: 500px) {
    font-size: 3rem;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 1rem 1.5rem;
  background: #ececec;

  font-family: "Outfit", sans-serif;

  outline: none;
  border: none;

  border-radius: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: #000;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background: #cecece;
  }

  &.btn-green {
    background: #05d9d3;

    &:hover {
      background: #017a76;
      color: #fff;
    }
  }
  &.btn-orange {
    background: #ffa42c;

    &:hover {
      background: #ffa42c;
      color: #fff;
    }
  }
  &.btn-black {
    background: #090909;

    &:hover {
      background: #017a76;
      color: #fff;
    }
  }
`;
