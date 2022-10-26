import type { NextPage } from "next";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Trans from "next-translate/Trans";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
      <main>
        <Trans
          i18nKey="common:title"
          components={[
            <h1 key="common:title.h1" className="title" />,
            <Link key="common:title.a" href="/admin">
              Admin
            </Link>,
          ]}
        />
      </main>
    </div>
  );
};

export default Home;
