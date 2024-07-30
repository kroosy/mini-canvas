import { useState } from "react";
import ToolBarItem from "./ToolbarItem";
import { LuMousePointer2, LuUndo2, LuRedo2 } from "react-icons/lu";
import { FiType, FiCircle } from "react-icons/fi";
import { CiStickyNote } from "react-icons/ci";
import { IoIosSquareOutline } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { RxDragHandleDots2 } from "react-icons/rx";

export default function Toolbar() {
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
          onClick={() => {}}
          isActive={false}
        />
        <ToolBarItem
          label="텍스트"
          icon={<FiType size={"1.5rem"} />}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBarItem
          label="메모"
          icon={<CiStickyNote size={"1.8rem"} />}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBarItem
          label="도형 - 사각형"
          icon={<IoIosSquareOutline size={"2rem"} />}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBarItem
          label="도형 - 원"
          icon={<FiCircle size={"1.5rem"} />}
          onClick={() => {}}
          isActive={false}
        />
        <ToolBarItem
          label="그리기"
          icon={<TfiPencil size={"1.5rem"} />}
          onClick={() => {}}
          isActive={false}
        />

        <hr className="w-full h-[1px] border-0 bg-neutral-200" />
        <ToolBarItem
          label="실행취소"
          icon={<LuUndo2 size={"1.5rem"} />}
          onClick={() => {}}
          isDisabled
        />
        <ToolBarItem
          label="되돌리기"
          icon={<LuRedo2 size={"1.5rem"} />}
          onClick={() => {}}
          isDisabled
        />
      </div>
    </div>
  );
}
