import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-20 w-full">
        <div className="flex pointer-events-none h-16 mx-auto max-w-[90rem] items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          <h1 className="mr-auto text-xl">Memory Game</h1>
          <p className="text-lg">Attemps: 0</p>
        </div>
      </header>
      <main className="relative flex flex-col items-center justify-center w-full h-full">
        <section>Welcome</section>
      </main>
      <footer className="relative pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-[90rem] py-12 flex justify-center pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
          Here is the footer section
        </div>
      </footer>
    </>
  );
};

export default Home;
