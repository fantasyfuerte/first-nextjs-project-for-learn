import { montserrat } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>NextJS dashboard</title>
        <meta property="og:title" content="Dashboard with NextJS" />
        <meta
          property="og:description"
          content="Simple dashboard using NextJS"
        />
        <meta
          property="og:image"
          content="https://phantom-marca-mx.unidadeditorial.es/4729c077238c9ab28e524bf1d59b9b89/resize/828/f/jpg/mx/assets/multimedia/imagenes/2024/08/15/17237390569266.jpg"
        />
      </head>
      <body className={`${montserrat.className} select-none`}>{children}</body>
    </html>
  );
}
