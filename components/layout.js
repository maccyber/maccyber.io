import Head from 'next/head'
import { name, version } from '../package.json'

export default ({ children }) => (
  <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' type='image/png' href='static/favicon-96x96.png' sizes='96x96' />
      <link rel='icon' type='image/png' href='static/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='static/favicon-16x16.png' sizes='16x16' />
      <link rel='icon' type='image/png' href='static/favicon-128.png' sizes='128x128' />
      <link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:400,200,300' rel='stylesheet' type='text/css' />
      <title>
        { name } - { version }
      </title>
    </Head>
    { children }
    <style jsx global>
      {`
        body {
          background: #222;
          color: #565656;
          font-family: 'Source Code Pro', monospace;
          text-align: center;
          height: 100%;
          margin-top: 100px;
        }
        h1 {
          font-size: 52px;
          text-align: center;
          font-weight: 100;
        }
        svg {
          fill: #DBDBDB;
        }
      `}
    </style>
  </div>
)
