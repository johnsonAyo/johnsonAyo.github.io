import styled from "styled-components";

export const ProjectWrapper = styled.div`
  width: 100%;
  font-size: 3rem;
  padding: 5rem;
  color: white;
  background-color: rgb(29, 27, 27);
  & > div {
    display: flex;
    width: 100%;
  }
  @media (max-width: 750px) {
    & > div {
      width: 100%;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  justify-items: center;
  margin: 6rem;

  @media (max-width: 750px) {
    display: none;
  }
  & > a {
    & > img:hover {
      transition: all 2s;
      transform: scale(1.1);
    }
  }
`;

export const ProjectDetails = styled.div`
  width: 100%;
  margin: 6rem;
  align-self: start;
  text-align: start;
  @media (max-width: 750px) {
    margin: 1rem;

    & > a {
      & > h6 {
        margin-bottom: 1rem !important;
        font-size: 2rem;
      }
    }
  }

  & > a {
    text-decoration: none;
    & > h6 {
      margin-bottom: 5rem;
      font-size: 3rem;
      color: green;
    }
  }

  & > p {
    margin-bottom: 5rem;
    font-size: 2.5rem;
  }
`;

export const MoveInLeft = styled.img`
  width: 100%;
  justify-self: center;
  object-fit: cover;

  border-radius: 2rem;
  animation-name: moveInLeft;
  animation-duration: 3s;
  animation-timing-function: ease-out;
`;

export const MoveInRight = styled.img`
  width: 100%;
  justify-self: center;
  object-fit: cover;

  border-radius: 2rem;
  animation-name: moveInRight;
  animation-duration: 3s;
  animation-timing-function: ease-out;
`;
