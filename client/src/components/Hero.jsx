import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Hero'
import hero1 from '../assets/images/hero1.webp'
import hero2 from '../assets/images/hero2.webp'
import hero3 from '../assets/images/hero3.webp'
import hero4 from '../assets/images/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]
const Hero = () => {
  return (
    <Wrapper>
      <div className=" innerGridContainer">
        <div>
          <h2 className="innerTitle">Discover all signs today.</h2>

          <p className="mt-8 max-w-xl text-lg leading-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua. Anim aute id magna aliqua ad ad non deserunt sunt.
            Qui irure qui lorem cupidatat commodo.
          </p>
          <div className="distinct">
            <Link to="sign-list" className="btn btn-primary ">
              Signs
            </Link>
          </div>
        </div>

        <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
          {carouselImages.map((image, index) => {
            return (
              <div key={image} className="carousel-item">
                <img
                  src={image}
                  className="rounded-box h-full w-80  object-cover"
                />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Hero
