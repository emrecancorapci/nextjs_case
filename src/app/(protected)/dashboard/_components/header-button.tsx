interface Properties {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function HeaderButton({ href, onClick, children }: Properties) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex cursor-pointer flex-col items-center justify-center rounded p-2 text-lg font-semibold text-primary transition-colors duration-200 ease-in-out hover:bg-primary/10"
    >
      {children}
    </a>
  );
}
