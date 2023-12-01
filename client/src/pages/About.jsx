import Wrapper from '../assets/wrappers/About.js'
const About = () => {
  return (
    <Wrapper>
      <div className="innerContainer">
        <h3 className="innerTitle">We love</h3>
        <div className="stats shadow bg-slate-100">
          <div className="stat">
            <div className="stat-title statbox">Hamoria</div>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam
          odit, officiis eos mollitia alias, doloremque, aspernatur ratione
          asperiores voluptas labore minus dolores reprehenderit corporis quos.
          Assumenda molestias harum dignissimos?
        </p>
      </div>
    </Wrapper>
  )
}
export default About
