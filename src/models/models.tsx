export interface Command {
  id: number;
  description: string;
  command: string;
}

export interface GitCommand {
  topic: string;
  commands: Command[];
}
export interface GitCommands {
  gitCommands: GitCommand[];
}

export interface GitCommandState {
  gitCommandDetails: GitCommands;
  isLoading: boolean;
  hasData: boolean;
  error: string;
}
