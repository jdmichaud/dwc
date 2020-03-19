import { BaseDataset } from './base-dataset';
import { Dataset } from './dataset';
import { Frames } from './frames';
import { QidoAttributeSpecifier, WadoAttributeSpecifier } from './parameters';
import { Requester } from './requester';
import { responseToImage, responseToJson } from './utils';

export class Instance extends BaseDataset {
  constructor(dataset: Dataset, private readonly requester: Requester) {
    super(dataset);
  }

  async frames(qidoAttributeSpecifier: QidoAttributeSpecifier): Promise<Array<Frames>> {
    return (await responseToJson<Array<Dataset>>(await this.requester.qido({
      path: '/instances',
      ...qidoAttributeSpecifier
    }))).map(dataset => new Frames(dataset, this.requester));
  }

  async metadata(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<Instance> {
    const response = await this.requester.wado({
      path: this.link,
      ...wadoAttributeSpecifier
    });
    const dataset = await responseToJson<Dataset>(response);
    return new Instance(dataset, this.requester)
  }

  async thumbnail(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/thumbnail`,
      ...wadoAttributeSpecifier
    }));
  }

  async render(wadoAttributeSpecifier: WadoAttributeSpecifier): Promise<ImageBitmap> {
    return responseToImage(await this.requester.wado({
      path: `${this.link}/render`,
      ...wadoAttributeSpecifier
    }));
  }
}
