import React, { useState } from "react";
import styled from "styled-components";

export default function SupportOptionModalOption({
  title,
  description,
  worth,
  left,
  optionSelected,
  setOptionSelected,
  index,
  ModalStat,
}) {
  const [Amount, setAmount] = useState(worth);

  const handleSubmit = (e) => {
    e.preventDefault();
    ModalStat(true);
    console.log(
      `Reacting as submitted the form as for "${title}" option with amount of "$${Amount}".`
    );
  };

  const handleChange = (e) => {
    if (e.target.value.toString() !== "e") {
      setAmount(e.target.value);
    }
  };

  return (
    <Container
      className={`${optionSelected === index ? "selected" : ""} ${
        left === 0 ? "disabled" : ""
      }`}
      onClick={() => (left !== 0 ? setOptionSelected(index) : false)}
    >
      <div className="SupportOptionModalOption_content">
        <div className="SupportOptionModalOption_content__line1">
          <div
            className={`SupportOptionModalOption_content__line1_circle ${
              optionSelected === index ? "selected" : ""
            }`}
          ></div>
          <div className="SupportOptionModalOption_content__line1_text">
            <h3 className={optionSelected === index ? "selected" : ""}>
              {title}
            </h3>
            {worth && <p>Pledge ${worth} or more</p>}
          </div>
        </div>
        <p className="SupportOptionModalOption_content__line2">{description}</p>
        {left && left !== 0 ? (
          <h4 className="SupportOptionModalOption_content__line3">
            {left}
            <span>left</span>
          </h4>
        ) : (
          false
        )}
      </div>
      {optionSelected === index && (
        <div className="SupportOptionModalOption_clicked">
          <form onSubmit={handleSubmit}>
            {left && (
              <>
                <label htmlFor="amount">Enter youe pledge</label>
                <div className="input">
                  $
                  <input
                    id="amount"
                    type="number"
                    value={Amount}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <button type="submit">Continue</button>
          </form>
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 8px;
  &.selected {
    border: 2px solid var(--cyan-dark);
  }
  &.disabled {
    opacity: 0.5;
  }
  &:hover {
    .SupportOptionModalOption_content__line1 {
      &_circle {
        outline-color: var(--cyan-dark);
      }
      &_text {
        & > h3 {
          color: var(--cyan-dark);
        }
      }
    }
  }
  .SupportOptionModalOption {
    &_content {
      padding: 33px 28px 31px;
      position: relative;
      @media (max-width: 548px) {
        padding: 24px;
      }
      &__line {
        &1 {
          display: flex;
          align-items: center;
          gap: 24px;
          @media (max-width: 548px) {
            gap: 16px;
          }
          &_circle {
            width: 22px;
            height: 22px;
            border: 6px solid var(--white);
            outline: 1px solid var(--gray);
            border-radius: 50%;
            &.selected {
              outline-color: var(--cyan-dark);
              background-color: var(--cyan-dark);
            }
          }
          &_text {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            @media (max-width: 548px) {
              gap: 8px;
            }
            & > h3 {
              font-weight: 500;
              font-size: 16px;
              line-height: 20px;
              letter-spacing: 0.01em;
              &.selected {
                color: var(--cyan-dark);
              }
              @media (max-width: 548px) {
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.009em;
              }
            }
            & > p {
              font-weight: 500;
              font-size: 15px;
              line-height: 18px;
              letter-spacing: 0.04em;
              color: var(--cyan);
              @media (max-width: 548px) {
                font-size: 14px;
                line-height: 17px;
              }
            }
          }
        }
        &2 {
          font-weight: 400;
          font-size: 15px;
          line-height: 185%;
          letter-spacing: 0.001em;
          color: var(--gray);
          padding-top: 11px;
          padding-left: 48px;
          @media (max-width: 548px) {
            padding-top: 24px;
            padding-left: 0;
            font-size: 14px;
            line-height: 170%;
            letter-spacing: 0.002em;
          }
        }
        &3 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          position: absolute;
          top: 30px;
          right: 28px;
          @media (max-width: 642px) {
            position: unset;
            padding-top: 24px;
            top: unset;
            right: unset;
          }
          span {
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
    }
    &_clicked {
      padding: 24px 28px;
      border-top: 1px solid var(--gray);
      @media (max-width: 548px) {
        padding: 24px;
      }
      & > form {
        display: flex;
        gap: 16px;
        align-items: center;
        flex-wrap: wrap;
        @media (max-width: 548px) {
          gap: 17px;
        }
        & > label {
          flex: 1;
          color: var(--gray);

          font-weight: 400;
          font-size: 15px;
          line-height: 185%;
          letter-spacing: -0.005em;
          width: 100%;
          @media (max-width: 548px) {
            font-size: 14px;
            margin: auto;
          }
        }
        & > .input {
          width: min(100px, 100%);
          padding: 10px 24px 11px;
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid var(--gray);
          border-radius: 23.5px;
          color: var(--gray);

          font-weight: 500;
          font-size: 14px;
          line-height: 185%;
          letter-spacing: -0.005em;
          @media (max-width: 548px) {
          }
          & > input {
            border: none;
            outline: none;
            width: 100%;
            color: var(--black);
            @media (max-width: 548px) {
            }
          }
        }
        & > button {
          width: min(107px, 100%);
          height: max-content;
          align-self: center;
          border-radius: 24px;
          text-align: center;
          border: none;
          outline: none;
          background-color: var(--cyan);
          color: var(--white);
          padding: 15px 20px;

          font-weight: 700;
          font-size: 14px;
          line-height: 17px;

          &:hover {
            background-color: var(--cyan-dark);
          }
          @media (max-width: 548px) {
          }
        }
      }
    }
  }
`;
