


const BlogLayout = ({children}) => {

    return (
        <div className="mx-auto max-w-4xl lg:max-w-6xl xl:max-w-7xl text-3xl text-gray-300 container py-32 px-8 m">
            <div className="grid grid-cols-3 gap-8">
            {children}
            </div>
        </div>
    );
}


export default BlogLayout;