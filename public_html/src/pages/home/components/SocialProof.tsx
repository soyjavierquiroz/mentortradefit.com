
import { useState, useEffect, useCallback } from 'react';

const socialProofData = [
  { name: 'Carlos M.', country: 'México', city: 'Guadalajara', time: 'hace 2 min' },
  { name: 'Valentina R.', country: 'Colombia', city: 'Medellín', time: 'hace 3 min' },
  { name: 'Diego A.', country: 'Argentina', city: 'Buenos Aires', time: 'hace 5 min' },
  { name: 'Luciana P.', country: 'Perú', city: 'Lima', time: 'hace 1 min' },
  { name: 'Andrés F.', country: 'Chile', city: 'Santiago', time: 'hace 4 min' },
  { name: 'Camila S.', country: 'Ecuador', city: 'Quito', time: 'hace 6 min' },
  { name: 'Sebastián G.', country: 'Venezuela', city: 'Caracas', time: 'hace 2 min' },
  { name: 'Mariana L.', country: 'Costa Rica', city: 'San José', time: 'hace 3 min' },
  { name: 'Javier T.', country: 'España', city: 'Madrid', time: 'hace 7 min' },
  { name: 'Isabella V.', country: 'Panamá', city: 'Ciudad de Panamá', time: 'hace 1 min' },
  { name: 'Mateo H.', country: 'Uruguay', city: 'Montevideo', time: 'hace 5 min' },
  { name: 'Sofía D.', country: 'República Dominicana', city: 'Santo Domingo', time: 'hace 4 min' },
  { name: 'Emiliano C.', country: 'México', city: 'Monterrey', time: 'hace 2 min' },
  { name: 'Renata B.', country: 'Colombia', city: 'Bogotá', time: 'hace 6 min' },
  { name: 'Tomás N.', country: 'Argentina', city: 'Córdoba', time: 'hace 3 min' },
  { name: 'Gabriela O.', country: 'Bolivia', city: 'La Paz', time: 'hace 8 min' },
  { name: 'Fernando Q.', country: 'Paraguay', city: 'Asunción', time: 'hace 1 min' },
  { name: 'Daniela E.', country: 'Honduras', city: 'Tegucigalpa', time: 'hace 5 min' },
  { name: 'Nicolás W.', country: 'Guatemala', city: 'Ciudad de Guatemala', time: 'hace 2 min' },
  { name: 'Paula J.', country: 'El Salvador', city: 'San Salvador', time: 'hace 4 min' },
  { name: 'Alejandro Z.', country: 'Nicaragua', city: 'Managua', time: 'hace 7 min' },
  { name: 'Catalina I.', country: 'Cuba', city: 'La Habana', time: 'hace 3 min' },
  { name: 'Ricardo K.', country: 'Puerto Rico', city: 'San Juan', time: 'hace 6 min' },
  { name: 'Antonella U.', country: 'Perú', city: 'Arequipa', time: 'hace 1 min' },
  { name: 'Santiago Y.', country: 'Chile', city: 'Valparaíso', time: 'hace 9 min' },
  { name: 'Florencia X.', country: 'México', city: 'Cancún', time: 'hace 2 min' },
  { name: 'Joaquín M.', country: 'Colombia', city: 'Cali', time: 'hace 5 min' },
  { name: 'Martina R.', country: 'España', city: 'Barcelona', time: 'hace 3 min' },
  { name: 'Emilio P.', country: 'Ecuador', city: 'Guayaquil', time: 'hace 4 min' },
  { name: 'Valeria F.', country: 'Venezuela', city: 'Maracaibo', time: 'hace 1 min' },
  { name: 'Rodrigo S.', country: 'Argentina', city: 'Rosario', time: 'hace 8 min' },
  { name: 'Ximena G.', country: 'México', city: 'Puebla', time: 'hace 2 min' },
  { name: 'Ignacio L.', country: 'Uruguay', city: 'Punta del Este', time: 'hace 6 min' },
  { name: 'Bianca T.', country: 'Panamá', city: 'Colón', time: 'hace 3 min' },
  { name: 'Maximiliano V.', country: 'Costa Rica', city: 'Heredia', time: 'hace 5 min' },
  { name: 'Agustina H.', country: 'Bolivia', city: 'Santa Cruz', time: 'hace 1 min' },
  { name: 'Leonardo D.', country: 'Paraguay', city: 'Ciudad del Este', time: 'hace 7 min' },
  { name: 'Regina C.', country: 'Guatemala', city: 'Antigua', time: 'hace 4 min' },
  { name: 'Facundo B.', country: 'República Dominicana', city: 'Punta Cana', time: 'hace 2 min' },
  { name: 'Isidora N.', country: 'Chile', city: 'Concepción', time: 'hace 6 min' },
];

const timeOptions = ['hace 1 min', 'hace 2 min', 'hace 3 min', 'hace 4 min', 'hace 5 min', 'hace 6 min', 'hace 7 min', 'hace 8 min', 'hace 9 min', 'hace 10 min'];

interface Notification {
  id: number;
  name: string;
  country: string;
  city: string;
  time: string;
  visible: boolean;
}

export default function SocialProof() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());

  const getRandomEntry = useCallback(() => {
    let availableIndices = socialProofData
      .map((_, i) => i)
      .filter((i) => !usedIndices.has(i));

    if (availableIndices.length === 0) {
      setUsedIndices(new Set());
      availableIndices = socialProofData.map((_, i) => i);
    }

    const randomIdx = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices((prev) => new Set(prev).add(randomIdx));

    const entry = socialProofData[randomIdx];
    const randomTime = timeOptions[Math.floor(Math.random() * timeOptions.length)];

    return { ...entry, time: randomTime };
  }, [usedIndices]);

  useEffect(() => {
    const showNotification = () => {
      const entry = getRandomEntry();
      const id = Date.now();

      setNotifications((prev) => {
        const updated = [...prev, { ...entry, id, visible: false }];
        return updated.slice(-3);
      });

      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === id ? { ...n, visible: true } : n))
        );
      }, 50);

      setTimeout(() => {
        setNotifications((prev) =>
          prev.map((n) => (n.id === id ? { ...n, visible: false } : n))
        );
      }, 4500);

      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
      }, 5000);
    };

    showNotification();
    const interval = setInterval(showNotification, 5000);

    return () => clearInterval(interval);
  }, [getRandomEntry]);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`pointer-events-auto flex items-center gap-3 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl px-5 py-3.5 border border-gray-100 transition-all duration-500 ${
            notif.visible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8'
          }`}
          style={{ maxWidth: '360px' }}
        >
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex-shrink-0 shadow-md">
            <i className="ri-user-star-fill text-white text-xl"></i>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              {notif.name}
              <span className="font-normal text-gray-500"> de </span>
              <span className="text-[#10B981] font-semibold">{notif.city}, {notif.country}</span>
            </p>
            <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
              Se acaba de unir &middot; {notif.time}
            </p>
          </div>
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <i className="ri-check-double-fill text-[#10B981] text-lg"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
