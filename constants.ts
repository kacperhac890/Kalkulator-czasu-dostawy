import { RoadType, ColorConfig } from './types';

// Prędkości w km/h zdefiniowane w wymaganiach
export const SPEEDS = {
  [RoadType.HIGHWAY]: 80,
  [RoadType.NATIONAL]: 64,
  [RoadType.CITY]: 30,
};

export const DEFAULT_COLORS: ColorConfig = {
  [RoadType.HIGHWAY]: '#3b82f6', // blue-500
  [RoadType.NATIONAL]: '#f59e0b', // amber-500
  [RoadType.CITY]: '#ef4444',     // red-500
};

export const LABELS = {
  [RoadType.HIGHWAY]: 'Autostrady i Ekspresowe',
  [RoadType.NATIONAL]: 'Drogi Krajowe',
  [RoadType.CITY]: 'Ruch Miejski',
};