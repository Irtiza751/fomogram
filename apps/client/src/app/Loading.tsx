import { Spinner } from "@fomogram/ui";

export default function Loading() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <Spinner />
    </div>
  );
}
