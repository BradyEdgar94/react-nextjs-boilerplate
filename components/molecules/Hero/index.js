import Link from 'next/link'
import { getSlug } from '../../../lib/helpers'

export default ({ title, buttons = [], image = {} }) =>
  <section id="intro" className="hero clearfix">
    <div className="container">
      <div className="hero-img">
        <img src={image.url} alt={image.alt} className="img-fluid" />
      </div>
      <div className="hero-info">
        <h1>{title}</h1>
        {
          buttons.length &&
          <div>
            {
              buttons.map(({ title, link }, i) =>
               <Link href="/default" as={getSlug(link)} key={i}>
                  <a className={`btn ${i % 2 ? 'hollow' : undefined}`}>
                    {title}
                  </a>
                </Link>
             )
            }
          </div>
        }
      </div>
    </div>
  </section>
