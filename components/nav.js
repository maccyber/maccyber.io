import octicons from 'octicons'

const links = [
  {
    title: 'github',
    icon: octicons['mark-github'].toSVG(),
    url: 'https://github.com/maccyber'
  },
  {
    title: 'mail',
    icon: octicons.mention.toSVG(),
    url: 'mailto:jonas.enge@gmail.com'
  },
  {
    title: 'b5 test',
    icon: octicons.person.toSVG(),
    url: 'https://bigfive.world'
  },
  {
    title: 'blog',
    icon: octicons.comment.toSVG(),
    url: '/'
  }
]

export default () => (
  <div>
    { links.map(link =>
      <div key={link.title}>
        <a href={link.url} title={link.title}>
          <span className='icon' dangerouslySetInnerHTML={{__html: link.icon}} />
        </a>
      </div>
      )
    }
    <style jsx>
      {`
        .icon {
          width: 16px;
          height: 16px;
          margin-right: 12px;
        }
        div {
          display: inline-block;
          position: relative;
        }
        a {
          color: #DBDBDB;
          text-decoration: none;
        }
        a:hover: {
          color: #928dbf;
        }
        a[title]:hover:after {
          border-radius: 5px;
          top: 100%;
          margin: 5px;
          color: #fff;
          content: attr(title);
          right: -50%;
          padding: 3px 3px;
          position: absolute;
        }
        a[title]:hover:before {
          border: solid;
          border-color: #928dbf transparent;
          border-width: 6px 6px 0 6px;
          bottom: 25px;
          content: "";
          left: 10%;
          position: absolute;
        }
      `}
    </style>
  </div>
)
