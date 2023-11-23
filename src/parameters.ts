// Copyright (c) 2023 Jean-Daniel Michaud
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
  // {attributeID}: {value}
  [key: string]: any;
}

export interface QidoRequestSpecifier extends QidoAttributeSpecifier {
  path: string;
}

export interface WadoAttributeSpecifier {
  annotation?: Array<Annotation>;
  quality?: number;
  viewport?: ViewportSize | SpecificRegion;
  window?: Window;
}

export interface WadoRequestSpecifier extends WadoAttributeSpecifier {
  path: string;
}
