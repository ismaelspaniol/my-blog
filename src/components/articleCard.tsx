import Link from "next/link";

export const ArticleCard = ({
    id,
    date,
    title,
    url,
    content,
}: {
    id: number;
    date: string;
    title: string;
    url: string;
    content: string[];
}) => {
    return (
        <div className=" p-5 rounded ">
            <Link href={url}>
                <p className=" text-4xl font-semibold">{title}</p>
            </Link>
            <p className="italic">{date}</p>
            <div id="content">
                {" "}
                {content.map((paragrafo, index) => (
                    <p className="text-left pb-4" key={index}>
                        {paragrafo}
                    </p>
                ))}
            </div>
        </div>
    );
};
