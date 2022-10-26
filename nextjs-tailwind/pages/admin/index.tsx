import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import useTranslation from "next-translate/useTranslation";
import { Button, Input } from "@/components/common";
import { useState } from "react";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [translate, setTranslate] = useState<string>("common:login.password");

  const onSubmit = () => {
    setTranslate("common:login.username");
  };

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center p-3.5 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(/static/images/bg.png)` }}
    >
      <NextSeo
        title="Admin"
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
      <div className="bg-white rounded-lg flex-grow py-16 px-4 lg:px-14 w-full max-w-lg">
        <div className="text-4xl font-bold text-center pb-9">{t("common:login.title")}</div>
        <Input className="mb-3" placeholder={t("common:login.username")} />
        <Input className="mb-3" placeholder={t("common:login.password")} type="password" />
        {t(translate)}
        <Button type="primary" block onClick={onSubmit}>
          {t("common:login.title")}
        </Button>
      </div>
    </div>
  );
};

export default Home;
