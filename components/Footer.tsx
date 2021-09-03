import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row p-4 bg-gray-600'>
      <div className='flex-1 mb-4 md:mb-0'>
        <p className='text-gray-100 text-xs mb-1'>
          instagramの投稿でWebサイトを自動で更新！
        </p>
        <p className='text-gray-100 mb-1'>インスタウェブ株式会社</p>
        <p className='text-gray-100 text-xs mb-2'>山口県防府市1-7-10</p>
      </div>
      <div className='align-item'>
        <a
          className='px-4 py-2 text-sm text-gray-100 border rounded'
          href='https://forms.gle/oJh1kiEhjbrXTJGa7'
          target='_blank'
        >
          Webでのお問い合わせ
        </a>
      </div>
    </div>
  );
};

export default Footer;
