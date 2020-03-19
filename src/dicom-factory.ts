import { BaseDataset } from './base-dataset';
import { Dataset } from './dataset';
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

  async studies(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Study>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/studies',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Study(dataset, this.requester));
  }

  async series(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Study>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/series',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Study(dataset, this.requester));
  }

  async instances(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Study>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/instances',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Study(dataset, this.requester));
  }
}
