import styled from 'styled-components';
import LogoIcon from '../icons/logo';
import { SecondaryButton } from './styled';

const Navbar = (): JSX.Element => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LogoIcon />
        <SecondaryButton>Apply for access</SecondaryButton>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: var(--dark-purple);
`;

const NavbarInnerContainer = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 39px;
  max-width: 1188px;

  @media (max-width: 980px) {
    height: 98px;
  }
  @media (max-width: 500px) {
    padding: 0 16px;
  }
`;

export default Navbar;
