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

import { DICOMWebDataset } from './dicom-web-dataset';
import { DICOMWebResponse } from './dicom-web-response';
import { Study } from './study';
import { QidoAttributeSpecifier } from './parameters';
import { Requester, SimpleRequester } from './requester';
import { responseToJson } from './utils';

export class DicomFactory {
  private readonly requester: Requester;

  constructor(endpoint: string) {
    this.requester = new SimpleRequester(endpoint[endpoint.length - 1] === '/'
      ? endpoint.substr(0, endpoint.length - 1)
      : endpoint);
  }

  async studies(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Study>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('StudyInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: '/studies',
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Study(dwResponse, this.requester));
  }

  async series(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Study>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SeriesInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: '/series',
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Study(dwResponse, this.requester));
  }

  async instances(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Study>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SOPInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: '/instances',
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Study(dwResponse, this.requester));
  }
}
