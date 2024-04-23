import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <nav className="">
        <h1>Dat Tran</h1>
        <a className="libra"></a>
      </nav>

      <div className="mx-auto max-w-screen-lg p-8">
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
        <div>
          <h1>C#</h1>

          <div className="flex overflow-x-auto">
            <div className="flex space-x-4">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
        <div>
          <h1>Advance C#</h1>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Education</h1>
        </div>
      </div>
    </main>
  );
}
