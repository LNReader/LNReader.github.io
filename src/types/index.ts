export interface PluginItem {
  id: string;
  name: string;
  version: string;
  iconUrl: string;
  site: string;
  lang: string;
}

export enum NovelStatus {
  Unknown = "Unknown",
  Ongoing = "Ongoing",
  Completed = "Completed",
  Licensed = "Licensed",
  PublishingFinished = "Publishing Finished",
  Cancelled = "Cancelled",
  OnHiatus = "On Hiatus",
}

export interface NovelInfo {
  id: number;
  path: string;
  pluginId: string;
  name: string;
  cover?: string;
  summary?: string;
  author?: string;
  artist?: string;
  status?: NovelStatus | string;
  genres?: string;
  inLibrary: boolean;
  isLocal: boolean;
  totalPages: number;
}
