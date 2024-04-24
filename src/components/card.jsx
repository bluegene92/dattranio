
const Card = ({title, svg}) => {

    return (
        <div className="isolate aspect-video w-[360px] border backdrop-blur-lg rounded-[20px] shadow-lg ring-1 ring-black/5">
            
            <div className="flex flex-col">
                <div className="flex-shrink-0">
                    <div className="h-64 object-cover">

                    </div>
                </div>
                <div className="p-8">
                    <div className="uppercase">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;