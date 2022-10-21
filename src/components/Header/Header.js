import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <AnimatedNavLink href="/sale">Sale</AnimatedNavLink>
          <AnimatedNavLink href="/new">New&nbsp;Releases</AnimatedNavLink>
          <AnimatedNavLink href="/men">Men</AnimatedNavLink>
          <AnimatedNavLink href="/women">Women</AnimatedNavLink>
          <AnimatedNavLink href="/kids">Kids</AnimatedNavLink>
          <AnimatedNavLink href="/collections">Collections</AnimatedNavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  --duration: 150ms;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const AnimatedNavLink = ({ children, ...delegated }) => (
  <NavLink {...delegated}>
    <NormalLine>{children}</NormalLine>
    <BoldLine>{children}</BoldLine>
  </NavLink>
);

const NormalLine = styled.span`
  transition: transform var(--duration);
  transform: translateY(0);
  font-weight: ${WEIGHTS.medium};

  ${NavLink}:hover &, ${NavLink}:focus & {
    transform: translateY(-100%);
    transition: transform var(--duration);
  }
`;
const BoldLine = styled.span`
  transition: transform var(--duration);
  transform: translateY(100%);
  position: absolute;
  font-weight: ${WEIGHTS.bold};
  opacity: 0;

  ${NavLink}:hover &, ${NavLink}:focus & {
    transform: translateY(0);
    transition: transform var(--duration);
    opacity: 1;
  }
`;

export default Header;
