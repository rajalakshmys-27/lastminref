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

export interface FlexBoxCodeSnippet {
  id: number;
  heading: string;
  values?: string;
  description: string;
  command?: string;
}

export interface FlexboxData {
  topic: string;
  commands: FlexBoxCodeSnippet[];
}
export interface FlexboxCheatSheet {
  flexboxData: FlexboxData[];
}

export interface CSSCheatSheetState {
  cssCheatSheetDetails: FlexboxCheatSheet;
  isLoading: boolean;
  hasData: boolean;
  error: string;
}
