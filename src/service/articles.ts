import { IArticleCard, IParagraph } from "@/components/articleCard";
import prisma from "../../lib/prisma";

export const getArticles = async (): Promise<IArticleCard[]> => {
    const articles = await prisma.article_card.findMany();
    // Map the data retrieved from the database to match the IArticleCard interface
    return articles.map((article:any) => ({
        id: article.id,
        title: article.title,
        date: article.date,
        url: article.url,
        content: article.content as IParagraph, // Assuming content is in the format of IParagraph
    }));
};