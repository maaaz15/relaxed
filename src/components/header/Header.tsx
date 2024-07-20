import { ModeToggle } from "../ui/ModeToggle";

const Header = () => {
  return (
    <div className="flex justify-between h-16 md:h-28 items-center px-8 py-14 lg:px-0 lg:py-10">
      <h1 className="lg:text-5xl text-3xl font-extrabold text-center lg:text-left dark:text-slate-200">
        Relaxed
      </h1>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
