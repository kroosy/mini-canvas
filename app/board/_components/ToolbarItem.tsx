import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

export default function ToolButton({
  label,
  icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            disabled={isDisabled}
            onClick={onClick}
            size="icon"
            variant={isActive ? "boardActive" : "board"}
          >
            {icon}
          </Button>
        </TooltipTrigger>
        <TooltipContent side={"right"} sideOffset={16}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
