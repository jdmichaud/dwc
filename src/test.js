const factory = new dwc.DicomFactory('http://localhost:8080');
const studies = await factory.studies();
const study = await studies[0].metadata();
const seriess = await studies[0].series();
const instances = await seriess[0].instances();

const thumbnail = instances[0].thumbnail();
