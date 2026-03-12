import React, { useState, useRef } from "react";
import "../css/home.css";

const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastAnim, setToastAnim] = useState<"dropping" | "hiding" | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function showNotif() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToastVisible(false);
    setToastAnim(null);

    requestAnimationFrame(() => {
      setToastVisible(true);
      setToastAnim("dropping");

      timerRef.current = setTimeout(() => {
        setToastAnim("hiding");
        timerRef.current = setTimeout(() => {
          setToastVisible(false);
          setToastAnim(null);
        }, 380);
      }, 3000);
    });
  }

  return (
    <main className="Container">

      {/* Toggle button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 text-gray-700 bg-white hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5"
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 border-r">

          {/* Header */}
          <div className="border-b border-gray-200 pb-4 flex items-center relative">
            <a href="#" className="flex items-center space-x-2">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-6 w-6"
                alt="logo"
              />
              <span className="self-center text-lg font-semibold">TACOS</span>
            </a>

            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-black hover:bg-gray-200 rounded-lg w-9 h-9 absolute top-0 right-0 flex items-center justify-center"
            >
              ✕
            </button>
          </div>

          {/* Menu */}
          <ul className="space-y-2 font-medium mt-4">
            <li>
              <a className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                Dashboard
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                Kanban
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-pink-500 rounded-lg hover:bg-gray-100">
                Inbox
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                Users
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-100">
                Products
              </a>
            </li>
          </ul>

        </div>
      </aside>

      {/* Botón campana + Toast */}
      <div className="fixed top-5 right-5 z-50">
        <div className="relative">

          {/* Botón campana */}
          <button
            onClick={showNotif}
            className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95 hover:shadow-lg border-0 bg-[#FFBF00] relative z-10"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                fill="none"
                stroke="#000000"
                strokeWidth="1.3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Toast con animación de gota */}
          {toastVisible && (
            <div
              className={`absolute top-0 right-0 w-72 rounded-xl p-4 pointer-events-none
                ${toastAnim === "dropping" ? "animate-drop-in" : ""}
                ${toastAnim === "hiding" ? "animate-drop-out" : ""}`}
              style={{ background: "#173b69", transformOrigin: "top right", zIndex: 5 }}
            >
              <p className="text-[#ffd900] font-medium text-sm mb-1">
                Ayuda o soporte
              </p>
              <p className="text-white text-xs leading-relaxed">
                Soluciones o dudas, Contactar con soporte: +52 32132132132132 o ícono de chat
              </p>
            </div>
          )}

        </div>
      </div>

    </main>
  );
};

export default Home;