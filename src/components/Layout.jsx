import Navbar from "../components/Navbar.jsx";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="w-screen h-[86vh] sm:h-[88vh] bg-black flex justify-center">
        <div className="relative w-[99vw] h-[96vh] overflow-auto rounded-xl text-white">
          <img
            src="./img/hello_nori_inc_logo.jpeg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-12 z-0 rounded-xl"
          />
          <div
            className="relative z-10 p-6 h-full overflow-auto"
            style={{ marginTop: "-12px" }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
