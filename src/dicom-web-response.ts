// Copyright (c) 2023 Jean-Daniel Michaud
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/* eslint-disable */

export interface Element {
  Value: Array<any>;
  vr: string;
}

/**
 * Describes a DICOM dataset with fields based on the DICOM tag presented as an
 * hexadecimal 8 characters string (ex.: 00100010)
 */
export interface DICOMWebResponse {
  // Mandatory field described by the DICOMWeb standard
  link: string;

  // File Meta Information Group Length
  '00020000': Element | undefined;
  // File Meta Information Version
  '00020001': Element | undefined;
  // Media Storage SOP Class UID
  '00020002': Element | undefined;
  // Media Storage SOP Instance UID
  '00020003': Element | undefined;
  // Transfer Syntax UID
  '00020010': Element | undefined;
  // Implementation Class UID
  '00020012': Element | undefined;
  // Implementation Version Name
  '00020013': Element | undefined;
  // Source Application Entity Title
  '00020016': Element | undefined;
  // Sending Application Entity Title
  '00020017': Element | undefined;
  // Receiving Application Entity Title
  '00020018': Element | undefined;
  // Private Information Creator UID
  '00020100': Element | undefined;
  // Private Information
  '00020102': Element | undefined;
  // File-set ID
  '00041130': Element | undefined;
  // File-set Descriptor File ID
  '00041141': Element | undefined;
  // Specific Character Set of File-set Descriptor File
  '00041142': Element | undefined;
  // Offset of the First Directory Record of the Root Directory Entity
  '00041200': Element | undefined;
  // Offset of the Last Directory Record of the Root Directory Entity
  '00041202': Element | undefined;
  // File-set Consistency Flag
  '00041212': Element | undefined;
  // Directory Record Sequence
  '00041220': Element | undefined;
  // Offset of the Next Directory Record
  '00041400': Element | undefined;
  // Record In-use Flag
  '00041410': Element | undefined;
  // Offset of Referenced Lower-Level Directory Entity
  '00041420': Element | undefined;
  // Directory Record Type
  '00041430': Element | undefined;
  // Private Record UID
  '00041432': Element | undefined;
  // Referenced File ID
  '00041500': Element | undefined;
  // MRDR Directory Record Offset
  '00041504': Element | undefined;
  // Referenced SOP Class UID in File
  '00041510': Element | undefined;
  // Referenced SOP Instance UID in File
  '00041511': Element | undefined;
  // Referenced Transfer Syntax UID in File
  '00041512': Element | undefined;
  // Referenced Related General SOP Class UID in File
  '0004151A': Element | undefined;
  // Number of References
  '00041600': Element | undefined;
  // Length to End
  '00080001': Element | undefined;
  // Specific Character Set
  '00080005': Element | undefined;
  // Language Code Sequence
  '00080006': Element | undefined;
  // Image Type
  '00080008': Element | undefined;
  // Recognition Code
  '00080010': Element | undefined;
  // Instance Creation Date
  '00080012': Element | undefined;
  // Instance Creation Time
  '00080013': Element | undefined;
  // Instance Creator UID
  '00080014': Element | undefined;
  // Instance Coercion DateTime
  '00080015': Element | undefined;
  // SOP Class UID
  '00080016': Element | undefined;
  // SOP Instance UID
  '00080018': Element | undefined;
  // Related General SOP Class UID
  '0008001A': Element | undefined;
  // Original Specialized SOP Class UID
  '0008001B': Element | undefined;
  // Study Date
  '00080020': Element | undefined;
  // Series Date
  '00080021': Element | undefined;
  // Acquisition Date
  '00080022': Element | undefined;
  // Content Date
  '00080023': Element | undefined;
  // Overlay Date
  '00080024': Element | undefined;
  // Curve Date
  '00080025': Element | undefined;
  // Acquisition DateTime
  '0008002A': Element | undefined;
  // Study Time
  '00080030': Element | undefined;
  // Series Time
  '00080031': Element | undefined;
  // Acquisition Time
  '00080032': Element | undefined;
  // Content Time
  '00080033': Element | undefined;
  // Overlay Time
  '00080034': Element | undefined;
  // Curve Time
  '00080035': Element | undefined;
  // Data Set Type
  '00080040': Element | undefined;
  // Data Set Subtype
  '00080041': Element | undefined;
  // Nuclear Medicine Series Type
  '00080042': Element | undefined;
  // Accession Number
  '00080050': Element | undefined;
  // Issuer of Accession Number Sequence
  '00080051': Element | undefined;
  // Query/Retrieve Level
  '00080052': Element | undefined;
  // Query/Retrieve View
  '00080053': Element | undefined;
  // Retrieve AE Title
  '00080054': Element | undefined;
  // Instance Availability
  '00080056': Element | undefined;
  // Failed SOP Instance UID List
  '00080058': Element | undefined;
  // Modality
  '00080060': Element | undefined;
  // Modalities in Study
  '00080061': Element | undefined;
  // SOP Classes in Study
  '00080062': Element | undefined;
  // Conversion Type
  '00080064': Element | undefined;
  // Presentation Intent Type
  '00080068': Element | undefined;
  // Manufacturer
  '00080070': Element | undefined;
  // Institution Name
  '00080080': Element | undefined;
  // Institution Address
  '00080081': Element | undefined;
  // Institution Code Sequence
  '00080082': Element | undefined;
  // Referring Physician's Name
  '00080090': Element | undefined;
  // Referring Physician's Address
  '00080092': Element | undefined;
  // Referring Physician's Telephone Numbers
  '00080094': Element | undefined;
  // Referring Physician Identification Sequence
  '00080096': Element | undefined;
  // Code Value
  '00080100': Element | undefined;
  // Extended Code Value
  '00080101': Element | undefined;
  // Coding Scheme Designator
  '00080102': Element | undefined;
  // Coding Scheme Version
  '00080103': Element | undefined;
  // Code Meaning
  '00080104': Element | undefined;
  // Mapping Resource
  '00080105': Element | undefined;
  // Context Group Version
  '00080106': Element | undefined;
  // Context Group Local Version
  '00080107': Element | undefined;
  // Extended Code Meaning
  '00080108': Element | undefined;
  // Context Group Extension Flag
  '0008010B': Element | undefined;
  // Coding Scheme UID
  '0008010C': Element | undefined;
  // Context Group Extension Creator UID
  '0008010D': Element | undefined;
  // Context Identifier
  '0008010F': Element | undefined;
  // Coding Scheme Identification Sequence
  '00080110': Element | undefined;
  // Coding Scheme Registry
  '00080112': Element | undefined;
  // Coding Scheme External ID
  '00080114': Element | undefined;
  // Coding Scheme Name
  '00080115': Element | undefined;
  // Coding Scheme Responsible Organization
  '00080116': Element | undefined;
  // Context UID
  '00080117': Element | undefined;
  // Timezone Offset From UTC
  '00080201': Element | undefined;
  // Network ID
  '00081000': Element | undefined;
  // Station Name
  '00081010': Element | undefined;
  // Study Description
  '00081030': Element | undefined;
  // Procedure Code Sequence
  '00081032': Element | undefined;
  // Series Description
  '0008103E': Element | undefined;
  // Series Description Code Sequence
  '0008103F': Element | undefined;
  // Institutional Department Name
  '00081040': Element | undefined;
  // Physician(s) of Record
  '00081048': Element | undefined;
  // Physician(s) of Record Identification Sequence
  '00081049': Element | undefined;
  // Performing Physician's Name
  '00081050': Element | undefined;
  // Performing Physician Identification Sequence
  '00081052': Element | undefined;
  // Name of Physician(s) Reading Study
  '00081060': Element | undefined;
  // Physician(s) Reading Study Identification Sequence
  '00081062': Element | undefined;
  // Operators' Name
  '00081070': Element | undefined;
  // Operator Identification Sequence
  '00081072': Element | undefined;
  // Admitting Diagnoses Description
  '00081080': Element | undefined;
  // Admitting Diagnoses Code Sequence
  '00081084': Element | undefined;
  // Manufacturer's Model Name
  '00081090': Element | undefined;
  // Referenced Results Sequence
  '00081100': Element | undefined;
  // Referenced Study Sequence
  '00081110': Element | undefined;
  // Referenced Performed Procedure Step Sequence
  '00081111': Element | undefined;
  // Referenced Series Sequence
  '00081115': Element | undefined;
  // Referenced Patient Sequence
  '00081120': Element | undefined;
  // Referenced Visit Sequence
  '00081125': Element | undefined;
  // Referenced Overlay Sequence
  '00081130': Element | undefined;
  // Referenced Stereometric Instance Sequence
  '00081134': Element | undefined;
  // Referenced Waveform Sequence
  '0008113A': Element | undefined;
  // Referenced Image Sequence
  '00081140': Element | undefined;
  // Referenced Curve Sequence
  '00081145': Element | undefined;
  // Referenced Instance Sequence
  '0008114A': Element | undefined;
  // Referenced Real World Value Mapping Instance Sequence
  '0008114B': Element | undefined;
  // Referenced SOP Class UID
  '00081150': Element | undefined;
  // Referenced SOP Instance UID
  '00081155': Element | undefined;
  // SOP Classes Supported
  '0008115A': Element | undefined;
  // Referenced Frame Number
  '00081160': Element | undefined;
  // Simple Frame List
  '00081161': Element | undefined;
  // Calculated Frame List
  '00081162': Element | undefined;
  // Time Range
  '00081163': Element | undefined;
  // Frame Extraction Sequence
  '00081164': Element | undefined;
  // Multi-frame Source SOP Instance UID
  '00081167': Element | undefined;
  // Retrieve URL
  '00081190': Element | undefined;
  // Transaction UID
  '00081195': Element | undefined;
  // Warning Reason
  '00081196': Element | undefined;
  // Failure Reason
  '00081197': Element | undefined;
  // Failed SOP Sequence
  '00081198': Element | undefined;
  // Referenced SOP Sequence
  '00081199': Element | undefined;
  // Studies Containing Other Referenced Instances Sequence
  '00081200': Element | undefined;
  // Related Series Sequence
  '00081250': Element | undefined;
  // Lossy Image Compression (Retired)
  '00082110': Element | undefined;
  // Derivation Description
  '00082111': Element | undefined;
  // Source Image Sequence
  '00082112': Element | undefined;
  // Stage Name
  '00082120': Element | undefined;
  // Stage Number
  '00082122': Element | undefined;
  // Number of Stages
  '00082124': Element | undefined;
  // View Name
  '00082127': Element | undefined;
  // View Number
  '00082128': Element | undefined;
  // Number of Event Timers
  '00082129': Element | undefined;
  // Number of Views in Stage
  '0008212A': Element | undefined;
  // Event Elapsed Time(s)
  '00082130': Element | undefined;
  // Event Timer Name(s)
  '00082132': Element | undefined;
  // Event Timer Sequence
  '00082133': Element | undefined;
  // Event Time Offset
  '00082134': Element | undefined;
  // Event Code Sequence
  '00082135': Element | undefined;
  // Start Trim
  '00082142': Element | undefined;
  // Stop Trim
  '00082143': Element | undefined;
  // Recommended Display Frame Rate
  '00082144': Element | undefined;
  // Transducer Position
  '00082200': Element | undefined;
  // Transducer Orientation
  '00082204': Element | undefined;
  // Anatomic Structure
  '00082208': Element | undefined;
  // Anatomic Region Sequence
  '00082218': Element | undefined;
  // Anatomic Region Modifier Sequence
  '00082220': Element | undefined;
  // Primary Anatomic Structure Sequence
  '00082228': Element | undefined;
  // Anatomic Structure
  '00082229': Element | undefined;
  // Primary Anatomic Structure Modifier Sequence
  '00082230': Element | undefined;
  // Transducer Position Sequence
  '00082240': Element | undefined;
  // Transducer Position Modifier Sequence
  '00082242': Element | undefined;
  // Transducer Orientation Sequence
  '00082244': Element | undefined;
  // Transducer Orientation Modifier Sequence
  '00082246': Element | undefined;
  // Anatomic Structure Space Or Region Code Sequence (Trial)
  '00082251': Element | undefined;
  // Anatomic Portal Of Entrance Code Sequence (Trial)
  '00082253': Element | undefined;
  // Anatomic Approach Direction Code Sequence (Trial)
  '00082255': Element | undefined;
  // Anatomic Perspective Description (Trial)
  '00082256': Element | undefined;
  // Anatomic Perspective Code Sequence (Trial)
  '00082257': Element | undefined;
  // Anatomic Location Of Examining Instrument Description (Trial)
  '00082258': Element | undefined;
  // Anatomic Location Of Examining Instrument Code Sequence (Trial)
  '00082259': Element | undefined;
  // Anatomic Structure Space Or Region Modifier Code Sequence (Trial)
  '0008225A': Element | undefined;
  // OnAxis Background Anatomic Structure Code Sequence (Trial)
  '0008225C': Element | undefined;
  // Alternate Representation Sequence
  '00083001': Element | undefined;
  // Irradiation Event UID
  '00083010': Element | undefined;
  // Source Irradiation Event Sequence
  '00083011': Element | undefined;
  // Radiopharmaceutical Administration Event UID
  '00083012': Element | undefined;
  // Identifying Comments
  '00084000': Element | undefined;
  // Frame Type
  '00089007': Element | undefined;
  // Referenced Image Evidence Sequence
  '00089092': Element | undefined;
  // Referenced Raw Data Sequence
  '00089121': Element | undefined;
  // Creator-Version UID
  '00089123': Element | undefined;
  // Derivation Image Sequence
  '00089124': Element | undefined;
  // Source Image Evidence Sequence
  '00089154': Element | undefined;
  // Pixel Presentation
  '00089205': Element | undefined;
  // Volumetric Properties
  '00089206': Element | undefined;
  // Volume Based Calculation Technique
  '00089207': Element | undefined;
  // Complex Image Component
  '00089208': Element | undefined;
  // Acquisition Contrast
  '00089209': Element | undefined;
  // Derivation Code Sequence
  '00089215': Element | undefined;
  // Referenced Presentation State Sequence
  '00089237': Element | undefined;
  // Referenced Other Plane Sequence
  '00089410': Element | undefined;
  // Frame Display Sequence
  '00089458': Element | undefined;
  // Recommended Display Frame Rate in Float
  '00089459': Element | undefined;
  // Skip Frame Range Flag
  '00089460': Element | undefined;
  // Patient's Name
  '00100010': Element | undefined;
  // Patient ID
  '00100020': Element | undefined;
  // Issuer of Patient ID
  '00100021': Element | undefined;
  // Type of Patient ID
  '00100022': Element | undefined;
  // Issuer of Patient ID Qualifiers Sequence
  '00100024': Element | undefined;
  // Patient's Birth Date
  '00100030': Element | undefined;
  // Patient's Birth Time
  '00100032': Element | undefined;
  // Patient's Sex
  '00100040': Element | undefined;
  // Patient's Insurance Plan Code Sequence
  '00100050': Element | undefined;
  // Patient's Primary Language Code Sequence
  '00100101': Element | undefined;
  // Patient's Primary Language Modifier Code Sequence
  '00100102': Element | undefined;
  // Quality Control Subject
  '00100200': Element | undefined;
  // Quality Control Subject Type Code Sequence
  '00100201': Element | undefined;
  // Other Patient IDs
  '00101000': Element | undefined;
  // Other Patient Names
  '00101001': Element | undefined;
  // Other Patient IDs Sequence
  '00101002': Element | undefined;
  // Patient's Birth Name
  '00101005': Element | undefined;
  // Patient's Age
  '00101010': Element | undefined;
  // Patient's Size
  '00101020': Element | undefined;
  // Patient's Size Code Sequence
  '00101021': Element | undefined;
  // Patient's Weight
  '00101030': Element | undefined;
  // Patient's Address
  '00101040': Element | undefined;
  // Insurance Plan Identification
  '00101050': Element | undefined;
  // Patient's Mother's Birth Name
  '00101060': Element | undefined;
  // Military Rank
  '00101080': Element | undefined;
  // Branch of Service
  '00101081': Element | undefined;
  // Medical Record Locator
  '00101090': Element | undefined;
  // Referenced Patient Photo Sequence
  '00101100': Element | undefined;
  // Medical Alerts
  '00102000': Element | undefined;
  // Allergies
  '00102110': Element | undefined;
  // Country of Residence
  '00102150': Element | undefined;
  // Region of Residence
  '00102152': Element | undefined;
  // Patient's Telephone Numbers
  '00102154': Element | undefined;
  // Ethnic Group
  '00102160': Element | undefined;
  // Occupation
  '00102180': Element | undefined;
  // Smoking Status
  '001021A0': Element | undefined;
  // Additional Patient History
  '001021B0': Element | undefined;
  // Pregnancy Status
  '001021C0': Element | undefined;
  // Last Menstrual Date
  '001021D0': Element | undefined;
  // Patient's Religious Preference
  '001021F0': Element | undefined;
  // Patient Species Description
  '00102201': Element | undefined;
  // Patient Species Code Sequence
  '00102202': Element | undefined;
  // Patient's Sex Neutered
  '00102203': Element | undefined;
  // Anatomical Orientation Type
  '00102210': Element | undefined;
  // Patient Breed Description
  '00102292': Element | undefined;
  // Patient Breed Code Sequence
  '00102293': Element | undefined;
  // Breed Registration Sequence
  '00102294': Element | undefined;
  // Breed Registration Number
  '00102295': Element | undefined;
  // Breed Registry Code Sequence
  '00102296': Element | undefined;
  // Responsible Person
  '00102297': Element | undefined;
  // Responsible Person Role
  '00102298': Element | undefined;
  // Responsible Organization
  '00102299': Element | undefined;
  // Patient Comments
  '00104000': Element | undefined;
  // Examined Body Thickness
  '00109431': Element | undefined;
  // Clinical Trial Sponsor Name
  '00120010': Element | undefined;
  // Clinical Trial Protocol ID
  '00120020': Element | undefined;
  // Clinical Trial Protocol Name
  '00120021': Element | undefined;
  // Clinical Trial Site ID
  '00120030': Element | undefined;
  // Clinical Trial Site Name
  '00120031': Element | undefined;
  // Clinical Trial Subject ID
  '00120040': Element | undefined;
  // Clinical Trial Subject Reading ID
  '00120042': Element | undefined;
  // Clinical Trial Time Point ID
  '00120050': Element | undefined;
  // Clinical Trial Time Point Description
  '00120051': Element | undefined;
  // Clinical Trial Coordinating Center Name
  '00120060': Element | undefined;
  // Patient Identity Removed
  '00120062': Element | undefined;
  // De-identification Method
  '00120063': Element | undefined;
  // De-identification Method Code Sequence
  '00120064': Element | undefined;
  // Clinical Trial Series ID
  '00120071': Element | undefined;
  // Clinical Trial Series Description
  '00120072': Element | undefined;
  // Clinical Trial Protocol Ethics Committee Name
  '00120081': Element | undefined;
  // Clinical Trial Protocol Ethics Committee Approval Number
  '00120082': Element | undefined;
  // Consent for Clinical Trial Use Sequence
  '00120083': Element | undefined;
  // Distribution Type
  '00120084': Element | undefined;
  // Consent for Distribution Flag
  '00120085': Element | undefined;
  // CAD File Format
  '00140023': Element | undefined;
  // Component Reference System
  '00140024': Element | undefined;
  // Component Manufacturing Procedure
  '00140025': Element | undefined;
  // Component Manufacturer
  '00140028': Element | undefined;
  // Material Thickness
  '00140030': Element | undefined;
  // Material Pipe Diameter
  '00140032': Element | undefined;
  // Material Isolation Diameter
  '00140034': Element | undefined;
  // Material Grade
  '00140042': Element | undefined;
  // Material Properties Description
  '00140044': Element | undefined;
  // Material Properties File Format (Retired)
  '00140045': Element | undefined;
  // Material Notes
  '00140046': Element | undefined;
  // Component Shape
  '00140050': Element | undefined;
  // Curvature Type
  '00140052': Element | undefined;
  // Outer Diameter
  '00140054': Element | undefined;
  // Inner Diameter
  '00140056': Element | undefined;
  // Actual Environmental Conditions
  '00141010': Element | undefined;
  // Expiry Date
  '00141020': Element | undefined;
  // Environmental Conditions
  '00141040': Element | undefined;
  // Evaluator Sequence
  '00142002': Element | undefined;
  // Evaluator Number
  '00142004': Element | undefined;
  // Evaluator Name
  '00142006': Element | undefined;
  // Evaluation Attempt
  '00142008': Element | undefined;
  // Indication Sequence
  '00142012': Element | undefined;
  // Indication Number
  '00142014': Element | undefined;
  // Indication Label
  '00142016': Element | undefined;
  // Indication Description
  '00142018': Element | undefined;
  // Indication Type
  '0014201A': Element | undefined;
  // Indication Disposition
  '0014201C': Element | undefined;
  // Indication ROI Sequence
  '0014201E': Element | undefined;
  // Indication Physical Property Sequence
  '00142030': Element | undefined;
  // Property Label
  '00142032': Element | undefined;
  // Coordinate System Number of Axes
  '00142202': Element | undefined;
  // Coordinate System Axes Sequence
  '00142204': Element | undefined;
  // Coordinate System Axis Description
  '00142206': Element | undefined;
  // Coordinate System Data Set Mapping
  '00142208': Element | undefined;
  // Coordinate System Axis Number
  '0014220A': Element | undefined;
  // Coordinate System Axis Type
  '0014220C': Element | undefined;
  // Coordinate System Axis Units
  '0014220E': Element | undefined;
  // Coordinate System Axis Values
  '00142210': Element | undefined;
  // Coordinate System Transform Sequence
  '00142220': Element | undefined;
  // Transform Description
  '00142222': Element | undefined;
  // Transform Number of Axes
  '00142224': Element | undefined;
  // Transform Order of Axes
  '00142226': Element | undefined;
  // Transformed Axis Units
  '00142228': Element | undefined;
  // Coordinate System Transform Rotation and Scale Matrix
  '0014222A': Element | undefined;
  // Coordinate System Transform Translation Matrix
  '0014222C': Element | undefined;
  // Internal Detector Frame Time
  '00143011': Element | undefined;
  // Number of Frames Integrated
  '00143012': Element | undefined;
  // Detector Temperature Sequence
  '00143020': Element | undefined;
  // Sensor Name
  '00143022': Element | undefined;
  // Horizontal Offset of Sensor
  '00143024': Element | undefined;
  // Vertical Offset of Sensor
  '00143026': Element | undefined;
  // Sensor Temperature
  '00143028': Element | undefined;
  // Dark Current Sequence
  '00143040': Element | undefined;
  // Dark Current Counts
  '00143050': Element | undefined;
  // Gain Correction Reference Sequence
  '00143060': Element | undefined;
  // Air Counts
  '00143070': Element | undefined;
  // KV Used in Gain Calibration
  '00143071': Element | undefined;
  // MA Used in Gain Calibration
  '00143072': Element | undefined;
  // Number of Frames Used for Integration
  '00143073': Element | undefined;
  // Filter Material Used in Gain Calibration
  '00143074': Element | undefined;
  // Filter Thickness Used in Gain Calibration
  '00143075': Element | undefined;
  // Date of Gain Calibration
  '00143076': Element | undefined;
  // Time of Gain Calibration
  '00143077': Element | undefined;
  // Bad Pixel Image
  '00143080': Element | undefined;
  // Calibration Notes
  '00143099': Element | undefined;
  // Pulser Equipment Sequence
  '00144002': Element | undefined;
  // Pulser Type
  '00144004': Element | undefined;
  // Pulser Notes
  '00144006': Element | undefined;
  // Receiver Equipment Sequence
  '00144008': Element | undefined;
  // Amplifier Type
  '0014400A': Element | undefined;
  // Receiver Notes
  '0014400C': Element | undefined;
  // Pre-Amplifier Equipment Sequence
  '0014400E': Element | undefined;
  // Pre-Amplifier Notes
  '0014400F': Element | undefined;
  // Transmit Transducer Sequence
  '00144010': Element | undefined;
  // Receive Transducer Sequence
  '00144011': Element | undefined;
  // Number of Elements
  '00144012': Element | undefined;
  // Element Shape
  '00144013': Element | undefined;
  // Element Dimension A
  '00144014': Element | undefined;
  // Element Dimension B
  '00144015': Element | undefined;
  // Element Pitch A
  '00144016': Element | undefined;
  // Measured Beam Dimension A
  '00144017': Element | undefined;
  // Measured Beam Dimension B
  '00144018': Element | undefined;
  // Location of Measured Beam Diameter
  '00144019': Element | undefined;
  // Nominal Frequency
  '0014401A': Element | undefined;
  // Measured Center Frequency
  '0014401B': Element | undefined;
  // Measured Bandwidth
  '0014401C': Element | undefined;
  // Element Pitch B
  '0014401D': Element | undefined;
  // Pulser Settings Sequence
  '00144020': Element | undefined;
  // Pulse Width
  '00144022': Element | undefined;
  // Excitation Frequency
  '00144024': Element | undefined;
  // Modulation Type
  '00144026': Element | undefined;
  // Damping
  '00144028': Element | undefined;
  // Receiver Settings Sequence
  '00144030': Element | undefined;
  // Acquired Soundpath Length
  '00144031': Element | undefined;
  // Acquisition Compression Type
  '00144032': Element | undefined;
  // Acquisition Sample Size
  '00144033': Element | undefined;
  // Rectifier Smoothing
  '00144034': Element | undefined;
  // DAC Sequence
  '00144035': Element | undefined;
  // DAC Type
  '00144036': Element | undefined;
  // DAC Gain Points
  '00144038': Element | undefined;
  // DAC Time Points
  '0014403A': Element | undefined;
  // DAC Amplitude
  '0014403C': Element | undefined;
  // Pre-Amplifier Settings Sequence
  '00144040': Element | undefined;
  // Transmit Transducer Settings Sequence
  '00144050': Element | undefined;
  // Receive Transducer Settings Sequence
  '00144051': Element | undefined;
  // Incident Angle
  '00144052': Element | undefined;
  // Coupling Technique
  '00144054': Element | undefined;
  // Coupling Medium
  '00144056': Element | undefined;
  // Coupling Velocity
  '00144057': Element | undefined;
  // Probe Center Location X
  '00144058': Element | undefined;
  // Probe Center Location Z
  '00144059': Element | undefined;
  // Sound Path Length
  '0014405A': Element | undefined;
  // Delay Law Identifier
  '0014405C': Element | undefined;
  // Gate Settings Sequence
  '00144060': Element | undefined;
  // Gate Threshold
  '00144062': Element | undefined;
  // Velocity of Sound
  '00144064': Element | undefined;
  // Calibration Settings Sequence
  '00144070': Element | undefined;
  // Calibration Procedure
  '00144072': Element | undefined;
  // Procedure Version
  '00144074': Element | undefined;
  // Procedure Creation Date
  '00144076': Element | undefined;
  // Procedure Expiration Date
  '00144078': Element | undefined;
  // Procedure Last Modified Date
  '0014407A': Element | undefined;
  // Calibration Time
  '0014407C': Element | undefined;
  // Calibration Date
  '0014407E': Element | undefined;
  // Probe Drive Equipment Sequence
  '00144080': Element | undefined;
  // Drive Type
  '00144081': Element | undefined;
  // Probe Drive Notes
  '00144082': Element | undefined;
  // Drive Probe Sequence
  '00144083': Element | undefined;
  // Probe Inductance
  '00144084': Element | undefined;
  // Probe Resistance
  '00144085': Element | undefined;
  // Receive Probe Sequence
  '00144086': Element | undefined;
  // Probe Drive Settings Sequence
  '00144087': Element | undefined;
  // Bridge Resistors
  '00144088': Element | undefined;
  // Probe Orientation Angle
  '00144089': Element | undefined;
  // User Selected Gain Y
  '0014408B': Element | undefined;
  // User Selected Phase
  '0014408C': Element | undefined;
  // User Selected Offset X
  '0014408D': Element | undefined;
  // User Selected Offset Y
  '0014408E': Element | undefined;
  // Channel Settings Sequence
  '00144091': Element | undefined;
  // Channel Threshold
  '00144092': Element | undefined;
  // Scanner Settings Sequence
  '0014409A': Element | undefined;
  // Scan Procedure
  '0014409B': Element | undefined;
  // Translation Rate X
  '0014409C': Element | undefined;
  // Translation Rate Y
  '0014409D': Element | undefined;
  // Channel Overlap
  '0014409F': Element | undefined;
  // Image Quality Indicator Type
  '001440A0': Element | undefined;
  // Image Quality Indicator Material
  '001440A1': Element | undefined;
  // Image Quality Indicator Size
  '001440A2': Element | undefined;
  // LINAC Energy
  '00145002': Element | undefined;
  // LINAC Output
  '00145004': Element | undefined;
  // Contrast/Bolus Agent
  '00180010': Element | undefined;
  // Contrast/Bolus Agent Sequence
  '00180012': Element | undefined;
  // Contrast/Bolus T1 Relaxivity
  '00180013': Element | undefined;
  // Contrast/Bolus Administration Route Sequence
  '00180014': Element | undefined;
  // Body Part Examined
  '00180015': Element | undefined;
  // Scanning Sequence
  '00180020': Element | undefined;
  // Sequence Variant
  '00180021': Element | undefined;
  // Scan Options
  '00180022': Element | undefined;
  // MR Acquisition Type
  '00180023': Element | undefined;
  // Sequence Name
  '00180024': Element | undefined;
  // Angio Flag
  '00180025': Element | undefined;
  // Intervention Drug Information Sequence
  '00180026': Element | undefined;
  // Intervention Drug Stop Time
  '00180027': Element | undefined;
  // Intervention Drug Dose
  '00180028': Element | undefined;
  // Intervention Drug Code Sequence
  '00180029': Element | undefined;
  // Additional Drug Sequence
  '0018002A': Element | undefined;
  // Radionuclide
  '00180030': Element | undefined;
  // Radiopharmaceutical
  '00180031': Element | undefined;
  // Energy Window Centerline
  '00180032': Element | undefined;
  // Energy Window Total Width
  '00180033': Element | undefined;
  // Intervention Drug Name
  '00180034': Element | undefined;
  // Intervention Drug Start Time
  '00180035': Element | undefined;
  // Intervention Sequence
  '00180036': Element | undefined;
  // Therapy Type
  '00180037': Element | undefined;
  // Intervention Status
  '00180038': Element | undefined;
  // Therapy Description
  '00180039': Element | undefined;
  // Intervention Description
  '0018003A': Element | undefined;
  // Cine Rate
  '00180040': Element | undefined;
  // Initial Cine Run State
  '00180042': Element | undefined;
  // Slice Thickness
  '00180050': Element | undefined;
  // KVP
  '00180060': Element | undefined;
  // Counts Accumulated
  '00180070': Element | undefined;
  // Acquisition Termination Condition
  '00180071': Element | undefined;
  // Effective Duration
  '00180072': Element | undefined;
  // Acquisition Start Condition
  '00180073': Element | undefined;
  // Acquisition Start Condition Data
  '00180074': Element | undefined;
  // Acquisition Termination Condition Data
  '00180075': Element | undefined;
  // Repetition Time
  '00180080': Element | undefined;
  // Echo Time
  '00180081': Element | undefined;
  // Inversion Time
  '00180082': Element | undefined;
  // Number of Averages
  '00180083': Element | undefined;
  // Imaging Frequency
  '00180084': Element | undefined;
  // Imaged Nucleus
  '00180085': Element | undefined;
  // Echo Number(s)
  '00180086': Element | undefined;
  // Magnetic Field Strength
  '00180087': Element | undefined;
  // Spacing Between Slices
  '00180088': Element | undefined;
  // Number of Phase Encoding Steps
  '00180089': Element | undefined;
  // Data Collection Diameter
  '00180090': Element | undefined;
  // Echo Train Length
  '00180091': Element | undefined;
  // Percent Sampling
  '00180093': Element | undefined;
  // Percent Phase Field of View
  '00180094': Element | undefined;
  // Pixel Bandwidth
  '00180095': Element | undefined;
  // Device Serial Number
  '00181000': Element | undefined;
  // Device UID
  '00181002': Element | undefined;
  // Device ID
  '00181003': Element | undefined;
  // Plate ID
  '00181004': Element | undefined;
  // Generator ID
  '00181005': Element | undefined;
  // Grid ID
  '00181006': Element | undefined;
  // Cassette ID
  '00181007': Element | undefined;
  // Gantry ID
  '00181008': Element | undefined;
  // Secondary Capture Device ID
  '00181010': Element | undefined;
  // Hardcopy Creation Device ID
  '00181011': Element | undefined;
  // Date of Secondary Capture
  '00181012': Element | undefined;
  // Time of Secondary Capture
  '00181014': Element | undefined;
  // Secondary Capture Device Manufacturer
  '00181016': Element | undefined;
  // Hardcopy Device Manufacturer
  '00181017': Element | undefined;
  // Secondary Capture Device Manufacturer's Model Name
  '00181018': Element | undefined;
  // Secondary Capture Device Software Versions
  '00181019': Element | undefined;
  // Hardcopy Device Software Version
  '0018101A': Element | undefined;
  // Hardcopy Device Manufacturer's Model Name
  '0018101B': Element | undefined;
  // Software Version(s)
  '00181020': Element | undefined;
  // Video Image Format Acquired
  '00181022': Element | undefined;
  // Digital Image Format Acquired
  '00181023': Element | undefined;
  // Protocol Name
  '00181030': Element | undefined;
  // Contrast/Bolus Route
  '00181040': Element | undefined;
  // Contrast/Bolus Volume
  '00181041': Element | undefined;
  // Contrast/Bolus Start Time
  '00181042': Element | undefined;
  // Contrast/Bolus Stop Time
  '00181043': Element | undefined;
  // Contrast/Bolus Total Dose
  '00181044': Element | undefined;
  // Syringe Counts
  '00181045': Element | undefined;
  // Contrast Flow Rate
  '00181046': Element | undefined;
  // Contrast Flow Duration
  '00181047': Element | undefined;
  // Contrast/Bolus Ingredient
  '00181048': Element | undefined;
  // Contrast/Bolus Ingredient Concentration
  '00181049': Element | undefined;
  // Spatial Resolution
  '00181050': Element | undefined;
  // Trigger Time
  '00181060': Element | undefined;
  // Trigger Source or Type
  '00181061': Element | undefined;
  // Nominal Interval
  '00181062': Element | undefined;
  // Frame Time
  '00181063': Element | undefined;
  // Cardiac Framing Type
  '00181064': Element | undefined;
  // Frame Time Vector
  '00181065': Element | undefined;
  // Frame Delay
  '00181066': Element | undefined;
  // Image Trigger Delay
  '00181067': Element | undefined;
  // Multiplex Group Time Offset
  '00181068': Element | undefined;
  // Trigger Time Offset
  '00181069': Element | undefined;
  // Synchronization Trigger
  '0018106A': Element | undefined;
  // Synchronization Channel
  '0018106C': Element | undefined;
  // Trigger Sample Position
  '0018106E': Element | undefined;
  // Radiopharmaceutical Route
  '00181070': Element | undefined;
  // Radiopharmaceutical Volume
  '00181071': Element | undefined;
  // Radiopharmaceutical Start Time
  '00181072': Element | undefined;
  // Radiopharmaceutical Stop Time
  '00181073': Element | undefined;
  // Radionuclide Total Dose
  '00181074': Element | undefined;
  // Radionuclide Half Life
  '00181075': Element | undefined;
  // Radionuclide Positron Fraction
  '00181076': Element | undefined;
  // Radiopharmaceutical Specific Activity
  '00181077': Element | undefined;
  // Radiopharmaceutical Start DateTime
  '00181078': Element | undefined;
  // Radiopharmaceutical Stop DateTime
  '00181079': Element | undefined;
  // Beat Rejection Flag
  '00181080': Element | undefined;
  // Low R-R Value
  '00181081': Element | undefined;
  // High R-R Value
  '00181082': Element | undefined;
  // Intervals Acquired
  '00181083': Element | undefined;
  // Intervals Rejected
  '00181084': Element | undefined;
  // PVC Rejection
  '00181085': Element | undefined;
  // Skip Beats
  '00181086': Element | undefined;
  // Heart Rate
  '00181088': Element | undefined;
  // Cardiac Number of Images
  '00181090': Element | undefined;
  // Trigger Window
  '00181094': Element | undefined;
  // Reconstruction Diameter
  '00181100': Element | undefined;
  // Distance Source to Detector
  '00181110': Element | undefined;
  // Distance Source to Patient
  '00181111': Element | undefined;
  // Estimated Radiographic Magnification Factor
  '00181114': Element | undefined;
  // Gantry/Detector Tilt
  '00181120': Element | undefined;
  // Gantry/Detector Slew
  '00181121': Element | undefined;
  // Table Height
  '00181130': Element | undefined;
  // Table Traverse
  '00181131': Element | undefined;
  // Table Motion
  '00181134': Element | undefined;
  // Table Vertical Increment
  '00181135': Element | undefined;
  // Table Lateral Increment
  '00181136': Element | undefined;
  // Table Longitudinal Increment
  '00181137': Element | undefined;
  // Table Angle
  '00181138': Element | undefined;
  // Table Type
  '0018113A': Element | undefined;
  // Rotation Direction
  '00181140': Element | undefined;
  // Angular Position
  '00181141': Element | undefined;
  // Radial Position
  '00181142': Element | undefined;
  // Scan Arc
  '00181143': Element | undefined;
  // Angular Step
  '00181144': Element | undefined;
  // Center of Rotation Offset
  '00181145': Element | undefined;
  // Rotation Offset
  '00181146': Element | undefined;
  // Field of View Shape
  '00181147': Element | undefined;
  // Field of View Dimension(s)
  '00181149': Element | undefined;
  // Exposure Time
  '00181150': Element | undefined;
  // X-Ray Tube Current
  '00181151': Element | undefined;
  // Exposure
  '00181152': Element | undefined;
  // Exposure in µAs
  '00181153': Element | undefined;
  // Average Pulse Width
  '00181154': Element | undefined;
  // Radiation Setting
  '00181155': Element | undefined;
  // Rectification Type
  '00181156': Element | undefined;
  // Radiation Mode
  '0018115A': Element | undefined;
  // Image and Fluoroscopy Area Dose Product
  '0018115E': Element | undefined;
  // Filter Type
  '00181160': Element | undefined;
  // Type of Filters
  '00181161': Element | undefined;
  // Intensifier Size
  '00181162': Element | undefined;
  // Imager Pixel Spacing
  '00181164': Element | undefined;
  // Grid
  '00181166': Element | undefined;
  // Generator Power
  '00181170': Element | undefined;
  // Collimator/grid Name
  '00181180': Element | undefined;
  // Collimator Type
  '00181181': Element | undefined;
  // Focal Distance
  '00181182': Element | undefined;
  // X Focus Center
  '00181183': Element | undefined;
  // Y Focus Center
  '00181184': Element | undefined;
  // Focal Spot(s)
  '00181190': Element | undefined;
  // Anode Target Material
  '00181191': Element | undefined;
  // Body Part Thickness
  '001811A0': Element | undefined;
  // Compression Force
  '001811A2': Element | undefined;
  // Paddle Description
  '001811A4': Element | undefined;
  // Date of Last Calibration
  '00181200': Element | undefined;
  // Time of Last Calibration
  '00181201': Element | undefined;
  // DateTime of Last Calibration
  '00181202': Element | undefined;
  // Convolution Kernel
  '00181210': Element | undefined;
  // Upper/Lower Pixel Values
  '00181240': Element | undefined;
  // Actual Frame Duration
  '00181242': Element | undefined;
  // Count Rate
  '00181243': Element | undefined;
  // Preferred Playback Sequencing
  '00181244': Element | undefined;
  // Receive Coil Name
  '00181250': Element | undefined;
  // Transmit Coil Name
  '00181251': Element | undefined;
  // Plate Type
  '00181260': Element | undefined;
  // Phosphor Type
  '00181261': Element | undefined;
  // Scan Velocity
  '00181300': Element | undefined;
  // Whole Body Technique
  '00181301': Element | undefined;
  // Scan Length
  '00181302': Element | undefined;
  // Acquisition Matrix
  '00181310': Element | undefined;
  // In-plane Phase Encoding Direction
  '00181312': Element | undefined;
  // Flip Angle
  '00181314': Element | undefined;
  // Variable Flip Angle Flag
  '00181315': Element | undefined;
  // SAR
  '00181316': Element | undefined;
  // dB/dt
  '00181318': Element | undefined;
  // Acquisition Device Processing Description
  '00181400': Element | undefined;
  // Acquisition Device Processing Code
  '00181401': Element | undefined;
  // Cassette Orientation
  '00181402': Element | undefined;
  // Cassette Size
  '00181403': Element | undefined;
  // Exposures on Plate
  '00181404': Element | undefined;
  // Relative X-Ray Exposure
  '00181405': Element | undefined;
  // Exposure Index
  '00181411': Element | undefined;
  // Target Exposure Index
  '00181412': Element | undefined;
  // Deviation Index
  '00181413': Element | undefined;
  // Column Angulation
  '00181450': Element | undefined;
  // Tomo Layer Height
  '00181460': Element | undefined;
  // Tomo Angle
  '00181470': Element | undefined;
  // Tomo Time
  '00181480': Element | undefined;
  // Tomo Type
  '00181490': Element | undefined;
  // Tomo Class
  '00181491': Element | undefined;
  // Number of Tomosynthesis Source Images
  '00181495': Element | undefined;
  // Positioner Motion
  '00181500': Element | undefined;
  // Positioner Type
  '00181508': Element | undefined;
  // Positioner Primary Angle
  '00181510': Element | undefined;
  // Positioner Secondary Angle
  '00181511': Element | undefined;
  // Positioner Primary Angle Increment
  '00181520': Element | undefined;
  // Positioner Secondary Angle Increment
  '00181521': Element | undefined;
  // Detector Primary Angle
  '00181530': Element | undefined;
  // Detector Secondary Angle
  '00181531': Element | undefined;
  // Shutter Shape
  '00181600': Element | undefined;
  // Shutter Left Vertical Edge
  '00181602': Element | undefined;
  // Shutter Right Vertical Edge
  '00181604': Element | undefined;
  // Shutter Upper Horizontal Edge
  '00181606': Element | undefined;
  // Shutter Lower Horizontal Edge
  '00181608': Element | undefined;
  // Center of Circular Shutter
  '00181610': Element | undefined;
  // Radius of Circular Shutter
  '00181612': Element | undefined;
  // Vertices of the Polygonal Shutter
  '00181620': Element | undefined;
  // Shutter Presentation Value
  '00181622': Element | undefined;
  // Shutter Overlay Group
  '00181623': Element | undefined;
  // Shutter Presentation Color CIELab Value
  '00181624': Element | undefined;
  // Collimator Shape
  '00181700': Element | undefined;
  // Collimator Left Vertical Edge
  '00181702': Element | undefined;
  // Collimator Right Vertical Edge
  '00181704': Element | undefined;
  // Collimator Upper Horizontal Edge
  '00181706': Element | undefined;
  // Collimator Lower Horizontal Edge
  '00181708': Element | undefined;
  // Center of Circular Collimator
  '00181710': Element | undefined;
  // Radius of Circular Collimator
  '00181712': Element | undefined;
  // Vertices of the Polygonal Collimator
  '00181720': Element | undefined;
  // Acquisition Time Synchronized
  '00181800': Element | undefined;
  // Time Source
  '00181801': Element | undefined;
  // Time Distribution Protocol
  '00181802': Element | undefined;
  // NTP Source Address
  '00181803': Element | undefined;
  // Page Number Vector
  '00182001': Element | undefined;
  // Frame Label Vector
  '00182002': Element | undefined;
  // Frame Primary Angle Vector
  '00182003': Element | undefined;
  // Frame Secondary Angle Vector
  '00182004': Element | undefined;
  // Slice Location Vector
  '00182005': Element | undefined;
  // Display Window Label Vector
  '00182006': Element | undefined;
  // Nominal Scanned Pixel Spacing
  '00182010': Element | undefined;
  // Digitizing Device Transport Direction
  '00182020': Element | undefined;
  // Rotation of Scanned Film
  '00182030': Element | undefined;
  // Biopsy Target Sequence
  '00182041': Element | undefined;
  // Target UID
  '00182042': Element | undefined;
  // Localizing Cursor Position
  '00182043': Element | undefined;
  // Calculated Target Position
  '00182044': Element | undefined;
  // Target Label
  '00182045': Element | undefined;
  // Displayed Z Value
  '00182046': Element | undefined;
  // IVUS Acquisition
  '00183100': Element | undefined;
  // IVUS Pullback Rate
  '00183101': Element | undefined;
  // IVUS Gated Rate
  '00183102': Element | undefined;
  // IVUS Pullback Start Frame Number
  '00183103': Element | undefined;
  // IVUS Pullback Stop Frame Number
  '00183104': Element | undefined;
  // Lesion Number
  '00183105': Element | undefined;
  // Acquisition Comments
  '00184000': Element | undefined;
  // Output Power
  '00185000': Element | undefined;
  // Transducer Data
  '00185010': Element | undefined;
  // Focus Depth
  '00185012': Element | undefined;
  // Processing Function
  '00185020': Element | undefined;
  // Postprocessing Function
  '00185021': Element | undefined;
  // Mechanical Index
  '00185022': Element | undefined;
  // Bone Thermal Index
  '00185024': Element | undefined;
  // Cranial Thermal Index
  '00185026': Element | undefined;
  // Soft Tissue Thermal Index
  '00185027': Element | undefined;
  // Soft Tissue-focus Thermal Index
  '00185028': Element | undefined;
  // Soft Tissue-surface Thermal Index
  '00185029': Element | undefined;
  // Dynamic Range
  '00185030': Element | undefined;
  // Total Gain
  '00185040': Element | undefined;
  // Depth of Scan Field
  '00185050': Element | undefined;
  // Patient Position
  '00185100': Element | undefined;
  // View Position
  '00185101': Element | undefined;
  // Projection Eponymous Name Code Sequence
  '00185104': Element | undefined;
  // Image Transformation Matrix
  '00185210': Element | undefined;
  // Image Translation Vector
  '00185212': Element | undefined;
  // Sensitivity
  '00186000': Element | undefined;
  // Sequence of Ultrasound Regions
  '00186011': Element | undefined;
  // Region Spatial Format
  '00186012': Element | undefined;
  // Region Data Type
  '00186014': Element | undefined;
  // Region Flags
  '00186016': Element | undefined;
  // Region Location Min X0
  '00186018': Element | undefined;
  // Region Location Min Y0
  '0018601A': Element | undefined;
  // Region Location Max X1
  '0018601C': Element | undefined;
  // Region Location Max Y1
  '0018601E': Element | undefined;
  // Reference Pixel X0
  '00186020': Element | undefined;
  // Reference Pixel Y0
  '00186022': Element | undefined;
  // Physical Units X Direction
  '00186024': Element | undefined;
  // Physical Units Y Direction
  '00186026': Element | undefined;
  // Reference Pixel Physical Value X
  '00186028': Element | undefined;
  // Reference Pixel Physical Value Y
  '0018602A': Element | undefined;
  // Physical Delta X
  '0018602C': Element | undefined;
  // Physical Delta Y
  '0018602E': Element | undefined;
  // Transducer Frequency
  '00186030': Element | undefined;
  // Transducer Type
  '00186031': Element | undefined;
  // Pulse Repetition Frequency
  '00186032': Element | undefined;
  // Doppler Correction Angle
  '00186034': Element | undefined;
  // Steering Angle
  '00186036': Element | undefined;
  // Doppler Sample Volume X Position (Retired)
  '00186038': Element | undefined;
  // Doppler Sample Volume X Position
  '00186039': Element | undefined;
  // Doppler Sample Volume Y Position (Retired)
  '0018603A': Element | undefined;
  // Doppler Sample Volume Y Position
  '0018603B': Element | undefined;
  // TM-Line Position X0 (Retired)
  '0018603C': Element | undefined;
  // TM-Line Position X0
  '0018603D': Element | undefined;
  // TM-Line Position Y0 (Retired)
  '0018603E': Element | undefined;
  // TM-Line Position Y0
  '0018603F': Element | undefined;
  // TM-Line Position X1 (Retired)
  '00186040': Element | undefined;
  // TM-Line Position X1
  '00186041': Element | undefined;
  // TM-Line Position Y1 (Retired)
  '00186042': Element | undefined;
  // TM-Line Position Y1
  '00186043': Element | undefined;
  // Pixel Component Organization
  '00186044': Element | undefined;
  // Pixel Component Mask
  '00186046': Element | undefined;
  // Pixel Component Range Start
  '00186048': Element | undefined;
  // Pixel Component Range Stop
  '0018604A': Element | undefined;
  // Pixel Component Physical Units
  '0018604C': Element | undefined;
  // Pixel Component Data Type
  '0018604E': Element | undefined;
  // Number of Table Break Points
  '00186050': Element | undefined;
  // Table of X Break Points
  '00186052': Element | undefined;
  // Table of Y Break Points
  '00186054': Element | undefined;
  // Number of Table Entries
  '00186056': Element | undefined;
  // Table of Pixel Values
  '00186058': Element | undefined;
  // Table of Parameter Values
  '0018605A': Element | undefined;
  // R Wave Time Vector
  '00186060': Element | undefined;
  // Detector Conditions Nominal Flag
  '00187000': Element | undefined;
  // Detector Temperature
  '00187001': Element | undefined;
  // Detector Type
  '00187004': Element | undefined;
  // Detector Configuration
  '00187005': Element | undefined;
  // Detector Description
  '00187006': Element | undefined;
  // Detector Mode
  '00187008': Element | undefined;
  // Detector ID
  '0018700A': Element | undefined;
  // Date of Last Detector Calibration
  '0018700C': Element | undefined;
  // Time of Last Detector Calibration
  '0018700E': Element | undefined;
  // Exposures on Detector Since Last Calibration
  '00187010': Element | undefined;
  // Exposures on Detector Since Manufactured
  '00187011': Element | undefined;
  // Detector Time Since Last Exposure
  '00187012': Element | undefined;
  // Detector Active Time
  '00187014': Element | undefined;
  // Detector Activation Offset From Exposure
  '00187016': Element | undefined;
  // Detector Binning
  '0018701A': Element | undefined;
  // Detector Element Physical Size
  '00187020': Element | undefined;
  // Detector Element Spacing
  '00187022': Element | undefined;
  // Detector Active Shape
  '00187024': Element | undefined;
  // Detector Active Dimension(s)
  '00187026': Element | undefined;
  // Detector Active Origin
  '00187028': Element | undefined;
  // Detector Manufacturer Name
  '0018702A': Element | undefined;
  // Detector Manufacturer's Model Name
  '0018702B': Element | undefined;
  // Field of View Origin
  '00187030': Element | undefined;
  // Field of View Rotation
  '00187032': Element | undefined;
  // Field of View Horizontal Flip
  '00187034': Element | undefined;
  // Pixel Data Area Origin Relative To FOV
  '00187036': Element | undefined;
  // Pixel Data Area Rotation Angle Relative To FOV
  '00187038': Element | undefined;
  // Grid Absorbing Material
  '00187040': Element | undefined;
  // Grid Spacing Material
  '00187041': Element | undefined;
  // Grid Thickness
  '00187042': Element | undefined;
  // Grid Pitch
  '00187044': Element | undefined;
  // Grid Aspect Ratio
  '00187046': Element | undefined;
  // Grid Period
  '00187048': Element | undefined;
  // Grid Focal Distance
  '0018704C': Element | undefined;
  // Filter Material
  '00187050': Element | undefined;
  // Filter Thickness Minimum
  '00187052': Element | undefined;
  // Filter Thickness Maximum
  '00187054': Element | undefined;
  // Filter Beam Path Length Minimum
  '00187056': Element | undefined;
  // Filter Beam Path Length Maximum
  '00187058': Element | undefined;
  // Exposure Control Mode
  '00187060': Element | undefined;
  // Exposure Control Mode Description
  '00187062': Element | undefined;
  // Exposure Status
  '00187064': Element | undefined;
  // Phototimer Setting
  '00187065': Element | undefined;
  // Exposure Time in µS
  '00188150': Element | undefined;
  // X-Ray Tube Current in µA
  '00188151': Element | undefined;
  // Content Qualification
  '00189004': Element | undefined;
  // Pulse Sequence Name
  '00189005': Element | undefined;
  // MR Imaging Modifier Sequence
  '00189006': Element | undefined;
  // Echo Pulse Sequence
  '00189008': Element | undefined;
  // Inversion Recovery
  '00189009': Element | undefined;
  // Flow Compensation
  '00189010': Element | undefined;
  // Multiple Spin Echo
  '00189011': Element | undefined;
  // Multi-planar Excitation
  '00189012': Element | undefined;
  // Phase Contrast
  '00189014': Element | undefined;
  // Time of Flight Contrast
  '00189015': Element | undefined;
  // Spoiling
  '00189016': Element | undefined;
  // Steady State Pulse Sequence
  '00189017': Element | undefined;
  // Echo Planar Pulse Sequence
  '00189018': Element | undefined;
  // Tag Angle First Axis
  '00189019': Element | undefined;
  // Magnetization Transfer
  '00189020': Element | undefined;
  // T2 Preparation
  '00189021': Element | undefined;
  // Blood Signal Nulling
  '00189022': Element | undefined;
  // Saturation Recovery
  '00189024': Element | undefined;
  // Spectrally Selected Suppression
  '00189025': Element | undefined;
  // Spectrally Selected Excitation
  '00189026': Element | undefined;
  // Spatial Pre-saturation
  '00189027': Element | undefined;
  // Tagging
  '00189028': Element | undefined;
  // Oversampling Phase
  '00189029': Element | undefined;
  // Tag Spacing First Dimension
  '00189030': Element | undefined;
  // Geometry of k-Space Traversal
  '00189032': Element | undefined;
  // Segmented k-Space Traversal
  '00189033': Element | undefined;
  // Rectilinear Phase Encode Reordering
  '00189034': Element | undefined;
  // Tag Thickness
  '00189035': Element | undefined;
  // Partial Fourier Direction
  '00189036': Element | undefined;
  // Cardiac Synchronization Technique
  '00189037': Element | undefined;
  // Receive Coil Manufacturer Name
  '00189041': Element | undefined;
  // MR Receive Coil Sequence
  '00189042': Element | undefined;
  // Receive Coil Type
  '00189043': Element | undefined;
  // Quadrature Receive Coil
  '00189044': Element | undefined;
  // Multi-Coil Definition Sequence
  '00189045': Element | undefined;
  // Multi-Coil Configuration
  '00189046': Element | undefined;
  // Multi-Coil Element Name
  '00189047': Element | undefined;
  // Multi-Coil Element Used
  '00189048': Element | undefined;
  // MR Transmit Coil Sequence
  '00189049': Element | undefined;
  // Transmit Coil Manufacturer Name
  '00189050': Element | undefined;
  // Transmit Coil Type
  '00189051': Element | undefined;
  // Spectral Width
  '00189052': Element | undefined;
  // Chemical Shift Reference
  '00189053': Element | undefined;
  // Volume Localization Technique
  '00189054': Element | undefined;
  // MR Acquisition Frequency Encoding Steps
  '00189058': Element | undefined;
  // De-coupling
  '00189059': Element | undefined;
  // De-coupled Nucleus
  '00189060': Element | undefined;
  // De-coupling Frequency
  '00189061': Element | undefined;
  // De-coupling Method
  '00189062': Element | undefined;
  // De-coupling Chemical Shift Reference
  '00189063': Element | undefined;
  // k-space Filtering
  '00189064': Element | undefined;
  // Time Domain Filtering
  '00189065': Element | undefined;
  // Number of Zero Fills
  '00189066': Element | undefined;
  // Baseline Correction
  '00189067': Element | undefined;
  // Parallel Reduction Factor In-plane
  '00189069': Element | undefined;
  // Cardiac R-R Interval Specified
  '00189070': Element | undefined;
  // Acquisition Duration
  '00189073': Element | undefined;
  // Frame Acquisition DateTime
  '00189074': Element | undefined;
  // Diffusion Directionality
  '00189075': Element | undefined;
  // Diffusion Gradient Direction Sequence
  '00189076': Element | undefined;
  // Parallel Acquisition
  '00189077': Element | undefined;
  // Parallel Acquisition Technique
  '00189078': Element | undefined;
  // Inversion Times
  '00189079': Element | undefined;
  // Metabolite Map Description
  '00189080': Element | undefined;
  // Partial Fourier
  '00189081': Element | undefined;
  // Effective Echo Time
  '00189082': Element | undefined;
  // Metabolite Map Code Sequence
  '00189083': Element | undefined;
  // Chemical Shift Sequence
  '00189084': Element | undefined;
  // Cardiac Signal Source
  '00189085': Element | undefined;
  // Diffusion b-value
  '00189087': Element | undefined;
  // Diffusion Gradient Orientation
  '00189089': Element | undefined;
  // Velocity Encoding Direction
  '00189090': Element | undefined;
  // Velocity Encoding Minimum Value
  '00189091': Element | undefined;
  // Velocity Encoding Acquisition Sequence
  '00189092': Element | undefined;
  // Number of k-Space Trajectories
  '00189093': Element | undefined;
  // Coverage of k-Space
  '00189094': Element | undefined;
  // Spectroscopy Acquisition Phase Rows
  '00189095': Element | undefined;
  // Parallel Reduction Factor In-plane (Retired)
  '00189096': Element | undefined;
  // Transmitter Frequency
  '00189098': Element | undefined;
  // Resonant Nucleus
  '00189100': Element | undefined;
  // Frequency Correction
  '00189101': Element | undefined;
  // MR Spectroscopy FOV/Geometry Sequence
  '00189103': Element | undefined;
  // Slab Thickness
  '00189104': Element | undefined;
  // Slab Orientation
  '00189105': Element | undefined;
  // Mid Slab Position
  '00189106': Element | undefined;
  // MR Spatial Saturation Sequence
  '00189107': Element | undefined;
  // MR Timing and Related Parameters Sequence
  '00189112': Element | undefined;
  // MR Echo Sequence
  '00189114': Element | undefined;
  // MR Modifier Sequence
  '00189115': Element | undefined;
  // MR Diffusion Sequence
  '00189117': Element | undefined;
  // Cardiac Synchronization Sequence
  '00189118': Element | undefined;
  // MR Averages Sequence
  '00189119': Element | undefined;
  // MR FOV/Geometry Sequence
  '00189125': Element | undefined;
  // Volume Localization Sequence
  '00189126': Element | undefined;
  // Spectroscopy Acquisition Data Columns
  '00189127': Element | undefined;
  // Diffusion Anisotropy Type
  '00189147': Element | undefined;
  // Frame Reference DateTime
  '00189151': Element | undefined;
  // MR Metabolite Map Sequence
  '00189152': Element | undefined;
  // Parallel Reduction Factor out-of-plane
  '00189155': Element | undefined;
  // Spectroscopy Acquisition Out-of-plane Phase Steps
  '00189159': Element | undefined;
  // Bulk Motion Status
  '00189166': Element | undefined;
  // Parallel Reduction Factor Second In-plane
  '00189168': Element | undefined;
  // Cardiac Beat Rejection Technique
  '00189169': Element | undefined;
  // Respiratory Motion Compensation Technique
  '00189170': Element | undefined;
  // Respiratory Signal Source
  '00189171': Element | undefined;
  // Bulk Motion Compensation Technique
  '00189172': Element | undefined;
  // Bulk Motion Signal Source
  '00189173': Element | undefined;
  // Applicable Safety Standard Agency
  '00189174': Element | undefined;
  // Applicable Safety Standard Description
  '00189175': Element | undefined;
  // Operating Mode Sequence
  '00189176': Element | undefined;
  // Operating Mode Type
  '00189177': Element | undefined;
  // Operating Mode
  '00189178': Element | undefined;
  // Specific Absorption Rate Definition
  '00189179': Element | undefined;
  // Gradient Output Type
  '00189180': Element | undefined;
  // Specific Absorption Rate Value
  '00189181': Element | undefined;
  // Gradient Output
  '00189182': Element | undefined;
  // Flow Compensation Direction
  '00189183': Element | undefined;
  // Tagging Delay
  '00189184': Element | undefined;
  // Respiratory Motion Compensation Technique Description
  '00189185': Element | undefined;
  // Respiratory Signal Source ID
  '00189186': Element | undefined;
  // Chemical Shift Minimum Integration Limit in Hz
  '00189195': Element | undefined;
  // Chemical Shift Maximum Integration Limit in Hz
  '00189196': Element | undefined;
  // MR Velocity Encoding Sequence
  '00189197': Element | undefined;
  // First Order Phase Correction
  '00189198': Element | undefined;
  // Water Referenced Phase Correction
  '00189199': Element | undefined;
  // MR Spectroscopy Acquisition Type
  '00189200': Element | undefined;
  // Respiratory Cycle Position
  '00189214': Element | undefined;
  // Velocity Encoding Maximum Value
  '00189217': Element | undefined;
  // Tag Spacing Second Dimension
  '00189218': Element | undefined;
  // Tag Angle Second Axis
  '00189219': Element | undefined;
  // Frame Acquisition Duration
  '00189220': Element | undefined;
  // MR Image Frame Type Sequence
  '00189226': Element | undefined;
  // MR Spectroscopy Frame Type Sequence
  '00189227': Element | undefined;
  // MR Acquisition Phase Encoding Steps in-plane
  '00189231': Element | undefined;
  // MR Acquisition Phase Encoding Steps out-of-plane
  '00189232': Element | undefined;
  // Spectroscopy Acquisition Phase Columns
  '00189234': Element | undefined;
  // Cardiac Cycle Position
  '00189236': Element | undefined;
  // Specific Absorption Rate Sequence
  '00189239': Element | undefined;
  // RF Echo Train Length
  '00189240': Element | undefined;
  // Gradient Echo Train Length
  '00189241': Element | undefined;
  // Arterial Spin Labeling Contrast
  '00189250': Element | undefined;
  // MR Arterial Spin Labeling Sequence
  '00189251': Element | undefined;
  // ASL Technique Description
  '00189252': Element | undefined;
  // ASL Slab Number
  '00189253': Element | undefined;
  // ASL Slab Thickness
  '00189254': Element | undefined;
  // ASL Slab Orientation
  '00189255': Element | undefined;
  // ASL Mid Slab Position
  '00189256': Element | undefined;
  // ASL Context
  '00189257': Element | undefined;
  // ASL Pulse Train Duration
  '00189258': Element | undefined;
  // ASL Crusher Flag
  '00189259': Element | undefined;
  // ASL Crusher Flow Limit
  '0018925A': Element | undefined;
  // ASL Crusher Description
  '0018925B': Element | undefined;
  // ASL Bolus Cut-off Flag
  '0018925C': Element | undefined;
  // ASL Bolus Cut-off Timing Sequence
  '0018925D': Element | undefined;
  // ASL Bolus Cut-off Technique
  '0018925E': Element | undefined;
  // ASL Bolus Cut-off Delay Time
  '0018925F': Element | undefined;
  // ASL Slab Sequence
  '00189260': Element | undefined;
  // Chemical Shift Minimum Integration Limit in ppm
  '00189295': Element | undefined;
  // Chemical Shift Maximum Integration Limit in ppm
  '00189296': Element | undefined;
  // Water Reference Acquisition
  '00189297': Element | undefined;
  // Echo Peak Position
  '00189298': Element | undefined;
  // CT Acquisition Type Sequence
  '00189301': Element | undefined;
  // Acquisition Type
  '00189302': Element | undefined;
  // Tube Angle
  '00189303': Element | undefined;
  // CT Acquisition Details Sequence
  '00189304': Element | undefined;
  // Revolution Time
  '00189305': Element | undefined;
  // Single Collimation Width
  '00189306': Element | undefined;
  // Total Collimation Width
  '00189307': Element | undefined;
  // CT Table Dynamics Sequence
  '00189308': Element | undefined;
  // Table Speed
  '00189309': Element | undefined;
  // Table Feed per Rotation
  '00189310': Element | undefined;
  // Spiral Pitch Factor
  '00189311': Element | undefined;
  // CT Geometry Sequence
  '00189312': Element | undefined;
  // Data Collection Center (Patient)
  '00189313': Element | undefined;
  // CT Reconstruction Sequence
  '00189314': Element | undefined;
  // Reconstruction Algorithm
  '00189315': Element | undefined;
  // Convolution Kernel Group
  '00189316': Element | undefined;
  // Reconstruction Field of View
  '00189317': Element | undefined;
  // Reconstruction Target Center (Patient)
  '00189318': Element | undefined;
  // Reconstruction Angle
  '00189319': Element | undefined;
  // Image Filter
  '00189320': Element | undefined;
  // CT Exposure Sequence
  '00189321': Element | undefined;
  // Reconstruction Pixel Spacing
  '00189322': Element | undefined;
  // Exposure Modulation Type
  '00189323': Element | undefined;
  // Estimated Dose Saving
  '00189324': Element | undefined;
  // CT X-Ray Details Sequence
  '00189325': Element | undefined;
  // CT Position Sequence
  '00189326': Element | undefined;
  // Table Position
  '00189327': Element | undefined;
  // Exposure Time in ms
  '00189328': Element | undefined;
  // CT Image Frame Type Sequence
  '00189329': Element | undefined;
  // X-Ray Tube Current in mA
  '00189330': Element | undefined;
  // Exposure in mAs
  '00189332': Element | undefined;
  // Constant Volume Flag
  '00189333': Element | undefined;
  // Fluoroscopy Flag
  '00189334': Element | undefined;
  // Distance Source to Data Collection Center
  '00189335': Element | undefined;
  // Contrast/Bolus Agent Number
  '00189337': Element | undefined;
  // Contrast/Bolus Ingredient Code Sequence
  '00189338': Element | undefined;
  // Contrast Administration Profile Sequence
  '00189340': Element | undefined;
  // Contrast/Bolus Usage Sequence
  '00189341': Element | undefined;
  // Contrast/Bolus Agent Administered
  '00189342': Element | undefined;
  // Contrast/Bolus Agent Detected
  '00189343': Element | undefined;
  // Contrast/Bolus Agent Phase
  '00189344': Element | undefined;
  // CTDIvol
  '00189345': Element | undefined;
  // CTDI Phantom Type Code Sequence
  '00189346': Element | undefined;
  // Calcium Scoring Mass Factor Patient
  '00189351': Element | undefined;
  // Calcium Scoring Mass Factor Device
  '00189352': Element | undefined;
  // Energy Weighting Factor
  '00189353': Element | undefined;
  // CT Additional X-Ray Source Sequence
  '00189360': Element | undefined;
  // Projection Pixel Calibration Sequence
  '00189401': Element | undefined;
  // Distance Source to Isocenter
  '00189402': Element | undefined;
  // Distance Object to Table Top
  '00189403': Element | undefined;
  // Object Pixel Spacing in Center of Beam
  '00189404': Element | undefined;
  // Positioner Position Sequence
  '00189405': Element | undefined;
  // Table Position Sequence
  '00189406': Element | undefined;
  // Collimator Shape Sequence
  '00189407': Element | undefined;
  // Planes in Acquisition
  '00189410': Element | undefined;
  // XA/XRF Frame Characteristics Sequence
  '00189412': Element | undefined;
  // Frame Acquisition Sequence
  '00189417': Element | undefined;
  // X-Ray Receptor Type
  '00189420': Element | undefined;
  // Acquisition Protocol Name
  '00189423': Element | undefined;
  // Acquisition Protocol Description
  '00189424': Element | undefined;
  // Contrast/Bolus Ingredient Opaque
  '00189425': Element | undefined;
  // Distance Receptor Plane to Detector Housing
  '00189426': Element | undefined;
  // Intensifier Active Shape
  '00189427': Element | undefined;
  // Intensifier Active Dimension(s)
  '00189428': Element | undefined;
  // Physical Detector Size
  '00189429': Element | undefined;
  // Position of Isocenter Projection
  '00189430': Element | undefined;
  // Field of View Sequence
  '00189432': Element | undefined;
  // Field of View Description
  '00189433': Element | undefined;
  // Exposure Control Sensing Regions Sequence
  '00189434': Element | undefined;
  // Exposure Control Sensing Region Shape
  '00189435': Element | undefined;
  // Exposure Control Sensing Region Left Vertical Edge
  '00189436': Element | undefined;
  // Exposure Control Sensing Region Right Vertical Edge
  '00189437': Element | undefined;
  // Exposure Control Sensing Region Upper Horizontal Edge
  '00189438': Element | undefined;
  // Exposure Control Sensing Region Lower Horizontal Edge
  '00189439': Element | undefined;
  // Center of Circular Exposure Control Sensing Region
  '00189440': Element | undefined;
  // Radius of Circular Exposure Control Sensing Region
  '00189441': Element | undefined;
  // Vertices of the Polygonal Exposure Control Sensing Region
  '00189442': Element | undefined;
  // Column Angulation (Patient)
  '00189447': Element | undefined;
  // Beam Angle
  '00189449': Element | undefined;
  // Frame Detector Parameters Sequence
  '00189451': Element | undefined;
  // Calculated Anatomy Thickness
  '00189452': Element | undefined;
  // Calibration Sequence
  '00189455': Element | undefined;
  // Object Thickness Sequence
  '00189456': Element | undefined;
  // Plane Identification
  '00189457': Element | undefined;
  // Field of View Dimension(s) in Float
  '00189461': Element | undefined;
  // Isocenter Reference System Sequence
  '00189462': Element | undefined;
  // Positioner Isocenter Primary Angle
  '00189463': Element | undefined;
  // Positioner Isocenter Secondary Angle
  '00189464': Element | undefined;
  // Positioner Isocenter Detector Rotation Angle
  '00189465': Element | undefined;
  // Table X Position to Isocenter
  '00189466': Element | undefined;
  // Table Y Position to Isocenter
  '00189467': Element | undefined;
  // Table Z Position to Isocenter
  '00189468': Element | undefined;
  // Table Horizontal Rotation Angle
  '00189469': Element | undefined;
  // Table Head Tilt Angle
  '00189470': Element | undefined;
  // Table Cradle Tilt Angle
  '00189471': Element | undefined;
  // Frame Display Shutter Sequence
  '00189472': Element | undefined;
  // Acquired Image Area Dose Product
  '00189473': Element | undefined;
  // C-arm Positioner Tabletop Relationship
  '00189474': Element | undefined;
  // X-Ray Geometry Sequence
  '00189476': Element | undefined;
  // Irradiation Event Identification Sequence
  '00189477': Element | undefined;
  // X-Ray 3D Frame Type Sequence
  '00189504': Element | undefined;
  // Contributing Sources Sequence
  '00189506': Element | undefined;
  // X-Ray 3D Acquisition Sequence
  '00189507': Element | undefined;
  // Primary Positioner Scan Arc
  '00189508': Element | undefined;
  // Secondary Positioner Scan Arc
  '00189509': Element | undefined;
  // Primary Positioner Scan Start Angle
  '00189510': Element | undefined;
  // Secondary Positioner Scan Start Angle
  '00189511': Element | undefined;
  // Primary Positioner Increment
  '00189514': Element | undefined;
  // Secondary Positioner Increment
  '00189515': Element | undefined;
  // Start Acquisition DateTime
  '00189516': Element | undefined;
  // End Acquisition DateTime
  '00189517': Element | undefined;
  // Primary Positioner Increment Sign
  '00189518': Element | undefined;
  // Secondary Positioner Increment Sign
  '00189519': Element | undefined;
  // Application Name
  '00189524': Element | undefined;
  // Application Version
  '00189525': Element | undefined;
  // Application Manufacturer
  '00189526': Element | undefined;
  // Algorithm Type
  '00189527': Element | undefined;
  // Algorithm Description
  '00189528': Element | undefined;
  // X-Ray 3D Reconstruction Sequence
  '00189530': Element | undefined;
  // Reconstruction Description
  '00189531': Element | undefined;
  // Per Projection Acquisition Sequence
  '00189538': Element | undefined;
  // Detector Position Sequence
  '00189541': Element | undefined;
  // X-Ray Acquisition Dose Sequence
  '00189542': Element | undefined;
  // X-Ray Source Isocenter Primary Angle
  '00189543': Element | undefined;
  // X-Ray Source Isocenter Secondary Angle
  '00189544': Element | undefined;
  // Breast Support Isocenter Primary Angle
  '00189545': Element | undefined;
  // Breast Support Isocenter Secondary Angle
  '00189546': Element | undefined;
  // Breast Support X Position to Isocenter
  '00189547': Element | undefined;
  // Breast Support Y Position to Isocenter
  '00189548': Element | undefined;
  // Breast Support Z Position to Isocenter
  '00189549': Element | undefined;
  // Detector Isocenter Primary Angle
  '00189550': Element | undefined;
  // Detector Isocenter Secondary Angle
  '00189551': Element | undefined;
  // Detector X Position to Isocenter
  '00189552': Element | undefined;
  // Detector Y Position to Isocenter
  '00189553': Element | undefined;
  // Detector Z Position to Isocenter
  '00189554': Element | undefined;
  // X-Ray Grid Sequence
  '00189555': Element | undefined;
  // X-Ray Filter Sequence
  '00189556': Element | undefined;
  // Detector Active Area TLHC Position
  '00189557': Element | undefined;
  // Detector Active Area Orientation
  '00189558': Element | undefined;
  // Positioner Primary Angle Direction
  '00189559': Element | undefined;
  // Diffusion b-matrix Sequence
  '00189601': Element | undefined;
  // Diffusion b-value XX
  '00189602': Element | undefined;
  // Diffusion b-value XY
  '00189603': Element | undefined;
  // Diffusion b-value XZ
  '00189604': Element | undefined;
  // Diffusion b-value YY
  '00189605': Element | undefined;
  // Diffusion b-value YZ
  '00189606': Element | undefined;
  // Diffusion b-value ZZ
  '00189607': Element | undefined;
  // Decay Correction DateTime
  '00189701': Element | undefined;
  // Start Density Threshold
  '00189715': Element | undefined;
  // Start Relative Density Difference Threshold
  '00189716': Element | undefined;
  // Start Cardiac Trigger Count Threshold
  '00189717': Element | undefined;
  // Start Respiratory Trigger Count Threshold
  '00189718': Element | undefined;
  // Termination Counts Threshold
  '00189719': Element | undefined;
  // Termination Density Threshold
  '00189720': Element | undefined;
  // Termination Relative Density Threshold
  '00189721': Element | undefined;
  // Termination Time Threshold
  '00189722': Element | undefined;
  // Termination Cardiac Trigger Count Threshold
  '00189723': Element | undefined;
  // Termination Respiratory Trigger Count Threshold
  '00189724': Element | undefined;
  // Detector Geometry
  '00189725': Element | undefined;
  // Transverse Detector Separation
  '00189726': Element | undefined;
  // Axial Detector Dimension
  '00189727': Element | undefined;
  // Radiopharmaceutical Agent Number
  '00189729': Element | undefined;
  // PET Frame Acquisition Sequence
  '00189732': Element | undefined;
  // PET Detector Motion Details Sequence
  '00189733': Element | undefined;
  // PET Table Dynamics Sequence
  '00189734': Element | undefined;
  // PET Position Sequence
  '00189735': Element | undefined;
  // PET Frame Correction Factors Sequence
  '00189736': Element | undefined;
  // Radiopharmaceutical Usage Sequence
  '00189737': Element | undefined;
  // Attenuation Correction Source
  '00189738': Element | undefined;
  // Number of Iterations
  '00189739': Element | undefined;
  // Number of Subsets
  '00189740': Element | undefined;
  // PET Reconstruction Sequence
  '00189749': Element | undefined;
  // PET Frame Type Sequence
  '00189751': Element | undefined;
  // Time of Flight Information Used
  '00189755': Element | undefined;
  // Reconstruction Type
  '00189756': Element | undefined;
  // Decay Corrected
  '00189758': Element | undefined;
  // Attenuation Corrected
  '00189759': Element | undefined;
  // Scatter Corrected
  '00189760': Element | undefined;
  // Dead Time Corrected
  '00189761': Element | undefined;
  // Gantry Motion Corrected
  '00189762': Element | undefined;
  // Patient Motion Corrected
  '00189763': Element | undefined;
  // Count Loss Normalization Corrected
  '00189764': Element | undefined;
  // Randoms Corrected
  '00189765': Element | undefined;
  // Non-uniform Radial Sampling Corrected
  '00189766': Element | undefined;
  // Sensitivity Calibrated
  '00189767': Element | undefined;
  // Detector Normalization Correction
  '00189768': Element | undefined;
  // Iterative Reconstruction Method
  '00189769': Element | undefined;
  // Attenuation Correction Temporal Relationship
  '00189770': Element | undefined;
  // Patient Physiological State Sequence
  '00189771': Element | undefined;
  // Patient Physiological State Code Sequence
  '00189772': Element | undefined;
  // Depth(s) of Focus
  '00189801': Element | undefined;
  // Excluded Intervals Sequence
  '00189803': Element | undefined;
  // Exclusion Start DateTime
  '00189804': Element | undefined;
  // Exclusion Duration
  '00189805': Element | undefined;
  // US Image Description Sequence
  '00189806': Element | undefined;
  // Image Data Type Sequence
  '00189807': Element | undefined;
  // Data Type
  '00189808': Element | undefined;
  // Transducer Scan Pattern Code Sequence
  '00189809': Element | undefined;
  // Aliased Data Type
  '0018980B': Element | undefined;
  // Position Measuring Device Used
  '0018980C': Element | undefined;
  // Transducer Geometry Code Sequence
  '0018980D': Element | undefined;
  // Transducer Beam Steering Code Sequence
  '0018980E': Element | undefined;
  // Transducer Application Code Sequence
  '0018980F': Element | undefined;
  // Zero Velocity Pixel Value
  '00189810': Element | undefined;
  // Contributing Equipment Sequence
  '0018A001': Element | undefined;
  // Contribution DateTime
  '0018A002': Element | undefined;
  // Contribution Description
  '0018A003': Element | undefined;
  // Study Instance UID
  '0020000D': Element | undefined;
  // Series Instance UID
  '0020000E': Element | undefined;
  // Study ID
  '00200010': Element | undefined;
  // Series Number
  '00200011': Element | undefined;
  // Acquisition Number
  '00200012': Element | undefined;
  // Instance Number
  '00200013': Element | undefined;
  // Isotope Number
  '00200014': Element | undefined;
  // Phase Number
  '00200015': Element | undefined;
  // Interval Number
  '00200016': Element | undefined;
  // Time Slot Number
  '00200017': Element | undefined;
  // Angle Number
  '00200018': Element | undefined;
  // Item Number
  '00200019': Element | undefined;
  // Patient Orientation
  '00200020': Element | undefined;
  // Overlay Number
  '00200022': Element | undefined;
  // Curve Number
  '00200024': Element | undefined;
  // LUT Number
  '00200026': Element | undefined;
  // Image Position
  '00200030': Element | undefined;
  // Image Position (Patient)
  '00200032': Element | undefined;
  // Image Orientation
  '00200035': Element | undefined;
  // Image Orientation (Patient)
  '00200037': Element | undefined;
  // Location
  '00200050': Element | undefined;
  // Frame of Reference UID
  '00200052': Element | undefined;
  // Laterality
  '00200060': Element | undefined;
  // Image Laterality
  '00200062': Element | undefined;
  // Image Geometry Type
  '00200070': Element | undefined;
  // Masking Image
  '00200080': Element | undefined;
  // Report Number
  '002000AA': Element | undefined;
  // Temporal Position Identifier
  '00200100': Element | undefined;
  // Number of Temporal Positions
  '00200105': Element | undefined;
  // Temporal Resolution
  '00200110': Element | undefined;
  // Synchronization Frame of Reference UID
  '00200200': Element | undefined;
  // SOP Instance UID of Concatenation Source
  '00200242': Element | undefined;
  // Series in Study
  '00201000': Element | undefined;
  // Acquisitions in Series
  '00201001': Element | undefined;
  // Images in Acquisition
  '00201002': Element | undefined;
  // Images in Series
  '00201003': Element | undefined;
  // Acquisitions in Study
  '00201004': Element | undefined;
  // Images in Study
  '00201005': Element | undefined;
  // Reference
  '00201020': Element | undefined;
  // Position Reference Indicator
  '00201040': Element | undefined;
  // Slice Location
  '00201041': Element | undefined;
  // Other Study Numbers
  '00201070': Element | undefined;
  // Number of Patient Related Studies
  '00201200': Element | undefined;
  // Number of Patient Related Series
  '00201202': Element | undefined;
  // Number of Patient Related Instances
  '00201204': Element | undefined;
  // Number of Study Related Series
  '00201206': Element | undefined;
  // Number of Study Related Instances
  '00201208': Element | undefined;
  // Number of Series Related Instances
  '00201209': Element | undefined;
  // Source Image IDs
  '002031XX': Element | undefined;
  // Modifying Device ID
  '00203401': Element | undefined;
  // Modified Image ID
  '00203402': Element | undefined;
  // Modified Image Date
  '00203403': Element | undefined;
  // Modifying Device Manufacturer
  '00203404': Element | undefined;
  // Modified Image Time
  '00203405': Element | undefined;
  // Modified Image Description
  '00203406': Element | undefined;
  // Image Comments
  '00204000': Element | undefined;
  // Original Image Identification
  '00205000': Element | undefined;
  // Original Image Identification Nomenclature
  '00205002': Element | undefined;
  // Stack ID
  '00209056': Element | undefined;
  // In-Stack Position Number
  '00209057': Element | undefined;
  // Frame Anatomy Sequence
  '00209071': Element | undefined;
  // Frame Laterality
  '00209072': Element | undefined;
  // Frame Content Sequence
  '00209111': Element | undefined;
  // Plane Position Sequence
  '00209113': Element | undefined;
  // Plane Orientation Sequence
  '00209116': Element | undefined;
  // Temporal Position Index
  '00209128': Element | undefined;
  // Nominal Cardiac Trigger Delay Time
  '00209153': Element | undefined;
  // Nominal Cardiac Trigger Time Prior To R-Peak
  '00209154': Element | undefined;
  // Actual Cardiac Trigger Time Prior To R-Peak
  '00209155': Element | undefined;
  // Frame Acquisition Number
  '00209156': Element | undefined;
  // Dimension Index Values
  '00209157': Element | undefined;
  // Frame Comments
  '00209158': Element | undefined;
  // Concatenation UID
  '00209161': Element | undefined;
  // In-concatenation Number
  '00209162': Element | undefined;
  // In-concatenation Total Number
  '00209163': Element | undefined;
  // Dimension Organization UID
  '00209164': Element | undefined;
  // Dimension Index Pointer
  '00209165': Element | undefined;
  // Functional Group Pointer
  '00209167': Element | undefined;
  // Unassigned Shared Converted Attributes Sequence
  '00209170': Element | undefined;
  // Unassigned Per-Frame Converted Attributes Sequence
  '00209171': Element | undefined;
  // Conversion Source Attributes Sequence
  '00209172': Element | undefined;
  // Dimension Index Private Creator
  '00209213': Element | undefined;
  // Dimension Organization Sequence
  '00209221': Element | undefined;
  // Dimension Index Sequence
  '00209222': Element | undefined;
  // Concatenation Frame Offset Number
  '00209228': Element | undefined;
  // Functional Group Private Creator
  '00209238': Element | undefined;
  // Nominal Percentage of Cardiac Phase
  '00209241': Element | undefined;
  // Nominal Percentage of Respiratory Phase
  '00209245': Element | undefined;
  // Starting Respiratory Amplitude
  '00209246': Element | undefined;
  // Starting Respiratory Phase
  '00209247': Element | undefined;
  // Ending Respiratory Amplitude
  '00209248': Element | undefined;
  // Ending Respiratory Phase
  '00209249': Element | undefined;
  // Respiratory Trigger Type
  '00209250': Element | undefined;
  // R-R Interval Time Nominal
  '00209251': Element | undefined;
  // Actual Cardiac Trigger Delay Time
  '00209252': Element | undefined;
  // Respiratory Synchronization Sequence
  '00209253': Element | undefined;
  // Respiratory Interval Time
  '00209254': Element | undefined;
  // Nominal Respiratory Trigger Delay Time
  '00209255': Element | undefined;
  // Respiratory Trigger Delay Threshold
  '00209256': Element | undefined;
  // Actual Respiratory Trigger Delay Time
  '00209257': Element | undefined;
  // Image Position (Volume)
  '00209301': Element | undefined;
  // Image Orientation (Volume)
  '00209302': Element | undefined;
  // Ultrasound Acquisition Geometry
  '00209307': Element | undefined;
  // Apex Position
  '00209308': Element | undefined;
  // Volume to Transducer Mapping Matrix
  '00209309': Element | undefined;
  // Volume to Table Mapping Matrix
  '0020930A': Element | undefined;
  // Volume to Transducer Relationship
  '0020930B': Element | undefined;
  // Patient Frame of Reference Source
  '0020930C': Element | undefined;
  // Temporal Position Time Offset
  '0020930D': Element | undefined;
  // Plane Position (Volume) Sequence
  '0020930E': Element | undefined;
  // Plane Orientation (Volume) Sequence
  '0020930F': Element | undefined;
  // Temporal Position Sequence
  '00209310': Element | undefined;
  // Dimension Organization Type
  '00209311': Element | undefined;
  // Volume Frame of Reference UID
  '00209312': Element | undefined;
  // Table Frame of Reference UID
  '00209313': Element | undefined;
  // Dimension Description Label
  '00209421': Element | undefined;
  // Patient Orientation in Frame Sequence
  '00209450': Element | undefined;
  // Frame Label
  '00209453': Element | undefined;
  // Acquisition Index
  '00209518': Element | undefined;
  // Contributing SOP Instances Reference Sequence
  '00209529': Element | undefined;
  // Reconstruction Index
  '00209536': Element | undefined;
  // Light Path Filter Pass-Through Wavelength
  '00220001': Element | undefined;
  // Light Path Filter Pass Band
  '00220002': Element | undefined;
  // Image Path Filter Pass-Through Wavelength
  '00220003': Element | undefined;
  // Image Path Filter Pass Band
  '00220004': Element | undefined;
  // Patient Eye Movement Commanded
  '00220005': Element | undefined;
  // Patient Eye Movement Command Code Sequence
  '00220006': Element | undefined;
  // Spherical Lens Power
  '00220007': Element | undefined;
  // Cylinder Lens Power
  '00220008': Element | undefined;
  // Cylinder Axis
  '00220009': Element | undefined;
  // Emmetropic Magnification
  '0022000A': Element | undefined;
  // Intra Ocular Pressure
  '0022000B': Element | undefined;
  // Horizontal Field of View
  '0022000C': Element | undefined;
  // Pupil Dilated
  '0022000D': Element | undefined;
  // Degree of Dilation
  '0022000E': Element | undefined;
  // Stereo Baseline Angle
  '00220010': Element | undefined;
  // Stereo Baseline Displacement
  '00220011': Element | undefined;
  // Stereo Horizontal Pixel Offset
  '00220012': Element | undefined;
  // Stereo Vertical Pixel Offset
  '00220013': Element | undefined;
  // Stereo Rotation
  '00220014': Element | undefined;
  // Acquisition Device Type Code Sequence
  '00220015': Element | undefined;
  // Illumination Type Code Sequence
  '00220016': Element | undefined;
  // Light Path Filter Type Stack Code Sequence
  '00220017': Element | undefined;
  // Image Path Filter Type Stack Code Sequence
  '00220018': Element | undefined;
  // Lenses Code Sequence
  '00220019': Element | undefined;
  // Channel Description Code Sequence
  '0022001A': Element | undefined;
  // Refractive State Sequence
  '0022001B': Element | undefined;
  // Mydriatic Agent Code Sequence
  '0022001C': Element | undefined;
  // Relative Image Position Code Sequence
  '0022001D': Element | undefined;
  // Camera Angle of View
  '0022001E': Element | undefined;
  // Stereo Pairs Sequence
  '00220020': Element | undefined;
  // Left Image Sequence
  '00220021': Element | undefined;
  // Right Image Sequence
  '00220022': Element | undefined;
  // Axial Length of the Eye
  '00220030': Element | undefined;
  // Ophthalmic Frame Location Sequence
  '00220031': Element | undefined;
  // Reference Coordinates
  '00220032': Element | undefined;
  // Depth Spatial Resolution
  '00220035': Element | undefined;
  // Maximum Depth Distortion
  '00220036': Element | undefined;
  // Along-scan Spatial Resolution
  '00220037': Element | undefined;
  // Maximum Along-scan Distortion
  '00220038': Element | undefined;
  // Ophthalmic Image Orientation
  '00220039': Element | undefined;
  // Depth of Transverse Image
  '00220041': Element | undefined;
  // Mydriatic Agent Concentration Units Sequence
  '00220042': Element | undefined;
  // Across-scan Spatial Resolution
  '00220048': Element | undefined;
  // Maximum Across-scan Distortion
  '00220049': Element | undefined;
  // Mydriatic Agent Concentration
  '0022004E': Element | undefined;
  // Illumination Wave Length
  '00220055': Element | undefined;
  // Illumination Power
  '00220056': Element | undefined;
  // Illumination Bandwidth
  '00220057': Element | undefined;
  // Mydriatic Agent Sequence
  '00220058': Element | undefined;
  // Ophthalmic Axial Measurements Right Eye Sequence
  '00221007': Element | undefined;
  // Ophthalmic Axial Measurements Left Eye Sequence
  '00221008': Element | undefined;
  // Ophthalmic Axial Measurements Device Type
  '00221009': Element | undefined;
  // Ophthalmic Axial Length Measurements Type
  '00221010': Element | undefined;
  // Ophthalmic Axial Length Sequence
  '00221012': Element | undefined;
  // Ophthalmic Axial Length
  '00221019': Element | undefined;
  // Lens Status Code Sequence
  '00221024': Element | undefined;
  // Vitreous Status Code Sequence
  '00221025': Element | undefined;
  // IOL Formula Code Sequence
  '00221028': Element | undefined;
  // IOL Formula Detail
  '00221029': Element | undefined;
  // Keratometer Index
  '00221033': Element | undefined;
  // Source of Ophthalmic Axial Length Code Sequence
  '00221035': Element | undefined;
  // Target Refraction
  '00221037': Element | undefined;
  // Refractive Procedure Occurred
  '00221039': Element | undefined;
  // Refractive Surgery Type Code Sequence
  '00221040': Element | undefined;
  // Ophthalmic Ultrasound Method Code Sequence
  '00221044': Element | undefined;
  // Ophthalmic Axial Length Measurements Sequence
  '00221050': Element | undefined;
  // IOL Power
  '00221053': Element | undefined;
  // Predicted Refractive Error
  '00221054': Element | undefined;
  // Ophthalmic Axial Length Velocity
  '00221059': Element | undefined;
  // Lens Status Description
  '00221065': Element | undefined;
  // Vitreous Status Description
  '00221066': Element | undefined;
  // IOL Power Sequence
  '00221090': Element | undefined;
  // Lens Constant Sequence
  '00221092': Element | undefined;
  // IOL Manufacturer
  '00221093': Element | undefined;
  // Lens Constant Description
  '00221094': Element | undefined;
  // Implant Name
  '00221095': Element | undefined;
  // Keratometry Measurement Type Code Sequence
  '00221096': Element | undefined;
  // Implant Part Number
  '00221097': Element | undefined;
  // Referenced Ophthalmic Axial Measurements Sequence
  '00221100': Element | undefined;
  // Ophthalmic Axial Length Measurements Segment Name Code Sequence
  '00221101': Element | undefined;
  // Refractive Error Before Refractive Surgery Code Sequence
  '00221103': Element | undefined;
  // IOL Power For Exact Emmetropia
  '00221121': Element | undefined;
  // IOL Power For Exact Target Refraction
  '00221122': Element | undefined;
  // Anterior Chamber Depth Definition Code Sequence
  '00221125': Element | undefined;
  // Lens Thickness Sequence
  '00221127': Element | undefined;
  // Anterior Chamber Depth Sequence
  '00221128': Element | undefined;
  // Lens Thickness
  '00221130': Element | undefined;
  // Anterior Chamber Depth
  '00221131': Element | undefined;
  // Source of Lens Thickness Data Code Sequence
  '00221132': Element | undefined;
  // Source of Anterior Chamber Depth Data Code Sequence
  '00221133': Element | undefined;
  // Source of Refractive Measurements Sequence
  '00221134': Element | undefined;
  // Source of Refractive Measurements Code Sequence
  '00221135': Element | undefined;
  // Ophthalmic Axial Length Measurement Modified
  '00221140': Element | undefined;
  // Ophthalmic Axial Length Data Source Code Sequence
  '00221150': Element | undefined;
  // Ophthalmic Axial Length Acquisition Method Code Sequence
  '00221153': Element | undefined;
  // Signal to Noise Ratio
  '00221155': Element | undefined;
  // Ophthalmic Axial Length Data Source Description
  '00221159': Element | undefined;
  // Ophthalmic Axial Length Measurements Total Length Sequence
  '00221210': Element | undefined;
  // Ophthalmic Axial Length Measurements Segmental Length Sequence
  '00221211': Element | undefined;
  // Ophthalmic Axial Length Measurements Length Summation Sequence
  '00221212': Element | undefined;
  // Ultrasound Ophthalmic Axial Length Measurements Sequence
  '00221220': Element | undefined;
  // Optical Ophthalmic Axial Length Measurements Sequence
  '00221225': Element | undefined;
  // Ultrasound Selected Ophthalmic Axial Length Sequence
  '00221230': Element | undefined;
  // Ophthalmic Axial Length Selection Method Code Sequence
  '00221250': Element | undefined;
  // Optical Selected Ophthalmic Axial Length Sequence
  '00221255': Element | undefined;
  // Selected Segmental Ophthalmic Axial Length Sequence
  '00221257': Element | undefined;
  // Selected Total Ophthalmic Axial Length Sequence
  '00221260': Element | undefined;
  // Ophthalmic Axial Length Quality Metric Sequence
  '00221262': Element | undefined;
  // Ophthalmic Axial Length Quality Metric Type Code Sequence
  '00221265': Element | undefined;
  // Ophthalmic Axial Length Quality Metric Type Description
  '00221273': Element | undefined;
  // Intraocular Lens Calculations Right Eye Sequence
  '00221300': Element | undefined;
  // Intraocular Lens Calculations Left Eye Sequence
  '00221310': Element | undefined;
  // Referenced Ophthalmic Axial Length Measurement QC Image Sequence
  '00221330': Element | undefined;
  // Ophthalmic Mapping Device Type
  '00221415': Element | undefined;
  // Acquisition Method Code Sequence
  '00221420': Element | undefined;
  // Acquisition Method Algorithm Sequence
  '00221423': Element | undefined;
  // Ophthalmic Thickness Map Type Code Sequence
  '00221436': Element | undefined;
  // Ophthalmic Thickness Mapping Normals Sequence
  '00221443': Element | undefined;
  // Retinal Thickness Definition Code Sequence
  '00221445': Element | undefined;
  // Pixel Value Mapping to Coded Concept Sequence
  '00221450': Element | undefined;
  // Mapped Pixel Value
  '00221452': Element | undefined;
  // Pixel Value Mapping Explanation
  '00221454': Element | undefined;
  // Ophthalmic Thickness Map Quality Threshold Sequence
  '00221458': Element | undefined;
  // Ophthalmic Thickness Map Threshold Quality Rating
  '00221460': Element | undefined;
  // Anatomic Structure Reference Point
  '00221463': Element | undefined;
  // Registration to Localizer Sequence
  '00221465': Element | undefined;
  // Registered Localizer Units
  '00221466': Element | undefined;
  // Registered Localizer Top Left Hand Corner
  '00221467': Element | undefined;
  // Registered Localizer Bottom Right Hand Corner
  '00221468': Element | undefined;
  // Ophthalmic Thickness Map Quality Rating Sequence
  '00221470': Element | undefined;
  // Relevant OPT Attributes Sequence
  '00221472': Element | undefined;
  // Visual Field Horizontal Extent
  '00240010': Element | undefined;
  // Visual Field Vertical Extent
  '00240011': Element | undefined;
  // Visual Field Shape
  '00240012': Element | undefined;
  // Screening Test Mode Code Sequence
  '00240016': Element | undefined;
  // Maximum Stimulus Luminance
  '00240018': Element | undefined;
  // Background Luminance
  '00240020': Element | undefined;
  // Stimulus Color Code Sequence
  '00240021': Element | undefined;
  // Background Illumination Color Code Sequence
  '00240024': Element | undefined;
  // Stimulus Area
  '00240025': Element | undefined;
  // Stimulus Presentation Time
  '00240028': Element | undefined;
  // Fixation Sequence
  '00240032': Element | undefined;
  // Fixation Monitoring Code Sequence
  '00240033': Element | undefined;
  // Visual Field Catch Trial Sequence
  '00240034': Element | undefined;
  // Fixation Checked Quantity
  '00240035': Element | undefined;
  // Patient Not Properly Fixated Quantity
  '00240036': Element | undefined;
  // Presented Visual Stimuli Data Flag
  '00240037': Element | undefined;
  // Number of Visual Stimuli
  '00240038': Element | undefined;
  // Excessive Fixation Losses Data Flag
  '00240039': Element | undefined;
  // Excessive Fixation Losses
  '00240040': Element | undefined;
  // Stimuli Retesting Quantity
  '00240042': Element | undefined;
  // Comments on Patient's Performance of Visual Field
  '00240044': Element | undefined;
  // False Negatives Estimate Flag
  '00240045': Element | undefined;
  // False Negatives Estimate
  '00240046': Element | undefined;
  // Negative Catch Trials Quantity
  '00240048': Element | undefined;
  // False Negatives Quantity
  '00240050': Element | undefined;
  // Excessive False Negatives Data Flag
  '00240051': Element | undefined;
  // Excessive False Negatives
  '00240052': Element | undefined;
  // False Positives Estimate Flag
  '00240053': Element | undefined;
  // False Positives Estimate
  '00240054': Element | undefined;
  // Catch Trials Data Flag
  '00240055': Element | undefined;
  // Positive Catch Trials Quantity
  '00240056': Element | undefined;
  // Test Point Normals Data Flag
  '00240057': Element | undefined;
  // Test Point Normals Sequence
  '00240058': Element | undefined;
  // Global Deviation Probability Normals Flag
  '00240059': Element | undefined;
  // False Positives Quantity
  '00240060': Element | undefined;
  // Excessive False Positives Data Flag
  '00240061': Element | undefined;
  // Excessive False Positives
  '00240062': Element | undefined;
  // Visual Field Test Normals Flag
  '00240063': Element | undefined;
  // Results Normals Sequence
  '00240064': Element | undefined;
  // Age Corrected Sensitivity Deviation Algorithm Sequence
  '00240065': Element | undefined;
  // Global Deviation From Normal
  '00240066': Element | undefined;
  // Generalized Defect Sensitivity Deviation Algorithm Sequence
  '00240067': Element | undefined;
  // Localized Deviation From Normal
  '00240068': Element | undefined;
  // Patient Reliability Indicator
  '00240069': Element | undefined;
  // Visual Field Mean Sensitivity
  '00240070': Element | undefined;
  // Global Deviation Probability
  '00240071': Element | undefined;
  // Local Deviation Probability Normals Flag
  '00240072': Element | undefined;
  // Localized Deviation Probability
  '00240073': Element | undefined;
  // Short Term Fluctuation Calculated
  '00240074': Element | undefined;
  // Short Term Fluctuation
  '00240075': Element | undefined;
  // Short Term Fluctuation Probability Calculated
  '00240076': Element | undefined;
  // Short Term Fluctuation Probability
  '00240077': Element | undefined;
  // Corrected Localized Deviation From Normal Calculated
  '00240078': Element | undefined;
  // Corrected Localized Deviation From Normal
  '00240079': Element | undefined;
  // Corrected Localized Deviation From Normal Probability Calculated
  '00240080': Element | undefined;
  // Corrected Localized Deviation From Normal Probability
  '00240081': Element | undefined;
  // Global Deviation Probability Sequence
  '00240083': Element | undefined;
  // Localized Deviation Probability Sequence
  '00240085': Element | undefined;
  // Foveal Sensitivity Measured
  '00240086': Element | undefined;
  // Foveal Sensitivity
  '00240087': Element | undefined;
  // Visual Field Test Duration
  '00240088': Element | undefined;
  // Visual Field Test Point Sequence
  '00240089': Element | undefined;
  // Visual Field Test Point X-Coordinate
  '00240090': Element | undefined;
  // Visual Field Test Point Y-Coordinate
  '00240091': Element | undefined;
  // Age Corrected Sensitivity Deviation Value
  '00240092': Element | undefined;
  // Stimulus Results
  '00240093': Element | undefined;
  // Sensitivity Value
  '00240094': Element | undefined;
  // Retest Stimulus Seen
  '00240095': Element | undefined;
  // Retest Sensitivity Value
  '00240096': Element | undefined;
  // Visual Field Test Point Normals Sequence
  '00240097': Element | undefined;
  // Quantified Defect
  '00240098': Element | undefined;
  // Age Corrected Sensitivity Deviation Probability Value
  '00240100': Element | undefined;
  // Generalized Defect Corrected Sensitivity Deviation Flag
  '00240102': Element | undefined;
  // Generalized Defect Corrected Sensitivity Deviation Value
  '00240103': Element | undefined;
  // Generalized Defect Corrected Sensitivity Deviation Probability Value
  '00240104': Element | undefined;
  // Minimum Sensitivity Value
  '00240105': Element | undefined;
  // Blind Spot Localized
  '00240106': Element | undefined;
  // Blind Spot X-Coordinate
  '00240107': Element | undefined;
  // Blind Spot Y-Coordinate
  '00240108': Element | undefined;
  // Visual Acuity Measurement Sequence
  '00240110': Element | undefined;
  // Refractive Parameters Used on Patient Sequence
  '00240112': Element | undefined;
  // Measurement Laterality
  '00240113': Element | undefined;
  // Ophthalmic Patient Clinical Information Left Eye Sequence
  '00240114': Element | undefined;
  // Ophthalmic Patient Clinical Information Right Eye Sequence
  '00240115': Element | undefined;
  // Foveal Point Normative Data Flag
  '00240117': Element | undefined;
  // Foveal Point Probability Value
  '00240118': Element | undefined;
  // Screening Baseline Measured
  '00240120': Element | undefined;
  // Screening Baseline Measured Sequence
  '00240122': Element | undefined;
  // Screening Baseline Type
  '00240124': Element | undefined;
  // Screening Baseline Value
  '00240126': Element | undefined;
  // Algorithm Source
  '00240202': Element | undefined;
  // Data Set Name
  '00240306': Element | undefined;
  // Data Set Version
  '00240307': Element | undefined;
  // Data Set Source
  '00240308': Element | undefined;
  // Data Set Description
  '00240309': Element | undefined;
  // Visual Field Test Reliability Global Index Sequence
  '00240317': Element | undefined;
  // Visual Field Global Results Index Sequence
  '00240320': Element | undefined;
  // Data Observation Sequence
  '00240325': Element | undefined;
  // Index Normals Flag
  '00240338': Element | undefined;
  // Index Probability
  '00240341': Element | undefined;
  // Index Probability Sequence
  '00240344': Element | undefined;
  // Samples per Pixel
  '00280002': Element | undefined;
  // Samples per Pixel Used
  '00280003': Element | undefined;
  // Photometric Interpretation
  '00280004': Element | undefined;
  // Image Dimensions
  '00280005': Element | undefined;
  // Planar Configuration
  '00280006': Element | undefined;
  // Number of Frames
  '00280008': Element | undefined;
  // Frame Increment Pointer
  '00280009': Element | undefined;
  // Frame Dimension Pointer
  '0028000A': Element | undefined;
  // Rows
  '00280010': Element | undefined;
  // Columns
  '00280011': Element | undefined;
  // Planes
  '00280012': Element | undefined;
  // Ultrasound Color Data Present
  '00280014': Element | undefined;
  // Pixel Spacing
  '00280030': Element | undefined;
  // Zoom Factor
  '00280031': Element | undefined;
  // Zoom Center
  '00280032': Element | undefined;
  // Pixel Aspect Ratio
  '00280034': Element | undefined;
  // Image Format
  '00280040': Element | undefined;
  // Manipulated Image
  '00280050': Element | undefined;
  // Corrected Image
  '00280051': Element | undefined;
  // Compression Recognition Code
  '0028005F': Element | undefined;
  // Compression Code
  '00280060': Element | undefined;
  // Compression Originator
  '00280061': Element | undefined;
  // Compression Label
  '00280062': Element | undefined;
  // Compression Description
  '00280063': Element | undefined;
  // Compression Sequence
  '00280065': Element | undefined;
  // Compression Step Pointers
  '00280066': Element | undefined;
  // Repeat Interval
  '00280068': Element | undefined;
  // Bits Grouped
  '00280069': Element | undefined;
  // Perimeter Table
  '00280070': Element | undefined;
  // Perimeter Value
  '00280071': Element | undefined;
  // Predictor Rows
  '00280080': Element | undefined;
  // Predictor Columns
  '00280081': Element | undefined;
  // Predictor Constants
  '00280082': Element | undefined;
  // Blocked Pixels
  '00280090': Element | undefined;
  // Block Rows
  '00280091': Element | undefined;
  // Block Columns
  '00280092': Element | undefined;
  // Row Overlap
  '00280093': Element | undefined;
  // Column Overlap
  '00280094': Element | undefined;
  // Bits Allocated
  '00280100': Element | undefined;
  // Bits Stored
  '00280101': Element | undefined;
  // High Bit
  '00280102': Element | undefined;
  // Pixel Representation
  '00280103': Element | undefined;
  // Smallest Valid Pixel Value
  '00280104': Element | undefined;
  // Largest Valid Pixel Value
  '00280105': Element | undefined;
  // Smallest Image Pixel Value
  '00280106': Element | undefined;
  // Largest Image Pixel Value
  '00280107': Element | undefined;
  // Smallest Pixel Value in Series
  '00280108': Element | undefined;
  // Largest Pixel Value in Series
  '00280109': Element | undefined;
  // Smallest Image Pixel Value in Plane
  '00280110': Element | undefined;
  // Largest Image Pixel Value in Plane
  '00280111': Element | undefined;
  // Pixel Padding Value
  '00280120': Element | undefined;
  // Pixel Padding Range Limit
  '00280121': Element | undefined;
  // Image Location
  '00280200': Element | undefined;
  // Quality Control Image
  '00280300': Element | undefined;
  // Burned In Annotation
  '00280301': Element | undefined;
  // Recognizable Visual Features
  '00280302': Element | undefined;
  // Longitudinal Temporal Information Modified
  '00280303': Element | undefined;
  // Referenced Color Palette Instance UID
  '00280304': Element | undefined;
  // Transform Label
  '00280400': Element | undefined;
  // Transform Version Number
  '00280401': Element | undefined;
  // Number of Transform Steps
  '00280402': Element | undefined;
  // Sequence of Compressed Data
  '00280403': Element | undefined;
  // Details of Coefficients
  '00280404': Element | undefined;
  // Rows For Nth Order Coefficients
  '002804X0': Element | undefined;
  // Columns For Nth Order Coefficients
  '002804X1': Element | undefined;
  // Coefficient Coding
  '002804X2': Element | undefined;
  // Coefficient Coding Pointers
  '002804X3': Element | undefined;
  // DCT Label
  '00280700': Element | undefined;
  // Data Block Description
  '00280701': Element | undefined;
  // Data Block
  '00280702': Element | undefined;
  // Normalization Factor Format
  '00280710': Element | undefined;
  // Zonal Map Number Format
  '00280720': Element | undefined;
  // Zonal Map Location
  '00280721': Element | undefined;
  // Zonal Map Format
  '00280722': Element | undefined;
  // Adaptive Map Format
  '00280730': Element | undefined;
  // Code Number Format
  '00280740': Element | undefined;
  // Code Label
  '002808X0': Element | undefined;
  // Number of Tables
  '002808X2': Element | undefined;
  // Code Table Location
  '002808X3': Element | undefined;
  // Bits For Code Word
  '002808X4': Element | undefined;
  // Image Data Location
  '002808X8': Element | undefined;
  // Pixel Spacing Calibration Type
  '00280A02': Element | undefined;
  // Pixel Spacing Calibration Description
  '00280A04': Element | undefined;
  // Pixel Intensity Relationship
  '00281040': Element | undefined;
  // Pixel Intensity Relationship Sign
  '00281041': Element | undefined;
  // Window Center
  '00281050': Element | undefined;
  // Window Width
  '00281051': Element | undefined;
  // Rescale Intercept
  '00281052': Element | undefined;
  // Rescale Slope
  '00281053': Element | undefined;
  // Rescale Type
  '00281054': Element | undefined;
  // Window Center & Width Explanation
  '00281055': Element | undefined;
  // VOI LUT Function
  '00281056': Element | undefined;
  // Gray Scale
  '00281080': Element | undefined;
  // Recommended Viewing Mode
  '00281090': Element | undefined;
  // Gray Lookup Table Descriptor
  '00281100': Element | undefined;
  // Red Palette Color Lookup Table Descriptor
  '00281101': Element | undefined;
  // Green Palette Color Lookup Table Descriptor
  '00281102': Element | undefined;
  // Blue Palette Color Lookup Table Descriptor
  '00281103': Element | undefined;
  // Alpha Palette Color Lookup Table Descriptor
  '00281104': Element | undefined;
  // Large Red Palette Color Lookup Table Descriptor
  '00281111': Element | undefined;
  // Large Green Palette Color Lookup Table Descriptor
  '00281112': Element | undefined;
  // Large Blue Palette Color Lookup Table Descriptor
  '00281113': Element | undefined;
  // Palette Color Lookup Table UID
  '00281199': Element | undefined;
  // Gray Lookup Table Data
  '00281200': Element | undefined;
  // Red Palette Color Lookup Table Data
  '00281201': Element | undefined;
  // Green Palette Color Lookup Table Data
  '00281202': Element | undefined;
  // Blue Palette Color Lookup Table Data
  '00281203': Element | undefined;
  // Alpha Palette Color Lookup Table Data
  '00281204': Element | undefined;
  // Large Red Palette Color Lookup Table Data
  '00281211': Element | undefined;
  // Large Green Palette Color Lookup Table Data
  '00281212': Element | undefined;
  // Large Blue Palette Color Lookup Table Data
  '00281213': Element | undefined;
  // Large Palette Color Lookup Table UID
  '00281214': Element | undefined;
  // Segmented Red Palette Color Lookup Table Data
  '00281221': Element | undefined;
  // Segmented Green Palette Color Lookup Table Data
  '00281222': Element | undefined;
  // Segmented Blue Palette Color Lookup Table Data
  '00281223': Element | undefined;
  // Breast Implant Present
  '00281300': Element | undefined;
  // Partial View
  '00281350': Element | undefined;
  // Partial View Description
  '00281351': Element | undefined;
  // Partial View Code Sequence
  '00281352': Element | undefined;
  // Spatial Locations Preserved
  '0028135A': Element | undefined;
  // Data Frame Assignment Sequence
  '00281401': Element | undefined;
  // Data Path Assignment
  '00281402': Element | undefined;
  // Bits Mapped to Color Lookup Table
  '00281403': Element | undefined;
  // Blending LUT 1 Sequence
  '00281404': Element | undefined;
  // Blending LUT 1 Transfer Function
  '00281405': Element | undefined;
  // Blending Weight Constant
  '00281406': Element | undefined;
  // Blending Lookup Table Descriptor
  '00281407': Element | undefined;
  // Blending Lookup Table Data
  '00281408': Element | undefined;
  // Enhanced Palette Color Lookup Table Sequence
  '0028140B': Element | undefined;
  // Blending LUT 2 Sequence
  '0028140C': Element | undefined;
  // Blending LUT 2 Transfer Function
  '0028140D': Element | undefined;
  // Data Path ID
  '0028140E': Element | undefined;
  // RGB LUT Transfer Function
  '0028140F': Element | undefined;
  // Alpha LUT Transfer Function
  '00281410': Element | undefined;
  // ICC Profile
  '00282000': Element | undefined;
  // Lossy Image Compression
  '00282110': Element | undefined;
  // Lossy Image Compression Ratio
  '00282112': Element | undefined;
  // Lossy Image Compression Method
  '00282114': Element | undefined;
  // Modality LUT Sequence
  '00283000': Element | undefined;
  // LUT Descriptor
  '00283002': Element | undefined;
  // LUT Explanation
  '00283003': Element | undefined;
  // Modality LUT Type
  '00283004': Element | undefined;
  // LUT Data
  '00283006': Element | undefined;
  // VOI LUT Sequence
  '00283010': Element | undefined;
  // Softcopy VOI LUT Sequence
  '00283110': Element | undefined;
  // Image Presentation Comments
  '00284000': Element | undefined;
  // Bi-Plane Acquisition Sequence
  '00285000': Element | undefined;
  // Representative Frame Number
  '00286010': Element | undefined;
  // Frame Numbers of Interest (FOI)
  '00286020': Element | undefined;
  // Frame of Interest Description
  '00286022': Element | undefined;
  // Frame of Interest Type
  '00286023': Element | undefined;
  // Mask Pointer(s)
  '00286030': Element | undefined;
  // R Wave Pointer
  '00286040': Element | undefined;
  // Mask Subtraction Sequence
  '00286100': Element | undefined;
  // Mask Operation
  '00286101': Element | undefined;
  // Applicable Frame Range
  '00286102': Element | undefined;
  // Mask Frame Numbers
  '00286110': Element | undefined;
  // Contrast Frame Averaging
  '00286112': Element | undefined;
  // Mask Sub-pixel Shift
  '00286114': Element | undefined;
  // TID Offset
  '00286120': Element | undefined;
  // Mask Operation Explanation
  '00286190': Element | undefined;
  // Equipment Administrator Sequence
  '00287000': Element | undefined;
  // Number of Display Subsystems
  '00287001': Element | undefined;
  // Current Configuration ID
  '00287002': Element | undefined;
  // Display Subsystem ID
  '00287003': Element | undefined;
  // Display Subsystem Name
  '00287004': Element | undefined;
  // Display Subsystem Description
  '00287005': Element | undefined;
  // System Status
  '00287006': Element | undefined;
  // System Status Comment
  '00287007': Element | undefined;
  // Target Luminance Characteristics Sequence
  '00287008': Element | undefined;
  // Luminance Characteristics ID
  '00287009': Element | undefined;
  // Display Subsystem Configuration Sequence
  '0028700A': Element | undefined;
  // Configuration ID
  '0028700B': Element | undefined;
  // Configuration Name
  '0028700C': Element | undefined;
  // Configuration Description
  '0028700D': Element | undefined;
  // Referenced Target Luminance Characteristics ID
  '0028700E': Element | undefined;
  // QA Results Sequence
  '0028700F': Element | undefined;
  // Display Subsystem QA Results Sequence
  '00287010': Element | undefined;
  // Configuration QA Results Sequence
  '00287011': Element | undefined;
  // Measurement Equipment Sequence
  '00287012': Element | undefined;
  // Measurement Functions
  '00287013': Element | undefined;
  // Measurement Equipment Type
  '00287014': Element | undefined;
  // Visual Evaluation Result Sequence
  '00287015': Element | undefined;
  // Display Calibration Result Sequence
  '00287016': Element | undefined;
  // DDL Value
  '00287017': Element | undefined;
  // CIExy White Point
  '00287018': Element | undefined;
  // Display Function Type
  '00287019': Element | undefined;
  // Gamma Value
  '0028701A': Element | undefined;
  // Number of Luminance Points
  '0028701B': Element | undefined;
  // Luminance Response Sequence
  '0028701C': Element | undefined;
  // Target Minimum Luminance
  '0028701D': Element | undefined;
  // Target Maximum Luminance
  '0028701E': Element | undefined;
  // Luminance Value
  '0028701F': Element | undefined;
  // Luminance Response Description
  '00287020': Element | undefined;
  // White Point Flag
  '00287021': Element | undefined;
  // Display Device Type Code Sequence
  '00287022': Element | undefined;
  // Display Subsystem Sequence
  '00287023': Element | undefined;
  // Luminance Result Sequence
  '00287024': Element | undefined;
  // Ambient Light Value Source
  '00287025': Element | undefined;
  // Measured Characteristics
  '00287026': Element | undefined;
  // Luminance Uniformity Result Sequence
  '00287027': Element | undefined;
  // Visual Evaluation Test Sequence
  '00287028': Element | undefined;
  // Test Result
  '00287029': Element | undefined;
  // Test Result Comment
  '0028702A': Element | undefined;
  // Test Image Validation
  '0028702B': Element | undefined;
  // Test Pattern Code Sequence
  '0028702C': Element | undefined;
  // Measurement Pattern Code Sequence
  '0028702D': Element | undefined;
  // Visual Evaluation Method Code Sequence
  '0028702E': Element | undefined;
  // Pixel Data Provider URL
  '00287FE0': Element | undefined;
  // Data Point Rows
  '00289001': Element | undefined;
  // Data Point Columns
  '00289002': Element | undefined;
  // Signal Domain Columns
  '00289003': Element | undefined;
  // Largest Monochrome Pixel Value
  '00289099': Element | undefined;
  // Data Representation
  '00289108': Element | undefined;
  // Pixel Measures Sequence
  '00289110': Element | undefined;
  // Frame VOI LUT Sequence
  '00289132': Element | undefined;
  // Pixel Value Transformation Sequence
  '00289145': Element | undefined;
  // Signal Domain Rows
  '00289235': Element | undefined;
  // Display Filter Percentage
  '00289411': Element | undefined;
  // Frame Pixel Shift Sequence
  '00289415': Element | undefined;
  // Subtraction Item ID
  '00289416': Element | undefined;
  // Pixel Intensity Relationship LUT Sequence
  '00289422': Element | undefined;
  // Frame Pixel Data Properties Sequence
  '00289443': Element | undefined;
  // Geometrical Properties
  '00289444': Element | undefined;
  // Geometric Maximum Distortion
  '00289445': Element | undefined;
  // Image Processing Applied
  '00289446': Element | undefined;
  // Mask Selection Mode
  '00289454': Element | undefined;
  // LUT Function
  '00289474': Element | undefined;
  // Mask Visibility Percentage
  '00289478': Element | undefined;
  // Pixel Shift Sequence
  '00289501': Element | undefined;
  // Region Pixel Shift Sequence
  '00289502': Element | undefined;
  // Vertices of the Region
  '00289503': Element | undefined;
  // Multi-frame Presentation Sequence
  '00289505': Element | undefined;
  // Pixel Shift Frame Range
  '00289506': Element | undefined;
  // LUT Frame Range
  '00289507': Element | undefined;
  // Image to Equipment Mapping Matrix
  '00289520': Element | undefined;
  // Equipment Coordinate System Identification
  '00289537': Element | undefined;
  // Study Status ID
  '0032000A': Element | undefined;
  // Study Priority ID
  '0032000C': Element | undefined;
  // Study ID Issuer
  '00320012': Element | undefined;
  // Study Verified Date
  '00320032': Element | undefined;
  // Study Verified Time
  '00320033': Element | undefined;
  // Study Read Date
  '00320034': Element | undefined;
  // Study Read Time
  '00320035': Element | undefined;
  // Scheduled Study Start Date
  '00321000': Element | undefined;
  // Scheduled Study Start Time
  '00321001': Element | undefined;
  // Scheduled Study Stop Date
  '00321010': Element | undefined;
  // Scheduled Study Stop Time
  '00321011': Element | undefined;
  // Scheduled Study Location
  '00321020': Element | undefined;
  // Scheduled Study Location AE Title
  '00321021': Element | undefined;
  // Reason for Study
  '00321030': Element | undefined;
  // Requesting Physician Identification Sequence
  '00321031': Element | undefined;
  // Requesting Physician
  '00321032': Element | undefined;
  // Requesting Service
  '00321033': Element | undefined;
  // Requesting Service Code Sequence
  '00321034': Element | undefined;
  // Study Arrival Date
  '00321040': Element | undefined;
  // Study Arrival Time
  '00321041': Element | undefined;
  // Study Completion Date
  '00321050': Element | undefined;
  // Study Completion Time
  '00321051': Element | undefined;
  // Study Component Status ID
  '00321055': Element | undefined;
  // Requested Procedure Description
  '00321060': Element | undefined;
  // Requested Procedure Code Sequence
  '00321064': Element | undefined;
  // Requested Contrast Agent
  '00321070': Element | undefined;
  // Study Comments
  '00324000': Element | undefined;
  // Referenced Patient Alias Sequence
  '00380004': Element | undefined;
  // Visit Status ID
  '00380008': Element | undefined;
  // Admission ID
  '00380010': Element | undefined;
  // Issuer of Admission ID
  '00380011': Element | undefined;
  // Issuer of Admission ID Sequence
  '00380014': Element | undefined;
  // Route of Admissions
  '00380016': Element | undefined;
  // Scheduled Admission Date
  '0038001A': Element | undefined;
  // Scheduled Admission Time
  '0038001B': Element | undefined;
  // Scheduled Discharge Date
  '0038001C': Element | undefined;
  // Scheduled Discharge Time
  '0038001D': Element | undefined;
  // Scheduled Patient Institution Residence
  '0038001E': Element | undefined;
  // Admitting Date
  '00380020': Element | undefined;
  // Admitting Time
  '00380021': Element | undefined;
  // Discharge Date
  '00380030': Element | undefined;
  // Discharge Time
  '00380032': Element | undefined;
  // Discharge Diagnosis Description
  '00380040': Element | undefined;
  // Discharge Diagnosis Code Sequence
  '00380044': Element | undefined;
  // Special Needs
  '00380050': Element | undefined;
  // Service Episode ID
  '00380060': Element | undefined;
  // Issuer of Service Episode ID
  '00380061': Element | undefined;
  // Service Episode Description
  '00380062': Element | undefined;
  // Issuer of Service Episode ID Sequence
  '00380064': Element | undefined;
  // Pertinent Documents Sequence
  '00380100': Element | undefined;
  // Current Patient Location
  '00380300': Element | undefined;
  // Patient's Institution Residence
  '00380400': Element | undefined;
  // Patient State
  '00380500': Element | undefined;
  // Patient Clinical Trial Participation Sequence
  '00380502': Element | undefined;
  // Visit Comments
  '00384000': Element | undefined;
  // Waveform Originality
  '003A0004': Element | undefined;
  // Number of Waveform Channels
  '003A0005': Element | undefined;
  // Number of Waveform Samples
  '003A0010': Element | undefined;
  // Sampling Frequency
  '003A001A': Element | undefined;
  // Multiplex Group Label
  '003A0020': Element | undefined;
  // Channel Definition Sequence
  '003A0200': Element | undefined;
  // Waveform Channel Number
  '003A0202': Element | undefined;
  // Channel Label
  '003A0203': Element | undefined;
  // Channel Status
  '003A0205': Element | undefined;
  // Channel Source Sequence
  '003A0208': Element | undefined;
  // Channel Source Modifiers Sequence
  '003A0209': Element | undefined;
  // Source Waveform Sequence
  '003A020A': Element | undefined;
  // Channel Derivation Description
  '003A020C': Element | undefined;
  // Channel Sensitivity
  '003A0210': Element | undefined;
  // Channel Sensitivity Units Sequence
  '003A0211': Element | undefined;
  // Channel Sensitivity Correction Factor
  '003A0212': Element | undefined;
  // Channel Baseline
  '003A0213': Element | undefined;
  // Channel Time Skew
  '003A0214': Element | undefined;
  // Channel Sample Skew
  '003A0215': Element | undefined;
  // Channel Offset
  '003A0218': Element | undefined;
  // Waveform Bits Stored
  '003A021A': Element | undefined;
  // Filter Low Frequency
  '003A0220': Element | undefined;
  // Filter High Frequency
  '003A0221': Element | undefined;
  // Notch Filter Frequency
  '003A0222': Element | undefined;
  // Notch Filter Bandwidth
  '003A0223': Element | undefined;
  // Waveform Data Display Scale
  '003A0230': Element | undefined;
  // Waveform Display Background CIELab Value
  '003A0231': Element | undefined;
  // Waveform Presentation Group Sequence
  '003A0240': Element | undefined;
  // Presentation Group Number
  '003A0241': Element | undefined;
  // Channel Display Sequence
  '003A0242': Element | undefined;
  // Channel Recommended Display CIELab Value
  '003A0244': Element | undefined;
  // Channel Position
  '003A0245': Element | undefined;
  // Display Shading Flag
  '003A0246': Element | undefined;
  // Fractional Channel Display Scale
  '003A0247': Element | undefined;
  // Absolute Channel Display Scale
  '003A0248': Element | undefined;
  // Multiplexed Audio Channels Description Code Sequence
  '003A0300': Element | undefined;
  // Channel Identification Code
  '003A0301': Element | undefined;
  // Channel Mode
  '003A0302': Element | undefined;
  // Scheduled Station AE Title
  '00400001': Element | undefined;
  // Scheduled Procedure Step Start Date
  '00400002': Element | undefined;
  // Scheduled Procedure Step Start Time
  '00400003': Element | undefined;
  // Scheduled Procedure Step End Date
  '00400004': Element | undefined;
  // Scheduled Procedure Step End Time
  '00400005': Element | undefined;
  // Scheduled Performing Physician's Name
  '00400006': Element | undefined;
  // Scheduled Procedure Step Description
  '00400007': Element | undefined;
  // Scheduled Protocol Code Sequence
  '00400008': Element | undefined;
  // Scheduled Procedure Step ID
  '00400009': Element | undefined;
  // Stage Code Sequence
  '0040000A': Element | undefined;
  // Scheduled Performing Physician Identification Sequence
  '0040000B': Element | undefined;
  // Scheduled Station Name
  '00400010': Element | undefined;
  // Scheduled Procedure Step Location
  '00400011': Element | undefined;
  // Pre-Medication
  '00400012': Element | undefined;
  // Scheduled Procedure Step Status
  '00400020': Element | undefined;
  // Order Placer Identifier Sequence
  '00400026': Element | undefined;
  // Order Filler Identifier Sequence
  '00400027': Element | undefined;
  // Local Namespace Entity ID
  '00400031': Element | undefined;
  // Universal Entity ID
  '00400032': Element | undefined;
  // Universal Entity ID Type
  '00400033': Element | undefined;
  // Identifier Type Code
  '00400035': Element | undefined;
  // Assigning Facility Sequence
  '00400036': Element | undefined;
  // Assigning Jurisdiction Code Sequence
  '00400039': Element | undefined;
  // Assigning Agency or Department Code Sequence
  '0040003A': Element | undefined;
  // Scheduled Procedure Step Sequence
  '00400100': Element | undefined;
  // Referenced Non-Image Composite SOP Instance Sequence
  '00400220': Element | undefined;
  // Performed Station AE Title
  '00400241': Element | undefined;
  // Performed Station Name
  '00400242': Element | undefined;
  // Performed Location
  '00400243': Element | undefined;
  // Performed Procedure Step Start Date
  '00400244': Element | undefined;
  // Performed Procedure Step Start Time
  '00400245': Element | undefined;
  // Performed Procedure Step End Date
  '00400250': Element | undefined;
  // Performed Procedure Step End Time
  '00400251': Element | undefined;
  // Performed Procedure Step Status
  '00400252': Element | undefined;
  // Performed Procedure Step ID
  '00400253': Element | undefined;
  // Performed Procedure Step Description
  '00400254': Element | undefined;
  // Performed Procedure Type Description
  '00400255': Element | undefined;
  // Performed Protocol Code Sequence
  '00400260': Element | undefined;
  // Performed Protocol Type
  '00400261': Element | undefined;
  // Scheduled Step Attributes Sequence
  '00400270': Element | undefined;
  // Request Attributes Sequence
  '00400275': Element | undefined;
  // Comments on the Performed Procedure Step
  '00400280': Element | undefined;
  // Performed Procedure Step Discontinuation Reason Code Sequence
  '00400281': Element | undefined;
  // Quantity Sequence
  '00400293': Element | undefined;
  // Quantity
  '00400294': Element | undefined;
  // Measuring Units Sequence
  '00400295': Element | undefined;
  // Billing Item Sequence
  '00400296': Element | undefined;
  // Total Time of Fluoroscopy
  '00400300': Element | undefined;
  // Total Number of Exposures
  '00400301': Element | undefined;
  // Entrance Dose
  '00400302': Element | undefined;
  // Exposed Area
  '00400303': Element | undefined;
  // Distance Source to Entrance
  '00400306': Element | undefined;
  // Distance Source to Support
  '00400307': Element | undefined;
  // Exposure Dose Sequence
  '0040030E': Element | undefined;
  // Comments on Radiation Dose
  '00400310': Element | undefined;
  // X-Ray Output
  '00400312': Element | undefined;
  // Half Value Layer
  '00400314': Element | undefined;
  // Organ Dose
  '00400316': Element | undefined;
  // Organ Exposed
  '00400318': Element | undefined;
  // Billing Procedure Step Sequence
  '00400320': Element | undefined;
  // Film Consumption Sequence
  '00400321': Element | undefined;
  // Billing Supplies and Devices Sequence
  '00400324': Element | undefined;
  // Referenced Procedure Step Sequence
  '00400330': Element | undefined;
  // Performed Series Sequence
  '00400340': Element | undefined;
  // Comments on the Scheduled Procedure Step
  '00400400': Element | undefined;
  // Protocol Context Sequence
  '00400440': Element | undefined;
  // Content Item Modifier Sequence
  '00400441': Element | undefined;
  // Scheduled Specimen Sequence
  '00400500': Element | undefined;
  // Specimen Accession Number
  '0040050A': Element | undefined;
  // Container Identifier
  '00400512': Element | undefined;
  // Issuer of the Container Identifier Sequence
  '00400513': Element | undefined;
  // Alternate Container Identifier Sequence
  '00400515': Element | undefined;
  // Container Type Code Sequence
  '00400518': Element | undefined;
  // Container Description
  '0040051A': Element | undefined;
  // Container Component Sequence
  '00400520': Element | undefined;
  // Specimen Sequence
  '00400550': Element | undefined;
  // Specimen Identifier
  '00400551': Element | undefined;
  // Specimen Description Sequence (Trial)
  '00400552': Element | undefined;
  // Specimen Description (Trial)
  '00400553': Element | undefined;
  // Specimen UID
  '00400554': Element | undefined;
  // Acquisition Context Sequence
  '00400555': Element | undefined;
  // Acquisition Context Description
  '00400556': Element | undefined;
  // Specimen Type Code Sequence
  '0040059A': Element | undefined;
  // Specimen Description Sequence
  '00400560': Element | undefined;
  // Issuer of the Specimen Identifier Sequence
  '00400562': Element | undefined;
  // Specimen Short Description
  '00400600': Element | undefined;
  // Specimen Detailed Description
  '00400602': Element | undefined;
  // Specimen Preparation Sequence
  '00400610': Element | undefined;
  // Specimen Preparation Step Content Item Sequence
  '00400612': Element | undefined;
  // Specimen Localization Content Item Sequence
  '00400620': Element | undefined;
  // Slide Identifier
  '004006FA': Element | undefined;
  // Image Center Point Coordinates Sequence
  '0040071A': Element | undefined;
  // X Offset in Slide Coordinate System
  '0040072A': Element | undefined;
  // Y Offset in Slide Coordinate System
  '0040073A': Element | undefined;
  // Z Offset in Slide Coordinate System
  '0040074A': Element | undefined;
  // Pixel Spacing Sequence
  '004008D8': Element | undefined;
  // Coordinate System Axis Code Sequence
  '004008DA': Element | undefined;
  // Measurement Units Code Sequence
  '004008EA': Element | undefined;
  // Vital Stain Code Sequence (Trial)
  '004009F8': Element | undefined;
  // Requested Procedure ID
  '00401001': Element | undefined;
  // Reason for the Requested Procedure
  '00401002': Element | undefined;
  // Requested Procedure Priority
  '00401003': Element | undefined;
  // Patient Transport Arrangements
  '00401004': Element | undefined;
  // Requested Procedure Location
  '00401005': Element | undefined;
  // Placer Order Number / Procedure
  '00401006': Element | undefined;
  // Filler Order Number / Procedure
  '00401007': Element | undefined;
  // Confidentiality Code
  '00401008': Element | undefined;
  // Reporting Priority
  '00401009': Element | undefined;
  // Reason for Requested Procedure Code Sequence
  '0040100A': Element | undefined;
  // Names of Intended Recipients of Results
  '00401010': Element | undefined;
  // Intended Recipients of Results Identification Sequence
  '00401011': Element | undefined;
  // Reason For Performed Procedure Code Sequence
  '00401012': Element | undefined;
  // Requested Procedure Description (Trial)
  '00401060': Element | undefined;
  // Person Identification Code Sequence
  '00401101': Element | undefined;
  // Person's Address
  '00401102': Element | undefined;
  // Person's Telephone Numbers
  '00401103': Element | undefined;
  // Requested Procedure Comments
  '00401400': Element | undefined;
  // Reason for the Imaging Service Request
  '00402001': Element | undefined;
  // Issue Date of Imaging Service Request
  '00402004': Element | undefined;
  // Issue Time of Imaging Service Request
  '00402005': Element | undefined;
  // Placer Order Number / Imaging Service Request (Retired)
  '00402006': Element | undefined;
  // Filler Order Number / Imaging Service Request (Retired)
  '00402007': Element | undefined;
  // Order Entered By
  '00402008': Element | undefined;
  // Order Enterer's Location
  '00402009': Element | undefined;
  // Order Callback Phone Number
  '00402010': Element | undefined;
  // Placer Order Number / Imaging Service Request
  '00402016': Element | undefined;
  // Filler Order Number / Imaging Service Request
  '00402017': Element | undefined;
  // Imaging Service Request Comments
  '00402400': Element | undefined;
  // Confidentiality Constraint on Patient Data Description
  '00403001': Element | undefined;
  // General Purpose Scheduled Procedure Step Status
  '00404001': Element | undefined;
  // General Purpose Performed Procedure Step Status
  '00404002': Element | undefined;
  // General Purpose Scheduled Procedure Step Priority
  '00404003': Element | undefined;
  // Scheduled Processing Applications Code Sequence
  '00404004': Element | undefined;
  // Scheduled Procedure Step Start DateTime
  '00404005': Element | undefined;
  // Multiple Copies Flag
  '00404006': Element | undefined;
  // Performed Processing Applications Code Sequence
  '00404007': Element | undefined;
  // Human Performer Code Sequence
  '00404009': Element | undefined;
  // Scheduled Procedure Step Modification DateTime
  '00404010': Element | undefined;
  // Expected Completion DateTime
  '00404011': Element | undefined;
  // Resulting General Purpose Performed Procedure Steps Sequence
  '00404015': Element | undefined;
  // Referenced General Purpose Scheduled Procedure Step Sequence
  '00404016': Element | undefined;
  // Scheduled Workitem Code Sequence
  '00404018': Element | undefined;
  // Performed Workitem Code Sequence
  '00404019': Element | undefined;
  // Input Availability Flag
  '00404020': Element | undefined;
  // Input Information Sequence
  '00404021': Element | undefined;
  // Relevant Information Sequence
  '00404022': Element | undefined;
  // Referenced General Purpose Scheduled Procedure Step Transaction UID
  '00404023': Element | undefined;
  // Scheduled Station Name Code Sequence
  '00404025': Element | undefined;
  // Scheduled Station Class Code Sequence
  '00404026': Element | undefined;
  // Scheduled Station Geographic Location Code Sequence
  '00404027': Element | undefined;
  // Performed Station Name Code Sequence
  '00404028': Element | undefined;
  // Performed Station Class Code Sequence
  '00404029': Element | undefined;
  // Performed Station Geographic Location Code Sequence
  '00404030': Element | undefined;
  // Requested Subsequent Workitem Code Sequence
  '00404031': Element | undefined;
  // Non-DICOM Output Code Sequence
  '00404032': Element | undefined;
  // Output Information Sequence
  '00404033': Element | undefined;
  // Scheduled Human Performers Sequence
  '00404034': Element | undefined;
  // Actual Human Performers Sequence
  '00404035': Element | undefined;
  // Human Performer's Organization
  '00404036': Element | undefined;
  // Human Performer's Name
  '00404037': Element | undefined;
  // Raw Data Handling
  '00404040': Element | undefined;
  // Input Readiness State
  '00404041': Element | undefined;
  // Performed Procedure Step Start DateTime
  '00404050': Element | undefined;
  // Performed Procedure Step End DateTime
  '00404051': Element | undefined;
  // Procedure Step Cancellation DateTime
  '00404052': Element | undefined;
  // Entrance Dose in mGy
  '00408302': Element | undefined;
  // Referenced Image Real World Value Mapping Sequence
  '00409094': Element | undefined;
  // Real World Value Mapping Sequence
  '00409096': Element | undefined;
  // Pixel Value Mapping Code Sequence
  '00409098': Element | undefined;
  // LUT Label
  '00409210': Element | undefined;
  // Real World Value Last Value Mapped
  '00409211': Element | undefined;
  // Real World Value LUT Data
  '00409212': Element | undefined;
  // Real World Value First Value Mapped
  '00409216': Element | undefined;
  // Real World Value Intercept
  '00409224': Element | undefined;
  // Real World Value Slope
  '00409225': Element | undefined;
  // Findings Flag (Trial)
  '0040A007': Element | undefined;
  // Relationship Type
  '0040A010': Element | undefined;
  // Findings Sequence (Trial)
  '0040A020': Element | undefined;
  // Findings Group UID (Trial)
  '0040A021': Element | undefined;
  // Referenced Findings Group UID (Trial)
  '0040A022': Element | undefined;
  // Findings Group Recording Date (Trial)
  '0040A023': Element | undefined;
  // Findings Group Recording Time (Trial)
  '0040A024': Element | undefined;
  // Findings Source Category Code Sequence (Trial)
  '0040A026': Element | undefined;
  // Verifying Organization
  '0040A027': Element | undefined;
  // Documenting Organization Identifier Code Sequence (Trial)
  '0040A028': Element | undefined;
  // Verification DateTime
  '0040A030': Element | undefined;
  // Observation DateTime
  '0040A032': Element | undefined;
  // Value Type
  '0040A040': Element | undefined;
  // Concept Name Code Sequence
  '0040A043': Element | undefined;
  // Measurement Precision Description (Trial)
  '0040A047': Element | undefined;
  // Continuity Of Content
  '0040A050': Element | undefined;
  // Urgency or Priority Alerts (Trial)
  '0040A057': Element | undefined;
  // Sequencing Indicator (Trial)
  '0040A060': Element | undefined;
  // Document Identifier Code Sequence (Trial)
  '0040A066': Element | undefined;
  // Document Author (Trial)
  '0040A067': Element | undefined;
  // Document Author Identifier Code Sequence (Trial)
  '0040A068': Element | undefined;
  // Identifier Code Sequence (Trial)
  '0040A070': Element | undefined;
  // Verifying Observer Sequence
  '0040A073': Element | undefined;
  // Object Binary Identifier (Trial)
  '0040A074': Element | undefined;
  // Verifying Observer Name
  '0040A075': Element | undefined;
  // Documenting Observer Identifier Code Sequence (Trial)
  '0040A076': Element | undefined;
  // Author Observer Sequence
  '0040A078': Element | undefined;
  // Participant Sequence
  '0040A07A': Element | undefined;
  // Custodial Organization Sequence
  '0040A07C': Element | undefined;
  // Participation Type
  '0040A080': Element | undefined;
  // Participation DateTime
  '0040A082': Element | undefined;
  // Observer Type
  '0040A084': Element | undefined;
  // Procedure Identifier Code Sequence (Trial)
  '0040A085': Element | undefined;
  // Verifying Observer Identification Code Sequence
  '0040A088': Element | undefined;
  // Object Directory Binary Identifier (Trial)
  '0040A089': Element | undefined;
  // Equivalent CDA Document Sequence
  '0040A090': Element | undefined;
  // Referenced Waveform Channels
  '0040A0B0': Element | undefined;
  // Date of Document or Verbal Transaction (Trial)
  '0040A110': Element | undefined;
  // Time of Document Creation or Verbal Transaction (Trial)
  '0040A112': Element | undefined;
  // DateTime
  '0040A120': Element | undefined;
  // Date
  '0040A121': Element | undefined;
  // Time
  '0040A122': Element | undefined;
  // Person Name
  '0040A123': Element | undefined;
  // UID
  '0040A124': Element | undefined;
  // Report Status ID (Trial)
  '0040A125': Element | undefined;
  // Temporal Range Type
  '0040A130': Element | undefined;
  // Referenced Sample Positions
  '0040A132': Element | undefined;
  // Referenced Frame Numbers
  '0040A136': Element | undefined;
  // Referenced Time Offsets
  '0040A138': Element | undefined;
  // Referenced DateTime
  '0040A13A': Element | undefined;
  // Text Value
  '0040A160': Element | undefined;
  // Floating Point Value
  '0040A161': Element | undefined;
  // Rational Numerator Value
  '0040A162': Element | undefined;
  // Rational Denominator Value
  '0040A163': Element | undefined;
  // Observation Category Code Sequence (Trial)
  '0040A167': Element | undefined;
  // Concept Code Sequence
  '0040A168': Element | undefined;
  // Bibliographic Citation (Trial)
  '0040A16A': Element | undefined;
  // Purpose of Reference Code Sequence
  '0040A170': Element | undefined;
  // Observation UID
  '0040A171': Element | undefined;
  // Referenced Observation UID (Trial)
  '0040A172': Element | undefined;
  // Referenced Observation Class (Trial)
  '0040A173': Element | undefined;
  // Referenced Object Observation Class (Trial)
  '0040A174': Element | undefined;
  // Annotation Group Number
  '0040A180': Element | undefined;
  // Observation Date (Trial)
  '0040A192': Element | undefined;
  // Observation Time (Trial)
  '0040A193': Element | undefined;
  // Measurement Automation (Trial)
  '0040A194': Element | undefined;
  // Modifier Code Sequence
  '0040A195': Element | undefined;
  // Identification Description (Trial)
  '0040A224': Element | undefined;
  // Coordinates Set Geometric Type (Trial)
  '0040A290': Element | undefined;
  // Algorithm Code Sequence (Trial)
  '0040A296': Element | undefined;
  // Algorithm Description (Trial)
  '0040A297': Element | undefined;
  // Pixel Coordinates Set (Trial)
  '0040A29A': Element | undefined;
  // Measured Value Sequence
  '0040A300': Element | undefined;
  // Numeric Value Qualifier Code Sequence
  '0040A301': Element | undefined;
  // Current Observer (Trial)
  '0040A307': Element | undefined;
  // Numeric Value
  '0040A30A': Element | undefined;
  // Referenced Accession Sequence (Trial)
  '0040A313': Element | undefined;
  // Report Status Comment (Trial)
  '0040A33A': Element | undefined;
  // Procedure Context Sequence (Trial)
  '0040A340': Element | undefined;
  // Verbal Source (Trial)
  '0040A352': Element | undefined;
  // Address (Trial)
  '0040A353': Element | undefined;
  // Telephone Number (Trial)
  '0040A354': Element | undefined;
  // Verbal Source Identifier Code Sequence (Trial)
  '0040A358': Element | undefined;
  // Predecessor Documents Sequence
  '0040A360': Element | undefined;
  // Referenced Request Sequence
  '0040A370': Element | undefined;
  // Performed Procedure Code Sequence
  '0040A372': Element | undefined;
  // Current Requested Procedure Evidence Sequence
  '0040A375': Element | undefined;
  // Report Detail Sequence (Trial)
  '0040A380': Element | undefined;
  // Pertinent Other Evidence Sequence
  '0040A385': Element | undefined;
  // HL7 Structured Document Reference Sequence
  '0040A390': Element | undefined;
  // Observation Subject UID (Trial)
  '0040A402': Element | undefined;
  // Observation Subject Class (Trial)
  '0040A403': Element | undefined;
  // Observation Subject Type Code Sequence (Trial)
  '0040A404': Element | undefined;
  // Completion Flag
  '0040A491': Element | undefined;
  // Completion Flag Description
  '0040A492': Element | undefined;
  // Verification Flag
  '0040A493': Element | undefined;
  // Archive Requested
  '0040A494': Element | undefined;
  // Preliminary Flag
  '0040A496': Element | undefined;
  // Content Template Sequence
  '0040A504': Element | undefined;
  // Identical Documents Sequence
  '0040A525': Element | undefined;
  // Observation Subject Context Flag (Trial)
  '0040A600': Element | undefined;
  // Observer Context Flag (Trial)
  '0040A601': Element | undefined;
  // Procedure Context Flag (Trial)
  '0040A603': Element | undefined;
  // Content Sequence
  '0040A730': Element | undefined;
  // Relationship Sequence (Trial)
  '0040A731': Element | undefined;
  // Relationship Type Code Sequence (Trial)
  '0040A732': Element | undefined;
  // Language Code Sequence (Trial)
  '0040A744': Element | undefined;
  // Uniform Resource Locator (Trial)
  '0040A992': Element | undefined;
  // Waveform Annotation Sequence
  '0040B020': Element | undefined;
  // Template Identifier
  '0040DB00': Element | undefined;
  // Template Version
  '0040DB06': Element | undefined;
  // Template Local Version
  '0040DB07': Element | undefined;
  // Template Extension Flag
  '0040DB0B': Element | undefined;
  // Template Extension Organization UID
  '0040DB0C': Element | undefined;
  // Template Extension Creator UID
  '0040DB0D': Element | undefined;
  // Referenced Content Item Identifier
  '0040DB73': Element | undefined;
  // HL7 Instance Identifier
  '0040E001': Element | undefined;
  // HL7 Document Effective Time
  '0040E004': Element | undefined;
  // HL7 Document Type Code Sequence
  '0040E006': Element | undefined;
  // Document Class Code Sequence
  '0040E008': Element | undefined;
  // Retrieve URI
  '0040E010': Element | undefined;
  // Retrieve Location UID
  '0040E011': Element | undefined;
  // Type of Instances
  '0040E020': Element | undefined;
  // DICOM Retrieval Sequence
  '0040E021': Element | undefined;
  // DICOM Media Retrieval Sequence
  '0040E022': Element | undefined;
  // WADO Retrieval Sequence
  '0040E023': Element | undefined;
  // XDS Retrieval Sequence
  '0040E024': Element | undefined;
  // Repository Unique ID
  '0040E030': Element | undefined;
  // Home Community ID
  '0040E031': Element | undefined;
  // Document Title
  '00420010': Element | undefined;
  // Encapsulated Document
  '00420011': Element | undefined;
  // MIME Type of Encapsulated Document
  '00420012': Element | undefined;
  // Source Instance Sequence
  '00420013': Element | undefined;
  // List of MIME Types
  '00420014': Element | undefined;
  // Product Package Identifier
  '00440001': Element | undefined;
  // Substance Administration Approval
  '00440002': Element | undefined;
  // Approval Status Further Description
  '00440003': Element | undefined;
  // Approval Status DateTime
  '00440004': Element | undefined;
  // Product Type Code Sequence
  '00440007': Element | undefined;
  // Product Name
  '00440008': Element | undefined;
  // Product Description
  '00440009': Element | undefined;
  // Product Lot Identifier
  '0044000A': Element | undefined;
  // Product Expiration DateTime
  '0044000B': Element | undefined;
  // Substance Administration DateTime
  '00440010': Element | undefined;
  // Substance Administration Notes
  '00440011': Element | undefined;
  // Substance Administration Device ID
  '00440012': Element | undefined;
  // Product Parameter Sequence
  '00440013': Element | undefined;
  // Substance Administration Parameter Sequence
  '00440019': Element | undefined;
  // Lens Description
  '00460012': Element | undefined;
  // Right Lens Sequence
  '00460014': Element | undefined;
  // Left Lens Sequence
  '00460015': Element | undefined;
  // Unspecified Laterality Lens Sequence
  '00460016': Element | undefined;
  // Cylinder Sequence
  '00460018': Element | undefined;
  // Prism Sequence
  '00460028': Element | undefined;
  // Horizontal Prism Power
  '00460030': Element | undefined;
  // Horizontal Prism Base
  '00460032': Element | undefined;
  // Vertical Prism Power
  '00460034': Element | undefined;
  // Vertical Prism Base
  '00460036': Element | undefined;
  // Lens Segment Type
  '00460038': Element | undefined;
  // Optical Transmittance
  '00460040': Element | undefined;
  // Channel Width
  '00460042': Element | undefined;
  // Pupil Size
  '00460044': Element | undefined;
  // Corneal Size
  '00460046': Element | undefined;
  // Autorefraction Right Eye Sequence
  '00460050': Element | undefined;
  // Autorefraction Left Eye Sequence
  '00460052': Element | undefined;
  // Distance Pupillary Distance
  '00460060': Element | undefined;
  // Near Pupillary Distance
  '00460062': Element | undefined;
  // Intermediate Pupillary Distance
  '00460063': Element | undefined;
  // Other Pupillary Distance
  '00460064': Element | undefined;
  // Keratometry Right Eye Sequence
  '00460070': Element | undefined;
  // Keratometry Left Eye Sequence
  '00460071': Element | undefined;
  // Steep Keratometric Axis Sequence
  '00460074': Element | undefined;
  // Radius of Curvature
  '00460075': Element | undefined;
  // Keratometric Power
  '00460076': Element | undefined;
  // Keratometric Axis
  '00460077': Element | undefined;
  // Flat Keratometric Axis Sequence
  '00460080': Element | undefined;
  // Background Color
  '00460092': Element | undefined;
  // Optotype
  '00460094': Element | undefined;
  // Optotype Presentation
  '00460095': Element | undefined;
  // Subjective Refraction Right Eye Sequence
  '00460097': Element | undefined;
  // Subjective Refraction Left Eye Sequence
  '00460098': Element | undefined;
  // Add Near Sequence
  '00460100': Element | undefined;
  // Add Intermediate Sequence
  '00460101': Element | undefined;
  // Add Other Sequence
  '00460102': Element | undefined;
  // Add Power
  '00460104': Element | undefined;
  // Viewing Distance
  '00460106': Element | undefined;
  // Visual Acuity Type Code Sequence
  '00460121': Element | undefined;
  // Visual Acuity Right Eye Sequence
  '00460122': Element | undefined;
  // Visual Acuity Left Eye Sequence
  '00460123': Element | undefined;
  // Visual Acuity Both Eyes Open Sequence
  '00460124': Element | undefined;
  // Viewing Distance Type
  '00460125': Element | undefined;
  // Visual Acuity Modifiers
  '00460135': Element | undefined;
  // Decimal Visual Acuity
  '00460137': Element | undefined;
  // Optotype Detailed Definition
  '00460139': Element | undefined;
  // Referenced Refractive Measurements Sequence
  '00460145': Element | undefined;
  // Sphere Power
  '00460146': Element | undefined;
  // Cylinder Power
  '00460147': Element | undefined;
  // Corneal Topography Surface
  '00460201': Element | undefined;
  // Corneal Vertex Location
  '00460202': Element | undefined;
  // Pupil Centroid X-Coordinate
  '00460203': Element | undefined;
  // Pupil Centroid Y-Coordinate
  '00460204': Element | undefined;
  // Equivalent Pupil Radius
  '00460205': Element | undefined;
  // Corneal Topography Map Type Code Sequence
  '00460207': Element | undefined;
  // Vertices of the Outline of Pupil
  '00460208': Element | undefined;
  // Corneal Topography Mapping Normals Sequence
  '00460210': Element | undefined;
  // Maximum Corneal Curvature Sequence
  '00460211': Element | undefined;
  // Maximum Corneal Curvature
  '00460212': Element | undefined;
  // Maximum Corneal Curvature Location
  '00460213': Element | undefined;
  // Minimum Keratometric Sequence
  '00460215': Element | undefined;
  // Simulated Keratometric Cylinder Sequence
  '00460218': Element | undefined;
  // Average Corneal Power
  '00460220': Element | undefined;
  // Corneal I-S Value
  '00460224': Element | undefined;
  // Analyzed Area
  '00460227': Element | undefined;
  // Surface Regularity Index
  '00460230': Element | undefined;
  // Surface Asymmetry Index
  '00460232': Element | undefined;
  // Corneal Eccentricity Index
  '00460234': Element | undefined;
  // Keratoconus Prediction Index
  '00460236': Element | undefined;
  // Decimal Potential Visual Acuity
  '00460238': Element | undefined;
  // Corneal Topography Map Quality Evaluation
  '00460242': Element | undefined;
  // Source Image Corneal Processed Data Sequence
  '00460244': Element | undefined;
  // Corneal Point Location
  '00460247': Element | undefined;
  // Corneal Point Estimated
  '00460248': Element | undefined;
  // Axial Power
  '00460249': Element | undefined;
  // Tangential Power
  '00460250': Element | undefined;
  // Refractive Power
  '00460251': Element | undefined;
  // Relative Elevation
  '00460252': Element | undefined;
  // Corneal Wavefront
  '00460253': Element | undefined;
  // Imaged Volume Width
  '00480001': Element | undefined;
  // Imaged Volume Height
  '00480002': Element | undefined;
  // Imaged Volume Depth
  '00480003': Element | undefined;
  // Total Pixel Matrix Columns
  '00480006': Element | undefined;
  // Total Pixel Matrix Rows
  '00480007': Element | undefined;
  // Total Pixel Matrix Origin Sequence
  '00480008': Element | undefined;
  // Specimen Label in Image
  '00480010': Element | undefined;
  // Focus Method
  '00480011': Element | undefined;
  // Extended Depth of Field
  '00480012': Element | undefined;
  // Number of Focal Planes
  '00480013': Element | undefined;
  // Distance Between Focal Planes
  '00480014': Element | undefined;
  // Recommended Absent Pixel CIELab Value
  '00480015': Element | undefined;
  // Illuminator Type Code Sequence
  '00480100': Element | undefined;
  // Image Orientation (Slide)
  '00480102': Element | undefined;
  // Optical Path Sequence
  '00480105': Element | undefined;
  // Optical Path Identifier
  '00480106': Element | undefined;
  // Optical Path Description
  '00480107': Element | undefined;
  // Illumination Color Code Sequence
  '00480108': Element | undefined;
  // Specimen Reference Sequence
  '00480110': Element | undefined;
  // Condenser Lens Power
  '00480111': Element | undefined;
  // Objective Lens Power
  '00480112': Element | undefined;
  // Objective Lens Numerical Aperture
  '00480113': Element | undefined;
  // Palette Color Lookup Table Sequence
  '00480120': Element | undefined;
  // Referenced Image Navigation Sequence
  '00480200': Element | undefined;
  // Top Left Hand Corner of Localizer Area
  '00480201': Element | undefined;
  // Bottom Right Hand Corner of Localizer Area
  '00480202': Element | undefined;
  // Optical Path Identification Sequence
  '00480207': Element | undefined;
  // Plane Position (Slide) Sequence
  '0048021A': Element | undefined;
  // Column Position In Total Image Pixel Matrix
  '0048021E': Element | undefined;
  // Row Position In Total Image Pixel Matrix
  '0048021F': Element | undefined;
  // Pixel Origin Interpretation
  '00480301': Element | undefined;
  // Calibration Image
  '00500004': Element | undefined;
  // Device Sequence
  '00500010': Element | undefined;
  // Container Component Type Code Sequence
  '00500012': Element | undefined;
  // Container Component Thickness
  '00500013': Element | undefined;
  // Device Length
  '00500014': Element | undefined;
  // Container Component Width
  '00500015': Element | undefined;
  // Device Diameter
  '00500016': Element | undefined;
  // Device Diameter Units
  '00500017': Element | undefined;
  // Device Volume
  '00500018': Element | undefined;
  // Inter-Marker Distance
  '00500019': Element | undefined;
  // Container Component Material
  '0050001A': Element | undefined;
  // Container Component ID
  '0050001B': Element | undefined;
  // Container Component Length
  '0050001C': Element | undefined;
  // Container Component Diameter
  '0050001D': Element | undefined;
  // Container Component Description
  '0050001E': Element | undefined;
  // Device Description
  '00500020': Element | undefined;
  // Contrast/Bolus Ingredient Percent by Volume
  '00520001': Element | undefined;
  // OCT Focal Distance
  '00520002': Element | undefined;
  // Beam Spot Size
  '00520003': Element | undefined;
  // Effective Refractive Index
  '00520004': Element | undefined;
  // OCT Acquisition Domain
  '00520006': Element | undefined;
  // OCT Optical Center Wavelength
  '00520007': Element | undefined;
  // Axial Resolution
  '00520008': Element | undefined;
  // Ranging Depth
  '00520009': Element | undefined;
  // A-line Rate
  '00520011': Element | undefined;
  // A-lines Per Frame
  '00520012': Element | undefined;
  // Catheter Rotational Rate
  '00520013': Element | undefined;
  // A-line Pixel Spacing
  '00520014': Element | undefined;
  // Mode of Percutaneous Access Sequence
  '00520016': Element | undefined;
  // Intravascular OCT Frame Type Sequence
  '00520025': Element | undefined;
  // OCT Z Offset Applied
  '00520026': Element | undefined;
  // Intravascular Frame Content Sequence
  '00520027': Element | undefined;
  // Intravascular Longitudinal Distance
  '00520028': Element | undefined;
  // Intravascular OCT Frame Content Sequence
  '00520029': Element | undefined;
  // OCT Z Offset Correction
  '00520030': Element | undefined;
  // Catheter Direction of Rotation
  '00520031': Element | undefined;
  // Seam Line Location
  '00520033': Element | undefined;
  // First A-line Location
  '00520034': Element | undefined;
  // Seam Line Index
  '00520036': Element | undefined;
  // Number of Padded A-lines
  '00520038': Element | undefined;
  // Interpolation Type
  '00520039': Element | undefined;
  // Refractive Index Applied
  '0052003A': Element | undefined;
  // Energy Window Vector
  '00540010': Element | undefined;
  // Number of Energy Windows
  '00540011': Element | undefined;
  // Energy Window Information Sequence
  '00540012': Element | undefined;
  // Energy Window Range Sequence
  '00540013': Element | undefined;
  // Energy Window Lower Limit
  '00540014': Element | undefined;
  // Energy Window Upper Limit
  '00540015': Element | undefined;
  // Radiopharmaceutical Information Sequence
  '00540016': Element | undefined;
  // Residual Syringe Counts
  '00540017': Element | undefined;
  // Energy Window Name
  '00540018': Element | undefined;
  // Detector Vector
  '00540020': Element | undefined;
  // Number of Detectors
  '00540021': Element | undefined;
  // Detector Information Sequence
  '00540022': Element | undefined;
  // Phase Vector
  '00540030': Element | undefined;
  // Number of Phases
  '00540031': Element | undefined;
  // Phase Information Sequence
  '00540032': Element | undefined;
  // Number of Frames in Phase
  '00540033': Element | undefined;
  // Phase Delay
  '00540036': Element | undefined;
  // Pause Between Frames
  '00540038': Element | undefined;
  // Phase Description
  '00540039': Element | undefined;
  // Rotation Vector
  '00540050': Element | undefined;
  // Number of Rotations
  '00540051': Element | undefined;
  // Rotation Information Sequence
  '00540052': Element | undefined;
  // Number of Frames in Rotation
  '00540053': Element | undefined;
  // R-R Interval Vector
  '00540060': Element | undefined;
  // Number of R-R Intervals
  '00540061': Element | undefined;
  // Gated Information Sequence
  '00540062': Element | undefined;
  // Data Information Sequence
  '00540063': Element | undefined;
  // Time Slot Vector
  '00540070': Element | undefined;
  // Number of Time Slots
  '00540071': Element | undefined;
  // Time Slot Information Sequence
  '00540072': Element | undefined;
  // Time Slot Time
  '00540073': Element | undefined;
  // Slice Vector
  '00540080': Element | undefined;
  // Number of Slices
  '00540081': Element | undefined;
  // Angular View Vector
  '00540090': Element | undefined;
  // Time Slice Vector
  '00540100': Element | undefined;
  // Number of Time Slices
  '00540101': Element | undefined;
  // Start Angle
  '00540200': Element | undefined;
  // Type of Detector Motion
  '00540202': Element | undefined;
  // Trigger Vector
  '00540210': Element | undefined;
  // Number of Triggers in Phase
  '00540211': Element | undefined;
  // View Code Sequence
  '00540220': Element | undefined;
  // View Modifier Code Sequence
  '00540222': Element | undefined;
  // Radionuclide Code Sequence
  '00540300': Element | undefined;
  // Administration Route Code Sequence
  '00540302': Element | undefined;
  // Radiopharmaceutical Code Sequence
  '00540304': Element | undefined;
  // Calibration Data Sequence
  '00540306': Element | undefined;
  // Energy Window Number
  '00540308': Element | undefined;
  // Image ID
  '00540400': Element | undefined;
  // Patient Orientation Code Sequence
  '00540410': Element | undefined;
  // Patient Orientation Modifier Code Sequence
  '00540412': Element | undefined;
  // Patient Gantry Relationship Code Sequence
  '00540414': Element | undefined;
  // Slice Progression Direction
  '00540500': Element | undefined;
  // Scan Progression Direction
  '00540501': Element | undefined;
  // Series Type
  '00541000': Element | undefined;
  // Units
  '00541001': Element | undefined;
  // Counts Source
  '00541002': Element | undefined;
  // Reprojection Method
  '00541004': Element | undefined;
  // SUV Type
  '00541006': Element | undefined;
  // Randoms Correction Method
  '00541100': Element | undefined;
  // Attenuation Correction Method
  '00541101': Element | undefined;
  // Decay Correction
  '00541102': Element | undefined;
  // Reconstruction Method
  '00541103': Element | undefined;
  // Detector Lines of Response Used
  '00541104': Element | undefined;
  // Scatter Correction Method
  '00541105': Element | undefined;
  // Axial Acceptance
  '00541200': Element | undefined;
  // Axial Mash
  '00541201': Element | undefined;
  // Transverse Mash
  '00541202': Element | undefined;
  // Detector Element Size
  '00541203': Element | undefined;
  // Coincidence Window Width
  '00541210': Element | undefined;
  // Secondary Counts Type
  '00541220': Element | undefined;
  // Frame Reference Time
  '00541300': Element | undefined;
  // Primary (Prompts) Counts Accumulated
  '00541310': Element | undefined;
  // Secondary Counts Accumulated
  '00541311': Element | undefined;
  // Slice Sensitivity Factor
  '00541320': Element | undefined;
  // Decay Factor
  '00541321': Element | undefined;
  // Dose Calibration Factor
  '00541322': Element | undefined;
  // Scatter Fraction Factor
  '00541323': Element | undefined;
  // Dead Time Factor
  '00541324': Element | undefined;
  // Image Index
  '00541330': Element | undefined;
  // Counts Included
  '00541400': Element | undefined;
  // Dead Time Correction Flag
  '00541401': Element | undefined;
  // Histogram Sequence
  '00603000': Element | undefined;
  // Histogram Number of Bins
  '00603002': Element | undefined;
  // Histogram First Bin Value
  '00603004': Element | undefined;
  // Histogram Last Bin Value
  '00603006': Element | undefined;
  // Histogram Bin Width
  '00603008': Element | undefined;
  // Histogram Explanation
  '00603010': Element | undefined;
  // Histogram Data
  '00603020': Element | undefined;
  // Segmentation Type
  '00620001': Element | undefined;
  // Segment Sequence
  '00620002': Element | undefined;
  // Segmented Property Category Code Sequence
  '00620003': Element | undefined;
  // Segment Number
  '00620004': Element | undefined;
  // Segment Label
  '00620005': Element | undefined;
  // Segment Description
  '00620006': Element | undefined;
  // Segment Algorithm Type
  '00620008': Element | undefined;
  // Segment Algorithm Name
  '00620009': Element | undefined;
  // Segment Identification Sequence
  '0062000A': Element | undefined;
  // Referenced Segment Number
  '0062000B': Element | undefined;
  // Recommended Display Grayscale Value
  '0062000C': Element | undefined;
  // Recommended Display CIELab Value
  '0062000D': Element | undefined;
  // Maximum Fractional Value
  '0062000E': Element | undefined;
  // Segmented Property Type Code Sequence
  '0062000F': Element | undefined;
  // Segmentation Fractional Type
  '00620010': Element | undefined;
  // Segmented Property Type Modifier Code Sequence
  '00620011': Element | undefined;
  // Used Segments Sequence
  '00620012': Element | undefined;
  // Deformable Registration Sequence
  '00640002': Element | undefined;
  // Source Frame of Reference UID
  '00640003': Element | undefined;
  // Deformable Registration Grid Sequence
  '00640005': Element | undefined;
  // Grid Dimensions
  '00640007': Element | undefined;
  // Grid Resolution
  '00640008': Element | undefined;
  // Vector Grid Data
  '00640009': Element | undefined;
  // Pre Deformation Matrix Registration Sequence
  '0064000F': Element | undefined;
  // Post Deformation Matrix Registration Sequence
  '00640010': Element | undefined;
  // Number of Surfaces
  '00660001': Element | undefined;
  // Surface Sequence
  '00660002': Element | undefined;
  // Surface Number
  '00660003': Element | undefined;
  // Surface Comments
  '00660004': Element | undefined;
  // Surface Processing
  '00660009': Element | undefined;
  // Surface Processing Ratio
  '0066000A': Element | undefined;
  // Surface Processing Description
  '0066000B': Element | undefined;
  // Recommended Presentation Opacity
  '0066000C': Element | undefined;
  // Recommended Presentation Type
  '0066000D': Element | undefined;
  // Finite Volume
  '0066000E': Element | undefined;
  // Manifold
  '00660010': Element | undefined;
  // Surface Points Sequence
  '00660011': Element | undefined;
  // Surface Points Normals Sequence
  '00660012': Element | undefined;
  // Surface Mesh Primitives Sequence
  '00660013': Element | undefined;
  // Number of Surface Points
  '00660015': Element | undefined;
  // Point Coordinates Data
  '00660016': Element | undefined;
  // Point Position Accuracy
  '00660017': Element | undefined;
  // Mean Point Distance
  '00660018': Element | undefined;
  // Maximum Point Distance
  '00660019': Element | undefined;
  // Points Bounding Box Coordinates
  '0066001A': Element | undefined;
  // Axis of Rotation
  '0066001B': Element | undefined;
  // Center of Rotation
  '0066001C': Element | undefined;
  // Number of Vectors
  '0066001E': Element | undefined;
  // Vector Dimensionality
  '0066001F': Element | undefined;
  // Vector Accuracy
  '00660020': Element | undefined;
  // Vector Coordinate Data
  '00660021': Element | undefined;
  // Triangle Point Index List
  '00660023': Element | undefined;
  // Edge Point Index List
  '00660024': Element | undefined;
  // Vertex Point Index List
  '00660025': Element | undefined;
  // Triangle Strip Sequence
  '00660026': Element | undefined;
  // Triangle Fan Sequence
  '00660027': Element | undefined;
  // Line Sequence
  '00660028': Element | undefined;
  // Primitive Point Index List
  '00660029': Element | undefined;
  // Surface Count
  '0066002A': Element | undefined;
  // Referenced Surface Sequence
  '0066002B': Element | undefined;
  // Referenced Surface Number
  '0066002C': Element | undefined;
  // Segment Surface Generation Algorithm Identification Sequence
  '0066002D': Element | undefined;
  // Segment Surface Source Instance Sequence
  '0066002E': Element | undefined;
  // Algorithm Family Code Sequence
  '0066002F': Element | undefined;
  // Algorithm Name Code Sequence
  '00660030': Element | undefined;
  // Algorithm Version
  '00660031': Element | undefined;
  // Algorithm Parameters
  '00660032': Element | undefined;
  // Facet Sequence
  '00660034': Element | undefined;
  // Surface Processing Algorithm Identification Sequence
  '00660035': Element | undefined;
  // Algorithm Name
  '00660036': Element | undefined;
  // Recommended Point Radius
  '00660037': Element | undefined;
  // Recommended Line Thickness
  '00660038': Element | undefined;
  // Implant Size
  '00686210': Element | undefined;
  // Implant Template Version
  '00686221': Element | undefined;
  // Replaced Implant Template Sequence
  '00686222': Element | undefined;
  // Implant Type
  '00686223': Element | undefined;
  // Derivation Implant Template Sequence
  '00686224': Element | undefined;
  // Original Implant Template Sequence
  '00686225': Element | undefined;
  // Effective DateTime
  '00686226': Element | undefined;
  // Implant Target Anatomy Sequence
  '00686230': Element | undefined;
  // Information From Manufacturer Sequence
  '00686260': Element | undefined;
  // Notification From Manufacturer Sequence
  '00686265': Element | undefined;
  // Information Issue DateTime
  '00686270': Element | undefined;
  // Information Summary
  '00686280': Element | undefined;
  // Implant Regulatory Disapproval Code Sequence
  '006862A0': Element | undefined;
  // Overall Template Spatial Tolerance
  '006862A5': Element | undefined;
  // HPGL Document Sequence
  '006862C0': Element | undefined;
  // HPGL Document ID
  '006862D0': Element | undefined;
  // HPGL Document Label
  '006862D5': Element | undefined;
  // View Orientation Code Sequence
  '006862E0': Element | undefined;
  // View Orientation Modifier
  '006862F0': Element | undefined;
  // HPGL Document Scaling
  '006862F2': Element | undefined;
  // HPGL Document
  '00686300': Element | undefined;
  // HPGL Contour Pen Number
  '00686310': Element | undefined;
  // HPGL Pen Sequence
  '00686320': Element | undefined;
  // HPGL Pen Number
  '00686330': Element | undefined;
  // HPGL Pen Label
  '00686340': Element | undefined;
  // HPGL Pen Description
  '00686345': Element | undefined;
  // Recommended Rotation Point
  '00686346': Element | undefined;
  // Bounding Rectangle
  '00686347': Element | undefined;
  // Implant Template 3D Model Surface Number
  '00686350': Element | undefined;
  // Surface Model Description Sequence
  '00686360': Element | undefined;
  // Surface Model Label
  '00686380': Element | undefined;
  // Surface Model Scaling Factor
  '00686390': Element | undefined;
  // Materials Code Sequence
  '006863A0': Element | undefined;
  // Coating Materials Code Sequence
  '006863A4': Element | undefined;
  // Implant Type Code Sequence
  '006863A8': Element | undefined;
  // Fixation Method Code Sequence
  '006863AC': Element | undefined;
  // Mating Feature Sets Sequence
  '006863B0': Element | undefined;
  // Mating Feature Set ID
  '006863C0': Element | undefined;
  // Mating Feature Set Label
  '006863D0': Element | undefined;
  // Mating Feature Sequence
  '006863E0': Element | undefined;
  // Mating Feature ID
  '006863F0': Element | undefined;
  // Mating Feature Degree of Freedom Sequence
  '00686400': Element | undefined;
  // Degree of Freedom ID
  '00686410': Element | undefined;
  // Degree of Freedom Type
  '00686420': Element | undefined;
  // 2D Mating Feature Coordinates Sequence
  '00686430': Element | undefined;
  // Referenced HPGL Document ID
  '00686440': Element | undefined;
  // 2D Mating Point
  '00686450': Element | undefined;
  // 2D Mating Axes
  '00686460': Element | undefined;
  // 2D Degree of Freedom Sequence
  '00686470': Element | undefined;
  // 3D Degree of Freedom Axis
  '00686490': Element | undefined;
  // Range of Freedom
  '006864A0': Element | undefined;
  // 3D Mating Point
  '006864C0': Element | undefined;
  // 3D Mating Axes
  '006864D0': Element | undefined;
  // 2D Degree of Freedom Axis
  '006864F0': Element | undefined;
  // Planning Landmark Point Sequence
  '00686500': Element | undefined;
  // Planning Landmark Line Sequence
  '00686510': Element | undefined;
  // Planning Landmark Plane Sequence
  '00686520': Element | undefined;
  // Planning Landmark ID
  '00686530': Element | undefined;
  // Planning Landmark Description
  '00686540': Element | undefined;
  // Planning Landmark Identification Code Sequence
  '00686545': Element | undefined;
  // 2D Point Coordinates Sequence
  '00686550': Element | undefined;
  // 2D Point Coordinates
  '00686560': Element | undefined;
  // 3D Point Coordinates
  '00686590': Element | undefined;
  // 2D Line Coordinates Sequence
  '006865A0': Element | undefined;
  // 2D Line Coordinates
  '006865B0': Element | undefined;
  // 3D Line Coordinates
  '006865D0': Element | undefined;
  // 2D Plane Coordinates Sequence
  '006865E0': Element | undefined;
  // 2D Plane Intersection
  '006865F0': Element | undefined;
  // 3D Plane Origin
  '00686610': Element | undefined;
  // 3D Plane Normal
  '00686620': Element | undefined;
  // Graphic Annotation Sequence
  '00700001': Element | undefined;
  // Graphic Layer
  '00700002': Element | undefined;
  // Bounding Box Annotation Units
  '00700003': Element | undefined;
  // Anchor Point Annotation Units
  '00700004': Element | undefined;
  // Graphic Annotation Units
  '00700005': Element | undefined;
  // Unformatted Text Value
  '00700006': Element | undefined;
  // Text Object Sequence
  '00700008': Element | undefined;
  // Graphic Object Sequence
  '00700009': Element | undefined;
  // Bounding Box Top Left Hand Corner
  '00700010': Element | undefined;
  // Bounding Box Bottom Right Hand Corner
  '00700011': Element | undefined;
  // Bounding Box Text Horizontal Justification
  '00700012': Element | undefined;
  // Anchor Point
  '00700014': Element | undefined;
  // Anchor Point Visibility
  '00700015': Element | undefined;
  // Graphic Dimensions
  '00700020': Element | undefined;
  // Number of Graphic Points
  '00700021': Element | undefined;
  // Graphic Data
  '00700022': Element | undefined;
  // Graphic Type
  '00700023': Element | undefined;
  // Graphic Filled
  '00700024': Element | undefined;
  // Image Rotation (Retired)
  '00700040': Element | undefined;
  // Image Horizontal Flip
  '00700041': Element | undefined;
  // Image Rotation
  '00700042': Element | undefined;
  // Displayed Area Top Left Hand Corner (Trial)
  '00700050': Element | undefined;
  // Displayed Area Bottom Right Hand Corner (Trial)
  '00700051': Element | undefined;
  // Displayed Area Top Left Hand Corner
  '00700052': Element | undefined;
  // Displayed Area Bottom Right Hand Corner
  '00700053': Element | undefined;
  // Displayed Area Selection Sequence
  '0070005A': Element | undefined;
  // Graphic Layer Sequence
  '00700060': Element | undefined;
  // Graphic Layer Order
  '00700062': Element | undefined;
  // Graphic Layer Recommended Display Grayscale Value
  '00700066': Element | undefined;
  // Graphic Layer Recommended Display RGB Value
  '00700067': Element | undefined;
  // Graphic Layer Description
  '00700068': Element | undefined;
  // Content Label
  '00700080': Element | undefined;
  // Content Description
  '00700081': Element | undefined;
  // Presentation Creation Date
  '00700082': Element | undefined;
  // Presentation Creation Time
  '00700083': Element | undefined;
  // Content Creator's Name
  '00700084': Element | undefined;
  // Content Creator's Identification Code Sequence
  '00700086': Element | undefined;
  // Alternate Content Description Sequence
  '00700087': Element | undefined;
  // Presentation Size Mode
  '00700100': Element | undefined;
  // Presentation Pixel Spacing
  '00700101': Element | undefined;
  // Presentation Pixel Aspect Ratio
  '00700102': Element | undefined;
  // Presentation Pixel Magnification Ratio
  '00700103': Element | undefined;
  // Graphic Group Label
  '00700207': Element | undefined;
  // Graphic Group Description
  '00700208': Element | undefined;
  // Compound Graphic Sequence
  '00700209': Element | undefined;
  // Compound Graphic Instance ID
  '00700226': Element | undefined;
  // Font Name
  '00700227': Element | undefined;
  // Font Name Type
  '00700228': Element | undefined;
  // CSS Font Name
  '00700229': Element | undefined;
  // Rotation Angle
  '00700230': Element | undefined;
  // Text Style Sequence
  '00700231': Element | undefined;
  // Line Style Sequence
  '00700232': Element | undefined;
  // Fill Style Sequence
  '00700233': Element | undefined;
  // Graphic Group Sequence
  '00700234': Element | undefined;
  // Text Color CIELab Value
  '00700241': Element | undefined;
  // Horizontal Alignment
  '00700242': Element | undefined;
  // Vertical Alignment
  '00700243': Element | undefined;
  // Shadow Style
  '00700244': Element | undefined;
  // Shadow Offset X
  '00700245': Element | undefined;
  // Shadow Offset Y
  '00700246': Element | undefined;
  // Shadow Color CIELab Value
  '00700247': Element | undefined;
  // Underlined
  '00700248': Element | undefined;
  // Bold
  '00700249': Element | undefined;
  // Italic
  '00700250': Element | undefined;
  // Pattern On Color CIELab Value
  '00700251': Element | undefined;
  // Pattern Off Color CIELab Value
  '00700252': Element | undefined;
  // Line Thickness
  '00700253': Element | undefined;
  // Line Dashing Style
  '00700254': Element | undefined;
  // Line Pattern
  '00700255': Element | undefined;
  // Fill Pattern
  '00700256': Element | undefined;
  // Fill Mode
  '00700257': Element | undefined;
  // Shadow Opacity
  '00700258': Element | undefined;
  // Gap Length
  '00700261': Element | undefined;
  // Diameter of Visibility
  '00700262': Element | undefined;
  // Rotation Point
  '00700273': Element | undefined;
  // Tick Alignment
  '00700274': Element | undefined;
  // Show Tick Label
  '00700278': Element | undefined;
  // Tick Label Alignment
  '00700279': Element | undefined;
  // Compound Graphic Units
  '00700282': Element | undefined;
  // Pattern On Opacity
  '00700284': Element | undefined;
  // Pattern Off Opacity
  '00700285': Element | undefined;
  // Major Ticks Sequence
  '00700287': Element | undefined;
  // Tick Position
  '00700288': Element | undefined;
  // Tick Label
  '00700289': Element | undefined;
  // Compound Graphic Type
  '00700294': Element | undefined;
  // Graphic Group ID
  '00700295': Element | undefined;
  // Shape Type
  '00700306': Element | undefined;
  // Registration Sequence
  '00700308': Element | undefined;
  // Matrix Registration Sequence
  '00700309': Element | undefined;
  // Matrix Sequence
  '0070030A': Element | undefined;
  // Frame of Reference Transformation Matrix Type
  '0070030C': Element | undefined;
  // Registration Type Code Sequence
  '0070030D': Element | undefined;
  // Fiducial Description
  '0070030F': Element | undefined;
  // Fiducial Identifier
  '00700310': Element | undefined;
  // Fiducial Identifier Code Sequence
  '00700311': Element | undefined;
  // Contour Uncertainty Radius
  '00700312': Element | undefined;
  // Used Fiducials Sequence
  '00700314': Element | undefined;
  // Graphic Coordinates Data Sequence
  '00700318': Element | undefined;
  // Fiducial UID
  '0070031A': Element | undefined;
  // Fiducial Set Sequence
  '0070031C': Element | undefined;
  // Fiducial Sequence
  '0070031E': Element | undefined;
  // Graphic Layer Recommended Display CIELab Value
  '00700401': Element | undefined;
  // Blending Sequence
  '00700402': Element | undefined;
  // Relative Opacity
  '00700403': Element | undefined;
  // Referenced Spatial Registration Sequence
  '00700404': Element | undefined;
  // Blending Position
  '00700405': Element | undefined;
  // Hanging Protocol Name
  '00720002': Element | undefined;
  // Hanging Protocol Description
  '00720004': Element | undefined;
  // Hanging Protocol Level
  '00720006': Element | undefined;
  // Hanging Protocol Creator
  '00720008': Element | undefined;
  // Hanging Protocol Creation DateTime
  '0072000A': Element | undefined;
  // Hanging Protocol Definition Sequence
  '0072000C': Element | undefined;
  // Hanging Protocol User Identification Code Sequence
  '0072000E': Element | undefined;
  // Hanging Protocol User Group Name
  '00720010': Element | undefined;
  // Source Hanging Protocol Sequence
  '00720012': Element | undefined;
  // Number of Priors Referenced
  '00720014': Element | undefined;
  // Image Sets Sequence
  '00720020': Element | undefined;
  // Image Set Selector Sequence
  '00720022': Element | undefined;
  // Image Set Selector Usage Flag
  '00720024': Element | undefined;
  // Selector Attribute
  '00720026': Element | undefined;
  // Selector Value Number
  '00720028': Element | undefined;
  // Time Based Image Sets Sequence
  '00720030': Element | undefined;
  // Image Set Number
  '00720032': Element | undefined;
  // Image Set Selector Category
  '00720034': Element | undefined;
  // Relative Time
  '00720038': Element | undefined;
  // Relative Time Units
  '0072003A': Element | undefined;
  // Abstract Prior Value
  '0072003C': Element | undefined;
  // Abstract Prior Code Sequence
  '0072003E': Element | undefined;
  // Image Set Label
  '00720040': Element | undefined;
  // Selector Attribute VR
  '00720050': Element | undefined;
  // Selector Sequence Pointer
  '00720052': Element | undefined;
  // Selector Sequence Pointer Private Creator
  '00720054': Element | undefined;
  // Selector Attribute Private Creator
  '00720056': Element | undefined;
  // Selector AT Value
  '00720060': Element | undefined;
  // Selector CS Value
  '00720062': Element | undefined;
  // Selector IS Value
  '00720064': Element | undefined;
  // Selector LO Value
  '00720066': Element | undefined;
  // Selector LT Value
  '00720068': Element | undefined;
  // Selector PN Value
  '0072006A': Element | undefined;
  // Selector SH Value
  '0072006C': Element | undefined;
  // Selector ST Value
  '0072006E': Element | undefined;
  // Selector UT Value
  '00720070': Element | undefined;
  // Selector DS Value
  '00720072': Element | undefined;
  // Selector FD Value
  '00720074': Element | undefined;
  // Selector FL Value
  '00720076': Element | undefined;
  // Selector UL Value
  '00720078': Element | undefined;
  // Selector US Value
  '0072007A': Element | undefined;
  // Selector SL Value
  '0072007C': Element | undefined;
  // Selector SS Value
  '0072007E': Element | undefined;
  // Selector Code Sequence Value
  '00720080': Element | undefined;
  // Number of Screens
  '00720100': Element | undefined;
  // Nominal Screen Definition Sequence
  '00720102': Element | undefined;
  // Number of Vertical Pixels
  '00720104': Element | undefined;
  // Number of Horizontal Pixels
  '00720106': Element | undefined;
  // Display Environment Spatial Position
  '00720108': Element | undefined;
  // Screen Minimum Grayscale Bit Depth
  '0072010A': Element | undefined;
  // Screen Minimum Color Bit Depth
  '0072010C': Element | undefined;
  // Application Maximum Repaint Time
  '0072010E': Element | undefined;
  // Display Sets Sequence
  '00720200': Element | undefined;
  // Display Set Number
  '00720202': Element | undefined;
  // Display Set Label
  '00720203': Element | undefined;
  // Display Set Presentation Group
  '00720204': Element | undefined;
  // Display Set Presentation Group Description
  '00720206': Element | undefined;
  // Partial Data Display Handling
  '00720208': Element | undefined;
  // Synchronized Scrolling Sequence
  '00720210': Element | undefined;
  // Display Set Scrolling Group
  '00720212': Element | undefined;
  // Navigation Indicator Sequence
  '00720214': Element | undefined;
  // Navigation Display Set
  '00720216': Element | undefined;
  // Reference Display Sets
  '00720218': Element | undefined;
  // Image Boxes Sequence
  '00720300': Element | undefined;
  // Image Box Number
  '00720302': Element | undefined;
  // Image Box Layout Type
  '00720304': Element | undefined;
  // Image Box Tile Horizontal Dimension
  '00720306': Element | undefined;
  // Image Box Tile Vertical Dimension
  '00720308': Element | undefined;
  // Image Box Scroll Direction
  '00720310': Element | undefined;
  // Image Box Small Scroll Type
  '00720312': Element | undefined;
  // Image Box Small Scroll Amount
  '00720314': Element | undefined;
  // Image Box Large Scroll Type
  '00720316': Element | undefined;
  // Image Box Large Scroll Amount
  '00720318': Element | undefined;
  // Image Box Overlap Priority
  '00720320': Element | undefined;
  // Cine Relative to Real-Time
  '00720330': Element | undefined;
  // Filter Operations Sequence
  '00720400': Element | undefined;
  // Filter-by Category
  '00720402': Element | undefined;
  // Filter-by Attribute Presence
  '00720404': Element | undefined;
  // Filter-by Operator
  '00720406': Element | undefined;
  // Structured Display Background CIELab Value
  '00720420': Element | undefined;
  // Empty Image Box CIELab Value
  '00720421': Element | undefined;
  // Structured Display Image Box Sequence
  '00720422': Element | undefined;
  // Structured Display Text Box Sequence
  '00720424': Element | undefined;
  // Referenced First Frame Sequence
  '00720427': Element | undefined;
  // Image Box Synchronization Sequence
  '00720430': Element | undefined;
  // Synchronized Image Box List
  '00720432': Element | undefined;
  // Type of Synchronization
  '00720434': Element | undefined;
  // Blending Operation Type
  '00720500': Element | undefined;
  // Reformatting Operation Type
  '00720510': Element | undefined;
  // Reformatting Thickness
  '00720512': Element | undefined;
  // Reformatting Interval
  '00720514': Element | undefined;
  // Reformatting Operation Initial View Direction
  '00720516': Element | undefined;
  // 3D Rendering Type
  '00720520': Element | undefined;
  // Sorting Operations Sequence
  '00720600': Element | undefined;
  // Sort-by Category
  '00720602': Element | undefined;
  // Sorting Direction
  '00720604': Element | undefined;
  // Display Set Patient Orientation
  '00720700': Element | undefined;
  // VOI Type
  '00720702': Element | undefined;
  // Pseudo-Color Type
  '00720704': Element | undefined;
  // Pseudo-Color Palette Instance Reference Sequence
  '00720705': Element | undefined;
  // Show Grayscale Inverted
  '00720706': Element | undefined;
  // Show Image True Size Flag
  '00720710': Element | undefined;
  // Show Graphic Annotation Flag
  '00720712': Element | undefined;
  // Show Patient Demographics Flag
  '00720714': Element | undefined;
  // Show Acquisition Techniques Flag
  '00720716': Element | undefined;
  // Display Set Horizontal Justification
  '00720717': Element | undefined;
  // Display Set Vertical Justification
  '00720718': Element | undefined;
  // Continuation Start Meterset
  '00740120': Element | undefined;
  // Continuation End Meterset
  '00740121': Element | undefined;
  // Procedure Step State
  '00741000': Element | undefined;
  // Procedure Step Progress Information Sequence
  '00741002': Element | undefined;
  // Procedure Step Progress
  '00741004': Element | undefined;
  // Procedure Step Progress Description
  '00741006': Element | undefined;
  // Procedure Step Communications URI Sequence
  '00741008': Element | undefined;
  // Contact URI
  '0074100A': Element | undefined;
  // Contact Display Name
  '0074100C': Element | undefined;
  // Procedure Step Discontinuation Reason Code Sequence
  '0074100E': Element | undefined;
  // Beam Task Sequence
  '00741020': Element | undefined;
  // Beam Task Type
  '00741022': Element | undefined;
  // Beam Order Index (Trial)
  '00741024': Element | undefined;
  // Autosequence Flag
  '00741025': Element | undefined;
  // Table Top Vertical Adjusted Position
  '00741026': Element | undefined;
  // Table Top Longitudinal Adjusted Position
  '00741027': Element | undefined;
  // Table Top Lateral Adjusted Position
  '00741028': Element | undefined;
  // Patient Support Adjusted Angle
  '0074102A': Element | undefined;
  // Table Top Eccentric Adjusted Angle
  '0074102B': Element | undefined;
  // Table Top Pitch Adjusted Angle
  '0074102C': Element | undefined;
  // Table Top Roll Adjusted Angle
  '0074102D': Element | undefined;
  // Delivery Verification Image Sequence
  '00741030': Element | undefined;
  // Verification Image Timing
  '00741032': Element | undefined;
  // Double Exposure Flag
  '00741034': Element | undefined;
  // Double Exposure Ordering
  '00741036': Element | undefined;
  // Double Exposure Meterset (Trial)
  '00741038': Element | undefined;
  // Double Exposure Field Delta (Trial)
  '0074103A': Element | undefined;
  // Related Reference RT Image Sequence
  '00741040': Element | undefined;
  // General Machine Verification Sequence
  '00741042': Element | undefined;
  // Conventional Machine Verification Sequence
  '00741044': Element | undefined;
  // Ion Machine Verification Sequence
  '00741046': Element | undefined;
  // Failed Attributes Sequence
  '00741048': Element | undefined;
  // Overridden Attributes Sequence
  '0074104A': Element | undefined;
  // Conventional Control Point Verification Sequence
  '0074104C': Element | undefined;
  // Ion Control Point Verification Sequence
  '0074104E': Element | undefined;
  // Attribute Occurrence Sequence
  '00741050': Element | undefined;
  // Attribute Occurrence Pointer
  '00741052': Element | undefined;
  // Attribute Item Selector
  '00741054': Element | undefined;
  // Attribute Occurrence Private Creator
  '00741056': Element | undefined;
  // Selector Sequence Pointer Items
  '00741057': Element | undefined;
  // Scheduled Procedure Step Priority
  '00741200': Element | undefined;
  // Worklist Label
  '00741202': Element | undefined;
  // Procedure Step Label
  '00741204': Element | undefined;
  // Scheduled Processing Parameters Sequence
  '00741210': Element | undefined;
  // Performed Processing Parameters Sequence
  '00741212': Element | undefined;
  // Unified Procedure Step Performed Procedure Sequence
  '00741216': Element | undefined;
  // Related Procedure Step Sequence
  '00741220': Element | undefined;
  // Procedure Step Relationship Type
  '00741222': Element | undefined;
  // Replaced Procedure Step Sequence
  '00741224': Element | undefined;
  // Deletion Lock
  '00741230': Element | undefined;
  // Receiving AE
  '00741234': Element | undefined;
  // Requesting AE
  '00741236': Element | undefined;
  // Reason for Cancellation
  '00741238': Element | undefined;
  // SCP Status
  '00741242': Element | undefined;
  // Subscription List Status
  '00741244': Element | undefined;
  // Unified Procedure Step List Status
  '00741246': Element | undefined;
  // Beam Order Index
  '00741324': Element | undefined;
  // Double Exposure Meterset
  '00741338': Element | undefined;
  // Double Exposure Field Delta
  '0074133A': Element | undefined;
  // Implant Assembly Template Name
  '00760001': Element | undefined;
  // Implant Assembly Template Issuer
  '00760003': Element | undefined;
  // Implant Assembly Template Version
  '00760006': Element | undefined;
  // Replaced Implant Assembly Template Sequence
  '00760008': Element | undefined;
  // Implant Assembly Template Type
  '0076000A': Element | undefined;
  // Original Implant Assembly Template Sequence
  '0076000C': Element | undefined;
  // Derivation Implant Assembly Template Sequence
  '0076000E': Element | undefined;
  // Implant Assembly Template Target Anatomy Sequence
  '00760010': Element | undefined;
  // Procedure Type Code Sequence
  '00760020': Element | undefined;
  // Surgical Technique
  '00760030': Element | undefined;
  // Component Types Sequence
  '00760032': Element | undefined;
  // Component Type Code Sequence
  '00760034': Element | undefined;
  // Exclusive Component Type
  '00760036': Element | undefined;
  // Mandatory Component Type
  '00760038': Element | undefined;
  // Component Sequence
  '00760040': Element | undefined;
  // Component ID
  '00760055': Element | undefined;
  // Component Assembly Sequence
  '00760060': Element | undefined;
  // Component 1 Referenced ID
  '00760070': Element | undefined;
  // Component 1 Referenced Mating Feature Set ID
  '00760080': Element | undefined;
  // Component 1 Referenced Mating Feature ID
  '00760090': Element | undefined;
  // Component 2 Referenced ID
  '007600A0': Element | undefined;
  // Component 2 Referenced Mating Feature Set ID
  '007600B0': Element | undefined;
  // Component 2 Referenced Mating Feature ID
  '007600C0': Element | undefined;
  // Implant Template Group Name
  '00780001': Element | undefined;
  // Implant Template Group Description
  '00780010': Element | undefined;
  // Implant Template Group Issuer
  '00780020': Element | undefined;
  // Implant Template Group Version
  '00780024': Element | undefined;
  // Replaced Implant Template Group Sequence
  '00780026': Element | undefined;
  // Implant Template Group Target Anatomy Sequence
  '00780028': Element | undefined;
  // Implant Template Group Members Sequence
  '0078002A': Element | undefined;
  // Implant Template Group Member ID
  '0078002E': Element | undefined;
  // 3D Implant Template Group Member Matching Point
  '00780050': Element | undefined;
  // 3D Implant Template Group Member Matching Axes
  '00780060': Element | undefined;
  // Implant Template Group Member Matching 2D Coordinates Sequence
  '00780070': Element | undefined;
  // 2D Implant Template Group Member Matching Point
  '00780090': Element | undefined;
  // 2D Implant Template Group Member Matching Axes
  '007800A0': Element | undefined;
  // Implant Template Group Variation Dimension Sequence
  '007800B0': Element | undefined;
  // Implant Template Group Variation Dimension Name
  '007800B2': Element | undefined;
  // Implant Template Group Variation Dimension Rank Sequence
  '007800B4': Element | undefined;
  // Referenced Implant Template Group Member ID
  '007800B6': Element | undefined;
  // Implant Template Group Variation Dimension Rank
  '007800B8': Element | undefined;
  // Surface Scan Acquisition Type Code Sequence
  '00800001': Element | undefined;
  // Surface Scan Mode Code Sequence
  '00800002': Element | undefined;
  // Registration Method Code Sequence
  '00800003': Element | undefined;
  // Shot Duration Time
  '00800004': Element | undefined;
  // Shot Offset Time
  '00800005': Element | undefined;
  // Surface Point Presentation Value Data
  '00800006': Element | undefined;
  // Surface Point Color CIELab Value Data
  '00800007': Element | undefined;
  // UV Mapping Sequence
  '00800008': Element | undefined;
  // Texture Label
  '00800009': Element | undefined;
  // U Value Data
  '00800010': Element | undefined;
  // V Value Data
  '00800011': Element | undefined;
  // Referenced Texture Sequence
  '00800012': Element | undefined;
  // Referenced Surface Data Sequence
  '00800013': Element | undefined;
  // Storage Media File-set ID
  '00880130': Element | undefined;
  // Storage Media File-set UID
  '00880140': Element | undefined;
  // Icon Image Sequence
  '00880200': Element | undefined;
  // Topic Title
  '00880904': Element | undefined;
  // Topic Subject
  '00880906': Element | undefined;
  // Topic Author
  '00880910': Element | undefined;
  // Topic Keywords
  '00880912': Element | undefined;
  // SOP Instance Status
  '01000410': Element | undefined;
  // SOP Authorization DateTime
  '01000420': Element | undefined;
  // SOP Authorization Comment
  '01000424': Element | undefined;
  // Authorization Equipment Certification Number
  '01000426': Element | undefined;
  // MAC ID Number
  '04000005': Element | undefined;
  // MAC Calculation Transfer Syntax UID
  '04000010': Element | undefined;
  // MAC Algorithm
  '04000015': Element | undefined;
  // Data Elements Signed
  '04000020': Element | undefined;
  // Digital Signature UID
  '04000100': Element | undefined;
  // Digital Signature DateTime
  '04000105': Element | undefined;
  // Certificate Type
  '04000110': Element | undefined;
  // Certificate of Signer
  '04000115': Element | undefined;
  // Signature
  '04000120': Element | undefined;
  // Certified Timestamp Type
  '04000305': Element | undefined;
  // Certified Timestamp
  '04000310': Element | undefined;
  // Digital Signature Purpose Code Sequence
  '04000401': Element | undefined;
  // Referenced Digital Signature Sequence
  '04000402': Element | undefined;
  // Referenced SOP Instance MAC Sequence
  '04000403': Element | undefined;
  // MAC
  '04000404': Element | undefined;
  // Encrypted Attributes Sequence
  '04000500': Element | undefined;
  // Encrypted Content Transfer Syntax UID
  '04000510': Element | undefined;
  // Encrypted Content
  '04000520': Element | undefined;
  // Modified Attributes Sequence
  '04000550': Element | undefined;
  // Original Attributes Sequence
  '04000561': Element | undefined;
  // Attribute Modification DateTime
  '04000562': Element | undefined;
  // Modifying System
  '04000563': Element | undefined;
  // Source of Previous Values
  '04000564': Element | undefined;
  // Reason for the Attribute Modification
  '04000565': Element | undefined;
  // Escape Triplet
  '1000XXX0': Element | undefined;
  // Run Length Triplet
  '1000XXX1': Element | undefined;
  // Huffman Table Size
  '1000XXX2': Element | undefined;
  // Huffman Table Triplet
  '1000XXX3': Element | undefined;
  // Shift Table Size
  '1000XXX4': Element | undefined;
  // Shift Table Triplet
  '1000XXX5': Element | undefined;
  // Zonal Map
  '1010XXXX': Element | undefined;
  // Number of Copies
  '20000010': Element | undefined;
  // Printer Configuration Sequence
  '2000001E': Element | undefined;
  // Print Priority
  '20000020': Element | undefined;
  // Medium Type
  '20000030': Element | undefined;
  // Film Destination
  '20000040': Element | undefined;
  // Film Session Label
  '20000050': Element | undefined;
  // Memory Allocation
  '20000060': Element | undefined;
  // Maximum Memory Allocation
  '20000061': Element | undefined;
  // Color Image Printing Flag
  '20000062': Element | undefined;
  // Collation Flag
  '20000063': Element | undefined;
  // Annotation Flag
  '20000065': Element | undefined;
  // Image Overlay Flag
  '20000067': Element | undefined;
  // Presentation LUT Flag
  '20000069': Element | undefined;
  // Image Box Presentation LUT Flag
  '2000006A': Element | undefined;
  // Memory Bit Depth
  '200000A0': Element | undefined;
  // Printing Bit Depth
  '200000A1': Element | undefined;
  // Media Installed Sequence
  '200000A2': Element | undefined;
  // Other Media Available Sequence
  '200000A4': Element | undefined;
  // Supported Image Display Formats Sequence
  '200000A8': Element | undefined;
  // Referenced Film Box Sequence
  '20000500': Element | undefined;
  // Referenced Stored Print Sequence
  '20000510': Element | undefined;
  // Image Display Format
  '20100010': Element | undefined;
  // Annotation Display Format ID
  '20100030': Element | undefined;
  // Film Orientation
  '20100040': Element | undefined;
  // Film Size ID
  '20100050': Element | undefined;
  // Printer Resolution ID
  '20100052': Element | undefined;
  // Default Printer Resolution ID
  '20100054': Element | undefined;
  // Magnification Type
  '20100060': Element | undefined;
  // Smoothing Type
  '20100080': Element | undefined;
  // Default Magnification Type
  '201000A6': Element | undefined;
  // Other Magnification Types Available
  '201000A7': Element | undefined;
  // Default Smoothing Type
  '201000A8': Element | undefined;
  // Other Smoothing Types Available
  '201000A9': Element | undefined;
  // Border Density
  '20100100': Element | undefined;
  // Empty Image Density
  '20100110': Element | undefined;
  // Min Density
  '20100120': Element | undefined;
  // Max Density
  '20100130': Element | undefined;
  // Trim
  '20100140': Element | undefined;
  // Configuration Information
  '20100150': Element | undefined;
  // Configuration Information Description
  '20100152': Element | undefined;
  // Maximum Collated Films
  '20100154': Element | undefined;
  // Illumination
  '2010015E': Element | undefined;
  // Reflected Ambient Light
  '20100160': Element | undefined;
  // Printer Pixel Spacing
  '20100376': Element | undefined;
  // Referenced Film Session Sequence
  '20100500': Element | undefined;
  // Referenced Image Box Sequence
  '20100510': Element | undefined;
  // Referenced Basic Annotation Box Sequence
  '20100520': Element | undefined;
  // Image Box Position
  '20200010': Element | undefined;
  // Polarity
  '20200020': Element | undefined;
  // Requested Image Size
  '20200030': Element | undefined;
  // Requested Decimate/Crop Behavior
  '20200040': Element | undefined;
  // Requested Resolution ID
  '20200050': Element | undefined;
  // Requested Image Size Flag
  '202000A0': Element | undefined;
  // Decimate/Crop Result
  '202000A2': Element | undefined;
  // Basic Grayscale Image Sequence
  '20200110': Element | undefined;
  // Basic Color Image Sequence
  '20200111': Element | undefined;
  // Referenced Image Overlay Box Sequence
  '20200130': Element | undefined;
  // Referenced VOI LUT Box Sequence
  '20200140': Element | undefined;
  // Annotation Position
  '20300010': Element | undefined;
  // Text String
  '20300020': Element | undefined;
  // Referenced Overlay Plane Sequence
  '20400010': Element | undefined;
  // Referenced Overlay Plane Groups
  '20400011': Element | undefined;
  // Overlay Pixel Data Sequence
  '20400020': Element | undefined;
  // Overlay Magnification Type
  '20400060': Element | undefined;
  // Overlay Smoothing Type
  '20400070': Element | undefined;
  // Overlay or Image Magnification
  '20400072': Element | undefined;
  // Magnify to Number of Columns
  '20400074': Element | undefined;
  // Overlay Foreground Density
  '20400080': Element | undefined;
  // Overlay Background Density
  '20400082': Element | undefined;
  // Overlay Mode
  '20400090': Element | undefined;
  // Threshold Density
  '20400100': Element | undefined;
  // Referenced Image Box Sequence (Retired)
  '20400500': Element | undefined;
  // Presentation LUT Sequence
  '20500010': Element | undefined;
  // Presentation LUT Shape
  '20500020': Element | undefined;
  // Referenced Presentation LUT Sequence
  '20500500': Element | undefined;
  // Print Job ID
  '21000010': Element | undefined;
  // Execution Status
  '21000020': Element | undefined;
  // Execution Status Info
  '21000030': Element | undefined;
  // Creation Date
  '21000040': Element | undefined;
  // Creation Time
  '21000050': Element | undefined;
  // Originator
  '21000070': Element | undefined;
  // Destination AE
  '21000140': Element | undefined;
  // Owner ID
  '21000160': Element | undefined;
  // Number of Films
  '21000170': Element | undefined;
  // Referenced Print Job Sequence (Pull Stored Print)
  '21000500': Element | undefined;
  // Printer Status
  '21100010': Element | undefined;
  // Printer Status Info
  '21100020': Element | undefined;
  // Printer Name
  '21100030': Element | undefined;
  // Print Queue ID
  '21100099': Element | undefined;
  // Queue Status
  '21200010': Element | undefined;
  // Print Job Description Sequence
  '21200050': Element | undefined;
  // Referenced Print Job Sequence
  '21200070': Element | undefined;
  // Print Management Capabilities Sequence
  '21300010': Element | undefined;
  // Printer Characteristics Sequence
  '21300015': Element | undefined;
  // Film Box Content Sequence
  '21300030': Element | undefined;
  // Image Box Content Sequence
  '21300040': Element | undefined;
  // Annotation Content Sequence
  '21300050': Element | undefined;
  // Image Overlay Box Content Sequence
  '21300060': Element | undefined;
  // Presentation LUT Content Sequence
  '21300080': Element | undefined;
  // Proposed Study Sequence
  '213000A0': Element | undefined;
  // Original Image Sequence
  '213000C0': Element | undefined;
  // Label Using Information Extracted From Instances
  '22000001': Element | undefined;
  // Label Text
  '22000002': Element | undefined;
  // Label Style Selection
  '22000003': Element | undefined;
  // Media Disposition
  '22000004': Element | undefined;
  // Barcode Value
  '22000005': Element | undefined;
  // Barcode Symbology
  '22000006': Element | undefined;
  // Allow Media Splitting
  '22000007': Element | undefined;
  // Include Non-DICOM Objects
  '22000008': Element | undefined;
  // Include Display Application
  '22000009': Element | undefined;
  // Preserve Composite Instances After Media Creation
  '2200000A': Element | undefined;
  // Total Number of Pieces of Media Created
  '2200000B': Element | undefined;
  // Requested Media Application Profile
  '2200000C': Element | undefined;
  // Referenced Storage Media Sequence
  '2200000D': Element | undefined;
  // Failure Attributes
  '2200000E': Element | undefined;
  // Allow Lossy Compression
  '2200000F': Element | undefined;
  // Request Priority
  '22000020': Element | undefined;
  // RT Image Label
  '30020002': Element | undefined;
  // RT Image Name
  '30020003': Element | undefined;
  // RT Image Description
  '30020004': Element | undefined;
  // Reported Values Origin
  '3002000A': Element | undefined;
  // RT Image Plane
  '3002000C': Element | undefined;
  // X-Ray Image Receptor Translation
  '3002000D': Element | undefined;
  // X-Ray Image Receptor Angle
  '3002000E': Element | undefined;
  // RT Image Orientation
  '30020010': Element | undefined;
  // Image Plane Pixel Spacing
  '30020011': Element | undefined;
  // RT Image Position
  '30020012': Element | undefined;
  // Radiation Machine Name
  '30020020': Element | undefined;
  // Radiation Machine SAD
  '30020022': Element | undefined;
  // Radiation Machine SSD
  '30020024': Element | undefined;
  // RT Image SID
  '30020026': Element | undefined;
  // Source to Reference Object Distance
  '30020028': Element | undefined;
  // Fraction Number
  '30020029': Element | undefined;
  // Exposure Sequence
  '30020030': Element | undefined;
  // Meterset Exposure
  '30020032': Element | undefined;
  // Diaphragm Position
  '30020034': Element | undefined;
  // Fluence Map Sequence
  '30020040': Element | undefined;
  // Fluence Data Source
  '30020041': Element | undefined;
  // Fluence Data Scale
  '30020042': Element | undefined;
  // Primary Fluence Mode Sequence
  '30020050': Element | undefined;
  // Fluence Mode
  '30020051': Element | undefined;
  // Fluence Mode ID
  '30020052': Element | undefined;
  // DVH Type
  '30040001': Element | undefined;
  // Dose Units
  '30040002': Element | undefined;
  // Dose Type
  '30040004': Element | undefined;
  // Spatial Transform of Dose
  '30040005': Element | undefined;
  // Dose Comment
  '30040006': Element | undefined;
  // Normalization Point
  '30040008': Element | undefined;
  // Dose Summation Type
  '3004000A': Element | undefined;
  // Grid Frame Offset Vector
  '3004000C': Element | undefined;
  // Dose Grid Scaling
  '3004000E': Element | undefined;
  // RT Dose ROI Sequence
  '30040010': Element | undefined;
  // Dose Value
  '30040012': Element | undefined;
  // Tissue Heterogeneity Correction
  '30040014': Element | undefined;
  // DVH Normalization Point
  '30040040': Element | undefined;
  // DVH Normalization Dose Value
  '30040042': Element | undefined;
  // DVH Sequence
  '30040050': Element | undefined;
  // DVH Dose Scaling
  '30040052': Element | undefined;
  // DVH Volume Units
  '30040054': Element | undefined;
  // DVH Number of Bins
  '30040056': Element | undefined;
  // DVH Data
  '30040058': Element | undefined;
  // DVH Referenced ROI Sequence
  '30040060': Element | undefined;
  // DVH ROI Contribution Type
  '30040062': Element | undefined;
  // DVH Minimum Dose
  '30040070': Element | undefined;
  // DVH Maximum Dose
  '30040072': Element | undefined;
  // DVH Mean Dose
  '30040074': Element | undefined;
  // Structure Set Label
  '30060002': Element | undefined;
  // Structure Set Name
  '30060004': Element | undefined;
  // Structure Set Description
  '30060006': Element | undefined;
  // Structure Set Date
  '30060008': Element | undefined;
  // Structure Set Time
  '30060009': Element | undefined;
  // Referenced Frame of Reference Sequence
  '30060010': Element | undefined;
  // RT Referenced Study Sequence
  '30060012': Element | undefined;
  // RT Referenced Series Sequence
  '30060014': Element | undefined;
  // Contour Image Sequence
  '30060016': Element | undefined;
  // Predecessor Structure Set Sequence
  '30060018': Element | undefined;
  // Structure Set ROI Sequence
  '30060020': Element | undefined;
  // ROI Number
  '30060022': Element | undefined;
  // Referenced Frame of Reference UID
  '30060024': Element | undefined;
  // ROI Name
  '30060026': Element | undefined;
  // ROI Description
  '30060028': Element | undefined;
  // ROI Display Color
  '3006002A': Element | undefined;
  // ROI Volume
  '3006002C': Element | undefined;
  // RT Related ROI Sequence
  '30060030': Element | undefined;
  // RT ROI Relationship
  '30060033': Element | undefined;
  // ROI Generation Algorithm
  '30060036': Element | undefined;
  // ROI Generation Description
  '30060038': Element | undefined;
  // ROI Contour Sequence
  '30060039': Element | undefined;
  // Contour Sequence
  '30060040': Element | undefined;
  // Contour Geometric Type
  '30060042': Element | undefined;
  // Contour Slab Thickness
  '30060044': Element | undefined;
  // Contour Offset Vector
  '30060045': Element | undefined;
  // Number of Contour Points
  '30060046': Element | undefined;
  // Contour Number
  '30060048': Element | undefined;
  // Attached Contours
  '30060049': Element | undefined;
  // Contour Data
  '30060050': Element | undefined;
  // RT ROI Observations Sequence
  '30060080': Element | undefined;
  // Observation Number
  '30060082': Element | undefined;
  // Referenced ROI Number
  '30060084': Element | undefined;
  // ROI Observation Label
  '30060085': Element | undefined;
  // RT ROI Identification Code Sequence
  '30060086': Element | undefined;
  // ROI Observation Description
  '30060088': Element | undefined;
  // Related RT ROI Observations Sequence
  '300600A0': Element | undefined;
  // RT ROI Interpreted Type
  '300600A4': Element | undefined;
  // ROI Interpreter
  '300600A6': Element | undefined;
  // ROI Physical Properties Sequence
  '300600B0': Element | undefined;
  // ROI Physical Property
  '300600B2': Element | undefined;
  // ROI Physical Property Value
  '300600B4': Element | undefined;
  // ROI Elemental Composition Sequence
  '300600B6': Element | undefined;
  // ROI Elemental Composition Atomic Number
  '300600B7': Element | undefined;
  // ROI Elemental Composition Atomic Mass Fraction
  '300600B8': Element | undefined;
  // Additional RT ROI Identification Code Sequence
  '300600B9': Element | undefined;
  // Frame of Reference Relationship Sequence
  '300600C0': Element | undefined;
  // Related Frame of Reference UID
  '300600C2': Element | undefined;
  // Frame of Reference Transformation Type
  '300600C4': Element | undefined;
  // Frame of Reference Transformation Matrix
  '300600C6': Element | undefined;
  // Frame of Reference Transformation Comment
  '300600C8': Element | undefined;
  // Measured Dose Reference Sequence
  '30080010': Element | undefined;
  // Measured Dose Description
  '30080012': Element | undefined;
  // Measured Dose Type
  '30080014': Element | undefined;
  // Measured Dose Value
  '30080016': Element | undefined;
  // Treatment Session Beam Sequence
  '30080020': Element | undefined;
  // Treatment Session Ion Beam Sequence
  '30080021': Element | undefined;
  // Current Fraction Number
  '30080022': Element | undefined;
  // Treatment Control Point Date
  '30080024': Element | undefined;
  // Treatment Control Point Time
  '30080025': Element | undefined;
  // Treatment Termination Status
  '3008002A': Element | undefined;
  // Treatment Termination Code
  '3008002B': Element | undefined;
  // Treatment Verification Status
  '3008002C': Element | undefined;
  // Referenced Treatment Record Sequence
  '30080030': Element | undefined;
  // Specified Primary Meterset
  '30080032': Element | undefined;
  // Specified Secondary Meterset
  '30080033': Element | undefined;
  // Delivered Primary Meterset
  '30080036': Element | undefined;
  // Delivered Secondary Meterset
  '30080037': Element | undefined;
  // Specified Treatment Time
  '3008003A': Element | undefined;
  // Delivered Treatment Time
  '3008003B': Element | undefined;
  // Control Point Delivery Sequence
  '30080040': Element | undefined;
  // Ion Control Point Delivery Sequence
  '30080041': Element | undefined;
  // Specified Meterset
  '30080042': Element | undefined;
  // Delivered Meterset
  '30080044': Element | undefined;
  // Meterset Rate Set
  '30080045': Element | undefined;
  // Meterset Rate Delivered
  '30080046': Element | undefined;
  // Scan Spot Metersets Delivered
  '30080047': Element | undefined;
  // Dose Rate Delivered
  '30080048': Element | undefined;
  // Treatment Summary Calculated Dose Reference Sequence
  '30080050': Element | undefined;
  // Cumulative Dose to Dose Reference
  '30080052': Element | undefined;
  // First Treatment Date
  '30080054': Element | undefined;
  // Most Recent Treatment Date
  '30080056': Element | undefined;
  // Number of Fractions Delivered
  '3008005A': Element | undefined;
  // Override Sequence
  '30080060': Element | undefined;
  // Parameter Sequence Pointer
  '30080061': Element | undefined;
  // Override Parameter Pointer
  '30080062': Element | undefined;
  // Parameter Item Index
  '30080063': Element | undefined;
  // Measured Dose Reference Number
  '30080064': Element | undefined;
  // Parameter Pointer
  '30080065': Element | undefined;
  // Override Reason
  '30080066': Element | undefined;
  // Corrected Parameter Sequence
  '30080068': Element | undefined;
  // Correction Value
  '3008006A': Element | undefined;
  // Calculated Dose Reference Sequence
  '30080070': Element | undefined;
  // Calculated Dose Reference Number
  '30080072': Element | undefined;
  // Calculated Dose Reference Description
  '30080074': Element | undefined;
  // Calculated Dose Reference Dose Value
  '30080076': Element | undefined;
  // Start Meterset
  '30080078': Element | undefined;
  // End Meterset
  '3008007A': Element | undefined;
  // Referenced Measured Dose Reference Sequence
  '30080080': Element | undefined;
  // Referenced Measured Dose Reference Number
  '30080082': Element | undefined;
  // Referenced Calculated Dose Reference Sequence
  '30080090': Element | undefined;
  // Referenced Calculated Dose Reference Number
  '30080092': Element | undefined;
  // Beam Limiting Device Leaf Pairs Sequence
  '300800A0': Element | undefined;
  // Recorded Wedge Sequence
  '300800B0': Element | undefined;
  // Recorded Compensator Sequence
  '300800C0': Element | undefined;
  // Recorded Block Sequence
  '300800D0': Element | undefined;
  // Treatment Summary Measured Dose Reference Sequence
  '300800E0': Element | undefined;
  // Recorded Snout Sequence
  '300800F0': Element | undefined;
  // Recorded Range Shifter Sequence
  '300800F2': Element | undefined;
  // Recorded Lateral Spreading Device Sequence
  '300800F4': Element | undefined;
  // Recorded Range Modulator Sequence
  '300800F6': Element | undefined;
  // Recorded Source Sequence
  '30080100': Element | undefined;
  // Source Serial Number
  '30080105': Element | undefined;
  // Treatment Session Application Setup Sequence
  '30080110': Element | undefined;
  // Application Setup Check
  '30080116': Element | undefined;
  // Recorded Brachy Accessory Device Sequence
  '30080120': Element | undefined;
  // Referenced Brachy Accessory Device Number
  '30080122': Element | undefined;
  // Recorded Channel Sequence
  '30080130': Element | undefined;
  // Specified Channel Total Time
  '30080132': Element | undefined;
  // Delivered Channel Total Time
  '30080134': Element | undefined;
  // Specified Number of Pulses
  '30080136': Element | undefined;
  // Delivered Number of Pulses
  '30080138': Element | undefined;
  // Specified Pulse Repetition Interval
  '3008013A': Element | undefined;
  // Delivered Pulse Repetition Interval
  '3008013C': Element | undefined;
  // Recorded Source Applicator Sequence
  '30080140': Element | undefined;
  // Referenced Source Applicator Number
  '30080142': Element | undefined;
  // Recorded Channel Shield Sequence
  '30080150': Element | undefined;
  // Referenced Channel Shield Number
  '30080152': Element | undefined;
  // Brachy Control Point Delivered Sequence
  '30080160': Element | undefined;
  // Safe Position Exit Date
  '30080162': Element | undefined;
  // Safe Position Exit Time
  '30080164': Element | undefined;
  // Safe Position Return Date
  '30080166': Element | undefined;
  // Safe Position Return Time
  '30080168': Element | undefined;
  // Pulse Specific Brachy Control Point Delivered Sequence
  '30080171': Element | undefined;
  // Pulse Number
  '30080172': Element | undefined;
  // Brachy Pulse Control Point Delivered Sequence
  '30080173': Element | undefined;
  // Current Treatment Status
  '30080200': Element | undefined;
  // Treatment Status Comment
  '30080202': Element | undefined;
  // Fraction Group Summary Sequence
  '30080220': Element | undefined;
  // Referenced Fraction Number
  '30080223': Element | undefined;
  // Fraction Group Type
  '30080224': Element | undefined;
  // Beam Stopper Position
  '30080230': Element | undefined;
  // Fraction Status Summary Sequence
  '30080240': Element | undefined;
  // Treatment Date
  '30080250': Element | undefined;
  // Treatment Time
  '30080251': Element | undefined;
  // RT Plan Label
  '300A0002': Element | undefined;
  // RT Plan Name
  '300A0003': Element | undefined;
  // RT Plan Description
  '300A0004': Element | undefined;
  // RT Plan Date
  '300A0006': Element | undefined;
  // RT Plan Time
  '300A0007': Element | undefined;
  // Treatment Protocols
  '300A0009': Element | undefined;
  // Plan Intent
  '300A000A': Element | undefined;
  // Treatment Sites
  '300A000B': Element | undefined;
  // RT Plan Geometry
  '300A000C': Element | undefined;
  // Prescription Description
  '300A000E': Element | undefined;
  // Dose Reference Sequence
  '300A0010': Element | undefined;
  // Dose Reference Number
  '300A0012': Element | undefined;
  // Dose Reference UID
  '300A0013': Element | undefined;
  // Dose Reference Structure Type
  '300A0014': Element | undefined;
  // Nominal Beam Energy Unit
  '300A0015': Element | undefined;
  // Dose Reference Description
  '300A0016': Element | undefined;
  // Dose Reference Point Coordinates
  '300A0018': Element | undefined;
  // Nominal Prior Dose
  '300A001A': Element | undefined;
  // Dose Reference Type
  '300A0020': Element | undefined;
  // Constraint Weight
  '300A0021': Element | undefined;
  // Delivery Warning Dose
  '300A0022': Element | undefined;
  // Delivery Maximum Dose
  '300A0023': Element | undefined;
  // Target Minimum Dose
  '300A0025': Element | undefined;
  // Target Prescription Dose
  '300A0026': Element | undefined;
  // Target Maximum Dose
  '300A0027': Element | undefined;
  // Target Underdose Volume Fraction
  '300A0028': Element | undefined;
  // Organ at Risk Full-volume Dose
  '300A002A': Element | undefined;
  // Organ at Risk Limit Dose
  '300A002B': Element | undefined;
  // Organ at Risk Maximum Dose
  '300A002C': Element | undefined;
  // Organ at Risk Overdose Volume Fraction
  '300A002D': Element | undefined;
  // Tolerance Table Sequence
  '300A0040': Element | undefined;
  // Tolerance Table Number
  '300A0042': Element | undefined;
  // Tolerance Table Label
  '300A0043': Element | undefined;
  // Gantry Angle Tolerance
  '300A0044': Element | undefined;
  // Beam Limiting Device Angle Tolerance
  '300A0046': Element | undefined;
  // Beam Limiting Device Tolerance Sequence
  '300A0048': Element | undefined;
  // Beam Limiting Device Position Tolerance
  '300A004A': Element | undefined;
  // Snout Position Tolerance
  '300A004B': Element | undefined;
  // Patient Support Angle Tolerance
  '300A004C': Element | undefined;
  // Table Top Eccentric Angle Tolerance
  '300A004E': Element | undefined;
  // Table Top Pitch Angle Tolerance
  '300A004F': Element | undefined;
  // Table Top Roll Angle Tolerance
  '300A0050': Element | undefined;
  // Table Top Vertical Position Tolerance
  '300A0051': Element | undefined;
  // Table Top Longitudinal Position Tolerance
  '300A0052': Element | undefined;
  // Table Top Lateral Position Tolerance
  '300A0053': Element | undefined;
  // RT Plan Relationship
  '300A0055': Element | undefined;
  // Fraction Group Sequence
  '300A0070': Element | undefined;
  // Fraction Group Number
  '300A0071': Element | undefined;
  // Fraction Group Description
  '300A0072': Element | undefined;
  // Number of Fractions Planned
  '300A0078': Element | undefined;
  // Number of Fraction Pattern Digits Per Day
  '300A0079': Element | undefined;
  // Repeat Fraction Cycle Length
  '300A007A': Element | undefined;
  // Fraction Pattern
  '300A007B': Element | undefined;
  // Number of Beams
  '300A0080': Element | undefined;
  // Beam Dose Specification Point
  '300A0082': Element | undefined;
  // Beam Dose
  '300A0084': Element | undefined;
  // Beam Meterset
  '300A0086': Element | undefined;
  // Beam Dose Point Depth
  '300A0088': Element | undefined;
  // Beam Dose Point Equivalent Depth
  '300A0089': Element | undefined;
  // Beam Dose Point SSD
  '300A008A': Element | undefined;
  // Beam Dose Meaning
  '300A008B': Element | undefined;
  // Beam Dose Verification Control Point Sequence
  '300A008C': Element | undefined;
  // Average Beam Dose Point Depth
  '300A008D': Element | undefined;
  // Average Beam Dose Point Equivalent Depth
  '300A008E': Element | undefined;
  // Average Beam Dose Point SSD
  '300A008F': Element | undefined;
  // Number of Brachy Application Setups
  '300A00A0': Element | undefined;
  // Brachy Application Setup Dose Specification Point
  '300A00A2': Element | undefined;
  // Brachy Application Setup Dose
  '300A00A4': Element | undefined;
  // Beam Sequence
  '300A00B0': Element | undefined;
  // Treatment Machine Name
  '300A00B2': Element | undefined;
  // Primary Dosimeter Unit
  '300A00B3': Element | undefined;
  // Source-Axis Distance
  '300A00B4': Element | undefined;
  // Beam Limiting Device Sequence
  '300A00B6': Element | undefined;
  // RT Beam Limiting Device Type
  '300A00B8': Element | undefined;
  // Source to Beam Limiting Device Distance
  '300A00BA': Element | undefined;
  // Isocenter to Beam Limiting Device Distance
  '300A00BB': Element | undefined;
  // Number of Leaf/Jaw Pairs
  '300A00BC': Element | undefined;
  // Leaf Position Boundaries
  '300A00BE': Element | undefined;
  // Beam Number
  '300A00C0': Element | undefined;
  // Beam Name
  '300A00C2': Element | undefined;
  // Beam Description
  '300A00C3': Element | undefined;
  // Beam Type
  '300A00C4': Element | undefined;
  // Beam Delivery Duration Limit
  '300A00C5': Element | undefined;
  // Radiation Type
  '300A00C6': Element | undefined;
  // High-Dose Technique Type
  '300A00C7': Element | undefined;
  // Reference Image Number
  '300A00C8': Element | undefined;
  // Planned Verification Image Sequence
  '300A00CA': Element | undefined;
  // Imaging Device-Specific Acquisition Parameters
  '300A00CC': Element | undefined;
  // Treatment Delivery Type
  '300A00CE': Element | undefined;
  // Number of Wedges
  '300A00D0': Element | undefined;
  // Wedge Sequence
  '300A00D1': Element | undefined;
  // Wedge Number
  '300A00D2': Element | undefined;
  // Wedge Type
  '300A00D3': Element | undefined;
  // Wedge ID
  '300A00D4': Element | undefined;
  // Wedge Angle
  '300A00D5': Element | undefined;
  // Wedge Factor
  '300A00D6': Element | undefined;
  // Total Wedge Tray Water-Equivalent Thickness
  '300A00D7': Element | undefined;
  // Wedge Orientation
  '300A00D8': Element | undefined;
  // Isocenter to Wedge Tray Distance
  '300A00D9': Element | undefined;
  // Source to Wedge Tray Distance
  '300A00DA': Element | undefined;
  // Wedge Thin Edge Position
  '300A00DB': Element | undefined;
  // Bolus ID
  '300A00DC': Element | undefined;
  // Bolus Description
  '300A00DD': Element | undefined;
  // Number of Compensators
  '300A00E0': Element | undefined;
  // Material ID
  '300A00E1': Element | undefined;
  // Total Compensator Tray Factor
  '300A00E2': Element | undefined;
  // Compensator Sequence
  '300A00E3': Element | undefined;
  // Compensator Number
  '300A00E4': Element | undefined;
  // Compensator ID
  '300A00E5': Element | undefined;
  // Source to Compensator Tray Distance
  '300A00E6': Element | undefined;
  // Compensator Rows
  '300A00E7': Element | undefined;
  // Compensator Columns
  '300A00E8': Element | undefined;
  // Compensator Pixel Spacing
  '300A00E9': Element | undefined;
  // Compensator Position
  '300A00EA': Element | undefined;
  // Compensator Transmission Data
  '300A00EB': Element | undefined;
  // Compensator Thickness Data
  '300A00EC': Element | undefined;
  // Number of Boli
  '300A00ED': Element | undefined;
  // Compensator Type
  '300A00EE': Element | undefined;
  // Compensator Tray ID
  '300A00EF': Element | undefined;
  // Number of Blocks
  '300A00F0': Element | undefined;
  // Total Block Tray Factor
  '300A00F2': Element | undefined;
  // Total Block Tray Water-Equivalent Thickness
  '300A00F3': Element | undefined;
  // Block Sequence
  '300A00F4': Element | undefined;
  // Block Tray ID
  '300A00F5': Element | undefined;
  // Source to Block Tray Distance
  '300A00F6': Element | undefined;
  // Isocenter to Block Tray Distance
  '300A00F7': Element | undefined;
  // Block Type
  '300A00F8': Element | undefined;
  // Accessory Code
  '300A00F9': Element | undefined;
  // Block Divergence
  '300A00FA': Element | undefined;
  // Block Mounting Position
  '300A00FB': Element | undefined;
  // Block Number
  '300A00FC': Element | undefined;
  // Block Name
  '300A00FE': Element | undefined;
  // Block Thickness
  '300A0100': Element | undefined;
  // Block Transmission
  '300A0102': Element | undefined;
  // Block Number of Points
  '300A0104': Element | undefined;
  // Block Data
  '300A0106': Element | undefined;
  // Applicator Sequence
  '300A0107': Element | undefined;
  // Applicator ID
  '300A0108': Element | undefined;
  // Applicator Type
  '300A0109': Element | undefined;
  // Applicator Description
  '300A010A': Element | undefined;
  // Cumulative Dose Reference Coefficient
  '300A010C': Element | undefined;
  // Final Cumulative Meterset Weight
  '300A010E': Element | undefined;
  // Number of Control Points
  '300A0110': Element | undefined;
  // Control Point Sequence
  '300A0111': Element | undefined;
  // Control Point Index
  '300A0112': Element | undefined;
  // Nominal Beam Energy
  '300A0114': Element | undefined;
  // Dose Rate Set
  '300A0115': Element | undefined;
  // Wedge Position Sequence
  '300A0116': Element | undefined;
  // Wedge Position
  '300A0118': Element | undefined;
  // Beam Limiting Device Position Sequence
  '300A011A': Element | undefined;
  // Leaf/Jaw Positions
  '300A011C': Element | undefined;
  // Gantry Angle
  '300A011E': Element | undefined;
  // Gantry Rotation Direction
  '300A011F': Element | undefined;
  // Beam Limiting Device Angle
  '300A0120': Element | undefined;
  // Beam Limiting Device Rotation Direction
  '300A0121': Element | undefined;
  // Patient Support Angle
  '300A0122': Element | undefined;
  // Patient Support Rotation Direction
  '300A0123': Element | undefined;
  // Table Top Eccentric Axis Distance
  '300A0124': Element | undefined;
  // Table Top Eccentric Angle
  '300A0125': Element | undefined;
  // Table Top Eccentric Rotation Direction
  '300A0126': Element | undefined;
  // Table Top Vertical Position
  '300A0128': Element | undefined;
  // Table Top Longitudinal Position
  '300A0129': Element | undefined;
  // Table Top Lateral Position
  '300A012A': Element | undefined;
  // Isocenter Position
  '300A012C': Element | undefined;
  // Surface Entry Point
  '300A012E': Element | undefined;
  // Source to Surface Distance
  '300A0130': Element | undefined;
  // Cumulative Meterset Weight
  '300A0134': Element | undefined;
  // Table Top Pitch Angle
  '300A0140': Element | undefined;
  // Table Top Pitch Rotation Direction
  '300A0142': Element | undefined;
  // Table Top Roll Angle
  '300A0144': Element | undefined;
  // Table Top Roll Rotation Direction
  '300A0146': Element | undefined;
  // Head Fixation Angle
  '300A0148': Element | undefined;
  // Gantry Pitch Angle
  '300A014A': Element | undefined;
  // Gantry Pitch Rotation Direction
  '300A014C': Element | undefined;
  // Gantry Pitch Angle Tolerance
  '300A014E': Element | undefined;
  // Patient Setup Sequence
  '300A0180': Element | undefined;
  // Patient Setup Number
  '300A0182': Element | undefined;
  // Patient Setup Label
  '300A0183': Element | undefined;
  // Patient Additional Position
  '300A0184': Element | undefined;
  // Fixation Device Sequence
  '300A0190': Element | undefined;
  // Fixation Device Type
  '300A0192': Element | undefined;
  // Fixation Device Label
  '300A0194': Element | undefined;
  // Fixation Device Description
  '300A0196': Element | undefined;
  // Fixation Device Position
  '300A0198': Element | undefined;
  // Fixation Device Pitch Angle
  '300A0199': Element | undefined;
  // Fixation Device Roll Angle
  '300A019A': Element | undefined;
  // Shielding Device Sequence
  '300A01A0': Element | undefined;
  // Shielding Device Type
  '300A01A2': Element | undefined;
  // Shielding Device Label
  '300A01A4': Element | undefined;
  // Shielding Device Description
  '300A01A6': Element | undefined;
  // Shielding Device Position
  '300A01A8': Element | undefined;
  // Setup Technique
  '300A01B0': Element | undefined;
  // Setup Technique Description
  '300A01B2': Element | undefined;
  // Setup Device Sequence
  '300A01B4': Element | undefined;
  // Setup Device Type
  '300A01B6': Element | undefined;
  // Setup Device Label
  '300A01B8': Element | undefined;
  // Setup Device Description
  '300A01BA': Element | undefined;
  // Setup Device Parameter
  '300A01BC': Element | undefined;
  // Setup Reference Description
  '300A01D0': Element | undefined;
  // Table Top Vertical Setup Displacement
  '300A01D2': Element | undefined;
  // Table Top Longitudinal Setup Displacement
  '300A01D4': Element | undefined;
  // Table Top Lateral Setup Displacement
  '300A01D6': Element | undefined;
  // Brachy Treatment Technique
  '300A0200': Element | undefined;
  // Brachy Treatment Type
  '300A0202': Element | undefined;
  // Treatment Machine Sequence
  '300A0206': Element | undefined;
  // Source Sequence
  '300A0210': Element | undefined;
  // Source Number
  '300A0212': Element | undefined;
  // Source Type
  '300A0214': Element | undefined;
  // Source Manufacturer
  '300A0216': Element | undefined;
  // Active Source Diameter
  '300A0218': Element | undefined;
  // Active Source Length
  '300A021A': Element | undefined;
  // Source Model ID
  '300A021B': Element | undefined;
  // Source Description
  '300A021C': Element | undefined;
  // Source Encapsulation Nominal Thickness
  '300A0222': Element | undefined;
  // Source Encapsulation Nominal Transmission
  '300A0224': Element | undefined;
  // Source Isotope Name
  '300A0226': Element | undefined;
  // Source Isotope Half Life
  '300A0228': Element | undefined;
  // Source Strength Units
  '300A0229': Element | undefined;
  // Reference Air Kerma Rate
  '300A022A': Element | undefined;
  // Source Strength
  '300A022B': Element | undefined;
  // Source Strength Reference Date
  '300A022C': Element | undefined;
  // Source Strength Reference Time
  '300A022E': Element | undefined;
  // Application Setup Sequence
  '300A0230': Element | undefined;
  // Application Setup Type
  '300A0232': Element | undefined;
  // Application Setup Number
  '300A0234': Element | undefined;
  // Application Setup Name
  '300A0236': Element | undefined;
  // Application Setup Manufacturer
  '300A0238': Element | undefined;
  // Template Number
  '300A0240': Element | undefined;
  // Template Type
  '300A0242': Element | undefined;
  // Template Name
  '300A0244': Element | undefined;
  // Total Reference Air Kerma
  '300A0250': Element | undefined;
  // Brachy Accessory Device Sequence
  '300A0260': Element | undefined;
  // Brachy Accessory Device Number
  '300A0262': Element | undefined;
  // Brachy Accessory Device ID
  '300A0263': Element | undefined;
  // Brachy Accessory Device Type
  '300A0264': Element | undefined;
  // Brachy Accessory Device Name
  '300A0266': Element | undefined;
  // Brachy Accessory Device Nominal Thickness
  '300A026A': Element | undefined;
  // Brachy Accessory Device Nominal Transmission
  '300A026C': Element | undefined;
  // Channel Sequence
  '300A0280': Element | undefined;
  // Channel Number
  '300A0282': Element | undefined;
  // Channel Length
  '300A0284': Element | undefined;
  // Channel Total Time
  '300A0286': Element | undefined;
  // Source Movement Type
  '300A0288': Element | undefined;
  // Number of Pulses
  '300A028A': Element | undefined;
  // Pulse Repetition Interval
  '300A028C': Element | undefined;
  // Source Applicator Number
  '300A0290': Element | undefined;
  // Source Applicator ID
  '300A0291': Element | undefined;
  // Source Applicator Type
  '300A0292': Element | undefined;
  // Source Applicator Name
  '300A0294': Element | undefined;
  // Source Applicator Length
  '300A0296': Element | undefined;
  // Source Applicator Manufacturer
  '300A0298': Element | undefined;
  // Source Applicator Wall Nominal Thickness
  '300A029C': Element | undefined;
  // Source Applicator Wall Nominal Transmission
  '300A029E': Element | undefined;
  // Source Applicator Step Size
  '300A02A0': Element | undefined;
  // Transfer Tube Number
  '300A02A2': Element | undefined;
  // Transfer Tube Length
  '300A02A4': Element | undefined;
  // Channel Shield Sequence
  '300A02B0': Element | undefined;
  // Channel Shield Number
  '300A02B2': Element | undefined;
  // Channel Shield ID
  '300A02B3': Element | undefined;
  // Channel Shield Name
  '300A02B4': Element | undefined;
  // Channel Shield Nominal Thickness
  '300A02B8': Element | undefined;
  // Channel Shield Nominal Transmission
  '300A02BA': Element | undefined;
  // Final Cumulative Time Weight
  '300A02C8': Element | undefined;
  // Brachy Control Point Sequence
  '300A02D0': Element | undefined;
  // Control Point Relative Position
  '300A02D2': Element | undefined;
  // Control Point 3D Position
  '300A02D4': Element | undefined;
  // Cumulative Time Weight
  '300A02D6': Element | undefined;
  // Compensator Divergence
  '300A02E0': Element | undefined;
  // Compensator Mounting Position
  '300A02E1': Element | undefined;
  // Source to Compensator Distance
  '300A02E2': Element | undefined;
  // Total Compensator Tray Water-Equivalent Thickness
  '300A02E3': Element | undefined;
  // Isocenter to Compensator Tray Distance
  '300A02E4': Element | undefined;
  // Compensator Column Offset
  '300A02E5': Element | undefined;
  // Isocenter to Compensator Distances
  '300A02E6': Element | undefined;
  // Compensator Relative Stopping Power Ratio
  '300A02E7': Element | undefined;
  // Compensator Milling Tool Diameter
  '300A02E8': Element | undefined;
  // Ion Range Compensator Sequence
  '300A02EA': Element | undefined;
  // Compensator Description
  '300A02EB': Element | undefined;
  // Radiation Mass Number
  '300A0302': Element | undefined;
  // Radiation Atomic Number
  '300A0304': Element | undefined;
  // Radiation Charge State
  '300A0306': Element | undefined;
  // Scan Mode
  '300A0308': Element | undefined;
  // Virtual Source-Axis Distances
  '300A030A': Element | undefined;
  // Snout Sequence
  '300A030C': Element | undefined;
  // Snout Position
  '300A030D': Element | undefined;
  // Snout ID
  '300A030F': Element | undefined;
  // Number of Range Shifters
  '300A0312': Element | undefined;
  // Range Shifter Sequence
  '300A0314': Element | undefined;
  // Range Shifter Number
  '300A0316': Element | undefined;
  // Range Shifter ID
  '300A0318': Element | undefined;
  // Range Shifter Type
  '300A0320': Element | undefined;
  // Range Shifter Description
  '300A0322': Element | undefined;
  // Number of Lateral Spreading Devices
  '300A0330': Element | undefined;
  // Lateral Spreading Device Sequence
  '300A0332': Element | undefined;
  // Lateral Spreading Device Number
  '300A0334': Element | undefined;
  // Lateral Spreading Device ID
  '300A0336': Element | undefined;
  // Lateral Spreading Device Type
  '300A0338': Element | undefined;
  // Lateral Spreading Device Description
  '300A033A': Element | undefined;
  // Lateral Spreading Device Water Equivalent Thickness
  '300A033C': Element | undefined;
  // Number of Range Modulators
  '300A0340': Element | undefined;
  // Range Modulator Sequence
  '300A0342': Element | undefined;
  // Range Modulator Number
  '300A0344': Element | undefined;
  // Range Modulator ID
  '300A0346': Element | undefined;
  // Range Modulator Type
  '300A0348': Element | undefined;
  // Range Modulator Description
  '300A034A': Element | undefined;
  // Beam Current Modulation ID
  '300A034C': Element | undefined;
  // Patient Support Type
  '300A0350': Element | undefined;
  // Patient Support ID
  '300A0352': Element | undefined;
  // Patient Support Accessory Code
  '300A0354': Element | undefined;
  // Fixation Light Azimuthal Angle
  '300A0356': Element | undefined;
  // Fixation Light Polar Angle
  '300A0358': Element | undefined;
  // Meterset Rate
  '300A035A': Element | undefined;
  // Range Shifter Settings Sequence
  '300A0360': Element | undefined;
  // Range Shifter Setting
  '300A0362': Element | undefined;
  // Isocenter to Range Shifter Distance
  '300A0364': Element | undefined;
  // Range Shifter Water Equivalent Thickness
  '300A0366': Element | undefined;
  // Lateral Spreading Device Settings Sequence
  '300A0370': Element | undefined;
  // Lateral Spreading Device Setting
  '300A0372': Element | undefined;
  // Isocenter to Lateral Spreading Device Distance
  '300A0374': Element | undefined;
  // Range Modulator Settings Sequence
  '300A0380': Element | undefined;
  // Range Modulator Gating Start Value
  '300A0382': Element | undefined;
  // Range Modulator Gating Stop Value
  '300A0384': Element | undefined;
  // Range Modulator Gating Start Water Equivalent Thickness
  '300A0386': Element | undefined;
  // Range Modulator Gating Stop Water Equivalent Thickness
  '300A0388': Element | undefined;
  // Isocenter to Range Modulator Distance
  '300A038A': Element | undefined;
  // Scan Spot Tune ID
  '300A0390': Element | undefined;
  // Number of Scan Spot Positions
  '300A0392': Element | undefined;
  // Scan Spot Position Map
  '300A0394': Element | undefined;
  // Scan Spot Meterset Weights
  '300A0396': Element | undefined;
  // Scanning Spot Size
  '300A0398': Element | undefined;
  // Number of Paintings
  '300A039A': Element | undefined;
  // Ion Tolerance Table Sequence
  '300A03A0': Element | undefined;
  // Ion Beam Sequence
  '300A03A2': Element | undefined;
  // Ion Beam Limiting Device Sequence
  '300A03A4': Element | undefined;
  // Ion Block Sequence
  '300A03A6': Element | undefined;
  // Ion Control Point Sequence
  '300A03A8': Element | undefined;
  // Ion Wedge Sequence
  '300A03AA': Element | undefined;
  // Ion Wedge Position Sequence
  '300A03AC': Element | undefined;
  // Referenced Setup Image Sequence
  '300A0401': Element | undefined;
  // Setup Image Comment
  '300A0402': Element | undefined;
  // Motion Synchronization Sequence
  '300A0410': Element | undefined;
  // Control Point Orientation
  '300A0412': Element | undefined;
  // General Accessory Sequence
  '300A0420': Element | undefined;
  // General Accessory ID
  '300A0421': Element | undefined;
  // General Accessory Description
  '300A0422': Element | undefined;
  // General Accessory Type
  '300A0423': Element | undefined;
  // General Accessory Number
  '300A0424': Element | undefined;
  // Source to General Accessory Distance
  '300A0425': Element | undefined;
  // Applicator Geometry Sequence
  '300A0431': Element | undefined;
  // Applicator Aperture Shape
  '300A0432': Element | undefined;
  // Applicator Opening
  '300A0433': Element | undefined;
  // Applicator Opening X
  '300A0434': Element | undefined;
  // Applicator Opening Y
  '300A0435': Element | undefined;
  // Source to Applicator Mounting Position Distance
  '300A0436': Element | undefined;
  // Referenced RT Plan Sequence
  '300C0002': Element | undefined;
  // Referenced Beam Sequence
  '300C0004': Element | undefined;
  // Referenced Beam Number
  '300C0006': Element | undefined;
  // Referenced Reference Image Number
  '300C0007': Element | undefined;
  // Start Cumulative Meterset Weight
  '300C0008': Element | undefined;
  // End Cumulative Meterset Weight
  '300C0009': Element | undefined;
  // Referenced Brachy Application Setup Sequence
  '300C000A': Element | undefined;
  // Referenced Brachy Application Setup Number
  '300C000C': Element | undefined;
  // Referenced Source Number
  '300C000E': Element | undefined;
  // Referenced Fraction Group Sequence
  '300C0020': Element | undefined;
  // Referenced Fraction Group Number
  '300C0022': Element | undefined;
  // Referenced Verification Image Sequence
  '300C0040': Element | undefined;
  // Referenced Reference Image Sequence
  '300C0042': Element | undefined;
  // Referenced Dose Reference Sequence
  '300C0050': Element | undefined;
  // Referenced Dose Reference Number
  '300C0051': Element | undefined;
  // Brachy Referenced Dose Reference Sequence
  '300C0055': Element | undefined;
  // Referenced Structure Set Sequence
  '300C0060': Element | undefined;
  // Referenced Patient Setup Number
  '300C006A': Element | undefined;
  // Referenced Dose Sequence
  '300C0080': Element | undefined;
  // Referenced Tolerance Table Number
  '300C00A0': Element | undefined;
  // Referenced Bolus Sequence
  '300C00B0': Element | undefined;
  // Referenced Wedge Number
  '300C00C0': Element | undefined;
  // Referenced Compensator Number
  '300C00D0': Element | undefined;
  // Referenced Block Number
  '300C00E0': Element | undefined;
  // Referenced Control Point Index
  '300C00F0': Element | undefined;
  // Referenced Control Point Sequence
  '300C00F2': Element | undefined;
  // Referenced Start Control Point Index
  '300C00F4': Element | undefined;
  // Referenced Stop Control Point Index
  '300C00F6': Element | undefined;
  // Referenced Range Shifter Number
  '300C0100': Element | undefined;
  // Referenced Lateral Spreading Device Number
  '300C0102': Element | undefined;
  // Referenced Range Modulator Number
  '300C0104': Element | undefined;
  // Approval Status
  '300E0002': Element | undefined;
  // Review Date
  '300E0004': Element | undefined;
  // Review Time
  '300E0005': Element | undefined;
  // Reviewer Name
  '300E0008': Element | undefined;
  // Arbitrary
  '40000010': Element | undefined;
  // Text Comments
  '40004000': Element | undefined;
  // Results ID
  '40080040': Element | undefined;
  // Results ID Issuer
  '40080042': Element | undefined;
  // Referenced Interpretation Sequence
  '40080050': Element | undefined;
  // Report Production Status (Trial)
  '400800FF': Element | undefined;
  // Interpretation Recorded Date
  '40080100': Element | undefined;
  // Interpretation Recorded Time
  '40080101': Element | undefined;
  // Interpretation Recorder
  '40080102': Element | undefined;
  // Reference to Recorded Sound
  '40080103': Element | undefined;
  // Interpretation Transcription Date
  '40080108': Element | undefined;
  // Interpretation Transcription Time
  '40080109': Element | undefined;
  // Interpretation Transcriber
  '4008010A': Element | undefined;
  // Interpretation Text
  '4008010B': Element | undefined;
  // Interpretation Author
  '4008010C': Element | undefined;
  // Interpretation Approver Sequence
  '40080111': Element | undefined;
  // Interpretation Approval Date
  '40080112': Element | undefined;
  // Interpretation Approval Time
  '40080113': Element | undefined;
  // Physician Approving Interpretation
  '40080114': Element | undefined;
  // Interpretation Diagnosis Description
  '40080115': Element | undefined;
  // Interpretation Diagnosis Code Sequence
  '40080117': Element | undefined;
  // Results Distribution List Sequence
  '40080118': Element | undefined;
  // Distribution Name
  '40080119': Element | undefined;
  // Distribution Address
  '4008011A': Element | undefined;
  // Interpretation ID
  '40080200': Element | undefined;
  // Interpretation ID Issuer
  '40080202': Element | undefined;
  // Interpretation Type ID
  '40080210': Element | undefined;
  // Interpretation Status ID
  '40080212': Element | undefined;
  // Impressions
  '40080300': Element | undefined;
  // Results Comments
  '40084000': Element | undefined;
  // Low Energy Detectors
  '40100001': Element | undefined;
  // High Energy Detectors
  '40100002': Element | undefined;
  // Detector Geometry Sequence
  '40100004': Element | undefined;
  // Threat ROI Voxel Sequence
  '40101001': Element | undefined;
  // Threat ROI Base
  '40101004': Element | undefined;
  // Threat ROI Extents
  '40101005': Element | undefined;
  // Threat ROI Bitmap
  '40101006': Element | undefined;
  // Route Segment ID
  '40101007': Element | undefined;
  // Gantry Type
  '40101008': Element | undefined;
  // OOI Owner Type
  '40101009': Element | undefined;
  // Route Segment Sequence
  '4010100A': Element | undefined;
  // Potential Threat Object ID
  '40101010': Element | undefined;
  // Threat Sequence
  '40101011': Element | undefined;
  // Threat Category
  '40101012': Element | undefined;
  // Threat Category Description
  '40101013': Element | undefined;
  // ATD Ability Assessment
  '40101014': Element | undefined;
  // ATD Assessment Flag
  '40101015': Element | undefined;
  // ATD Assessment Probability
  '40101016': Element | undefined;
  // Mass
  '40101017': Element | undefined;
  // Density
  '40101018': Element | undefined;
  // Z Effective
  '40101019': Element | undefined;
  // Boarding Pass ID
  '4010101A': Element | undefined;
  // Center of Mass
  '4010101B': Element | undefined;
  // Center of PTO
  '4010101C': Element | undefined;
  // Bounding Polygon
  '4010101D': Element | undefined;
  // Route Segment Start Location ID
  '4010101E': Element | undefined;
  // Route Segment End Location ID
  '4010101F': Element | undefined;
  // Route Segment Location ID Type
  '40101020': Element | undefined;
  // Abort Reason
  '40101021': Element | undefined;
  // Volume of PTO
  '40101023': Element | undefined;
  // Abort Flag
  '40101024': Element | undefined;
  // Route Segment Start Time
  '40101025': Element | undefined;
  // Route Segment End Time
  '40101026': Element | undefined;
  // TDR Type
  '40101027': Element | undefined;
  // International Route Segment
  '40101028': Element | undefined;
  // Threat Detection Algorithm and Version
  '40101029': Element | undefined;
  // Assigned Location
  '4010102A': Element | undefined;
  // Alarm Decision Time
  '4010102B': Element | undefined;
  // Alarm Decision
  '40101031': Element | undefined;
  // Number of Total Objects
  '40101033': Element | undefined;
  // Number of Alarm Objects
  '40101034': Element | undefined;
  // PTO Representation Sequence
  '40101037': Element | undefined;
  // ATD Assessment Sequence
  '40101038': Element | undefined;
  // TIP Type
  '40101039': Element | undefined;
  // DICOS Version
  '4010103A': Element | undefined;
  // OOI Owner Creation Time
  '40101041': Element | undefined;
  // OOI Type
  '40101042': Element | undefined;
  // OOI Size
  '40101043': Element | undefined;
  // Acquisition Status
  '40101044': Element | undefined;
  // Basis Materials Code Sequence
  '40101045': Element | undefined;
  // Phantom Type
  '40101046': Element | undefined;
  // OOI Owner Sequence
  '40101047': Element | undefined;
  // Scan Type
  '40101048': Element | undefined;
  // Itinerary ID
  '40101051': Element | undefined;
  // Itinerary ID Type
  '40101052': Element | undefined;
  // Itinerary ID Assigning Authority
  '40101053': Element | undefined;
  // Route ID
  '40101054': Element | undefined;
  // Route ID Assigning Authority
  '40101055': Element | undefined;
  // Inbound Arrival Type
  '40101056': Element | undefined;
  // Carrier ID
  '40101058': Element | undefined;
  // Carrier ID Assigning Authority
  '40101059': Element | undefined;
  // Source Orientation
  '40101060': Element | undefined;
  // Source Position
  '40101061': Element | undefined;
  // Belt Height
  '40101062': Element | undefined;
  // Algorithm Routing Code Sequence
  '40101064': Element | undefined;
  // Transport Classification
  '40101067': Element | undefined;
  // OOI Type Descriptor
  '40101068': Element | undefined;
  // Total Processing Time
  '40101069': Element | undefined;
  // Detector Calibration Data
  '4010106C': Element | undefined;
  // Additional Screening Performed
  '4010106D': Element | undefined;
  // Additional Inspection Selection Criteria
  '4010106E': Element | undefined;
  // Additional Inspection Method Sequence
  '4010106F': Element | undefined;
  // AIT Device Type
  '40101070': Element | undefined;
  // QR Measurements Sequence
  '40101071': Element | undefined;
  // Target Material Sequence
  '40101072': Element | undefined;
  // SNR Threshold
  '40101073': Element | undefined;
  // Image Scale Representation
  '40101075': Element | undefined;
  // Referenced PTO Sequence
  '40101076': Element | undefined;
  // Referenced TDR Instance Sequence
  '40101077': Element | undefined;
  // PTO Location Description
  '40101078': Element | undefined;
  // Anomaly Locator Indicator Sequence
  '40101079': Element | undefined;
  // Anomaly Locator Indicator
  '4010107A': Element | undefined;
  // PTO Region Sequence
  '4010107B': Element | undefined;
  // Inspection Selection Criteria
  '4010107C': Element | undefined;
  // Secondary Inspection Method Sequence
  '4010107D': Element | undefined;
  // PRCS to RCS Orientation
  '4010107E': Element | undefined;
  // MAC Parameters Sequence
  '4FFE0001': Element | undefined;
  // Curve Dimensions
  '50XX0005': Element | undefined;
  // Number of Points
  '50XX0010': Element | undefined;
  // Type of Data
  '50XX0020': Element | undefined;
  // Curve Description
  '50XX0022': Element | undefined;
  // Axis Units
  '50XX0030': Element | undefined;
  // Axis Labels
  '50XX0040': Element | undefined;
  // Data Value Representation
  '50XX0103': Element | undefined;
  // Minimum Coordinate Value
  '50XX0104': Element | undefined;
  // Maximum Coordinate Value
  '50XX0105': Element | undefined;
  // Curve Range
  '50XX0106': Element | undefined;
  // Curve Data Descriptor
  '50XX0110': Element | undefined;
  // Coordinate Start Value
  '50XX0112': Element | undefined;
  // Coordinate Step Value
  '50XX0114': Element | undefined;
  // Curve Activation Layer
  '50XX1001': Element | undefined;
  // Audio Type
  '50XX2000': Element | undefined;
  // Audio Sample Format
  '50XX2002': Element | undefined;
  // Number of Channels
  '50XX2004': Element | undefined;
  // Number of Samples
  '50XX2006': Element | undefined;
  // Sample Rate
  '50XX2008': Element | undefined;
  // Total Time
  '50XX200A': Element | undefined;
  // Audio Sample Data
  '50XX200C': Element | undefined;
  // Audio Comments
  '50XX200E': Element | undefined;
  // Curve Label
  '50XX2500': Element | undefined;
  // Curve Referenced Overlay Sequence
  '50XX2600': Element | undefined;
  // Curve Referenced Overlay Group
  '50XX2610': Element | undefined;
  // Curve Data
  '50XX3000': Element | undefined;
  // Shared Functional Groups Sequence
  '52009229': Element | undefined;
  // Per-frame Functional Groups Sequence
  '52009230': Element | undefined;
  // Waveform Sequence
  '54000100': Element | undefined;
  // Channel Minimum Value
  '54000110': Element | undefined;
  // Channel Maximum Value
  '54000112': Element | undefined;
  // Waveform Bits Allocated
  '54001004': Element | undefined;
  // Waveform Sample Interpretation
  '54001006': Element | undefined;
  // Waveform Padding Value
  '5400100A': Element | undefined;
  // Waveform Data
  '54001010': Element | undefined;
  // First Order Phase Correction Angle
  '56000010': Element | undefined;
  // Spectroscopy Data
  '56000020': Element | undefined;
  // Overlay Rows
  '60XX0010': Element | undefined;
  // Overlay Columns
  '60XX0011': Element | undefined;
  // Overlay Planes
  '60XX0012': Element | undefined;
  // Number of Frames in Overlay
  '60XX0015': Element | undefined;
  // Overlay Description
  '60XX0022': Element | undefined;
  // Overlay Type
  '60XX0040': Element | undefined;
  // Overlay Subtype
  '60XX0045': Element | undefined;
  // Overlay Origin
  '60XX0050': Element | undefined;
  // Image Frame Origin
  '60XX0051': Element | undefined;
  // Overlay Plane Origin
  '60XX0052': Element | undefined;
  // Overlay Compression Code
  '60XX0060': Element | undefined;
  // Overlay Compression Originator
  '60XX0061': Element | undefined;
  // Overlay Compression Label
  '60XX0062': Element | undefined;
  // Overlay Compression Description
  '60XX0063': Element | undefined;
  // Overlay Compression Step Pointers
  '60XX0066': Element | undefined;
  // Overlay Repeat Interval
  '60XX0068': Element | undefined;
  // Overlay Bits Grouped
  '60XX0069': Element | undefined;
  // Overlay Bits Allocated
  '60XX0100': Element | undefined;
  // Overlay Bit Position
  '60XX0102': Element | undefined;
  // Overlay Format
  '60XX0110': Element | undefined;
  // Overlay Location
  '60XX0200': Element | undefined;
  // Overlay Code Label
  '60XX0800': Element | undefined;
  // Overlay Number of Tables
  '60XX0802': Element | undefined;
  // Overlay Code Table Location
  '60XX0803': Element | undefined;
  // Overlay Bits For Code Word
  '60XX0804': Element | undefined;
  // Overlay Activation Layer
  '60XX1001': Element | undefined;
  // Overlay Descriptor - Gray
  '60XX1100': Element | undefined;
  // Overlay Descriptor - Red
  '60XX1101': Element | undefined;
  // Overlay Descriptor - Green
  '60XX1102': Element | undefined;
  // Overlay Descriptor - Blue
  '60XX1103': Element | undefined;
  // Overlays - Gray
  '60XX1200': Element | undefined;
  // Overlays - Red
  '60XX1201': Element | undefined;
  // Overlays - Green
  '60XX1202': Element | undefined;
  // Overlays - Blue
  '60XX1203': Element | undefined;
  // ROI Area
  '60XX1301': Element | undefined;
  // ROI Mean
  '60XX1302': Element | undefined;
  // ROI Standard Deviation
  '60XX1303': Element | undefined;
  // Overlay Label
  '60XX1500': Element | undefined;
  // Overlay Data
  '60XX3000': Element | undefined;
  // Overlay Comments
  '60XX4000': Element | undefined;
  // Pixel Data
  '7FE00010': Element | undefined;
  // Coefficients SDVN
  '7FE00020': Element | undefined;
  // Coefficients SDHN
  '7FE00030': Element | undefined;
  // Coefficients SDDN
  '7FE00040': Element | undefined;
  // Variable Pixel Data
  '7FXX0010': Element | undefined;
  // Variable Next Data Group
  '7FXX0011': Element | undefined;
  // Variable Coefficients SDVN
  '7FXX0020': Element | undefined;
  // Variable Coefficients SDHN
  '7FXX0030': Element | undefined;
  // Variable Coefficients SDDN
  '7FXX0040': Element | undefined;
  // Digital Signatures Sequence
  'FFFAFFFA': Element | undefined;
  // Data Set Trailing Padding
  'FFFCFFFC': Element | undefined;}
