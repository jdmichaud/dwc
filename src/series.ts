import { BaseDataset } from './base-dataset';
import { Dataset } from './dataset';
import { Instance } from './instance';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { responseToImage, responseToJson } from './utils';

export class Series extends BaseDataset {
  constructor(dataset: Dataset, private readonly requester: Requester) {
    super(dataset);
  }

  async instances(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Instance>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/instances',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Instance(dataset, this.requester));
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<Series> {
    const response = await this.requester.wado({
      path: this.link,
      ...wadoAttributeSpecifier
    });
    const dataset = await responseToJson<Dataset>(response);
    return new Series(dataset, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier
    }));
  }
}
