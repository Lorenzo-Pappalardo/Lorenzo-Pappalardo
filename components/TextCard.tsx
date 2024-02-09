import TextCardProps from "../models/TextCard.ts";

export default function SimpleCard({ title, description }: Readonly<TextCardProps>) {
  return (
    <>
      <h1>{title}</h1>
      <p className="text-ellipsis">{description}</p>
    </>
  );
}
