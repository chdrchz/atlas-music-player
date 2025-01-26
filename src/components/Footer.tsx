export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center text-white">&copy; {year} Atlas School</div>;
}
