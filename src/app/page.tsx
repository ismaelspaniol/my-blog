import { ArticleCard, IArticleCard } from "@/components/articleCard";
import prisma from "../../lib/prisma";
import { getArticles } from "@/service/articles";

const Home = async () => {
    const fetchedArticles: IArticleCard[] = await getArticles();
    return (
        <main>
            <div>
                {fetchedArticles.map((article: IArticleCard) => (
                    <div key={article.id}>
                        <ArticleCard articleCard={article}></ArticleCard>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Home;
