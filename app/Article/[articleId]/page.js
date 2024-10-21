"use client";
import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Textarea } from "../../../components/ui/textarea";
import { cn } from "../../../lib/utils";
import { Input } from "../../../components/ui/input";
import { Search } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import FooterComponent from "../../Custom_Components/FooterComponent";

const Article = ({ params }) => {
  const [article, setArticle] = useState({});
  const [prompt, setPrompt] = useState("");
  const [resp, setResp] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getArticle() {
      try {
        const headers = new Headers();
        headers.append("projectId", process.env.NEXT_PROJECT_ID);
        headers.append("environmentId", process.env.NEXT_ENVIRONMENT_ID);
        let link = `${process.env.NEXT_GET_ARTICLE}${params.articleId}`;
        const response = await fetch(link, { headers });
        const newArticle = await response.json();
        setArticle(newArticle);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    }
    getArticle();
  }, []);

  function fetchAI() {
    console.log(prompt);
    setPrompt("");
  }

  if (loading)
    return (
      <div className="min-h-screen bg-slate-950 text-cyan-700 flex">
        <p className="text-4xl mx-auto my-auto">Loading...</p>
      </div>
    );
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col grow">
      <p className="w-[70%] mx-auto text-4xl text-gray-300 p-10">
        {article.headline}
      </p>
      <Tabs
        className="w-[70%] mx-auto bg-slate-950 text-gray-100"
        defaultValue="Article"
      >
        <TabsList
          className={cn("grid w-full grid-cols-2 bg-gray-900 text-white")}
        >
          <TabsTrigger
            className={cn(
              "data-[state=active]:bg-cyan-900 data-[state=active]:text-white"
            )}
            value="Article"
          >
            Article
          </TabsTrigger>
          <TabsTrigger
            className={cn(
              "data-[state=active]:bg-cyan-900 data-[state=active]:text-white"
            )}
            value="AI"
          >
            AI
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Article">
          <Card className="bg-gray-900 border-0">
            <CardHeader className="text-gray-600">
              <CardTitle>{article.date}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-300">
              {/* <p className="text-2xl text-gray-300">Summary :</p> */}
              <p className="py-4">{article.summary}</p>
              <hr className="w-[80%] mx-auto border-cyan-700" />
              <p className="pt-3">{article.description}</p>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="AI">
          <Card className="bg-gray-900 text-gray-100 border-0 py-6">
            <CardContent className="space-y-2 mx-auto">
              <div className="space-y-1">
                <Textarea
                  placeHolder="Prompt..."
                  onChange={(e) => setPrompt(e.target.value)}
                  className="mb-2"
                />
                <Button
                  className="bg-cyan-900 hover:bg-cyan-400 hover:text-gray-900"
                  onClick={fetchAI}
                >
                  Submit
                </Button>
                <div
                  className="w-[90%] mx-auto p-5"
                  style={{
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                  }}
                >
                  {resp}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <FooterComponent />
    </div>
  );
};

export default Article;
