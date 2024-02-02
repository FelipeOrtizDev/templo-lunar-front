import { produtos } from "@/utils/produtos";
import Container from "./Components/Container";
import { truncateText } from "@/utils/TruncateText";

export default function Home() {
  return (
    <>
    <div className="p-8">
    <Container>
      <div>
        
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2x1:grid-cols-6 gap:8">
        {produtos.map((produtos: any) => {         
          // eslint-disable-next-line react/jsx-key
          return <div>{ truncateText( produtos.nome)}</div>;
        })}
      </div>
    </Container>
    </div>
    </>
  )
}
