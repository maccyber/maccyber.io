import posts from '../posts'
const md = require('markdown-it')()

export default ({id}) => (
  <div>
    {posts.map(post =>
      <div key={post.slug} className='post'>
        <div className='title'>
          <b>{post.title}</b>
        </div>
        <div className='body'>
          {post.description}
          <div className='post-body' dangerouslySetInnerHTML={{ __html: md.render(post.body) }} />
          <i className='author'>
            {post.author} - {post.date}
          </i>
        </div>
      </div>
    )}
    <style jsx>
      {`
        .post {
          margin-top: 20px;
        }
        .title {
        }
        .body {
          margin-top: 0px;
        }
        .author {
          color: #939393;
        }
      `}
    </style>
  </div>
)
