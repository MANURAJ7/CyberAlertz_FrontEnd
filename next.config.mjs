/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_GET_TOP_ARTICLES: process.env.GET_TOP_ARTICLES,
    NEXT_PROJECT_ID: process.env.PROJECT_ID,
    NEXT_ENVIRONMENT_ID: process.env.ENVIRONMENT_ID,
    NEXT_GET_ARTICLE: process.env.GET_ARTICLE,
    NEXT_VECTOR_SEARCH_API: process.env.VECTOR_SEARCH_API,
    NEXT_GEMINI_KEY: process.env.GEMINI_KEY,
  },
};

export default nextConfig;
