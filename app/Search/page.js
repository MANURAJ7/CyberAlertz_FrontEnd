"use client";
import { useState } from "react";
import { Textarea } from "../../components/ui/textarea";
import FooterComponent from "../Custom_Components/FooterComponent";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";

export default function Search() {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(10);

  const fetchArticles = async () => {
    try {
      const headers = new Headers();
      headers.append("projectId", process.env.NEXT_PROJECT_ID);
      headers.append("environmentId", process.env.NEXT_ENVIRONMENT_ID);
      const response = await fetch(
        `${process.env.NEXT_VECTOR_SEARCH_API}?limit=${limit}&query=${input}`,
        { headers }
      );
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <div className="mx-auto w-[70%]">
        <p className="text-5xl pt-14 pb-8 text-gray-300">
          Smart Article Search
        </p>
        <Textarea
          placeHolder="Search..."
          onChange={(e) => setInput(e.target.value)}
          className={cn("mb-2 border-gray-400")}
        />
        <Button
          className="bg-cyan-900 text-gray-100 hover:bg-cyan-400 hover:text-gray-900 "
          onClick={fetchArticles}
        >
          Search
        </Button>
        <div id="cards">
          {loading ? (
            <p className="text-cyan-700 text-7xl text-center pt-14">
              Whats on you Mind...
            </p>
          ) : (
            articles.map((article, index) => (
              <div>
                <Card className="cursor-pointer border-0 bg-gray-900 mt-4 hover:shadow-cyan-500 hover:shadow">
                  <CardHeader className="">
                    <CardTitle className="text-gray-200">
                      {article.headline}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300">
                    <span className="line-clamp-2">{article.summary}</span>
                  </CardContent>
                  <CardFooter className="text-gray-400 text-xs">
                    <p>{article.date}</p>
                  </CardFooter>
                </Card>
              </div>
            ))
          )}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
