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

export function convert(data: any, tag: number, tagtype: string): any {
  switch (tagtype) {
    case 'any':
      return data;
    case 'number':
      return Number(data);
    case 'string':
      return data;
    case 'Date':
      if (data === undefined) return undefined;
      const canondatestr = (data.includes('.'))
        ? data.split('.').join('') // ACR-NEMA Standard 300 date format
        : data;
      const year = Number(canondatestr.substr(0, 4));
      const month = Number(canondatestr.substr(4, 2));
      const day = Number(canondatestr.substr(6, 2));
      return new Date(year, month, day);
    case 'Uint8Array':
    case 'Array<number>':
    case 'Array<number | undefined>':
    case 'Array<string>':
    case 'Array<string | undefined>':
    case 'Float32Array':
    case 'Array<Array<string> | undefined>':
    case 'Array<Date | undefined>':
    case 'Array<Partial<Dataset> | undefined>':
    case 'Array<string>':
    case 'Array<string | undefined>':
    case 'Array<Uint16Array | undefined>':
    case 'Array<Uint8Array | undefined>':
    case 'Float64Array':
    case 'Uint16Array':
    case 'Uint32Array':
    case 'Array<any | undefined>':
    case 'undefined':
    default:
  }

  throw new Error(`convert: unsupported type ${tagtype} for tag 0x${tag.toString(16)}`);
}