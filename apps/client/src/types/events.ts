import { ChangeEvent } from "react";

export type UploadEvent = ChangeEvent<HTMLInputElement>;

export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
