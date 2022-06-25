import React from "react";
import styled from "styled-components";

export default function Stat() {
  const need = 100000;
  const got = 89914;

  return (
    <Container>
      <div className="Stat_box">
        <div className="Stat_box__stats">
          <div className="Stat_box__stats_element">
            <h2>${got.toLocaleString("en-US")}</h2>
            <p>of ${need.toLocaleString("en-US")} backed</p>
          </div>
          <div className="Stat_box__stats_element">
            <h2>5,007</h2>
            <p>total backers</p>
          </div>
          <div className="Stat_box__stats_element">
            <h2>56</h2>
            <p>days left</p>
          </div>
        </div>
        <div className="Stat_box__progress">
          <div
            className="Stat_box__progress_bar"
            style={{ width: `${(495 / 632) * 100}%` }}
            // the values are only for design purpose, use got instead of 495 and need instead of 632
          ></div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  padding: 0 50px 26px;
  @media (max-width: 548px) {
    padding: 0 24px 20px;
  }
  .Stat {
    &_box {
      width: min(728px, 100%);
      background-color: var(--white);
      border-radius: 10px;
      box-shadow: var(--box-shadow);
      padding: 48px 47px;
      margin: 0 auto;
      @media (max-width: 548px) {
        padding: 32px 24px 39px;
        margin: 0;
      }
      &__stats {
        display: flex;
        align-items: center;
        gap: 47px;
        flex-wrap: wrap;
        @media (max-width: 548px) {
          flex-direction: column;
          text-align: center;
          gap: 25px;
        }
        &_element {
          width: min(180px, 100%);
          position: relative;
          &:not(:last-child) {
            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
              width: 1px;
              background-color: var(--gray);
              @media (max-width: 548px) {
                width: 31.543%;
                height: 1px;
                top: 100%;
                right: 50%;
                transform: translate(50%);
              }
            }
          }
          @media (max-width: 548px) {
            width: 100%;
            padding-bottom: 25px;
          }
          & > h1 {
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            @media (max-width: 548px) {
            }
          }
          & > p {
            padding-top: 8px;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: 0.001em;
            color: var(--gray);
            @media (max-width: 548px) {
            }
          }
        }
      }
      &__progress {
        margin-top: 37px;
        width: 100%;
        height: 12px;
        overflow: hidden;
        background-color: var(--gray-mid);
        border-radius: 6px;
        @media (max-width: 548px) {
          margin-top: 8px;
        }
        &_bar {
          height: 100%;
          background-color: var(--cyan);
          border-radius: 6px;
        }
      }
    }
  }
`;
