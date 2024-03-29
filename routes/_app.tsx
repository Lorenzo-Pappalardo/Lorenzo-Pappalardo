import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lorenzo's Portfolio</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="dark-theme h-full bg-[#160101] flex flex-col">
        <Component />
      </body>
    </html>
  );
}
