import type { ReactElement } from "react";

interface Props {
  content: string | null;
}

export function Content(props: Props): ReactElement {
  if (props.content == null) return <></>;

  if (props.content.length > 200) {
    return <>{props.content.slice(0, 200)}...</>;
  }

  return <>{props.content}</>;
}
