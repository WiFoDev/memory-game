import type {NextPage} from "next";

const Home: NextPage = () => {
  return (
    <header className="sticky top-0 z-20 w-full">
      <div className="flex pointer-events-none h-16 mx-auto max-w-[90rem] items-center justify-end gap-2 pl-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]">
        <h1 className="mr-auto text-xl">Memory Game</h1>
        <p className="text-lg">Attemps: 0</p>
      </div>
    </header>
  );
};

export default Home;
