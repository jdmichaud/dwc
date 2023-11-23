import { DICOMWebDataset } from './dicom-web-dataset';
import { DICOMWebResponse } from './dicom-web-response';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { Series } from './series';
import { responseToImage, responseToJson } from './utils';

/**
 * Hard dependency to BaseDataset for now:
 * https://stackoverflow.com/questions/60854477/extends-from-a-generic-parameter-in-typescript
 */
export class Study extends DICOMWebDataset {
  constructor(dwResponse: DICOMWebResponse, requester: Requester) {
    super(dwResponse, requester);
  }

  get link(): string {
    return `/studies/${this.StudyInstanceUID}/series`;
  }

  async series(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Series>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SeriesInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    }))).map(dwResponse => new Series(dwResponse, this.requester));
  }

  async query(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Study> {
    const response = await this.requester.qido({
      path: this.link,
      ...qidoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Study(dwResponse, this.requester)
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<Study> {
    const response = await this.requester.wado({
      path: `${this.link}/metadata`,
      ...wadoAttributeSpecifier,
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Study(dwResponse, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<ImageBitmap> {
    const series = await this.series();
    if (series.length === 0) {
      throw new Error('Study has no series. Cannot create thumbnail.');
    }
    return responseToImage(await this.requester.wado({
      path: `${series[0].link}/thumbnail`,
      ...wadoAttributeSpecifier,
    }));
  }
}
