"use client";

import { useState } from "react";
import Toolbar from "./Toolbar";
import { CanvasMode, CanvasState } from "@/types/canvas";

export default function Canvas() {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  return (
    <main className="h-full w-full relative bg-neutral-50 touch-none">
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canUndo={false}
        canRedo={false}
        undo={() => {}}
        redo={() => {}}
      />
    </main>
  );
}
