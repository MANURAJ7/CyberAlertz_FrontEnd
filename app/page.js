"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { useRouter } from "next/navigation";
import FooterComponent from "./Custom_Components/FooterComponent";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./public/Logo.gif";

const Home = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const headers = new Headers();
        headers.append("projectId", process.env.NEXT_PROJECT_ID);
        headers.append("environmentId", process.env.NEXT_ENVIRONMENT_ID);

        const response = await fetch(process.env.NEXT_GET_TOP_ARTICLES, {
          headers,
        });
        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-slate-950 text-cyan-700 flex">
        <p className="text-4xl mx-auto my-auto">Loading...</p>
      </div>
    );

  const handleCardClick = (articleId) => {
    router.push(`/Article/${articleId}`);
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-950 text-white" : "bg-white text-gray-900"
      } min-h-screen`}
    >
      <section id="slider" className="py-16">
        <Image
          alt="Logo..."
          className="mx-auto"
          src={Logo}
          width={300}
          height={200}
        ></Image>
        <p className="px-52 text-4xl font-bold mb-6">Hot Newz</p>
        <Carousel className="w-3/4 mx-auto">
          <CarouselContent>
            {articles.slice(0, 5).map((article, index) => (
              <CarouselItem
                key={article._id}
                className="md:basis-1/2 lg:basis-1/3"
                onClick={() => handleCardClick(article._id)}
              >
                <div className="p-1">
                  <Card className="bg-gray-900 text-gray-300 cursor-pointer border-0 hover:shadow-cyan-500 hover:shadow">
                    <CardHeader className="">
                      <CardTitle className="text-lg">
                        {article.headline}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-md flex items-center justify-center text-sm">
                      <span className="line-clamp-2">{article.summary}</span>
                    </CardContent>
                    <CardFooter className="text-gray-400 text-xs">
                      <p>{article.date}</p>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section
        id="Latest_News"
        className="flex flex-col justify-center py-16 px-4 md:px-16 w-5/6 mx-auto"
      >
        <p className="px-4 text-4xl font-bold mb-6 justify-left">Latest</p>

        {/* Responsive Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(3).map((article) => (
            <motion.div
              key={article._id}
              className={`bg-gray-900 rounded-lg p-6 cursor-pointer w-md hover:shadow-cyan-500 hover:shadow`}
              onClick={() => handleCardClick(article._id)}
              //   whileHover={{
              //     boxShadow: "-5px 5px 17px hsla(188.7 94.5% 42.7%, 0.7)",
              //   }}
            >
              <h3 className="text-xl font-semibold mb-2">{article.headline}</h3>
              <p className="text-sm mb-4">{article.summary}</p>
              <p className="text-xs text-gray-400">{article.date}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default Home;
