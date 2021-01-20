import React, { useState, createContext, useMemo, useContext } from 'react';

const Menu = createContext();
const MenuUpdate = createContext();

export const useMenu = () => useContext(Menu);
export const useMenuUpdate = () => useContext(MenuUpdate);

const MenuContext = ({ children }) => {
	const [ toggle, setToggle ] = useState(false);

	const handleMenuUpdate = () => {
		setToggle((prevToggle) => !prevToggle);
	};

	const contextValue = useMemo(
		() => {
			return toggle;
		},
		[ toggle ]
	);

	return (
		<Menu.Provider value={contextValue}>
			<MenuUpdate.Provider value={handleMenuUpdate}>{children}</MenuUpdate.Provider>
		</Menu.Provider>
	);
};

export default MenuContext;
