interface PlanTabsProps {
  activeTab: "personal" | "teams";
  onTabChange: (tab: "personal" | "teams") => void;
}

export default function PlanTabs({ activeTab, onTabChange }: PlanTabsProps) {
  return (
    <div className="grid grid-cols-2 border-b border-gray-200">
      <button
        className={`p-4 text-center font-semibold transition-colors ${
          activeTab === "personal"
            ? "border-b-2 border-green-pea text-green-pea"
            : "text-gray-600 hover:bg-gray-50"
        }`}
        onClick={() => onTabChange("personal")}
      >
        Personnel
      </button>
      <button
        className={`p-4 text-center font-semibold transition-colors ${
          activeTab === "teams"
            ? "border-b-2 border-green-pea text-green-pea"
            : "text-gray-600 hover:bg-gray-50"
        }`}
        onClick={() => onTabChange("teams")}
      >
        Entreprise
      </button>
    </div>
  );
}
