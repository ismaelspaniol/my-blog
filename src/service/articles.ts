import prisma from "../../lib/prisma";

export  const getArticles = async () => {
    const articles = await prisma.article_card.findMany();
    return articles;
};