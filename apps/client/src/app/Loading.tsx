import LoadingSpinner from "@client/components/LoadingSpinner";

export default function Loading() {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <LoadingSpinner size="xxl" />
    </div>
  );
}
