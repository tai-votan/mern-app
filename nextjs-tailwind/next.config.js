/** @type {import('next').NextConfig} */
const { ANALYZE } = process.env;

const nextTranslate = require("next-translate");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: ANALYZE === "true",
});

const { locales, defaultLocale } = require("./i18n.json");

module.exports = withBundleAnalyzer(
  nextTranslate({
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales,
      defaultLocale,
      localeDetection: false,
    },
  })
);
