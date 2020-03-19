export enum Annotation {
  PATIENT = 'patient',
  TEHCNIQUE = 'technique',
}

export interface ViewportSize {
  vw: number;
  vh: number;
}

export interface SpecificRegion {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export enum WindowShape {
  LINEAR = 'LINEAR',
  LINEAR_EXACT = 'LINEAR_EXACT',
  SIGMOID = 'SIGMOID',
}

export interface Window {
  centre: number;
  width: number;
  shape: WindowShape;
}

export interface QidoAttributeSpecifier {
  includefield?: Array<string>;
  fuzzymatching?: boolean;
  limit?: number;
  offset?: number;
}

export interface QidoRequestSpecifier extends QidoAttributeSpecifier {
  path: string;
};

export interface WadoAttributeSpecifier {
  annotation: Array<Annotation>;
  quality: number;
  viewport: ViewportSize | SpecificRegion;
  window: Window;
}

export interface WadoRequestSpecifier extends WadoAttributeSpecifier {
  path: string;
}
