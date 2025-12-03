import { ReactNode } from 'react';

export interface ProcessPoint {
  id: number;
  title: string;
  description: string;
  details: string[];
  icon: ReactNode;
  color: string;
}

export enum AIRequestStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface AIResponse {
  markdown: string;
}