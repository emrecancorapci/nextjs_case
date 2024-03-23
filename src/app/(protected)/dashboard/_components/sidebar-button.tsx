export default function SidebarButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="flex w-full cursor-pointer flex-col rounded bg-primary/10   p-2 px-4 text-lg font-light text-primary transition-colors duration-200 ease-in-out hover:bg-primary-foreground"
      href={href}
    >
      {children}
    </a>
  );
}
