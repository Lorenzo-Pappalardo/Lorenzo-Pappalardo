import ChipsBoardProps from '../models/ChipsBoard.ts';

export default function ChipsBoard({ chips }: Readonly<ChipsBoardProps>) {
  return (
    <div className="flex gap-1 flex-wrap">
      {chips.map(chip => (
        <div
          key={chip.text}
          className="p-2 rounded-full"
          style={{ backgroundColor: chip.backgroundColor, color: chip.color }}>
          {chip.text}
        </div>
      ))}
    </div>
  );
}
