import { Container } from "./home.style";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Hello</h1>
      </main>
      <Footer />
    </Container>
  );
};
