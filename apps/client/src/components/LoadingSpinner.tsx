import React from "react";

type SpinnerSize = "sm" | "md" | "lg" | "xl" | "xxl";

type LoadingSpinnerProps = {
  size: SpinnerSize;
};

export default function LoadingSpinner({ size }: LoadingSpinnerProps) {
  return <div className={`spinner ${size}`} />;
}
