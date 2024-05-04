import { useCallback, useState } from "react";

export function useDialog() {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const handleToggle = useCallback(() => {
    setOpen((state) => (state = !state));
  }, []);

  return { open, handleClose, handleOpen, handleToggle };
}
