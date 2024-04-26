'use client'
 
import { useRouter } from 'next/navigation'
import { Avatar } from "@/components";

const Card = ({title, date, link}) => {

    const router = useRouter();

    const handleClick = () => {
        console.log('click')
        router.push(link);
    };

    return (
        <div className="isolate aspect-video w-[360px] border backdrop-blur-lg rounded-[20px] shadow-lg ring-1 ring-black/5 cursor-pointer" onClick={handleClick}>
            
            <div className="flex flex-col">
                <div className="flex-shrink-0">
                    <div className="h-64 object-cover">

                    </div>
                </div>
                <div className="p-8">
                    <div>
                        <h3 className="py-2">{title}</h3>
                        <Avatar date="Jan, 21, 2024"></Avatar>
                        <span>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;