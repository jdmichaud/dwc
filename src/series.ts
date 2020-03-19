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

  async instances(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Instance>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SOPInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: `/series/${this.SeriesInstanceUID}/instances`,
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Instance(dwResponse, this.requester));
  }

  async metadata(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Series> {
    const response = await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Series(dwResponse, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier
    }));
  }
}
