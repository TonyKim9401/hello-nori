import Layout from "../components/Layout.jsx";
import QRCode from "qrcode";
import { useEffect, useRef } from "react";

export default function QRCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    QRCode.toCanvas(
      canvasRef.current,
      "https://dinojump.online/",
      { width: 256 },
      (error) => {
        if (error) console.error(error);
      }
    );
  }, []);

  return (
    <Layout>
      <canvas ref={canvasRef} />;
    </Layout>
  );
}
