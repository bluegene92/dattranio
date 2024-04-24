import { Card, Experience, Education } from "@/components";

export default function Home() {
  return (
    <main className="">
      <nav className="flex p-8 justify-end">
        <ul class="flex gap-1">
          <li>
            <a
              href="https://www.facebook.com/ttdat"
              target="_blank"
              class="href"
            >
              <img src="./facebook.svg" alt="SVG Facebook Icon" width="32" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dat-tran-1aa9b120/"
              target="_blank"
            >
              <img src="./linkedin.svg" width="32" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/secretmind92" target="_blank">
              <img src="./twitter.svg" width="32" />
            </a>
          </li>
          <li>
            <a href="https://github.com/bluegene92" target="_blank">
              <img src="./github.svg" width="32" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="mx-auto max-w-screen-lg p-8">
        <div>
          <h1 className="text-8xl text-yellow-400">.NET DEV</h1>
          <h2 className="text-5xl text-gray-100">Dat Tran</h2>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2 className="text-gray-100">
          Life is a series of natural and spontaneous changes. Don't resist
          them; that only creates sorrow. Let reality be reality. Let things
          flow naturally forward in whatever way they like.
        </h2>
        <p>- Lao Tzu</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          <h1>Blog</h1>
          <div className="flex overflow-x-auto overflow-y-hidden">
            <div className="flex space-x-4 p-4">
              <Card title="Running SQL Server in Docker" />
              <Card title="AWS VPC Quickstart" />
              <Card title="AWS IAM" />
              <Card title="AWS S3" />
            </div>
          </div>
        </div>

        <br />
        <br />

        {/* <div>
          <h1>.Net</h1>

          <div className="flex overflow-x-auto overflow-y-hidden">
            <div className="flex space-x-4 p4">
              <Card title="Entity Framework Code-First" />
              <Card title="Entity Framework Database-First" />
              <Card title="Middleware" />
              <Card title="LINQ" />
            </div>
          </div>
        </div> */}

        <br />
        <br />
        {/* <div>
          <h1>Advance C#</h1>

          <div className="flex overflow-x-auto overflow-y-hidden">
            <div className="flex space-x-4 p4">
              <Card title="Delegates" />
              <Card title="Event" />
              <Card title="Tasks" />
              <Card title="Thread" />
            </div>
          </div>
        </div> */}

        <br />
        <br />

        <div>
          <Experience />
        </div>

        <br />
        <br />
        <br />
        <br />

        <div>
          <Education />
        </div>
      </div>
    </main>
  );
}
