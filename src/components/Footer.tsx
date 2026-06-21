import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo-white.png"
            alt="Logo Sthefano Goes"
            width={48}
            height={48}
            className="h-10 w-auto rounded"
          />
          <div>
            <p className="font-serif font-medium">
              Sthefano Ledesma Carissimi de Goes
            </p>
            <p className="font-sans text-blue-200 text-sm">
              Psicólogo — CRP 07/44940
            </p>
          </div>
        </div>
        <p className="font-sans text-blue-200 text-sm">
          © {new Date().getFullYear()} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
