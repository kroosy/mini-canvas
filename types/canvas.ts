export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Dimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export enum Side {
  Top = 1,
  Bottom = 2,
  Left = 4,
  Right = 8,
}

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note,
}

export type ElementLayer = {
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
};

export type RectangleLayer = {
  type: LayerType.Rectangle;
} & ElementLayer;

export type EllipseLayer = {
  type: LayerType.Ellipse;
} & ElementLayer;

export type PathLayer = {
  type: LayerType.Path;
  points: number[][];
} & ElementLayer;

export type TextLayer = {
  type: LayerType.Text;
} & ElementLayer;

export type NoteLayer = {
  type: LayerType.Note;
} & ElementLayer;

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil,
}

export type CanvasState =
  | {
      mode: CanvasMode.None;
    }
  | {
      mode: CanvasMode.Pressing;
      origin: Point;
    }
  | {
      mode: CanvasMode.SelectionNet;
      origin: Point;
      current?: Point;
    }
  | {
      mode: CanvasMode.Translating;
      current: Point;
    }
  | {
      mode: CanvasMode.Inserting;
      layerType: Exclude<LayerType, LayerType.Path>;
    }
  | {
      mode: CanvasMode.Resizing;
      initialBounds: Dimensions;
      corder: Side;
    }
  | {
      mode: CanvasMode.Pencil;
    };
