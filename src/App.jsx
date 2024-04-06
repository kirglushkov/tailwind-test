import CardHeader from "./components/CardHeader"
import Container from "./components/Container"
import Content from "./components/Content"
import FiltersBar from "./components/FiltersBar"
import Pagination from "./components/Pagination"


export default function App() {
  return (
    <Container>
      <CardHeader/>
      <FiltersBar/>
      <Content/>
      <Pagination/>
    </Container>
  )
}