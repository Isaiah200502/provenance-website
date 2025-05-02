
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface SectionTabsProps {
  tabs: Tab[];
  className?: string;
}

const SectionTabs = ({ tabs, className }: SectionTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className={className}>
      <div className="flex overflow-x-auto pb-2 mb-6 border-b border-gray-800">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 py-2 mx-1 text-sm font-semibold whitespace-nowrap transition-colors",
              activeTab === tab.id
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400 hover:text-white"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default SectionTabs;
