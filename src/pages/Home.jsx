import { NavLink } from 'react-router-dom'
import homeBanner from '../assets/picture/homeBanner.svg'
import homeBannerMobile from '../assets/picture/homeBannerMobile.svg'
// import Loader from '../components/Loader/Loader'
// import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
// import useGetAccomodationData from '../utils/hooks/getDataAccomodation'
import accomodations from '../data/logements.json'
import Cardv2 from '../components/Card/Cardv2'

function Home() {
  // const { isLoading, data, error } = useGetAccomodationData()
  // console.log('error', error)
  // console.log('isLoading', isLoading)
  // console.log('data', data)
  return (
    <div>
      <main>
        <div className="main__homeBanner">
          <img
            className="main__homeBanner--img"
            src={homeBanner}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          />
          <img
            className="main__homeBanner--imgMobile"
            src={homeBannerMobile}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          />
          <h1 className="main__homeBanner--title">
            Chez vous,<br className="main__homeBanner--title--breack"></br>{' '}
            partout et ailleurs
          </h1>
        </div>
        <section className="main__gallery">
          {accomodations.map((card) => (
            <NavLink
              className="main__gallery--card"
              key={`${card.id}`}
              to={`/accomodation/${card.id}`}
            >
              <Cardv2
                key={`${card.id}`}
                cover={card.cover}
                title={card.title}
              />
            </NavLink>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
