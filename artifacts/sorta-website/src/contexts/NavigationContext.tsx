import React, { createContext, useContext, useState, useCallback } from 'react';

type NavigationContextType = {
  navigateTo: (id: string) => void;
  blurring: boolean;
};

const NavigationContext = createContext<NavigationContextType>({
  navigateTo: () => {},
  blurring: false,
});

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [blurring, setBlurring] = useState(false);

  const navigateTo = useCallback((id: string) => {
    setBlurring(true);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setBlurring(false), 500);
    }, 280);
  }, []);

  return (
    <NavigationContext.Provider value={{ navigateTo, blurring }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
