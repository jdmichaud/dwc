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
