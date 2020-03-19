# dwc - DICOM Web Client

Provide an easy to use API to access a Dicomweb compliant server.

## Example

```typescript
const factory = new dwc.DicomFactory('http://localhost:8080');
const studies = await factory.studies();
const study = await studies[0].metadata();
const seriess = await studies[0].series();
const instances = await seriess[0].instances();
// render the native view of that instance
const thumbnail = await instances[0].thumbnail();
```
