import { BaseDataset } from './base-dataset';
import { Dataset } from './dataset';
import { QidoAttributeSpecifier } from './parameters';
import { Requester } from './requester';

export class Frames extends BaseDataset {
  constructor(dataset: Dataset, private readonly requester: Requester) {
    super(dataset);
  }
}
