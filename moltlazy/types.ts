/**
 * OpenClaw Configuration Types
 *
 * Type definitions for the OpenClaw JSON configuration schema.
 * These mirror the OpenClaw config structure at /root/.openclaw/openclaw.json.
 *
 * References:
 * - OpenClaw config schema: https://docs.openclaw.ai/
 * - Model API types: https://github.com/openclaw/openclaw/blob/main/src/config/types.models.ts
 */

export interface GatewayAuth {
  token?: string;
}

export interface ControlUi {
  allowInsecureAuth?: boolean;
}

export interface GatewayConfig {
  port?: number;
  mode?: string;
  trustedProxies?: string[];
  auth?: GatewayAuth;
  controlUi?: ControlUi;
}

export interface ModelEntry {
  id: string;
  name: string;
  contextWindow: number;
  maxTokens: number;
}

export interface ProviderConfig {
  baseUrl?: string;
  apiKey?: string;
  api?: string;
  models?: ModelEntry[];
}

export interface ModelsConfig {
  providers?: Record<string, ProviderConfig>;
}

export interface AgentDefaults {
  model?: { primary: string };
}

export interface AgentsConfig {
  defaults?: AgentDefaults;
}

export interface TelegramConfig {
  botToken?: string;
  enabled?: boolean;
  dmPolicy?: string;
  allowFrom?: string[];
}

export interface DiscordDmConfig {
  policy?: string;
  allowFrom?: string[];
}

export interface DiscordConfig {
  token?: string;
  enabled?: boolean;
  dm?: DiscordDmConfig;
}

export interface SlackConfig {
  botToken?: string;
  appToken?: string;
  enabled?: boolean;
}

export interface ChannelsConfig {
  telegram?: TelegramConfig;
  discord?: DiscordConfig;
  slack?: SlackConfig;
}

export interface OpenClawConfig {
  gateway?: GatewayConfig;
  channels?: ChannelsConfig;
  models?: ModelsConfig;
  agents?: AgentsConfig;
}

