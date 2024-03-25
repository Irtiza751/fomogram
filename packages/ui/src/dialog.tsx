"use client";

import * as RadixDialog from "@radix-ui/react-dialog";

type DialogProps = {
  show: boolean;
  children: React.ReactNode;
  title?: string;
  description?: string;
  onClose?: () => void;
};

export function Dialog({ show, children, onClose = () => {} }: DialogProps) {
  return (
    <RadixDialog.Root open={show} onOpenChange={onClose}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed bg-black/50 inset-0 z-10" />
        <RadixDialog.Content className="fixed z-10 w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
