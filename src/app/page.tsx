import CardsContainer from "@/components/cards/CardsContainer";

export default function Home() {
  return (
    <div className="flex md:gap-24 lg:flex-row gap-10">
      <div className="md:flex-1 flex flex-col">
        <h1 className="lg:text-xl text-base font-bold text-center lg:text-left dark:text-slate-200">
          Create your own calm environment.
        </h1>
        <div className="flex flex-col py-10 items-center justify-center">
          <div className="flex">
            <CardsContainer />
          </div>
          <h1 className="font-medium text-sm lg:text-lg text-center lg:text-left dark:text-slate-200 mt-6 px-6 lg:mt-10">
            To be calm is the highest achievement of the self.
          </h1>
        </div>
      </div>
    </div>
  );
}
