import { isEven } from '../../../lib/helpers'

export default ({ title, caption, blocks = [] }) =>
  <section id="about" className="section">
    <div className="container">
      <div className="section-header">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: caption }} />
      </div>
      {
        blocks.map(({ content, list, image }, i) => (
          <div className="row split-content-block" key={i}>
            <div className={`col-lg-6 background wow fadeInUp ${isEven(i) ? 'order-lg-2' : undefined}`}>
              <img src={image.url} className="img-fluid" alt={image.alt} />
            </div>
            <div className="col-lg-6 content">
              <div className="inner" dangerouslySetInnerHTML={{ __html: content }} />
              {
                list && list.map(({ icon, title, caption }, i) => (
                  <div className="icon-box wow fadeInUp" key={i}>
                    { icon && <div className="icon"><i className={icon}></i></div> }
                    <h4 className="title"><a href="">{title}</a></h4>
                    <p className="description">{caption}</p>
                  </div>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </section>











  //
  // <div className="row split-content-block">
  //   <div className="col-lg-6 wow fadeInUp">
  //     <img src="static/images/about-extra-1.svg" className="img-fluid" alt="" />
  //   </div>
  //   <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
  //     <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
  //     <p>
  //       Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati possimus ea. Quas molestiae perspiciatis occaecati qui rerum. Deleniti quod porro sed quisquam saepe. Numquam mollitia recusandae non ad at et a.
  //     </p>
  //     <p>
  //       Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti. Odit qui asperiores ea corporis deserunt veritatis quidem expedita perferendis. Qui rerum eligendi ex doloribus quia sit. Porro rerum eum eum.
  //     </p>
  //   </div>
  // </div>
  // <div className="row split-content-block">
  //   <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
  //     <img src="static/images/about-extra-2.svg" className="img-fluid" alt="" />
  //   </div>
  //   <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
  //     <h4>Neque saepe temporibus repellat ea ipsum et. Id vel et quia tempora facere reprehenderit.</h4>
  //     <p>
  //      Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.
  //     </p>
  //     <p>
  //       Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.
  //     </p>
  //     <p>
  //       Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
  //     </p>
  //   </div>
  // </div>
