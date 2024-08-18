export interface GitCodeSnippet {
  id: number;
  description: string;
  command: string;
}

export interface GitCommand {
  topic: string;
  commands: GitCodeSnippet[];
}
export interface GitCheatSheet {
  gitCommands: GitCommand[];
}

export interface GitCheatSheetState {
  gitCheatSheetDetails: GitCheatSheet;
  isLoading: boolean;
  hasData: boolean;
  error: string;
}
export interface CSSCodeSnippet {
  id: number;
  heading: string;
  values?: string;
  description: string;
  command?: string;
}

export interface CSSCheatSheetData {
  topic: string;
  commands: CSSCodeSnippet[];
}

// Generic CheatSheet Interface
export interface CheatSheetData {
  [key: string]: CSSCheatSheetData[];
}

// State Interface
export interface CSSCheatSheetState {
  cssCheatSheetDetails: CheatSheetData;
  isLoading: boolean;
  hasData: boolean;
  error: string | null;
}

// Type Guard Functions
export function getCheatSheetData(
  data: CheatSheetData,
  key: string
): CSSCheatSheetData[] | undefined {
  return data[key];
}

export interface TopicItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export interface Snippet {
  id: number;
  title: string;
  description: string;
  code: string;
}

export interface JSGuide {
  id: number;
  topic: string;
  snippets: Snippet[];
}
export interface JSCheatSheetData {
  jsGuide: JSGuide[];
}

export interface JSCheatSheetState {
  jsCheatSheetDetails: JSCheatSheetData;
  isLoading: boolean;
  hasData: boolean;
  error: string | null;
}
