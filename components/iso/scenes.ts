// Furniture drawn as the boards it is made from. Each box is one panel:
// [x, y, z, width, depth, height, material]. Units are centimetres.
// Boxes are listed back to front (the viewer stands at +x, +y).
export type Material = "green" | "white" | "graphite" | "wood" | "metal";
export type Box = [number, number, number, number, number, number, Material];
export type SceneKey =
  | "workstation"
  | "chair"
  | "table"
  | "storage"
  | "cafeteria"
  | "sofa"
  | "wardrobe"
  | "kitchen"
  | "bed";

const doors = (
  n: number,
  x0: number,
  y: number,
  z: number,
  total: number,
  h: number,
  m: Material,
): Box[] => {
  const w = (total - (n - 1) * 0.8) / n;
  return Array.from({ length: n }, (_, i) => [x0 + i * (w + 0.8), y, z, w, 2, h, m] as Box);
};

export const scenes: Record<SceneKey, Box[]> = {
  workstation: [
    [0, 0, 0, 2.5, 120, 72, "graphite"],
    [72, 66, 0, 40, 48, 58, "green"],
    [0, 0, 72, 120, 59, 2.5, "white"],
    [0, 59, 74.5, 120, 2, 34, "green"],
    [0, 61, 72, 120, 59, 2.5, "white"],
    [117.5, 0, 0, 2.5, 120, 72, "graphite"],
  ],
  chair: [
    [14, 14, 0, 38, 38, 3, "graphite"],
    [30, 30, 3, 6, 6, 36, "metal"],
    [8, 8, 39, 50, 50, 7, "green"],
    [8, 8, 50, 6, 50, 52, "green"],
    [20, 8, 62, 30, 5, 3, "graphite"],
    [20, 53, 62, 30, 5, 3, "graphite"],
  ],
  table: [
    [30, 25, 0, 4, 60, 72, "graphite"],
    [34, 53, 44, 172, 3, 24, "graphite"],
    [206, 25, 0, 4, 60, 72, "graphite"],
    [0, 0, 72, 240, 110, 3, "wood"],
  ],
  storage: [
    [0, 0, 0, 90, 45, 180, "white"],
    ...doors(2, 0, 45, 0, 90, 180, "green"),
    [100, 0, 0, 90, 45, 75, "white"],
    [100, 45, 0, 90, 2, 24, "wood"],
    [100, 45, 25, 90, 2, 24, "wood"],
    [100, 45, 50, 90, 2, 25, "wood"],
  ],
  cafeteria: [
    [15, -48, 0, 6, 6, 45, "metal"],
    [3, -60, 45, 30, 30, 4, "green"],
    [87, -48, 0, 6, 6, 45, "metal"],
    [75, -60, 45, 30, 30, 4, "green"],
    [35, 15, 0, 50, 40, 2, "graphite"],
    [55, 30, 2, 10, 10, 71, "metal"],
    [0, 0, 73, 120, 70, 3, "wood"],
    [15, 102, 0, 6, 6, 45, "metal"],
    [3, 90, 45, 30, 30, 4, "green"],
    [87, 102, 0, 6, 6, 45, "metal"],
    [75, 90, 45, 30, 30, 4, "green"],
  ],
  sofa: [
    [0, 0, 0, 180, 18, 80, "green"],
    [0, 18, 0, 18, 62, 58, "green"],
    [18, 18, 12, 144, 62, 26, "white"],
    [162, 18, 0, 18, 62, 58, "green"],
    [50, 112, 0, 80, 45, 34, "wood"],
  ],
  wardrobe: [
    [0, 0, 0, 180, 58, 210, "white"],
    ...doors(3, 0, 58, 0, 180, 210, "green"),
    [0, 0, 211, 180, 58, 45, "white"],
    ...doors(3, 0, 58, 211, 180, 45, "wood"),
  ],
  kitchen: [
    [0, 0, 145, 240, 35, 70, "white"],
    ...doors(4, 0, 35, 145, 240, 70, "wood"),
    [0, 0, 10, 240, 58, 72, "white"],
    [0, 54, 0, 240, 2, 10, "graphite"],
    ...doors(4, 0, 58, 10, 240, 72, "green"),
    [0, 0, 82, 240, 63, 4, "graphite"],
    [241, 0, 0, 60, 58, 215, "white"],
    [241, 58, 0, 60, 2, 215, "green"],
  ],
  bed: [
    [0, 0, 0, 6, 160, 100, "green"],
    [6, 0, 0, 200, 160, 30, "wood"],
    [8, 3, 30, 196, 154, 18, "white"],
    [14, 12, 48, 38, 60, 8, "white"],
    [14, 88, 48, 38, 60, 8, "white"],
    [10, 172, 0, 42, 42, 45, "wood"],
  ],
};
