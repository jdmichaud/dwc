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
import { Instance } from './instance';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { responseToImage, responseToJson } from './utils';

export class Series extends DICOMWebDataset {
  constructor(dwResponse: DICOMWebResponse, protected readonly requester: Requester) {
    super(dwResponse, requester);
  }

  get link(): string {
    return `/studies/${this.StudyInstanceUID}/series/${this.SeriesInstanceUID}/instances`;
  }

  async instances(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Instance>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SOPInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    }))).map(dwResponse => new Instance(dwResponse, this.requester));
  }

  async query(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Series> {
    const response = await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Series(dwResponse, this.requester)
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<Series> {
    const response = await this.requester.wado({
      path: `${this.link}.metadata`,
      ...wadoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Series(dwResponse, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier,
    }));
  }
}
