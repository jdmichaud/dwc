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

import { QidoRequestSpecifier, WadoRequestSpecifier } from './parameters';

export class UrlCreator {
  private buildQueryString(parameters: Array<string>): string {
    return parameters
      .filter(entry => entry != '')
      .reduce((acc, value) => acc === '' ? `?${value}` : acc + `&${value}`, '');
  }

  qido<T>(qidoRequestSpecifier: QidoRequestSpecifier): string {
    const queryParameter = Object.keys(qidoRequestSpecifier)
      .filter(k => k !== 'includefield' && k !== 'path') // treated separately
      .map(k => `${k}=${qidoRequestSpecifier[k].toString()}`);
    const includeFieldParameter = qidoRequestSpecifier.includefield !== undefined
      ? `includefield=${qidoRequestSpecifier.includefield.join(',')}`
      : '';

    const queryString = this.buildQueryString([...queryParameter, includeFieldParameter]);
    return `${qidoRequestSpecifier.path}${queryString}`;
  }

  wado<T>(wadoRequestSpecifier: WadoRequestSpecifier): string {
    const queryString = this.buildQueryString([
      wadoRequestSpecifier.annotation !== undefined
        ? `annotation=${wadoRequestSpecifier.annotation}`
        : '',
      wadoRequestSpecifier.quality !== undefined
        ? `quality=${wadoRequestSpecifier.quality}`
        : '',
      wadoRequestSpecifier.viewport !== undefined
        ? `viewport=${Object.values(wadoRequestSpecifier.viewport).join(',')}`
        : '',
      wadoRequestSpecifier.window !== undefined
        ? `window=${Object.values(wadoRequestSpecifier.window).join(',')}`
        : '',
    ]);

    return `${wadoRequestSpecifier.path}${queryString}`;
  }
}
