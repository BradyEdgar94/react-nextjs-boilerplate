import Link from 'next/link'

export default ({ title, caption, icon, href = '/default', as }) =>
  <div className="floating-card">
    {
      icon &&
      <span className="icon" style={{ backgroundImage: `url(${icon.url})` }} />
    }
    <h4 className="title">
      {
        as
          ? <Link href={href} as={as}><a>{title}</a></Link>
          : title
      }
    </h4>
    <div className="description" dangerouslySetInnerHTML={{ __html: caption }} />
  </div>
