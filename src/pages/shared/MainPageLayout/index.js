import { Container } from "./mainPageLayout.style";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { GradientDivider } from "../../../components/GradientDivider";

export const MainPageLayout = ({ children }) => {
  return (
    <Container>
      <header>
        <Navbar />
        <GradientDivider />
      </header>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
