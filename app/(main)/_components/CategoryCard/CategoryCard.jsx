import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
    const { title, thumbnail: { url } } = category;

    return (
        <>
            <Link
                href={`/courses?categories=${title}`}
                className='relative p-2 overflow-hidden transition-all duration-500 ease-in-out border rounded-lg bg-background hover:scale-105'
            >
                <div className='flex flex-col items-center justify-between gap-4 p-6 rounded-md'>
                    <Image
                        className="filter dark:invert dark:brightness-0"
                        src={url}
                        alt={title}
                        width={100}
                        height={100}
                        priority
                    />
                    <h3 className='font-bold'>{title}</h3>
                </div>
            </Link>
        </>
    );
};

export default CategoryCard;