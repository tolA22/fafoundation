import clsx from "clsx";
import { BUTTON_COLOR_MAPPING, IButtonColor } from "./constant";

interface IPillButtonProps {
  color?: string;
  action?: () => void;
  buttonText: string;
}

export default function PillButton({
  color,
  action,
  buttonText,
}: IPillButtonProps) {
  const colorProps: IButtonColor =
    BUTTON_COLOR_MAPPING[color ?? ""] ?? BUTTON_COLOR_MAPPING["default"];

  return (
    <button
      className={clsx(
        {
          "border border-solid": !!colorProps.border,
        },
        `${colorProps.bg ?? ""} ${colorProps.text ?? ""} ${
          colorProps.border ?? ""
        } py-3 px-6 rounded-full font-normal text-sm leading-[20.02px] font-aventa_bold`
      )}
    >
      {buttonText}
    </button>
  );
}
