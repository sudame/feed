import type { ReactElement, ReactNode } from "react";

interface Props {
  url: string | null;
  newTab?: boolean;
  children: ReactNode;
}

export function Link(props: Props): ReactElement {
  if (props.url == null) return <>{props.children}</>;
  return (
    <a
      href={props.url}
      target={props.newTab ?? false ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
}
