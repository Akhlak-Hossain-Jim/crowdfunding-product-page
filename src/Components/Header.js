import React, { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [ham, setHam] = useState(false);
  return (
    <>
      <Container>
        <div className="Header_logo">
          <img src="/images/logo.svg" alt="crowdfunding logo" />
        </div>
        <nav className="Header_nav">
          <a
            href="/"
            className="Header_nav__link"
            onClick={(e) => e.preventDefault}
          >
            About
          </a>
          <a
            href="/"
            className="Header_nav__link"
            onClick={(e) => e.preventDefault}
          >
            Discover
          </a>
          <a
            href="/"
            className="Header_nav__link"
            onClick={(e) => e.preventDefault}
          >
            Get Started
          </a>
        </nav>
        <div className="Header_ham" onClick={() => setHam(!ham)}>
          {ham ? (
            <img src="/images/icon-close-menu.svg" alt="close menu" />
          ) : (
            <img src="/images/icon-hamburger.svg" alt="open menu" />
          )}
        </div>
      </Container>
      {ham && (
        <Menu>
          <a
            href="/"
            className="Header_menu__link"
            onClick={(e) => e.preventDefault()}
          >
            About
          </a>
          <a
            href="/"
            className="Header_menu__link"
            onClick={(e) => e.preventDefault()}
          >
            Discover
          </a>
          <a
            href="/"
            className="Header_menu__link"
            onClick={(e) => e.preventDefault()}
          >
            Get Started
          </a>
        </Menu>
      )}
    </>
  );
}

const Container = styled.header`
  width: min(1209px, 100%);
  margin: 0 auto;
  padding: 48px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  @media (max-width: 548px) {
    padding: 32px 24px;
    margin: 0;
  }
  .Header {
    &_logo {
      width: min(128px, 100%);
      img {
        width: 100%;
        height: auto;
        object-position: center;
      }
    }
    &_nav {
      display: flex;
      align-items: center;
      gap: 32px;
      @media (max-width: 768px) {
        display: none;
      }
      &__link {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.03em;
        color: var(--white);
        text-decoration: none;
      }
    }
    &_ham {
      cursor: pointer;
      @media (min-width: 769px) {
        display: none;
      }
    }
  }
`;

const Menu = styled.nav`
  position: fixed;
  top: 88px;
  right: 24px;
  background-color: var(--white);
  width: min(327px, 95%);
  box-shadow: var(--box-shadow);
  border-radius: 9px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  .Header_menu__link {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    letter-spacing: -0.005em;
    padding: 24px;
    color: var(--black);
    text-decoration: none;
    &:not(:last-child) {
      border-bottom: 1px solid var(--gray-mid);
    }
  }
`;
