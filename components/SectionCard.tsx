import { ComponentChildren } from 'https://esm.sh/v128/preact@10.19.2/src/index.js';

export default function SectionCard({ children }: { children: ComponentChildren }) {
  return <div className="p-4 bg-white/10 rounded-2xl">{children}</div>;
}
