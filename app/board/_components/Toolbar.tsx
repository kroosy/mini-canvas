import ToolBarItem from "./ToolbarItem";
import { LuMousePointer2, LuUndo2, LuRedo2 } from "react-icons/lu";
import { FiType, FiCircle } from "react-icons/fi";
import { CiStickyNote } from "react-icons/ci";
import { IoIosSquareOutline } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}
export default function Toolbar({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo,
}: ToolbarProps) {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-4 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div className="cursor-pointer py-1">
          <RxDragHandleDots2 size={"1.5rem"} />
        </div>

        <hr className="w-full h-[1px] border-0 bg-neutral-200" />
        <ToolBarItem
          label="선택"
          icon={<LuMousePointer2 size={"1.5rem"} />}
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolBarItem
          label="그리기"
          icon={<TfiPencil size={"1.5rem"} />}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
        />
        <ToolBarItem
          label="도형 - 사각형"
          icon={<IoIosSquareOutline size={"2rem"} />}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolBarItem
          label="도형 - 원"
          icon={<FiCircle size={"1.5rem"} />}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolBarItem
          label="텍스트"
          icon={<FiType size={"1.5rem"} />}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolBarItem
          label="메모"
          icon={<CiStickyNote size={"1.8rem"} />}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />

        <hr className="w-full h-[1px] border-0 bg-neutral-200" />
        <ToolBarItem
          label="실행취소"
          icon={<LuUndo2 size={"1.5rem"} />}
          onClick={undo}
          isDisabled={!canUndo}
        />
        <ToolBarItem
          label="되돌리기"
          icon={<LuRedo2 size={"1.5rem"} />}
          onClick={redo}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
}
