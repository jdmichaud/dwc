import { QidoRequestSpecifier, WadoRequestSpecifier } from './parameters';

export class UrlCreator {
  private buildQueryString(parameters: Array<string>): string {
    return parameters
      .filter(entry => entry != '')
      .reduce((acc, value) => acc === '' ? `?${value}` : acc + `&${value}`, '');
  }

  qido<T>(qidoRequestSpecifier: QidoRequestSpecifier): string {
    const queryString = this.buildQueryString([
      qidoRequestSpecifier.includefield !== undefined
        ? `includefield=${qidoRequestSpecifier.includefield.join(',')}`
        : '',
      qidoRequestSpecifier.fuzzymatching !== undefined
        ? `fuzzymatching=${qidoRequestSpecifier.fuzzymatching}`
        : '',
      qidoRequestSpecifier.limit !== undefined
        ? `limit=${qidoRequestSpecifier.limit}`
        : '',
      qidoRequestSpecifier.offset !== undefined
        ? `offset=${qidoRequestSpecifier.offset}`
        : '',
    ]);

    return `${qidoRequestSpecifier.path}${queryString}`;
  };

  wado<T>(wadoRequestSpecifier: WadoRequestSpecifier): string {
    const queryString = this.buildQueryString([
      wadoRequestSpecifier.annotation !== undefined
        ? `annotation=${wadoRequestSpecifier.annotation}`
        : '',
      wadoRequestSpecifier.quality !== undefined
        ? `quality=${wadoRequestSpecifier.quality}`
        : '',
      wadoRequestSpecifier.viewport !== undefined
        ? `viewport=${Object.values(wadoRequestSpecifier.viewport).join(',')}`
        : '',
      wadoRequestSpecifier.window !== undefined
        ? `window=${Object.values(wadoRequestSpecifier.window).join(',')}`
        : '',
    ]);

    return `${wadoRequestSpecifier.path}${queryString}`;
  };
}
