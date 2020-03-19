# Data dictionary

This data dictionary was generated from data obtained from the [node-dicom](https://github.com/grmble/node-dicom) project.

## Data Elements

`data-elements.csv` was generated from https://github.com/grmble/node-dicom/blob/master/extra/dataelements.xml using this python code:

```python
from xml.etree.ElementTree import ElementTree
tree = ElementTree()
tree.parse('dataelements.xml')
output = open('data-elements.csv', 'w')
output.write('\n'.join([f'{e.get("tag","")},{e.get("keyword","")},{e.get("vr","")},{e.get("vm","")},{e.text}' for e in tree.findall('el')]))
```

## uids

`uids.csv` was generated from https://github.com/grmble/node-dicom/blob/master/extra/dataelements.xml using this python code:

```python
from xml.etree.ElementTree import ElementTree
tree = ElementTree()
tree.parse('dataelements.xml')
output = open('data-elements.csv', 'w')
output.write('\n'.join([f'{e.get("value","")},{e.get("keyword","")},{e.get("type","")},{e.text}' for e in tree.findall('uid')]))
```

