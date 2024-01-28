import { SimpleCardProps } from '../models/SimpleCard.ts';

export default function SimpleCard({ title, description }: Readonly<SimpleCardProps>) {
  return (
    <>
      <h1>{title}</h1>
      <p className="text-ellipsis">{description}</p>
    </>
  );
}
