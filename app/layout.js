import './globals.css'

export const metadata = {
  title: 'DSWD BGMD ',
  description: 'dswd bgmd',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
