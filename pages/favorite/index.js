import Link from "next/link";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

export default function Favorite({data}){
  return(
    <main className="container">
      <Navbar/>
      <section>
        <div className="container_card">
        <h1>restaurant favorite</h1>
        <div className='row'>
          {data.map((rest)=>(
            <Link href={`/favorite/${rest.id}`} key={rest.id}>
              <div className="col">
                <Card
                    image={rest.image}
                    location={rest.location}
                    title={rest.title}
                    rating={rest.rating}
                  />
              </div>
            </Link>
          ))}
        </div>
        </div>
      </section>
    </main>
  )
}
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/restaurant/');
  const data = await res.json();
    return {
      props: {
        data,
      },
    };

}