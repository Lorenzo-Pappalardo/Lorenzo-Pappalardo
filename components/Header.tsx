import { JSX } from 'preact/jsx-runtime';

export function Header(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="h-52 flex flex-col justify-center items-center bg-indigo-950">
      <img
        className="relative top-1/2 w-11/12 max-w-xs rounded-full bg-white border-8 border-indigo-950"
        src="logo.svg"
        alt="Handsome 😏"></img>
    </div>
  );
}
