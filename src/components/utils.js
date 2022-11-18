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
  @media (min-width: 750px) {
    font-size: 3.5rem;
  }
  @media (min-width: 850px) {
    font-size: 4.5rem;
  }
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #ececec;

  font-family: "Outfit", sans-serif;

  outline: none;
  border: 0.1rem solid #fefefe00;

  border-radius: 1rem;

  font-size: 1rem;
  font-weight: 600;
  color: #000;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background: none;
    color: #fff;
    border-color: #fff;
  }

  &.btn-green {
    background: #05d9d3;

    &:hover {
      background: none;
      color: #fff;
    }
  }

  &.btn-green-outline {
    border-color: #05d9d3;
    background: none;
    color: #05d9d3;

    &:hover {
      background: #05d9d3;
      color: #000;
    }
  }

  &.btn-orange {
    background: #ffa42c;

    &:hover {
      border-color: #ffa42c;
      background: none;
      color: #ffa42c;
    }
  }

  &.btn-orange-outline {
    border-color: #ffa42c;
    background: none;
    color: #ffa42c;

    &:hover {
      background: #ffa42c;
      color: #000;
    }
  }

  &.btn-black {
    background: #090909;

    &:hover {
      background: #017a76;
      color: #fff;
    }
  }

  &.btn-black-outline {
    border-color: #090909;

    &:hover {
      background: #017a76;
      color: #fff;
    }
  }
`;
