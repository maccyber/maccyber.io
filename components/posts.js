import posts from '../posts'

export default () => (
  <div className='posts'>
    {posts.map(post =>
      <div key={post.slug} className='post'>
        <div className='title'>
          <b>{post.title}</b>
        </div>
        <div className='body'>
          {post.description}
          <br />
          <i className='author'>
            {post.author} - {post.date}
          </i>
        </div>
      </div>
    )}
    <style jsx>
      {`
        .posts {
        }
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
