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
export interface FlexBoxCheatSheet {
  flexboxData: CSSCheatSheetData[];
}

export interface GridCheatSheet {
  gridData: CSSCheatSheetData[];
}
export interface CSSBasicCheatSheet {
  cssBasicsData: CSSCheatSheetData[];
}
export interface AnimationCheatSheet {
  cssAnimationsData: CSSCheatSheetData[];
}

export type CheatSheetData =
  | CSSBasicCheatSheet
  | FlexBoxCheatSheet
  | GridCheatSheet
  | AnimationCheatSheet;
export interface CSSCheatSheetState {
  cssCheatSheetDetails: CheatSheetData;
  isLoading: boolean;
  hasData: boolean;
  error: string;
}

export function isFlexBoxCheatSheet(
  data: CheatSheetData
): data is FlexBoxCheatSheet {
  return "flexboxData" in data;
}

export function isGridCheatSheet(data: CheatSheetData): data is GridCheatSheet {
  return "gridData" in data;
}

export function isCSSBasicCheatSheet(
  data: CheatSheetData
): data is CSSBasicCheatSheet {
  return "cssBasicsData" in data;
}

export function isAnimationCheatSheet(
  data: CheatSheetData
): data is AnimationCheatSheet {
  return "cssAnimationsData" in data;
}

export interface TopicItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}
