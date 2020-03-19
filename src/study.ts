import { BaseDataset } from './base-dataset';
import { Dataset } from './dataset';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { Series } from './series';
import { responseToJson } from './utils';

/**
 * Hard dependency to BaseDataset for now:
 * https://stackoverflow.com/questions/60854477/extends-from-a-generic-parameter-in-typescript
 */
export class Study extends BaseDataset {
  constructor(dataset: Dataset, private readonly requester: Requester) {
    super(dataset);
  }

  async series(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Series>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/series',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Series(dataset, this.requester));
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<Study> {
    const response = await this.requester.wado({
      path: this.link,
      ...wadoAttributeSpecifier
    });
    const dataset = await responseToJson<Dataset>(response);
    return new Study(dataset, this.requester)
  }
}
