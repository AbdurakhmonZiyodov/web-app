import { HeaderStyle } from "./Header.styled";
import { Container } from "global.styled";

import HeaderRight from "./components/HeaderRight";
import Logo from "./components/Logo";
import Search from "./components/Search";

const Header = () => {
  return (
    <HeaderStyle>
      <Container flex>
        <Logo />
        <Search />

        <HeaderRight />
      </Container>
    </HeaderStyle>
  );
};

export default Header;
