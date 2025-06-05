import Container from "@/components/Container";
import ListItems from "./components/ListItems";
import HeaderHome from "./components/HeaderHome";

export default function HomePage() {
  return (
    <Container>
      <HeaderHome />
      <ListItems />
    </Container>
  );
}
