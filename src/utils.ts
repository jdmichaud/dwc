export async function responseToJson<T>(response: Response): Promise<T> {
  const body = await response.json();
  if (!response.ok) {
    const error = body.error ?? '';7
    throw new Error(`${response.status} ${response.statusText} ${error}`);
  }
  return body;
}

export async function responseToImage(response: Response): Promise<ImageBitmap> {
  return createImageBitmap(await response.blob());
}