import Link from "next/link";

export interface IArticleCard {
    id: number;
    title: string;
    date: Date;
    url: string;
    content: IParagraph;
}

export interface IParagraph {
    paragraph: string[];
}

export const ArticleCard = ({ articleCard }: { articleCard: IArticleCard }) => {
    return (
        <div className=" p-5 rounded ">
            <Link href={articleCard.url}>
                <p className=" text-4xl font-semibold">{articleCard.title}</p>
            </Link>
            <p className="italic">{articleCard.date.toISOString()}</p>
            <div>
                {articleCard.content.paragraph.map((paragraph, index) => (
                    <p className="text-left pb-4" key={index}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};
