/* src/lib/contexts/TechnologyHighlightContext.tsx */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

// Create the context with an array of selected items
type TechnologyHighlightContextType = {
  selectedItems: string[];
  toggleSelectedItem: (item: string) => void;
  clearSelectedItems: () => void;
};

const TechnologyHighlightContext = createContext<
  TechnologyHighlightContextType | undefined
>(undefined);

// Provider component
export const TechnologyHighlightProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Toggle an item's selection status
  const toggleSelectedItem = useCallback((item: string) => {
    setSelectedItems((prevItems) => {
      // If the item is already selected, remove it
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
      }
      // Otherwise, add it to the selection array
      return [...prevItems, item];
    });
  }, []);

  // Clear all selections
  const clearSelectedItems = useCallback(() => {
    setSelectedItems([]);
  }, []);

  // Clear selection when clicking anywhere on the document
  const handleDocumentClick = useCallback(
    (e: MouseEvent) => {
      // Check if the click is on an article__footer-item
      const target = e.target as HTMLElement;
      const isFooterItem = target.closest(".article__footer-item");

      // Only clear selections if the click is outside of any footer item
      if (!isFooterItem) {
        clearSelectedItems();
      }
    },
    [clearSelectedItems]
  );

  // Add and remove document click listener
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  return (
    <TechnologyHighlightContext.Provider
      value={{ selectedItems, toggleSelectedItem, clearSelectedItems }}
    >
      {children}
    </TechnologyHighlightContext.Provider>
  );
};

// Custom hook to use the context
export const useTechnologyHighlight = (): TechnologyHighlightContextType => {
  const context = useContext(TechnologyHighlightContext);
  if (context === undefined) {
    throw new Error(
      "useTechnologyHighlight must be used within a TechnologyHighlightProvider"
    );
  }
  return context;
};
