import { NextPage } from 'next';
import { Button } from 'antd';
import Router from 'next/router';


interface ErrorPageProps {
  statusCode: number
}

const ErrorPage: NextPage<ErrorPageProps> = (props) => {

  let RenderComp;
  switch (props.statusCode) {
    case 200:
    case 404: {
      RenderComp = () => (
        <div className='content-container'>
          <style jsx>{`
              .content-container {
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .error-image {
                width: 200px;
                height: 200px;
                margin: 10px 0;
              }
            `}</style>
          <img className='error-image' alt='error-img' src='/static/empty.png' />
          <h3>The page is not found | 404～</h3>
          <Button onClick={() => Router.push('/')} type='primary' ghost>Back Home</Button>
        </div>
      );
      break;
    }
    case 500: {
      RenderComp = () => (
        <div className='content-container'>
          <style jsx>{`
              .content-container {
                position: absolute;
                top: 0;
                display: flex;
                width: 100%;
                height: 100%;
                flex-direction: column;
                align-items: center;
                justify-content: center;
              }
              .error-image {
                width: 200px;
                height: 200px;
                margin: 10px 0;
              }
            `}</style>
          <img className='error-image' alt='error-img' src='/static/unknown_error.png' />
          <h3>The page is error | 500～</h3>
          <Button onClick={() => Router.push('/')} type='primary' ghost>Back Home</Button>
        </div>
      );
      break;
    }
    default:
      break;
  }
  return (
    <RenderComp />
  );
}

export default ErrorPage;
