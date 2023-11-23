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
import { Frames } from './frames';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { responseToImage, responseToJson } from './utils';

export class Instance extends DICOMWebDataset {
  constructor(dwResponse: DICOMWebResponse, protected readonly requester: Requester) {
    super(dwResponse, requester);
  }

  get link(): string {
    return `/studies/${this.StudyInstanceUID}/series/${this.SeriesInstanceUID}/instances/${this.SOPInstanceUID}`;
  }

  async frames(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Frames>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SOPInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    }))).map(dwResponse => new Frames(dwResponse, this.requester));
  }

  async query(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Instance> {
    const response = await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Instance(dwResponse, this.requester)
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<Instance> {
    const response = await this.requester.wado({
      path: `${this.link}/metadata`,
      ...wadoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Instance(dwResponse, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier,
    }));
  }

  async render(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/render`,
      ...wadoAttributeSpecifier,
    }));
  }
}
