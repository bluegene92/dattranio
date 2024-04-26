


const Avatar = ({date}) => {
    return (
        <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-indigo-800"></div>
            <div className="flex flex-col leading-7">
            <h4 className="text-gray-300">Dat Tran</h4>
            <h6 className="text-gray-500">{date}</h6>
            </div>
        </div>
    );
}

export default Avatar;