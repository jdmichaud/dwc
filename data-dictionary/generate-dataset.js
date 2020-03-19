/**
 * This program will read the DICOM data dictionary and produce two Typescript classes:
 * - One plain interface containing all the fields.
 * - One base implementation for the interface.
 * The data dictionary shall have the following format:
 * tag,keyword,format,VR,VN,pretty name
 * 00020000,FileMetaInformationGroupLength,UL,1,File Meta Information Group Length
 */
const fs = require('fs');

// Load the data element csv file into a list of objects.
function loadDataElements(dataElementsPath) {
  const dataElements = fs.readFileSync(dataElementsPath)
  .toString()
  .split('\n')
  .map(line => {
    tokens = line.split(',');
    return {
      tag: tokens[0],
      keyword: tokens[1],
      vr: tokens[2],
      vm: tokens[3],
      prettyName: tokens[4],
    }
  });

  return dataElements;
}

// Create a string containing the field of the Dataset interface.
function generateDatasetClass(dataElements) {
  let dataset = '';
  dataElements.map(element => {
    dataset += `  // ${element.prettyName}\n`;
    dataset += `  '${element.tag}'?: Element;\n`;
    dataset += `  ${element.keyword}?: any;\n`;
  });

  return dataset;
}

// Create a string containing the field of the BaseDataset implementation.
function generateBaseDatasetClass(dataElements) {
  let dataset = '';
  dataElements.map(element => {
    dataset += `  // ${element.prettyName}\n`;
    dataset += `  get ${element.keyword}(): any {\n`;
    dataset += `    const element = this.dataset[\'${element.tag}\'];\n`;
    dataset += `    return (element?.Value.length === 1)\n`;
    dataset += `      ? this.dataset[\'${element.tag}\']?.Value[0]\n`;
    dataset += `      : this.dataset[\'${element.tag}\']?.Value;\n`;
    dataset += '  }\n';
    dataset += '\n';
    dataset += `  get '${element.tag}'(): Element {\n`;
    dataset += `    return this.dataset['${element.tag}'];\n`;
    dataset += '  }\n';
    dataset += '\n';
  });

  return dataset;
}

// Replace {{ fields }} by the generated string.
function bindTemplate(templateFile, fields) {
  const template = fs.readFileSync(templateFile).toString();
  return template.replace(/{{[^}]*}}/, fields);
}

function main(argv) {
  if (argv.length !== 3) {
    console.error('error: incorrect number of arguments');
    console.error(`usage: node ${argv[1]} <data_elements_csv> <path_to_output_folder>`);
    process.exit(1);
  }

  const [_, dataElementsPath, outputPath] = argv;
  const dataElements = loadDataElements(dataElementsPath);
  fs.writeFileSync(`${outputPath}/dataset.ts`, bindTemplate('dataset.ts.template', generateDatasetClass(dataElements)));
  fs.writeFileSync(`${outputPath}/base-dataset.ts`, bindTemplate('base-dataset.ts.template', generateBaseDatasetClass(dataElements)));
}

main(process.argv.filter(a => !a.includes('node')));
