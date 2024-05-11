import { ArticleCard } from "@/components/articleCard";
import prisma from "../../lib/prisma";
import { getArticles } from "@/service/articles";

const Home = async () => {
    const fetchedArticles = await getArticles();
    return (
        <main>
            <div>
                {fetchedArticles.map((article: ArticleCard) => (
                    <div key={article.id}>
                        <ArticleCard articleCard={article}></ArticleCard>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;
