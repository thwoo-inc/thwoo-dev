// import Meta from './Meta';

import Footer from './Footer';

type Props = {
  children: React.ReactNode;
  // title?: string;
  // description?: string;
  // url?: string;
  // thumbnail?: string;
};

const Layout = ({
  children,
}: // title,
// description,
// url,
// thumbnail,
Props): JSX.Element => {
  return (
    <>
      {/* <Meta
        title={title}
        description={description}
        url={url}
        thumbnail={thumbnail}
      /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
