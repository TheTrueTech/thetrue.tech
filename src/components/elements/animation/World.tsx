
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export default function World() {
  const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0, 1.1, 0.1],
      markerColor: [0, 3, 0],
      glowColor: [0, 1, 0],
      opacity:0.67,
      markers: [
        // longitude latitude
        { location: [165.78, -99.412], size: 0.05},
     
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="Prinve">
      <h1>TRUE TECH</h1>
      <p>
        A open source community for developers to learn and share their knowledge.
      </p>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
