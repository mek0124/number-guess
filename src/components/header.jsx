import AppIcon from '../assets/icon.png';


export default function Header() {
  return (
    <div className="flex flex-row items-center justify-center w-full border-b-2 border-b-gray-600">
      <div className="flex flex-row items-center justify-start w-full">
        <img
          src={AppIcon}
          alt="Oracle's Challenge App Icon"
          width="60"
          height="60"
          className="m-1"
        />
      </div>

      <div className="flex flex-row items-center justify-end w-1/3 mr-3">
        <h1 className="font-bold italic text-md">
          Oracle's Challenge
        </h1>
      </div>
    </div>
  );
};
