const openMenu = (
  menuType: string,
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
  setActiveMenu: (value: string | null) => void
) => {
  if (isOpen) {
    setIsOpen(false);
    setActiveMenu(null);
  } else {
    setIsOpen(true);
    setActiveMenu(menuType);
  }
};

export default openMenu; 