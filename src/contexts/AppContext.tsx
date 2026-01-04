import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ExamType, examsData, ContentItem, ContentType } from '@/data/content';
import { useLocalStorage, SavedItem, ViewedItem } from '@/hooks/useLocalStorage';

interface AppContextType {
  // Current selection state
  selectedExam: ExamType;
  setSelectedExam: (exam: ExamType) => void;
  selectedSubjectId: string | null;
  setSelectedSubjectId: (id: string | null) => void;
  selectedTopicId: string | null;
  setSelectedTopicId: (id: string | null) => void;
  
  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  
  // Saved items
  savedItems: SavedItem[];
  saveItem: (item: Omit<SavedItem, 'savedAt'>) => void;
  unsaveItem: (id: string) => void;
  isItemSaved: (id: string) => boolean;
  
  // Viewed items tracking
  viewedItems: Record<string, ViewedItem>;
  trackView: (id: string) => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  
  // Navigation helpers
  getSelectedExamData: () => typeof examsData[0] | undefined;
  getSelectedSubjectData: () => typeof examsData[0]['subjects'][0] | undefined;
  getSelectedTopicData: () => { topic: typeof examsData[0]['subjects'][0]['topics'][0], subject: typeof examsData[0]['subjects'][0] } | undefined;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedExam, setSelectedExam] = useState<ExamType>('JEE');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const [isDarkMode, setIsDarkMode] = useLocalStorage('rankvault-dark-mode', false);
  const [savedItems, setSavedItems] = useLocalStorage<SavedItem[]>('rankvault-saved-items', []);
  const [viewedItems, setViewedItems] = useLocalStorage<Record<string, ViewedItem>>('rankvault-viewed-items', {});
  
  // Apply dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  
  const saveItem = (item: Omit<SavedItem, 'savedAt'>) => {
    setSavedItems(prev => {
      if (prev.some(i => i.id === item.id)) return prev;
      return [...prev, { ...item, savedAt: Date.now() }];
    });
  };
  
  const unsaveItem = (id: string) => {
    setSavedItems(prev => prev.filter(item => item.id !== id));
  };
  
  const isItemSaved = (id: string) => savedItems.some(item => item.id === id);
  
  const trackView = (id: string) => {
    setViewedItems(prev => ({
      ...prev,
      [id]: {
        id,
        viewCount: (prev[id]?.viewCount || 0) + 1,
        lastViewed: Date.now(),
      },
    }));
  };
  
  const getSelectedExamData = () => examsData.find(e => e.id === selectedExam);
  
  const getSelectedSubjectData = () => {
    const exam = getSelectedExamData();
    return exam?.subjects.find(s => s.id === selectedSubjectId);
  };
  
  const getSelectedTopicData = () => {
    const exam = getSelectedExamData();
    if (!exam) return undefined;
    
    for (const subject of exam.subjects) {
      const topic = subject.topics.find(t => t.id === selectedTopicId);
      if (topic) {
        return { topic, subject };
      }
    }
    return undefined;
  };
  
  // Reset selections when exam changes
  useEffect(() => {
    setSelectedSubjectId(null);
    setSelectedTopicId(null);
  }, [selectedExam]);
  
  return (
    <AppContext.Provider
      value={{
        selectedExam,
        setSelectedExam,
        selectedSubjectId,
        setSelectedSubjectId,
        selectedTopicId,
        setSelectedTopicId,
        isDarkMode,
        toggleDarkMode,
        savedItems,
        saveItem,
        unsaveItem,
        isItemSaved,
        viewedItems,
        trackView,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        getSelectedExamData,
        getSelectedSubjectData,
        getSelectedTopicData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
