import GradientText from "./GradientText";

function Header() {
  return (
    <div className="pt-8">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-center text-4xl font-bold text-gray-900">
          MemeCraft: <GradientText text="Craft your laughter" />
        </h2>
      </div>
    </div>
  );
}

export default Header;