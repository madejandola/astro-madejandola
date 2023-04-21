import { useState } from "react";
export default function Offcanvas({ children }: { children: any }) {
  let [show, setShow] = useState(false);

  const toggleChecked = () => setShow((value) => !value);

  function closeModal() {
    setShow(false);
  }

  function openModal() {
    setShow(true);
  }

  return (
    <>
      <div>
        <button
          type="button"
          onClick={closeModal}
          aria-label="Backdrop"
          className={`${
            !show ? "opacity-0 select-none pointer-events-none" : "opacity-100 pointer-events-auto"
          } fixed inset-0 bg-gray-900/60 duration-300 backdrop-blur w-full z-[60]`}
        />
        <button
          type="button"
          onClick={toggleChecked}
          className="right-2 offcanvasBtn cursor-pointer lg:hidden fixed text-lg justify-center items-center opacity-80 rounded-md overflow-hidden hover:opacity-100 p-0.5 bg-gray-200/80 hover:bg-gray-200/90 duration-1000 font-medium text-gray-900  z-[60] flex top-4"
        >
          <span className="pl-3 pr-2 font-sans uppercase">Menú</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div
          onClick={closeModal}
          className={`OffcanvasNav OffcanvasNavRight ${
            !show
              ? "translate-x-full pointer-events-none"
              : "translate-x-0 pointer-events-auto"
          } `}
        >
          <button
            type="button"
            onClick={closeModal}
            aria-label="Cerrar menú"
            className="absolute right-0 top-0 m-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46L13.46 12Z"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
