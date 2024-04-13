type SpinnerProps = {
  size?: number;
};

export function Spinner({ size = 20 }: SpinnerProps) {
  return (
    <svg width={size} height={size} className="spinner" viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
        stroke="currentColor"
      ></circle>
    </svg>
  );
}
