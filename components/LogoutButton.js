'use client';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Hapus cookie dengan mengatur Max-Age=0
    document.cookie = 'authenticated=; Max-Age=0; Path=/;';
    router.push('/login');
    router.refresh();
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-sm bg-red-500 text-white px-3 py-1 rounded"
    >
      Logout
    </button>
  );
}
