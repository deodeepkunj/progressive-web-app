import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar header={"Home"}/>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200">
              <h1 className="text-center">Welcome to PWA..!!</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
