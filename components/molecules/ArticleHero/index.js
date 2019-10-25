export default ({ title, image = {} }) =>
  <section
    id="intro"
    className="article-hero clearfix"
    style={{ backgroundImage: `url(${image.url ? image.url : '/images/intro-bg.png'})` }}>
    <div className="container">
      <div className="hero-info">
        <h1>{title}</h1>
      </div>
    </div>
  </section>
