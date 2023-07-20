import '../styles/globals.css'


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

  // ——— This layout will applied to all routes inside the app folder
  // ——— Replace _app & _document when using pages structures
  // ——— But in a much cleaner way
