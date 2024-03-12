import type { ReactElement } from "react";
import { dateTimeFormatter } from "./utils";

/** Date型を yyyy-MM-dd hh:mm 形式に変換 */
function formatDate(date: Date): string {
  return dateTimeFormatter.format(date);
}

interface Props {
  date: string | Date | null;
}

export function DateElement(props: Props): ReactElement {
  if (props.date == null) return <></>;

  const date =
    typeof props.date === "string" ? new Date(props.date) : props.date;

  return <>{formatDate(date)}</>;
}
