import { useEffect, useState } from 'react';
import logo from './assets/logo.jpg';

interface Health {
  status: string;
  timestamp: string;
}

const API_URL = import.meta.env.VITE_API_URL ?? '';

export default function App() {
  const [health, setHealth] = useState<Health | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/api/health`)
      .then((res) => res.json())
      .then(setHealth)
      .catch((err) => setError(String(err)));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 gap-4">
      <img src={logo} alt="MeshMesh from Salesforce" className="w-80 max-w-[80vw]" />
      <p className="text-slate-400">React + Vite + Tailwind + TypeScript</p>
      <div className="rounded-lg border border-slate-700 px-6 py-4">
        <span className="font-mono text-sm">
          API status:{' '}
          {error ? (
            <span className="text-red-400">{error}</span>
          ) : health ? (
            <span className="text-green-400">{health.status}</span>
          ) : (
            <span className="text-yellow-400">loading…</span>
          )}
        </span>
      </div>
    </div>
  );
}
