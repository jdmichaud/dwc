import { QidoRequestSpecifier, WadoRequestSpecifier } from './parameters';
import { UrlCreator } from './url-creator';

export interface Requester {
  qido(qidoRequestSpecifier: QidoRequestSpecifier): Promise<Response>;
  wado(wadoRequestSpecifier: WadoRequestSpecifier): Promise<Response>;
}

export class SimpleRequester implements Requester {
  private urlCreator: UrlCreator = new UrlCreator();

  constructor(private readonly endpoint: string) {}

  async qido(qidoRequestSpecifier: QidoRequestSpecifier): Promise<Response> {
    return await fetch(`${this.endpoint}${this.urlCreator.qido(qidoRequestSpecifier)}`);
  }

  async wado(wadoRequestSpecifier: WadoRequestSpecifier): Promise<Response> {
    return await fetch(`${this.endpoint}${this.urlCreator.wado(wadoRequestSpecifier)}`);
  }
}
