import { Tag } from "@/components"

const Experience = () => {


    return (
        <div>
            <h1>Experience</h1>
            <hr/>

            <div>
            <p className="text-gray-500">2022 - Present</p>
            <h2 className="text-emerald-500">Full-Stack Developer - Freelance</h2>
            <p>Developed scheduling appointment system that coordinate between student and driving instructor. Built an automate system with Python and Selenium to manage product lifecycle efficiently.</p>
            <br/>
            <div className="flex flex-wrap gap-4">
                <Tag>.Net</Tag>
                <Tag>AWS</Tag>
                <Tag>Java</Tag>
                <Tag>Javascript</Tag>
                <Tag>MySQL</Tag>
                <Tag>Python</Tag>
                <Tag>Tailwind</Tag>
                <Tag>React</Tag>
                <Tag>PHP</Tag>
                <Tag>C/C++</Tag>
            </div>
            </div>

            <br/>
            <br/>

            <div>
            <p className="text-gray-500">2019 - 2022</p>
            <h2 className="text-emerald-500">.Net Developer</h2>
            <p>
            Professionally enhanced Tinker Timekeeping website as SMTS, migrating Group Tools legacy Web App to .NET Core and React. Engineered an onboarding registration app, centralized Workloads management app, and a COVID Tracking System utilizing Mapbox Geolocation. Crafted AFSC Civilian Career webpage in Figma and React. Developed a Workload Processing System in Angular, transformed WinForms to WPF with MVVM architecture, and led UX redesign of legacy interfaces. Orchestrated Azure resource management plans, captured
            </p>
            <br/>

            <div className="flex flex-wrap gap-4">
                <Tag>Azure</Tag>
                <Tag>C#</Tag>
                <Tag>.NET API</Tag>
                <Tag>EF</Tag>
                <Tag>Dapper</Tag>
                <Tag>T-SQL</Tag>
                <Tag>HTML</Tag>
                <Tag>CSS</Tag>
                <Tag>Redux</Tag>
                <Tag>React</Tag>
                <Tag>Angular</Tag>
                <Tag>xUnit</Tag>
            </div>
            </div>

            <br/>
            <br/>

            <div>
            <p className="text-gray-500">2015 - 2016</p>
            <h2 className="text-emerald-500">Dell Technical Analyst</h2>
            <p>Proficient in troubleshooting and resolving complex technical problems for Boeing customers within expansive datacenter environments, maintaining an impressive 98% Customer Satisfaction Score and a 95% First Call resolution rate.</p>
            <br/>
          
            <div className="flex flex-wrap gap-4">
                <Tag>Window OS</Tag>
                <Tag>Linux</Tag>
                <Tag>TCP/IP</Tag>
                <Tag>RDP</Tag>
                <Tag>AD</Tag>
                <Tag>SMTP</Tag>
                <Tag>Firewall</Tag>
                <Tag>VMWare</Tag>
            </div>
            </div>
        </div>
    );

}


export default Experience;