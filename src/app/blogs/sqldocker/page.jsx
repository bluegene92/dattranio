import { Avatar, BlogLayout } from "@/components";


const SqlDockerPage = () => {

    return (
        <BlogLayout>
            <div className="col-span-3">
                <h1>Running SQL Server on Docker</h1>
 
            </div>
            <div className="col-span-3">
            When faced with the task of setting up a SQL Server database for an ASP.NET 
            project on my Mac, I encountered a challenge due to the platform difference. Fortunately, I found a solution by leveraging Docker, which allowed me to run Windows applications seamlessly on my Mac.
            In this tutorial, we&apos;ll walk through the following steps:
                <br/>
                <br/>
                <br/>
                <ul className="flex flex-col gap-4">
                    <li>
                        <h3 className="text-emerald-500">1. Optaining MSSQL Database Image</h3>
                        <p>We&apos;ll acquire the MSSQL database image from Docker Hub, a central repository for Docker images.</p>
                    </li>
                    <li>
                        <h3 className="text-emerald-500">2. Running MSSQL in a Docker Container</h3>
                        <p>With the database image in hand, we&apos;ll set up a Docker container to run the MSSQL server, ensuring compatibility with our Mac environment.</p>
                    </li>
                    <li>
                        <h3 className="text-emerald-500">3. Building a SQL Connection String</h3>
                        <p>Once the database is up and running, we&apos;ll craft a SQL connection string, a crucial step in establishing communication between our ASP.NET application and the MSSQL database</p>
                    </li>
                    <li>
                        <h3 className="text-emerald-500">4. Connecting ASP.NET API to MSSQL Database</h3>
                        <p>Finally, we&apos;ll integrate our ASP.NET API with the MSSQL database by configuring it to communicate effectively, enabling seamless data interaction and manipulation.</p>
                    </li>
                </ul>
            </div>

            <div className="col-span-3">
                Some information
            </div>

            <div className="py-4">
                <Avatar date="Jan 21, 2024"></Avatar>
             </div>
        </BlogLayout>
     
    );
}


export default SqlDockerPage;