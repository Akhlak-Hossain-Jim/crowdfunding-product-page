import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";

export default function Intro({ setSupportModal }) {
  const [marked, setMarked] = useState(false);

  const handleBookmark = () => {
    setMarked(!marked);
  };

  return (
    <Container>
      <Header />
      <div className="home_container">
        <div className="home_container__box">
          <div className="home_container__box_brandLogo">
            <img src="/images/logo-mastercraft.svg" alt="MasterCraft Logo" />
          </div>
          <h1 className="home_container__box_title">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="home_container__box_description">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="home_container__box_buttons">
            <button
              className="home_container__box_buttons__1"
              onClick={() => setSupportModal(true)}
            >
              Back this project
            </button>
            <button
              className="home_container__box_buttons__2"
              onClick={handleBookmark}
            >
              <svg
                className={marked ? "marked" : ""}
                width="56"
                height="56"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fillRule="evenodd">
                  <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                  <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                </g>
              </svg>
              <span className={marked ? "marked" : ""}>Bookmark</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  background-image: url("/images/image-hero-desktop.jpg");
  background-repeat: no-repeat;
  background-position: top left;
  background-size: 100%;
  @media (max-width: 548px) {
    background-image: url("/images/image-hero-mobile.jpg");
  }
  .home_container {
    padding: 190px 50px 26px;
    @media (max-width: 548px) {
      padding: 160px 24px 25px;
    }
    &__box {
      width: min(728px, 100%);
      background-color: var(--white);
      border-radius: 10px;
      box-shadow: var(--box-shadow);
      position: relative;
      text-align: center;
      padding: 55px 48px 47px;
      margin: 0 auto;
      @media (max-width: 548px) {
        padding: 52px 24px 40px;
        margin: 0;
      }
      &_brandLogo {
        position: absolute;
        top: -29px;
        left: 50%;
        width: 56px;
        transform: translateX(-50%);
        @media (max-width: 548px) {
          top: -28px;
        }
        & > img {
          width: 100%;
          height: auto;
          object-position: center;
        }
      }
      &_title {
        font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        color: var(--black);
        @media (max-width: 548px) {
          font-size: 20px;
          line-height: 24px;
          max-width: 196px;
          margin: 0 auto;
        }
      }
      &_description {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.001em;
        color: var(--gray);
        padding-top: 16px;
        @media (max-width: 548px) {
          font-size: 14px;
          line-height: 169%;
          letter-spacing: -0.009em;
        }
      }
      &_buttons {
        padding-top: 39px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 35px;
        @media (max-width: 548px) {
          padding-top: 24px;
          gap: 10px;
        }
        &__1 {
          padding: 18px 39.5px;
          border: none;
          outline: none;
          background-color: var(--cyan);
          border-radius: 28px;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          color: var(--white);
          cursor: pointer;
          &:hover {
            background-color: var(--cyan-dark);
          }
          @media (max-width: 548px) {
            padding: 18px 44.5px;
          }
        }
        &__2 {
          border: none;
          outline: none;
          padding: 0;
          border-radius: 28px;
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          & > svg {
            width: min(56px, 100%);
            height: auto;
            &.marked {
              & > g > circle {
                fill: var(--cyan-dark);
              }
              & > g > path {
                fill: var(--white);
              }
            }
          }
          & > span {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            padding-right: 23px;
            color: var(--gray);
            &.marked {
              color: var(--cyan-dark);
              &::after {
                content: "ed";
              }
            }
          }
          &:hover {
            opacity: 0.7;
          }
          @media (max-width: 548px) {
            & > span {
              display: none;
            }
          }
        }
      }
    }
  }
`;
