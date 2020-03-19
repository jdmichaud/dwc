import { DICOMWebDataset } from './dicom-web-dataset';
import { DICOMWebResponse } from './dicom-web-response';
import { QidoAttributeSpecifier } from './parameters';
import { Requester } from './requester';

export class Frames extends DICOMWebDataset {
  constructor(dwResponse: DICOMWebResponse, protected readonly requester: Requester) {
    super(dwResponse, requester);
  }
}
