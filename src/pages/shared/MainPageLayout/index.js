import { Container } from "./mainPageLayout.style";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";

export const MainPageLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
