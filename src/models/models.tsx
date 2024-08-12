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

export interface FlexGridCodeSnippet {
  id: number;
  heading: string;
  values?: string;
  description: string;
  command?: string;
}

export interface FlexGridData {
  topic: string;
  commands: FlexGridCodeSnippet[];
}
export interface FlexBoxCheatSheet {
  flexboxData: FlexGridData[];
}

export interface GridCheatSheet {
  gridData: FlexGridData[];
}

export interface CSSCheatSheetState {
  cssCheatSheetDetails: FlexBoxCheatSheet | GridCheatSheet;
  isLoading: boolean;
  hasData: boolean;
  error: string;
}
