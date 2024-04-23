import Image from "next/image";
import { Experience, Education } from "@/components";

export default function Home() {
  return (
    <main className="">
      <div className="mx-auto max-w-screen-lg p-8">
        <h1>Dat Tran .Net Developer</h1>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>
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
          <div className="flex overflow-x-auto">
            <div className="flex space-x-4">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div>
          <h1>.Net</h1>

          <div className="flex overflow-x-auto">
            <div className="flex space-x-4">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div>
          <h1>Advance C#</h1>
        </div>

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
