import { Container } from "./home.style";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Profile } from "../Profile";

export const Home = () => {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      <main>
        <Profile />
      </main>
      <Footer />
    </Container>
  );
};
