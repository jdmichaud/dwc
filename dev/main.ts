import * as dwc from '../src/index';
import { DicomFactory } from '../src/index';

async function main(): Promise<void> {
  const factory = new DicomFactory('http://localhost:8080');

  const studies = await factory.studies({ StudyInstanceUID: '1.2.840.113704.1.111.4952.1244608360.1' }); // PigCT
  // const studies = await factory.studies({ StudyInstanceUID: '1.3.6.1.4.1.5962.1.2.70.1166562673.14401' }); // CT Enchanged
  const seriess = await studies[0].series();
  const instances = await seriess[0].instances();
  // Test out SQ feature for enhanced CT datasets
  const instance = await instances[0].metadata();
  console.log(instance.SharedFunctionalGroupsSequence?.[0]?.MRImagingModifierSequence?.[0]?.PixelBandwidth);

  // render the native view of that instance
  const thumbnail = await instances[0].thumbnail();

  const vp = document.getElementById('viewport') as HTMLCanvasElement;
  const ctx = vp.getContext('2d') as CanvasRenderingContext2D;
  ctx.drawImage(thumbnail, 0, 0, 512, 512);

  // Retrieve raw pixels
  const pixels = await instance.PixelData;
  console.log(pixels);

  // For debugging purposes
  (window as any).factory = factory;
  (window as any).studies = studies;
  (window as any).seriess = seriess;
  (window as any).instances = instances;
  (window as any).instance = instance;
}

(window as any).dwc = dwc;
window.onload = main;
