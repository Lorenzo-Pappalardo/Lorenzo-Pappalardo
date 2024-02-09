import ChipsBoard from '../components/ChipsBoard.tsx';
import { Header } from '../components/Header.tsx';
import ChipsBoardProps from '../models/ChipsBoard.ts';

export default function Home() {
  const chips: ChipsBoardProps['chips'] = [
    { text: 'Angular', color: 'white', backgroundColor: '#d03' },
    { text: 'React', color: 'white', backgroundColor: 'rgb(8 126 164/var(--tw-bg-opacity))' },
    { text: 'Next.js', color: 'black', backgroundColor: 'white' },
    { text: 'Typescript', color: 'white', backgroundColor: '#3178c6' },
    { text: 'SASS', color: 'white', backgroundColor: '#bf4080' },
    { text: 'Git', color: 'white', backgroundColor: '#ef391a' },
    { text: 'Docker', color: 'white', backgroundColor: '#1d63ed' },
    { text: 'Nginx', color: 'white', backgroundColor: '#099639' }
  ];

  return (
    <>
      <Header name="Lorenzo Pappalardo" jobPosition="Front-end Web Developer" />
      <div className="flex gap-4 before:content-[''] after:content-['']">
        <div className="flex-1 max-w-[400px]">
          <ChipsBoard chips={chips} />
        </div>
        <div className="flex-1">Contents</div>
      </div>
    </>
  );
}
