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

  async frames(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Frames>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SOPInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: `/instances/${this.SOPInstanceUID}`,
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Frames(dwResponse, this.requester));
  }

  async metadata(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Instance> {
    const response = await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Instance(dwResponse, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier
    }));
  }

  async render(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/render`,
      ...wadoAttributeSpecifier
    }));
  }
}
