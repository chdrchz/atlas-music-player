export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center text-orange-10">&copy; {year} Atlas School</div>;
}
