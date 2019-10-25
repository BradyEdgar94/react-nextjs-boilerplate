import { isEven } from '../../../lib/helpers'
import Card from '../../molecules/FloatingCard'

export default ({ title, caption, cards = [] }) =>
  <section id="services" className="section inset light">
    <div className="container">
      <div className="section-header">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: caption }} />
      </div>
      <div className="row">
        {
          cards.map((item, i) => (
            <div className={`col-md-6 col-lg-5 ${isEven(i) ? 'offset-lg-1' : undefined}`} key={i}>
              <Card {...item} />
            </div>
          ))
        }
      </div>
    </div>
  </section>
