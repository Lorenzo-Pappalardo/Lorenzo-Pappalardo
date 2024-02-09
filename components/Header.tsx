import HeaderProps from '../models/Header.ts';

export function Header({ name, jobPosition }: Readonly<HeaderProps>) {
  return (
    <div className="h-52 flex flex-col justify-center items-center bg-[#1f0201] mb-[12rem]">
      <div className="absolute top-2 left-2 ml-2">
        <h1>{name}</h1>
        <p>{jobPosition}</p>
      </div>
      <img
        className="relative top-1/2 w-11/12 max-w-xs rounded-full bg-white border-8 border-[#2b0909]"
        src="https://avatars.githubusercontent.com/u/56509174"
        alt="Handsome 😏"></img>
    </div>
  );
}
