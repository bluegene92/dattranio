
import { BlogLayout } from "@/components";

const AwsVpcPage = () => {
    return (
        <BlogLayout>   
            <div className="col-span-3">
                <h1>Understanding VPC</h1>

                <p>
                    1. VPC, Region base
                    2. Subnet is AZ base
                    3. Route Table 
                    4. NACL
                    5. Security Group
                    6. IGW
                    7. NAT gateway
                </p>
            </div>
        </BlogLayout>
    );
}


export default AwsVpcPage;