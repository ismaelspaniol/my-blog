import { ArticleCard } from "@/components/articleCard";
import Link from "next/link";

export default function Home() {
    const articlesCard = [
        {
            id: 1,
            title: "Meu primeiro post",
            date: "Junho 2020",
            url: "/articles/first-smart-contract",
            content: [
                "Você sabe que ao utilizar instâncias de interfaces não é necessário destruir o objeto manualmente, utilizando o método Free.",
                "Isso ocorre porque instâncias de interfaces possuem uma contagem de referência e, assim, o compilador sabe quando desalocar a instância automaticamente.",
                "Mas e se ocorrer uma exceção dentro de um método de uma instância, numa composição de instâncias de interfaces, seria seguro não utilizar try-finally para ter a certeza que todos os objetos serão desalocados, atribuindo nil as instâncias?",
            ],
        },
        // Outros posts...
    ];

    return (
        <main>
            {articlesCard.map((article, index) => (
                <ArticleCard
                    id={article.id}
                    key={article.id}
                    title={article.title}
                    date={article.date}
                    url={article.url}
                    content={article.content}
                />
            ))}
        </main>
    );
}
