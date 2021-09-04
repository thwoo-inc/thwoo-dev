// import Image from 'next/image';
// import instagram from '../public';
// import twitter from '../public';

const Social = () => {
  return (
    <div className='flex flex-col md:flex-row items-center'>
      <div className='flex-1 text-center'>
        <p>
          SNSで日々発信しています。
          <br />
          フォローをお願いします。
        </p>
      </div>
      <div className='flex-1 flex flex-row p-4'>
        <div className=''>
          <img
            src='/img/qr_instagram.png'
            alt='InstagramアカウントのQRコード'
          />
        </div>
        <div className=''>
          <img src='/img/qr_twitter.png' alt='TwitterアカウントのQRコード' />
        </div>
      </div>
    </div>
  );
};

export default Social;
