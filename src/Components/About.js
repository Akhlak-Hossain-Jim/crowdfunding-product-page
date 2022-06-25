import React from "react";
import styled from "styled-components";

export default function About({ setSupportModal }) {
  return (
    <Container>
      <div className="About_box">
        <h3>About this project</h3>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div className="About_box__options">
          <div className="About_box__options_element">
            <div className="About_box__options_element__name">
              <h4>Bamboo Stand</h4>
              <p>Pledge $25 or more</p>
            </div>
            <p className="About_box__options_element__details">
              You get an ergonomic stand made of natural bamboo. You’ve helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div className="About_box__options_element__action">
              <h3>
                <span>101</span>left
              </h3>
              <button onClick={() => setSupportModal(true)}>
                Select Reward
              </button>
            </div>
          </div>
          <div className="About_box__options_element">
            <div className="About_box__options_element__name">
              <h4>Black Edition Stand</h4>
              <p>Pledge $75 or more</p>
            </div>
            <p className="About_box__options_element__details">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div className="About_box__options_element__action">
              <h3>
                <span>64</span>left
              </h3>
              <button onClick={() => setSupportModal(true)}>
                Select Reward
              </button>
            </div>
          </div>
          <div className="About_box__options_element disabled">
            <div className="About_box__options_element__name">
              <h4>Mahogany Special Edition</h4>
              <p>Pledge $200 or more</p>
            </div>
            <p className="About_box__options_element__details">
              You get two Special Edition Mahogony stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="About_box__options_element__action">
              <h3>
                <span>0</span>left
              </h3>
              <button onClick={() => setSupportModal(true)} disabled={true}>
                Out of stock
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 50px 26px;
  @media (max-width: 548px) {
    padding: 0 25px 20px;
  }
  .About {
    &_box {
      width: min(728px, 100%);
      background-color: var(--white);
      border-radius: 10px;
      box-shadow: var(--box-shadow);
      padding: 47px;
      margin: 0 auto;
      @media (max-width: 548px) {
        padding: 39px 23px;
        margin: 0;
      }
      & > h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        padding-bottom: 20px;
        @media (max-width: 548px) {
          padding-bottom: 12px;
          font-size: 18px;
          line-height: 22px;
        }
      }
      & > p {
        padding: 15px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 197%;
        letter-spacing: 0.032em;
        color: var(--gray);
        @media (max-width: 548px) {
          padding: 12px 0;
          font-size: 14px;
          line-height: 170%;
          letter-spacing: 0.002em;
        }
      }
      &__options {
        padding-top: 25px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        @media (max-width: 548px) {
          padding-top: 24px;
        }
        &_element {
          padding: 38px 33px 32px 32px;
          box-shadow: var(--box-shadow);
          border-radius: 7px;
          @media (max-width: 548px) {
            padding: 22px 25px 24px 23px;
          }
          &.disabled {
            opacity: 0.7;
          }
          &__name {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
            @media (max-width: 548px) {
              flex-direction: column;
              gap: 8px;
              align-items: flex-start;
            }
            & > h4 {
              font-weight: 500;
              font-size: 18px;
              line-height: 22px;
              @media (max-width: 548px) {
                font-size: 15px;
                line-height: 18px;
                letter-spacing: -0.03em;
              }
            }
            & > p {
              font-weight: 500;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 0.001em;
              color: var(--cyan);
              @media (max-width: 548px) {
                font-size: 14px;
                line-height: 17px;
              }
            }
          }
          &__details {
            color: var(--gray);
            padding-top: 24px;
            font-weight: 400;
            font-size: 15px;
            line-height: 197%;
            letter-spacing: 0.032em;
            @media (max-width: 548px) {
              font-size: 14px;
              line-height: 170%;
              letter-spacing: 0.002em;
            }
          }
          &__action {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
            flex-wrap: wrap;
            padding-top: 24px;
            @media (max-width: 548px) {
              padding-top: 25px;
              flex-direction: column;
              align-items: flex-start;
            }
            & > h3 {
              display: flex;
              align-items: center;
              gap: 8px;
              font-weight: 400;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 0.001em;
              color: var(--gray);
              & > span {
                font-weight: 700;
                font-size: 32px;
                line-height: 39px;
                color: var(--black);
              }
            }
            & > button {
              padding: 15px 31.5px 16px;
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
              &:disabled {
                background-color: var(--gray);
                padding: 15px 38px 16px;
              }
              @media (max-width: 548px) {
                padding: 18px 44.5px;
              }
            }
          }
        }
      }
    }
  }
`;
