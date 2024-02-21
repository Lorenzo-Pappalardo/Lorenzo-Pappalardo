import ChipsBoard from '../components/ChipsBoard.tsx';
import { Header } from '../components/Header.tsx';
import SectionCard from '../components/SectionCard.tsx';
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
      <div className="flex flex-col sm:flex-row gap-4 mx-6">
        <div className="flex-1 sm:max-w-[400px]">
          <ChipsBoard chips={chips} />
        </div>
        <div className="flex-1">
          <SectionCard>
            <h1>About me</h1>
            <p className="text-justify">
              I have always been passionate about technology and its impact on people's lives. As a
              front-end developer I am responsible for creating interfaces that are not just
              functional but also appealing. I always strive for improvement, to provide the users
              the best experience possible. I embrace open source so my personal projects are
              available on GitHub, feel free to check them out!
            </p>
          </SectionCard>
        </div>
      </div>
    </>
  );
}
