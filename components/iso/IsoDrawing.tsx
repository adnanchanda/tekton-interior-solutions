import { scenes, type Box, type SceneKey } from "./scenes";

const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;
const project = (x: number, y: number, z: number): [number, number] => [
  (x - y) * COS,
  (x + y) * SIN - z,
];
const pts = (list: [number, number][]) =>
  list.map(([a, b]) => `${a.toFixed(1)},${b.toFixed(1)}`).join(" ");

/**
 * An isometric line drawing of a piece of furniture, built from its panels.
 * Each panel carries its own "pulled apart" offset as CSS variables, so the
 * exploded view is driven entirely from CSS (see .iso in globals.css).
 */
export default function IsoDrawing({
  scene,
  title,
  className = "",
}: {
  scene: SceneKey;
  title: string;
  className?: string;
}) {
  const boxes: Box[] = scenes[scene];

  // Scene centre, used to push each panel outward for the exploded view.
  let cx = 0, cy = 0, cz = 0;
  for (const [x, y, z, w, d, h] of boxes) {
    cx += x + w / 2;
    cy += y + d / 2;
    cz += z + h / 2;
  }
  cx /= boxes.length;
  cy /= boxes.length;
  cz /= boxes.length;

  let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
  const parts = boxes.map(([x, y, z, w, d, h, m], i) => {
    const vx = x + w / 2 - cx, vy = y + d / 2 - cy, vz = z + h / 2 - cz;
    const len = Math.hypot(vx, vy, vz) || 1;
    const push = 26;
    const [dx, dy] = project((vx / len) * push, (vy / len) * push, (vz / len) * push);

    const top = [project(x, y, z + h), project(x + w, y, z + h), project(x + w, y + d, z + h), project(x, y + d, z + h)];
    const right = [project(x + w, y, z + h), project(x + w, y + d, z + h), project(x + w, y + d, z), project(x + w, y, z)];
    const left = [project(x, y + d, z + h), project(x + w, y + d, z + h), project(x + w, y + d, z), project(x, y + d, z)];
    for (const [px, py] of [...top, ...right, ...left]) {
      minX = Math.min(minX, px, px + dx);
      maxX = Math.max(maxX, px, px + dx);
      minY = Math.min(minY, py, py + dy);
      maxY = Math.max(maxY, py, py + dy);
    }
    return (
      <g
        key={i}
        className={`iso-part iso-${m}`}
        style={{ "--dx": dx.toFixed(1), "--dy": dy.toFixed(1), "--i": i } as React.CSSProperties}
      >
        <polygon className="iso-top" points={pts(top as [number, number][])} />
        <polygon className="iso-left" points={pts(left as [number, number][])} />
        <polygon className="iso-right" points={pts(right as [number, number][])} />
      </g>
    );
  });

  const pad = 6;
  const vb = `${(minX - pad).toFixed(0)} ${(minY - pad).toFixed(0)} ${(maxX - minX + pad * 2).toFixed(0)} ${(maxY - minY + pad * 2).toFixed(0)}`;

  return (
    <svg className={`iso ${className}`} viewBox={vb} role="img" aria-label={title}>
      <title>{title}</title>
      {parts}
    </svg>
  );
}
