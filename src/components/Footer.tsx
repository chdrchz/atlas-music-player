export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-4 text-[#FCEFF9]">&copy; {year} Atlas School</div>;
}
