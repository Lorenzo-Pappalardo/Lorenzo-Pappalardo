import HeaderProps from '../models/Header.ts';

export function Header({ name, jobPosition }: Readonly<HeaderProps>) {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1f0201] mb-6">
      <div className="lg:absolute top-6 left-6">
        <h1>{name}</h1>
        <em className="text-xl">{jobPosition}</em>
      </div>
      <img
        className="max-w-xs mt-6 rounded-full bg-white border-8 border-[#2b0909]"
        src="https://avatars.githubusercontent.com/u/56509174"
        alt="Handsome 😏" />
    </div>
  );
}
