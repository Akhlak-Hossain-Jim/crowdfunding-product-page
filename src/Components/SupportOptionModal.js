import React, { useState } from "react";
import styled from "styled-components";
import SupportOptionModalOption from "./SupportOptionModalOption";

export default function SupportOptionModal({ setSupportModal }) {
  const [ModalStat, setModalStat] = useState(false);

  const [Option, setOption] = useState();

  const OptionDetails = [
    {
      title: "Pledge with no reward",
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },
    {
      title: "Bamboo Stand",
      worth: 25,
      left: 101,
      description:
        "You get an ergonomic stand made of natural bamboo. You’ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    },
    {
      title: "Black Edition Stand",
      worth: 75,
      left: 64,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    },
    {
      title: "Mahogany Special Edition",
      worth: 200,
      left: 0,
      description:
        "You get two Special Edition Mahogony stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    },
  ];

  return (
    <Container>
      <div className="SupportOptionModal_content">
        {ModalStat ? (
          <div className="SupportOptionModal_success">
            <img src="/images/icon-check.svg" alt="check mark" />
            <h2>Thanks for your support!</h2>
            <p>
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed.
            </p>
            <button onClick={() => setSupportModal(false)}>Got it!</button>
          </div>
        ) : (
          <div className="SupportOptionModal_options">
            <h2>Back this project</h2>
            <p>
              Want to support us in bringing Mastercraft Bamboo Monitor Riser
              out in the world?
            </p>
            <div
              className="SupportOptionModal_options__close"
              onClick={() => setSupportModal(false)}
            >
              <img src="/images/icon-close-modal.svg" alt="close modal" />
            </div>
            <div className="SupportOptionModal_options__elements">
              {React.Children.toArray(
                OptionDetails.map((data, index) => (
                  <SupportOptionModalOption
                    description={data.description}
                    index={index}
                    left={data.left}
                    optionSelected={Option}
                    setOptionSelected={setOption}
                    title={data.title}
                    worth={data.worth}
                    ModalStat={setModalStat}
                  />
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: auto;
  bottom: 0;
  right: auto;
  width: min(1440px, 100vw);
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  .SupportOptionModal {
    &_content {
      position: relative;
      width: min(830px, 100%);
      padding: 100px 50px 50px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 548px) {
        padding: 50px 24px 50px;
      }
    }
    &_options {
      width: min(730px, 100%);
      border-radius: 8px;
      background-color: var(--white);
      padding: 49px 48px;
      position: relative;
      height: 100%;
      overflow-x: auto;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        border: none;
      }
      @media (max-width: 548px) {
        padding: 32px 25px;
      }
      & > h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        @media (max-width: 548px) {
          font-size: 18px;
          line-height: 22px;
        }
      }
      & > p {
        padding-top: 16px;
        font-weight: 400;
        font-size: 15px;
        line-height: 200%;
        letter-spacing: 0.032em;
        color: var(--gray);
        @media (max-width: 548px) {
          font-size: 14px;
          line-height: 170%;
          padding-top: 24px;
          letter-spacing: 0.002em;
        }
      }
      &__close {
        position: absolute;
        top: 32px;
        right: 31px;
        width: 15px;
        cursor: pointer;
        @media (max-width: 548px) {
          top: 36px;
          right: 22px;
        }
        & > img {
          width: 100%;
          height: auto;
        }
      }
      &__elements {
        display: flex;
        flex-direction: column;
        gap: 25px;
        padding-top: 32px;
        @media (max-width: 548px) {
          padding-top: 25px;
        }
      }
    }
    &_success {
      width: min(541px, 100%);
      margin: auto;
      background-color: var(--white);
      border-radius: 8px;
      padding: 48.5px 52.5px;
      text-align: center;
      @media (max-width: 548px) {
        padding: 32px 19.5px;
      }
      & > img {
        @media (max-width: 548px) {
        }
      }
      & > h2 {
        padding-top: 48px;

        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        letter-spacing: 0.001em;
        @media (max-width: 548px) {
          padding-top: 24px;
          font-size: 18px;
          line-height: 22px;
        }
      }
      & > p {
        font-weight: 400;
        font-size: 15px;
        line-height: 200%;
        text-align: center;
        letter-spacing: 0.032em;
        color: var(--gray);
        padding-top: 16px;
        @media (max-width: 548px) {
          padding-top: 24px;
          font-size: 14px;
          line-height: 170%;
          letter-spacing: 0.002em;
        }
      }
      & > button {
        border: none;
        outline: none;
        background-color: var(--cyan);
        color: var(--white);

        width: min(105px, 100%);
        margin-top: 32px;

        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.003em;
        padding: 15px 32px;
        border-radius: 28px;
        &:hover {
          background-color: var(--cyan-dark);
        }
      }
    }
  }
`;
