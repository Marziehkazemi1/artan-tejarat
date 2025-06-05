export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary-one min-h-screen text-white overflow-x-hidden">
      {children}
    </div>
  );
}
