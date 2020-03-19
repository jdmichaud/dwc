import { DICOMWebDataset } from './dicom-web-dataset';
import { DICOMWebResponse } from './dicom-web-response';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { Series } from './series';
import { responseToJson } from './utils';

/**
 * Hard dependency to BaseDataset for now:
 * https://stackoverflow.com/questions/60854477/extends-from-a-generic-parameter-in-typescript
 */
export class Study extends DICOMWebDataset {
  constructor(dwResponse: DICOMWebResponse, requester: Requester) {
    super(dwResponse, requester);
  }

  async series(qidoAttributeSpecifier: QidoAttributeSpecifier = {}): Promise<Array<Series>> {
    qidoAttributeSpecifier.includefield = qidoAttributeSpecifier.includefield ?? [];
    qidoAttributeSpecifier.includefield.push('SeriesInstanceUID');
    return (await responseToJson<Array<DICOMWebResponse>>(await this.requester.qido({
      path: `/studies/${this.StudyInstanceUID}/series`,
      ...qidoAttributeSpecifier
    }))).map(dwResponse => new Series(dwResponse, this.requester));
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier = {}): Promise<Study> {
    const response = await this.requester.wado({
      path: this.link,
      ...wadoAttributeSpecifier
    });
    const dwResponse = await responseToJson<DICOMWebResponse>(response);
    return new Study(dwResponse, this.requester)
  }
}
