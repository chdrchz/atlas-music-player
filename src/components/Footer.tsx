export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center text-text">&copy; {year} Atlas School</div>;
}
