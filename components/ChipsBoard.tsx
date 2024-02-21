import ChipsBoardProps from '../models/ChipsBoard.ts';
import SectionCard from './SectionCard.tsx';

export default function ChipsBoard({ chips }: Readonly<ChipsBoardProps>) {
  return (
    <SectionCard>
      <h1>Technology stack</h1>
      <div
        className="grid gap-2 flex-wrap"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))' }}>
        {chips.map(chip => (
          <div
            key={chip.text}
            className="p-2 rounded-full text-center"
            style={{ backgroundColor: chip.backgroundColor, color: chip.color }}>
            {chip.text}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
