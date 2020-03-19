export interface Element {
  Value: Array<any>;
  vr: string;
}

/**
 * Describes a DICOM dataset with fields based on:
 * - the DICOM tag presented as an hexadecimal 8 characters string (ex.: 00100010) and
 * - the short DICOM name (ex.: PatientName).
 * All the fields are optional.
 */
export interface Dataset {
  // Mandatory field described by the DICOMWeb standard
  link: string;

    // File Meta Information Group Length
  '00020000'?: Element;
  FileMetaInformationGroupLength?: any;
  // File Meta Information Version
  '00020001'?: Element;
  FileMetaInformationVersion?: any;
  // Media Storage SOP Class UID
  '00020002'?: Element;
  MediaStorageSOPClassUID?: any;
  // Media Storage SOP Instance UID
  '00020003'?: Element;
  MediaStorageSOPInstanceUID?: any;
  // Transfer Syntax UID
  '00020010'?: Element;
  TransferSyntaxUID?: any;
  // Implementation Class UID
  '00020012'?: Element;
  ImplementationClassUID?: any;
  // Implementation Version Name
  '00020013'?: Element;
  ImplementationVersionName?: any;
  // Source Application Entity Title
  '00020016'?: Element;
  SourceApplicationEntityTitle?: any;
  // Sending Application Entity Title
  '00020017'?: Element;
  SendingApplicationEntityTitle?: any;
  // Receiving Application Entity Title
  '00020018'?: Element;
  ReceivingApplicationEntityTitle?: any;
  // Private Information Creator UID
  '00020100'?: Element;
  PrivateInformationCreatorUID?: any;
  // Private Information
  '00020102'?: Element;
  PrivateInformation?: any;
  // File-set ID
  '00041130'?: Element;
  FileSetID?: any;
  // File-set Descriptor File ID
  '00041141'?: Element;
  FileSetDescriptorFileID?: any;
  // Specific Character Set of File-set Descriptor File
  '00041142'?: Element;
  SpecificCharacterSetOfFileSetDescriptorFile?: any;
  // Offset of the First Directory Record of the Root Directory Entity
  '00041200'?: Element;
  OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity?: any;
  // Offset of the Last Directory Record of the Root Directory Entity
  '00041202'?: Element;
  OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity?: any;
  // File-set Consistency Flag
  '00041212'?: Element;
  FileSetConsistencyFlag?: any;
  // Directory Record Sequence
  '00041220'?: Element;
  DirectoryRecordSequence?: any;
  // Offset of the Next Directory Record
  '00041400'?: Element;
  OffsetOfTheNextDirectoryRecord?: any;
  // Record In-use Flag
  '00041410'?: Element;
  RecordInUseFlag?: any;
  // Offset of Referenced Lower-Level Directory Entity
  '00041420'?: Element;
  OffsetOfReferencedLowerLevelDirectoryEntity?: any;
  // Directory Record Type
  '00041430'?: Element;
  DirectoryRecordType?: any;
  // Private Record UID
  '00041432'?: Element;
  PrivateRecordUID?: any;
  // Referenced File ID
  '00041500'?: Element;
  ReferencedFileID?: any;
  // MRDR Directory Record Offset
  '00041504'?: Element;
  MRDRDirectoryRecordOffset?: any;
  // Referenced SOP Class UID in File
  '00041510'?: Element;
  ReferencedSOPClassUIDInFile?: any;
  // Referenced SOP Instance UID in File
  '00041511'?: Element;
  ReferencedSOPInstanceUIDInFile?: any;
  // Referenced Transfer Syntax UID in File
  '00041512'?: Element;
  ReferencedTransferSyntaxUIDInFile?: any;
  // Referenced Related General SOP Class UID in File
  '0004151A'?: Element;
  ReferencedRelatedGeneralSOPClassUIDInFile?: any;
  // Number of References
  '00041600'?: Element;
  NumberOfReferences?: any;
  // Length to End
  '00080001'?: Element;
  LengthToEnd?: any;
  // Specific Character Set
  '00080005'?: Element;
  SpecificCharacterSet?: any;
  // Language Code Sequence
  '00080006'?: Element;
  LanguageCodeSequence?: any;
  // Image Type
  '00080008'?: Element;
  ImageType?: any;
  // Recognition Code
  '00080010'?: Element;
  RecognitionCode?: any;
  // Instance Creation Date
  '00080012'?: Element;
  InstanceCreationDate?: any;
  // Instance Creation Time
  '00080013'?: Element;
  InstanceCreationTime?: any;
  // Instance Creator UID
  '00080014'?: Element;
  InstanceCreatorUID?: any;
  // Instance Coercion DateTime
  '00080015'?: Element;
  InstanceCoercionDateTime?: any;
  // SOP Class UID
  '00080016'?: Element;
  SOPClassUID?: any;
  // SOP Instance UID
  '00080018'?: Element;
  SOPInstanceUID?: any;
  // Related General SOP Class UID
  '0008001A'?: Element;
  RelatedGeneralSOPClassUID?: any;
  // Original Specialized SOP Class UID
  '0008001B'?: Element;
  OriginalSpecializedSOPClassUID?: any;
  // Study Date
  '00080020'?: Element;
  StudyDate?: any;
  // Series Date
  '00080021'?: Element;
  SeriesDate?: any;
  // Acquisition Date
  '00080022'?: Element;
  AcquisitionDate?: any;
  // Content Date
  '00080023'?: Element;
  ContentDate?: any;
  // Overlay Date
  '00080024'?: Element;
  OverlayDate?: any;
  // Curve Date
  '00080025'?: Element;
  CurveDate?: any;
  // Acquisition DateTime
  '0008002A'?: Element;
  AcquisitionDateTime?: any;
  // Study Time
  '00080030'?: Element;
  StudyTime?: any;
  // Series Time
  '00080031'?: Element;
  SeriesTime?: any;
  // Acquisition Time
  '00080032'?: Element;
  AcquisitionTime?: any;
  // Content Time
  '00080033'?: Element;
  ContentTime?: any;
  // Overlay Time
  '00080034'?: Element;
  OverlayTime?: any;
  // Curve Time
  '00080035'?: Element;
  CurveTime?: any;
  // Data Set Type
  '00080040'?: Element;
  DataSetType?: any;
  // Data Set Subtype
  '00080041'?: Element;
  DataSetSubtype?: any;
  // Nuclear Medicine Series Type
  '00080042'?: Element;
  NuclearMedicineSeriesType?: any;
  // Accession Number
  '00080050'?: Element;
  AccessionNumber?: any;
  // Issuer of Accession Number Sequence
  '00080051'?: Element;
  IssuerOfAccessionNumberSequence?: any;
  // Query/Retrieve Level
  '00080052'?: Element;
  QueryRetrieveLevel?: any;
  // Query/Retrieve View
  '00080053'?: Element;
  QueryRetrieveView?: any;
  // Retrieve AE Title
  '00080054'?: Element;
  RetrieveAETitle?: any;
  // Instance Availability
  '00080056'?: Element;
  InstanceAvailability?: any;
  // Failed SOP Instance UID List
  '00080058'?: Element;
  FailedSOPInstanceUIDList?: any;
  // Modality
  '00080060'?: Element;
  Modality?: any;
  // Modalities in Study
  '00080061'?: Element;
  ModalitiesInStudy?: any;
  // SOP Classes in Study
  '00080062'?: Element;
  SOPClassesInStudy?: any;
  // Conversion Type
  '00080064'?: Element;
  ConversionType?: any;
  // Presentation Intent Type
  '00080068'?: Element;
  PresentationIntentType?: any;
  // Manufacturer
  '00080070'?: Element;
  Manufacturer?: any;
  // Institution Name
  '00080080'?: Element;
  InstitutionName?: any;
  // Institution Address
  '00080081'?: Element;
  InstitutionAddress?: any;
  // Institution Code Sequence
  '00080082'?: Element;
  InstitutionCodeSequence?: any;
  // Referring Physician's Name
  '00080090'?: Element;
  ReferringPhysicianName?: any;
  // Referring Physician's Address
  '00080092'?: Element;
  ReferringPhysicianAddress?: any;
  // Referring Physician's Telephone Numbers
  '00080094'?: Element;
  ReferringPhysicianTelephoneNumbers?: any;
  // Referring Physician Identification Sequence
  '00080096'?: Element;
  ReferringPhysicianIdentificationSequence?: any;
  // Code Value
  '00080100'?: Element;
  CodeValue?: any;
  // Extended Code Value
  '00080101'?: Element;
  ExtendedCodeValue?: any;
  // Coding Scheme Designator
  '00080102'?: Element;
  CodingSchemeDesignator?: any;
  // Coding Scheme Version
  '00080103'?: Element;
  CodingSchemeVersion?: any;
  // Code Meaning
  '00080104'?: Element;
  CodeMeaning?: any;
  // Mapping Resource
  '00080105'?: Element;
  MappingResource?: any;
  // Context Group Version
  '00080106'?: Element;
  ContextGroupVersion?: any;
  // Context Group Local Version
  '00080107'?: Element;
  ContextGroupLocalVersion?: any;
  // Extended Code Meaning
  '00080108'?: Element;
  ExtendedCodeMeaning?: any;
  // Context Group Extension Flag
  '0008010B'?: Element;
  ContextGroupExtensionFlag?: any;
  // Coding Scheme UID
  '0008010C'?: Element;
  CodingSchemeUID?: any;
  // Context Group Extension Creator UID
  '0008010D'?: Element;
  ContextGroupExtensionCreatorUID?: any;
  // Context Identifier
  '0008010F'?: Element;
  ContextIdentifier?: any;
  // Coding Scheme Identification Sequence
  '00080110'?: Element;
  CodingSchemeIdentificationSequence?: any;
  // Coding Scheme Registry
  '00080112'?: Element;
  CodingSchemeRegistry?: any;
  // Coding Scheme External ID
  '00080114'?: Element;
  CodingSchemeExternalID?: any;
  // Coding Scheme Name
  '00080115'?: Element;
  CodingSchemeName?: any;
  // Coding Scheme Responsible Organization
  '00080116'?: Element;
  CodingSchemeResponsibleOrganization?: any;
  // Context UID
  '00080117'?: Element;
  ContextUID?: any;
  // Timezone Offset From UTC
  '00080201'?: Element;
  TimezoneOffsetFromUTC?: any;
  // Network ID
  '00081000'?: Element;
  NetworkID?: any;
  // Station Name
  '00081010'?: Element;
  StationName?: any;
  // Study Description
  '00081030'?: Element;
  StudyDescription?: any;
  // Procedure Code Sequence
  '00081032'?: Element;
  ProcedureCodeSequence?: any;
  // Series Description
  '0008103E'?: Element;
  SeriesDescription?: any;
  // Series Description Code Sequence
  '0008103F'?: Element;
  SeriesDescriptionCodeSequence?: any;
  // Institutional Department Name
  '00081040'?: Element;
  InstitutionalDepartmentName?: any;
  // Physician(s) of Record
  '00081048'?: Element;
  PhysiciansOfRecord?: any;
  // Physician(s) of Record Identification Sequence
  '00081049'?: Element;
  PhysiciansOfRecordIdentificationSequence?: any;
  // Performing Physician's Name
  '00081050'?: Element;
  PerformingPhysicianName?: any;
  // Performing Physician Identification Sequence
  '00081052'?: Element;
  PerformingPhysicianIdentificationSequence?: any;
  // Name of Physician(s) Reading Study
  '00081060'?: Element;
  NameOfPhysiciansReadingStudy?: any;
  // Physician(s) Reading Study Identification Sequence
  '00081062'?: Element;
  PhysiciansReadingStudyIdentificationSequence?: any;
  // Operators' Name
  '00081070'?: Element;
  OperatorsName?: any;
  // Operator Identification Sequence
  '00081072'?: Element;
  OperatorIdentificationSequence?: any;
  // Admitting Diagnoses Description
  '00081080'?: Element;
  AdmittingDiagnosesDescription?: any;
  // Admitting Diagnoses Code Sequence
  '00081084'?: Element;
  AdmittingDiagnosesCodeSequence?: any;
  // Manufacturer's Model Name
  '00081090'?: Element;
  ManufacturerModelName?: any;
  // Referenced Results Sequence
  '00081100'?: Element;
  ReferencedResultsSequence?: any;
  // Referenced Study Sequence
  '00081110'?: Element;
  ReferencedStudySequence?: any;
  // Referenced Performed Procedure Step Sequence
  '00081111'?: Element;
  ReferencedPerformedProcedureStepSequence?: any;
  // Referenced Series Sequence
  '00081115'?: Element;
  ReferencedSeriesSequence?: any;
  // Referenced Patient Sequence
  '00081120'?: Element;
  ReferencedPatientSequence?: any;
  // Referenced Visit Sequence
  '00081125'?: Element;
  ReferencedVisitSequence?: any;
  // Referenced Overlay Sequence
  '00081130'?: Element;
  ReferencedOverlaySequence?: any;
  // Referenced Stereometric Instance Sequence
  '00081134'?: Element;
  ReferencedStereometricInstanceSequence?: any;
  // Referenced Waveform Sequence
  '0008113A'?: Element;
  ReferencedWaveformSequence?: any;
  // Referenced Image Sequence
  '00081140'?: Element;
  ReferencedImageSequence?: any;
  // Referenced Curve Sequence
  '00081145'?: Element;
  ReferencedCurveSequence?: any;
  // Referenced Instance Sequence
  '0008114A'?: Element;
  ReferencedInstanceSequence?: any;
  // Referenced Real World Value Mapping Instance Sequence
  '0008114B'?: Element;
  ReferencedRealWorldValueMappingInstanceSequence?: any;
  // Referenced SOP Class UID
  '00081150'?: Element;
  ReferencedSOPClassUID?: any;
  // Referenced SOP Instance UID
  '00081155'?: Element;
  ReferencedSOPInstanceUID?: any;
  // SOP Classes Supported
  '0008115A'?: Element;
  SOPClassesSupported?: any;
  // Referenced Frame Number
  '00081160'?: Element;
  ReferencedFrameNumber?: any;
  // Simple Frame List
  '00081161'?: Element;
  SimpleFrameList?: any;
  // Calculated Frame List
  '00081162'?: Element;
  CalculatedFrameList?: any;
  // Time Range
  '00081163'?: Element;
  TimeRange?: any;
  // Frame Extraction Sequence
  '00081164'?: Element;
  FrameExtractionSequence?: any;
  // Multi-frame Source SOP Instance UID
  '00081167'?: Element;
  MultiFrameSourceSOPInstanceUID?: any;
  // Retrieve URL
  '00081190'?: Element;
  RetrieveURL?: any;
  // Transaction UID
  '00081195'?: Element;
  TransactionUID?: any;
  // Warning Reason
  '00081196'?: Element;
  WarningReason?: any;
  // Failure Reason
  '00081197'?: Element;
  FailureReason?: any;
  // Failed SOP Sequence
  '00081198'?: Element;
  FailedSOPSequence?: any;
  // Referenced SOP Sequence
  '00081199'?: Element;
  ReferencedSOPSequence?: any;
  // Studies Containing Other Referenced Instances Sequence
  '00081200'?: Element;
  StudiesContainingOtherReferencedInstancesSequence?: any;
  // Related Series Sequence
  '00081250'?: Element;
  RelatedSeriesSequence?: any;
  // Lossy Image Compression (Retired)
  '00082110'?: Element;
  LossyImageCompressionRetired?: any;
  // Derivation Description
  '00082111'?: Element;
  DerivationDescription?: any;
  // Source Image Sequence
  '00082112'?: Element;
  SourceImageSequence?: any;
  // Stage Name
  '00082120'?: Element;
  StageName?: any;
  // Stage Number
  '00082122'?: Element;
  StageNumber?: any;
  // Number of Stages
  '00082124'?: Element;
  NumberOfStages?: any;
  // View Name
  '00082127'?: Element;
  ViewName?: any;
  // View Number
  '00082128'?: Element;
  ViewNumber?: any;
  // Number of Event Timers
  '00082129'?: Element;
  NumberOfEventTimers?: any;
  // Number of Views in Stage
  '0008212A'?: Element;
  NumberOfViewsInStage?: any;
  // Event Elapsed Time(s)
  '00082130'?: Element;
  EventElapsedTimes?: any;
  // Event Timer Name(s)
  '00082132'?: Element;
  EventTimerNames?: any;
  // Event Timer Sequence
  '00082133'?: Element;
  EventTimerSequence?: any;
  // Event Time Offset
  '00082134'?: Element;
  EventTimeOffset?: any;
  // Event Code Sequence
  '00082135'?: Element;
  EventCodeSequence?: any;
  // Start Trim
  '00082142'?: Element;
  StartTrim?: any;
  // Stop Trim
  '00082143'?: Element;
  StopTrim?: any;
  // Recommended Display Frame Rate
  '00082144'?: Element;
  RecommendedDisplayFrameRate?: any;
  // Transducer Position
  '00082200'?: Element;
  TransducerPosition?: any;
  // Transducer Orientation
  '00082204'?: Element;
  TransducerOrientation?: any;
  // Anatomic Structure
  '00082208'?: Element;
  AnatomicStructure?: any;
  // Anatomic Region Sequence
  '00082218'?: Element;
  AnatomicRegionSequence?: any;
  // Anatomic Region Modifier Sequence
  '00082220'?: Element;
  AnatomicRegionModifierSequence?: any;
  // Primary Anatomic Structure Sequence
  '00082228'?: Element;
  PrimaryAnatomicStructureSequence?: any;
  // Anatomic Structure
  '00082229'?: Element;
  AnatomicStructureSpaceOrRegionSequence?: any;
  // Primary Anatomic Structure Modifier Sequence
  '00082230'?: Element;
  PrimaryAnatomicStructureModifierSequence?: any;
  // Transducer Position Sequence
  '00082240'?: Element;
  TransducerPositionSequence?: any;
  // Transducer Position Modifier Sequence
  '00082242'?: Element;
  TransducerPositionModifierSequence?: any;
  // Transducer Orientation Sequence
  '00082244'?: Element;
  TransducerOrientationSequence?: any;
  // Transducer Orientation Modifier Sequence
  '00082246'?: Element;
  TransducerOrientationModifierSequence?: any;
  // Anatomic Structure Space Or Region Code Sequence (Trial)
  '00082251'?: Element;
  AnatomicStructureSpaceOrRegionCodeSequenceTrial?: any;
  // Anatomic Portal Of Entrance Code Sequence (Trial)
  '00082253'?: Element;
  AnatomicPortalOfEntranceCodeSequenceTrial?: any;
  // Anatomic Approach Direction Code Sequence (Trial)
  '00082255'?: Element;
  AnatomicApproachDirectionCodeSequenceTrial?: any;
  // Anatomic Perspective Description (Trial)
  '00082256'?: Element;
  AnatomicPerspectiveDescriptionTrial?: any;
  // Anatomic Perspective Code Sequence (Trial)
  '00082257'?: Element;
  AnatomicPerspectiveCodeSequenceTrial?: any;
  // Anatomic Location Of Examining Instrument Description (Trial)
  '00082258'?: Element;
  AnatomicLocationOfExaminingInstrumentDescriptionTrial?: any;
  // Anatomic Location Of Examining Instrument Code Sequence (Trial)
  '00082259'?: Element;
  AnatomicLocationOfExaminingInstrumentCodeSequenceTrial?: any;
  // Anatomic Structure Space Or Region Modifier Code Sequence (Trial)
  '0008225A'?: Element;
  AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial?: any;
  // OnAxis Background Anatomic Structure Code Sequence (Trial)
  '0008225C'?: Element;
  OnAxisBackgroundAnatomicStructureCodeSequenceTrial?: any;
  // Alternate Representation Sequence
  '00083001'?: Element;
  AlternateRepresentationSequence?: any;
  // Irradiation Event UID
  '00083010'?: Element;
  IrradiationEventUID?: any;
  // Source Irradiation Event Sequence
  '00083011'?: Element;
  SourceIrradiationEventSequence?: any;
  // Radiopharmaceutical Administration Event UID
  '00083012'?: Element;
  RadiopharmaceuticalAdministrationEventUID?: any;
  // Identifying Comments
  '00084000'?: Element;
  IdentifyingComments?: any;
  // Frame Type
  '00089007'?: Element;
  FrameType?: any;
  // Referenced Image Evidence Sequence
  '00089092'?: Element;
  ReferencedImageEvidenceSequence?: any;
  // Referenced Raw Data Sequence
  '00089121'?: Element;
  ReferencedRawDataSequence?: any;
  // Creator-Version UID
  '00089123'?: Element;
  CreatorVersionUID?: any;
  // Derivation Image Sequence
  '00089124'?: Element;
  DerivationImageSequence?: any;
  // Source Image Evidence Sequence
  '00089154'?: Element;
  SourceImageEvidenceSequence?: any;
  // Pixel Presentation
  '00089205'?: Element;
  PixelPresentation?: any;
  // Volumetric Properties
  '00089206'?: Element;
  VolumetricProperties?: any;
  // Volume Based Calculation Technique
  '00089207'?: Element;
  VolumeBasedCalculationTechnique?: any;
  // Complex Image Component
  '00089208'?: Element;
  ComplexImageComponent?: any;
  // Acquisition Contrast
  '00089209'?: Element;
  AcquisitionContrast?: any;
  // Derivation Code Sequence
  '00089215'?: Element;
  DerivationCodeSequence?: any;
  // Referenced Presentation State Sequence
  '00089237'?: Element;
  ReferencedPresentationStateSequence?: any;
  // Referenced Other Plane Sequence
  '00089410'?: Element;
  ReferencedOtherPlaneSequence?: any;
  // Frame Display Sequence
  '00089458'?: Element;
  FrameDisplaySequence?: any;
  // Recommended Display Frame Rate in Float
  '00089459'?: Element;
  RecommendedDisplayFrameRateInFloat?: any;
  // Skip Frame Range Flag
  '00089460'?: Element;
  SkipFrameRangeFlag?: any;
  // Patient's Name
  '00100010'?: Element;
  PatientName?: any;
  // Patient ID
  '00100020'?: Element;
  PatientID?: any;
  // Issuer of Patient ID
  '00100021'?: Element;
  IssuerOfPatientID?: any;
  // Type of Patient ID
  '00100022'?: Element;
  TypeOfPatientID?: any;
  // Issuer of Patient ID Qualifiers Sequence
  '00100024'?: Element;
  IssuerOfPatientIDQualifiersSequence?: any;
  // Patient's Birth Date
  '00100030'?: Element;
  PatientBirthDate?: any;
  // Patient's Birth Time
  '00100032'?: Element;
  PatientBirthTime?: any;
  // Patient's Sex
  '00100040'?: Element;
  PatientSex?: any;
  // Patient's Insurance Plan Code Sequence
  '00100050'?: Element;
  PatientInsurancePlanCodeSequence?: any;
  // Patient's Primary Language Code Sequence
  '00100101'?: Element;
  PatientPrimaryLanguageCodeSequence?: any;
  // Patient's Primary Language Modifier Code Sequence
  '00100102'?: Element;
  PatientPrimaryLanguageModifierCodeSequence?: any;
  // Quality Control Subject
  '00100200'?: Element;
  QualityControlSubject?: any;
  // Quality Control Subject Type Code Sequence
  '00100201'?: Element;
  QualityControlSubjectTypeCodeSequence?: any;
  // Other Patient IDs
  '00101000'?: Element;
  OtherPatientIDs?: any;
  // Other Patient Names
  '00101001'?: Element;
  OtherPatientNames?: any;
  // Other Patient IDs Sequence
  '00101002'?: Element;
  OtherPatientIDsSequence?: any;
  // Patient's Birth Name
  '00101005'?: Element;
  PatientBirthName?: any;
  // Patient's Age
  '00101010'?: Element;
  PatientAge?: any;
  // Patient's Size
  '00101020'?: Element;
  PatientSize?: any;
  // Patient's Size Code Sequence
  '00101021'?: Element;
  PatientSizeCodeSequence?: any;
  // Patient's Weight
  '00101030'?: Element;
  PatientWeight?: any;
  // Patient's Address
  '00101040'?: Element;
  PatientAddress?: any;
  // Insurance Plan Identification
  '00101050'?: Element;
  InsurancePlanIdentification?: any;
  // Patient's Mother's Birth Name
  '00101060'?: Element;
  PatientMotherBirthName?: any;
  // Military Rank
  '00101080'?: Element;
  MilitaryRank?: any;
  // Branch of Service
  '00101081'?: Element;
  BranchOfService?: any;
  // Medical Record Locator
  '00101090'?: Element;
  MedicalRecordLocator?: any;
  // Referenced Patient Photo Sequence
  '00101100'?: Element;
  ReferencedPatientPhotoSequence?: any;
  // Medical Alerts
  '00102000'?: Element;
  MedicalAlerts?: any;
  // Allergies
  '00102110'?: Element;
  Allergies?: any;
  // Country of Residence
  '00102150'?: Element;
  CountryOfResidence?: any;
  // Region of Residence
  '00102152'?: Element;
  RegionOfResidence?: any;
  // Patient's Telephone Numbers
  '00102154'?: Element;
  PatientTelephoneNumbers?: any;
  // Ethnic Group
  '00102160'?: Element;
  EthnicGroup?: any;
  // Occupation
  '00102180'?: Element;
  Occupation?: any;
  // Smoking Status
  '001021A0'?: Element;
  SmokingStatus?: any;
  // Additional Patient History
  '001021B0'?: Element;
  AdditionalPatientHistory?: any;
  // Pregnancy Status
  '001021C0'?: Element;
  PregnancyStatus?: any;
  // Last Menstrual Date
  '001021D0'?: Element;
  LastMenstrualDate?: any;
  // Patient's Religious Preference
  '001021F0'?: Element;
  PatientReligiousPreference?: any;
  // Patient Species Description
  '00102201'?: Element;
  PatientSpeciesDescription?: any;
  // Patient Species Code Sequence
  '00102202'?: Element;
  PatientSpeciesCodeSequence?: any;
  // Patient's Sex Neutered
  '00102203'?: Element;
  PatientSexNeutered?: any;
  // Anatomical Orientation Type
  '00102210'?: Element;
  AnatomicalOrientationType?: any;
  // Patient Breed Description
  '00102292'?: Element;
  PatientBreedDescription?: any;
  // Patient Breed Code Sequence
  '00102293'?: Element;
  PatientBreedCodeSequence?: any;
  // Breed Registration Sequence
  '00102294'?: Element;
  BreedRegistrationSequence?: any;
  // Breed Registration Number
  '00102295'?: Element;
  BreedRegistrationNumber?: any;
  // Breed Registry Code Sequence
  '00102296'?: Element;
  BreedRegistryCodeSequence?: any;
  // Responsible Person
  '00102297'?: Element;
  ResponsiblePerson?: any;
  // Responsible Person Role
  '00102298'?: Element;
  ResponsiblePersonRole?: any;
  // Responsible Organization
  '00102299'?: Element;
  ResponsibleOrganization?: any;
  // Patient Comments
  '00104000'?: Element;
  PatientComments?: any;
  // Examined Body Thickness
  '00109431'?: Element;
  ExaminedBodyThickness?: any;
  // Clinical Trial Sponsor Name
  '00120010'?: Element;
  ClinicalTrialSponsorName?: any;
  // Clinical Trial Protocol ID
  '00120020'?: Element;
  ClinicalTrialProtocolID?: any;
  // Clinical Trial Protocol Name
  '00120021'?: Element;
  ClinicalTrialProtocolName?: any;
  // Clinical Trial Site ID
  '00120030'?: Element;
  ClinicalTrialSiteID?: any;
  // Clinical Trial Site Name
  '00120031'?: Element;
  ClinicalTrialSiteName?: any;
  // Clinical Trial Subject ID
  '00120040'?: Element;
  ClinicalTrialSubjectID?: any;
  // Clinical Trial Subject Reading ID
  '00120042'?: Element;
  ClinicalTrialSubjectReadingID?: any;
  // Clinical Trial Time Point ID
  '00120050'?: Element;
  ClinicalTrialTimePointID?: any;
  // Clinical Trial Time Point Description
  '00120051'?: Element;
  ClinicalTrialTimePointDescription?: any;
  // Clinical Trial Coordinating Center Name
  '00120060'?: Element;
  ClinicalTrialCoordinatingCenterName?: any;
  // Patient Identity Removed
  '00120062'?: Element;
  PatientIdentityRemoved?: any;
  // De-identification Method
  '00120063'?: Element;
  DeidentificationMethod?: any;
  // De-identification Method Code Sequence
  '00120064'?: Element;
  DeidentificationMethodCodeSequence?: any;
  // Clinical Trial Series ID
  '00120071'?: Element;
  ClinicalTrialSeriesID?: any;
  // Clinical Trial Series Description
  '00120072'?: Element;
  ClinicalTrialSeriesDescription?: any;
  // Clinical Trial Protocol Ethics Committee Name
  '00120081'?: Element;
  ClinicalTrialProtocolEthicsCommitteeName?: any;
  // Clinical Trial Protocol Ethics Committee Approval Number
  '00120082'?: Element;
  ClinicalTrialProtocolEthicsCommitteeApprovalNumber?: any;
  // Consent for Clinical Trial Use Sequence
  '00120083'?: Element;
  ConsentForClinicalTrialUseSequence?: any;
  // Distribution Type
  '00120084'?: Element;
  DistributionType?: any;
  // Consent for Distribution Flag
  '00120085'?: Element;
  ConsentForDistributionFlag?: any;
  // CAD File Format
  '00140023'?: Element;
  CADFileFormat?: any;
  // Component Reference System
  '00140024'?: Element;
  ComponentReferenceSystem?: any;
  // Component Manufacturing Procedure
  '00140025'?: Element;
  ComponentManufacturingProcedure?: any;
  // Component Manufacturer
  '00140028'?: Element;
  ComponentManufacturer?: any;
  // Material Thickness
  '00140030'?: Element;
  MaterialThickness?: any;
  // Material Pipe Diameter
  '00140032'?: Element;
  MaterialPipeDiameter?: any;
  // Material Isolation Diameter
  '00140034'?: Element;
  MaterialIsolationDiameter?: any;
  // Material Grade
  '00140042'?: Element;
  MaterialGrade?: any;
  // Material Properties Description
  '00140044'?: Element;
  MaterialPropertiesDescription?: any;
  // Material Properties File Format (Retired)
  '00140045'?: Element;
  MaterialPropertiesFileFormatRetired?: any;
  // Material Notes
  '00140046'?: Element;
  MaterialNotes?: any;
  // Component Shape
  '00140050'?: Element;
  ComponentShape?: any;
  // Curvature Type
  '00140052'?: Element;
  CurvatureType?: any;
  // Outer Diameter
  '00140054'?: Element;
  OuterDiameter?: any;
  // Inner Diameter
  '00140056'?: Element;
  InnerDiameter?: any;
  // Actual Environmental Conditions
  '00141010'?: Element;
  ActualEnvironmentalConditions?: any;
  // Expiry Date
  '00141020'?: Element;
  ExpiryDate?: any;
  // Environmental Conditions
  '00141040'?: Element;
  EnvironmentalConditions?: any;
  // Evaluator Sequence
  '00142002'?: Element;
  EvaluatorSequence?: any;
  // Evaluator Number
  '00142004'?: Element;
  EvaluatorNumber?: any;
  // Evaluator Name
  '00142006'?: Element;
  EvaluatorName?: any;
  // Evaluation Attempt
  '00142008'?: Element;
  EvaluationAttempt?: any;
  // Indication Sequence
  '00142012'?: Element;
  IndicationSequence?: any;
  // Indication Number
  '00142014'?: Element;
  IndicationNumber?: any;
  // Indication Label
  '00142016'?: Element;
  IndicationLabel?: any;
  // Indication Description
  '00142018'?: Element;
  IndicationDescription?: any;
  // Indication Type
  '0014201A'?: Element;
  IndicationType?: any;
  // Indication Disposition
  '0014201C'?: Element;
  IndicationDisposition?: any;
  // Indication ROI Sequence
  '0014201E'?: Element;
  IndicationROISequence?: any;
  // Indication Physical Property Sequence
  '00142030'?: Element;
  IndicationPhysicalPropertySequence?: any;
  // Property Label
  '00142032'?: Element;
  PropertyLabel?: any;
  // Coordinate System Number of Axes
  '00142202'?: Element;
  CoordinateSystemNumberOfAxes?: any;
  // Coordinate System Axes Sequence
  '00142204'?: Element;
  CoordinateSystemAxesSequence?: any;
  // Coordinate System Axis Description
  '00142206'?: Element;
  CoordinateSystemAxisDescription?: any;
  // Coordinate System Data Set Mapping
  '00142208'?: Element;
  CoordinateSystemDataSetMapping?: any;
  // Coordinate System Axis Number
  '0014220A'?: Element;
  CoordinateSystemAxisNumber?: any;
  // Coordinate System Axis Type
  '0014220C'?: Element;
  CoordinateSystemAxisType?: any;
  // Coordinate System Axis Units
  '0014220E'?: Element;
  CoordinateSystemAxisUnits?: any;
  // Coordinate System Axis Values
  '00142210'?: Element;
  CoordinateSystemAxisValues?: any;
  // Coordinate System Transform Sequence
  '00142220'?: Element;
  CoordinateSystemTransformSequence?: any;
  // Transform Description
  '00142222'?: Element;
  TransformDescription?: any;
  // Transform Number of Axes
  '00142224'?: Element;
  TransformNumberOfAxes?: any;
  // Transform Order of Axes
  '00142226'?: Element;
  TransformOrderOfAxes?: any;
  // Transformed Axis Units
  '00142228'?: Element;
  TransformedAxisUnits?: any;
  // Coordinate System Transform Rotation and Scale Matrix
  '0014222A'?: Element;
  CoordinateSystemTransformRotationAndScaleMatrix?: any;
  // Coordinate System Transform Translation Matrix
  '0014222C'?: Element;
  CoordinateSystemTransformTranslationMatrix?: any;
  // Internal Detector Frame Time
  '00143011'?: Element;
  InternalDetectorFrameTime?: any;
  // Number of Frames Integrated
  '00143012'?: Element;
  NumberOfFramesIntegrated?: any;
  // Detector Temperature Sequence
  '00143020'?: Element;
  DetectorTemperatureSequence?: any;
  // Sensor Name
  '00143022'?: Element;
  SensorName?: any;
  // Horizontal Offset of Sensor
  '00143024'?: Element;
  HorizontalOffsetOfSensor?: any;
  // Vertical Offset of Sensor
  '00143026'?: Element;
  VerticalOffsetOfSensor?: any;
  // Sensor Temperature
  '00143028'?: Element;
  SensorTemperature?: any;
  // Dark Current Sequence
  '00143040'?: Element;
  DarkCurrentSequence?: any;
  // Dark Current Counts
  '00143050'?: Element;
  DarkCurrentCounts?: any;
  // Gain Correction Reference Sequence
  '00143060'?: Element;
  GainCorrectionReferenceSequence?: any;
  // Air Counts
  '00143070'?: Element;
  AirCounts?: any;
  // KV Used in Gain Calibration
  '00143071'?: Element;
  KVUsedInGainCalibration?: any;
  // MA Used in Gain Calibration
  '00143072'?: Element;
  MAUsedInGainCalibration?: any;
  // Number of Frames Used for Integration
  '00143073'?: Element;
  NumberOfFramesUsedForIntegration?: any;
  // Filter Material Used in Gain Calibration
  '00143074'?: Element;
  FilterMaterialUsedInGainCalibration?: any;
  // Filter Thickness Used in Gain Calibration
  '00143075'?: Element;
  FilterThicknessUsedInGainCalibration?: any;
  // Date of Gain Calibration
  '00143076'?: Element;
  DateOfGainCalibration?: any;
  // Time of Gain Calibration
  '00143077'?: Element;
  TimeOfGainCalibration?: any;
  // Bad Pixel Image
  '00143080'?: Element;
  BadPixelImage?: any;
  // Calibration Notes
  '00143099'?: Element;
  CalibrationNotes?: any;
  // Pulser Equipment Sequence
  '00144002'?: Element;
  PulserEquipmentSequence?: any;
  // Pulser Type
  '00144004'?: Element;
  PulserType?: any;
  // Pulser Notes
  '00144006'?: Element;
  PulserNotes?: any;
  // Receiver Equipment Sequence
  '00144008'?: Element;
  ReceiverEquipmentSequence?: any;
  // Amplifier Type
  '0014400A'?: Element;
  AmplifierType?: any;
  // Receiver Notes
  '0014400C'?: Element;
  ReceiverNotes?: any;
  // Pre-Amplifier Equipment Sequence
  '0014400E'?: Element;
  PreAmplifierEquipmentSequence?: any;
  // Pre-Amplifier Notes
  '0014400F'?: Element;
  PreAmplifierNotes?: any;
  // Transmit Transducer Sequence
  '00144010'?: Element;
  TransmitTransducerSequence?: any;
  // Receive Transducer Sequence
  '00144011'?: Element;
  ReceiveTransducerSequence?: any;
  // Number of Elements
  '00144012'?: Element;
  NumberOfElements?: any;
  // Element Shape
  '00144013'?: Element;
  ElementShape?: any;
  // Element Dimension A
  '00144014'?: Element;
  ElementDimensionA?: any;
  // Element Dimension B
  '00144015'?: Element;
  ElementDimensionB?: any;
  // Element Pitch A
  '00144016'?: Element;
  ElementPitchA?: any;
  // Measured Beam Dimension A
  '00144017'?: Element;
  MeasuredBeamDimensionA?: any;
  // Measured Beam Dimension B
  '00144018'?: Element;
  MeasuredBeamDimensionB?: any;
  // Location of Measured Beam Diameter
  '00144019'?: Element;
  LocationOfMeasuredBeamDiameter?: any;
  // Nominal Frequency
  '0014401A'?: Element;
  NominalFrequency?: any;
  // Measured Center Frequency
  '0014401B'?: Element;
  MeasuredCenterFrequency?: any;
  // Measured Bandwidth
  '0014401C'?: Element;
  MeasuredBandwidth?: any;
  // Element Pitch B
  '0014401D'?: Element;
  ElementPitchB?: any;
  // Pulser Settings Sequence
  '00144020'?: Element;
  PulserSettingsSequence?: any;
  // Pulse Width
  '00144022'?: Element;
  PulseWidth?: any;
  // Excitation Frequency
  '00144024'?: Element;
  ExcitationFrequency?: any;
  // Modulation Type
  '00144026'?: Element;
  ModulationType?: any;
  // Damping
  '00144028'?: Element;
  Damping?: any;
  // Receiver Settings Sequence
  '00144030'?: Element;
  ReceiverSettingsSequence?: any;
  // Acquired Soundpath Length
  '00144031'?: Element;
  AcquiredSoundpathLength?: any;
  // Acquisition Compression Type
  '00144032'?: Element;
  AcquisitionCompressionType?: any;
  // Acquisition Sample Size
  '00144033'?: Element;
  AcquisitionSampleSize?: any;
  // Rectifier Smoothing
  '00144034'?: Element;
  RectifierSmoothing?: any;
  // DAC Sequence
  '00144035'?: Element;
  DACSequence?: any;
  // DAC Type
  '00144036'?: Element;
  DACType?: any;
  // DAC Gain Points
  '00144038'?: Element;
  DACGainPoints?: any;
  // DAC Time Points
  '0014403A'?: Element;
  DACTimePoints?: any;
  // DAC Amplitude
  '0014403C'?: Element;
  DACAmplitude?: any;
  // Pre-Amplifier Settings Sequence
  '00144040'?: Element;
  PreAmplifierSettingsSequence?: any;
  // Transmit Transducer Settings Sequence
  '00144050'?: Element;
  TransmitTransducerSettingsSequence?: any;
  // Receive Transducer Settings Sequence
  '00144051'?: Element;
  ReceiveTransducerSettingsSequence?: any;
  // Incident Angle
  '00144052'?: Element;
  IncidentAngle?: any;
  // Coupling Technique
  '00144054'?: Element;
  CouplingTechnique?: any;
  // Coupling Medium
  '00144056'?: Element;
  CouplingMedium?: any;
  // Coupling Velocity
  '00144057'?: Element;
  CouplingVelocity?: any;
  // Probe Center Location X
  '00144058'?: Element;
  ProbeCenterLocationX?: any;
  // Probe Center Location Z
  '00144059'?: Element;
  ProbeCenterLocationZ?: any;
  // Sound Path Length
  '0014405A'?: Element;
  SoundPathLength?: any;
  // Delay Law Identifier
  '0014405C'?: Element;
  DelayLawIdentifier?: any;
  // Gate Settings Sequence
  '00144060'?: Element;
  GateSettingsSequence?: any;
  // Gate Threshold
  '00144062'?: Element;
  GateThreshold?: any;
  // Velocity of Sound
  '00144064'?: Element;
  VelocityOfSound?: any;
  // Calibration Settings Sequence
  '00144070'?: Element;
  CalibrationSettingsSequence?: any;
  // Calibration Procedure
  '00144072'?: Element;
  CalibrationProcedure?: any;
  // Procedure Version
  '00144074'?: Element;
  ProcedureVersion?: any;
  // Procedure Creation Date
  '00144076'?: Element;
  ProcedureCreationDate?: any;
  // Procedure Expiration Date
  '00144078'?: Element;
  ProcedureExpirationDate?: any;
  // Procedure Last Modified Date
  '0014407A'?: Element;
  ProcedureLastModifiedDate?: any;
  // Calibration Time
  '0014407C'?: Element;
  CalibrationTime?: any;
  // Calibration Date
  '0014407E'?: Element;
  CalibrationDate?: any;
  // Probe Drive Equipment Sequence
  '00144080'?: Element;
  ProbeDriveEquipmentSequence?: any;
  // Drive Type
  '00144081'?: Element;
  DriveType?: any;
  // Probe Drive Notes
  '00144082'?: Element;
  ProbeDriveNotes?: any;
  // Drive Probe Sequence
  '00144083'?: Element;
  DriveProbeSequence?: any;
  // Probe Inductance
  '00144084'?: Element;
  ProbeInductance?: any;
  // Probe Resistance
  '00144085'?: Element;
  ProbeResistance?: any;
  // Receive Probe Sequence
  '00144086'?: Element;
  ReceiveProbeSequence?: any;
  // Probe Drive Settings Sequence
  '00144087'?: Element;
  ProbeDriveSettingsSequence?: any;
  // Bridge Resistors
  '00144088'?: Element;
  BridgeResistors?: any;
  // Probe Orientation Angle
  '00144089'?: Element;
  ProbeOrientationAngle?: any;
  // User Selected Gain Y
  '0014408B'?: Element;
  UserSelectedGainY?: any;
  // User Selected Phase
  '0014408C'?: Element;
  UserSelectedPhase?: any;
  // User Selected Offset X
  '0014408D'?: Element;
  UserSelectedOffsetX?: any;
  // User Selected Offset Y
  '0014408E'?: Element;
  UserSelectedOffsetY?: any;
  // Channel Settings Sequence
  '00144091'?: Element;
  ChannelSettingsSequence?: any;
  // Channel Threshold
  '00144092'?: Element;
  ChannelThreshold?: any;
  // Scanner Settings Sequence
  '0014409A'?: Element;
  ScannerSettingsSequence?: any;
  // Scan Procedure
  '0014409B'?: Element;
  ScanProcedure?: any;
  // Translation Rate X
  '0014409C'?: Element;
  TranslationRateX?: any;
  // Translation Rate Y
  '0014409D'?: Element;
  TranslationRateY?: any;
  // Channel Overlap
  '0014409F'?: Element;
  ChannelOverlap?: any;
  // Image Quality Indicator Type
  '001440A0'?: Element;
  ImageQualityIndicatorType?: any;
  // Image Quality Indicator Material
  '001440A1'?: Element;
  ImageQualityIndicatorMaterial?: any;
  // Image Quality Indicator Size
  '001440A2'?: Element;
  ImageQualityIndicatorSize?: any;
  // LINAC Energy
  '00145002'?: Element;
  LINACEnergy?: any;
  // LINAC Output
  '00145004'?: Element;
  LINACOutput?: any;
  // Contrast/Bolus Agent
  '00180010'?: Element;
  ContrastBolusAgent?: any;
  // Contrast/Bolus Agent Sequence
  '00180012'?: Element;
  ContrastBolusAgentSequence?: any;
  // Contrast/Bolus T1 Relaxivity
  '00180013'?: Element;
  ContrastBolusT1Relaxivity?: any;
  // Contrast/Bolus Administration Route Sequence
  '00180014'?: Element;
  ContrastBolusAdministrationRouteSequence?: any;
  // Body Part Examined
  '00180015'?: Element;
  BodyPartExamined?: any;
  // Scanning Sequence
  '00180020'?: Element;
  ScanningSequence?: any;
  // Sequence Variant
  '00180021'?: Element;
  SequenceVariant?: any;
  // Scan Options
  '00180022'?: Element;
  ScanOptions?: any;
  // MR Acquisition Type
  '00180023'?: Element;
  MRAcquisitionType?: any;
  // Sequence Name
  '00180024'?: Element;
  SequenceName?: any;
  // Angio Flag
  '00180025'?: Element;
  AngioFlag?: any;
  // Intervention Drug Information Sequence
  '00180026'?: Element;
  InterventionDrugInformationSequence?: any;
  // Intervention Drug Stop Time
  '00180027'?: Element;
  InterventionDrugStopTime?: any;
  // Intervention Drug Dose
  '00180028'?: Element;
  InterventionDrugDose?: any;
  // Intervention Drug Code Sequence
  '00180029'?: Element;
  InterventionDrugCodeSequence?: any;
  // Additional Drug Sequence
  '0018002A'?: Element;
  AdditionalDrugSequence?: any;
  // Radionuclide
  '00180030'?: Element;
  Radionuclide?: any;
  // Radiopharmaceutical
  '00180031'?: Element;
  Radiopharmaceutical?: any;
  // Energy Window Centerline
  '00180032'?: Element;
  EnergyWindowCenterline?: any;
  // Energy Window Total Width
  '00180033'?: Element;
  EnergyWindowTotalWidth?: any;
  // Intervention Drug Name
  '00180034'?: Element;
  InterventionDrugName?: any;
  // Intervention Drug Start Time
  '00180035'?: Element;
  InterventionDrugStartTime?: any;
  // Intervention Sequence
  '00180036'?: Element;
  InterventionSequence?: any;
  // Therapy Type
  '00180037'?: Element;
  TherapyType?: any;
  // Intervention Status
  '00180038'?: Element;
  InterventionStatus?: any;
  // Therapy Description
  '00180039'?: Element;
  TherapyDescription?: any;
  // Intervention Description
  '0018003A'?: Element;
  InterventionDescription?: any;
  // Cine Rate
  '00180040'?: Element;
  CineRate?: any;
  // Initial Cine Run State
  '00180042'?: Element;
  InitialCineRunState?: any;
  // Slice Thickness
  '00180050'?: Element;
  SliceThickness?: any;
  // KVP
  '00180060'?: Element;
  KVP?: any;
  // Counts Accumulated
  '00180070'?: Element;
  CountsAccumulated?: any;
  // Acquisition Termination Condition
  '00180071'?: Element;
  AcquisitionTerminationCondition?: any;
  // Effective Duration
  '00180072'?: Element;
  EffectiveDuration?: any;
  // Acquisition Start Condition
  '00180073'?: Element;
  AcquisitionStartCondition?: any;
  // Acquisition Start Condition Data
  '00180074'?: Element;
  AcquisitionStartConditionData?: any;
  // Acquisition Termination Condition Data
  '00180075'?: Element;
  AcquisitionTerminationConditionData?: any;
  // Repetition Time
  '00180080'?: Element;
  RepetitionTime?: any;
  // Echo Time
  '00180081'?: Element;
  EchoTime?: any;
  // Inversion Time
  '00180082'?: Element;
  InversionTime?: any;
  // Number of Averages
  '00180083'?: Element;
  NumberOfAverages?: any;
  // Imaging Frequency
  '00180084'?: Element;
  ImagingFrequency?: any;
  // Imaged Nucleus
  '00180085'?: Element;
  ImagedNucleus?: any;
  // Echo Number(s)
  '00180086'?: Element;
  EchoNumbers?: any;
  // Magnetic Field Strength
  '00180087'?: Element;
  MagneticFieldStrength?: any;
  // Spacing Between Slices
  '00180088'?: Element;
  SpacingBetweenSlices?: any;
  // Number of Phase Encoding Steps
  '00180089'?: Element;
  NumberOfPhaseEncodingSteps?: any;
  // Data Collection Diameter
  '00180090'?: Element;
  DataCollectionDiameter?: any;
  // Echo Train Length
  '00180091'?: Element;
  EchoTrainLength?: any;
  // Percent Sampling
  '00180093'?: Element;
  PercentSampling?: any;
  // Percent Phase Field of View
  '00180094'?: Element;
  PercentPhaseFieldOfView?: any;
  // Pixel Bandwidth
  '00180095'?: Element;
  PixelBandwidth?: any;
  // Device Serial Number
  '00181000'?: Element;
  DeviceSerialNumber?: any;
  // Device UID
  '00181002'?: Element;
  DeviceUID?: any;
  // Device ID
  '00181003'?: Element;
  DeviceID?: any;
  // Plate ID
  '00181004'?: Element;
  PlateID?: any;
  // Generator ID
  '00181005'?: Element;
  GeneratorID?: any;
  // Grid ID
  '00181006'?: Element;
  GridID?: any;
  // Cassette ID
  '00181007'?: Element;
  CassetteID?: any;
  // Gantry ID
  '00181008'?: Element;
  GantryID?: any;
  // Secondary Capture Device ID
  '00181010'?: Element;
  SecondaryCaptureDeviceID?: any;
  // Hardcopy Creation Device ID
  '00181011'?: Element;
  HardcopyCreationDeviceID?: any;
  // Date of Secondary Capture
  '00181012'?: Element;
  DateOfSecondaryCapture?: any;
  // Time of Secondary Capture
  '00181014'?: Element;
  TimeOfSecondaryCapture?: any;
  // Secondary Capture Device Manufacturer
  '00181016'?: Element;
  SecondaryCaptureDeviceManufacturer?: any;
  // Hardcopy Device Manufacturer
  '00181017'?: Element;
  HardcopyDeviceManufacturer?: any;
  // Secondary Capture Device Manufacturer's Model Name
  '00181018'?: Element;
  SecondaryCaptureDeviceManufacturerModelName?: any;
  // Secondary Capture Device Software Versions
  '00181019'?: Element;
  SecondaryCaptureDeviceSoftwareVersions?: any;
  // Hardcopy Device Software Version
  '0018101A'?: Element;
  HardcopyDeviceSoftwareVersion?: any;
  // Hardcopy Device Manufacturer's Model Name
  '0018101B'?: Element;
  HardcopyDeviceManufacturerModelName?: any;
  // Software Version(s)
  '00181020'?: Element;
  SoftwareVersions?: any;
  // Video Image Format Acquired
  '00181022'?: Element;
  VideoImageFormatAcquired?: any;
  // Digital Image Format Acquired
  '00181023'?: Element;
  DigitalImageFormatAcquired?: any;
  // Protocol Name
  '00181030'?: Element;
  ProtocolName?: any;
  // Contrast/Bolus Route
  '00181040'?: Element;
  ContrastBolusRoute?: any;
  // Contrast/Bolus Volume
  '00181041'?: Element;
  ContrastBolusVolume?: any;
  // Contrast/Bolus Start Time
  '00181042'?: Element;
  ContrastBolusStartTime?: any;
  // Contrast/Bolus Stop Time
  '00181043'?: Element;
  ContrastBolusStopTime?: any;
  // Contrast/Bolus Total Dose
  '00181044'?: Element;
  ContrastBolusTotalDose?: any;
  // Syringe Counts
  '00181045'?: Element;
  SyringeCounts?: any;
  // Contrast Flow Rate
  '00181046'?: Element;
  ContrastFlowRate?: any;
  // Contrast Flow Duration
  '00181047'?: Element;
  ContrastFlowDuration?: any;
  // Contrast/Bolus Ingredient
  '00181048'?: Element;
  ContrastBolusIngredient?: any;
  // Contrast/Bolus Ingredient Concentration
  '00181049'?: Element;
  ContrastBolusIngredientConcentration?: any;
  // Spatial Resolution
  '00181050'?: Element;
  SpatialResolution?: any;
  // Trigger Time
  '00181060'?: Element;
  TriggerTime?: any;
  // Trigger Source or Type
  '00181061'?: Element;
  TriggerSourceOrType?: any;
  // Nominal Interval
  '00181062'?: Element;
  NominalInterval?: any;
  // Frame Time
  '00181063'?: Element;
  FrameTime?: any;
  // Cardiac Framing Type
  '00181064'?: Element;
  CardiacFramingType?: any;
  // Frame Time Vector
  '00181065'?: Element;
  FrameTimeVector?: any;
  // Frame Delay
  '00181066'?: Element;
  FrameDelay?: any;
  // Image Trigger Delay
  '00181067'?: Element;
  ImageTriggerDelay?: any;
  // Multiplex Group Time Offset
  '00181068'?: Element;
  MultiplexGroupTimeOffset?: any;
  // Trigger Time Offset
  '00181069'?: Element;
  TriggerTimeOffset?: any;
  // Synchronization Trigger
  '0018106A'?: Element;
  SynchronizationTrigger?: any;
  // Synchronization Channel
  '0018106C'?: Element;
  SynchronizationChannel?: any;
  // Trigger Sample Position
  '0018106E'?: Element;
  TriggerSamplePosition?: any;
  // Radiopharmaceutical Route
  '00181070'?: Element;
  RadiopharmaceuticalRoute?: any;
  // Radiopharmaceutical Volume
  '00181071'?: Element;
  RadiopharmaceuticalVolume?: any;
  // Radiopharmaceutical Start Time
  '00181072'?: Element;
  RadiopharmaceuticalStartTime?: any;
  // Radiopharmaceutical Stop Time
  '00181073'?: Element;
  RadiopharmaceuticalStopTime?: any;
  // Radionuclide Total Dose
  '00181074'?: Element;
  RadionuclideTotalDose?: any;
  // Radionuclide Half Life
  '00181075'?: Element;
  RadionuclideHalfLife?: any;
  // Radionuclide Positron Fraction
  '00181076'?: Element;
  RadionuclidePositronFraction?: any;
  // Radiopharmaceutical Specific Activity
  '00181077'?: Element;
  RadiopharmaceuticalSpecificActivity?: any;
  // Radiopharmaceutical Start DateTime
  '00181078'?: Element;
  RadiopharmaceuticalStartDateTime?: any;
  // Radiopharmaceutical Stop DateTime
  '00181079'?: Element;
  RadiopharmaceuticalStopDateTime?: any;
  // Beat Rejection Flag
  '00181080'?: Element;
  BeatRejectionFlag?: any;
  // Low R-R Value
  '00181081'?: Element;
  LowRRValue?: any;
  // High R-R Value
  '00181082'?: Element;
  HighRRValue?: any;
  // Intervals Acquired
  '00181083'?: Element;
  IntervalsAcquired?: any;
  // Intervals Rejected
  '00181084'?: Element;
  IntervalsRejected?: any;
  // PVC Rejection
  '00181085'?: Element;
  PVCRejection?: any;
  // Skip Beats
  '00181086'?: Element;
  SkipBeats?: any;
  // Heart Rate
  '00181088'?: Element;
  HeartRate?: any;
  // Cardiac Number of Images
  '00181090'?: Element;
  CardiacNumberOfImages?: any;
  // Trigger Window
  '00181094'?: Element;
  TriggerWindow?: any;
  // Reconstruction Diameter
  '00181100'?: Element;
  ReconstructionDiameter?: any;
  // Distance Source to Detector
  '00181110'?: Element;
  DistanceSourceToDetector?: any;
  // Distance Source to Patient
  '00181111'?: Element;
  DistanceSourceToPatient?: any;
  // Estimated Radiographic Magnification Factor
  '00181114'?: Element;
  EstimatedRadiographicMagnificationFactor?: any;
  // Gantry/Detector Tilt
  '00181120'?: Element;
  GantryDetectorTilt?: any;
  // Gantry/Detector Slew
  '00181121'?: Element;
  GantryDetectorSlew?: any;
  // Table Height
  '00181130'?: Element;
  TableHeight?: any;
  // Table Traverse
  '00181131'?: Element;
  TableTraverse?: any;
  // Table Motion
  '00181134'?: Element;
  TableMotion?: any;
  // Table Vertical Increment
  '00181135'?: Element;
  TableVerticalIncrement?: any;
  // Table Lateral Increment
  '00181136'?: Element;
  TableLateralIncrement?: any;
  // Table Longitudinal Increment
  '00181137'?: Element;
  TableLongitudinalIncrement?: any;
  // Table Angle
  '00181138'?: Element;
  TableAngle?: any;
  // Table Type
  '0018113A'?: Element;
  TableType?: any;
  // Rotation Direction
  '00181140'?: Element;
  RotationDirection?: any;
  // Angular Position
  '00181141'?: Element;
  AngularPosition?: any;
  // Radial Position
  '00181142'?: Element;
  RadialPosition?: any;
  // Scan Arc
  '00181143'?: Element;
  ScanArc?: any;
  // Angular Step
  '00181144'?: Element;
  AngularStep?: any;
  // Center of Rotation Offset
  '00181145'?: Element;
  CenterOfRotationOffset?: any;
  // Rotation Offset
  '00181146'?: Element;
  RotationOffset?: any;
  // Field of View Shape
  '00181147'?: Element;
  FieldOfViewShape?: any;
  // Field of View Dimension(s)
  '00181149'?: Element;
  FieldOfViewDimensions?: any;
  // Exposure Time
  '00181150'?: Element;
  ExposureTime?: any;
  // X-Ray Tube Current
  '00181151'?: Element;
  XRayTubeCurrent?: any;
  // Exposure
  '00181152'?: Element;
  Exposure?: any;
  // Exposure in µAs
  '00181153'?: Element;
  ExposureInuAs?: any;
  // Average Pulse Width
  '00181154'?: Element;
  AveragePulseWidth?: any;
  // Radiation Setting
  '00181155'?: Element;
  RadiationSetting?: any;
  // Rectification Type
  '00181156'?: Element;
  RectificationType?: any;
  // Radiation Mode
  '0018115A'?: Element;
  RadiationMode?: any;
  // Image and Fluoroscopy Area Dose Product
  '0018115E'?: Element;
  ImageAndFluoroscopyAreaDoseProduct?: any;
  // Filter Type
  '00181160'?: Element;
  FilterType?: any;
  // Type of Filters
  '00181161'?: Element;
  TypeOfFilters?: any;
  // Intensifier Size
  '00181162'?: Element;
  IntensifierSize?: any;
  // Imager Pixel Spacing
  '00181164'?: Element;
  ImagerPixelSpacing?: any;
  // Grid
  '00181166'?: Element;
  Grid?: any;
  // Generator Power
  '00181170'?: Element;
  GeneratorPower?: any;
  // Collimator/grid Name
  '00181180'?: Element;
  CollimatorGridName?: any;
  // Collimator Type
  '00181181'?: Element;
  CollimatorType?: any;
  // Focal Distance
  '00181182'?: Element;
  FocalDistance?: any;
  // X Focus Center
  '00181183'?: Element;
  XFocusCenter?: any;
  // Y Focus Center
  '00181184'?: Element;
  YFocusCenter?: any;
  // Focal Spot(s)
  '00181190'?: Element;
  FocalSpots?: any;
  // Anode Target Material
  '00181191'?: Element;
  AnodeTargetMaterial?: any;
  // Body Part Thickness
  '001811A0'?: Element;
  BodyPartThickness?: any;
  // Compression Force
  '001811A2'?: Element;
  CompressionForce?: any;
  // Paddle Description
  '001811A4'?: Element;
  PaddleDescription?: any;
  // Date of Last Calibration
  '00181200'?: Element;
  DateOfLastCalibration?: any;
  // Time of Last Calibration
  '00181201'?: Element;
  TimeOfLastCalibration?: any;
  // DateTime of Last Calibration
  '00181202'?: Element;
  DateTimeOfLastCalibration?: any;
  // Convolution Kernel
  '00181210'?: Element;
  ConvolutionKernel?: any;
  // Upper/Lower Pixel Values
  '00181240'?: Element;
  UpperLowerPixelValues?: any;
  // Actual Frame Duration
  '00181242'?: Element;
  ActualFrameDuration?: any;
  // Count Rate
  '00181243'?: Element;
  CountRate?: any;
  // Preferred Playback Sequencing
  '00181244'?: Element;
  PreferredPlaybackSequencing?: any;
  // Receive Coil Name
  '00181250'?: Element;
  ReceiveCoilName?: any;
  // Transmit Coil Name
  '00181251'?: Element;
  TransmitCoilName?: any;
  // Plate Type
  '00181260'?: Element;
  PlateType?: any;
  // Phosphor Type
  '00181261'?: Element;
  PhosphorType?: any;
  // Scan Velocity
  '00181300'?: Element;
  ScanVelocity?: any;
  // Whole Body Technique
  '00181301'?: Element;
  WholeBodyTechnique?: any;
  // Scan Length
  '00181302'?: Element;
  ScanLength?: any;
  // Acquisition Matrix
  '00181310'?: Element;
  AcquisitionMatrix?: any;
  // In-plane Phase Encoding Direction
  '00181312'?: Element;
  InPlanePhaseEncodingDirection?: any;
  // Flip Angle
  '00181314'?: Element;
  FlipAngle?: any;
  // Variable Flip Angle Flag
  '00181315'?: Element;
  VariableFlipAngleFlag?: any;
  // SAR
  '00181316'?: Element;
  SAR?: any;
  // dB/dt
  '00181318'?: Element;
  dBdt?: any;
  // Acquisition Device Processing Description
  '00181400'?: Element;
  AcquisitionDeviceProcessingDescription?: any;
  // Acquisition Device Processing Code
  '00181401'?: Element;
  AcquisitionDeviceProcessingCode?: any;
  // Cassette Orientation
  '00181402'?: Element;
  CassetteOrientation?: any;
  // Cassette Size
  '00181403'?: Element;
  CassetteSize?: any;
  // Exposures on Plate
  '00181404'?: Element;
  ExposuresOnPlate?: any;
  // Relative X-Ray Exposure
  '00181405'?: Element;
  RelativeXRayExposure?: any;
  // Exposure Index
  '00181411'?: Element;
  ExposureIndex?: any;
  // Target Exposure Index
  '00181412'?: Element;
  TargetExposureIndex?: any;
  // Deviation Index
  '00181413'?: Element;
  DeviationIndex?: any;
  // Column Angulation
  '00181450'?: Element;
  ColumnAngulation?: any;
  // Tomo Layer Height
  '00181460'?: Element;
  TomoLayerHeight?: any;
  // Tomo Angle
  '00181470'?: Element;
  TomoAngle?: any;
  // Tomo Time
  '00181480'?: Element;
  TomoTime?: any;
  // Tomo Type
  '00181490'?: Element;
  TomoType?: any;
  // Tomo Class
  '00181491'?: Element;
  TomoClass?: any;
  // Number of Tomosynthesis Source Images
  '00181495'?: Element;
  NumberOfTomosynthesisSourceImages?: any;
  // Positioner Motion
  '00181500'?: Element;
  PositionerMotion?: any;
  // Positioner Type
  '00181508'?: Element;
  PositionerType?: any;
  // Positioner Primary Angle
  '00181510'?: Element;
  PositionerPrimaryAngle?: any;
  // Positioner Secondary Angle
  '00181511'?: Element;
  PositionerSecondaryAngle?: any;
  // Positioner Primary Angle Increment
  '00181520'?: Element;
  PositionerPrimaryAngleIncrement?: any;
  // Positioner Secondary Angle Increment
  '00181521'?: Element;
  PositionerSecondaryAngleIncrement?: any;
  // Detector Primary Angle
  '00181530'?: Element;
  DetectorPrimaryAngle?: any;
  // Detector Secondary Angle
  '00181531'?: Element;
  DetectorSecondaryAngle?: any;
  // Shutter Shape
  '00181600'?: Element;
  ShutterShape?: any;
  // Shutter Left Vertical Edge
  '00181602'?: Element;
  ShutterLeftVerticalEdge?: any;
  // Shutter Right Vertical Edge
  '00181604'?: Element;
  ShutterRightVerticalEdge?: any;
  // Shutter Upper Horizontal Edge
  '00181606'?: Element;
  ShutterUpperHorizontalEdge?: any;
  // Shutter Lower Horizontal Edge
  '00181608'?: Element;
  ShutterLowerHorizontalEdge?: any;
  // Center of Circular Shutter
  '00181610'?: Element;
  CenterOfCircularShutter?: any;
  // Radius of Circular Shutter
  '00181612'?: Element;
  RadiusOfCircularShutter?: any;
  // Vertices of the Polygonal Shutter
  '00181620'?: Element;
  VerticesOfThePolygonalShutter?: any;
  // Shutter Presentation Value
  '00181622'?: Element;
  ShutterPresentationValue?: any;
  // Shutter Overlay Group
  '00181623'?: Element;
  ShutterOverlayGroup?: any;
  // Shutter Presentation Color CIELab Value
  '00181624'?: Element;
  ShutterPresentationColorCIELabValue?: any;
  // Collimator Shape
  '00181700'?: Element;
  CollimatorShape?: any;
  // Collimator Left Vertical Edge
  '00181702'?: Element;
  CollimatorLeftVerticalEdge?: any;
  // Collimator Right Vertical Edge
  '00181704'?: Element;
  CollimatorRightVerticalEdge?: any;
  // Collimator Upper Horizontal Edge
  '00181706'?: Element;
  CollimatorUpperHorizontalEdge?: any;
  // Collimator Lower Horizontal Edge
  '00181708'?: Element;
  CollimatorLowerHorizontalEdge?: any;
  // Center of Circular Collimator
  '00181710'?: Element;
  CenterOfCircularCollimator?: any;
  // Radius of Circular Collimator
  '00181712'?: Element;
  RadiusOfCircularCollimator?: any;
  // Vertices of the Polygonal Collimator
  '00181720'?: Element;
  VerticesOfThePolygonalCollimator?: any;
  // Acquisition Time Synchronized
  '00181800'?: Element;
  AcquisitionTimeSynchronized?: any;
  // Time Source
  '00181801'?: Element;
  TimeSource?: any;
  // Time Distribution Protocol
  '00181802'?: Element;
  TimeDistributionProtocol?: any;
  // NTP Source Address
  '00181803'?: Element;
  NTPSourceAddress?: any;
  // Page Number Vector
  '00182001'?: Element;
  PageNumberVector?: any;
  // Frame Label Vector
  '00182002'?: Element;
  FrameLabelVector?: any;
  // Frame Primary Angle Vector
  '00182003'?: Element;
  FramePrimaryAngleVector?: any;
  // Frame Secondary Angle Vector
  '00182004'?: Element;
  FrameSecondaryAngleVector?: any;
  // Slice Location Vector
  '00182005'?: Element;
  SliceLocationVector?: any;
  // Display Window Label Vector
  '00182006'?: Element;
  DisplayWindowLabelVector?: any;
  // Nominal Scanned Pixel Spacing
  '00182010'?: Element;
  NominalScannedPixelSpacing?: any;
  // Digitizing Device Transport Direction
  '00182020'?: Element;
  DigitizingDeviceTransportDirection?: any;
  // Rotation of Scanned Film
  '00182030'?: Element;
  RotationOfScannedFilm?: any;
  // Biopsy Target Sequence
  '00182041'?: Element;
  BiopsyTargetSequence?: any;
  // Target UID
  '00182042'?: Element;
  TargetUID?: any;
  // Localizing Cursor Position
  '00182043'?: Element;
  LocalizingCursorPosition?: any;
  // Calculated Target Position
  '00182044'?: Element;
  CalculatedTargetPosition?: any;
  // Target Label
  '00182045'?: Element;
  TargetLabel?: any;
  // Displayed Z Value
  '00182046'?: Element;
  DisplayedZValue?: any;
  // IVUS Acquisition
  '00183100'?: Element;
  IVUSAcquisition?: any;
  // IVUS Pullback Rate
  '00183101'?: Element;
  IVUSPullbackRate?: any;
  // IVUS Gated Rate
  '00183102'?: Element;
  IVUSGatedRate?: any;
  // IVUS Pullback Start Frame Number
  '00183103'?: Element;
  IVUSPullbackStartFrameNumber?: any;
  // IVUS Pullback Stop Frame Number
  '00183104'?: Element;
  IVUSPullbackStopFrameNumber?: any;
  // Lesion Number
  '00183105'?: Element;
  LesionNumber?: any;
  // Acquisition Comments
  '00184000'?: Element;
  AcquisitionComments?: any;
  // Output Power
  '00185000'?: Element;
  OutputPower?: any;
  // Transducer Data
  '00185010'?: Element;
  TransducerData?: any;
  // Focus Depth
  '00185012'?: Element;
  FocusDepth?: any;
  // Processing Function
  '00185020'?: Element;
  ProcessingFunction?: any;
  // Postprocessing Function
  '00185021'?: Element;
  PostprocessingFunction?: any;
  // Mechanical Index
  '00185022'?: Element;
  MechanicalIndex?: any;
  // Bone Thermal Index
  '00185024'?: Element;
  BoneThermalIndex?: any;
  // Cranial Thermal Index
  '00185026'?: Element;
  CranialThermalIndex?: any;
  // Soft Tissue Thermal Index
  '00185027'?: Element;
  SoftTissueThermalIndex?: any;
  // Soft Tissue-focus Thermal Index
  '00185028'?: Element;
  SoftTissueFocusThermalIndex?: any;
  // Soft Tissue-surface Thermal Index
  '00185029'?: Element;
  SoftTissueSurfaceThermalIndex?: any;
  // Dynamic Range
  '00185030'?: Element;
  DynamicRange?: any;
  // Total Gain
  '00185040'?: Element;
  TotalGain?: any;
  // Depth of Scan Field
  '00185050'?: Element;
  DepthOfScanField?: any;
  // Patient Position
  '00185100'?: Element;
  PatientPosition?: any;
  // View Position
  '00185101'?: Element;
  ViewPosition?: any;
  // Projection Eponymous Name Code Sequence
  '00185104'?: Element;
  ProjectionEponymousNameCodeSequence?: any;
  // Image Transformation Matrix
  '00185210'?: Element;
  ImageTransformationMatrix?: any;
  // Image Translation Vector
  '00185212'?: Element;
  ImageTranslationVector?: any;
  // Sensitivity
  '00186000'?: Element;
  Sensitivity?: any;
  // Sequence of Ultrasound Regions
  '00186011'?: Element;
  SequenceOfUltrasoundRegions?: any;
  // Region Spatial Format
  '00186012'?: Element;
  RegionSpatialFormat?: any;
  // Region Data Type
  '00186014'?: Element;
  RegionDataType?: any;
  // Region Flags
  '00186016'?: Element;
  RegionFlags?: any;
  // Region Location Min X0
  '00186018'?: Element;
  RegionLocationMinX0?: any;
  // Region Location Min Y0
  '0018601A'?: Element;
  RegionLocationMinY0?: any;
  // Region Location Max X1
  '0018601C'?: Element;
  RegionLocationMaxX1?: any;
  // Region Location Max Y1
  '0018601E'?: Element;
  RegionLocationMaxY1?: any;
  // Reference Pixel X0
  '00186020'?: Element;
  ReferencePixelX0?: any;
  // Reference Pixel Y0
  '00186022'?: Element;
  ReferencePixelY0?: any;
  // Physical Units X Direction
  '00186024'?: Element;
  PhysicalUnitsXDirection?: any;
  // Physical Units Y Direction
  '00186026'?: Element;
  PhysicalUnitsYDirection?: any;
  // Reference Pixel Physical Value X
  '00186028'?: Element;
  ReferencePixelPhysicalValueX?: any;
  // Reference Pixel Physical Value Y
  '0018602A'?: Element;
  ReferencePixelPhysicalValueY?: any;
  // Physical Delta X
  '0018602C'?: Element;
  PhysicalDeltaX?: any;
  // Physical Delta Y
  '0018602E'?: Element;
  PhysicalDeltaY?: any;
  // Transducer Frequency
  '00186030'?: Element;
  TransducerFrequency?: any;
  // Transducer Type
  '00186031'?: Element;
  TransducerType?: any;
  // Pulse Repetition Frequency
  '00186032'?: Element;
  PulseRepetitionFrequency?: any;
  // Doppler Correction Angle
  '00186034'?: Element;
  DopplerCorrectionAngle?: any;
  // Steering Angle
  '00186036'?: Element;
  SteeringAngle?: any;
  // Doppler Sample Volume X Position (Retired)
  '00186038'?: Element;
  DopplerSampleVolumeXPositionRetired?: any;
  // Doppler Sample Volume X Position
  '00186039'?: Element;
  DopplerSampleVolumeXPosition?: any;
  // Doppler Sample Volume Y Position (Retired)
  '0018603A'?: Element;
  DopplerSampleVolumeYPositionRetired?: any;
  // Doppler Sample Volume Y Position
  '0018603B'?: Element;
  DopplerSampleVolumeYPosition?: any;
  // TM-Line Position X0 (Retired)
  '0018603C'?: Element;
  TMLinePositionX0Retired?: any;
  // TM-Line Position X0
  '0018603D'?: Element;
  TMLinePositionX0?: any;
  // TM-Line Position Y0 (Retired)
  '0018603E'?: Element;
  TMLinePositionY0Retired?: any;
  // TM-Line Position Y0
  '0018603F'?: Element;
  TMLinePositionY0?: any;
  // TM-Line Position X1 (Retired)
  '00186040'?: Element;
  TMLinePositionX1Retired?: any;
  // TM-Line Position X1
  '00186041'?: Element;
  TMLinePositionX1?: any;
  // TM-Line Position Y1 (Retired)
  '00186042'?: Element;
  TMLinePositionY1Retired?: any;
  // TM-Line Position Y1
  '00186043'?: Element;
  TMLinePositionY1?: any;
  // Pixel Component Organization
  '00186044'?: Element;
  PixelComponentOrganization?: any;
  // Pixel Component Mask
  '00186046'?: Element;
  PixelComponentMask?: any;
  // Pixel Component Range Start
  '00186048'?: Element;
  PixelComponentRangeStart?: any;
  // Pixel Component Range Stop
  '0018604A'?: Element;
  PixelComponentRangeStop?: any;
  // Pixel Component Physical Units
  '0018604C'?: Element;
  PixelComponentPhysicalUnits?: any;
  // Pixel Component Data Type
  '0018604E'?: Element;
  PixelComponentDataType?: any;
  // Number of Table Break Points
  '00186050'?: Element;
  NumberOfTableBreakPoints?: any;
  // Table of X Break Points
  '00186052'?: Element;
  TableOfXBreakPoints?: any;
  // Table of Y Break Points
  '00186054'?: Element;
  TableOfYBreakPoints?: any;
  // Number of Table Entries
  '00186056'?: Element;
  NumberOfTableEntries?: any;
  // Table of Pixel Values
  '00186058'?: Element;
  TableOfPixelValues?: any;
  // Table of Parameter Values
  '0018605A'?: Element;
  TableOfParameterValues?: any;
  // R Wave Time Vector
  '00186060'?: Element;
  RWaveTimeVector?: any;
  // Detector Conditions Nominal Flag
  '00187000'?: Element;
  DetectorConditionsNominalFlag?: any;
  // Detector Temperature
  '00187001'?: Element;
  DetectorTemperature?: any;
  // Detector Type
  '00187004'?: Element;
  DetectorType?: any;
  // Detector Configuration
  '00187005'?: Element;
  DetectorConfiguration?: any;
  // Detector Description
  '00187006'?: Element;
  DetectorDescription?: any;
  // Detector Mode
  '00187008'?: Element;
  DetectorMode?: any;
  // Detector ID
  '0018700A'?: Element;
  DetectorID?: any;
  // Date of Last Detector Calibration
  '0018700C'?: Element;
  DateOfLastDetectorCalibration?: any;
  // Time of Last Detector Calibration
  '0018700E'?: Element;
  TimeOfLastDetectorCalibration?: any;
  // Exposures on Detector Since Last Calibration
  '00187010'?: Element;
  ExposuresOnDetectorSinceLastCalibration?: any;
  // Exposures on Detector Since Manufactured
  '00187011'?: Element;
  ExposuresOnDetectorSinceManufactured?: any;
  // Detector Time Since Last Exposure
  '00187012'?: Element;
  DetectorTimeSinceLastExposure?: any;
  // Detector Active Time
  '00187014'?: Element;
  DetectorActiveTime?: any;
  // Detector Activation Offset From Exposure
  '00187016'?: Element;
  DetectorActivationOffsetFromExposure?: any;
  // Detector Binning
  '0018701A'?: Element;
  DetectorBinning?: any;
  // Detector Element Physical Size
  '00187020'?: Element;
  DetectorElementPhysicalSize?: any;
  // Detector Element Spacing
  '00187022'?: Element;
  DetectorElementSpacing?: any;
  // Detector Active Shape
  '00187024'?: Element;
  DetectorActiveShape?: any;
  // Detector Active Dimension(s)
  '00187026'?: Element;
  DetectorActiveDimensions?: any;
  // Detector Active Origin
  '00187028'?: Element;
  DetectorActiveOrigin?: any;
  // Detector Manufacturer Name
  '0018702A'?: Element;
  DetectorManufacturerName?: any;
  // Detector Manufacturer's Model Name
  '0018702B'?: Element;
  DetectorManufacturerModelName?: any;
  // Field of View Origin
  '00187030'?: Element;
  FieldOfViewOrigin?: any;
  // Field of View Rotation
  '00187032'?: Element;
  FieldOfViewRotation?: any;
  // Field of View Horizontal Flip
  '00187034'?: Element;
  FieldOfViewHorizontalFlip?: any;
  // Pixel Data Area Origin Relative To FOV
  '00187036'?: Element;
  PixelDataAreaOriginRelativeToFOV?: any;
  // Pixel Data Area Rotation Angle Relative To FOV
  '00187038'?: Element;
  PixelDataAreaRotationAngleRelativeToFOV?: any;
  // Grid Absorbing Material
  '00187040'?: Element;
  GridAbsorbingMaterial?: any;
  // Grid Spacing Material
  '00187041'?: Element;
  GridSpacingMaterial?: any;
  // Grid Thickness
  '00187042'?: Element;
  GridThickness?: any;
  // Grid Pitch
  '00187044'?: Element;
  GridPitch?: any;
  // Grid Aspect Ratio
  '00187046'?: Element;
  GridAspectRatio?: any;
  // Grid Period
  '00187048'?: Element;
  GridPeriod?: any;
  // Grid Focal Distance
  '0018704C'?: Element;
  GridFocalDistance?: any;
  // Filter Material
  '00187050'?: Element;
  FilterMaterial?: any;
  // Filter Thickness Minimum
  '00187052'?: Element;
  FilterThicknessMinimum?: any;
  // Filter Thickness Maximum
  '00187054'?: Element;
  FilterThicknessMaximum?: any;
  // Filter Beam Path Length Minimum
  '00187056'?: Element;
  FilterBeamPathLengthMinimum?: any;
  // Filter Beam Path Length Maximum
  '00187058'?: Element;
  FilterBeamPathLengthMaximum?: any;
  // Exposure Control Mode
  '00187060'?: Element;
  ExposureControlMode?: any;
  // Exposure Control Mode Description
  '00187062'?: Element;
  ExposureControlModeDescription?: any;
  // Exposure Status
  '00187064'?: Element;
  ExposureStatus?: any;
  // Phototimer Setting
  '00187065'?: Element;
  PhototimerSetting?: any;
  // Exposure Time in µS
  '00188150'?: Element;
  ExposureTimeInuS?: any;
  // X-Ray Tube Current in µA
  '00188151'?: Element;
  XRayTubeCurrentInuA?: any;
  // Content Qualification
  '00189004'?: Element;
  ContentQualification?: any;
  // Pulse Sequence Name
  '00189005'?: Element;
  PulseSequenceName?: any;
  // MR Imaging Modifier Sequence
  '00189006'?: Element;
  MRImagingModifierSequence?: any;
  // Echo Pulse Sequence
  '00189008'?: Element;
  EchoPulseSequence?: any;
  // Inversion Recovery
  '00189009'?: Element;
  InversionRecovery?: any;
  // Flow Compensation
  '00189010'?: Element;
  FlowCompensation?: any;
  // Multiple Spin Echo
  '00189011'?: Element;
  MultipleSpinEcho?: any;
  // Multi-planar Excitation
  '00189012'?: Element;
  MultiPlanarExcitation?: any;
  // Phase Contrast
  '00189014'?: Element;
  PhaseContrast?: any;
  // Time of Flight Contrast
  '00189015'?: Element;
  TimeOfFlightContrast?: any;
  // Spoiling
  '00189016'?: Element;
  Spoiling?: any;
  // Steady State Pulse Sequence
  '00189017'?: Element;
  SteadyStatePulseSequence?: any;
  // Echo Planar Pulse Sequence
  '00189018'?: Element;
  EchoPlanarPulseSequence?: any;
  // Tag Angle First Axis
  '00189019'?: Element;
  TagAngleFirstAxis?: any;
  // Magnetization Transfer
  '00189020'?: Element;
  MagnetizationTransfer?: any;
  // T2 Preparation
  '00189021'?: Element;
  T2Preparation?: any;
  // Blood Signal Nulling
  '00189022'?: Element;
  BloodSignalNulling?: any;
  // Saturation Recovery
  '00189024'?: Element;
  SaturationRecovery?: any;
  // Spectrally Selected Suppression
  '00189025'?: Element;
  SpectrallySelectedSuppression?: any;
  // Spectrally Selected Excitation
  '00189026'?: Element;
  SpectrallySelectedExcitation?: any;
  // Spatial Pre-saturation
  '00189027'?: Element;
  SpatialPresaturation?: any;
  // Tagging
  '00189028'?: Element;
  Tagging?: any;
  // Oversampling Phase
  '00189029'?: Element;
  OversamplingPhase?: any;
  // Tag Spacing First Dimension
  '00189030'?: Element;
  TagSpacingFirstDimension?: any;
  // Geometry of k-Space Traversal
  '00189032'?: Element;
  GeometryOfKSpaceTraversal?: any;
  // Segmented k-Space Traversal
  '00189033'?: Element;
  SegmentedKSpaceTraversal?: any;
  // Rectilinear Phase Encode Reordering
  '00189034'?: Element;
  RectilinearPhaseEncodeReordering?: any;
  // Tag Thickness
  '00189035'?: Element;
  TagThickness?: any;
  // Partial Fourier Direction
  '00189036'?: Element;
  PartialFourierDirection?: any;
  // Cardiac Synchronization Technique
  '00189037'?: Element;
  CardiacSynchronizationTechnique?: any;
  // Receive Coil Manufacturer Name
  '00189041'?: Element;
  ReceiveCoilManufacturerName?: any;
  // MR Receive Coil Sequence
  '00189042'?: Element;
  MRReceiveCoilSequence?: any;
  // Receive Coil Type
  '00189043'?: Element;
  ReceiveCoilType?: any;
  // Quadrature Receive Coil
  '00189044'?: Element;
  QuadratureReceiveCoil?: any;
  // Multi-Coil Definition Sequence
  '00189045'?: Element;
  MultiCoilDefinitionSequence?: any;
  // Multi-Coil Configuration
  '00189046'?: Element;
  MultiCoilConfiguration?: any;
  // Multi-Coil Element Name
  '00189047'?: Element;
  MultiCoilElementName?: any;
  // Multi-Coil Element Used
  '00189048'?: Element;
  MultiCoilElementUsed?: any;
  // MR Transmit Coil Sequence
  '00189049'?: Element;
  MRTransmitCoilSequence?: any;
  // Transmit Coil Manufacturer Name
  '00189050'?: Element;
  TransmitCoilManufacturerName?: any;
  // Transmit Coil Type
  '00189051'?: Element;
  TransmitCoilType?: any;
  // Spectral Width
  '00189052'?: Element;
  SpectralWidth?: any;
  // Chemical Shift Reference
  '00189053'?: Element;
  ChemicalShiftReference?: any;
  // Volume Localization Technique
  '00189054'?: Element;
  VolumeLocalizationTechnique?: any;
  // MR Acquisition Frequency Encoding Steps
  '00189058'?: Element;
  MRAcquisitionFrequencyEncodingSteps?: any;
  // De-coupling
  '00189059'?: Element;
  Decoupling?: any;
  // De-coupled Nucleus
  '00189060'?: Element;
  DecoupledNucleus?: any;
  // De-coupling Frequency
  '00189061'?: Element;
  DecouplingFrequency?: any;
  // De-coupling Method
  '00189062'?: Element;
  DecouplingMethod?: any;
  // De-coupling Chemical Shift Reference
  '00189063'?: Element;
  DecouplingChemicalShiftReference?: any;
  // k-space Filtering
  '00189064'?: Element;
  KSpaceFiltering?: any;
  // Time Domain Filtering
  '00189065'?: Element;
  TimeDomainFiltering?: any;
  // Number of Zero Fills
  '00189066'?: Element;
  NumberOfZeroFills?: any;
  // Baseline Correction
  '00189067'?: Element;
  BaselineCorrection?: any;
  // Parallel Reduction Factor In-plane
  '00189069'?: Element;
  ParallelReductionFactorInPlane?: any;
  // Cardiac R-R Interval Specified
  '00189070'?: Element;
  CardiacRRIntervalSpecified?: any;
  // Acquisition Duration
  '00189073'?: Element;
  AcquisitionDuration?: any;
  // Frame Acquisition DateTime
  '00189074'?: Element;
  FrameAcquisitionDateTime?: any;
  // Diffusion Directionality
  '00189075'?: Element;
  DiffusionDirectionality?: any;
  // Diffusion Gradient Direction Sequence
  '00189076'?: Element;
  DiffusionGradientDirectionSequence?: any;
  // Parallel Acquisition
  '00189077'?: Element;
  ParallelAcquisition?: any;
  // Parallel Acquisition Technique
  '00189078'?: Element;
  ParallelAcquisitionTechnique?: any;
  // Inversion Times
  '00189079'?: Element;
  InversionTimes?: any;
  // Metabolite Map Description
  '00189080'?: Element;
  MetaboliteMapDescription?: any;
  // Partial Fourier
  '00189081'?: Element;
  PartialFourier?: any;
  // Effective Echo Time
  '00189082'?: Element;
  EffectiveEchoTime?: any;
  // Metabolite Map Code Sequence
  '00189083'?: Element;
  MetaboliteMapCodeSequence?: any;
  // Chemical Shift Sequence
  '00189084'?: Element;
  ChemicalShiftSequence?: any;
  // Cardiac Signal Source
  '00189085'?: Element;
  CardiacSignalSource?: any;
  // Diffusion b-value
  '00189087'?: Element;
  DiffusionBValue?: any;
  // Diffusion Gradient Orientation
  '00189089'?: Element;
  DiffusionGradientOrientation?: any;
  // Velocity Encoding Direction
  '00189090'?: Element;
  VelocityEncodingDirection?: any;
  // Velocity Encoding Minimum Value
  '00189091'?: Element;
  VelocityEncodingMinimumValue?: any;
  // Velocity Encoding Acquisition Sequence
  '00189092'?: Element;
  VelocityEncodingAcquisitionSequence?: any;
  // Number of k-Space Trajectories
  '00189093'?: Element;
  NumberOfKSpaceTrajectories?: any;
  // Coverage of k-Space
  '00189094'?: Element;
  CoverageOfKSpace?: any;
  // Spectroscopy Acquisition Phase Rows
  '00189095'?: Element;
  SpectroscopyAcquisitionPhaseRows?: any;
  // Parallel Reduction Factor In-plane (Retired)
  '00189096'?: Element;
  ParallelReductionFactorInPlaneRetired?: any;
  // Transmitter Frequency
  '00189098'?: Element;
  TransmitterFrequency?: any;
  // Resonant Nucleus
  '00189100'?: Element;
  ResonantNucleus?: any;
  // Frequency Correction
  '00189101'?: Element;
  FrequencyCorrection?: any;
  // MR Spectroscopy FOV/Geometry Sequence
  '00189103'?: Element;
  MRSpectroscopyFOVGeometrySequence?: any;
  // Slab Thickness
  '00189104'?: Element;
  SlabThickness?: any;
  // Slab Orientation
  '00189105'?: Element;
  SlabOrientation?: any;
  // Mid Slab Position
  '00189106'?: Element;
  MidSlabPosition?: any;
  // MR Spatial Saturation Sequence
  '00189107'?: Element;
  MRSpatialSaturationSequence?: any;
  // MR Timing and Related Parameters Sequence
  '00189112'?: Element;
  MRTimingAndRelatedParametersSequence?: any;
  // MR Echo Sequence
  '00189114'?: Element;
  MREchoSequence?: any;
  // MR Modifier Sequence
  '00189115'?: Element;
  MRModifierSequence?: any;
  // MR Diffusion Sequence
  '00189117'?: Element;
  MRDiffusionSequence?: any;
  // Cardiac Synchronization Sequence
  '00189118'?: Element;
  CardiacSynchronizationSequence?: any;
  // MR Averages Sequence
  '00189119'?: Element;
  MRAveragesSequence?: any;
  // MR FOV/Geometry Sequence
  '00189125'?: Element;
  MRFOVGeometrySequence?: any;
  // Volume Localization Sequence
  '00189126'?: Element;
  VolumeLocalizationSequence?: any;
  // Spectroscopy Acquisition Data Columns
  '00189127'?: Element;
  SpectroscopyAcquisitionDataColumns?: any;
  // Diffusion Anisotropy Type
  '00189147'?: Element;
  DiffusionAnisotropyType?: any;
  // Frame Reference DateTime
  '00189151'?: Element;
  FrameReferenceDateTime?: any;
  // MR Metabolite Map Sequence
  '00189152'?: Element;
  MRMetaboliteMapSequence?: any;
  // Parallel Reduction Factor out-of-plane
  '00189155'?: Element;
  ParallelReductionFactorOutOfPlane?: any;
  // Spectroscopy Acquisition Out-of-plane Phase Steps
  '00189159'?: Element;
  SpectroscopyAcquisitionOutOfPlanePhaseSteps?: any;
  // Bulk Motion Status
  '00189166'?: Element;
  BulkMotionStatus?: any;
  // Parallel Reduction Factor Second In-plane
  '00189168'?: Element;
  ParallelReductionFactorSecondInPlane?: any;
  // Cardiac Beat Rejection Technique
  '00189169'?: Element;
  CardiacBeatRejectionTechnique?: any;
  // Respiratory Motion Compensation Technique
  '00189170'?: Element;
  RespiratoryMotionCompensationTechnique?: any;
  // Respiratory Signal Source
  '00189171'?: Element;
  RespiratorySignalSource?: any;
  // Bulk Motion Compensation Technique
  '00189172'?: Element;
  BulkMotionCompensationTechnique?: any;
  // Bulk Motion Signal Source
  '00189173'?: Element;
  BulkMotionSignalSource?: any;
  // Applicable Safety Standard Agency
  '00189174'?: Element;
  ApplicableSafetyStandardAgency?: any;
  // Applicable Safety Standard Description
  '00189175'?: Element;
  ApplicableSafetyStandardDescription?: any;
  // Operating Mode Sequence
  '00189176'?: Element;
  OperatingModeSequence?: any;
  // Operating Mode Type
  '00189177'?: Element;
  OperatingModeType?: any;
  // Operating Mode
  '00189178'?: Element;
  OperatingMode?: any;
  // Specific Absorption Rate Definition
  '00189179'?: Element;
  SpecificAbsorptionRateDefinition?: any;
  // Gradient Output Type
  '00189180'?: Element;
  GradientOutputType?: any;
  // Specific Absorption Rate Value
  '00189181'?: Element;
  SpecificAbsorptionRateValue?: any;
  // Gradient Output
  '00189182'?: Element;
  GradientOutput?: any;
  // Flow Compensation Direction
  '00189183'?: Element;
  FlowCompensationDirection?: any;
  // Tagging Delay
  '00189184'?: Element;
  TaggingDelay?: any;
  // Respiratory Motion Compensation Technique Description
  '00189185'?: Element;
  RespiratoryMotionCompensationTechniqueDescription?: any;
  // Respiratory Signal Source ID
  '00189186'?: Element;
  RespiratorySignalSourceID?: any;
  // Chemical Shift Minimum Integration Limit in Hz
  '00189195'?: Element;
  ChemicalShiftMinimumIntegrationLimitInHz?: any;
  // Chemical Shift Maximum Integration Limit in Hz
  '00189196'?: Element;
  ChemicalShiftMaximumIntegrationLimitInHz?: any;
  // MR Velocity Encoding Sequence
  '00189197'?: Element;
  MRVelocityEncodingSequence?: any;
  // First Order Phase Correction
  '00189198'?: Element;
  FirstOrderPhaseCorrection?: any;
  // Water Referenced Phase Correction
  '00189199'?: Element;
  WaterReferencedPhaseCorrection?: any;
  // MR Spectroscopy Acquisition Type
  '00189200'?: Element;
  MRSpectroscopyAcquisitionType?: any;
  // Respiratory Cycle Position
  '00189214'?: Element;
  RespiratoryCyclePosition?: any;
  // Velocity Encoding Maximum Value
  '00189217'?: Element;
  VelocityEncodingMaximumValue?: any;
  // Tag Spacing Second Dimension
  '00189218'?: Element;
  TagSpacingSecondDimension?: any;
  // Tag Angle Second Axis
  '00189219'?: Element;
  TagAngleSecondAxis?: any;
  // Frame Acquisition Duration
  '00189220'?: Element;
  FrameAcquisitionDuration?: any;
  // MR Image Frame Type Sequence
  '00189226'?: Element;
  MRImageFrameTypeSequence?: any;
  // MR Spectroscopy Frame Type Sequence
  '00189227'?: Element;
  MRSpectroscopyFrameTypeSequence?: any;
  // MR Acquisition Phase Encoding Steps in-plane
  '00189231'?: Element;
  MRAcquisitionPhaseEncodingStepsInPlane?: any;
  // MR Acquisition Phase Encoding Steps out-of-plane
  '00189232'?: Element;
  MRAcquisitionPhaseEncodingStepsOutOfPlane?: any;
  // Spectroscopy Acquisition Phase Columns
  '00189234'?: Element;
  SpectroscopyAcquisitionPhaseColumns?: any;
  // Cardiac Cycle Position
  '00189236'?: Element;
  CardiacCyclePosition?: any;
  // Specific Absorption Rate Sequence
  '00189239'?: Element;
  SpecificAbsorptionRateSequence?: any;
  // RF Echo Train Length
  '00189240'?: Element;
  RFEchoTrainLength?: any;
  // Gradient Echo Train Length
  '00189241'?: Element;
  GradientEchoTrainLength?: any;
  // Arterial Spin Labeling Contrast
  '00189250'?: Element;
  ArterialSpinLabelingContrast?: any;
  // MR Arterial Spin Labeling Sequence
  '00189251'?: Element;
  MRArterialSpinLabelingSequence?: any;
  // ASL Technique Description
  '00189252'?: Element;
  ASLTechniqueDescription?: any;
  // ASL Slab Number
  '00189253'?: Element;
  ASLSlabNumber?: any;
  // ASL Slab Thickness
  '00189254'?: Element;
  ASLSlabThickness?: any;
  // ASL Slab Orientation
  '00189255'?: Element;
  ASLSlabOrientation?: any;
  // ASL Mid Slab Position
  '00189256'?: Element;
  ASLMidSlabPosition?: any;
  // ASL Context
  '00189257'?: Element;
  ASLContext?: any;
  // ASL Pulse Train Duration
  '00189258'?: Element;
  ASLPulseTrainDuration?: any;
  // ASL Crusher Flag
  '00189259'?: Element;
  ASLCrusherFlag?: any;
  // ASL Crusher Flow Limit
  '0018925A'?: Element;
  ASLCrusherFlowLimit?: any;
  // ASL Crusher Description
  '0018925B'?: Element;
  ASLCrusherDescription?: any;
  // ASL Bolus Cut-off Flag
  '0018925C'?: Element;
  ASLBolusCutoffFlag?: any;
  // ASL Bolus Cut-off Timing Sequence
  '0018925D'?: Element;
  ASLBolusCutoffTimingSequence?: any;
  // ASL Bolus Cut-off Technique
  '0018925E'?: Element;
  ASLBolusCutoffTechnique?: any;
  // ASL Bolus Cut-off Delay Time
  '0018925F'?: Element;
  ASLBolusCutoffDelayTime?: any;
  // ASL Slab Sequence
  '00189260'?: Element;
  ASLSlabSequence?: any;
  // Chemical Shift Minimum Integration Limit in ppm
  '00189295'?: Element;
  ChemicalShiftMinimumIntegrationLimitInppm?: any;
  // Chemical Shift Maximum Integration Limit in ppm
  '00189296'?: Element;
  ChemicalShiftMaximumIntegrationLimitInppm?: any;
  // Water Reference Acquisition
  '00189297'?: Element;
  WaterReferenceAcquisition?: any;
  // Echo Peak Position
  '00189298'?: Element;
  EchoPeakPosition?: any;
  // CT Acquisition Type Sequence
  '00189301'?: Element;
  CTAcquisitionTypeSequence?: any;
  // Acquisition Type
  '00189302'?: Element;
  AcquisitionType?: any;
  // Tube Angle
  '00189303'?: Element;
  TubeAngle?: any;
  // CT Acquisition Details Sequence
  '00189304'?: Element;
  CTAcquisitionDetailsSequence?: any;
  // Revolution Time
  '00189305'?: Element;
  RevolutionTime?: any;
  // Single Collimation Width
  '00189306'?: Element;
  SingleCollimationWidth?: any;
  // Total Collimation Width
  '00189307'?: Element;
  TotalCollimationWidth?: any;
  // CT Table Dynamics Sequence
  '00189308'?: Element;
  CTTableDynamicsSequence?: any;
  // Table Speed
  '00189309'?: Element;
  TableSpeed?: any;
  // Table Feed per Rotation
  '00189310'?: Element;
  TableFeedPerRotation?: any;
  // Spiral Pitch Factor
  '00189311'?: Element;
  SpiralPitchFactor?: any;
  // CT Geometry Sequence
  '00189312'?: Element;
  CTGeometrySequence?: any;
  // Data Collection Center (Patient)
  '00189313'?: Element;
  DataCollectionCenterPatient?: any;
  // CT Reconstruction Sequence
  '00189314'?: Element;
  CTReconstructionSequence?: any;
  // Reconstruction Algorithm
  '00189315'?: Element;
  ReconstructionAlgorithm?: any;
  // Convolution Kernel Group
  '00189316'?: Element;
  ConvolutionKernelGroup?: any;
  // Reconstruction Field of View
  '00189317'?: Element;
  ReconstructionFieldOfView?: any;
  // Reconstruction Target Center (Patient)
  '00189318'?: Element;
  ReconstructionTargetCenterPatient?: any;
  // Reconstruction Angle
  '00189319'?: Element;
  ReconstructionAngle?: any;
  // Image Filter
  '00189320'?: Element;
  ImageFilter?: any;
  // CT Exposure Sequence
  '00189321'?: Element;
  CTExposureSequence?: any;
  // Reconstruction Pixel Spacing
  '00189322'?: Element;
  ReconstructionPixelSpacing?: any;
  // Exposure Modulation Type
  '00189323'?: Element;
  ExposureModulationType?: any;
  // Estimated Dose Saving
  '00189324'?: Element;
  EstimatedDoseSaving?: any;
  // CT X-Ray Details Sequence
  '00189325'?: Element;
  CTXRayDetailsSequence?: any;
  // CT Position Sequence
  '00189326'?: Element;
  CTPositionSequence?: any;
  // Table Position
  '00189327'?: Element;
  TablePosition?: any;
  // Exposure Time in ms
  '00189328'?: Element;
  ExposureTimeInms?: any;
  // CT Image Frame Type Sequence
  '00189329'?: Element;
  CTImageFrameTypeSequence?: any;
  // X-Ray Tube Current in mA
  '00189330'?: Element;
  XRayTubeCurrentInmA?: any;
  // Exposure in mAs
  '00189332'?: Element;
  ExposureInmAs?: any;
  // Constant Volume Flag
  '00189333'?: Element;
  ConstantVolumeFlag?: any;
  // Fluoroscopy Flag
  '00189334'?: Element;
  FluoroscopyFlag?: any;
  // Distance Source to Data Collection Center
  '00189335'?: Element;
  DistanceSourceToDataCollectionCenter?: any;
  // Contrast/Bolus Agent Number
  '00189337'?: Element;
  ContrastBolusAgentNumber?: any;
  // Contrast/Bolus Ingredient Code Sequence
  '00189338'?: Element;
  ContrastBolusIngredientCodeSequence?: any;
  // Contrast Administration Profile Sequence
  '00189340'?: Element;
  ContrastAdministrationProfileSequence?: any;
  // Contrast/Bolus Usage Sequence
  '00189341'?: Element;
  ContrastBolusUsageSequence?: any;
  // Contrast/Bolus Agent Administered
  '00189342'?: Element;
  ContrastBolusAgentAdministered?: any;
  // Contrast/Bolus Agent Detected
  '00189343'?: Element;
  ContrastBolusAgentDetected?: any;
  // Contrast/Bolus Agent Phase
  '00189344'?: Element;
  ContrastBolusAgentPhase?: any;
  // CTDIvol
  '00189345'?: Element;
  CTDIvol?: any;
  // CTDI Phantom Type Code Sequence
  '00189346'?: Element;
  CTDIPhantomTypeCodeSequence?: any;
  // Calcium Scoring Mass Factor Patient
  '00189351'?: Element;
  CalciumScoringMassFactorPatient?: any;
  // Calcium Scoring Mass Factor Device
  '00189352'?: Element;
  CalciumScoringMassFactorDevice?: any;
  // Energy Weighting Factor
  '00189353'?: Element;
  EnergyWeightingFactor?: any;
  // CT Additional X-Ray Source Sequence
  '00189360'?: Element;
  CTAdditionalXRaySourceSequence?: any;
  // Projection Pixel Calibration Sequence
  '00189401'?: Element;
  ProjectionPixelCalibrationSequence?: any;
  // Distance Source to Isocenter
  '00189402'?: Element;
  DistanceSourceToIsocenter?: any;
  // Distance Object to Table Top
  '00189403'?: Element;
  DistanceObjectToTableTop?: any;
  // Object Pixel Spacing in Center of Beam
  '00189404'?: Element;
  ObjectPixelSpacingInCenterOfBeam?: any;
  // Positioner Position Sequence
  '00189405'?: Element;
  PositionerPositionSequence?: any;
  // Table Position Sequence
  '00189406'?: Element;
  TablePositionSequence?: any;
  // Collimator Shape Sequence
  '00189407'?: Element;
  CollimatorShapeSequence?: any;
  // Planes in Acquisition
  '00189410'?: Element;
  PlanesInAcquisition?: any;
  // XA/XRF Frame Characteristics Sequence
  '00189412'?: Element;
  XAXRFFrameCharacteristicsSequence?: any;
  // Frame Acquisition Sequence
  '00189417'?: Element;
  FrameAcquisitionSequence?: any;
  // X-Ray Receptor Type
  '00189420'?: Element;
  XRayReceptorType?: any;
  // Acquisition Protocol Name
  '00189423'?: Element;
  AcquisitionProtocolName?: any;
  // Acquisition Protocol Description
  '00189424'?: Element;
  AcquisitionProtocolDescription?: any;
  // Contrast/Bolus Ingredient Opaque
  '00189425'?: Element;
  ContrastBolusIngredientOpaque?: any;
  // Distance Receptor Plane to Detector Housing
  '00189426'?: Element;
  DistanceReceptorPlaneToDetectorHousing?: any;
  // Intensifier Active Shape
  '00189427'?: Element;
  IntensifierActiveShape?: any;
  // Intensifier Active Dimension(s)
  '00189428'?: Element;
  IntensifierActiveDimensions?: any;
  // Physical Detector Size
  '00189429'?: Element;
  PhysicalDetectorSize?: any;
  // Position of Isocenter Projection
  '00189430'?: Element;
  PositionOfIsocenterProjection?: any;
  // Field of View Sequence
  '00189432'?: Element;
  FieldOfViewSequence?: any;
  // Field of View Description
  '00189433'?: Element;
  FieldOfViewDescription?: any;
  // Exposure Control Sensing Regions Sequence
  '00189434'?: Element;
  ExposureControlSensingRegionsSequence?: any;
  // Exposure Control Sensing Region Shape
  '00189435'?: Element;
  ExposureControlSensingRegionShape?: any;
  // Exposure Control Sensing Region Left Vertical Edge
  '00189436'?: Element;
  ExposureControlSensingRegionLeftVerticalEdge?: any;
  // Exposure Control Sensing Region Right Vertical Edge
  '00189437'?: Element;
  ExposureControlSensingRegionRightVerticalEdge?: any;
  // Exposure Control Sensing Region Upper Horizontal Edge
  '00189438'?: Element;
  ExposureControlSensingRegionUpperHorizontalEdge?: any;
  // Exposure Control Sensing Region Lower Horizontal Edge
  '00189439'?: Element;
  ExposureControlSensingRegionLowerHorizontalEdge?: any;
  // Center of Circular Exposure Control Sensing Region
  '00189440'?: Element;
  CenterOfCircularExposureControlSensingRegion?: any;
  // Radius of Circular Exposure Control Sensing Region
  '00189441'?: Element;
  RadiusOfCircularExposureControlSensingRegion?: any;
  // Vertices of the Polygonal Exposure Control Sensing Region
  '00189442'?: Element;
  VerticesOfThePolygonalExposureControlSensingRegion?: any;
  // Column Angulation (Patient)
  '00189447'?: Element;
  ColumnAngulationPatient?: any;
  // Beam Angle
  '00189449'?: Element;
  BeamAngle?: any;
  // Frame Detector Parameters Sequence
  '00189451'?: Element;
  FrameDetectorParametersSequence?: any;
  // Calculated Anatomy Thickness
  '00189452'?: Element;
  CalculatedAnatomyThickness?: any;
  // Calibration Sequence
  '00189455'?: Element;
  CalibrationSequence?: any;
  // Object Thickness Sequence
  '00189456'?: Element;
  ObjectThicknessSequence?: any;
  // Plane Identification
  '00189457'?: Element;
  PlaneIdentification?: any;
  // Field of View Dimension(s) in Float
  '00189461'?: Element;
  FieldOfViewDimensionsInFloat?: any;
  // Isocenter Reference System Sequence
  '00189462'?: Element;
  IsocenterReferenceSystemSequence?: any;
  // Positioner Isocenter Primary Angle
  '00189463'?: Element;
  PositionerIsocenterPrimaryAngle?: any;
  // Positioner Isocenter Secondary Angle
  '00189464'?: Element;
  PositionerIsocenterSecondaryAngle?: any;
  // Positioner Isocenter Detector Rotation Angle
  '00189465'?: Element;
  PositionerIsocenterDetectorRotationAngle?: any;
  // Table X Position to Isocenter
  '00189466'?: Element;
  TableXPositionToIsocenter?: any;
  // Table Y Position to Isocenter
  '00189467'?: Element;
  TableYPositionToIsocenter?: any;
  // Table Z Position to Isocenter
  '00189468'?: Element;
  TableZPositionToIsocenter?: any;
  // Table Horizontal Rotation Angle
  '00189469'?: Element;
  TableHorizontalRotationAngle?: any;
  // Table Head Tilt Angle
  '00189470'?: Element;
  TableHeadTiltAngle?: any;
  // Table Cradle Tilt Angle
  '00189471'?: Element;
  TableCradleTiltAngle?: any;
  // Frame Display Shutter Sequence
  '00189472'?: Element;
  FrameDisplayShutterSequence?: any;
  // Acquired Image Area Dose Product
  '00189473'?: Element;
  AcquiredImageAreaDoseProduct?: any;
  // C-arm Positioner Tabletop Relationship
  '00189474'?: Element;
  CArmPositionerTabletopRelationship?: any;
  // X-Ray Geometry Sequence
  '00189476'?: Element;
  XRayGeometrySequence?: any;
  // Irradiation Event Identification Sequence
  '00189477'?: Element;
  IrradiationEventIdentificationSequence?: any;
  // X-Ray 3D Frame Type Sequence
  '00189504'?: Element;
  XRay3DFrameTypeSequence?: any;
  // Contributing Sources Sequence
  '00189506'?: Element;
  ContributingSourcesSequence?: any;
  // X-Ray 3D Acquisition Sequence
  '00189507'?: Element;
  XRay3DAcquisitionSequence?: any;
  // Primary Positioner Scan Arc
  '00189508'?: Element;
  PrimaryPositionerScanArc?: any;
  // Secondary Positioner Scan Arc
  '00189509'?: Element;
  SecondaryPositionerScanArc?: any;
  // Primary Positioner Scan Start Angle
  '00189510'?: Element;
  PrimaryPositionerScanStartAngle?: any;
  // Secondary Positioner Scan Start Angle
  '00189511'?: Element;
  SecondaryPositionerScanStartAngle?: any;
  // Primary Positioner Increment
  '00189514'?: Element;
  PrimaryPositionerIncrement?: any;
  // Secondary Positioner Increment
  '00189515'?: Element;
  SecondaryPositionerIncrement?: any;
  // Start Acquisition DateTime
  '00189516'?: Element;
  StartAcquisitionDateTime?: any;
  // End Acquisition DateTime
  '00189517'?: Element;
  EndAcquisitionDateTime?: any;
  // Primary Positioner Increment Sign
  '00189518'?: Element;
  PrimaryPositionerIncrementSign?: any;
  // Secondary Positioner Increment Sign
  '00189519'?: Element;
  SecondaryPositionerIncrementSign?: any;
  // Application Name
  '00189524'?: Element;
  ApplicationName?: any;
  // Application Version
  '00189525'?: Element;
  ApplicationVersion?: any;
  // Application Manufacturer
  '00189526'?: Element;
  ApplicationManufacturer?: any;
  // Algorithm Type
  '00189527'?: Element;
  AlgorithmType?: any;
  // Algorithm Description
  '00189528'?: Element;
  AlgorithmDescription?: any;
  // X-Ray 3D Reconstruction Sequence
  '00189530'?: Element;
  XRay3DReconstructionSequence?: any;
  // Reconstruction Description
  '00189531'?: Element;
  ReconstructionDescription?: any;
  // Per Projection Acquisition Sequence
  '00189538'?: Element;
  PerProjectionAcquisitionSequence?: any;
  // Detector Position Sequence
  '00189541'?: Element;
  DetectorPositionSequence?: any;
  // X-Ray Acquisition Dose Sequence
  '00189542'?: Element;
  XRayAcquisitionDoseSequence?: any;
  // X-Ray Source Isocenter Primary Angle
  '00189543'?: Element;
  XRaySourceIsocenterPrimaryAngle?: any;
  // X-Ray Source Isocenter Secondary Angle
  '00189544'?: Element;
  XRaySourceIsocenterSecondaryAngle?: any;
  // Breast Support Isocenter Primary Angle
  '00189545'?: Element;
  BreastSupportIsocenterPrimaryAngle?: any;
  // Breast Support Isocenter Secondary Angle
  '00189546'?: Element;
  BreastSupportIsocenterSecondaryAngle?: any;
  // Breast Support X Position to Isocenter
  '00189547'?: Element;
  BreastSupportXPositionToIsocenter?: any;
  // Breast Support Y Position to Isocenter
  '00189548'?: Element;
  BreastSupportYPositionToIsocenter?: any;
  // Breast Support Z Position to Isocenter
  '00189549'?: Element;
  BreastSupportZPositionToIsocenter?: any;
  // Detector Isocenter Primary Angle
  '00189550'?: Element;
  DetectorIsocenterPrimaryAngle?: any;
  // Detector Isocenter Secondary Angle
  '00189551'?: Element;
  DetectorIsocenterSecondaryAngle?: any;
  // Detector X Position to Isocenter
  '00189552'?: Element;
  DetectorXPositionToIsocenter?: any;
  // Detector Y Position to Isocenter
  '00189553'?: Element;
  DetectorYPositionToIsocenter?: any;
  // Detector Z Position to Isocenter
  '00189554'?: Element;
  DetectorZPositionToIsocenter?: any;
  // X-Ray Grid Sequence
  '00189555'?: Element;
  XRayGridSequence?: any;
  // X-Ray Filter Sequence
  '00189556'?: Element;
  XRayFilterSequence?: any;
  // Detector Active Area TLHC Position
  '00189557'?: Element;
  DetectorActiveAreaTLHCPosition?: any;
  // Detector Active Area Orientation
  '00189558'?: Element;
  DetectorActiveAreaOrientation?: any;
  // Positioner Primary Angle Direction
  '00189559'?: Element;
  PositionerPrimaryAngleDirection?: any;
  // Diffusion b-matrix Sequence
  '00189601'?: Element;
  DiffusionBMatrixSequence?: any;
  // Diffusion b-value XX
  '00189602'?: Element;
  DiffusionBValueXX?: any;
  // Diffusion b-value XY
  '00189603'?: Element;
  DiffusionBValueXY?: any;
  // Diffusion b-value XZ
  '00189604'?: Element;
  DiffusionBValueXZ?: any;
  // Diffusion b-value YY
  '00189605'?: Element;
  DiffusionBValueYY?: any;
  // Diffusion b-value YZ
  '00189606'?: Element;
  DiffusionBValueYZ?: any;
  // Diffusion b-value ZZ
  '00189607'?: Element;
  DiffusionBValueZZ?: any;
  // Decay Correction DateTime
  '00189701'?: Element;
  DecayCorrectionDateTime?: any;
  // Start Density Threshold
  '00189715'?: Element;
  StartDensityThreshold?: any;
  // Start Relative Density Difference Threshold
  '00189716'?: Element;
  StartRelativeDensityDifferenceThreshold?: any;
  // Start Cardiac Trigger Count Threshold
  '00189717'?: Element;
  StartCardiacTriggerCountThreshold?: any;
  // Start Respiratory Trigger Count Threshold
  '00189718'?: Element;
  StartRespiratoryTriggerCountThreshold?: any;
  // Termination Counts Threshold
  '00189719'?: Element;
  TerminationCountsThreshold?: any;
  // Termination Density Threshold
  '00189720'?: Element;
  TerminationDensityThreshold?: any;
  // Termination Relative Density Threshold
  '00189721'?: Element;
  TerminationRelativeDensityThreshold?: any;
  // Termination Time Threshold
  '00189722'?: Element;
  TerminationTimeThreshold?: any;
  // Termination Cardiac Trigger Count Threshold
  '00189723'?: Element;
  TerminationCardiacTriggerCountThreshold?: any;
  // Termination Respiratory Trigger Count Threshold
  '00189724'?: Element;
  TerminationRespiratoryTriggerCountThreshold?: any;
  // Detector Geometry
  '00189725'?: Element;
  DetectorGeometry?: any;
  // Transverse Detector Separation
  '00189726'?: Element;
  TransverseDetectorSeparation?: any;
  // Axial Detector Dimension
  '00189727'?: Element;
  AxialDetectorDimension?: any;
  // Radiopharmaceutical Agent Number
  '00189729'?: Element;
  RadiopharmaceuticalAgentNumber?: any;
  // PET Frame Acquisition Sequence
  '00189732'?: Element;
  PETFrameAcquisitionSequence?: any;
  // PET Detector Motion Details Sequence
  '00189733'?: Element;
  PETDetectorMotionDetailsSequence?: any;
  // PET Table Dynamics Sequence
  '00189734'?: Element;
  PETTableDynamicsSequence?: any;
  // PET Position Sequence
  '00189735'?: Element;
  PETPositionSequence?: any;
  // PET Frame Correction Factors Sequence
  '00189736'?: Element;
  PETFrameCorrectionFactorsSequence?: any;
  // Radiopharmaceutical Usage Sequence
  '00189737'?: Element;
  RadiopharmaceuticalUsageSequence?: any;
  // Attenuation Correction Source
  '00189738'?: Element;
  AttenuationCorrectionSource?: any;
  // Number of Iterations
  '00189739'?: Element;
  NumberOfIterations?: any;
  // Number of Subsets
  '00189740'?: Element;
  NumberOfSubsets?: any;
  // PET Reconstruction Sequence
  '00189749'?: Element;
  PETReconstructionSequence?: any;
  // PET Frame Type Sequence
  '00189751'?: Element;
  PETFrameTypeSequence?: any;
  // Time of Flight Information Used
  '00189755'?: Element;
  TimeOfFlightInformationUsed?: any;
  // Reconstruction Type
  '00189756'?: Element;
  ReconstructionType?: any;
  // Decay Corrected
  '00189758'?: Element;
  DecayCorrected?: any;
  // Attenuation Corrected
  '00189759'?: Element;
  AttenuationCorrected?: any;
  // Scatter Corrected
  '00189760'?: Element;
  ScatterCorrected?: any;
  // Dead Time Corrected
  '00189761'?: Element;
  DeadTimeCorrected?: any;
  // Gantry Motion Corrected
  '00189762'?: Element;
  GantryMotionCorrected?: any;
  // Patient Motion Corrected
  '00189763'?: Element;
  PatientMotionCorrected?: any;
  // Count Loss Normalization Corrected
  '00189764'?: Element;
  CountLossNormalizationCorrected?: any;
  // Randoms Corrected
  '00189765'?: Element;
  RandomsCorrected?: any;
  // Non-uniform Radial Sampling Corrected
  '00189766'?: Element;
  NonUniformRadialSamplingCorrected?: any;
  // Sensitivity Calibrated
  '00189767'?: Element;
  SensitivityCalibrated?: any;
  // Detector Normalization Correction
  '00189768'?: Element;
  DetectorNormalizationCorrection?: any;
  // Iterative Reconstruction Method
  '00189769'?: Element;
  IterativeReconstructionMethod?: any;
  // Attenuation Correction Temporal Relationship
  '00189770'?: Element;
  AttenuationCorrectionTemporalRelationship?: any;
  // Patient Physiological State Sequence
  '00189771'?: Element;
  PatientPhysiologicalStateSequence?: any;
  // Patient Physiological State Code Sequence
  '00189772'?: Element;
  PatientPhysiologicalStateCodeSequence?: any;
  // Depth(s) of Focus
  '00189801'?: Element;
  DepthsOfFocus?: any;
  // Excluded Intervals Sequence
  '00189803'?: Element;
  ExcludedIntervalsSequence?: any;
  // Exclusion Start DateTime
  '00189804'?: Element;
  ExclusionStartDateTime?: any;
  // Exclusion Duration
  '00189805'?: Element;
  ExclusionDuration?: any;
  // US Image Description Sequence
  '00189806'?: Element;
  USImageDescriptionSequence?: any;
  // Image Data Type Sequence
  '00189807'?: Element;
  ImageDataTypeSequence?: any;
  // Data Type
  '00189808'?: Element;
  DataType?: any;
  // Transducer Scan Pattern Code Sequence
  '00189809'?: Element;
  TransducerScanPatternCodeSequence?: any;
  // Aliased Data Type
  '0018980B'?: Element;
  AliasedDataType?: any;
  // Position Measuring Device Used
  '0018980C'?: Element;
  PositionMeasuringDeviceUsed?: any;
  // Transducer Geometry Code Sequence
  '0018980D'?: Element;
  TransducerGeometryCodeSequence?: any;
  // Transducer Beam Steering Code Sequence
  '0018980E'?: Element;
  TransducerBeamSteeringCodeSequence?: any;
  // Transducer Application Code Sequence
  '0018980F'?: Element;
  TransducerApplicationCodeSequence?: any;
  // Zero Velocity Pixel Value
  '00189810'?: Element;
  ZeroVelocityPixelValue?: any;
  // Contributing Equipment Sequence
  '0018A001'?: Element;
  ContributingEquipmentSequence?: any;
  // Contribution DateTime
  '0018A002'?: Element;
  ContributionDateTime?: any;
  // Contribution Description
  '0018A003'?: Element;
  ContributionDescription?: any;
  // Study Instance UID
  '0020000D'?: Element;
  StudyInstanceUID?: any;
  // Series Instance UID
  '0020000E'?: Element;
  SeriesInstanceUID?: any;
  // Study ID
  '00200010'?: Element;
  StudyID?: any;
  // Series Number
  '00200011'?: Element;
  SeriesNumber?: any;
  // Acquisition Number
  '00200012'?: Element;
  AcquisitionNumber?: any;
  // Instance Number
  '00200013'?: Element;
  InstanceNumber?: any;
  // Isotope Number
  '00200014'?: Element;
  IsotopeNumber?: any;
  // Phase Number
  '00200015'?: Element;
  PhaseNumber?: any;
  // Interval Number
  '00200016'?: Element;
  IntervalNumber?: any;
  // Time Slot Number
  '00200017'?: Element;
  TimeSlotNumber?: any;
  // Angle Number
  '00200018'?: Element;
  AngleNumber?: any;
  // Item Number
  '00200019'?: Element;
  ItemNumber?: any;
  // Patient Orientation
  '00200020'?: Element;
  PatientOrientation?: any;
  // Overlay Number
  '00200022'?: Element;
  OverlayNumber?: any;
  // Curve Number
  '00200024'?: Element;
  CurveNumber?: any;
  // LUT Number
  '00200026'?: Element;
  LUTNumber?: any;
  // Image Position
  '00200030'?: Element;
  ImagePosition?: any;
  // Image Position (Patient)
  '00200032'?: Element;
  ImagePositionPatient?: any;
  // Image Orientation
  '00200035'?: Element;
  ImageOrientation?: any;
  // Image Orientation (Patient)
  '00200037'?: Element;
  ImageOrientationPatient?: any;
  // Location
  '00200050'?: Element;
  Location?: any;
  // Frame of Reference UID
  '00200052'?: Element;
  FrameOfReferenceUID?: any;
  // Laterality
  '00200060'?: Element;
  Laterality?: any;
  // Image Laterality
  '00200062'?: Element;
  ImageLaterality?: any;
  // Image Geometry Type
  '00200070'?: Element;
  ImageGeometryType?: any;
  // Masking Image
  '00200080'?: Element;
  MaskingImage?: any;
  // Report Number
  '002000AA'?: Element;
  ReportNumber?: any;
  // Temporal Position Identifier
  '00200100'?: Element;
  TemporalPositionIdentifier?: any;
  // Number of Temporal Positions
  '00200105'?: Element;
  NumberOfTemporalPositions?: any;
  // Temporal Resolution
  '00200110'?: Element;
  TemporalResolution?: any;
  // Synchronization Frame of Reference UID
  '00200200'?: Element;
  SynchronizationFrameOfReferenceUID?: any;
  // SOP Instance UID of Concatenation Source
  '00200242'?: Element;
  SOPInstanceUIDOfConcatenationSource?: any;
  // Series in Study
  '00201000'?: Element;
  SeriesInStudy?: any;
  // Acquisitions in Series
  '00201001'?: Element;
  AcquisitionsInSeries?: any;
  // Images in Acquisition
  '00201002'?: Element;
  ImagesInAcquisition?: any;
  // Images in Series
  '00201003'?: Element;
  ImagesInSeries?: any;
  // Acquisitions in Study
  '00201004'?: Element;
  AcquisitionsInStudy?: any;
  // Images in Study
  '00201005'?: Element;
  ImagesInStudy?: any;
  // Reference
  '00201020'?: Element;
  Reference?: any;
  // Position Reference Indicator
  '00201040'?: Element;
  PositionReferenceIndicator?: any;
  // Slice Location
  '00201041'?: Element;
  SliceLocation?: any;
  // Other Study Numbers
  '00201070'?: Element;
  OtherStudyNumbers?: any;
  // Number of Patient Related Studies
  '00201200'?: Element;
  NumberOfPatientRelatedStudies?: any;
  // Number of Patient Related Series
  '00201202'?: Element;
  NumberOfPatientRelatedSeries?: any;
  // Number of Patient Related Instances
  '00201204'?: Element;
  NumberOfPatientRelatedInstances?: any;
  // Number of Study Related Series
  '00201206'?: Element;
  NumberOfStudyRelatedSeries?: any;
  // Number of Study Related Instances
  '00201208'?: Element;
  NumberOfStudyRelatedInstances?: any;
  // Number of Series Related Instances
  '00201209'?: Element;
  NumberOfSeriesRelatedInstances?: any;
  // Source Image IDs
  '002031xx'?: Element;
  SourceImageIDs?: any;
  // Modifying Device ID
  '00203401'?: Element;
  ModifyingDeviceID?: any;
  // Modified Image ID
  '00203402'?: Element;
  ModifiedImageID?: any;
  // Modified Image Date
  '00203403'?: Element;
  ModifiedImageDate?: any;
  // Modifying Device Manufacturer
  '00203404'?: Element;
  ModifyingDeviceManufacturer?: any;
  // Modified Image Time
  '00203405'?: Element;
  ModifiedImageTime?: any;
  // Modified Image Description
  '00203406'?: Element;
  ModifiedImageDescription?: any;
  // Image Comments
  '00204000'?: Element;
  ImageComments?: any;
  // Original Image Identification
  '00205000'?: Element;
  OriginalImageIdentification?: any;
  // Original Image Identification Nomenclature
  '00205002'?: Element;
  OriginalImageIdentificationNomenclature?: any;
  // Stack ID
  '00209056'?: Element;
  StackID?: any;
  // In-Stack Position Number
  '00209057'?: Element;
  InStackPositionNumber?: any;
  // Frame Anatomy Sequence
  '00209071'?: Element;
  FrameAnatomySequence?: any;
  // Frame Laterality
  '00209072'?: Element;
  FrameLaterality?: any;
  // Frame Content Sequence
  '00209111'?: Element;
  FrameContentSequence?: any;
  // Plane Position Sequence
  '00209113'?: Element;
  PlanePositionSequence?: any;
  // Plane Orientation Sequence
  '00209116'?: Element;
  PlaneOrientationSequence?: any;
  // Temporal Position Index
  '00209128'?: Element;
  TemporalPositionIndex?: any;
  // Nominal Cardiac Trigger Delay Time
  '00209153'?: Element;
  NominalCardiacTriggerDelayTime?: any;
  // Nominal Cardiac Trigger Time Prior To R-Peak
  '00209154'?: Element;
  NominalCardiacTriggerTimePriorToRPeak?: any;
  // Actual Cardiac Trigger Time Prior To R-Peak
  '00209155'?: Element;
  ActualCardiacTriggerTimePriorToRPeak?: any;
  // Frame Acquisition Number
  '00209156'?: Element;
  FrameAcquisitionNumber?: any;
  // Dimension Index Values
  '00209157'?: Element;
  DimensionIndexValues?: any;
  // Frame Comments
  '00209158'?: Element;
  FrameComments?: any;
  // Concatenation UID
  '00209161'?: Element;
  ConcatenationUID?: any;
  // In-concatenation Number
  '00209162'?: Element;
  InConcatenationNumber?: any;
  // In-concatenation Total Number
  '00209163'?: Element;
  InConcatenationTotalNumber?: any;
  // Dimension Organization UID
  '00209164'?: Element;
  DimensionOrganizationUID?: any;
  // Dimension Index Pointer
  '00209165'?: Element;
  DimensionIndexPointer?: any;
  // Functional Group Pointer
  '00209167'?: Element;
  FunctionalGroupPointer?: any;
  // Unassigned Shared Converted Attributes Sequence
  '00209170'?: Element;
  UnassignedSharedConvertedAttributesSequence?: any;
  // Unassigned Per-Frame Converted Attributes Sequence
  '00209171'?: Element;
  UnassignedPerFrameConvertedAttributesSequence?: any;
  // Conversion Source Attributes Sequence
  '00209172'?: Element;
  ConversionSourceAttributesSequence?: any;
  // Dimension Index Private Creator
  '00209213'?: Element;
  DimensionIndexPrivateCreator?: any;
  // Dimension Organization Sequence
  '00209221'?: Element;
  DimensionOrganizationSequence?: any;
  // Dimension Index Sequence
  '00209222'?: Element;
  DimensionIndexSequence?: any;
  // Concatenation Frame Offset Number
  '00209228'?: Element;
  ConcatenationFrameOffsetNumber?: any;
  // Functional Group Private Creator
  '00209238'?: Element;
  FunctionalGroupPrivateCreator?: any;
  // Nominal Percentage of Cardiac Phase
  '00209241'?: Element;
  NominalPercentageOfCardiacPhase?: any;
  // Nominal Percentage of Respiratory Phase
  '00209245'?: Element;
  NominalPercentageOfRespiratoryPhase?: any;
  // Starting Respiratory Amplitude
  '00209246'?: Element;
  StartingRespiratoryAmplitude?: any;
  // Starting Respiratory Phase
  '00209247'?: Element;
  StartingRespiratoryPhase?: any;
  // Ending Respiratory Amplitude
  '00209248'?: Element;
  EndingRespiratoryAmplitude?: any;
  // Ending Respiratory Phase
  '00209249'?: Element;
  EndingRespiratoryPhase?: any;
  // Respiratory Trigger Type
  '00209250'?: Element;
  RespiratoryTriggerType?: any;
  // R-R Interval Time Nominal
  '00209251'?: Element;
  RRIntervalTimeNominal?: any;
  // Actual Cardiac Trigger Delay Time
  '00209252'?: Element;
  ActualCardiacTriggerDelayTime?: any;
  // Respiratory Synchronization Sequence
  '00209253'?: Element;
  RespiratorySynchronizationSequence?: any;
  // Respiratory Interval Time
  '00209254'?: Element;
  RespiratoryIntervalTime?: any;
  // Nominal Respiratory Trigger Delay Time
  '00209255'?: Element;
  NominalRespiratoryTriggerDelayTime?: any;
  // Respiratory Trigger Delay Threshold
  '00209256'?: Element;
  RespiratoryTriggerDelayThreshold?: any;
  // Actual Respiratory Trigger Delay Time
  '00209257'?: Element;
  ActualRespiratoryTriggerDelayTime?: any;
  // Image Position (Volume)
  '00209301'?: Element;
  ImagePositionVolume?: any;
  // Image Orientation (Volume)
  '00209302'?: Element;
  ImageOrientationVolume?: any;
  // Ultrasound Acquisition Geometry
  '00209307'?: Element;
  UltrasoundAcquisitionGeometry?: any;
  // Apex Position
  '00209308'?: Element;
  ApexPosition?: any;
  // Volume to Transducer Mapping Matrix
  '00209309'?: Element;
  VolumeToTransducerMappingMatrix?: any;
  // Volume to Table Mapping Matrix
  '0020930A'?: Element;
  VolumeToTableMappingMatrix?: any;
  // Volume to Transducer Relationship
  '0020930B'?: Element;
  VolumeToTransducerRelationship?: any;
  // Patient Frame of Reference Source
  '0020930C'?: Element;
  PatientFrameOfReferenceSource?: any;
  // Temporal Position Time Offset
  '0020930D'?: Element;
  TemporalPositionTimeOffset?: any;
  // Plane Position (Volume) Sequence
  '0020930E'?: Element;
  PlanePositionVolumeSequence?: any;
  // Plane Orientation (Volume) Sequence
  '0020930F'?: Element;
  PlaneOrientationVolumeSequence?: any;
  // Temporal Position Sequence
  '00209310'?: Element;
  TemporalPositionSequence?: any;
  // Dimension Organization Type
  '00209311'?: Element;
  DimensionOrganizationType?: any;
  // Volume Frame of Reference UID
  '00209312'?: Element;
  VolumeFrameOfReferenceUID?: any;
  // Table Frame of Reference UID
  '00209313'?: Element;
  TableFrameOfReferenceUID?: any;
  // Dimension Description Label
  '00209421'?: Element;
  DimensionDescriptionLabel?: any;
  // Patient Orientation in Frame Sequence
  '00209450'?: Element;
  PatientOrientationInFrameSequence?: any;
  // Frame Label
  '00209453'?: Element;
  FrameLabel?: any;
  // Acquisition Index
  '00209518'?: Element;
  AcquisitionIndex?: any;
  // Contributing SOP Instances Reference Sequence
  '00209529'?: Element;
  ContributingSOPInstancesReferenceSequence?: any;
  // Reconstruction Index
  '00209536'?: Element;
  ReconstructionIndex?: any;
  // Light Path Filter Pass-Through Wavelength
  '00220001'?: Element;
  LightPathFilterPassThroughWavelength?: any;
  // Light Path Filter Pass Band
  '00220002'?: Element;
  LightPathFilterPassBand?: any;
  // Image Path Filter Pass-Through Wavelength
  '00220003'?: Element;
  ImagePathFilterPassThroughWavelength?: any;
  // Image Path Filter Pass Band
  '00220004'?: Element;
  ImagePathFilterPassBand?: any;
  // Patient Eye Movement Commanded
  '00220005'?: Element;
  PatientEyeMovementCommanded?: any;
  // Patient Eye Movement Command Code Sequence
  '00220006'?: Element;
  PatientEyeMovementCommandCodeSequence?: any;
  // Spherical Lens Power
  '00220007'?: Element;
  SphericalLensPower?: any;
  // Cylinder Lens Power
  '00220008'?: Element;
  CylinderLensPower?: any;
  // Cylinder Axis
  '00220009'?: Element;
  CylinderAxis?: any;
  // Emmetropic Magnification
  '0022000A'?: Element;
  EmmetropicMagnification?: any;
  // Intra Ocular Pressure
  '0022000B'?: Element;
  IntraOcularPressure?: any;
  // Horizontal Field of View
  '0022000C'?: Element;
  HorizontalFieldOfView?: any;
  // Pupil Dilated
  '0022000D'?: Element;
  PupilDilated?: any;
  // Degree of Dilation
  '0022000E'?: Element;
  DegreeOfDilation?: any;
  // Stereo Baseline Angle
  '00220010'?: Element;
  StereoBaselineAngle?: any;
  // Stereo Baseline Displacement
  '00220011'?: Element;
  StereoBaselineDisplacement?: any;
  // Stereo Horizontal Pixel Offset
  '00220012'?: Element;
  StereoHorizontalPixelOffset?: any;
  // Stereo Vertical Pixel Offset
  '00220013'?: Element;
  StereoVerticalPixelOffset?: any;
  // Stereo Rotation
  '00220014'?: Element;
  StereoRotation?: any;
  // Acquisition Device Type Code Sequence
  '00220015'?: Element;
  AcquisitionDeviceTypeCodeSequence?: any;
  // Illumination Type Code Sequence
  '00220016'?: Element;
  IlluminationTypeCodeSequence?: any;
  // Light Path Filter Type Stack Code Sequence
  '00220017'?: Element;
  LightPathFilterTypeStackCodeSequence?: any;
  // Image Path Filter Type Stack Code Sequence
  '00220018'?: Element;
  ImagePathFilterTypeStackCodeSequence?: any;
  // Lenses Code Sequence
  '00220019'?: Element;
  LensesCodeSequence?: any;
  // Channel Description Code Sequence
  '0022001A'?: Element;
  ChannelDescriptionCodeSequence?: any;
  // Refractive State Sequence
  '0022001B'?: Element;
  RefractiveStateSequence?: any;
  // Mydriatic Agent Code Sequence
  '0022001C'?: Element;
  MydriaticAgentCodeSequence?: any;
  // Relative Image Position Code Sequence
  '0022001D'?: Element;
  RelativeImagePositionCodeSequence?: any;
  // Camera Angle of View
  '0022001E'?: Element;
  CameraAngleOfView?: any;
  // Stereo Pairs Sequence
  '00220020'?: Element;
  StereoPairsSequence?: any;
  // Left Image Sequence
  '00220021'?: Element;
  LeftImageSequence?: any;
  // Right Image Sequence
  '00220022'?: Element;
  RightImageSequence?: any;
  // Axial Length of the Eye
  '00220030'?: Element;
  AxialLengthOfTheEye?: any;
  // Ophthalmic Frame Location Sequence
  '00220031'?: Element;
  OphthalmicFrameLocationSequence?: any;
  // Reference Coordinates
  '00220032'?: Element;
  ReferenceCoordinates?: any;
  // Depth Spatial Resolution
  '00220035'?: Element;
  DepthSpatialResolution?: any;
  // Maximum Depth Distortion
  '00220036'?: Element;
  MaximumDepthDistortion?: any;
  // Along-scan Spatial Resolution
  '00220037'?: Element;
  AlongScanSpatialResolution?: any;
  // Maximum Along-scan Distortion
  '00220038'?: Element;
  MaximumAlongScanDistortion?: any;
  // Ophthalmic Image Orientation
  '00220039'?: Element;
  OphthalmicImageOrientation?: any;
  // Depth of Transverse Image
  '00220041'?: Element;
  DepthOfTransverseImage?: any;
  // Mydriatic Agent Concentration Units Sequence
  '00220042'?: Element;
  MydriaticAgentConcentrationUnitsSequence?: any;
  // Across-scan Spatial Resolution
  '00220048'?: Element;
  AcrossScanSpatialResolution?: any;
  // Maximum Across-scan Distortion
  '00220049'?: Element;
  MaximumAcrossScanDistortion?: any;
  // Mydriatic Agent Concentration
  '0022004E'?: Element;
  MydriaticAgentConcentration?: any;
  // Illumination Wave Length
  '00220055'?: Element;
  IlluminationWaveLength?: any;
  // Illumination Power
  '00220056'?: Element;
  IlluminationPower?: any;
  // Illumination Bandwidth
  '00220057'?: Element;
  IlluminationBandwidth?: any;
  // Mydriatic Agent Sequence
  '00220058'?: Element;
  MydriaticAgentSequence?: any;
  // Ophthalmic Axial Measurements Right Eye Sequence
  '00221007'?: Element;
  OphthalmicAxialMeasurementsRightEyeSequence?: any;
  // Ophthalmic Axial Measurements Left Eye Sequence
  '00221008'?: Element;
  OphthalmicAxialMeasurementsLeftEyeSequence?: any;
  // Ophthalmic Axial Measurements Device Type
  '00221009'?: Element;
  OphthalmicAxialMeasurementsDeviceType?: any;
  // Ophthalmic Axial Length Measurements Type
  '00221010'?: Element;
  OphthalmicAxialLengthMeasurementsType?: any;
  // Ophthalmic Axial Length Sequence
  '00221012'?: Element;
  OphthalmicAxialLengthSequence?: any;
  // Ophthalmic Axial Length
  '00221019'?: Element;
  OphthalmicAxialLength?: any;
  // Lens Status Code Sequence
  '00221024'?: Element;
  LensStatusCodeSequence?: any;
  // Vitreous Status Code Sequence
  '00221025'?: Element;
  VitreousStatusCodeSequence?: any;
  // IOL Formula Code Sequence
  '00221028'?: Element;
  IOLFormulaCodeSequence?: any;
  // IOL Formula Detail
  '00221029'?: Element;
  IOLFormulaDetail?: any;
  // Keratometer Index
  '00221033'?: Element;
  KeratometerIndex?: any;
  // Source of Ophthalmic Axial Length Code Sequence
  '00221035'?: Element;
  SourceOfOphthalmicAxialLengthCodeSequence?: any;
  // Target Refraction
  '00221037'?: Element;
  TargetRefraction?: any;
  // Refractive Procedure Occurred
  '00221039'?: Element;
  RefractiveProcedureOccurred?: any;
  // Refractive Surgery Type Code Sequence
  '00221040'?: Element;
  RefractiveSurgeryTypeCodeSequence?: any;
  // Ophthalmic Ultrasound Method Code Sequence
  '00221044'?: Element;
  OphthalmicUltrasoundMethodCodeSequence?: any;
  // Ophthalmic Axial Length Measurements Sequence
  '00221050'?: Element;
  OphthalmicAxialLengthMeasurementsSequence?: any;
  // IOL Power
  '00221053'?: Element;
  IOLPower?: any;
  // Predicted Refractive Error
  '00221054'?: Element;
  PredictedRefractiveError?: any;
  // Ophthalmic Axial Length Velocity
  '00221059'?: Element;
  OphthalmicAxialLengthVelocity?: any;
  // Lens Status Description
  '00221065'?: Element;
  LensStatusDescription?: any;
  // Vitreous Status Description
  '00221066'?: Element;
  VitreousStatusDescription?: any;
  // IOL Power Sequence
  '00221090'?: Element;
  IOLPowerSequence?: any;
  // Lens Constant Sequence
  '00221092'?: Element;
  LensConstantSequence?: any;
  // IOL Manufacturer
  '00221093'?: Element;
  IOLManufacturer?: any;
  // Lens Constant Description
  '00221094'?: Element;
  LensConstantDescription?: any;
  // Implant Name
  '00221095'?: Element;
  ImplantName?: any;
  // Keratometry Measurement Type Code Sequence
  '00221096'?: Element;
  KeratometryMeasurementTypeCodeSequence?: any;
  // Implant Part Number
  '00221097'?: Element;
  ImplantPartNumber?: any;
  // Referenced Ophthalmic Axial Measurements Sequence
  '00221100'?: Element;
  ReferencedOphthalmicAxialMeasurementsSequence?: any;
  // Ophthalmic Axial Length Measurements Segment Name Code Sequence
  '00221101'?: Element;
  OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence?: any;
  // Refractive Error Before Refractive Surgery Code Sequence
  '00221103'?: Element;
  RefractiveErrorBeforeRefractiveSurgeryCodeSequence?: any;
  // IOL Power For Exact Emmetropia
  '00221121'?: Element;
  IOLPowerForExactEmmetropia?: any;
  // IOL Power For Exact Target Refraction
  '00221122'?: Element;
  IOLPowerForExactTargetRefraction?: any;
  // Anterior Chamber Depth Definition Code Sequence
  '00221125'?: Element;
  AnteriorChamberDepthDefinitionCodeSequence?: any;
  // Lens Thickness Sequence
  '00221127'?: Element;
  LensThicknessSequence?: any;
  // Anterior Chamber Depth Sequence
  '00221128'?: Element;
  AnteriorChamberDepthSequence?: any;
  // Lens Thickness
  '00221130'?: Element;
  LensThickness?: any;
  // Anterior Chamber Depth
  '00221131'?: Element;
  AnteriorChamberDepth?: any;
  // Source of Lens Thickness Data Code Sequence
  '00221132'?: Element;
  SourceOfLensThicknessDataCodeSequence?: any;
  // Source of Anterior Chamber Depth Data Code Sequence
  '00221133'?: Element;
  SourceOfAnteriorChamberDepthDataCodeSequence?: any;
  // Source of Refractive Measurements Sequence
  '00221134'?: Element;
  SourceOfRefractiveMeasurementsSequence?: any;
  // Source of Refractive Measurements Code Sequence
  '00221135'?: Element;
  SourceOfRefractiveMeasurementsCodeSequence?: any;
  // Ophthalmic Axial Length Measurement Modified
  '00221140'?: Element;
  OphthalmicAxialLengthMeasurementModified?: any;
  // Ophthalmic Axial Length Data Source Code Sequence
  '00221150'?: Element;
  OphthalmicAxialLengthDataSourceCodeSequence?: any;
  // Ophthalmic Axial Length Acquisition Method Code Sequence
  '00221153'?: Element;
  OphthalmicAxialLengthAcquisitionMethodCodeSequence?: any;
  // Signal to Noise Ratio
  '00221155'?: Element;
  SignalToNoiseRatio?: any;
  // Ophthalmic Axial Length Data Source Description
  '00221159'?: Element;
  OphthalmicAxialLengthDataSourceDescription?: any;
  // Ophthalmic Axial Length Measurements Total Length Sequence
  '00221210'?: Element;
  OphthalmicAxialLengthMeasurementsTotalLengthSequence?: any;
  // Ophthalmic Axial Length Measurements Segmental Length Sequence
  '00221211'?: Element;
  OphthalmicAxialLengthMeasurementsSegmentalLengthSequence?: any;
  // Ophthalmic Axial Length Measurements Length Summation Sequence
  '00221212'?: Element;
  OphthalmicAxialLengthMeasurementsLengthSummationSequence?: any;
  // Ultrasound Ophthalmic Axial Length Measurements Sequence
  '00221220'?: Element;
  UltrasoundOphthalmicAxialLengthMeasurementsSequence?: any;
  // Optical Ophthalmic Axial Length Measurements Sequence
  '00221225'?: Element;
  OpticalOphthalmicAxialLengthMeasurementsSequence?: any;
  // Ultrasound Selected Ophthalmic Axial Length Sequence
  '00221230'?: Element;
  UltrasoundSelectedOphthalmicAxialLengthSequence?: any;
  // Ophthalmic Axial Length Selection Method Code Sequence
  '00221250'?: Element;
  OphthalmicAxialLengthSelectionMethodCodeSequence?: any;
  // Optical Selected Ophthalmic Axial Length Sequence
  '00221255'?: Element;
  OpticalSelectedOphthalmicAxialLengthSequence?: any;
  // Selected Segmental Ophthalmic Axial Length Sequence
  '00221257'?: Element;
  SelectedSegmentalOphthalmicAxialLengthSequence?: any;
  // Selected Total Ophthalmic Axial Length Sequence
  '00221260'?: Element;
  SelectedTotalOphthalmicAxialLengthSequence?: any;
  // Ophthalmic Axial Length Quality Metric Sequence
  '00221262'?: Element;
  OphthalmicAxialLengthQualityMetricSequence?: any;
  // Ophthalmic Axial Length Quality Metric Type Code Sequence
  '00221265'?: Element;
  OphthalmicAxialLengthQualityMetricTypeCodeSequence?: any;
  // Ophthalmic Axial Length Quality Metric Type Description
  '00221273'?: Element;
  OphthalmicAxialLengthQualityMetricTypeDescription?: any;
  // Intraocular Lens Calculations Right Eye Sequence
  '00221300'?: Element;
  IntraocularLensCalculationsRightEyeSequence?: any;
  // Intraocular Lens Calculations Left Eye Sequence
  '00221310'?: Element;
  IntraocularLensCalculationsLeftEyeSequence?: any;
  // Referenced Ophthalmic Axial Length Measurement QC Image Sequence
  '00221330'?: Element;
  ReferencedOphthalmicAxialLengthMeasurementQCImageSequence?: any;
  // Ophthalmic Mapping Device Type
  '00221415'?: Element;
  OphthalmicMappingDeviceType?: any;
  // Acquisition Method Code Sequence
  '00221420'?: Element;
  AcquisitionMethodCodeSequence?: any;
  // Acquisition Method Algorithm Sequence
  '00221423'?: Element;
  AcquisitionMethodAlgorithmSequence?: any;
  // Ophthalmic Thickness Map Type Code Sequence
  '00221436'?: Element;
  OphthalmicThicknessMapTypeCodeSequence?: any;
  // Ophthalmic Thickness Mapping Normals Sequence
  '00221443'?: Element;
  OphthalmicThicknessMappingNormalsSequence?: any;
  // Retinal Thickness Definition Code Sequence
  '00221445'?: Element;
  RetinalThicknessDefinitionCodeSequence?: any;
  // Pixel Value Mapping to Coded Concept Sequence
  '00221450'?: Element;
  PixelValueMappingToCodedConceptSequence?: any;
  // Mapped Pixel Value
  '00221452'?: Element;
  MappedPixelValue?: any;
  // Pixel Value Mapping Explanation
  '00221454'?: Element;
  PixelValueMappingExplanation?: any;
  // Ophthalmic Thickness Map Quality Threshold Sequence
  '00221458'?: Element;
  OphthalmicThicknessMapQualityThresholdSequence?: any;
  // Ophthalmic Thickness Map Threshold Quality Rating
  '00221460'?: Element;
  OphthalmicThicknessMapThresholdQualityRating?: any;
  // Anatomic Structure Reference Point
  '00221463'?: Element;
  AnatomicStructureReferencePoint?: any;
  // Registration to Localizer Sequence
  '00221465'?: Element;
  RegistrationToLocalizerSequence?: any;
  // Registered Localizer Units
  '00221466'?: Element;
  RegisteredLocalizerUnits?: any;
  // Registered Localizer Top Left Hand Corner
  '00221467'?: Element;
  RegisteredLocalizerTopLeftHandCorner?: any;
  // Registered Localizer Bottom Right Hand Corner
  '00221468'?: Element;
  RegisteredLocalizerBottomRightHandCorner?: any;
  // Ophthalmic Thickness Map Quality Rating Sequence
  '00221470'?: Element;
  OphthalmicThicknessMapQualityRatingSequence?: any;
  // Relevant OPT Attributes Sequence
  '00221472'?: Element;
  RelevantOPTAttributesSequence?: any;
  // Visual Field Horizontal Extent
  '00240010'?: Element;
  VisualFieldHorizontalExtent?: any;
  // Visual Field Vertical Extent
  '00240011'?: Element;
  VisualFieldVerticalExtent?: any;
  // Visual Field Shape
  '00240012'?: Element;
  VisualFieldShape?: any;
  // Screening Test Mode Code Sequence
  '00240016'?: Element;
  ScreeningTestModeCodeSequence?: any;
  // Maximum Stimulus Luminance
  '00240018'?: Element;
  MaximumStimulusLuminance?: any;
  // Background Luminance
  '00240020'?: Element;
  BackgroundLuminance?: any;
  // Stimulus Color Code Sequence
  '00240021'?: Element;
  StimulusColorCodeSequence?: any;
  // Background Illumination Color Code Sequence
  '00240024'?: Element;
  BackgroundIlluminationColorCodeSequence?: any;
  // Stimulus Area
  '00240025'?: Element;
  StimulusArea?: any;
  // Stimulus Presentation Time
  '00240028'?: Element;
  StimulusPresentationTime?: any;
  // Fixation Sequence
  '00240032'?: Element;
  FixationSequence?: any;
  // Fixation Monitoring Code Sequence
  '00240033'?: Element;
  FixationMonitoringCodeSequence?: any;
  // Visual Field Catch Trial Sequence
  '00240034'?: Element;
  VisualFieldCatchTrialSequence?: any;
  // Fixation Checked Quantity
  '00240035'?: Element;
  FixationCheckedQuantity?: any;
  // Patient Not Properly Fixated Quantity
  '00240036'?: Element;
  PatientNotProperlyFixatedQuantity?: any;
  // Presented Visual Stimuli Data Flag
  '00240037'?: Element;
  PresentedVisualStimuliDataFlag?: any;
  // Number of Visual Stimuli
  '00240038'?: Element;
  NumberOfVisualStimuli?: any;
  // Excessive Fixation Losses Data Flag
  '00240039'?: Element;
  ExcessiveFixationLossesDataFlag?: any;
  // Excessive Fixation Losses
  '00240040'?: Element;
  ExcessiveFixationLosses?: any;
  // Stimuli Retesting Quantity
  '00240042'?: Element;
  StimuliRetestingQuantity?: any;
  // Comments on Patient's Performance of Visual Field
  '00240044'?: Element;
  CommentsOnPatientPerformanceOfVisualField?: any;
  // False Negatives Estimate Flag
  '00240045'?: Element;
  FalseNegativesEstimateFlag?: any;
  // False Negatives Estimate
  '00240046'?: Element;
  FalseNegativesEstimate?: any;
  // Negative Catch Trials Quantity
  '00240048'?: Element;
  NegativeCatchTrialsQuantity?: any;
  // False Negatives Quantity
  '00240050'?: Element;
  FalseNegativesQuantity?: any;
  // Excessive False Negatives Data Flag
  '00240051'?: Element;
  ExcessiveFalseNegativesDataFlag?: any;
  // Excessive False Negatives
  '00240052'?: Element;
  ExcessiveFalseNegatives?: any;
  // False Positives Estimate Flag
  '00240053'?: Element;
  FalsePositivesEstimateFlag?: any;
  // False Positives Estimate
  '00240054'?: Element;
  FalsePositivesEstimate?: any;
  // Catch Trials Data Flag
  '00240055'?: Element;
  CatchTrialsDataFlag?: any;
  // Positive Catch Trials Quantity
  '00240056'?: Element;
  PositiveCatchTrialsQuantity?: any;
  // Test Point Normals Data Flag
  '00240057'?: Element;
  TestPointNormalsDataFlag?: any;
  // Test Point Normals Sequence
  '00240058'?: Element;
  TestPointNormalsSequence?: any;
  // Global Deviation Probability Normals Flag
  '00240059'?: Element;
  GlobalDeviationProbabilityNormalsFlag?: any;
  // False Positives Quantity
  '00240060'?: Element;
  FalsePositivesQuantity?: any;
  // Excessive False Positives Data Flag
  '00240061'?: Element;
  ExcessiveFalsePositivesDataFlag?: any;
  // Excessive False Positives
  '00240062'?: Element;
  ExcessiveFalsePositives?: any;
  // Visual Field Test Normals Flag
  '00240063'?: Element;
  VisualFieldTestNormalsFlag?: any;
  // Results Normals Sequence
  '00240064'?: Element;
  ResultsNormalsSequence?: any;
  // Age Corrected Sensitivity Deviation Algorithm Sequence
  '00240065'?: Element;
  AgeCorrectedSensitivityDeviationAlgorithmSequence?: any;
  // Global Deviation From Normal
  '00240066'?: Element;
  GlobalDeviationFromNormal?: any;
  // Generalized Defect Sensitivity Deviation Algorithm Sequence
  '00240067'?: Element;
  GeneralizedDefectSensitivityDeviationAlgorithmSequence?: any;
  // Localized Deviation From Normal
  '00240068'?: Element;
  LocalizedDeviationFromNormal?: any;
  // Patient Reliability Indicator
  '00240069'?: Element;
  PatientReliabilityIndicator?: any;
  // Visual Field Mean Sensitivity
  '00240070'?: Element;
  VisualFieldMeanSensitivity?: any;
  // Global Deviation Probability
  '00240071'?: Element;
  GlobalDeviationProbability?: any;
  // Local Deviation Probability Normals Flag
  '00240072'?: Element;
  LocalDeviationProbabilityNormalsFlag?: any;
  // Localized Deviation Probability
  '00240073'?: Element;
  LocalizedDeviationProbability?: any;
  // Short Term Fluctuation Calculated
  '00240074'?: Element;
  ShortTermFluctuationCalculated?: any;
  // Short Term Fluctuation
  '00240075'?: Element;
  ShortTermFluctuation?: any;
  // Short Term Fluctuation Probability Calculated
  '00240076'?: Element;
  ShortTermFluctuationProbabilityCalculated?: any;
  // Short Term Fluctuation Probability
  '00240077'?: Element;
  ShortTermFluctuationProbability?: any;
  // Corrected Localized Deviation From Normal Calculated
  '00240078'?: Element;
  CorrectedLocalizedDeviationFromNormalCalculated?: any;
  // Corrected Localized Deviation From Normal
  '00240079'?: Element;
  CorrectedLocalizedDeviationFromNormal?: any;
  // Corrected Localized Deviation From Normal Probability Calculated
  '00240080'?: Element;
  CorrectedLocalizedDeviationFromNormalProbabilityCalculated?: any;
  // Corrected Localized Deviation From Normal Probability
  '00240081'?: Element;
  CorrectedLocalizedDeviationFromNormalProbability?: any;
  // Global Deviation Probability Sequence
  '00240083'?: Element;
  GlobalDeviationProbabilitySequence?: any;
  // Localized Deviation Probability Sequence
  '00240085'?: Element;
  LocalizedDeviationProbabilitySequence?: any;
  // Foveal Sensitivity Measured
  '00240086'?: Element;
  FovealSensitivityMeasured?: any;
  // Foveal Sensitivity
  '00240087'?: Element;
  FovealSensitivity?: any;
  // Visual Field Test Duration
  '00240088'?: Element;
  VisualFieldTestDuration?: any;
  // Visual Field Test Point Sequence
  '00240089'?: Element;
  VisualFieldTestPointSequence?: any;
  // Visual Field Test Point X-Coordinate
  '00240090'?: Element;
  VisualFieldTestPointXCoordinate?: any;
  // Visual Field Test Point Y-Coordinate
  '00240091'?: Element;
  VisualFieldTestPointYCoordinate?: any;
  // Age Corrected Sensitivity Deviation Value
  '00240092'?: Element;
  AgeCorrectedSensitivityDeviationValue?: any;
  // Stimulus Results
  '00240093'?: Element;
  StimulusResults?: any;
  // Sensitivity Value
  '00240094'?: Element;
  SensitivityValue?: any;
  // Retest Stimulus Seen
  '00240095'?: Element;
  RetestStimulusSeen?: any;
  // Retest Sensitivity Value
  '00240096'?: Element;
  RetestSensitivityValue?: any;
  // Visual Field Test Point Normals Sequence
  '00240097'?: Element;
  VisualFieldTestPointNormalsSequence?: any;
  // Quantified Defect
  '00240098'?: Element;
  QuantifiedDefect?: any;
  // Age Corrected Sensitivity Deviation Probability Value
  '00240100'?: Element;
  AgeCorrectedSensitivityDeviationProbabilityValue?: any;
  // Generalized Defect Corrected Sensitivity Deviation Flag
  '00240102'?: Element;
  GeneralizedDefectCorrectedSensitivityDeviationFlag?: any;
  // Generalized Defect Corrected Sensitivity Deviation Value
  '00240103'?: Element;
  GeneralizedDefectCorrectedSensitivityDeviationValue?: any;
  // Generalized Defect Corrected Sensitivity Deviation Probability Value
  '00240104'?: Element;
  GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue?: any;
  // Minimum Sensitivity Value
  '00240105'?: Element;
  MinimumSensitivityValue?: any;
  // Blind Spot Localized
  '00240106'?: Element;
  BlindSpotLocalized?: any;
  // Blind Spot X-Coordinate
  '00240107'?: Element;
  BlindSpotXCoordinate?: any;
  // Blind Spot Y-Coordinate
  '00240108'?: Element;
  BlindSpotYCoordinate?: any;
  // Visual Acuity Measurement Sequence
  '00240110'?: Element;
  VisualAcuityMeasurementSequence?: any;
  // Refractive Parameters Used on Patient Sequence
  '00240112'?: Element;
  RefractiveParametersUsedOnPatientSequence?: any;
  // Measurement Laterality
  '00240113'?: Element;
  MeasurementLaterality?: any;
  // Ophthalmic Patient Clinical Information Left Eye Sequence
  '00240114'?: Element;
  OphthalmicPatientClinicalInformationLeftEyeSequence?: any;
  // Ophthalmic Patient Clinical Information Right Eye Sequence
  '00240115'?: Element;
  OphthalmicPatientClinicalInformationRightEyeSequence?: any;
  // Foveal Point Normative Data Flag
  '00240117'?: Element;
  FovealPointNormativeDataFlag?: any;
  // Foveal Point Probability Value
  '00240118'?: Element;
  FovealPointProbabilityValue?: any;
  // Screening Baseline Measured
  '00240120'?: Element;
  ScreeningBaselineMeasured?: any;
  // Screening Baseline Measured Sequence
  '00240122'?: Element;
  ScreeningBaselineMeasuredSequence?: any;
  // Screening Baseline Type
  '00240124'?: Element;
  ScreeningBaselineType?: any;
  // Screening Baseline Value
  '00240126'?: Element;
  ScreeningBaselineValue?: any;
  // Algorithm Source
  '00240202'?: Element;
  AlgorithmSource?: any;
  // Data Set Name
  '00240306'?: Element;
  DataSetName?: any;
  // Data Set Version
  '00240307'?: Element;
  DataSetVersion?: any;
  // Data Set Source
  '00240308'?: Element;
  DataSetSource?: any;
  // Data Set Description
  '00240309'?: Element;
  DataSetDescription?: any;
  // Visual Field Test Reliability Global Index Sequence
  '00240317'?: Element;
  VisualFieldTestReliabilityGlobalIndexSequence?: any;
  // Visual Field Global Results Index Sequence
  '00240320'?: Element;
  VisualFieldGlobalResultsIndexSequence?: any;
  // Data Observation Sequence
  '00240325'?: Element;
  DataObservationSequence?: any;
  // Index Normals Flag
  '00240338'?: Element;
  IndexNormalsFlag?: any;
  // Index Probability
  '00240341'?: Element;
  IndexProbability?: any;
  // Index Probability Sequence
  '00240344'?: Element;
  IndexProbabilitySequence?: any;
  // Samples per Pixel
  '00280002'?: Element;
  SamplesPerPixel?: any;
  // Samples per Pixel Used
  '00280003'?: Element;
  SamplesPerPixelUsed?: any;
  // Photometric Interpretation
  '00280004'?: Element;
  PhotometricInterpretation?: any;
  // Image Dimensions
  '00280005'?: Element;
  ImageDimensions?: any;
  // Planar Configuration
  '00280006'?: Element;
  PlanarConfiguration?: any;
  // Number of Frames
  '00280008'?: Element;
  NumberOfFrames?: any;
  // Frame Increment Pointer
  '00280009'?: Element;
  FrameIncrementPointer?: any;
  // Frame Dimension Pointer
  '0028000A'?: Element;
  FrameDimensionPointer?: any;
  // Rows
  '00280010'?: Element;
  Rows?: any;
  // Columns
  '00280011'?: Element;
  Columns?: any;
  // Planes
  '00280012'?: Element;
  Planes?: any;
  // Ultrasound Color Data Present
  '00280014'?: Element;
  UltrasoundColorDataPresent?: any;
  // Pixel Spacing
  '00280030'?: Element;
  PixelSpacing?: any;
  // Zoom Factor
  '00280031'?: Element;
  ZoomFactor?: any;
  // Zoom Center
  '00280032'?: Element;
  ZoomCenter?: any;
  // Pixel Aspect Ratio
  '00280034'?: Element;
  PixelAspectRatio?: any;
  // Image Format
  '00280040'?: Element;
  ImageFormat?: any;
  // Manipulated Image
  '00280050'?: Element;
  ManipulatedImage?: any;
  // Corrected Image
  '00280051'?: Element;
  CorrectedImage?: any;
  // Compression Recognition Code
  '0028005F'?: Element;
  CompressionRecognitionCode?: any;
  // Compression Code
  '00280060'?: Element;
  CompressionCode?: any;
  // Compression Originator
  '00280061'?: Element;
  CompressionOriginator?: any;
  // Compression Label
  '00280062'?: Element;
  CompressionLabel?: any;
  // Compression Description
  '00280063'?: Element;
  CompressionDescription?: any;
  // Compression Sequence
  '00280065'?: Element;
  CompressionSequence?: any;
  // Compression Step Pointers
  '00280066'?: Element;
  CompressionStepPointers?: any;
  // Repeat Interval
  '00280068'?: Element;
  RepeatInterval?: any;
  // Bits Grouped
  '00280069'?: Element;
  BitsGrouped?: any;
  // Perimeter Table
  '00280070'?: Element;
  PerimeterTable?: any;
  // Perimeter Value
  '00280071'?: Element;
  PerimeterValue?: any;
  // Predictor Rows
  '00280080'?: Element;
  PredictorRows?: any;
  // Predictor Columns
  '00280081'?: Element;
  PredictorColumns?: any;
  // Predictor Constants
  '00280082'?: Element;
  PredictorConstants?: any;
  // Blocked Pixels
  '00280090'?: Element;
  BlockedPixels?: any;
  // Block Rows
  '00280091'?: Element;
  BlockRows?: any;
  // Block Columns
  '00280092'?: Element;
  BlockColumns?: any;
  // Row Overlap
  '00280093'?: Element;
  RowOverlap?: any;
  // Column Overlap
  '00280094'?: Element;
  ColumnOverlap?: any;
  // Bits Allocated
  '00280100'?: Element;
  BitsAllocated?: any;
  // Bits Stored
  '00280101'?: Element;
  BitsStored?: any;
  // High Bit
  '00280102'?: Element;
  HighBit?: any;
  // Pixel Representation
  '00280103'?: Element;
  PixelRepresentation?: any;
  // Smallest Valid Pixel Value
  '00280104'?: Element;
  SmallestValidPixelValue?: any;
  // Largest Valid Pixel Value
  '00280105'?: Element;
  LargestValidPixelValue?: any;
  // Smallest Image Pixel Value
  '00280106'?: Element;
  SmallestImagePixelValue?: any;
  // Largest Image Pixel Value
  '00280107'?: Element;
  LargestImagePixelValue?: any;
  // Smallest Pixel Value in Series
  '00280108'?: Element;
  SmallestPixelValueInSeries?: any;
  // Largest Pixel Value in Series
  '00280109'?: Element;
  LargestPixelValueInSeries?: any;
  // Smallest Image Pixel Value in Plane
  '00280110'?: Element;
  SmallestImagePixelValueInPlane?: any;
  // Largest Image Pixel Value in Plane
  '00280111'?: Element;
  LargestImagePixelValueInPlane?: any;
  // Pixel Padding Value
  '00280120'?: Element;
  PixelPaddingValue?: any;
  // Pixel Padding Range Limit
  '00280121'?: Element;
  PixelPaddingRangeLimit?: any;
  // Image Location
  '00280200'?: Element;
  ImageLocation?: any;
  // Quality Control Image
  '00280300'?: Element;
  QualityControlImage?: any;
  // Burned In Annotation
  '00280301'?: Element;
  BurnedInAnnotation?: any;
  // Recognizable Visual Features
  '00280302'?: Element;
  RecognizableVisualFeatures?: any;
  // Longitudinal Temporal Information Modified
  '00280303'?: Element;
  LongitudinalTemporalInformationModified?: any;
  // Referenced Color Palette Instance UID
  '00280304'?: Element;
  ReferencedColorPaletteInstanceUID?: any;
  // Transform Label
  '00280400'?: Element;
  TransformLabel?: any;
  // Transform Version Number
  '00280401'?: Element;
  TransformVersionNumber?: any;
  // Number of Transform Steps
  '00280402'?: Element;
  NumberOfTransformSteps?: any;
  // Sequence of Compressed Data
  '00280403'?: Element;
  SequenceOfCompressedData?: any;
  // Details of Coefficients
  '00280404'?: Element;
  DetailsOfCoefficients?: any;
  // Rows For Nth Order Coefficients
  '002804x0'?: Element;
  RowsForNthOrderCoefficients?: any;
  // Columns For Nth Order Coefficients
  '002804x1'?: Element;
  ColumnsForNthOrderCoefficients?: any;
  // Coefficient Coding
  '002804x2'?: Element;
  CoefficientCoding?: any;
  // Coefficient Coding Pointers
  '002804x3'?: Element;
  CoefficientCodingPointers?: any;
  // DCT Label
  '00280700'?: Element;
  DCTLabel?: any;
  // Data Block Description
  '00280701'?: Element;
  DataBlockDescription?: any;
  // Data Block
  '00280702'?: Element;
  DataBlock?: any;
  // Normalization Factor Format
  '00280710'?: Element;
  NormalizationFactorFormat?: any;
  // Zonal Map Number Format
  '00280720'?: Element;
  ZonalMapNumberFormat?: any;
  // Zonal Map Location
  '00280721'?: Element;
  ZonalMapLocation?: any;
  // Zonal Map Format
  '00280722'?: Element;
  ZonalMapFormat?: any;
  // Adaptive Map Format
  '00280730'?: Element;
  AdaptiveMapFormat?: any;
  // Code Number Format
  '00280740'?: Element;
  CodeNumberFormat?: any;
  // Code Label
  '002808x0'?: Element;
  CodeLabel?: any;
  // Number of Tables
  '002808x2'?: Element;
  NumberOfTables?: any;
  // Code Table Location
  '002808x3'?: Element;
  CodeTableLocation?: any;
  // Bits For Code Word
  '002808x4'?: Element;
  BitsForCodeWord?: any;
  // Image Data Location
  '002808x8'?: Element;
  ImageDataLocation?: any;
  // Pixel Spacing Calibration Type
  '00280A02'?: Element;
  PixelSpacingCalibrationType?: any;
  // Pixel Spacing Calibration Description
  '00280A04'?: Element;
  PixelSpacingCalibrationDescription?: any;
  // Pixel Intensity Relationship
  '00281040'?: Element;
  PixelIntensityRelationship?: any;
  // Pixel Intensity Relationship Sign
  '00281041'?: Element;
  PixelIntensityRelationshipSign?: any;
  // Window Center
  '00281050'?: Element;
  WindowCenter?: any;
  // Window Width
  '00281051'?: Element;
  WindowWidth?: any;
  // Rescale Intercept
  '00281052'?: Element;
  RescaleIntercept?: any;
  // Rescale Slope
  '00281053'?: Element;
  RescaleSlope?: any;
  // Rescale Type
  '00281054'?: Element;
  RescaleType?: any;
  // Window Center & Width Explanation
  '00281055'?: Element;
  WindowCenterWidthExplanation?: any;
  // VOI LUT Function
  '00281056'?: Element;
  VOILUTFunction?: any;
  // Gray Scale
  '00281080'?: Element;
  GrayScale?: any;
  // Recommended Viewing Mode
  '00281090'?: Element;
  RecommendedViewingMode?: any;
  // Gray Lookup Table Descriptor
  '00281100'?: Element;
  GrayLookupTableDescriptor?: any;
  // Red Palette Color Lookup Table Descriptor
  '00281101'?: Element;
  RedPaletteColorLookupTableDescriptor?: any;
  // Green Palette Color Lookup Table Descriptor
  '00281102'?: Element;
  GreenPaletteColorLookupTableDescriptor?: any;
  // Blue Palette Color Lookup Table Descriptor
  '00281103'?: Element;
  BluePaletteColorLookupTableDescriptor?: any;
  // Alpha Palette Color Lookup Table Descriptor
  '00281104'?: Element;
  AlphaPaletteColorLookupTableDescriptor?: any;
  // Large Red Palette Color Lookup Table Descriptor
  '00281111'?: Element;
  LargeRedPaletteColorLookupTableDescriptor?: any;
  // Large Green Palette Color Lookup Table Descriptor
  '00281112'?: Element;
  LargeGreenPaletteColorLookupTableDescriptor?: any;
  // Large Blue Palette Color Lookup Table Descriptor
  '00281113'?: Element;
  LargeBluePaletteColorLookupTableDescriptor?: any;
  // Palette Color Lookup Table UID
  '00281199'?: Element;
  PaletteColorLookupTableUID?: any;
  // Gray Lookup Table Data
  '00281200'?: Element;
  GrayLookupTableData?: any;
  // Red Palette Color Lookup Table Data
  '00281201'?: Element;
  RedPaletteColorLookupTableData?: any;
  // Green Palette Color Lookup Table Data
  '00281202'?: Element;
  GreenPaletteColorLookupTableData?: any;
  // Blue Palette Color Lookup Table Data
  '00281203'?: Element;
  BluePaletteColorLookupTableData?: any;
  // Alpha Palette Color Lookup Table Data
  '00281204'?: Element;
  AlphaPaletteColorLookupTableData?: any;
  // Large Red Palette Color Lookup Table Data
  '00281211'?: Element;
  LargeRedPaletteColorLookupTableData?: any;
  // Large Green Palette Color Lookup Table Data
  '00281212'?: Element;
  LargeGreenPaletteColorLookupTableData?: any;
  // Large Blue Palette Color Lookup Table Data
  '00281213'?: Element;
  LargeBluePaletteColorLookupTableData?: any;
  // Large Palette Color Lookup Table UID
  '00281214'?: Element;
  LargePaletteColorLookupTableUID?: any;
  // Segmented Red Palette Color Lookup Table Data
  '00281221'?: Element;
  SegmentedRedPaletteColorLookupTableData?: any;
  // Segmented Green Palette Color Lookup Table Data
  '00281222'?: Element;
  SegmentedGreenPaletteColorLookupTableData?: any;
  // Segmented Blue Palette Color Lookup Table Data
  '00281223'?: Element;
  SegmentedBluePaletteColorLookupTableData?: any;
  // Breast Implant Present
  '00281300'?: Element;
  BreastImplantPresent?: any;
  // Partial View
  '00281350'?: Element;
  PartialView?: any;
  // Partial View Description
  '00281351'?: Element;
  PartialViewDescription?: any;
  // Partial View Code Sequence
  '00281352'?: Element;
  PartialViewCodeSequence?: any;
  // Spatial Locations Preserved
  '0028135A'?: Element;
  SpatialLocationsPreserved?: any;
  // Data Frame Assignment Sequence
  '00281401'?: Element;
  DataFrameAssignmentSequence?: any;
  // Data Path Assignment
  '00281402'?: Element;
  DataPathAssignment?: any;
  // Bits Mapped to Color Lookup Table
  '00281403'?: Element;
  BitsMappedToColorLookupTable?: any;
  // Blending LUT 1 Sequence
  '00281404'?: Element;
  BlendingLUT1Sequence?: any;
  // Blending LUT 1 Transfer Function
  '00281405'?: Element;
  BlendingLUT1TransferFunction?: any;
  // Blending Weight Constant
  '00281406'?: Element;
  BlendingWeightConstant?: any;
  // Blending Lookup Table Descriptor
  '00281407'?: Element;
  BlendingLookupTableDescriptor?: any;
  // Blending Lookup Table Data
  '00281408'?: Element;
  BlendingLookupTableData?: any;
  // Enhanced Palette Color Lookup Table Sequence
  '0028140B'?: Element;
  EnhancedPaletteColorLookupTableSequence?: any;
  // Blending LUT 2 Sequence
  '0028140C'?: Element;
  BlendingLUT2Sequence?: any;
  // Blending LUT 2 Transfer Function
  '0028140D'?: Element;
  BlendingLUT2TransferFunction?: any;
  // Data Path ID
  '0028140E'?: Element;
  DataPathID?: any;
  // RGB LUT Transfer Function
  '0028140F'?: Element;
  RGBLUTTransferFunction?: any;
  // Alpha LUT Transfer Function
  '00281410'?: Element;
  AlphaLUTTransferFunction?: any;
  // ICC Profile
  '00282000'?: Element;
  ICCProfile?: any;
  // Lossy Image Compression
  '00282110'?: Element;
  LossyImageCompression?: any;
  // Lossy Image Compression Ratio
  '00282112'?: Element;
  LossyImageCompressionRatio?: any;
  // Lossy Image Compression Method
  '00282114'?: Element;
  LossyImageCompressionMethod?: any;
  // Modality LUT Sequence
  '00283000'?: Element;
  ModalityLUTSequence?: any;
  // LUT Descriptor
  '00283002'?: Element;
  LUTDescriptor?: any;
  // LUT Explanation
  '00283003'?: Element;
  LUTExplanation?: any;
  // Modality LUT Type
  '00283004'?: Element;
  ModalityLUTType?: any;
  // LUT Data
  '00283006'?: Element;
  LUTData?: any;
  // VOI LUT Sequence
  '00283010'?: Element;
  VOILUTSequence?: any;
  // Softcopy VOI LUT Sequence
  '00283110'?: Element;
  SoftcopyVOILUTSequence?: any;
  // Image Presentation Comments
  '00284000'?: Element;
  ImagePresentationComments?: any;
  // Bi-Plane Acquisition Sequence
  '00285000'?: Element;
  BiPlaneAcquisitionSequence?: any;
  // Representative Frame Number
  '00286010'?: Element;
  RepresentativeFrameNumber?: any;
  // Frame Numbers of Interest (FOI)
  '00286020'?: Element;
  FrameNumbersOfInterest?: any;
  // Frame of Interest Description
  '00286022'?: Element;
  FrameOfInterestDescription?: any;
  // Frame of Interest Type
  '00286023'?: Element;
  FrameOfInterestType?: any;
  // Mask Pointer(s)
  '00286030'?: Element;
  MaskPointers?: any;
  // R Wave Pointer
  '00286040'?: Element;
  RWavePointer?: any;
  // Mask Subtraction Sequence
  '00286100'?: Element;
  MaskSubtractionSequence?: any;
  // Mask Operation
  '00286101'?: Element;
  MaskOperation?: any;
  // Applicable Frame Range
  '00286102'?: Element;
  ApplicableFrameRange?: any;
  // Mask Frame Numbers
  '00286110'?: Element;
  MaskFrameNumbers?: any;
  // Contrast Frame Averaging
  '00286112'?: Element;
  ContrastFrameAveraging?: any;
  // Mask Sub-pixel Shift
  '00286114'?: Element;
  MaskSubPixelShift?: any;
  // TID Offset
  '00286120'?: Element;
  TIDOffset?: any;
  // Mask Operation Explanation
  '00286190'?: Element;
  MaskOperationExplanation?: any;
  // Equipment Administrator Sequence
  '00287000'?: Element;
  EquipmentAdministratorSequence?: any;
  // Number of Display Subsystems
  '00287001'?: Element;
  NumberOfDisplaySubsystems?: any;
  // Current Configuration ID
  '00287002'?: Element;
  CurrentConfigurationID?: any;
  // Display Subsystem ID
  '00287003'?: Element;
  DisplaySubsystemID?: any;
  // Display Subsystem Name
  '00287004'?: Element;
  DisplaySubsystemName?: any;
  // Display Subsystem Description
  '00287005'?: Element;
  DisplaySubsystemDescription?: any;
  // System Status
  '00287006'?: Element;
  SystemStatus?: any;
  // System Status Comment
  '00287007'?: Element;
  SystemStatusComment?: any;
  // Target Luminance Characteristics Sequence
  '00287008'?: Element;
  TargetLuminanceCharacteristicsSequence?: any;
  // Luminance Characteristics ID
  '00287009'?: Element;
  LuminanceCharacteristicsID?: any;
  // Display Subsystem Configuration Sequence
  '0028700A'?: Element;
  DisplaySubsystemConfigurationSequence?: any;
  // Configuration ID
  '0028700B'?: Element;
  ConfigurationID?: any;
  // Configuration Name
  '0028700C'?: Element;
  ConfigurationName?: any;
  // Configuration Description
  '0028700D'?: Element;
  ConfigurationDescription?: any;
  // Referenced Target Luminance Characteristics ID
  '0028700E'?: Element;
  ReferencedTargetLuminanceCharacteristicsID?: any;
  // QA Results Sequence
  '0028700F'?: Element;
  QAResultsSequence?: any;
  // Display Subsystem QA Results Sequence
  '00287010'?: Element;
  DisplaySubsystemQAResultsSequence?: any;
  // Configuration QA Results Sequence
  '00287011'?: Element;
  ConfigurationQAResultsSequence?: any;
  // Measurement Equipment Sequence
  '00287012'?: Element;
  MeasurementEquipmentSequence?: any;
  // Measurement Functions
  '00287013'?: Element;
  MeasurementFunctions?: any;
  // Measurement Equipment Type
  '00287014'?: Element;
  MeasurementEquipmentType?: any;
  // Visual Evaluation Result Sequence
  '00287015'?: Element;
  VisualEvaluationResultSequence?: any;
  // Display Calibration Result Sequence
  '00287016'?: Element;
  DisplayCalibrationResultSequence?: any;
  // DDL Value
  '00287017'?: Element;
  DDLValue?: any;
  // CIExy White Point
  '00287018'?: Element;
  CIExyWhitePoint?: any;
  // Display Function Type
  '00287019'?: Element;
  DisplayFunctionType?: any;
  // Gamma Value
  '0028701A'?: Element;
  GammaValue?: any;
  // Number of Luminance Points
  '0028701B'?: Element;
  NumberOfLuminancePoints?: any;
  // Luminance Response Sequence
  '0028701C'?: Element;
  LuminanceResponseSequence?: any;
  // Target Minimum Luminance
  '0028701D'?: Element;
  TargetMinimumLuminance?: any;
  // Target Maximum Luminance
  '0028701E'?: Element;
  TargetMaximumLuminance?: any;
  // Luminance Value
  '0028701F'?: Element;
  LuminanceValue?: any;
  // Luminance Response Description
  '00287020'?: Element;
  LuminanceResponseDescription?: any;
  // White Point Flag
  '00287021'?: Element;
  WhitePointFlag?: any;
  // Display Device Type Code Sequence
  '00287022'?: Element;
  DisplayDeviceTypeCodeSequence?: any;
  // Display Subsystem Sequence
  '00287023'?: Element;
  DisplaySubsystemSequence?: any;
  // Luminance Result Sequence
  '00287024'?: Element;
  LuminanceResultSequence?: any;
  // Ambient Light Value Source
  '00287025'?: Element;
  AmbientLightValueSource?: any;
  // Measured Characteristics
  '00287026'?: Element;
  MeasuredCharacteristics?: any;
  // Luminance Uniformity Result Sequence
  '00287027'?: Element;
  LuminanceUniformityResultSequence?: any;
  // Visual Evaluation Test Sequence
  '00287028'?: Element;
  VisualEvaluationTestSequence?: any;
  // Test Result
  '00287029'?: Element;
  TestResult?: any;
  // Test Result Comment
  '0028702A'?: Element;
  TestResultComment?: any;
  // Test Image Validation
  '0028702B'?: Element;
  TestImageValidation?: any;
  // Test Pattern Code Sequence
  '0028702C'?: Element;
  TestPatternCodeSequence?: any;
  // Measurement Pattern Code Sequence
  '0028702D'?: Element;
  MeasurementPatternCodeSequence?: any;
  // Visual Evaluation Method Code Sequence
  '0028702E'?: Element;
  VisualEvaluationMethodCodeSequence?: any;
  // Pixel Data Provider URL
  '00287FE0'?: Element;
  PixelDataProviderURL?: any;
  // Data Point Rows
  '00289001'?: Element;
  DataPointRows?: any;
  // Data Point Columns
  '00289002'?: Element;
  DataPointColumns?: any;
  // Signal Domain Columns
  '00289003'?: Element;
  SignalDomainColumns?: any;
  // Largest Monochrome Pixel Value
  '00289099'?: Element;
  LargestMonochromePixelValue?: any;
  // Data Representation
  '00289108'?: Element;
  DataRepresentation?: any;
  // Pixel Measures Sequence
  '00289110'?: Element;
  PixelMeasuresSequence?: any;
  // Frame VOI LUT Sequence
  '00289132'?: Element;
  FrameVOILUTSequence?: any;
  // Pixel Value Transformation Sequence
  '00289145'?: Element;
  PixelValueTransformationSequence?: any;
  // Signal Domain Rows
  '00289235'?: Element;
  SignalDomainRows?: any;
  // Display Filter Percentage
  '00289411'?: Element;
  DisplayFilterPercentage?: any;
  // Frame Pixel Shift Sequence
  '00289415'?: Element;
  FramePixelShiftSequence?: any;
  // Subtraction Item ID
  '00289416'?: Element;
  SubtractionItemID?: any;
  // Pixel Intensity Relationship LUT Sequence
  '00289422'?: Element;
  PixelIntensityRelationshipLUTSequence?: any;
  // Frame Pixel Data Properties Sequence
  '00289443'?: Element;
  FramePixelDataPropertiesSequence?: any;
  // Geometrical Properties
  '00289444'?: Element;
  GeometricalProperties?: any;
  // Geometric Maximum Distortion
  '00289445'?: Element;
  GeometricMaximumDistortion?: any;
  // Image Processing Applied
  '00289446'?: Element;
  ImageProcessingApplied?: any;
  // Mask Selection Mode
  '00289454'?: Element;
  MaskSelectionMode?: any;
  // LUT Function
  '00289474'?: Element;
  LUTFunction?: any;
  // Mask Visibility Percentage
  '00289478'?: Element;
  MaskVisibilityPercentage?: any;
  // Pixel Shift Sequence
  '00289501'?: Element;
  PixelShiftSequence?: any;
  // Region Pixel Shift Sequence
  '00289502'?: Element;
  RegionPixelShiftSequence?: any;
  // Vertices of the Region
  '00289503'?: Element;
  VerticesOfTheRegion?: any;
  // Multi-frame Presentation Sequence
  '00289505'?: Element;
  MultiFramePresentationSequence?: any;
  // Pixel Shift Frame Range
  '00289506'?: Element;
  PixelShiftFrameRange?: any;
  // LUT Frame Range
  '00289507'?: Element;
  LUTFrameRange?: any;
  // Image to Equipment Mapping Matrix
  '00289520'?: Element;
  ImageToEquipmentMappingMatrix?: any;
  // Equipment Coordinate System Identification
  '00289537'?: Element;
  EquipmentCoordinateSystemIdentification?: any;
  // Study Status ID
  '0032000A'?: Element;
  StudyStatusID?: any;
  // Study Priority ID
  '0032000C'?: Element;
  StudyPriorityID?: any;
  // Study ID Issuer
  '00320012'?: Element;
  StudyIDIssuer?: any;
  // Study Verified Date
  '00320032'?: Element;
  StudyVerifiedDate?: any;
  // Study Verified Time
  '00320033'?: Element;
  StudyVerifiedTime?: any;
  // Study Read Date
  '00320034'?: Element;
  StudyReadDate?: any;
  // Study Read Time
  '00320035'?: Element;
  StudyReadTime?: any;
  // Scheduled Study Start Date
  '00321000'?: Element;
  ScheduledStudyStartDate?: any;
  // Scheduled Study Start Time
  '00321001'?: Element;
  ScheduledStudyStartTime?: any;
  // Scheduled Study Stop Date
  '00321010'?: Element;
  ScheduledStudyStopDate?: any;
  // Scheduled Study Stop Time
  '00321011'?: Element;
  ScheduledStudyStopTime?: any;
  // Scheduled Study Location
  '00321020'?: Element;
  ScheduledStudyLocation?: any;
  // Scheduled Study Location AE Title
  '00321021'?: Element;
  ScheduledStudyLocationAETitle?: any;
  // Reason for Study
  '00321030'?: Element;
  ReasonForStudy?: any;
  // Requesting Physician Identification Sequence
  '00321031'?: Element;
  RequestingPhysicianIdentificationSequence?: any;
  // Requesting Physician
  '00321032'?: Element;
  RequestingPhysician?: any;
  // Requesting Service
  '00321033'?: Element;
  RequestingService?: any;
  // Requesting Service Code Sequence
  '00321034'?: Element;
  RequestingServiceCodeSequence?: any;
  // Study Arrival Date
  '00321040'?: Element;
  StudyArrivalDate?: any;
  // Study Arrival Time
  '00321041'?: Element;
  StudyArrivalTime?: any;
  // Study Completion Date
  '00321050'?: Element;
  StudyCompletionDate?: any;
  // Study Completion Time
  '00321051'?: Element;
  StudyCompletionTime?: any;
  // Study Component Status ID
  '00321055'?: Element;
  StudyComponentStatusID?: any;
  // Requested Procedure Description
  '00321060'?: Element;
  RequestedProcedureDescription?: any;
  // Requested Procedure Code Sequence
  '00321064'?: Element;
  RequestedProcedureCodeSequence?: any;
  // Requested Contrast Agent
  '00321070'?: Element;
  RequestedContrastAgent?: any;
  // Study Comments
  '00324000'?: Element;
  StudyComments?: any;
  // Referenced Patient Alias Sequence
  '00380004'?: Element;
  ReferencedPatientAliasSequence?: any;
  // Visit Status ID
  '00380008'?: Element;
  VisitStatusID?: any;
  // Admission ID
  '00380010'?: Element;
  AdmissionID?: any;
  // Issuer of Admission ID
  '00380011'?: Element;
  IssuerOfAdmissionID?: any;
  // Issuer of Admission ID Sequence
  '00380014'?: Element;
  IssuerOfAdmissionIDSequence?: any;
  // Route of Admissions
  '00380016'?: Element;
  RouteOfAdmissions?: any;
  // Scheduled Admission Date
  '0038001A'?: Element;
  ScheduledAdmissionDate?: any;
  // Scheduled Admission Time
  '0038001B'?: Element;
  ScheduledAdmissionTime?: any;
  // Scheduled Discharge Date
  '0038001C'?: Element;
  ScheduledDischargeDate?: any;
  // Scheduled Discharge Time
  '0038001D'?: Element;
  ScheduledDischargeTime?: any;
  // Scheduled Patient Institution Residence
  '0038001E'?: Element;
  ScheduledPatientInstitutionResidence?: any;
  // Admitting Date
  '00380020'?: Element;
  AdmittingDate?: any;
  // Admitting Time
  '00380021'?: Element;
  AdmittingTime?: any;
  // Discharge Date
  '00380030'?: Element;
  DischargeDate?: any;
  // Discharge Time
  '00380032'?: Element;
  DischargeTime?: any;
  // Discharge Diagnosis Description
  '00380040'?: Element;
  DischargeDiagnosisDescription?: any;
  // Discharge Diagnosis Code Sequence
  '00380044'?: Element;
  DischargeDiagnosisCodeSequence?: any;
  // Special Needs
  '00380050'?: Element;
  SpecialNeeds?: any;
  // Service Episode ID
  '00380060'?: Element;
  ServiceEpisodeID?: any;
  // Issuer of Service Episode ID
  '00380061'?: Element;
  IssuerOfServiceEpisodeID?: any;
  // Service Episode Description
  '00380062'?: Element;
  ServiceEpisodeDescription?: any;
  // Issuer of Service Episode ID Sequence
  '00380064'?: Element;
  IssuerOfServiceEpisodeIDSequence?: any;
  // Pertinent Documents Sequence
  '00380100'?: Element;
  PertinentDocumentsSequence?: any;
  // Current Patient Location
  '00380300'?: Element;
  CurrentPatientLocation?: any;
  // Patient's Institution Residence
  '00380400'?: Element;
  PatientInstitutionResidence?: any;
  // Patient State
  '00380500'?: Element;
  PatientState?: any;
  // Patient Clinical Trial Participation Sequence
  '00380502'?: Element;
  PatientClinicalTrialParticipationSequence?: any;
  // Visit Comments
  '00384000'?: Element;
  VisitComments?: any;
  // Waveform Originality
  '003A0004'?: Element;
  WaveformOriginality?: any;
  // Number of Waveform Channels
  '003A0005'?: Element;
  NumberOfWaveformChannels?: any;
  // Number of Waveform Samples
  '003A0010'?: Element;
  NumberOfWaveformSamples?: any;
  // Sampling Frequency
  '003A001A'?: Element;
  SamplingFrequency?: any;
  // Multiplex Group Label
  '003A0020'?: Element;
  MultiplexGroupLabel?: any;
  // Channel Definition Sequence
  '003A0200'?: Element;
  ChannelDefinitionSequence?: any;
  // Waveform Channel Number
  '003A0202'?: Element;
  WaveformChannelNumber?: any;
  // Channel Label
  '003A0203'?: Element;
  ChannelLabel?: any;
  // Channel Status
  '003A0205'?: Element;
  ChannelStatus?: any;
  // Channel Source Sequence
  '003A0208'?: Element;
  ChannelSourceSequence?: any;
  // Channel Source Modifiers Sequence
  '003A0209'?: Element;
  ChannelSourceModifiersSequence?: any;
  // Source Waveform Sequence
  '003A020A'?: Element;
  SourceWaveformSequence?: any;
  // Channel Derivation Description
  '003A020C'?: Element;
  ChannelDerivationDescription?: any;
  // Channel Sensitivity
  '003A0210'?: Element;
  ChannelSensitivity?: any;
  // Channel Sensitivity Units Sequence
  '003A0211'?: Element;
  ChannelSensitivityUnitsSequence?: any;
  // Channel Sensitivity Correction Factor
  '003A0212'?: Element;
  ChannelSensitivityCorrectionFactor?: any;
  // Channel Baseline
  '003A0213'?: Element;
  ChannelBaseline?: any;
  // Channel Time Skew
  '003A0214'?: Element;
  ChannelTimeSkew?: any;
  // Channel Sample Skew
  '003A0215'?: Element;
  ChannelSampleSkew?: any;
  // Channel Offset
  '003A0218'?: Element;
  ChannelOffset?: any;
  // Waveform Bits Stored
  '003A021A'?: Element;
  WaveformBitsStored?: any;
  // Filter Low Frequency
  '003A0220'?: Element;
  FilterLowFrequency?: any;
  // Filter High Frequency
  '003A0221'?: Element;
  FilterHighFrequency?: any;
  // Notch Filter Frequency
  '003A0222'?: Element;
  NotchFilterFrequency?: any;
  // Notch Filter Bandwidth
  '003A0223'?: Element;
  NotchFilterBandwidth?: any;
  // Waveform Data Display Scale
  '003A0230'?: Element;
  WaveformDataDisplayScale?: any;
  // Waveform Display Background CIELab Value
  '003A0231'?: Element;
  WaveformDisplayBackgroundCIELabValue?: any;
  // Waveform Presentation Group Sequence
  '003A0240'?: Element;
  WaveformPresentationGroupSequence?: any;
  // Presentation Group Number
  '003A0241'?: Element;
  PresentationGroupNumber?: any;
  // Channel Display Sequence
  '003A0242'?: Element;
  ChannelDisplaySequence?: any;
  // Channel Recommended Display CIELab Value
  '003A0244'?: Element;
  ChannelRecommendedDisplayCIELabValue?: any;
  // Channel Position
  '003A0245'?: Element;
  ChannelPosition?: any;
  // Display Shading Flag
  '003A0246'?: Element;
  DisplayShadingFlag?: any;
  // Fractional Channel Display Scale
  '003A0247'?: Element;
  FractionalChannelDisplayScale?: any;
  // Absolute Channel Display Scale
  '003A0248'?: Element;
  AbsoluteChannelDisplayScale?: any;
  // Multiplexed Audio Channels Description Code Sequence
  '003A0300'?: Element;
  MultiplexedAudioChannelsDescriptionCodeSequence?: any;
  // Channel Identification Code
  '003A0301'?: Element;
  ChannelIdentificationCode?: any;
  // Channel Mode
  '003A0302'?: Element;
  ChannelMode?: any;
  // Scheduled Station AE Title
  '00400001'?: Element;
  ScheduledStationAETitle?: any;
  // Scheduled Procedure Step Start Date
  '00400002'?: Element;
  ScheduledProcedureStepStartDate?: any;
  // Scheduled Procedure Step Start Time
  '00400003'?: Element;
  ScheduledProcedureStepStartTime?: any;
  // Scheduled Procedure Step End Date
  '00400004'?: Element;
  ScheduledProcedureStepEndDate?: any;
  // Scheduled Procedure Step End Time
  '00400005'?: Element;
  ScheduledProcedureStepEndTime?: any;
  // Scheduled Performing Physician's Name
  '00400006'?: Element;
  ScheduledPerformingPhysicianName?: any;
  // Scheduled Procedure Step Description
  '00400007'?: Element;
  ScheduledProcedureStepDescription?: any;
  // Scheduled Protocol Code Sequence
  '00400008'?: Element;
  ScheduledProtocolCodeSequence?: any;
  // Scheduled Procedure Step ID
  '00400009'?: Element;
  ScheduledProcedureStepID?: any;
  // Stage Code Sequence
  '0040000A'?: Element;
  StageCodeSequence?: any;
  // Scheduled Performing Physician Identification Sequence
  '0040000B'?: Element;
  ScheduledPerformingPhysicianIdentificationSequence?: any;
  // Scheduled Station Name
  '00400010'?: Element;
  ScheduledStationName?: any;
  // Scheduled Procedure Step Location
  '00400011'?: Element;
  ScheduledProcedureStepLocation?: any;
  // Pre-Medication
  '00400012'?: Element;
  PreMedication?: any;
  // Scheduled Procedure Step Status
  '00400020'?: Element;
  ScheduledProcedureStepStatus?: any;
  // Order Placer Identifier Sequence
  '00400026'?: Element;
  OrderPlacerIdentifierSequence?: any;
  // Order Filler Identifier Sequence
  '00400027'?: Element;
  OrderFillerIdentifierSequence?: any;
  // Local Namespace Entity ID
  '00400031'?: Element;
  LocalNamespaceEntityID?: any;
  // Universal Entity ID
  '00400032'?: Element;
  UniversalEntityID?: any;
  // Universal Entity ID Type
  '00400033'?: Element;
  UniversalEntityIDType?: any;
  // Identifier Type Code
  '00400035'?: Element;
  IdentifierTypeCode?: any;
  // Assigning Facility Sequence
  '00400036'?: Element;
  AssigningFacilitySequence?: any;
  // Assigning Jurisdiction Code Sequence
  '00400039'?: Element;
  AssigningJurisdictionCodeSequence?: any;
  // Assigning Agency or Department Code Sequence
  '0040003A'?: Element;
  AssigningAgencyOrDepartmentCodeSequence?: any;
  // Scheduled Procedure Step Sequence
  '00400100'?: Element;
  ScheduledProcedureStepSequence?: any;
  // Referenced Non-Image Composite SOP Instance Sequence
  '00400220'?: Element;
  ReferencedNonImageCompositeSOPInstanceSequence?: any;
  // Performed Station AE Title
  '00400241'?: Element;
  PerformedStationAETitle?: any;
  // Performed Station Name
  '00400242'?: Element;
  PerformedStationName?: any;
  // Performed Location
  '00400243'?: Element;
  PerformedLocation?: any;
  // Performed Procedure Step Start Date
  '00400244'?: Element;
  PerformedProcedureStepStartDate?: any;
  // Performed Procedure Step Start Time
  '00400245'?: Element;
  PerformedProcedureStepStartTime?: any;
  // Performed Procedure Step End Date
  '00400250'?: Element;
  PerformedProcedureStepEndDate?: any;
  // Performed Procedure Step End Time
  '00400251'?: Element;
  PerformedProcedureStepEndTime?: any;
  // Performed Procedure Step Status
  '00400252'?: Element;
  PerformedProcedureStepStatus?: any;
  // Performed Procedure Step ID
  '00400253'?: Element;
  PerformedProcedureStepID?: any;
  // Performed Procedure Step Description
  '00400254'?: Element;
  PerformedProcedureStepDescription?: any;
  // Performed Procedure Type Description
  '00400255'?: Element;
  PerformedProcedureTypeDescription?: any;
  // Performed Protocol Code Sequence
  '00400260'?: Element;
  PerformedProtocolCodeSequence?: any;
  // Performed Protocol Type
  '00400261'?: Element;
  PerformedProtocolType?: any;
  // Scheduled Step Attributes Sequence
  '00400270'?: Element;
  ScheduledStepAttributesSequence?: any;
  // Request Attributes Sequence
  '00400275'?: Element;
  RequestAttributesSequence?: any;
  // Comments on the Performed Procedure Step
  '00400280'?: Element;
  CommentsOnThePerformedProcedureStep?: any;
  // Performed Procedure Step Discontinuation Reason Code Sequence
  '00400281'?: Element;
  PerformedProcedureStepDiscontinuationReasonCodeSequence?: any;
  // Quantity Sequence
  '00400293'?: Element;
  QuantitySequence?: any;
  // Quantity
  '00400294'?: Element;
  Quantity?: any;
  // Measuring Units Sequence
  '00400295'?: Element;
  MeasuringUnitsSequence?: any;
  // Billing Item Sequence
  '00400296'?: Element;
  BillingItemSequence?: any;
  // Total Time of Fluoroscopy
  '00400300'?: Element;
  TotalTimeOfFluoroscopy?: any;
  // Total Number of Exposures
  '00400301'?: Element;
  TotalNumberOfExposures?: any;
  // Entrance Dose
  '00400302'?: Element;
  EntranceDose?: any;
  // Exposed Area
  '00400303'?: Element;
  ExposedArea?: any;
  // Distance Source to Entrance
  '00400306'?: Element;
  DistanceSourceToEntrance?: any;
  // Distance Source to Support
  '00400307'?: Element;
  DistanceSourceToSupport?: any;
  // Exposure Dose Sequence
  '0040030E'?: Element;
  ExposureDoseSequence?: any;
  // Comments on Radiation Dose
  '00400310'?: Element;
  CommentsOnRadiationDose?: any;
  // X-Ray Output
  '00400312'?: Element;
  XRayOutput?: any;
  // Half Value Layer
  '00400314'?: Element;
  HalfValueLayer?: any;
  // Organ Dose
  '00400316'?: Element;
  OrganDose?: any;
  // Organ Exposed
  '00400318'?: Element;
  OrganExposed?: any;
  // Billing Procedure Step Sequence
  '00400320'?: Element;
  BillingProcedureStepSequence?: any;
  // Film Consumption Sequence
  '00400321'?: Element;
  FilmConsumptionSequence?: any;
  // Billing Supplies and Devices Sequence
  '00400324'?: Element;
  BillingSuppliesAndDevicesSequence?: any;
  // Referenced Procedure Step Sequence
  '00400330'?: Element;
  ReferencedProcedureStepSequence?: any;
  // Performed Series Sequence
  '00400340'?: Element;
  PerformedSeriesSequence?: any;
  // Comments on the Scheduled Procedure Step
  '00400400'?: Element;
  CommentsOnTheScheduledProcedureStep?: any;
  // Protocol Context Sequence
  '00400440'?: Element;
  ProtocolContextSequence?: any;
  // Content Item Modifier Sequence
  '00400441'?: Element;
  ContentItemModifierSequence?: any;
  // Scheduled Specimen Sequence
  '00400500'?: Element;
  ScheduledSpecimenSequence?: any;
  // Specimen Accession Number
  '0040050A'?: Element;
  SpecimenAccessionNumber?: any;
  // Container Identifier
  '00400512'?: Element;
  ContainerIdentifier?: any;
  // Issuer of the Container Identifier Sequence
  '00400513'?: Element;
  IssuerOfTheContainerIdentifierSequence?: any;
  // Alternate Container Identifier Sequence
  '00400515'?: Element;
  AlternateContainerIdentifierSequence?: any;
  // Container Type Code Sequence
  '00400518'?: Element;
  ContainerTypeCodeSequence?: any;
  // Container Description
  '0040051A'?: Element;
  ContainerDescription?: any;
  // Container Component Sequence
  '00400520'?: Element;
  ContainerComponentSequence?: any;
  // Specimen Sequence
  '00400550'?: Element;
  SpecimenSequence?: any;
  // Specimen Identifier
  '00400551'?: Element;
  SpecimenIdentifier?: any;
  // Specimen Description Sequence (Trial)
  '00400552'?: Element;
  SpecimenDescriptionSequenceTrial?: any;
  // Specimen Description (Trial)
  '00400553'?: Element;
  SpecimenDescriptionTrial?: any;
  // Specimen UID
  '00400554'?: Element;
  SpecimenUID?: any;
  // Acquisition Context Sequence
  '00400555'?: Element;
  AcquisitionContextSequence?: any;
  // Acquisition Context Description
  '00400556'?: Element;
  AcquisitionContextDescription?: any;
  // Specimen Type Code Sequence
  '0040059A'?: Element;
  SpecimenTypeCodeSequence?: any;
  // Specimen Description Sequence
  '00400560'?: Element;
  SpecimenDescriptionSequence?: any;
  // Issuer of the Specimen Identifier Sequence
  '00400562'?: Element;
  IssuerOfTheSpecimenIdentifierSequence?: any;
  // Specimen Short Description
  '00400600'?: Element;
  SpecimenShortDescription?: any;
  // Specimen Detailed Description
  '00400602'?: Element;
  SpecimenDetailedDescription?: any;
  // Specimen Preparation Sequence
  '00400610'?: Element;
  SpecimenPreparationSequence?: any;
  // Specimen Preparation Step Content Item Sequence
  '00400612'?: Element;
  SpecimenPreparationStepContentItemSequence?: any;
  // Specimen Localization Content Item Sequence
  '00400620'?: Element;
  SpecimenLocalizationContentItemSequence?: any;
  // Slide Identifier
  '004006FA'?: Element;
  SlideIdentifier?: any;
  // Image Center Point Coordinates Sequence
  '0040071A'?: Element;
  ImageCenterPointCoordinatesSequence?: any;
  // X Offset in Slide Coordinate System
  '0040072A'?: Element;
  XOffsetInSlideCoordinateSystem?: any;
  // Y Offset in Slide Coordinate System
  '0040073A'?: Element;
  YOffsetInSlideCoordinateSystem?: any;
  // Z Offset in Slide Coordinate System
  '0040074A'?: Element;
  ZOffsetInSlideCoordinateSystem?: any;
  // Pixel Spacing Sequence
  '004008D8'?: Element;
  PixelSpacingSequence?: any;
  // Coordinate System Axis Code Sequence
  '004008DA'?: Element;
  CoordinateSystemAxisCodeSequence?: any;
  // Measurement Units Code Sequence
  '004008EA'?: Element;
  MeasurementUnitsCodeSequence?: any;
  // Vital Stain Code Sequence (Trial)
  '004009F8'?: Element;
  VitalStainCodeSequenceTrial?: any;
  // Requested Procedure ID
  '00401001'?: Element;
  RequestedProcedureID?: any;
  // Reason for the Requested Procedure
  '00401002'?: Element;
  ReasonForTheRequestedProcedure?: any;
  // Requested Procedure Priority
  '00401003'?: Element;
  RequestedProcedurePriority?: any;
  // Patient Transport Arrangements
  '00401004'?: Element;
  PatientTransportArrangements?: any;
  // Requested Procedure Location
  '00401005'?: Element;
  RequestedProcedureLocation?: any;
  // Placer Order Number / Procedure
  '00401006'?: Element;
  PlacerOrderNumberProcedure?: any;
  // Filler Order Number / Procedure
  '00401007'?: Element;
  FillerOrderNumberProcedure?: any;
  // Confidentiality Code
  '00401008'?: Element;
  ConfidentialityCode?: any;
  // Reporting Priority
  '00401009'?: Element;
  ReportingPriority?: any;
  // Reason for Requested Procedure Code Sequence
  '0040100A'?: Element;
  ReasonForRequestedProcedureCodeSequence?: any;
  // Names of Intended Recipients of Results
  '00401010'?: Element;
  NamesOfIntendedRecipientsOfResults?: any;
  // Intended Recipients of Results Identification Sequence
  '00401011'?: Element;
  IntendedRecipientsOfResultsIdentificationSequence?: any;
  // Reason For Performed Procedure Code Sequence
  '00401012'?: Element;
  ReasonForPerformedProcedureCodeSequence?: any;
  // Requested Procedure Description (Trial)
  '00401060'?: Element;
  RequestedProcedureDescriptionTrial?: any;
  // Person Identification Code Sequence
  '00401101'?: Element;
  PersonIdentificationCodeSequence?: any;
  // Person's Address
  '00401102'?: Element;
  PersonAddress?: any;
  // Person's Telephone Numbers
  '00401103'?: Element;
  PersonTelephoneNumbers?: any;
  // Requested Procedure Comments
  '00401400'?: Element;
  RequestedProcedureComments?: any;
  // Reason for the Imaging Service Request
  '00402001'?: Element;
  ReasonForTheImagingServiceRequest?: any;
  // Issue Date of Imaging Service Request
  '00402004'?: Element;
  IssueDateOfImagingServiceRequest?: any;
  // Issue Time of Imaging Service Request
  '00402005'?: Element;
  IssueTimeOfImagingServiceRequest?: any;
  // Placer Order Number / Imaging Service Request (Retired)
  '00402006'?: Element;
  PlacerOrderNumberImagingServiceRequestRetired?: any;
  // Filler Order Number / Imaging Service Request (Retired)
  '00402007'?: Element;
  FillerOrderNumberImagingServiceRequestRetired?: any;
  // Order Entered By
  '00402008'?: Element;
  OrderEnteredBy?: any;
  // Order Enterer's Location
  '00402009'?: Element;
  OrderEntererLocation?: any;
  // Order Callback Phone Number
  '00402010'?: Element;
  OrderCallbackPhoneNumber?: any;
  // Placer Order Number / Imaging Service Request
  '00402016'?: Element;
  PlacerOrderNumberImagingServiceRequest?: any;
  // Filler Order Number / Imaging Service Request
  '00402017'?: Element;
  FillerOrderNumberImagingServiceRequest?: any;
  // Imaging Service Request Comments
  '00402400'?: Element;
  ImagingServiceRequestComments?: any;
  // Confidentiality Constraint on Patient Data Description
  '00403001'?: Element;
  ConfidentialityConstraintOnPatientDataDescription?: any;
  // General Purpose Scheduled Procedure Step Status
  '00404001'?: Element;
  GeneralPurposeScheduledProcedureStepStatus?: any;
  // General Purpose Performed Procedure Step Status
  '00404002'?: Element;
  GeneralPurposePerformedProcedureStepStatus?: any;
  // General Purpose Scheduled Procedure Step Priority
  '00404003'?: Element;
  GeneralPurposeScheduledProcedureStepPriority?: any;
  // Scheduled Processing Applications Code Sequence
  '00404004'?: Element;
  ScheduledProcessingApplicationsCodeSequence?: any;
  // Scheduled Procedure Step Start DateTime
  '00404005'?: Element;
  ScheduledProcedureStepStartDateTime?: any;
  // Multiple Copies Flag
  '00404006'?: Element;
  MultipleCopiesFlag?: any;
  // Performed Processing Applications Code Sequence
  '00404007'?: Element;
  PerformedProcessingApplicationsCodeSequence?: any;
  // Human Performer Code Sequence
  '00404009'?: Element;
  HumanPerformerCodeSequence?: any;
  // Scheduled Procedure Step Modification DateTime
  '00404010'?: Element;
  ScheduledProcedureStepModificationDateTime?: any;
  // Expected Completion DateTime
  '00404011'?: Element;
  ExpectedCompletionDateTime?: any;
  // Resulting General Purpose Performed Procedure Steps Sequence
  '00404015'?: Element;
  ResultingGeneralPurposePerformedProcedureStepsSequence?: any;
  // Referenced General Purpose Scheduled Procedure Step Sequence
  '00404016'?: Element;
  ReferencedGeneralPurposeScheduledProcedureStepSequence?: any;
  // Scheduled Workitem Code Sequence
  '00404018'?: Element;
  ScheduledWorkitemCodeSequence?: any;
  // Performed Workitem Code Sequence
  '00404019'?: Element;
  PerformedWorkitemCodeSequence?: any;
  // Input Availability Flag
  '00404020'?: Element;
  InputAvailabilityFlag?: any;
  // Input Information Sequence
  '00404021'?: Element;
  InputInformationSequence?: any;
  // Relevant Information Sequence
  '00404022'?: Element;
  RelevantInformationSequence?: any;
  // Referenced General Purpose Scheduled Procedure Step Transaction UID
  '00404023'?: Element;
  ReferencedGeneralPurposeScheduledProcedureStepTransactionUID?: any;
  // Scheduled Station Name Code Sequence
  '00404025'?: Element;
  ScheduledStationNameCodeSequence?: any;
  // Scheduled Station Class Code Sequence
  '00404026'?: Element;
  ScheduledStationClassCodeSequence?: any;
  // Scheduled Station Geographic Location Code Sequence
  '00404027'?: Element;
  ScheduledStationGeographicLocationCodeSequence?: any;
  // Performed Station Name Code Sequence
  '00404028'?: Element;
  PerformedStationNameCodeSequence?: any;
  // Performed Station Class Code Sequence
  '00404029'?: Element;
  PerformedStationClassCodeSequence?: any;
  // Performed Station Geographic Location Code Sequence
  '00404030'?: Element;
  PerformedStationGeographicLocationCodeSequence?: any;
  // Requested Subsequent Workitem Code Sequence
  '00404031'?: Element;
  RequestedSubsequentWorkitemCodeSequence?: any;
  // Non-DICOM Output Code Sequence
  '00404032'?: Element;
  NonDICOMOutputCodeSequence?: any;
  // Output Information Sequence
  '00404033'?: Element;
  OutputInformationSequence?: any;
  // Scheduled Human Performers Sequence
  '00404034'?: Element;
  ScheduledHumanPerformersSequence?: any;
  // Actual Human Performers Sequence
  '00404035'?: Element;
  ActualHumanPerformersSequence?: any;
  // Human Performer's Organization
  '00404036'?: Element;
  HumanPerformerOrganization?: any;
  // Human Performer's Name
  '00404037'?: Element;
  HumanPerformerName?: any;
  // Raw Data Handling
  '00404040'?: Element;
  RawDataHandling?: any;
  // Input Readiness State
  '00404041'?: Element;
  InputReadinessState?: any;
  // Performed Procedure Step Start DateTime
  '00404050'?: Element;
  PerformedProcedureStepStartDateTime?: any;
  // Performed Procedure Step End DateTime
  '00404051'?: Element;
  PerformedProcedureStepEndDateTime?: any;
  // Procedure Step Cancellation DateTime
  '00404052'?: Element;
  ProcedureStepCancellationDateTime?: any;
  // Entrance Dose in mGy
  '00408302'?: Element;
  EntranceDoseInmGy?: any;
  // Referenced Image Real World Value Mapping Sequence
  '00409094'?: Element;
  ReferencedImageRealWorldValueMappingSequence?: any;
  // Real World Value Mapping Sequence
  '00409096'?: Element;
  RealWorldValueMappingSequence?: any;
  // Pixel Value Mapping Code Sequence
  '00409098'?: Element;
  PixelValueMappingCodeSequence?: any;
  // LUT Label
  '00409210'?: Element;
  LUTLabel?: any;
  // Real World Value Last Value Mapped
  '00409211'?: Element;
  RealWorldValueLastValueMapped?: any;
  // Real World Value LUT Data
  '00409212'?: Element;
  RealWorldValueLUTData?: any;
  // Real World Value First Value Mapped
  '00409216'?: Element;
  RealWorldValueFirstValueMapped?: any;
  // Real World Value Intercept
  '00409224'?: Element;
  RealWorldValueIntercept?: any;
  // Real World Value Slope
  '00409225'?: Element;
  RealWorldValueSlope?: any;
  // Findings Flag (Trial)
  '0040A007'?: Element;
  FindingsFlagTrial?: any;
  // Relationship Type
  '0040A010'?: Element;
  RelationshipType?: any;
  // Findings Sequence (Trial)
  '0040A020'?: Element;
  FindingsSequenceTrial?: any;
  // Findings Group UID (Trial)
  '0040A021'?: Element;
  FindingsGroupUIDTrial?: any;
  // Referenced Findings Group UID (Trial)
  '0040A022'?: Element;
  ReferencedFindingsGroupUIDTrial?: any;
  // Findings Group Recording Date (Trial)
  '0040A023'?: Element;
  FindingsGroupRecordingDateTrial?: any;
  // Findings Group Recording Time (Trial)
  '0040A024'?: Element;
  FindingsGroupRecordingTimeTrial?: any;
  // Findings Source Category Code Sequence (Trial)
  '0040A026'?: Element;
  FindingsSourceCategoryCodeSequenceTrial?: any;
  // Verifying Organization
  '0040A027'?: Element;
  VerifyingOrganization?: any;
  // Documenting Organization Identifier Code Sequence (Trial)
  '0040A028'?: Element;
  DocumentingOrganizationIdentifierCodeSequenceTrial?: any;
  // Verification DateTime
  '0040A030'?: Element;
  VerificationDateTime?: any;
  // Observation DateTime
  '0040A032'?: Element;
  ObservationDateTime?: any;
  // Value Type
  '0040A040'?: Element;
  ValueType?: any;
  // Concept Name Code Sequence
  '0040A043'?: Element;
  ConceptNameCodeSequence?: any;
  // Measurement Precision Description (Trial)
  '0040A047'?: Element;
  MeasurementPrecisionDescriptionTrial?: any;
  // Continuity Of Content
  '0040A050'?: Element;
  ContinuityOfContent?: any;
  // Urgency or Priority Alerts (Trial)
  '0040A057'?: Element;
  UrgencyOrPriorityAlertsTrial?: any;
  // Sequencing Indicator (Trial)
  '0040A060'?: Element;
  SequencingIndicatorTrial?: any;
  // Document Identifier Code Sequence (Trial)
  '0040A066'?: Element;
  DocumentIdentifierCodeSequenceTrial?: any;
  // Document Author (Trial)
  '0040A067'?: Element;
  DocumentAuthorTrial?: any;
  // Document Author Identifier Code Sequence (Trial)
  '0040A068'?: Element;
  DocumentAuthorIdentifierCodeSequenceTrial?: any;
  // Identifier Code Sequence (Trial)
  '0040A070'?: Element;
  IdentifierCodeSequenceTrial?: any;
  // Verifying Observer Sequence
  '0040A073'?: Element;
  VerifyingObserverSequence?: any;
  // Object Binary Identifier (Trial)
  '0040A074'?: Element;
  ObjectBinaryIdentifierTrial?: any;
  // Verifying Observer Name
  '0040A075'?: Element;
  VerifyingObserverName?: any;
  // Documenting Observer Identifier Code Sequence (Trial)
  '0040A076'?: Element;
  DocumentingObserverIdentifierCodeSequenceTrial?: any;
  // Author Observer Sequence
  '0040A078'?: Element;
  AuthorObserverSequence?: any;
  // Participant Sequence
  '0040A07A'?: Element;
  ParticipantSequence?: any;
  // Custodial Organization Sequence
  '0040A07C'?: Element;
  CustodialOrganizationSequence?: any;
  // Participation Type
  '0040A080'?: Element;
  ParticipationType?: any;
  // Participation DateTime
  '0040A082'?: Element;
  ParticipationDateTime?: any;
  // Observer Type
  '0040A084'?: Element;
  ObserverType?: any;
  // Procedure Identifier Code Sequence (Trial)
  '0040A085'?: Element;
  ProcedureIdentifierCodeSequenceTrial?: any;
  // Verifying Observer Identification Code Sequence
  '0040A088'?: Element;
  VerifyingObserverIdentificationCodeSequence?: any;
  // Object Directory Binary Identifier (Trial)
  '0040A089'?: Element;
  ObjectDirectoryBinaryIdentifierTrial?: any;
  // Equivalent CDA Document Sequence
  '0040A090'?: Element;
  EquivalentCDADocumentSequence?: any;
  // Referenced Waveform Channels
  '0040A0B0'?: Element;
  ReferencedWaveformChannels?: any;
  // Date of Document or Verbal Transaction (Trial)
  '0040A110'?: Element;
  DateOfDocumentOrVerbalTransactionTrial?: any;
  // Time of Document Creation or Verbal Transaction (Trial)
  '0040A112'?: Element;
  TimeOfDocumentCreationOrVerbalTransactionTrial?: any;
  // DateTime
  '0040A120'?: Element;
  DateTime?: any;
  // Date
  '0040A121'?: Element;
  Date?: any;
  // Time
  '0040A122'?: Element;
  Time?: any;
  // Person Name
  '0040A123'?: Element;
  PersonName?: any;
  // UID
  '0040A124'?: Element;
  UID?: any;
  // Report Status ID (Trial)
  '0040A125'?: Element;
  ReportStatusIDTrial?: any;
  // Temporal Range Type
  '0040A130'?: Element;
  TemporalRangeType?: any;
  // Referenced Sample Positions
  '0040A132'?: Element;
  ReferencedSamplePositions?: any;
  // Referenced Frame Numbers
  '0040A136'?: Element;
  ReferencedFrameNumbers?: any;
  // Referenced Time Offsets
  '0040A138'?: Element;
  ReferencedTimeOffsets?: any;
  // Referenced DateTime
  '0040A13A'?: Element;
  ReferencedDateTime?: any;
  // Text Value
  '0040A160'?: Element;
  TextValue?: any;
  // Floating Point Value
  '0040A161'?: Element;
  FloatingPointValue?: any;
  // Rational Numerator Value
  '0040A162'?: Element;
  RationalNumeratorValue?: any;
  // Rational Denominator Value
  '0040A163'?: Element;
  RationalDenominatorValue?: any;
  // Observation Category Code Sequence (Trial)
  '0040A167'?: Element;
  ObservationCategoryCodeSequenceTrial?: any;
  // Concept Code Sequence
  '0040A168'?: Element;
  ConceptCodeSequence?: any;
  // Bibliographic Citation (Trial)
  '0040A16A'?: Element;
  BibliographicCitationTrial?: any;
  // Purpose of Reference Code Sequence
  '0040A170'?: Element;
  PurposeOfReferenceCodeSequence?: any;
  // Observation UID
  '0040A171'?: Element;
  ObservationUID?: any;
  // Referenced Observation UID (Trial)
  '0040A172'?: Element;
  ReferencedObservationUIDTrial?: any;
  // Referenced Observation Class (Trial)
  '0040A173'?: Element;
  ReferencedObservationClassTrial?: any;
  // Referenced Object Observation Class (Trial)
  '0040A174'?: Element;
  ReferencedObjectObservationClassTrial?: any;
  // Annotation Group Number
  '0040A180'?: Element;
  AnnotationGroupNumber?: any;
  // Observation Date (Trial)
  '0040A192'?: Element;
  ObservationDateTrial?: any;
  // Observation Time (Trial)
  '0040A193'?: Element;
  ObservationTimeTrial?: any;
  // Measurement Automation (Trial)
  '0040A194'?: Element;
  MeasurementAutomationTrial?: any;
  // Modifier Code Sequence
  '0040A195'?: Element;
  ModifierCodeSequence?: any;
  // Identification Description (Trial)
  '0040A224'?: Element;
  IdentificationDescriptionTrial?: any;
  // Coordinates Set Geometric Type (Trial)
  '0040A290'?: Element;
  CoordinatesSetGeometricTypeTrial?: any;
  // Algorithm Code Sequence (Trial)
  '0040A296'?: Element;
  AlgorithmCodeSequenceTrial?: any;
  // Algorithm Description (Trial)
  '0040A297'?: Element;
  AlgorithmDescriptionTrial?: any;
  // Pixel Coordinates Set (Trial)
  '0040A29A'?: Element;
  PixelCoordinatesSetTrial?: any;
  // Measured Value Sequence
  '0040A300'?: Element;
  MeasuredValueSequence?: any;
  // Numeric Value Qualifier Code Sequence
  '0040A301'?: Element;
  NumericValueQualifierCodeSequence?: any;
  // Current Observer (Trial)
  '0040A307'?: Element;
  CurrentObserverTrial?: any;
  // Numeric Value
  '0040A30A'?: Element;
  NumericValue?: any;
  // Referenced Accession Sequence (Trial)
  '0040A313'?: Element;
  ReferencedAccessionSequenceTrial?: any;
  // Report Status Comment (Trial)
  '0040A33A'?: Element;
  ReportStatusCommentTrial?: any;
  // Procedure Context Sequence (Trial)
  '0040A340'?: Element;
  ProcedureContextSequenceTrial?: any;
  // Verbal Source (Trial)
  '0040A352'?: Element;
  VerbalSourceTrial?: any;
  // Address (Trial)
  '0040A353'?: Element;
  AddressTrial?: any;
  // Telephone Number (Trial)
  '0040A354'?: Element;
  TelephoneNumberTrial?: any;
  // Verbal Source Identifier Code Sequence (Trial)
  '0040A358'?: Element;
  VerbalSourceIdentifierCodeSequenceTrial?: any;
  // Predecessor Documents Sequence
  '0040A360'?: Element;
  PredecessorDocumentsSequence?: any;
  // Referenced Request Sequence
  '0040A370'?: Element;
  ReferencedRequestSequence?: any;
  // Performed Procedure Code Sequence
  '0040A372'?: Element;
  PerformedProcedureCodeSequence?: any;
  // Current Requested Procedure Evidence Sequence
  '0040A375'?: Element;
  CurrentRequestedProcedureEvidenceSequence?: any;
  // Report Detail Sequence (Trial)
  '0040A380'?: Element;
  ReportDetailSequenceTrial?: any;
  // Pertinent Other Evidence Sequence
  '0040A385'?: Element;
  PertinentOtherEvidenceSequence?: any;
  // HL7 Structured Document Reference Sequence
  '0040A390'?: Element;
  HL7StructuredDocumentReferenceSequence?: any;
  // Observation Subject UID (Trial)
  '0040A402'?: Element;
  ObservationSubjectUIDTrial?: any;
  // Observation Subject Class (Trial)
  '0040A403'?: Element;
  ObservationSubjectClassTrial?: any;
  // Observation Subject Type Code Sequence (Trial)
  '0040A404'?: Element;
  ObservationSubjectTypeCodeSequenceTrial?: any;
  // Completion Flag
  '0040A491'?: Element;
  CompletionFlag?: any;
  // Completion Flag Description
  '0040A492'?: Element;
  CompletionFlagDescription?: any;
  // Verification Flag
  '0040A493'?: Element;
  VerificationFlag?: any;
  // Archive Requested
  '0040A494'?: Element;
  ArchiveRequested?: any;
  // Preliminary Flag
  '0040A496'?: Element;
  PreliminaryFlag?: any;
  // Content Template Sequence
  '0040A504'?: Element;
  ContentTemplateSequence?: any;
  // Identical Documents Sequence
  '0040A525'?: Element;
  IdenticalDocumentsSequence?: any;
  // Observation Subject Context Flag (Trial)
  '0040A600'?: Element;
  ObservationSubjectContextFlagTrial?: any;
  // Observer Context Flag (Trial)
  '0040A601'?: Element;
  ObserverContextFlagTrial?: any;
  // Procedure Context Flag (Trial)
  '0040A603'?: Element;
  ProcedureContextFlagTrial?: any;
  // Content Sequence
  '0040A730'?: Element;
  ContentSequence?: any;
  // Relationship Sequence (Trial)
  '0040A731'?: Element;
  RelationshipSequenceTrial?: any;
  // Relationship Type Code Sequence (Trial)
  '0040A732'?: Element;
  RelationshipTypeCodeSequenceTrial?: any;
  // Language Code Sequence (Trial)
  '0040A744'?: Element;
  LanguageCodeSequenceTrial?: any;
  // Uniform Resource Locator (Trial)
  '0040A992'?: Element;
  UniformResourceLocatorTrial?: any;
  // Waveform Annotation Sequence
  '0040B020'?: Element;
  WaveformAnnotationSequence?: any;
  // Template Identifier
  '0040DB00'?: Element;
  TemplateIdentifier?: any;
  // Template Version
  '0040DB06'?: Element;
  TemplateVersion?: any;
  // Template Local Version
  '0040DB07'?: Element;
  TemplateLocalVersion?: any;
  // Template Extension Flag
  '0040DB0B'?: Element;
  TemplateExtensionFlag?: any;
  // Template Extension Organization UID
  '0040DB0C'?: Element;
  TemplateExtensionOrganizationUID?: any;
  // Template Extension Creator UID
  '0040DB0D'?: Element;
  TemplateExtensionCreatorUID?: any;
  // Referenced Content Item Identifier
  '0040DB73'?: Element;
  ReferencedContentItemIdentifier?: any;
  // HL7 Instance Identifier
  '0040E001'?: Element;
  HL7InstanceIdentifier?: any;
  // HL7 Document Effective Time
  '0040E004'?: Element;
  HL7DocumentEffectiveTime?: any;
  // HL7 Document Type Code Sequence
  '0040E006'?: Element;
  HL7DocumentTypeCodeSequence?: any;
  // Document Class Code Sequence
  '0040E008'?: Element;
  DocumentClassCodeSequence?: any;
  // Retrieve URI
  '0040E010'?: Element;
  RetrieveURI?: any;
  // Retrieve Location UID
  '0040E011'?: Element;
  RetrieveLocationUID?: any;
  // Type of Instances
  '0040E020'?: Element;
  TypeOfInstances?: any;
  // DICOM Retrieval Sequence
  '0040E021'?: Element;
  DICOMRetrievalSequence?: any;
  // DICOM Media Retrieval Sequence
  '0040E022'?: Element;
  DICOMMediaRetrievalSequence?: any;
  // WADO Retrieval Sequence
  '0040E023'?: Element;
  WADORetrievalSequence?: any;
  // XDS Retrieval Sequence
  '0040E024'?: Element;
  XDSRetrievalSequence?: any;
  // Repository Unique ID
  '0040E030'?: Element;
  RepositoryUniqueID?: any;
  // Home Community ID
  '0040E031'?: Element;
  HomeCommunityID?: any;
  // Document Title
  '00420010'?: Element;
  DocumentTitle?: any;
  // Encapsulated Document
  '00420011'?: Element;
  EncapsulatedDocument?: any;
  // MIME Type of Encapsulated Document
  '00420012'?: Element;
  MIMETypeOfEncapsulatedDocument?: any;
  // Source Instance Sequence
  '00420013'?: Element;
  SourceInstanceSequence?: any;
  // List of MIME Types
  '00420014'?: Element;
  ListOfMIMETypes?: any;
  // Product Package Identifier
  '00440001'?: Element;
  ProductPackageIdentifier?: any;
  // Substance Administration Approval
  '00440002'?: Element;
  SubstanceAdministrationApproval?: any;
  // Approval Status Further Description
  '00440003'?: Element;
  ApprovalStatusFurtherDescription?: any;
  // Approval Status DateTime
  '00440004'?: Element;
  ApprovalStatusDateTime?: any;
  // Product Type Code Sequence
  '00440007'?: Element;
  ProductTypeCodeSequence?: any;
  // Product Name
  '00440008'?: Element;
  ProductName?: any;
  // Product Description
  '00440009'?: Element;
  ProductDescription?: any;
  // Product Lot Identifier
  '0044000A'?: Element;
  ProductLotIdentifier?: any;
  // Product Expiration DateTime
  '0044000B'?: Element;
  ProductExpirationDateTime?: any;
  // Substance Administration DateTime
  '00440010'?: Element;
  SubstanceAdministrationDateTime?: any;
  // Substance Administration Notes
  '00440011'?: Element;
  SubstanceAdministrationNotes?: any;
  // Substance Administration Device ID
  '00440012'?: Element;
  SubstanceAdministrationDeviceID?: any;
  // Product Parameter Sequence
  '00440013'?: Element;
  ProductParameterSequence?: any;
  // Substance Administration Parameter Sequence
  '00440019'?: Element;
  SubstanceAdministrationParameterSequence?: any;
  // Lens Description
  '00460012'?: Element;
  LensDescription?: any;
  // Right Lens Sequence
  '00460014'?: Element;
  RightLensSequence?: any;
  // Left Lens Sequence
  '00460015'?: Element;
  LeftLensSequence?: any;
  // Unspecified Laterality Lens Sequence
  '00460016'?: Element;
  UnspecifiedLateralityLensSequence?: any;
  // Cylinder Sequence
  '00460018'?: Element;
  CylinderSequence?: any;
  // Prism Sequence
  '00460028'?: Element;
  PrismSequence?: any;
  // Horizontal Prism Power
  '00460030'?: Element;
  HorizontalPrismPower?: any;
  // Horizontal Prism Base
  '00460032'?: Element;
  HorizontalPrismBase?: any;
  // Vertical Prism Power
  '00460034'?: Element;
  VerticalPrismPower?: any;
  // Vertical Prism Base
  '00460036'?: Element;
  VerticalPrismBase?: any;
  // Lens Segment Type
  '00460038'?: Element;
  LensSegmentType?: any;
  // Optical Transmittance
  '00460040'?: Element;
  OpticalTransmittance?: any;
  // Channel Width
  '00460042'?: Element;
  ChannelWidth?: any;
  // Pupil Size
  '00460044'?: Element;
  PupilSize?: any;
  // Corneal Size
  '00460046'?: Element;
  CornealSize?: any;
  // Autorefraction Right Eye Sequence
  '00460050'?: Element;
  AutorefractionRightEyeSequence?: any;
  // Autorefraction Left Eye Sequence
  '00460052'?: Element;
  AutorefractionLeftEyeSequence?: any;
  // Distance Pupillary Distance
  '00460060'?: Element;
  DistancePupillaryDistance?: any;
  // Near Pupillary Distance
  '00460062'?: Element;
  NearPupillaryDistance?: any;
  // Intermediate Pupillary Distance
  '00460063'?: Element;
  IntermediatePupillaryDistance?: any;
  // Other Pupillary Distance
  '00460064'?: Element;
  OtherPupillaryDistance?: any;
  // Keratometry Right Eye Sequence
  '00460070'?: Element;
  KeratometryRightEyeSequence?: any;
  // Keratometry Left Eye Sequence
  '00460071'?: Element;
  KeratometryLeftEyeSequence?: any;
  // Steep Keratometric Axis Sequence
  '00460074'?: Element;
  SteepKeratometricAxisSequence?: any;
  // Radius of Curvature
  '00460075'?: Element;
  RadiusOfCurvature?: any;
  // Keratometric Power
  '00460076'?: Element;
  KeratometricPower?: any;
  // Keratometric Axis
  '00460077'?: Element;
  KeratometricAxis?: any;
  // Flat Keratometric Axis Sequence
  '00460080'?: Element;
  FlatKeratometricAxisSequence?: any;
  // Background Color
  '00460092'?: Element;
  BackgroundColor?: any;
  // Optotype
  '00460094'?: Element;
  Optotype?: any;
  // Optotype Presentation
  '00460095'?: Element;
  OptotypePresentation?: any;
  // Subjective Refraction Right Eye Sequence
  '00460097'?: Element;
  SubjectiveRefractionRightEyeSequence?: any;
  // Subjective Refraction Left Eye Sequence
  '00460098'?: Element;
  SubjectiveRefractionLeftEyeSequence?: any;
  // Add Near Sequence
  '00460100'?: Element;
  AddNearSequence?: any;
  // Add Intermediate Sequence
  '00460101'?: Element;
  AddIntermediateSequence?: any;
  // Add Other Sequence
  '00460102'?: Element;
  AddOtherSequence?: any;
  // Add Power
  '00460104'?: Element;
  AddPower?: any;
  // Viewing Distance
  '00460106'?: Element;
  ViewingDistance?: any;
  // Visual Acuity Type Code Sequence
  '00460121'?: Element;
  VisualAcuityTypeCodeSequence?: any;
  // Visual Acuity Right Eye Sequence
  '00460122'?: Element;
  VisualAcuityRightEyeSequence?: any;
  // Visual Acuity Left Eye Sequence
  '00460123'?: Element;
  VisualAcuityLeftEyeSequence?: any;
  // Visual Acuity Both Eyes Open Sequence
  '00460124'?: Element;
  VisualAcuityBothEyesOpenSequence?: any;
  // Viewing Distance Type
  '00460125'?: Element;
  ViewingDistanceType?: any;
  // Visual Acuity Modifiers
  '00460135'?: Element;
  VisualAcuityModifiers?: any;
  // Decimal Visual Acuity
  '00460137'?: Element;
  DecimalVisualAcuity?: any;
  // Optotype Detailed Definition
  '00460139'?: Element;
  OptotypeDetailedDefinition?: any;
  // Referenced Refractive Measurements Sequence
  '00460145'?: Element;
  ReferencedRefractiveMeasurementsSequence?: any;
  // Sphere Power
  '00460146'?: Element;
  SpherePower?: any;
  // Cylinder Power
  '00460147'?: Element;
  CylinderPower?: any;
  // Corneal Topography Surface
  '00460201'?: Element;
  CornealTopographySurface?: any;
  // Corneal Vertex Location
  '00460202'?: Element;
  CornealVertexLocation?: any;
  // Pupil Centroid X-Coordinate
  '00460203'?: Element;
  PupilCentroidXCoordinate?: any;
  // Pupil Centroid Y-Coordinate
  '00460204'?: Element;
  PupilCentroidYCoordinate?: any;
  // Equivalent Pupil Radius
  '00460205'?: Element;
  EquivalentPupilRadius?: any;
  // Corneal Topography Map Type Code Sequence
  '00460207'?: Element;
  CornealTopographyMapTypeCodeSequence?: any;
  // Vertices of the Outline of Pupil
  '00460208'?: Element;
  VerticesOfTheOutlineOfPupil?: any;
  // Corneal Topography Mapping Normals Sequence
  '00460210'?: Element;
  CornealTopographyMappingNormalsSequence?: any;
  // Maximum Corneal Curvature Sequence
  '00460211'?: Element;
  MaximumCornealCurvatureSequence?: any;
  // Maximum Corneal Curvature
  '00460212'?: Element;
  MaximumCornealCurvature?: any;
  // Maximum Corneal Curvature Location
  '00460213'?: Element;
  MaximumCornealCurvatureLocation?: any;
  // Minimum Keratometric Sequence
  '00460215'?: Element;
  MinimumKeratometricSequence?: any;
  // Simulated Keratometric Cylinder Sequence
  '00460218'?: Element;
  SimulatedKeratometricCylinderSequence?: any;
  // Average Corneal Power
  '00460220'?: Element;
  AverageCornealPower?: any;
  // Corneal I-S Value
  '00460224'?: Element;
  CornealISValue?: any;
  // Analyzed Area
  '00460227'?: Element;
  AnalyzedArea?: any;
  // Surface Regularity Index
  '00460230'?: Element;
  SurfaceRegularityIndex?: any;
  // Surface Asymmetry Index
  '00460232'?: Element;
  SurfaceAsymmetryIndex?: any;
  // Corneal Eccentricity Index
  '00460234'?: Element;
  CornealEccentricityIndex?: any;
  // Keratoconus Prediction Index
  '00460236'?: Element;
  KeratoconusPredictionIndex?: any;
  // Decimal Potential Visual Acuity
  '00460238'?: Element;
  DecimalPotentialVisualAcuity?: any;
  // Corneal Topography Map Quality Evaluation
  '00460242'?: Element;
  CornealTopographyMapQualityEvaluation?: any;
  // Source Image Corneal Processed Data Sequence
  '00460244'?: Element;
  SourceImageCornealProcessedDataSequence?: any;
  // Corneal Point Location
  '00460247'?: Element;
  CornealPointLocation?: any;
  // Corneal Point Estimated
  '00460248'?: Element;
  CornealPointEstimated?: any;
  // Axial Power
  '00460249'?: Element;
  AxialPower?: any;
  // Tangential Power
  '00460250'?: Element;
  TangentialPower?: any;
  // Refractive Power
  '00460251'?: Element;
  RefractivePower?: any;
  // Relative Elevation
  '00460252'?: Element;
  RelativeElevation?: any;
  // Corneal Wavefront
  '00460253'?: Element;
  CornealWavefront?: any;
  // Imaged Volume Width
  '00480001'?: Element;
  ImagedVolumeWidth?: any;
  // Imaged Volume Height
  '00480002'?: Element;
  ImagedVolumeHeight?: any;
  // Imaged Volume Depth
  '00480003'?: Element;
  ImagedVolumeDepth?: any;
  // Total Pixel Matrix Columns
  '00480006'?: Element;
  TotalPixelMatrixColumns?: any;
  // Total Pixel Matrix Rows
  '00480007'?: Element;
  TotalPixelMatrixRows?: any;
  // Total Pixel Matrix Origin Sequence
  '00480008'?: Element;
  TotalPixelMatrixOriginSequence?: any;
  // Specimen Label in Image
  '00480010'?: Element;
  SpecimenLabelInImage?: any;
  // Focus Method
  '00480011'?: Element;
  FocusMethod?: any;
  // Extended Depth of Field
  '00480012'?: Element;
  ExtendedDepthOfField?: any;
  // Number of Focal Planes
  '00480013'?: Element;
  NumberOfFocalPlanes?: any;
  // Distance Between Focal Planes
  '00480014'?: Element;
  DistanceBetweenFocalPlanes?: any;
  // Recommended Absent Pixel CIELab Value
  '00480015'?: Element;
  RecommendedAbsentPixelCIELabValue?: any;
  // Illuminator Type Code Sequence
  '00480100'?: Element;
  IlluminatorTypeCodeSequence?: any;
  // Image Orientation (Slide)
  '00480102'?: Element;
  ImageOrientationSlide?: any;
  // Optical Path Sequence
  '00480105'?: Element;
  OpticalPathSequence?: any;
  // Optical Path Identifier
  '00480106'?: Element;
  OpticalPathIdentifier?: any;
  // Optical Path Description
  '00480107'?: Element;
  OpticalPathDescription?: any;
  // Illumination Color Code Sequence
  '00480108'?: Element;
  IlluminationColorCodeSequence?: any;
  // Specimen Reference Sequence
  '00480110'?: Element;
  SpecimenReferenceSequence?: any;
  // Condenser Lens Power
  '00480111'?: Element;
  CondenserLensPower?: any;
  // Objective Lens Power
  '00480112'?: Element;
  ObjectiveLensPower?: any;
  // Objective Lens Numerical Aperture
  '00480113'?: Element;
  ObjectiveLensNumericalAperture?: any;
  // Palette Color Lookup Table Sequence
  '00480120'?: Element;
  PaletteColorLookupTableSequence?: any;
  // Referenced Image Navigation Sequence
  '00480200'?: Element;
  ReferencedImageNavigationSequence?: any;
  // Top Left Hand Corner of Localizer Area
  '00480201'?: Element;
  TopLeftHandCornerOfLocalizerArea?: any;
  // Bottom Right Hand Corner of Localizer Area
  '00480202'?: Element;
  BottomRightHandCornerOfLocalizerArea?: any;
  // Optical Path Identification Sequence
  '00480207'?: Element;
  OpticalPathIdentificationSequence?: any;
  // Plane Position (Slide) Sequence
  '0048021A'?: Element;
  PlanePositionSlideSequence?: any;
  // Column Position In Total Image Pixel Matrix
  '0048021E'?: Element;
  ColumnPositionInTotalImagePixelMatrix?: any;
  // Row Position In Total Image Pixel Matrix
  '0048021F'?: Element;
  RowPositionInTotalImagePixelMatrix?: any;
  // Pixel Origin Interpretation
  '00480301'?: Element;
  PixelOriginInterpretation?: any;
  // Calibration Image
  '00500004'?: Element;
  CalibrationImage?: any;
  // Device Sequence
  '00500010'?: Element;
  DeviceSequence?: any;
  // Container Component Type Code Sequence
  '00500012'?: Element;
  ContainerComponentTypeCodeSequence?: any;
  // Container Component Thickness
  '00500013'?: Element;
  ContainerComponentThickness?: any;
  // Device Length
  '00500014'?: Element;
  DeviceLength?: any;
  // Container Component Width
  '00500015'?: Element;
  ContainerComponentWidth?: any;
  // Device Diameter
  '00500016'?: Element;
  DeviceDiameter?: any;
  // Device Diameter Units
  '00500017'?: Element;
  DeviceDiameterUnits?: any;
  // Device Volume
  '00500018'?: Element;
  DeviceVolume?: any;
  // Inter-Marker Distance
  '00500019'?: Element;
  InterMarkerDistance?: any;
  // Container Component Material
  '0050001A'?: Element;
  ContainerComponentMaterial?: any;
  // Container Component ID
  '0050001B'?: Element;
  ContainerComponentID?: any;
  // Container Component Length
  '0050001C'?: Element;
  ContainerComponentLength?: any;
  // Container Component Diameter
  '0050001D'?: Element;
  ContainerComponentDiameter?: any;
  // Container Component Description
  '0050001E'?: Element;
  ContainerComponentDescription?: any;
  // Device Description
  '00500020'?: Element;
  DeviceDescription?: any;
  // Contrast/Bolus Ingredient Percent by Volume
  '00520001'?: Element;
  ContrastBolusIngredientPercentByVolume?: any;
  // OCT Focal Distance
  '00520002'?: Element;
  OCTFocalDistance?: any;
  // Beam Spot Size
  '00520003'?: Element;
  BeamSpotSize?: any;
  // Effective Refractive Index
  '00520004'?: Element;
  EffectiveRefractiveIndex?: any;
  // OCT Acquisition Domain
  '00520006'?: Element;
  OCTAcquisitionDomain?: any;
  // OCT Optical Center Wavelength
  '00520007'?: Element;
  OCTOpticalCenterWavelength?: any;
  // Axial Resolution
  '00520008'?: Element;
  AxialResolution?: any;
  // Ranging Depth
  '00520009'?: Element;
  RangingDepth?: any;
  // A-line Rate
  '00520011'?: Element;
  ALineRate?: any;
  // A-lines Per Frame
  '00520012'?: Element;
  ALinesPerFrame?: any;
  // Catheter Rotational Rate
  '00520013'?: Element;
  CatheterRotationalRate?: any;
  // A-line Pixel Spacing
  '00520014'?: Element;
  ALinePixelSpacing?: any;
  // Mode of Percutaneous Access Sequence
  '00520016'?: Element;
  ModeOfPercutaneousAccessSequence?: any;
  // Intravascular OCT Frame Type Sequence
  '00520025'?: Element;
  IntravascularOCTFrameTypeSequence?: any;
  // OCT Z Offset Applied
  '00520026'?: Element;
  OCTZOffsetApplied?: any;
  // Intravascular Frame Content Sequence
  '00520027'?: Element;
  IntravascularFrameContentSequence?: any;
  // Intravascular Longitudinal Distance
  '00520028'?: Element;
  IntravascularLongitudinalDistance?: any;
  // Intravascular OCT Frame Content Sequence
  '00520029'?: Element;
  IntravascularOCTFrameContentSequence?: any;
  // OCT Z Offset Correction
  '00520030'?: Element;
  OCTZOffsetCorrection?: any;
  // Catheter Direction of Rotation
  '00520031'?: Element;
  CatheterDirectionOfRotation?: any;
  // Seam Line Location
  '00520033'?: Element;
  SeamLineLocation?: any;
  // First A-line Location
  '00520034'?: Element;
  FirstALineLocation?: any;
  // Seam Line Index
  '00520036'?: Element;
  SeamLineIndex?: any;
  // Number of Padded A-lines
  '00520038'?: Element;
  NumberOfPaddedALines?: any;
  // Interpolation Type
  '00520039'?: Element;
  InterpolationType?: any;
  // Refractive Index Applied
  '0052003A'?: Element;
  RefractiveIndexApplied?: any;
  // Energy Window Vector
  '00540010'?: Element;
  EnergyWindowVector?: any;
  // Number of Energy Windows
  '00540011'?: Element;
  NumberOfEnergyWindows?: any;
  // Energy Window Information Sequence
  '00540012'?: Element;
  EnergyWindowInformationSequence?: any;
  // Energy Window Range Sequence
  '00540013'?: Element;
  EnergyWindowRangeSequence?: any;
  // Energy Window Lower Limit
  '00540014'?: Element;
  EnergyWindowLowerLimit?: any;
  // Energy Window Upper Limit
  '00540015'?: Element;
  EnergyWindowUpperLimit?: any;
  // Radiopharmaceutical Information Sequence
  '00540016'?: Element;
  RadiopharmaceuticalInformationSequence?: any;
  // Residual Syringe Counts
  '00540017'?: Element;
  ResidualSyringeCounts?: any;
  // Energy Window Name
  '00540018'?: Element;
  EnergyWindowName?: any;
  // Detector Vector
  '00540020'?: Element;
  DetectorVector?: any;
  // Number of Detectors
  '00540021'?: Element;
  NumberOfDetectors?: any;
  // Detector Information Sequence
  '00540022'?: Element;
  DetectorInformationSequence?: any;
  // Phase Vector
  '00540030'?: Element;
  PhaseVector?: any;
  // Number of Phases
  '00540031'?: Element;
  NumberOfPhases?: any;
  // Phase Information Sequence
  '00540032'?: Element;
  PhaseInformationSequence?: any;
  // Number of Frames in Phase
  '00540033'?: Element;
  NumberOfFramesInPhase?: any;
  // Phase Delay
  '00540036'?: Element;
  PhaseDelay?: any;
  // Pause Between Frames
  '00540038'?: Element;
  PauseBetweenFrames?: any;
  // Phase Description
  '00540039'?: Element;
  PhaseDescription?: any;
  // Rotation Vector
  '00540050'?: Element;
  RotationVector?: any;
  // Number of Rotations
  '00540051'?: Element;
  NumberOfRotations?: any;
  // Rotation Information Sequence
  '00540052'?: Element;
  RotationInformationSequence?: any;
  // Number of Frames in Rotation
  '00540053'?: Element;
  NumberOfFramesInRotation?: any;
  // R-R Interval Vector
  '00540060'?: Element;
  RRIntervalVector?: any;
  // Number of R-R Intervals
  '00540061'?: Element;
  NumberOfRRIntervals?: any;
  // Gated Information Sequence
  '00540062'?: Element;
  GatedInformationSequence?: any;
  // Data Information Sequence
  '00540063'?: Element;
  DataInformationSequence?: any;
  // Time Slot Vector
  '00540070'?: Element;
  TimeSlotVector?: any;
  // Number of Time Slots
  '00540071'?: Element;
  NumberOfTimeSlots?: any;
  // Time Slot Information Sequence
  '00540072'?: Element;
  TimeSlotInformationSequence?: any;
  // Time Slot Time
  '00540073'?: Element;
  TimeSlotTime?: any;
  // Slice Vector
  '00540080'?: Element;
  SliceVector?: any;
  // Number of Slices
  '00540081'?: Element;
  NumberOfSlices?: any;
  // Angular View Vector
  '00540090'?: Element;
  AngularViewVector?: any;
  // Time Slice Vector
  '00540100'?: Element;
  TimeSliceVector?: any;
  // Number of Time Slices
  '00540101'?: Element;
  NumberOfTimeSlices?: any;
  // Start Angle
  '00540200'?: Element;
  StartAngle?: any;
  // Type of Detector Motion
  '00540202'?: Element;
  TypeOfDetectorMotion?: any;
  // Trigger Vector
  '00540210'?: Element;
  TriggerVector?: any;
  // Number of Triggers in Phase
  '00540211'?: Element;
  NumberOfTriggersInPhase?: any;
  // View Code Sequence
  '00540220'?: Element;
  ViewCodeSequence?: any;
  // View Modifier Code Sequence
  '00540222'?: Element;
  ViewModifierCodeSequence?: any;
  // Radionuclide Code Sequence
  '00540300'?: Element;
  RadionuclideCodeSequence?: any;
  // Administration Route Code Sequence
  '00540302'?: Element;
  AdministrationRouteCodeSequence?: any;
  // Radiopharmaceutical Code Sequence
  '00540304'?: Element;
  RadiopharmaceuticalCodeSequence?: any;
  // Calibration Data Sequence
  '00540306'?: Element;
  CalibrationDataSequence?: any;
  // Energy Window Number
  '00540308'?: Element;
  EnergyWindowNumber?: any;
  // Image ID
  '00540400'?: Element;
  ImageID?: any;
  // Patient Orientation Code Sequence
  '00540410'?: Element;
  PatientOrientationCodeSequence?: any;
  // Patient Orientation Modifier Code Sequence
  '00540412'?: Element;
  PatientOrientationModifierCodeSequence?: any;
  // Patient Gantry Relationship Code Sequence
  '00540414'?: Element;
  PatientGantryRelationshipCodeSequence?: any;
  // Slice Progression Direction
  '00540500'?: Element;
  SliceProgressionDirection?: any;
  // Scan Progression Direction
  '00540501'?: Element;
  ScanProgressionDirection?: any;
  // Series Type
  '00541000'?: Element;
  SeriesType?: any;
  // Units
  '00541001'?: Element;
  Units?: any;
  // Counts Source
  '00541002'?: Element;
  CountsSource?: any;
  // Reprojection Method
  '00541004'?: Element;
  ReprojectionMethod?: any;
  // SUV Type
  '00541006'?: Element;
  SUVType?: any;
  // Randoms Correction Method
  '00541100'?: Element;
  RandomsCorrectionMethod?: any;
  // Attenuation Correction Method
  '00541101'?: Element;
  AttenuationCorrectionMethod?: any;
  // Decay Correction
  '00541102'?: Element;
  DecayCorrection?: any;
  // Reconstruction Method
  '00541103'?: Element;
  ReconstructionMethod?: any;
  // Detector Lines of Response Used
  '00541104'?: Element;
  DetectorLinesOfResponseUsed?: any;
  // Scatter Correction Method
  '00541105'?: Element;
  ScatterCorrectionMethod?: any;
  // Axial Acceptance
  '00541200'?: Element;
  AxialAcceptance?: any;
  // Axial Mash
  '00541201'?: Element;
  AxialMash?: any;
  // Transverse Mash
  '00541202'?: Element;
  TransverseMash?: any;
  // Detector Element Size
  '00541203'?: Element;
  DetectorElementSize?: any;
  // Coincidence Window Width
  '00541210'?: Element;
  CoincidenceWindowWidth?: any;
  // Secondary Counts Type
  '00541220'?: Element;
  SecondaryCountsType?: any;
  // Frame Reference Time
  '00541300'?: Element;
  FrameReferenceTime?: any;
  // Primary (Prompts) Counts Accumulated
  '00541310'?: Element;
  PrimaryPromptsCountsAccumulated?: any;
  // Secondary Counts Accumulated
  '00541311'?: Element;
  SecondaryCountsAccumulated?: any;
  // Slice Sensitivity Factor
  '00541320'?: Element;
  SliceSensitivityFactor?: any;
  // Decay Factor
  '00541321'?: Element;
  DecayFactor?: any;
  // Dose Calibration Factor
  '00541322'?: Element;
  DoseCalibrationFactor?: any;
  // Scatter Fraction Factor
  '00541323'?: Element;
  ScatterFractionFactor?: any;
  // Dead Time Factor
  '00541324'?: Element;
  DeadTimeFactor?: any;
  // Image Index
  '00541330'?: Element;
  ImageIndex?: any;
  // Counts Included
  '00541400'?: Element;
  CountsIncluded?: any;
  // Dead Time Correction Flag
  '00541401'?: Element;
  DeadTimeCorrectionFlag?: any;
  // Histogram Sequence
  '00603000'?: Element;
  HistogramSequence?: any;
  // Histogram Number of Bins
  '00603002'?: Element;
  HistogramNumberOfBins?: any;
  // Histogram First Bin Value
  '00603004'?: Element;
  HistogramFirstBinValue?: any;
  // Histogram Last Bin Value
  '00603006'?: Element;
  HistogramLastBinValue?: any;
  // Histogram Bin Width
  '00603008'?: Element;
  HistogramBinWidth?: any;
  // Histogram Explanation
  '00603010'?: Element;
  HistogramExplanation?: any;
  // Histogram Data
  '00603020'?: Element;
  HistogramData?: any;
  // Segmentation Type
  '00620001'?: Element;
  SegmentationType?: any;
  // Segment Sequence
  '00620002'?: Element;
  SegmentSequence?: any;
  // Segmented Property Category Code Sequence
  '00620003'?: Element;
  SegmentedPropertyCategoryCodeSequence?: any;
  // Segment Number
  '00620004'?: Element;
  SegmentNumber?: any;
  // Segment Label
  '00620005'?: Element;
  SegmentLabel?: any;
  // Segment Description
  '00620006'?: Element;
  SegmentDescription?: any;
  // Segment Algorithm Type
  '00620008'?: Element;
  SegmentAlgorithmType?: any;
  // Segment Algorithm Name
  '00620009'?: Element;
  SegmentAlgorithmName?: any;
  // Segment Identification Sequence
  '0062000A'?: Element;
  SegmentIdentificationSequence?: any;
  // Referenced Segment Number
  '0062000B'?: Element;
  ReferencedSegmentNumber?: any;
  // Recommended Display Grayscale Value
  '0062000C'?: Element;
  RecommendedDisplayGrayscaleValue?: any;
  // Recommended Display CIELab Value
  '0062000D'?: Element;
  RecommendedDisplayCIELabValue?: any;
  // Maximum Fractional Value
  '0062000E'?: Element;
  MaximumFractionalValue?: any;
  // Segmented Property Type Code Sequence
  '0062000F'?: Element;
  SegmentedPropertyTypeCodeSequence?: any;
  // Segmentation Fractional Type
  '00620010'?: Element;
  SegmentationFractionalType?: any;
  // Segmented Property Type Modifier Code Sequence
  '00620011'?: Element;
  SegmentedPropertyTypeModifierCodeSequence?: any;
  // Used Segments Sequence
  '00620012'?: Element;
  UsedSegmentsSequence?: any;
  // Deformable Registration Sequence
  '00640002'?: Element;
  DeformableRegistrationSequence?: any;
  // Source Frame of Reference UID
  '00640003'?: Element;
  SourceFrameOfReferenceUID?: any;
  // Deformable Registration Grid Sequence
  '00640005'?: Element;
  DeformableRegistrationGridSequence?: any;
  // Grid Dimensions
  '00640007'?: Element;
  GridDimensions?: any;
  // Grid Resolution
  '00640008'?: Element;
  GridResolution?: any;
  // Vector Grid Data
  '00640009'?: Element;
  VectorGridData?: any;
  // Pre Deformation Matrix Registration Sequence
  '0064000F'?: Element;
  PreDeformationMatrixRegistrationSequence?: any;
  // Post Deformation Matrix Registration Sequence
  '00640010'?: Element;
  PostDeformationMatrixRegistrationSequence?: any;
  // Number of Surfaces
  '00660001'?: Element;
  NumberOfSurfaces?: any;
  // Surface Sequence
  '00660002'?: Element;
  SurfaceSequence?: any;
  // Surface Number
  '00660003'?: Element;
  SurfaceNumber?: any;
  // Surface Comments
  '00660004'?: Element;
  SurfaceComments?: any;
  // Surface Processing
  '00660009'?: Element;
  SurfaceProcessing?: any;
  // Surface Processing Ratio
  '0066000A'?: Element;
  SurfaceProcessingRatio?: any;
  // Surface Processing Description
  '0066000B'?: Element;
  SurfaceProcessingDescription?: any;
  // Recommended Presentation Opacity
  '0066000C'?: Element;
  RecommendedPresentationOpacity?: any;
  // Recommended Presentation Type
  '0066000D'?: Element;
  RecommendedPresentationType?: any;
  // Finite Volume
  '0066000E'?: Element;
  FiniteVolume?: any;
  // Manifold
  '00660010'?: Element;
  Manifold?: any;
  // Surface Points Sequence
  '00660011'?: Element;
  SurfacePointsSequence?: any;
  // Surface Points Normals Sequence
  '00660012'?: Element;
  SurfacePointsNormalsSequence?: any;
  // Surface Mesh Primitives Sequence
  '00660013'?: Element;
  SurfaceMeshPrimitivesSequence?: any;
  // Number of Surface Points
  '00660015'?: Element;
  NumberOfSurfacePoints?: any;
  // Point Coordinates Data
  '00660016'?: Element;
  PointCoordinatesData?: any;
  // Point Position Accuracy
  '00660017'?: Element;
  PointPositionAccuracy?: any;
  // Mean Point Distance
  '00660018'?: Element;
  MeanPointDistance?: any;
  // Maximum Point Distance
  '00660019'?: Element;
  MaximumPointDistance?: any;
  // Points Bounding Box Coordinates
  '0066001A'?: Element;
  PointsBoundingBoxCoordinates?: any;
  // Axis of Rotation
  '0066001B'?: Element;
  AxisOfRotation?: any;
  // Center of Rotation
  '0066001C'?: Element;
  CenterOfRotation?: any;
  // Number of Vectors
  '0066001E'?: Element;
  NumberOfVectors?: any;
  // Vector Dimensionality
  '0066001F'?: Element;
  VectorDimensionality?: any;
  // Vector Accuracy
  '00660020'?: Element;
  VectorAccuracy?: any;
  // Vector Coordinate Data
  '00660021'?: Element;
  VectorCoordinateData?: any;
  // Triangle Point Index List
  '00660023'?: Element;
  TrianglePointIndexList?: any;
  // Edge Point Index List
  '00660024'?: Element;
  EdgePointIndexList?: any;
  // Vertex Point Index List
  '00660025'?: Element;
  VertexPointIndexList?: any;
  // Triangle Strip Sequence
  '00660026'?: Element;
  TriangleStripSequence?: any;
  // Triangle Fan Sequence
  '00660027'?: Element;
  TriangleFanSequence?: any;
  // Line Sequence
  '00660028'?: Element;
  LineSequence?: any;
  // Primitive Point Index List
  '00660029'?: Element;
  PrimitivePointIndexList?: any;
  // Surface Count
  '0066002A'?: Element;
  SurfaceCount?: any;
  // Referenced Surface Sequence
  '0066002B'?: Element;
  ReferencedSurfaceSequence?: any;
  // Referenced Surface Number
  '0066002C'?: Element;
  ReferencedSurfaceNumber?: any;
  // Segment Surface Generation Algorithm Identification Sequence
  '0066002D'?: Element;
  SegmentSurfaceGenerationAlgorithmIdentificationSequence?: any;
  // Segment Surface Source Instance Sequence
  '0066002E'?: Element;
  SegmentSurfaceSourceInstanceSequence?: any;
  // Algorithm Family Code Sequence
  '0066002F'?: Element;
  AlgorithmFamilyCodeSequence?: any;
  // Algorithm Name Code Sequence
  '00660030'?: Element;
  AlgorithmNameCodeSequence?: any;
  // Algorithm Version
  '00660031'?: Element;
  AlgorithmVersion?: any;
  // Algorithm Parameters
  '00660032'?: Element;
  AlgorithmParameters?: any;
  // Facet Sequence
  '00660034'?: Element;
  FacetSequence?: any;
  // Surface Processing Algorithm Identification Sequence
  '00660035'?: Element;
  SurfaceProcessingAlgorithmIdentificationSequence?: any;
  // Algorithm Name
  '00660036'?: Element;
  AlgorithmName?: any;
  // Recommended Point Radius
  '00660037'?: Element;
  RecommendedPointRadius?: any;
  // Recommended Line Thickness
  '00660038'?: Element;
  RecommendedLineThickness?: any;
  // Implant Size
  '00686210'?: Element;
  ImplantSize?: any;
  // Implant Template Version
  '00686221'?: Element;
  ImplantTemplateVersion?: any;
  // Replaced Implant Template Sequence
  '00686222'?: Element;
  ReplacedImplantTemplateSequence?: any;
  // Implant Type
  '00686223'?: Element;
  ImplantType?: any;
  // Derivation Implant Template Sequence
  '00686224'?: Element;
  DerivationImplantTemplateSequence?: any;
  // Original Implant Template Sequence
  '00686225'?: Element;
  OriginalImplantTemplateSequence?: any;
  // Effective DateTime
  '00686226'?: Element;
  EffectiveDateTime?: any;
  // Implant Target Anatomy Sequence
  '00686230'?: Element;
  ImplantTargetAnatomySequence?: any;
  // Information From Manufacturer Sequence
  '00686260'?: Element;
  InformationFromManufacturerSequence?: any;
  // Notification From Manufacturer Sequence
  '00686265'?: Element;
  NotificationFromManufacturerSequence?: any;
  // Information Issue DateTime
  '00686270'?: Element;
  InformationIssueDateTime?: any;
  // Information Summary
  '00686280'?: Element;
  InformationSummary?: any;
  // Implant Regulatory Disapproval Code Sequence
  '006862A0'?: Element;
  ImplantRegulatoryDisapprovalCodeSequence?: any;
  // Overall Template Spatial Tolerance
  '006862A5'?: Element;
  OverallTemplateSpatialTolerance?: any;
  // HPGL Document Sequence
  '006862C0'?: Element;
  HPGLDocumentSequence?: any;
  // HPGL Document ID
  '006862D0'?: Element;
  HPGLDocumentID?: any;
  // HPGL Document Label
  '006862D5'?: Element;
  HPGLDocumentLabel?: any;
  // View Orientation Code Sequence
  '006862E0'?: Element;
  ViewOrientationCodeSequence?: any;
  // View Orientation Modifier
  '006862F0'?: Element;
  ViewOrientationModifier?: any;
  // HPGL Document Scaling
  '006862F2'?: Element;
  HPGLDocumentScaling?: any;
  // HPGL Document
  '00686300'?: Element;
  HPGLDocument?: any;
  // HPGL Contour Pen Number
  '00686310'?: Element;
  HPGLContourPenNumber?: any;
  // HPGL Pen Sequence
  '00686320'?: Element;
  HPGLPenSequence?: any;
  // HPGL Pen Number
  '00686330'?: Element;
  HPGLPenNumber?: any;
  // HPGL Pen Label
  '00686340'?: Element;
  HPGLPenLabel?: any;
  // HPGL Pen Description
  '00686345'?: Element;
  HPGLPenDescription?: any;
  // Recommended Rotation Point
  '00686346'?: Element;
  RecommendedRotationPoint?: any;
  // Bounding Rectangle
  '00686347'?: Element;
  BoundingRectangle?: any;
  // Implant Template 3D Model Surface Number
  '00686350'?: Element;
  ImplantTemplate3DModelSurfaceNumber?: any;
  // Surface Model Description Sequence
  '00686360'?: Element;
  SurfaceModelDescriptionSequence?: any;
  // Surface Model Label
  '00686380'?: Element;
  SurfaceModelLabel?: any;
  // Surface Model Scaling Factor
  '00686390'?: Element;
  SurfaceModelScalingFactor?: any;
  // Materials Code Sequence
  '006863A0'?: Element;
  MaterialsCodeSequence?: any;
  // Coating Materials Code Sequence
  '006863A4'?: Element;
  CoatingMaterialsCodeSequence?: any;
  // Implant Type Code Sequence
  '006863A8'?: Element;
  ImplantTypeCodeSequence?: any;
  // Fixation Method Code Sequence
  '006863AC'?: Element;
  FixationMethodCodeSequence?: any;
  // Mating Feature Sets Sequence
  '006863B0'?: Element;
  MatingFeatureSetsSequence?: any;
  // Mating Feature Set ID
  '006863C0'?: Element;
  MatingFeatureSetID?: any;
  // Mating Feature Set Label
  '006863D0'?: Element;
  MatingFeatureSetLabel?: any;
  // Mating Feature Sequence
  '006863E0'?: Element;
  MatingFeatureSequence?: any;
  // Mating Feature ID
  '006863F0'?: Element;
  MatingFeatureID?: any;
  // Mating Feature Degree of Freedom Sequence
  '00686400'?: Element;
  MatingFeatureDegreeOfFreedomSequence?: any;
  // Degree of Freedom ID
  '00686410'?: Element;
  DegreeOfFreedomID?: any;
  // Degree of Freedom Type
  '00686420'?: Element;
  DegreeOfFreedomType?: any;
  // 2D Mating Feature Coordinates Sequence
  '00686430'?: Element;
  TwoDMatingFeatureCoordinatesSequence?: any;
  // Referenced HPGL Document ID
  '00686440'?: Element;
  ReferencedHPGLDocumentID?: any;
  // 2D Mating Point
  '00686450'?: Element;
  TwoDMatingPoint?: any;
  // 2D Mating Axes
  '00686460'?: Element;
  TwoDMatingAxes?: any;
  // 2D Degree of Freedom Sequence
  '00686470'?: Element;
  TwoDDegreeOfFreedomSequence?: any;
  // 3D Degree of Freedom Axis
  '00686490'?: Element;
  ThreeDDegreeOfFreedomAxis?: any;
  // Range of Freedom
  '006864A0'?: Element;
  RangeOfFreedom?: any;
  // 3D Mating Point
  '006864C0'?: Element;
  ThreeDMatingPoint?: any;
  // 3D Mating Axes
  '006864D0'?: Element;
  ThreeDMatingAxes?: any;
  // 2D Degree of Freedom Axis
  '006864F0'?: Element;
  TwoDDegreeOfFreedomAxis?: any;
  // Planning Landmark Point Sequence
  '00686500'?: Element;
  PlanningLandmarkPointSequence?: any;
  // Planning Landmark Line Sequence
  '00686510'?: Element;
  PlanningLandmarkLineSequence?: any;
  // Planning Landmark Plane Sequence
  '00686520'?: Element;
  PlanningLandmarkPlaneSequence?: any;
  // Planning Landmark ID
  '00686530'?: Element;
  PlanningLandmarkID?: any;
  // Planning Landmark Description
  '00686540'?: Element;
  PlanningLandmarkDescription?: any;
  // Planning Landmark Identification Code Sequence
  '00686545'?: Element;
  PlanningLandmarkIdentificationCodeSequence?: any;
  // 2D Point Coordinates Sequence
  '00686550'?: Element;
  TwoDPointCoordinatesSequence?: any;
  // 2D Point Coordinates
  '00686560'?: Element;
  TwoDPointCoordinates?: any;
  // 3D Point Coordinates
  '00686590'?: Element;
  ThreeDPointCoordinates?: any;
  // 2D Line Coordinates Sequence
  '006865A0'?: Element;
  TwoDLineCoordinatesSequence?: any;
  // 2D Line Coordinates
  '006865B0'?: Element;
  TwoDLineCoordinates?: any;
  // 3D Line Coordinates
  '006865D0'?: Element;
  ThreeDLineCoordinates?: any;
  // 2D Plane Coordinates Sequence
  '006865E0'?: Element;
  TwoDPlaneCoordinatesSequence?: any;
  // 2D Plane Intersection
  '006865F0'?: Element;
  TwoDPlaneIntersection?: any;
  // 3D Plane Origin
  '00686610'?: Element;
  ThreeDPlaneOrigin?: any;
  // 3D Plane Normal
  '00686620'?: Element;
  ThreeDPlaneNormal?: any;
  // Graphic Annotation Sequence
  '00700001'?: Element;
  GraphicAnnotationSequence?: any;
  // Graphic Layer
  '00700002'?: Element;
  GraphicLayer?: any;
  // Bounding Box Annotation Units
  '00700003'?: Element;
  BoundingBoxAnnotationUnits?: any;
  // Anchor Point Annotation Units
  '00700004'?: Element;
  AnchorPointAnnotationUnits?: any;
  // Graphic Annotation Units
  '00700005'?: Element;
  GraphicAnnotationUnits?: any;
  // Unformatted Text Value
  '00700006'?: Element;
  UnformattedTextValue?: any;
  // Text Object Sequence
  '00700008'?: Element;
  TextObjectSequence?: any;
  // Graphic Object Sequence
  '00700009'?: Element;
  GraphicObjectSequence?: any;
  // Bounding Box Top Left Hand Corner
  '00700010'?: Element;
  BoundingBoxTopLeftHandCorner?: any;
  // Bounding Box Bottom Right Hand Corner
  '00700011'?: Element;
  BoundingBoxBottomRightHandCorner?: any;
  // Bounding Box Text Horizontal Justification
  '00700012'?: Element;
  BoundingBoxTextHorizontalJustification?: any;
  // Anchor Point
  '00700014'?: Element;
  AnchorPoint?: any;
  // Anchor Point Visibility
  '00700015'?: Element;
  AnchorPointVisibility?: any;
  // Graphic Dimensions
  '00700020'?: Element;
  GraphicDimensions?: any;
  // Number of Graphic Points
  '00700021'?: Element;
  NumberOfGraphicPoints?: any;
  // Graphic Data
  '00700022'?: Element;
  GraphicData?: any;
  // Graphic Type
  '00700023'?: Element;
  GraphicType?: any;
  // Graphic Filled
  '00700024'?: Element;
  GraphicFilled?: any;
  // Image Rotation (Retired)
  '00700040'?: Element;
  ImageRotationRetired?: any;
  // Image Horizontal Flip
  '00700041'?: Element;
  ImageHorizontalFlip?: any;
  // Image Rotation
  '00700042'?: Element;
  ImageRotation?: any;
  // Displayed Area Top Left Hand Corner (Trial)
  '00700050'?: Element;
  DisplayedAreaTopLeftHandCornerTrial?: any;
  // Displayed Area Bottom Right Hand Corner (Trial)
  '00700051'?: Element;
  DisplayedAreaBottomRightHandCornerTrial?: any;
  // Displayed Area Top Left Hand Corner
  '00700052'?: Element;
  DisplayedAreaTopLeftHandCorner?: any;
  // Displayed Area Bottom Right Hand Corner
  '00700053'?: Element;
  DisplayedAreaBottomRightHandCorner?: any;
  // Displayed Area Selection Sequence
  '0070005A'?: Element;
  DisplayedAreaSelectionSequence?: any;
  // Graphic Layer Sequence
  '00700060'?: Element;
  GraphicLayerSequence?: any;
  // Graphic Layer Order
  '00700062'?: Element;
  GraphicLayerOrder?: any;
  // Graphic Layer Recommended Display Grayscale Value
  '00700066'?: Element;
  GraphicLayerRecommendedDisplayGrayscaleValue?: any;
  // Graphic Layer Recommended Display RGB Value
  '00700067'?: Element;
  GraphicLayerRecommendedDisplayRGBValue?: any;
  // Graphic Layer Description
  '00700068'?: Element;
  GraphicLayerDescription?: any;
  // Content Label
  '00700080'?: Element;
  ContentLabel?: any;
  // Content Description
  '00700081'?: Element;
  ContentDescription?: any;
  // Presentation Creation Date
  '00700082'?: Element;
  PresentationCreationDate?: any;
  // Presentation Creation Time
  '00700083'?: Element;
  PresentationCreationTime?: any;
  // Content Creator's Name
  '00700084'?: Element;
  ContentCreatorName?: any;
  // Content Creator's Identification Code Sequence
  '00700086'?: Element;
  ContentCreatorIdentificationCodeSequence?: any;
  // Alternate Content Description Sequence
  '00700087'?: Element;
  AlternateContentDescriptionSequence?: any;
  // Presentation Size Mode
  '00700100'?: Element;
  PresentationSizeMode?: any;
  // Presentation Pixel Spacing
  '00700101'?: Element;
  PresentationPixelSpacing?: any;
  // Presentation Pixel Aspect Ratio
  '00700102'?: Element;
  PresentationPixelAspectRatio?: any;
  // Presentation Pixel Magnification Ratio
  '00700103'?: Element;
  PresentationPixelMagnificationRatio?: any;
  // Graphic Group Label
  '00700207'?: Element;
  GraphicGroupLabel?: any;
  // Graphic Group Description
  '00700208'?: Element;
  GraphicGroupDescription?: any;
  // Compound Graphic Sequence
  '00700209'?: Element;
  CompoundGraphicSequence?: any;
  // Compound Graphic Instance ID
  '00700226'?: Element;
  CompoundGraphicInstanceID?: any;
  // Font Name
  '00700227'?: Element;
  FontName?: any;
  // Font Name Type
  '00700228'?: Element;
  FontNameType?: any;
  // CSS Font Name
  '00700229'?: Element;
  CSSFontName?: any;
  // Rotation Angle
  '00700230'?: Element;
  RotationAngle?: any;
  // Text Style Sequence
  '00700231'?: Element;
  TextStyleSequence?: any;
  // Line Style Sequence
  '00700232'?: Element;
  LineStyleSequence?: any;
  // Fill Style Sequence
  '00700233'?: Element;
  FillStyleSequence?: any;
  // Graphic Group Sequence
  '00700234'?: Element;
  GraphicGroupSequence?: any;
  // Text Color CIELab Value
  '00700241'?: Element;
  TextColorCIELabValue?: any;
  // Horizontal Alignment
  '00700242'?: Element;
  HorizontalAlignment?: any;
  // Vertical Alignment
  '00700243'?: Element;
  VerticalAlignment?: any;
  // Shadow Style
  '00700244'?: Element;
  ShadowStyle?: any;
  // Shadow Offset X
  '00700245'?: Element;
  ShadowOffsetX?: any;
  // Shadow Offset Y
  '00700246'?: Element;
  ShadowOffsetY?: any;
  // Shadow Color CIELab Value
  '00700247'?: Element;
  ShadowColorCIELabValue?: any;
  // Underlined
  '00700248'?: Element;
  Underlined?: any;
  // Bold
  '00700249'?: Element;
  Bold?: any;
  // Italic
  '00700250'?: Element;
  Italic?: any;
  // Pattern On Color CIELab Value
  '00700251'?: Element;
  PatternOnColorCIELabValue?: any;
  // Pattern Off Color CIELab Value
  '00700252'?: Element;
  PatternOffColorCIELabValue?: any;
  // Line Thickness
  '00700253'?: Element;
  LineThickness?: any;
  // Line Dashing Style
  '00700254'?: Element;
  LineDashingStyle?: any;
  // Line Pattern
  '00700255'?: Element;
  LinePattern?: any;
  // Fill Pattern
  '00700256'?: Element;
  FillPattern?: any;
  // Fill Mode
  '00700257'?: Element;
  FillMode?: any;
  // Shadow Opacity
  '00700258'?: Element;
  ShadowOpacity?: any;
  // Gap Length
  '00700261'?: Element;
  GapLength?: any;
  // Diameter of Visibility
  '00700262'?: Element;
  DiameterOfVisibility?: any;
  // Rotation Point
  '00700273'?: Element;
  RotationPoint?: any;
  // Tick Alignment
  '00700274'?: Element;
  TickAlignment?: any;
  // Show Tick Label
  '00700278'?: Element;
  ShowTickLabel?: any;
  // Tick Label Alignment
  '00700279'?: Element;
  TickLabelAlignment?: any;
  // Compound Graphic Units
  '00700282'?: Element;
  CompoundGraphicUnits?: any;
  // Pattern On Opacity
  '00700284'?: Element;
  PatternOnOpacity?: any;
  // Pattern Off Opacity
  '00700285'?: Element;
  PatternOffOpacity?: any;
  // Major Ticks Sequence
  '00700287'?: Element;
  MajorTicksSequence?: any;
  // Tick Position
  '00700288'?: Element;
  TickPosition?: any;
  // Tick Label
  '00700289'?: Element;
  TickLabel?: any;
  // Compound Graphic Type
  '00700294'?: Element;
  CompoundGraphicType?: any;
  // Graphic Group ID
  '00700295'?: Element;
  GraphicGroupID?: any;
  // Shape Type
  '00700306'?: Element;
  ShapeType?: any;
  // Registration Sequence
  '00700308'?: Element;
  RegistrationSequence?: any;
  // Matrix Registration Sequence
  '00700309'?: Element;
  MatrixRegistrationSequence?: any;
  // Matrix Sequence
  '0070030A'?: Element;
  MatrixSequence?: any;
  // Frame of Reference Transformation Matrix Type
  '0070030C'?: Element;
  FrameOfReferenceTransformationMatrixType?: any;
  // Registration Type Code Sequence
  '0070030D'?: Element;
  RegistrationTypeCodeSequence?: any;
  // Fiducial Description
  '0070030F'?: Element;
  FiducialDescription?: any;
  // Fiducial Identifier
  '00700310'?: Element;
  FiducialIdentifier?: any;
  // Fiducial Identifier Code Sequence
  '00700311'?: Element;
  FiducialIdentifierCodeSequence?: any;
  // Contour Uncertainty Radius
  '00700312'?: Element;
  ContourUncertaintyRadius?: any;
  // Used Fiducials Sequence
  '00700314'?: Element;
  UsedFiducialsSequence?: any;
  // Graphic Coordinates Data Sequence
  '00700318'?: Element;
  GraphicCoordinatesDataSequence?: any;
  // Fiducial UID
  '0070031A'?: Element;
  FiducialUID?: any;
  // Fiducial Set Sequence
  '0070031C'?: Element;
  FiducialSetSequence?: any;
  // Fiducial Sequence
  '0070031E'?: Element;
  FiducialSequence?: any;
  // Graphic Layer Recommended Display CIELab Value
  '00700401'?: Element;
  GraphicLayerRecommendedDisplayCIELabValue?: any;
  // Blending Sequence
  '00700402'?: Element;
  BlendingSequence?: any;
  // Relative Opacity
  '00700403'?: Element;
  RelativeOpacity?: any;
  // Referenced Spatial Registration Sequence
  '00700404'?: Element;
  ReferencedSpatialRegistrationSequence?: any;
  // Blending Position
  '00700405'?: Element;
  BlendingPosition?: any;
  // Hanging Protocol Name
  '00720002'?: Element;
  HangingProtocolName?: any;
  // Hanging Protocol Description
  '00720004'?: Element;
  HangingProtocolDescription?: any;
  // Hanging Protocol Level
  '00720006'?: Element;
  HangingProtocolLevel?: any;
  // Hanging Protocol Creator
  '00720008'?: Element;
  HangingProtocolCreator?: any;
  // Hanging Protocol Creation DateTime
  '0072000A'?: Element;
  HangingProtocolCreationDateTime?: any;
  // Hanging Protocol Definition Sequence
  '0072000C'?: Element;
  HangingProtocolDefinitionSequence?: any;
  // Hanging Protocol User Identification Code Sequence
  '0072000E'?: Element;
  HangingProtocolUserIdentificationCodeSequence?: any;
  // Hanging Protocol User Group Name
  '00720010'?: Element;
  HangingProtocolUserGroupName?: any;
  // Source Hanging Protocol Sequence
  '00720012'?: Element;
  SourceHangingProtocolSequence?: any;
  // Number of Priors Referenced
  '00720014'?: Element;
  NumberOfPriorsReferenced?: any;
  // Image Sets Sequence
  '00720020'?: Element;
  ImageSetsSequence?: any;
  // Image Set Selector Sequence
  '00720022'?: Element;
  ImageSetSelectorSequence?: any;
  // Image Set Selector Usage Flag
  '00720024'?: Element;
  ImageSetSelectorUsageFlag?: any;
  // Selector Attribute
  '00720026'?: Element;
  SelectorAttribute?: any;
  // Selector Value Number
  '00720028'?: Element;
  SelectorValueNumber?: any;
  // Time Based Image Sets Sequence
  '00720030'?: Element;
  TimeBasedImageSetsSequence?: any;
  // Image Set Number
  '00720032'?: Element;
  ImageSetNumber?: any;
  // Image Set Selector Category
  '00720034'?: Element;
  ImageSetSelectorCategory?: any;
  // Relative Time
  '00720038'?: Element;
  RelativeTime?: any;
  // Relative Time Units
  '0072003A'?: Element;
  RelativeTimeUnits?: any;
  // Abstract Prior Value
  '0072003C'?: Element;
  AbstractPriorValue?: any;
  // Abstract Prior Code Sequence
  '0072003E'?: Element;
  AbstractPriorCodeSequence?: any;
  // Image Set Label
  '00720040'?: Element;
  ImageSetLabel?: any;
  // Selector Attribute VR
  '00720050'?: Element;
  SelectorAttributeVR?: any;
  // Selector Sequence Pointer
  '00720052'?: Element;
  SelectorSequencePointer?: any;
  // Selector Sequence Pointer Private Creator
  '00720054'?: Element;
  SelectorSequencePointerPrivateCreator?: any;
  // Selector Attribute Private Creator
  '00720056'?: Element;
  SelectorAttributePrivateCreator?: any;
  // Selector AT Value
  '00720060'?: Element;
  SelectorATValue?: any;
  // Selector CS Value
  '00720062'?: Element;
  SelectorCSValue?: any;
  // Selector IS Value
  '00720064'?: Element;
  SelectorISValue?: any;
  // Selector LO Value
  '00720066'?: Element;
  SelectorLOValue?: any;
  // Selector LT Value
  '00720068'?: Element;
  SelectorLTValue?: any;
  // Selector PN Value
  '0072006A'?: Element;
  SelectorPNValue?: any;
  // Selector SH Value
  '0072006C'?: Element;
  SelectorSHValue?: any;
  // Selector ST Value
  '0072006E'?: Element;
  SelectorSTValue?: any;
  // Selector UT Value
  '00720070'?: Element;
  SelectorUTValue?: any;
  // Selector DS Value
  '00720072'?: Element;
  SelectorDSValue?: any;
  // Selector FD Value
  '00720074'?: Element;
  SelectorFDValue?: any;
  // Selector FL Value
  '00720076'?: Element;
  SelectorFLValue?: any;
  // Selector UL Value
  '00720078'?: Element;
  SelectorULValue?: any;
  // Selector US Value
  '0072007A'?: Element;
  SelectorUSValue?: any;
  // Selector SL Value
  '0072007C'?: Element;
  SelectorSLValue?: any;
  // Selector SS Value
  '0072007E'?: Element;
  SelectorSSValue?: any;
  // Selector Code Sequence Value
  '00720080'?: Element;
  SelectorCodeSequenceValue?: any;
  // Number of Screens
  '00720100'?: Element;
  NumberOfScreens?: any;
  // Nominal Screen Definition Sequence
  '00720102'?: Element;
  NominalScreenDefinitionSequence?: any;
  // Number of Vertical Pixels
  '00720104'?: Element;
  NumberOfVerticalPixels?: any;
  // Number of Horizontal Pixels
  '00720106'?: Element;
  NumberOfHorizontalPixels?: any;
  // Display Environment Spatial Position
  '00720108'?: Element;
  DisplayEnvironmentSpatialPosition?: any;
  // Screen Minimum Grayscale Bit Depth
  '0072010A'?: Element;
  ScreenMinimumGrayscaleBitDepth?: any;
  // Screen Minimum Color Bit Depth
  '0072010C'?: Element;
  ScreenMinimumColorBitDepth?: any;
  // Application Maximum Repaint Time
  '0072010E'?: Element;
  ApplicationMaximumRepaintTime?: any;
  // Display Sets Sequence
  '00720200'?: Element;
  DisplaySetsSequence?: any;
  // Display Set Number
  '00720202'?: Element;
  DisplaySetNumber?: any;
  // Display Set Label
  '00720203'?: Element;
  DisplaySetLabel?: any;
  // Display Set Presentation Group
  '00720204'?: Element;
  DisplaySetPresentationGroup?: any;
  // Display Set Presentation Group Description
  '00720206'?: Element;
  DisplaySetPresentationGroupDescription?: any;
  // Partial Data Display Handling
  '00720208'?: Element;
  PartialDataDisplayHandling?: any;
  // Synchronized Scrolling Sequence
  '00720210'?: Element;
  SynchronizedScrollingSequence?: any;
  // Display Set Scrolling Group
  '00720212'?: Element;
  DisplaySetScrollingGroup?: any;
  // Navigation Indicator Sequence
  '00720214'?: Element;
  NavigationIndicatorSequence?: any;
  // Navigation Display Set
  '00720216'?: Element;
  NavigationDisplaySet?: any;
  // Reference Display Sets
  '00720218'?: Element;
  ReferenceDisplaySets?: any;
  // Image Boxes Sequence
  '00720300'?: Element;
  ImageBoxesSequence?: any;
  // Image Box Number
  '00720302'?: Element;
  ImageBoxNumber?: any;
  // Image Box Layout Type
  '00720304'?: Element;
  ImageBoxLayoutType?: any;
  // Image Box Tile Horizontal Dimension
  '00720306'?: Element;
  ImageBoxTileHorizontalDimension?: any;
  // Image Box Tile Vertical Dimension
  '00720308'?: Element;
  ImageBoxTileVerticalDimension?: any;
  // Image Box Scroll Direction
  '00720310'?: Element;
  ImageBoxScrollDirection?: any;
  // Image Box Small Scroll Type
  '00720312'?: Element;
  ImageBoxSmallScrollType?: any;
  // Image Box Small Scroll Amount
  '00720314'?: Element;
  ImageBoxSmallScrollAmount?: any;
  // Image Box Large Scroll Type
  '00720316'?: Element;
  ImageBoxLargeScrollType?: any;
  // Image Box Large Scroll Amount
  '00720318'?: Element;
  ImageBoxLargeScrollAmount?: any;
  // Image Box Overlap Priority
  '00720320'?: Element;
  ImageBoxOverlapPriority?: any;
  // Cine Relative to Real-Time
  '00720330'?: Element;
  CineRelativeToRealTime?: any;
  // Filter Operations Sequence
  '00720400'?: Element;
  FilterOperationsSequence?: any;
  // Filter-by Category
  '00720402'?: Element;
  FilterByCategory?: any;
  // Filter-by Attribute Presence
  '00720404'?: Element;
  FilterByAttributePresence?: any;
  // Filter-by Operator
  '00720406'?: Element;
  FilterByOperator?: any;
  // Structured Display Background CIELab Value
  '00720420'?: Element;
  StructuredDisplayBackgroundCIELabValue?: any;
  // Empty Image Box CIELab Value
  '00720421'?: Element;
  EmptyImageBoxCIELabValue?: any;
  // Structured Display Image Box Sequence
  '00720422'?: Element;
  StructuredDisplayImageBoxSequence?: any;
  // Structured Display Text Box Sequence
  '00720424'?: Element;
  StructuredDisplayTextBoxSequence?: any;
  // Referenced First Frame Sequence
  '00720427'?: Element;
  ReferencedFirstFrameSequence?: any;
  // Image Box Synchronization Sequence
  '00720430'?: Element;
  ImageBoxSynchronizationSequence?: any;
  // Synchronized Image Box List
  '00720432'?: Element;
  SynchronizedImageBoxList?: any;
  // Type of Synchronization
  '00720434'?: Element;
  TypeOfSynchronization?: any;
  // Blending Operation Type
  '00720500'?: Element;
  BlendingOperationType?: any;
  // Reformatting Operation Type
  '00720510'?: Element;
  ReformattingOperationType?: any;
  // Reformatting Thickness
  '00720512'?: Element;
  ReformattingThickness?: any;
  // Reformatting Interval
  '00720514'?: Element;
  ReformattingInterval?: any;
  // Reformatting Operation Initial View Direction
  '00720516'?: Element;
  ReformattingOperationInitialViewDirection?: any;
  // 3D Rendering Type
  '00720520'?: Element;
  ThreeDRenderingType?: any;
  // Sorting Operations Sequence
  '00720600'?: Element;
  SortingOperationsSequence?: any;
  // Sort-by Category
  '00720602'?: Element;
  SortByCategory?: any;
  // Sorting Direction
  '00720604'?: Element;
  SortingDirection?: any;
  // Display Set Patient Orientation
  '00720700'?: Element;
  DisplaySetPatientOrientation?: any;
  // VOI Type
  '00720702'?: Element;
  VOIType?: any;
  // Pseudo-Color Type
  '00720704'?: Element;
  PseudoColorType?: any;
  // Pseudo-Color Palette Instance Reference Sequence
  '00720705'?: Element;
  PseudoColorPaletteInstanceReferenceSequence?: any;
  // Show Grayscale Inverted
  '00720706'?: Element;
  ShowGrayscaleInverted?: any;
  // Show Image True Size Flag
  '00720710'?: Element;
  ShowImageTrueSizeFlag?: any;
  // Show Graphic Annotation Flag
  '00720712'?: Element;
  ShowGraphicAnnotationFlag?: any;
  // Show Patient Demographics Flag
  '00720714'?: Element;
  ShowPatientDemographicsFlag?: any;
  // Show Acquisition Techniques Flag
  '00720716'?: Element;
  ShowAcquisitionTechniquesFlag?: any;
  // Display Set Horizontal Justification
  '00720717'?: Element;
  DisplaySetHorizontalJustification?: any;
  // Display Set Vertical Justification
  '00720718'?: Element;
  DisplaySetVerticalJustification?: any;
  // Continuation Start Meterset
  '00740120'?: Element;
  ContinuationStartMeterset?: any;
  // Continuation End Meterset
  '00740121'?: Element;
  ContinuationEndMeterset?: any;
  // Procedure Step State
  '00741000'?: Element;
  ProcedureStepState?: any;
  // Procedure Step Progress Information Sequence
  '00741002'?: Element;
  ProcedureStepProgressInformationSequence?: any;
  // Procedure Step Progress
  '00741004'?: Element;
  ProcedureStepProgress?: any;
  // Procedure Step Progress Description
  '00741006'?: Element;
  ProcedureStepProgressDescription?: any;
  // Procedure Step Communications URI Sequence
  '00741008'?: Element;
  ProcedureStepCommunicationsURISequence?: any;
  // Contact URI
  '0074100a'?: Element;
  ContactURI?: any;
  // Contact Display Name
  '0074100c'?: Element;
  ContactDisplayName?: any;
  // Procedure Step Discontinuation Reason Code Sequence
  '0074100e'?: Element;
  ProcedureStepDiscontinuationReasonCodeSequence?: any;
  // Beam Task Sequence
  '00741020'?: Element;
  BeamTaskSequence?: any;
  // Beam Task Type
  '00741022'?: Element;
  BeamTaskType?: any;
  // Beam Order Index (Trial)
  '00741024'?: Element;
  BeamOrderIndexTrial?: any;
  // Autosequence Flag
  '00741025'?: Element;
  AutosequenceFlag?: any;
  // Table Top Vertical Adjusted Position
  '00741026'?: Element;
  TableTopVerticalAdjustedPosition?: any;
  // Table Top Longitudinal Adjusted Position
  '00741027'?: Element;
  TableTopLongitudinalAdjustedPosition?: any;
  // Table Top Lateral Adjusted Position
  '00741028'?: Element;
  TableTopLateralAdjustedPosition?: any;
  // Patient Support Adjusted Angle
  '0074102A'?: Element;
  PatientSupportAdjustedAngle?: any;
  // Table Top Eccentric Adjusted Angle
  '0074102B'?: Element;
  TableTopEccentricAdjustedAngle?: any;
  // Table Top Pitch Adjusted Angle
  '0074102C'?: Element;
  TableTopPitchAdjustedAngle?: any;
  // Table Top Roll Adjusted Angle
  '0074102D'?: Element;
  TableTopRollAdjustedAngle?: any;
  // Delivery Verification Image Sequence
  '00741030'?: Element;
  DeliveryVerificationImageSequence?: any;
  // Verification Image Timing
  '00741032'?: Element;
  VerificationImageTiming?: any;
  // Double Exposure Flag
  '00741034'?: Element;
  DoubleExposureFlag?: any;
  // Double Exposure Ordering
  '00741036'?: Element;
  DoubleExposureOrdering?: any;
  // Double Exposure Meterset (Trial)
  '00741038'?: Element;
  DoubleExposureMetersetTrial?: any;
  // Double Exposure Field Delta (Trial)
  '0074103A'?: Element;
  DoubleExposureFieldDeltaTrial?: any;
  // Related Reference RT Image Sequence
  '00741040'?: Element;
  RelatedReferenceRTImageSequence?: any;
  // General Machine Verification Sequence
  '00741042'?: Element;
  GeneralMachineVerificationSequence?: any;
  // Conventional Machine Verification Sequence
  '00741044'?: Element;
  ConventionalMachineVerificationSequence?: any;
  // Ion Machine Verification Sequence
  '00741046'?: Element;
  IonMachineVerificationSequence?: any;
  // Failed Attributes Sequence
  '00741048'?: Element;
  FailedAttributesSequence?: any;
  // Overridden Attributes Sequence
  '0074104A'?: Element;
  OverriddenAttributesSequence?: any;
  // Conventional Control Point Verification Sequence
  '0074104C'?: Element;
  ConventionalControlPointVerificationSequence?: any;
  // Ion Control Point Verification Sequence
  '0074104E'?: Element;
  IonControlPointVerificationSequence?: any;
  // Attribute Occurrence Sequence
  '00741050'?: Element;
  AttributeOccurrenceSequence?: any;
  // Attribute Occurrence Pointer
  '00741052'?: Element;
  AttributeOccurrencePointer?: any;
  // Attribute Item Selector
  '00741054'?: Element;
  AttributeItemSelector?: any;
  // Attribute Occurrence Private Creator
  '00741056'?: Element;
  AttributeOccurrencePrivateCreator?: any;
  // Selector Sequence Pointer Items
  '00741057'?: Element;
  SelectorSequencePointerItems?: any;
  // Scheduled Procedure Step Priority
  '00741200'?: Element;
  ScheduledProcedureStepPriority?: any;
  // Worklist Label
  '00741202'?: Element;
  WorklistLabel?: any;
  // Procedure Step Label
  '00741204'?: Element;
  ProcedureStepLabel?: any;
  // Scheduled Processing Parameters Sequence
  '00741210'?: Element;
  ScheduledProcessingParametersSequence?: any;
  // Performed Processing Parameters Sequence
  '00741212'?: Element;
  PerformedProcessingParametersSequence?: any;
  // Unified Procedure Step Performed Procedure Sequence
  '00741216'?: Element;
  UnifiedProcedureStepPerformedProcedureSequence?: any;
  // Related Procedure Step Sequence
  '00741220'?: Element;
  RelatedProcedureStepSequence?: any;
  // Procedure Step Relationship Type
  '00741222'?: Element;
  ProcedureStepRelationshipType?: any;
  // Replaced Procedure Step Sequence
  '00741224'?: Element;
  ReplacedProcedureStepSequence?: any;
  // Deletion Lock
  '00741230'?: Element;
  DeletionLock?: any;
  // Receiving AE
  '00741234'?: Element;
  ReceivingAE?: any;
  // Requesting AE
  '00741236'?: Element;
  RequestingAE?: any;
  // Reason for Cancellation
  '00741238'?: Element;
  ReasonForCancellation?: any;
  // SCP Status
  '00741242'?: Element;
  SCPStatus?: any;
  // Subscription List Status
  '00741244'?: Element;
  SubscriptionListStatus?: any;
  // Unified Procedure Step List Status
  '00741246'?: Element;
  UnifiedProcedureStepListStatus?: any;
  // Beam Order Index
  '00741324'?: Element;
  BeamOrderIndex?: any;
  // Double Exposure Meterset
  '00741338'?: Element;
  DoubleExposureMeterset?: any;
  // Double Exposure Field Delta
  '0074133A'?: Element;
  DoubleExposureFieldDelta?: any;
  // Implant Assembly Template Name
  '00760001'?: Element;
  ImplantAssemblyTemplateName?: any;
  // Implant Assembly Template Issuer
  '00760003'?: Element;
  ImplantAssemblyTemplateIssuer?: any;
  // Implant Assembly Template Version
  '00760006'?: Element;
  ImplantAssemblyTemplateVersion?: any;
  // Replaced Implant Assembly Template Sequence
  '00760008'?: Element;
  ReplacedImplantAssemblyTemplateSequence?: any;
  // Implant Assembly Template Type
  '0076000A'?: Element;
  ImplantAssemblyTemplateType?: any;
  // Original Implant Assembly Template Sequence
  '0076000C'?: Element;
  OriginalImplantAssemblyTemplateSequence?: any;
  // Derivation Implant Assembly Template Sequence
  '0076000E'?: Element;
  DerivationImplantAssemblyTemplateSequence?: any;
  // Implant Assembly Template Target Anatomy Sequence
  '00760010'?: Element;
  ImplantAssemblyTemplateTargetAnatomySequence?: any;
  // Procedure Type Code Sequence
  '00760020'?: Element;
  ProcedureTypeCodeSequence?: any;
  // Surgical Technique
  '00760030'?: Element;
  SurgicalTechnique?: any;
  // Component Types Sequence
  '00760032'?: Element;
  ComponentTypesSequence?: any;
  // Component Type Code Sequence
  '00760034'?: Element;
  ComponentTypeCodeSequence?: any;
  // Exclusive Component Type
  '00760036'?: Element;
  ExclusiveComponentType?: any;
  // Mandatory Component Type
  '00760038'?: Element;
  MandatoryComponentType?: any;
  // Component Sequence
  '00760040'?: Element;
  ComponentSequence?: any;
  // Component ID
  '00760055'?: Element;
  ComponentID?: any;
  // Component Assembly Sequence
  '00760060'?: Element;
  ComponentAssemblySequence?: any;
  // Component 1 Referenced ID
  '00760070'?: Element;
  Component1ReferencedID?: any;
  // Component 1 Referenced Mating Feature Set ID
  '00760080'?: Element;
  Component1ReferencedMatingFeatureSetID?: any;
  // Component 1 Referenced Mating Feature ID
  '00760090'?: Element;
  Component1ReferencedMatingFeatureID?: any;
  // Component 2 Referenced ID
  '007600A0'?: Element;
  Component2ReferencedID?: any;
  // Component 2 Referenced Mating Feature Set ID
  '007600B0'?: Element;
  Component2ReferencedMatingFeatureSetID?: any;
  // Component 2 Referenced Mating Feature ID
  '007600C0'?: Element;
  Component2ReferencedMatingFeatureID?: any;
  // Implant Template Group Name
  '00780001'?: Element;
  ImplantTemplateGroupName?: any;
  // Implant Template Group Description
  '00780010'?: Element;
  ImplantTemplateGroupDescription?: any;
  // Implant Template Group Issuer
  '00780020'?: Element;
  ImplantTemplateGroupIssuer?: any;
  // Implant Template Group Version
  '00780024'?: Element;
  ImplantTemplateGroupVersion?: any;
  // Replaced Implant Template Group Sequence
  '00780026'?: Element;
  ReplacedImplantTemplateGroupSequence?: any;
  // Implant Template Group Target Anatomy Sequence
  '00780028'?: Element;
  ImplantTemplateGroupTargetAnatomySequence?: any;
  // Implant Template Group Members Sequence
  '0078002A'?: Element;
  ImplantTemplateGroupMembersSequence?: any;
  // Implant Template Group Member ID
  '0078002E'?: Element;
  ImplantTemplateGroupMemberID?: any;
  // 3D Implant Template Group Member Matching Point
  '00780050'?: Element;
  ThreeDImplantTemplateGroupMemberMatchingPoint?: any;
  // 3D Implant Template Group Member Matching Axes
  '00780060'?: Element;
  ThreeDImplantTemplateGroupMemberMatchingAxes?: any;
  // Implant Template Group Member Matching 2D Coordinates Sequence
  '00780070'?: Element;
  ImplantTemplateGroupMemberMatching2DCoordinatesSequence?: any;
  // 2D Implant Template Group Member Matching Point
  '00780090'?: Element;
  TwoDImplantTemplateGroupMemberMatchingPoint?: any;
  // 2D Implant Template Group Member Matching Axes
  '007800A0'?: Element;
  TwoDImplantTemplateGroupMemberMatchingAxes?: any;
  // Implant Template Group Variation Dimension Sequence
  '007800B0'?: Element;
  ImplantTemplateGroupVariationDimensionSequence?: any;
  // Implant Template Group Variation Dimension Name
  '007800B2'?: Element;
  ImplantTemplateGroupVariationDimensionName?: any;
  // Implant Template Group Variation Dimension Rank Sequence
  '007800B4'?: Element;
  ImplantTemplateGroupVariationDimensionRankSequence?: any;
  // Referenced Implant Template Group Member ID
  '007800B6'?: Element;
  ReferencedImplantTemplateGroupMemberID?: any;
  // Implant Template Group Variation Dimension Rank
  '007800B8'?: Element;
  ImplantTemplateGroupVariationDimensionRank?: any;
  // Surface Scan Acquisition Type Code Sequence
  '00800001'?: Element;
  SurfaceScanAcquisitionTypeCodeSequence?: any;
  // Surface Scan Mode Code Sequence
  '00800002'?: Element;
  SurfaceScanModeCodeSequence?: any;
  // Registration Method Code Sequence
  '00800003'?: Element;
  RegistrationMethodCodeSequence?: any;
  // Shot Duration Time
  '00800004'?: Element;
  ShotDurationTime?: any;
  // Shot Offset Time
  '00800005'?: Element;
  ShotOffsetTime?: any;
  // Surface Point Presentation Value Data
  '00800006'?: Element;
  SurfacePointPresentationValueData?: any;
  // Surface Point Color CIELab Value Data
  '00800007'?: Element;
  SurfacePointColorCIELabValueData?: any;
  // UV Mapping Sequence
  '00800008'?: Element;
  UVMappingSequence?: any;
  // Texture Label
  '00800009'?: Element;
  TextureLabel?: any;
  // U Value Data
  '00800010'?: Element;
  UValueData?: any;
  // V Value Data
  '00800011'?: Element;
  VValueData?: any;
  // Referenced Texture Sequence
  '00800012'?: Element;
  ReferencedTextureSequence?: any;
  // Referenced Surface Data Sequence
  '00800013'?: Element;
  ReferencedSurfaceDataSequence?: any;
  // Storage Media File-set ID
  '00880130'?: Element;
  StorageMediaFileSetID?: any;
  // Storage Media File-set UID
  '00880140'?: Element;
  StorageMediaFileSetUID?: any;
  // Icon Image Sequence
  '00880200'?: Element;
  IconImageSequence?: any;
  // Topic Title
  '00880904'?: Element;
  TopicTitle?: any;
  // Topic Subject
  '00880906'?: Element;
  TopicSubject?: any;
  // Topic Author
  '00880910'?: Element;
  TopicAuthor?: any;
  // Topic Keywords
  '00880912'?: Element;
  TopicKeywords?: any;
  // SOP Instance Status
  '01000410'?: Element;
  SOPInstanceStatus?: any;
  // SOP Authorization DateTime
  '01000420'?: Element;
  SOPAuthorizationDateTime?: any;
  // SOP Authorization Comment
  '01000424'?: Element;
  SOPAuthorizationComment?: any;
  // Authorization Equipment Certification Number
  '01000426'?: Element;
  AuthorizationEquipmentCertificationNumber?: any;
  // MAC ID Number
  '04000005'?: Element;
  MACIDNumber?: any;
  // MAC Calculation Transfer Syntax UID
  '04000010'?: Element;
  MACCalculationTransferSyntaxUID?: any;
  // MAC Algorithm
  '04000015'?: Element;
  MACAlgorithm?: any;
  // Data Elements Signed
  '04000020'?: Element;
  DataElementsSigned?: any;
  // Digital Signature UID
  '04000100'?: Element;
  DigitalSignatureUID?: any;
  // Digital Signature DateTime
  '04000105'?: Element;
  DigitalSignatureDateTime?: any;
  // Certificate Type
  '04000110'?: Element;
  CertificateType?: any;
  // Certificate of Signer
  '04000115'?: Element;
  CertificateOfSigner?: any;
  // Signature
  '04000120'?: Element;
  Signature?: any;
  // Certified Timestamp Type
  '04000305'?: Element;
  CertifiedTimestampType?: any;
  // Certified Timestamp
  '04000310'?: Element;
  CertifiedTimestamp?: any;
  // Digital Signature Purpose Code Sequence
  '04000401'?: Element;
  DigitalSignaturePurposeCodeSequence?: any;
  // Referenced Digital Signature Sequence
  '04000402'?: Element;
  ReferencedDigitalSignatureSequence?: any;
  // Referenced SOP Instance MAC Sequence
  '04000403'?: Element;
  ReferencedSOPInstanceMACSequence?: any;
  // MAC
  '04000404'?: Element;
  MAC?: any;
  // Encrypted Attributes Sequence
  '04000500'?: Element;
  EncryptedAttributesSequence?: any;
  // Encrypted Content Transfer Syntax UID
  '04000510'?: Element;
  EncryptedContentTransferSyntaxUID?: any;
  // Encrypted Content
  '04000520'?: Element;
  EncryptedContent?: any;
  // Modified Attributes Sequence
  '04000550'?: Element;
  ModifiedAttributesSequence?: any;
  // Original Attributes Sequence
  '04000561'?: Element;
  OriginalAttributesSequence?: any;
  // Attribute Modification DateTime
  '04000562'?: Element;
  AttributeModificationDateTime?: any;
  // Modifying System
  '04000563'?: Element;
  ModifyingSystem?: any;
  // Source of Previous Values
  '04000564'?: Element;
  SourceOfPreviousValues?: any;
  // Reason for the Attribute Modification
  '04000565'?: Element;
  ReasonForTheAttributeModification?: any;
  // Escape Triplet
  '1000xxx0'?: Element;
  EscapeTriplet?: any;
  // Run Length Triplet
  '1000xxx1'?: Element;
  RunLengthTriplet?: any;
  // Huffman Table Size
  '1000xxx2'?: Element;
  HuffmanTableSize?: any;
  // Huffman Table Triplet
  '1000xxx3'?: Element;
  HuffmanTableTriplet?: any;
  // Shift Table Size
  '1000xxx4'?: Element;
  ShiftTableSize?: any;
  // Shift Table Triplet
  '1000xxx5'?: Element;
  ShiftTableTriplet?: any;
  // Zonal Map
  '1010xxxx'?: Element;
  ZonalMap?: any;
  // Number of Copies
  '20000010'?: Element;
  NumberOfCopies?: any;
  // Printer Configuration Sequence
  '2000001E'?: Element;
  PrinterConfigurationSequence?: any;
  // Print Priority
  '20000020'?: Element;
  PrintPriority?: any;
  // Medium Type
  '20000030'?: Element;
  MediumType?: any;
  // Film Destination
  '20000040'?: Element;
  FilmDestination?: any;
  // Film Session Label
  '20000050'?: Element;
  FilmSessionLabel?: any;
  // Memory Allocation
  '20000060'?: Element;
  MemoryAllocation?: any;
  // Maximum Memory Allocation
  '20000061'?: Element;
  MaximumMemoryAllocation?: any;
  // Color Image Printing Flag
  '20000062'?: Element;
  ColorImagePrintingFlag?: any;
  // Collation Flag
  '20000063'?: Element;
  CollationFlag?: any;
  // Annotation Flag
  '20000065'?: Element;
  AnnotationFlag?: any;
  // Image Overlay Flag
  '20000067'?: Element;
  ImageOverlayFlag?: any;
  // Presentation LUT Flag
  '20000069'?: Element;
  PresentationLUTFlag?: any;
  // Image Box Presentation LUT Flag
  '2000006A'?: Element;
  ImageBoxPresentationLUTFlag?: any;
  // Memory Bit Depth
  '200000A0'?: Element;
  MemoryBitDepth?: any;
  // Printing Bit Depth
  '200000A1'?: Element;
  PrintingBitDepth?: any;
  // Media Installed Sequence
  '200000A2'?: Element;
  MediaInstalledSequence?: any;
  // Other Media Available Sequence
  '200000A4'?: Element;
  OtherMediaAvailableSequence?: any;
  // Supported Image Display Formats Sequence
  '200000A8'?: Element;
  SupportedImageDisplayFormatsSequence?: any;
  // Referenced Film Box Sequence
  '20000500'?: Element;
  ReferencedFilmBoxSequence?: any;
  // Referenced Stored Print Sequence
  '20000510'?: Element;
  ReferencedStoredPrintSequence?: any;
  // Image Display Format
  '20100010'?: Element;
  ImageDisplayFormat?: any;
  // Annotation Display Format ID
  '20100030'?: Element;
  AnnotationDisplayFormatID?: any;
  // Film Orientation
  '20100040'?: Element;
  FilmOrientation?: any;
  // Film Size ID
  '20100050'?: Element;
  FilmSizeID?: any;
  // Printer Resolution ID
  '20100052'?: Element;
  PrinterResolutionID?: any;
  // Default Printer Resolution ID
  '20100054'?: Element;
  DefaultPrinterResolutionID?: any;
  // Magnification Type
  '20100060'?: Element;
  MagnificationType?: any;
  // Smoothing Type
  '20100080'?: Element;
  SmoothingType?: any;
  // Default Magnification Type
  '201000A6'?: Element;
  DefaultMagnificationType?: any;
  // Other Magnification Types Available
  '201000A7'?: Element;
  OtherMagnificationTypesAvailable?: any;
  // Default Smoothing Type
  '201000A8'?: Element;
  DefaultSmoothingType?: any;
  // Other Smoothing Types Available
  '201000A9'?: Element;
  OtherSmoothingTypesAvailable?: any;
  // Border Density
  '20100100'?: Element;
  BorderDensity?: any;
  // Empty Image Density
  '20100110'?: Element;
  EmptyImageDensity?: any;
  // Min Density
  '20100120'?: Element;
  MinDensity?: any;
  // Max Density
  '20100130'?: Element;
  MaxDensity?: any;
  // Trim
  '20100140'?: Element;
  Trim?: any;
  // Configuration Information
  '20100150'?: Element;
  ConfigurationInformation?: any;
  // Configuration Information Description
  '20100152'?: Element;
  ConfigurationInformationDescription?: any;
  // Maximum Collated Films
  '20100154'?: Element;
  MaximumCollatedFilms?: any;
  // Illumination
  '2010015E'?: Element;
  Illumination?: any;
  // Reflected Ambient Light
  '20100160'?: Element;
  ReflectedAmbientLight?: any;
  // Printer Pixel Spacing
  '20100376'?: Element;
  PrinterPixelSpacing?: any;
  // Referenced Film Session Sequence
  '20100500'?: Element;
  ReferencedFilmSessionSequence?: any;
  // Referenced Image Box Sequence
  '20100510'?: Element;
  ReferencedImageBoxSequence?: any;
  // Referenced Basic Annotation Box Sequence
  '20100520'?: Element;
  ReferencedBasicAnnotationBoxSequence?: any;
  // Image Box Position
  '20200010'?: Element;
  ImageBoxPosition?: any;
  // Polarity
  '20200020'?: Element;
  Polarity?: any;
  // Requested Image Size
  '20200030'?: Element;
  RequestedImageSize?: any;
  // Requested Decimate/Crop Behavior
  '20200040'?: Element;
  RequestedDecimateCropBehavior?: any;
  // Requested Resolution ID
  '20200050'?: Element;
  RequestedResolutionID?: any;
  // Requested Image Size Flag
  '202000A0'?: Element;
  RequestedImageSizeFlag?: any;
  // Decimate/Crop Result
  '202000A2'?: Element;
  DecimateCropResult?: any;
  // Basic Grayscale Image Sequence
  '20200110'?: Element;
  BasicGrayscaleImageSequence?: any;
  // Basic Color Image Sequence
  '20200111'?: Element;
  BasicColorImageSequence?: any;
  // Referenced Image Overlay Box Sequence
  '20200130'?: Element;
  ReferencedImageOverlayBoxSequence?: any;
  // Referenced VOI LUT Box Sequence
  '20200140'?: Element;
  ReferencedVOILUTBoxSequence?: any;
  // Annotation Position
  '20300010'?: Element;
  AnnotationPosition?: any;
  // Text String
  '20300020'?: Element;
  TextString?: any;
  // Referenced Overlay Plane Sequence
  '20400010'?: Element;
  ReferencedOverlayPlaneSequence?: any;
  // Referenced Overlay Plane Groups
  '20400011'?: Element;
  ReferencedOverlayPlaneGroups?: any;
  // Overlay Pixel Data Sequence
  '20400020'?: Element;
  OverlayPixelDataSequence?: any;
  // Overlay Magnification Type
  '20400060'?: Element;
  OverlayMagnificationType?: any;
  // Overlay Smoothing Type
  '20400070'?: Element;
  OverlaySmoothingType?: any;
  // Overlay or Image Magnification
  '20400072'?: Element;
  OverlayOrImageMagnification?: any;
  // Magnify to Number of Columns
  '20400074'?: Element;
  MagnifyToNumberOfColumns?: any;
  // Overlay Foreground Density
  '20400080'?: Element;
  OverlayForegroundDensity?: any;
  // Overlay Background Density
  '20400082'?: Element;
  OverlayBackgroundDensity?: any;
  // Overlay Mode
  '20400090'?: Element;
  OverlayMode?: any;
  // Threshold Density
  '20400100'?: Element;
  ThresholdDensity?: any;
  // Referenced Image Box Sequence (Retired)
  '20400500'?: Element;
  ReferencedImageBoxSequenceRetired?: any;
  // Presentation LUT Sequence
  '20500010'?: Element;
  PresentationLUTSequence?: any;
  // Presentation LUT Shape
  '20500020'?: Element;
  PresentationLUTShape?: any;
  // Referenced Presentation LUT Sequence
  '20500500'?: Element;
  ReferencedPresentationLUTSequence?: any;
  // Print Job ID
  '21000010'?: Element;
  PrintJobID?: any;
  // Execution Status
  '21000020'?: Element;
  ExecutionStatus?: any;
  // Execution Status Info
  '21000030'?: Element;
  ExecutionStatusInfo?: any;
  // Creation Date
  '21000040'?: Element;
  CreationDate?: any;
  // Creation Time
  '21000050'?: Element;
  CreationTime?: any;
  // Originator
  '21000070'?: Element;
  Originator?: any;
  // Destination AE
  '21000140'?: Element;
  DestinationAE?: any;
  // Owner ID
  '21000160'?: Element;
  OwnerID?: any;
  // Number of Films
  '21000170'?: Element;
  NumberOfFilms?: any;
  // Referenced Print Job Sequence (Pull Stored Print)
  '21000500'?: Element;
  ReferencedPrintJobSequencePullStoredPrint?: any;
  // Printer Status
  '21100010'?: Element;
  PrinterStatus?: any;
  // Printer Status Info
  '21100020'?: Element;
  PrinterStatusInfo?: any;
  // Printer Name
  '21100030'?: Element;
  PrinterName?: any;
  // Print Queue ID
  '21100099'?: Element;
  PrintQueueID?: any;
  // Queue Status
  '21200010'?: Element;
  QueueStatus?: any;
  // Print Job Description Sequence
  '21200050'?: Element;
  PrintJobDescriptionSequence?: any;
  // Referenced Print Job Sequence
  '21200070'?: Element;
  ReferencedPrintJobSequence?: any;
  // Print Management Capabilities Sequence
  '21300010'?: Element;
  PrintManagementCapabilitiesSequence?: any;
  // Printer Characteristics Sequence
  '21300015'?: Element;
  PrinterCharacteristicsSequence?: any;
  // Film Box Content Sequence
  '21300030'?: Element;
  FilmBoxContentSequence?: any;
  // Image Box Content Sequence
  '21300040'?: Element;
  ImageBoxContentSequence?: any;
  // Annotation Content Sequence
  '21300050'?: Element;
  AnnotationContentSequence?: any;
  // Image Overlay Box Content Sequence
  '21300060'?: Element;
  ImageOverlayBoxContentSequence?: any;
  // Presentation LUT Content Sequence
  '21300080'?: Element;
  PresentationLUTContentSequence?: any;
  // Proposed Study Sequence
  '213000A0'?: Element;
  ProposedStudySequence?: any;
  // Original Image Sequence
  '213000C0'?: Element;
  OriginalImageSequence?: any;
  // Label Using Information Extracted From Instances
  '22000001'?: Element;
  LabelUsingInformationExtractedFromInstances?: any;
  // Label Text
  '22000002'?: Element;
  LabelText?: any;
  // Label Style Selection
  '22000003'?: Element;
  LabelStyleSelection?: any;
  // Media Disposition
  '22000004'?: Element;
  MediaDisposition?: any;
  // Barcode Value
  '22000005'?: Element;
  BarcodeValue?: any;
  // Barcode Symbology
  '22000006'?: Element;
  BarcodeSymbology?: any;
  // Allow Media Splitting
  '22000007'?: Element;
  AllowMediaSplitting?: any;
  // Include Non-DICOM Objects
  '22000008'?: Element;
  IncludeNonDICOMObjects?: any;
  // Include Display Application
  '22000009'?: Element;
  IncludeDisplayApplication?: any;
  // Preserve Composite Instances After Media Creation
  '2200000A'?: Element;
  PreserveCompositeInstancesAfterMediaCreation?: any;
  // Total Number of Pieces of Media Created
  '2200000B'?: Element;
  TotalNumberOfPiecesOfMediaCreated?: any;
  // Requested Media Application Profile
  '2200000C'?: Element;
  RequestedMediaApplicationProfile?: any;
  // Referenced Storage Media Sequence
  '2200000D'?: Element;
  ReferencedStorageMediaSequence?: any;
  // Failure Attributes
  '2200000E'?: Element;
  FailureAttributes?: any;
  // Allow Lossy Compression
  '2200000F'?: Element;
  AllowLossyCompression?: any;
  // Request Priority
  '22000020'?: Element;
  RequestPriority?: any;
  // RT Image Label
  '30020002'?: Element;
  RTImageLabel?: any;
  // RT Image Name
  '30020003'?: Element;
  RTImageName?: any;
  // RT Image Description
  '30020004'?: Element;
  RTImageDescription?: any;
  // Reported Values Origin
  '3002000A'?: Element;
  ReportedValuesOrigin?: any;
  // RT Image Plane
  '3002000C'?: Element;
  RTImagePlane?: any;
  // X-Ray Image Receptor Translation
  '3002000D'?: Element;
  XRayImageReceptorTranslation?: any;
  // X-Ray Image Receptor Angle
  '3002000E'?: Element;
  XRayImageReceptorAngle?: any;
  // RT Image Orientation
  '30020010'?: Element;
  RTImageOrientation?: any;
  // Image Plane Pixel Spacing
  '30020011'?: Element;
  ImagePlanePixelSpacing?: any;
  // RT Image Position
  '30020012'?: Element;
  RTImagePosition?: any;
  // Radiation Machine Name
  '30020020'?: Element;
  RadiationMachineName?: any;
  // Radiation Machine SAD
  '30020022'?: Element;
  RadiationMachineSAD?: any;
  // Radiation Machine SSD
  '30020024'?: Element;
  RadiationMachineSSD?: any;
  // RT Image SID
  '30020026'?: Element;
  RTImageSID?: any;
  // Source to Reference Object Distance
  '30020028'?: Element;
  SourceToReferenceObjectDistance?: any;
  // Fraction Number
  '30020029'?: Element;
  FractionNumber?: any;
  // Exposure Sequence
  '30020030'?: Element;
  ExposureSequence?: any;
  // Meterset Exposure
  '30020032'?: Element;
  MetersetExposure?: any;
  // Diaphragm Position
  '30020034'?: Element;
  DiaphragmPosition?: any;
  // Fluence Map Sequence
  '30020040'?: Element;
  FluenceMapSequence?: any;
  // Fluence Data Source
  '30020041'?: Element;
  FluenceDataSource?: any;
  // Fluence Data Scale
  '30020042'?: Element;
  FluenceDataScale?: any;
  // Primary Fluence Mode Sequence
  '30020050'?: Element;
  PrimaryFluenceModeSequence?: any;
  // Fluence Mode
  '30020051'?: Element;
  FluenceMode?: any;
  // Fluence Mode ID
  '30020052'?: Element;
  FluenceModeID?: any;
  // DVH Type
  '30040001'?: Element;
  DVHType?: any;
  // Dose Units
  '30040002'?: Element;
  DoseUnits?: any;
  // Dose Type
  '30040004'?: Element;
  DoseType?: any;
  // Spatial Transform of Dose
  '30040005'?: Element;
  SpatialTransformOfDose?: any;
  // Dose Comment
  '30040006'?: Element;
  DoseComment?: any;
  // Normalization Point
  '30040008'?: Element;
  NormalizationPoint?: any;
  // Dose Summation Type
  '3004000A'?: Element;
  DoseSummationType?: any;
  // Grid Frame Offset Vector
  '3004000C'?: Element;
  GridFrameOffsetVector?: any;
  // Dose Grid Scaling
  '3004000E'?: Element;
  DoseGridScaling?: any;
  // RT Dose ROI Sequence
  '30040010'?: Element;
  RTDoseROISequence?: any;
  // Dose Value
  '30040012'?: Element;
  DoseValue?: any;
  // Tissue Heterogeneity Correction
  '30040014'?: Element;
  TissueHeterogeneityCorrection?: any;
  // DVH Normalization Point
  '30040040'?: Element;
  DVHNormalizationPoint?: any;
  // DVH Normalization Dose Value
  '30040042'?: Element;
  DVHNormalizationDoseValue?: any;
  // DVH Sequence
  '30040050'?: Element;
  DVHSequence?: any;
  // DVH Dose Scaling
  '30040052'?: Element;
  DVHDoseScaling?: any;
  // DVH Volume Units
  '30040054'?: Element;
  DVHVolumeUnits?: any;
  // DVH Number of Bins
  '30040056'?: Element;
  DVHNumberOfBins?: any;
  // DVH Data
  '30040058'?: Element;
  DVHData?: any;
  // DVH Referenced ROI Sequence
  '30040060'?: Element;
  DVHReferencedROISequence?: any;
  // DVH ROI Contribution Type
  '30040062'?: Element;
  DVHROIContributionType?: any;
  // DVH Minimum Dose
  '30040070'?: Element;
  DVHMinimumDose?: any;
  // DVH Maximum Dose
  '30040072'?: Element;
  DVHMaximumDose?: any;
  // DVH Mean Dose
  '30040074'?: Element;
  DVHMeanDose?: any;
  // Structure Set Label
  '30060002'?: Element;
  StructureSetLabel?: any;
  // Structure Set Name
  '30060004'?: Element;
  StructureSetName?: any;
  // Structure Set Description
  '30060006'?: Element;
  StructureSetDescription?: any;
  // Structure Set Date
  '30060008'?: Element;
  StructureSetDate?: any;
  // Structure Set Time
  '30060009'?: Element;
  StructureSetTime?: any;
  // Referenced Frame of Reference Sequence
  '30060010'?: Element;
  ReferencedFrameOfReferenceSequence?: any;
  // RT Referenced Study Sequence
  '30060012'?: Element;
  RTReferencedStudySequence?: any;
  // RT Referenced Series Sequence
  '30060014'?: Element;
  RTReferencedSeriesSequence?: any;
  // Contour Image Sequence
  '30060016'?: Element;
  ContourImageSequence?: any;
  // Predecessor Structure Set Sequence
  '30060018'?: Element;
  PredecessorStructureSetSequence?: any;
  // Structure Set ROI Sequence
  '30060020'?: Element;
  StructureSetROISequence?: any;
  // ROI Number
  '30060022'?: Element;
  ROINumber?: any;
  // Referenced Frame of Reference UID
  '30060024'?: Element;
  ReferencedFrameOfReferenceUID?: any;
  // ROI Name
  '30060026'?: Element;
  ROIName?: any;
  // ROI Description
  '30060028'?: Element;
  ROIDescription?: any;
  // ROI Display Color
  '3006002A'?: Element;
  ROIDisplayColor?: any;
  // ROI Volume
  '3006002C'?: Element;
  ROIVolume?: any;
  // RT Related ROI Sequence
  '30060030'?: Element;
  RTRelatedROISequence?: any;
  // RT ROI Relationship
  '30060033'?: Element;
  RTROIRelationship?: any;
  // ROI Generation Algorithm
  '30060036'?: Element;
  ROIGenerationAlgorithm?: any;
  // ROI Generation Description
  '30060038'?: Element;
  ROIGenerationDescription?: any;
  // ROI Contour Sequence
  '30060039'?: Element;
  ROIContourSequence?: any;
  // Contour Sequence
  '30060040'?: Element;
  ContourSequence?: any;
  // Contour Geometric Type
  '30060042'?: Element;
  ContourGeometricType?: any;
  // Contour Slab Thickness
  '30060044'?: Element;
  ContourSlabThickness?: any;
  // Contour Offset Vector
  '30060045'?: Element;
  ContourOffsetVector?: any;
  // Number of Contour Points
  '30060046'?: Element;
  NumberOfContourPoints?: any;
  // Contour Number
  '30060048'?: Element;
  ContourNumber?: any;
  // Attached Contours
  '30060049'?: Element;
  AttachedContours?: any;
  // Contour Data
  '30060050'?: Element;
  ContourData?: any;
  // RT ROI Observations Sequence
  '30060080'?: Element;
  RTROIObservationsSequence?: any;
  // Observation Number
  '30060082'?: Element;
  ObservationNumber?: any;
  // Referenced ROI Number
  '30060084'?: Element;
  ReferencedROINumber?: any;
  // ROI Observation Label
  '30060085'?: Element;
  ROIObservationLabel?: any;
  // RT ROI Identification Code Sequence
  '30060086'?: Element;
  RTROIIdentificationCodeSequence?: any;
  // ROI Observation Description
  '30060088'?: Element;
  ROIObservationDescription?: any;
  // Related RT ROI Observations Sequence
  '300600A0'?: Element;
  RelatedRTROIObservationsSequence?: any;
  // RT ROI Interpreted Type
  '300600A4'?: Element;
  RTROIInterpretedType?: any;
  // ROI Interpreter
  '300600A6'?: Element;
  ROIInterpreter?: any;
  // ROI Physical Properties Sequence
  '300600B0'?: Element;
  ROIPhysicalPropertiesSequence?: any;
  // ROI Physical Property
  '300600B2'?: Element;
  ROIPhysicalProperty?: any;
  // ROI Physical Property Value
  '300600B4'?: Element;
  ROIPhysicalPropertyValue?: any;
  // ROI Elemental Composition Sequence
  '300600B6'?: Element;
  ROIElementalCompositionSequence?: any;
  // ROI Elemental Composition Atomic Number
  '300600B7'?: Element;
  ROIElementalCompositionAtomicNumber?: any;
  // ROI Elemental Composition Atomic Mass Fraction
  '300600B8'?: Element;
  ROIElementalCompositionAtomicMassFraction?: any;
  // Additional RT ROI Identification Code Sequence
  '300600B9'?: Element;
  AdditionalRTROIIdentificationCodeSequence?: any;
  // Frame of Reference Relationship Sequence
  '300600C0'?: Element;
  FrameOfReferenceRelationshipSequence?: any;
  // Related Frame of Reference UID
  '300600C2'?: Element;
  RelatedFrameOfReferenceUID?: any;
  // Frame of Reference Transformation Type
  '300600C4'?: Element;
  FrameOfReferenceTransformationType?: any;
  // Frame of Reference Transformation Matrix
  '300600C6'?: Element;
  FrameOfReferenceTransformationMatrix?: any;
  // Frame of Reference Transformation Comment
  '300600C8'?: Element;
  FrameOfReferenceTransformationComment?: any;
  // Measured Dose Reference Sequence
  '30080010'?: Element;
  MeasuredDoseReferenceSequence?: any;
  // Measured Dose Description
  '30080012'?: Element;
  MeasuredDoseDescription?: any;
  // Measured Dose Type
  '30080014'?: Element;
  MeasuredDoseType?: any;
  // Measured Dose Value
  '30080016'?: Element;
  MeasuredDoseValue?: any;
  // Treatment Session Beam Sequence
  '30080020'?: Element;
  TreatmentSessionBeamSequence?: any;
  // Treatment Session Ion Beam Sequence
  '30080021'?: Element;
  TreatmentSessionIonBeamSequence?: any;
  // Current Fraction Number
  '30080022'?: Element;
  CurrentFractionNumber?: any;
  // Treatment Control Point Date
  '30080024'?: Element;
  TreatmentControlPointDate?: any;
  // Treatment Control Point Time
  '30080025'?: Element;
  TreatmentControlPointTime?: any;
  // Treatment Termination Status
  '3008002A'?: Element;
  TreatmentTerminationStatus?: any;
  // Treatment Termination Code
  '3008002B'?: Element;
  TreatmentTerminationCode?: any;
  // Treatment Verification Status
  '3008002C'?: Element;
  TreatmentVerificationStatus?: any;
  // Referenced Treatment Record Sequence
  '30080030'?: Element;
  ReferencedTreatmentRecordSequence?: any;
  // Specified Primary Meterset
  '30080032'?: Element;
  SpecifiedPrimaryMeterset?: any;
  // Specified Secondary Meterset
  '30080033'?: Element;
  SpecifiedSecondaryMeterset?: any;
  // Delivered Primary Meterset
  '30080036'?: Element;
  DeliveredPrimaryMeterset?: any;
  // Delivered Secondary Meterset
  '30080037'?: Element;
  DeliveredSecondaryMeterset?: any;
  // Specified Treatment Time
  '3008003A'?: Element;
  SpecifiedTreatmentTime?: any;
  // Delivered Treatment Time
  '3008003B'?: Element;
  DeliveredTreatmentTime?: any;
  // Control Point Delivery Sequence
  '30080040'?: Element;
  ControlPointDeliverySequence?: any;
  // Ion Control Point Delivery Sequence
  '30080041'?: Element;
  IonControlPointDeliverySequence?: any;
  // Specified Meterset
  '30080042'?: Element;
  SpecifiedMeterset?: any;
  // Delivered Meterset
  '30080044'?: Element;
  DeliveredMeterset?: any;
  // Meterset Rate Set
  '30080045'?: Element;
  MetersetRateSet?: any;
  // Meterset Rate Delivered
  '30080046'?: Element;
  MetersetRateDelivered?: any;
  // Scan Spot Metersets Delivered
  '30080047'?: Element;
  ScanSpotMetersetsDelivered?: any;
  // Dose Rate Delivered
  '30080048'?: Element;
  DoseRateDelivered?: any;
  // Treatment Summary Calculated Dose Reference Sequence
  '30080050'?: Element;
  TreatmentSummaryCalculatedDoseReferenceSequence?: any;
  // Cumulative Dose to Dose Reference
  '30080052'?: Element;
  CumulativeDoseToDoseReference?: any;
  // First Treatment Date
  '30080054'?: Element;
  FirstTreatmentDate?: any;
  // Most Recent Treatment Date
  '30080056'?: Element;
  MostRecentTreatmentDate?: any;
  // Number of Fractions Delivered
  '3008005A'?: Element;
  NumberOfFractionsDelivered?: any;
  // Override Sequence
  '30080060'?: Element;
  OverrideSequence?: any;
  // Parameter Sequence Pointer
  '30080061'?: Element;
  ParameterSequencePointer?: any;
  // Override Parameter Pointer
  '30080062'?: Element;
  OverrideParameterPointer?: any;
  // Parameter Item Index
  '30080063'?: Element;
  ParameterItemIndex?: any;
  // Measured Dose Reference Number
  '30080064'?: Element;
  MeasuredDoseReferenceNumber?: any;
  // Parameter Pointer
  '30080065'?: Element;
  ParameterPointer?: any;
  // Override Reason
  '30080066'?: Element;
  OverrideReason?: any;
  // Corrected Parameter Sequence
  '30080068'?: Element;
  CorrectedParameterSequence?: any;
  // Correction Value
  '3008006A'?: Element;
  CorrectionValue?: any;
  // Calculated Dose Reference Sequence
  '30080070'?: Element;
  CalculatedDoseReferenceSequence?: any;
  // Calculated Dose Reference Number
  '30080072'?: Element;
  CalculatedDoseReferenceNumber?: any;
  // Calculated Dose Reference Description
  '30080074'?: Element;
  CalculatedDoseReferenceDescription?: any;
  // Calculated Dose Reference Dose Value
  '30080076'?: Element;
  CalculatedDoseReferenceDoseValue?: any;
  // Start Meterset
  '30080078'?: Element;
  StartMeterset?: any;
  // End Meterset
  '3008007A'?: Element;
  EndMeterset?: any;
  // Referenced Measured Dose Reference Sequence
  '30080080'?: Element;
  ReferencedMeasuredDoseReferenceSequence?: any;
  // Referenced Measured Dose Reference Number
  '30080082'?: Element;
  ReferencedMeasuredDoseReferenceNumber?: any;
  // Referenced Calculated Dose Reference Sequence
  '30080090'?: Element;
  ReferencedCalculatedDoseReferenceSequence?: any;
  // Referenced Calculated Dose Reference Number
  '30080092'?: Element;
  ReferencedCalculatedDoseReferenceNumber?: any;
  // Beam Limiting Device Leaf Pairs Sequence
  '300800A0'?: Element;
  BeamLimitingDeviceLeafPairsSequence?: any;
  // Recorded Wedge Sequence
  '300800B0'?: Element;
  RecordedWedgeSequence?: any;
  // Recorded Compensator Sequence
  '300800C0'?: Element;
  RecordedCompensatorSequence?: any;
  // Recorded Block Sequence
  '300800D0'?: Element;
  RecordedBlockSequence?: any;
  // Treatment Summary Measured Dose Reference Sequence
  '300800E0'?: Element;
  TreatmentSummaryMeasuredDoseReferenceSequence?: any;
  // Recorded Snout Sequence
  '300800F0'?: Element;
  RecordedSnoutSequence?: any;
  // Recorded Range Shifter Sequence
  '300800F2'?: Element;
  RecordedRangeShifterSequence?: any;
  // Recorded Lateral Spreading Device Sequence
  '300800F4'?: Element;
  RecordedLateralSpreadingDeviceSequence?: any;
  // Recorded Range Modulator Sequence
  '300800F6'?: Element;
  RecordedRangeModulatorSequence?: any;
  // Recorded Source Sequence
  '30080100'?: Element;
  RecordedSourceSequence?: any;
  // Source Serial Number
  '30080105'?: Element;
  SourceSerialNumber?: any;
  // Treatment Session Application Setup Sequence
  '30080110'?: Element;
  TreatmentSessionApplicationSetupSequence?: any;
  // Application Setup Check
  '30080116'?: Element;
  ApplicationSetupCheck?: any;
  // Recorded Brachy Accessory Device Sequence
  '30080120'?: Element;
  RecordedBrachyAccessoryDeviceSequence?: any;
  // Referenced Brachy Accessory Device Number
  '30080122'?: Element;
  ReferencedBrachyAccessoryDeviceNumber?: any;
  // Recorded Channel Sequence
  '30080130'?: Element;
  RecordedChannelSequence?: any;
  // Specified Channel Total Time
  '30080132'?: Element;
  SpecifiedChannelTotalTime?: any;
  // Delivered Channel Total Time
  '30080134'?: Element;
  DeliveredChannelTotalTime?: any;
  // Specified Number of Pulses
  '30080136'?: Element;
  SpecifiedNumberOfPulses?: any;
  // Delivered Number of Pulses
  '30080138'?: Element;
  DeliveredNumberOfPulses?: any;
  // Specified Pulse Repetition Interval
  '3008013A'?: Element;
  SpecifiedPulseRepetitionInterval?: any;
  // Delivered Pulse Repetition Interval
  '3008013C'?: Element;
  DeliveredPulseRepetitionInterval?: any;
  // Recorded Source Applicator Sequence
  '30080140'?: Element;
  RecordedSourceApplicatorSequence?: any;
  // Referenced Source Applicator Number
  '30080142'?: Element;
  ReferencedSourceApplicatorNumber?: any;
  // Recorded Channel Shield Sequence
  '30080150'?: Element;
  RecordedChannelShieldSequence?: any;
  // Referenced Channel Shield Number
  '30080152'?: Element;
  ReferencedChannelShieldNumber?: any;
  // Brachy Control Point Delivered Sequence
  '30080160'?: Element;
  BrachyControlPointDeliveredSequence?: any;
  // Safe Position Exit Date
  '30080162'?: Element;
  SafePositionExitDate?: any;
  // Safe Position Exit Time
  '30080164'?: Element;
  SafePositionExitTime?: any;
  // Safe Position Return Date
  '30080166'?: Element;
  SafePositionReturnDate?: any;
  // Safe Position Return Time
  '30080168'?: Element;
  SafePositionReturnTime?: any;
  // Pulse Specific Brachy Control Point Delivered Sequence
  '30080171'?: Element;
  PulseSpecificBrachyControlPointDeliveredSequence?: any;
  // Pulse Number
  '30080172'?: Element;
  PulseNumber?: any;
  // Brachy Pulse Control Point Delivered Sequence
  '30080173'?: Element;
  BrachyPulseControlPointDeliveredSequence?: any;
  // Current Treatment Status
  '30080200'?: Element;
  CurrentTreatmentStatus?: any;
  // Treatment Status Comment
  '30080202'?: Element;
  TreatmentStatusComment?: any;
  // Fraction Group Summary Sequence
  '30080220'?: Element;
  FractionGroupSummarySequence?: any;
  // Referenced Fraction Number
  '30080223'?: Element;
  ReferencedFractionNumber?: any;
  // Fraction Group Type
  '30080224'?: Element;
  FractionGroupType?: any;
  // Beam Stopper Position
  '30080230'?: Element;
  BeamStopperPosition?: any;
  // Fraction Status Summary Sequence
  '30080240'?: Element;
  FractionStatusSummarySequence?: any;
  // Treatment Date
  '30080250'?: Element;
  TreatmentDate?: any;
  // Treatment Time
  '30080251'?: Element;
  TreatmentTime?: any;
  // RT Plan Label
  '300A0002'?: Element;
  RTPlanLabel?: any;
  // RT Plan Name
  '300A0003'?: Element;
  RTPlanName?: any;
  // RT Plan Description
  '300A0004'?: Element;
  RTPlanDescription?: any;
  // RT Plan Date
  '300A0006'?: Element;
  RTPlanDate?: any;
  // RT Plan Time
  '300A0007'?: Element;
  RTPlanTime?: any;
  // Treatment Protocols
  '300A0009'?: Element;
  TreatmentProtocols?: any;
  // Plan Intent
  '300A000A'?: Element;
  PlanIntent?: any;
  // Treatment Sites
  '300A000B'?: Element;
  TreatmentSites?: any;
  // RT Plan Geometry
  '300A000C'?: Element;
  RTPlanGeometry?: any;
  // Prescription Description
  '300A000E'?: Element;
  PrescriptionDescription?: any;
  // Dose Reference Sequence
  '300A0010'?: Element;
  DoseReferenceSequence?: any;
  // Dose Reference Number
  '300A0012'?: Element;
  DoseReferenceNumber?: any;
  // Dose Reference UID
  '300A0013'?: Element;
  DoseReferenceUID?: any;
  // Dose Reference Structure Type
  '300A0014'?: Element;
  DoseReferenceStructureType?: any;
  // Nominal Beam Energy Unit
  '300A0015'?: Element;
  NominalBeamEnergyUnit?: any;
  // Dose Reference Description
  '300A0016'?: Element;
  DoseReferenceDescription?: any;
  // Dose Reference Point Coordinates
  '300A0018'?: Element;
  DoseReferencePointCoordinates?: any;
  // Nominal Prior Dose
  '300A001A'?: Element;
  NominalPriorDose?: any;
  // Dose Reference Type
  '300A0020'?: Element;
  DoseReferenceType?: any;
  // Constraint Weight
  '300A0021'?: Element;
  ConstraintWeight?: any;
  // Delivery Warning Dose
  '300A0022'?: Element;
  DeliveryWarningDose?: any;
  // Delivery Maximum Dose
  '300A0023'?: Element;
  DeliveryMaximumDose?: any;
  // Target Minimum Dose
  '300A0025'?: Element;
  TargetMinimumDose?: any;
  // Target Prescription Dose
  '300A0026'?: Element;
  TargetPrescriptionDose?: any;
  // Target Maximum Dose
  '300A0027'?: Element;
  TargetMaximumDose?: any;
  // Target Underdose Volume Fraction
  '300A0028'?: Element;
  TargetUnderdoseVolumeFraction?: any;
  // Organ at Risk Full-volume Dose
  '300A002A'?: Element;
  OrganAtRiskFullVolumeDose?: any;
  // Organ at Risk Limit Dose
  '300A002B'?: Element;
  OrganAtRiskLimitDose?: any;
  // Organ at Risk Maximum Dose
  '300A002C'?: Element;
  OrganAtRiskMaximumDose?: any;
  // Organ at Risk Overdose Volume Fraction
  '300A002D'?: Element;
  OrganAtRiskOverdoseVolumeFraction?: any;
  // Tolerance Table Sequence
  '300A0040'?: Element;
  ToleranceTableSequence?: any;
  // Tolerance Table Number
  '300A0042'?: Element;
  ToleranceTableNumber?: any;
  // Tolerance Table Label
  '300A0043'?: Element;
  ToleranceTableLabel?: any;
  // Gantry Angle Tolerance
  '300A0044'?: Element;
  GantryAngleTolerance?: any;
  // Beam Limiting Device Angle Tolerance
  '300A0046'?: Element;
  BeamLimitingDeviceAngleTolerance?: any;
  // Beam Limiting Device Tolerance Sequence
  '300A0048'?: Element;
  BeamLimitingDeviceToleranceSequence?: any;
  // Beam Limiting Device Position Tolerance
  '300A004A'?: Element;
  BeamLimitingDevicePositionTolerance?: any;
  // Snout Position Tolerance
  '300A004B'?: Element;
  SnoutPositionTolerance?: any;
  // Patient Support Angle Tolerance
  '300A004C'?: Element;
  PatientSupportAngleTolerance?: any;
  // Table Top Eccentric Angle Tolerance
  '300A004E'?: Element;
  TableTopEccentricAngleTolerance?: any;
  // Table Top Pitch Angle Tolerance
  '300A004F'?: Element;
  TableTopPitchAngleTolerance?: any;
  // Table Top Roll Angle Tolerance
  '300A0050'?: Element;
  TableTopRollAngleTolerance?: any;
  // Table Top Vertical Position Tolerance
  '300A0051'?: Element;
  TableTopVerticalPositionTolerance?: any;
  // Table Top Longitudinal Position Tolerance
  '300A0052'?: Element;
  TableTopLongitudinalPositionTolerance?: any;
  // Table Top Lateral Position Tolerance
  '300A0053'?: Element;
  TableTopLateralPositionTolerance?: any;
  // RT Plan Relationship
  '300A0055'?: Element;
  RTPlanRelationship?: any;
  // Fraction Group Sequence
  '300A0070'?: Element;
  FractionGroupSequence?: any;
  // Fraction Group Number
  '300A0071'?: Element;
  FractionGroupNumber?: any;
  // Fraction Group Description
  '300A0072'?: Element;
  FractionGroupDescription?: any;
  // Number of Fractions Planned
  '300A0078'?: Element;
  NumberOfFractionsPlanned?: any;
  // Number of Fraction Pattern Digits Per Day
  '300A0079'?: Element;
  NumberOfFractionPatternDigitsPerDay?: any;
  // Repeat Fraction Cycle Length
  '300A007A'?: Element;
  RepeatFractionCycleLength?: any;
  // Fraction Pattern
  '300A007B'?: Element;
  FractionPattern?: any;
  // Number of Beams
  '300A0080'?: Element;
  NumberOfBeams?: any;
  // Beam Dose Specification Point
  '300A0082'?: Element;
  BeamDoseSpecificationPoint?: any;
  // Beam Dose
  '300A0084'?: Element;
  BeamDose?: any;
  // Beam Meterset
  '300A0086'?: Element;
  BeamMeterset?: any;
  // Beam Dose Point Depth
  '300A0088'?: Element;
  BeamDosePointDepth?: any;
  // Beam Dose Point Equivalent Depth
  '300A0089'?: Element;
  BeamDosePointEquivalentDepth?: any;
  // Beam Dose Point SSD
  '300A008A'?: Element;
  BeamDosePointSSD?: any;
  // Beam Dose Meaning
  '300A008B'?: Element;
  BeamDoseMeaning?: any;
  // Beam Dose Verification Control Point Sequence
  '300A008C'?: Element;
  BeamDoseVerificationControlPointSequence?: any;
  // Average Beam Dose Point Depth
  '300A008D'?: Element;
  AverageBeamDosePointDepth?: any;
  // Average Beam Dose Point Equivalent Depth
  '300A008E'?: Element;
  AverageBeamDosePointEquivalentDepth?: any;
  // Average Beam Dose Point SSD
  '300A008F'?: Element;
  AverageBeamDosePointSSD?: any;
  // Number of Brachy Application Setups
  '300A00A0'?: Element;
  NumberOfBrachyApplicationSetups?: any;
  // Brachy Application Setup Dose Specification Point
  '300A00A2'?: Element;
  BrachyApplicationSetupDoseSpecificationPoint?: any;
  // Brachy Application Setup Dose
  '300A00A4'?: Element;
  BrachyApplicationSetupDose?: any;
  // Beam Sequence
  '300A00B0'?: Element;
  BeamSequence?: any;
  // Treatment Machine Name
  '300A00B2'?: Element;
  TreatmentMachineName?: any;
  // Primary Dosimeter Unit
  '300A00B3'?: Element;
  PrimaryDosimeterUnit?: any;
  // Source-Axis Distance
  '300A00B4'?: Element;
  SourceAxisDistance?: any;
  // Beam Limiting Device Sequence
  '300A00B6'?: Element;
  BeamLimitingDeviceSequence?: any;
  // RT Beam Limiting Device Type
  '300A00B8'?: Element;
  RTBeamLimitingDeviceType?: any;
  // Source to Beam Limiting Device Distance
  '300A00BA'?: Element;
  SourceToBeamLimitingDeviceDistance?: any;
  // Isocenter to Beam Limiting Device Distance
  '300A00BB'?: Element;
  IsocenterToBeamLimitingDeviceDistance?: any;
  // Number of Leaf/Jaw Pairs
  '300A00BC'?: Element;
  NumberOfLeafJawPairs?: any;
  // Leaf Position Boundaries
  '300A00BE'?: Element;
  LeafPositionBoundaries?: any;
  // Beam Number
  '300A00C0'?: Element;
  BeamNumber?: any;
  // Beam Name
  '300A00C2'?: Element;
  BeamName?: any;
  // Beam Description
  '300A00C3'?: Element;
  BeamDescription?: any;
  // Beam Type
  '300A00C4'?: Element;
  BeamType?: any;
  // Beam Delivery Duration Limit
  '300A00C5'?: Element;
  BeamDeliveryDurationLimit?: any;
  // Radiation Type
  '300A00C6'?: Element;
  RadiationType?: any;
  // High-Dose Technique Type
  '300A00C7'?: Element;
  HighDoseTechniqueType?: any;
  // Reference Image Number
  '300A00C8'?: Element;
  ReferenceImageNumber?: any;
  // Planned Verification Image Sequence
  '300A00CA'?: Element;
  PlannedVerificationImageSequence?: any;
  // Imaging Device-Specific Acquisition Parameters
  '300A00CC'?: Element;
  ImagingDeviceSpecificAcquisitionParameters?: any;
  // Treatment Delivery Type
  '300A00CE'?: Element;
  TreatmentDeliveryType?: any;
  // Number of Wedges
  '300A00D0'?: Element;
  NumberOfWedges?: any;
  // Wedge Sequence
  '300A00D1'?: Element;
  WedgeSequence?: any;
  // Wedge Number
  '300A00D2'?: Element;
  WedgeNumber?: any;
  // Wedge Type
  '300A00D3'?: Element;
  WedgeType?: any;
  // Wedge ID
  '300A00D4'?: Element;
  WedgeID?: any;
  // Wedge Angle
  '300A00D5'?: Element;
  WedgeAngle?: any;
  // Wedge Factor
  '300A00D6'?: Element;
  WedgeFactor?: any;
  // Total Wedge Tray Water-Equivalent Thickness
  '300A00D7'?: Element;
  TotalWedgeTrayWaterEquivalentThickness?: any;
  // Wedge Orientation
  '300A00D8'?: Element;
  WedgeOrientation?: any;
  // Isocenter to Wedge Tray Distance
  '300A00D9'?: Element;
  IsocenterToWedgeTrayDistance?: any;
  // Source to Wedge Tray Distance
  '300A00DA'?: Element;
  SourceToWedgeTrayDistance?: any;
  // Wedge Thin Edge Position
  '300A00DB'?: Element;
  WedgeThinEdgePosition?: any;
  // Bolus ID
  '300A00DC'?: Element;
  BolusID?: any;
  // Bolus Description
  '300A00DD'?: Element;
  BolusDescription?: any;
  // Number of Compensators
  '300A00E0'?: Element;
  NumberOfCompensators?: any;
  // Material ID
  '300A00E1'?: Element;
  MaterialID?: any;
  // Total Compensator Tray Factor
  '300A00E2'?: Element;
  TotalCompensatorTrayFactor?: any;
  // Compensator Sequence
  '300A00E3'?: Element;
  CompensatorSequence?: any;
  // Compensator Number
  '300A00E4'?: Element;
  CompensatorNumber?: any;
  // Compensator ID
  '300A00E5'?: Element;
  CompensatorID?: any;
  // Source to Compensator Tray Distance
  '300A00E6'?: Element;
  SourceToCompensatorTrayDistance?: any;
  // Compensator Rows
  '300A00E7'?: Element;
  CompensatorRows?: any;
  // Compensator Columns
  '300A00E8'?: Element;
  CompensatorColumns?: any;
  // Compensator Pixel Spacing
  '300A00E9'?: Element;
  CompensatorPixelSpacing?: any;
  // Compensator Position
  '300A00EA'?: Element;
  CompensatorPosition?: any;
  // Compensator Transmission Data
  '300A00EB'?: Element;
  CompensatorTransmissionData?: any;
  // Compensator Thickness Data
  '300A00EC'?: Element;
  CompensatorThicknessData?: any;
  // Number of Boli
  '300A00ED'?: Element;
  NumberOfBoli?: any;
  // Compensator Type
  '300A00EE'?: Element;
  CompensatorType?: any;
  // Compensator Tray ID
  '300A00EF'?: Element;
  CompensatorTrayID?: any;
  // Number of Blocks
  '300A00F0'?: Element;
  NumberOfBlocks?: any;
  // Total Block Tray Factor
  '300A00F2'?: Element;
  TotalBlockTrayFactor?: any;
  // Total Block Tray Water-Equivalent Thickness
  '300A00F3'?: Element;
  TotalBlockTrayWaterEquivalentThickness?: any;
  // Block Sequence
  '300A00F4'?: Element;
  BlockSequence?: any;
  // Block Tray ID
  '300A00F5'?: Element;
  BlockTrayID?: any;
  // Source to Block Tray Distance
  '300A00F6'?: Element;
  SourceToBlockTrayDistance?: any;
  // Isocenter to Block Tray Distance
  '300A00F7'?: Element;
  IsocenterToBlockTrayDistance?: any;
  // Block Type
  '300A00F8'?: Element;
  BlockType?: any;
  // Accessory Code
  '300A00F9'?: Element;
  AccessoryCode?: any;
  // Block Divergence
  '300A00FA'?: Element;
  BlockDivergence?: any;
  // Block Mounting Position
  '300A00FB'?: Element;
  BlockMountingPosition?: any;
  // Block Number
  '300A00FC'?: Element;
  BlockNumber?: any;
  // Block Name
  '300A00FE'?: Element;
  BlockName?: any;
  // Block Thickness
  '300A0100'?: Element;
  BlockThickness?: any;
  // Block Transmission
  '300A0102'?: Element;
  BlockTransmission?: any;
  // Block Number of Points
  '300A0104'?: Element;
  BlockNumberOfPoints?: any;
  // Block Data
  '300A0106'?: Element;
  BlockData?: any;
  // Applicator Sequence
  '300A0107'?: Element;
  ApplicatorSequence?: any;
  // Applicator ID
  '300A0108'?: Element;
  ApplicatorID?: any;
  // Applicator Type
  '300A0109'?: Element;
  ApplicatorType?: any;
  // Applicator Description
  '300A010A'?: Element;
  ApplicatorDescription?: any;
  // Cumulative Dose Reference Coefficient
  '300A010C'?: Element;
  CumulativeDoseReferenceCoefficient?: any;
  // Final Cumulative Meterset Weight
  '300A010E'?: Element;
  FinalCumulativeMetersetWeight?: any;
  // Number of Control Points
  '300A0110'?: Element;
  NumberOfControlPoints?: any;
  // Control Point Sequence
  '300A0111'?: Element;
  ControlPointSequence?: any;
  // Control Point Index
  '300A0112'?: Element;
  ControlPointIndex?: any;
  // Nominal Beam Energy
  '300A0114'?: Element;
  NominalBeamEnergy?: any;
  // Dose Rate Set
  '300A0115'?: Element;
  DoseRateSet?: any;
  // Wedge Position Sequence
  '300A0116'?: Element;
  WedgePositionSequence?: any;
  // Wedge Position
  '300A0118'?: Element;
  WedgePosition?: any;
  // Beam Limiting Device Position Sequence
  '300A011A'?: Element;
  BeamLimitingDevicePositionSequence?: any;
  // Leaf/Jaw Positions
  '300A011C'?: Element;
  LeafJawPositions?: any;
  // Gantry Angle
  '300A011E'?: Element;
  GantryAngle?: any;
  // Gantry Rotation Direction
  '300A011F'?: Element;
  GantryRotationDirection?: any;
  // Beam Limiting Device Angle
  '300A0120'?: Element;
  BeamLimitingDeviceAngle?: any;
  // Beam Limiting Device Rotation Direction
  '300A0121'?: Element;
  BeamLimitingDeviceRotationDirection?: any;
  // Patient Support Angle
  '300A0122'?: Element;
  PatientSupportAngle?: any;
  // Patient Support Rotation Direction
  '300A0123'?: Element;
  PatientSupportRotationDirection?: any;
  // Table Top Eccentric Axis Distance
  '300A0124'?: Element;
  TableTopEccentricAxisDistance?: any;
  // Table Top Eccentric Angle
  '300A0125'?: Element;
  TableTopEccentricAngle?: any;
  // Table Top Eccentric Rotation Direction
  '300A0126'?: Element;
  TableTopEccentricRotationDirection?: any;
  // Table Top Vertical Position
  '300A0128'?: Element;
  TableTopVerticalPosition?: any;
  // Table Top Longitudinal Position
  '300A0129'?: Element;
  TableTopLongitudinalPosition?: any;
  // Table Top Lateral Position
  '300A012A'?: Element;
  TableTopLateralPosition?: any;
  // Isocenter Position
  '300A012C'?: Element;
  IsocenterPosition?: any;
  // Surface Entry Point
  '300A012E'?: Element;
  SurfaceEntryPoint?: any;
  // Source to Surface Distance
  '300A0130'?: Element;
  SourceToSurfaceDistance?: any;
  // Cumulative Meterset Weight
  '300A0134'?: Element;
  CumulativeMetersetWeight?: any;
  // Table Top Pitch Angle
  '300A0140'?: Element;
  TableTopPitchAngle?: any;
  // Table Top Pitch Rotation Direction
  '300A0142'?: Element;
  TableTopPitchRotationDirection?: any;
  // Table Top Roll Angle
  '300A0144'?: Element;
  TableTopRollAngle?: any;
  // Table Top Roll Rotation Direction
  '300A0146'?: Element;
  TableTopRollRotationDirection?: any;
  // Head Fixation Angle
  '300A0148'?: Element;
  HeadFixationAngle?: any;
  // Gantry Pitch Angle
  '300A014A'?: Element;
  GantryPitchAngle?: any;
  // Gantry Pitch Rotation Direction
  '300A014C'?: Element;
  GantryPitchRotationDirection?: any;
  // Gantry Pitch Angle Tolerance
  '300A014E'?: Element;
  GantryPitchAngleTolerance?: any;
  // Patient Setup Sequence
  '300A0180'?: Element;
  PatientSetupSequence?: any;
  // Patient Setup Number
  '300A0182'?: Element;
  PatientSetupNumber?: any;
  // Patient Setup Label
  '300A0183'?: Element;
  PatientSetupLabel?: any;
  // Patient Additional Position
  '300A0184'?: Element;
  PatientAdditionalPosition?: any;
  // Fixation Device Sequence
  '300A0190'?: Element;
  FixationDeviceSequence?: any;
  // Fixation Device Type
  '300A0192'?: Element;
  FixationDeviceType?: any;
  // Fixation Device Label
  '300A0194'?: Element;
  FixationDeviceLabel?: any;
  // Fixation Device Description
  '300A0196'?: Element;
  FixationDeviceDescription?: any;
  // Fixation Device Position
  '300A0198'?: Element;
  FixationDevicePosition?: any;
  // Fixation Device Pitch Angle
  '300A0199'?: Element;
  FixationDevicePitchAngle?: any;
  // Fixation Device Roll Angle
  '300A019A'?: Element;
  FixationDeviceRollAngle?: any;
  // Shielding Device Sequence
  '300A01A0'?: Element;
  ShieldingDeviceSequence?: any;
  // Shielding Device Type
  '300A01A2'?: Element;
  ShieldingDeviceType?: any;
  // Shielding Device Label
  '300A01A4'?: Element;
  ShieldingDeviceLabel?: any;
  // Shielding Device Description
  '300A01A6'?: Element;
  ShieldingDeviceDescription?: any;
  // Shielding Device Position
  '300A01A8'?: Element;
  ShieldingDevicePosition?: any;
  // Setup Technique
  '300A01B0'?: Element;
  SetupTechnique?: any;
  // Setup Technique Description
  '300A01B2'?: Element;
  SetupTechniqueDescription?: any;
  // Setup Device Sequence
  '300A01B4'?: Element;
  SetupDeviceSequence?: any;
  // Setup Device Type
  '300A01B6'?: Element;
  SetupDeviceType?: any;
  // Setup Device Label
  '300A01B8'?: Element;
  SetupDeviceLabel?: any;
  // Setup Device Description
  '300A01BA'?: Element;
  SetupDeviceDescription?: any;
  // Setup Device Parameter
  '300A01BC'?: Element;
  SetupDeviceParameter?: any;
  // Setup Reference Description
  '300A01D0'?: Element;
  SetupReferenceDescription?: any;
  // Table Top Vertical Setup Displacement
  '300A01D2'?: Element;
  TableTopVerticalSetupDisplacement?: any;
  // Table Top Longitudinal Setup Displacement
  '300A01D4'?: Element;
  TableTopLongitudinalSetupDisplacement?: any;
  // Table Top Lateral Setup Displacement
  '300A01D6'?: Element;
  TableTopLateralSetupDisplacement?: any;
  // Brachy Treatment Technique
  '300A0200'?: Element;
  BrachyTreatmentTechnique?: any;
  // Brachy Treatment Type
  '300A0202'?: Element;
  BrachyTreatmentType?: any;
  // Treatment Machine Sequence
  '300A0206'?: Element;
  TreatmentMachineSequence?: any;
  // Source Sequence
  '300A0210'?: Element;
  SourceSequence?: any;
  // Source Number
  '300A0212'?: Element;
  SourceNumber?: any;
  // Source Type
  '300A0214'?: Element;
  SourceType?: any;
  // Source Manufacturer
  '300A0216'?: Element;
  SourceManufacturer?: any;
  // Active Source Diameter
  '300A0218'?: Element;
  ActiveSourceDiameter?: any;
  // Active Source Length
  '300A021A'?: Element;
  ActiveSourceLength?: any;
  // Source Model ID
  '300A021B'?: Element;
  SourceModelID?: any;
  // Source Description
  '300A021C'?: Element;
  SourceDescription?: any;
  // Source Encapsulation Nominal Thickness
  '300A0222'?: Element;
  SourceEncapsulationNominalThickness?: any;
  // Source Encapsulation Nominal Transmission
  '300A0224'?: Element;
  SourceEncapsulationNominalTransmission?: any;
  // Source Isotope Name
  '300A0226'?: Element;
  SourceIsotopeName?: any;
  // Source Isotope Half Life
  '300A0228'?: Element;
  SourceIsotopeHalfLife?: any;
  // Source Strength Units
  '300A0229'?: Element;
  SourceStrengthUnits?: any;
  // Reference Air Kerma Rate
  '300A022A'?: Element;
  ReferenceAirKermaRate?: any;
  // Source Strength
  '300A022B'?: Element;
  SourceStrength?: any;
  // Source Strength Reference Date
  '300A022C'?: Element;
  SourceStrengthReferenceDate?: any;
  // Source Strength Reference Time
  '300A022E'?: Element;
  SourceStrengthReferenceTime?: any;
  // Application Setup Sequence
  '300A0230'?: Element;
  ApplicationSetupSequence?: any;
  // Application Setup Type
  '300A0232'?: Element;
  ApplicationSetupType?: any;
  // Application Setup Number
  '300A0234'?: Element;
  ApplicationSetupNumber?: any;
  // Application Setup Name
  '300A0236'?: Element;
  ApplicationSetupName?: any;
  // Application Setup Manufacturer
  '300A0238'?: Element;
  ApplicationSetupManufacturer?: any;
  // Template Number
  '300A0240'?: Element;
  TemplateNumber?: any;
  // Template Type
  '300A0242'?: Element;
  TemplateType?: any;
  // Template Name
  '300A0244'?: Element;
  TemplateName?: any;
  // Total Reference Air Kerma
  '300A0250'?: Element;
  TotalReferenceAirKerma?: any;
  // Brachy Accessory Device Sequence
  '300A0260'?: Element;
  BrachyAccessoryDeviceSequence?: any;
  // Brachy Accessory Device Number
  '300A0262'?: Element;
  BrachyAccessoryDeviceNumber?: any;
  // Brachy Accessory Device ID
  '300A0263'?: Element;
  BrachyAccessoryDeviceID?: any;
  // Brachy Accessory Device Type
  '300A0264'?: Element;
  BrachyAccessoryDeviceType?: any;
  // Brachy Accessory Device Name
  '300A0266'?: Element;
  BrachyAccessoryDeviceName?: any;
  // Brachy Accessory Device Nominal Thickness
  '300A026A'?: Element;
  BrachyAccessoryDeviceNominalThickness?: any;
  // Brachy Accessory Device Nominal Transmission
  '300A026C'?: Element;
  BrachyAccessoryDeviceNominalTransmission?: any;
  // Channel Sequence
  '300A0280'?: Element;
  ChannelSequence?: any;
  // Channel Number
  '300A0282'?: Element;
  ChannelNumber?: any;
  // Channel Length
  '300A0284'?: Element;
  ChannelLength?: any;
  // Channel Total Time
  '300A0286'?: Element;
  ChannelTotalTime?: any;
  // Source Movement Type
  '300A0288'?: Element;
  SourceMovementType?: any;
  // Number of Pulses
  '300A028A'?: Element;
  NumberOfPulses?: any;
  // Pulse Repetition Interval
  '300A028C'?: Element;
  PulseRepetitionInterval?: any;
  // Source Applicator Number
  '300A0290'?: Element;
  SourceApplicatorNumber?: any;
  // Source Applicator ID
  '300A0291'?: Element;
  SourceApplicatorID?: any;
  // Source Applicator Type
  '300A0292'?: Element;
  SourceApplicatorType?: any;
  // Source Applicator Name
  '300A0294'?: Element;
  SourceApplicatorName?: any;
  // Source Applicator Length
  '300A0296'?: Element;
  SourceApplicatorLength?: any;
  // Source Applicator Manufacturer
  '300A0298'?: Element;
  SourceApplicatorManufacturer?: any;
  // Source Applicator Wall Nominal Thickness
  '300A029C'?: Element;
  SourceApplicatorWallNominalThickness?: any;
  // Source Applicator Wall Nominal Transmission
  '300A029E'?: Element;
  SourceApplicatorWallNominalTransmission?: any;
  // Source Applicator Step Size
  '300A02A0'?: Element;
  SourceApplicatorStepSize?: any;
  // Transfer Tube Number
  '300A02A2'?: Element;
  TransferTubeNumber?: any;
  // Transfer Tube Length
  '300A02A4'?: Element;
  TransferTubeLength?: any;
  // Channel Shield Sequence
  '300A02B0'?: Element;
  ChannelShieldSequence?: any;
  // Channel Shield Number
  '300A02B2'?: Element;
  ChannelShieldNumber?: any;
  // Channel Shield ID
  '300A02B3'?: Element;
  ChannelShieldID?: any;
  // Channel Shield Name
  '300A02B4'?: Element;
  ChannelShieldName?: any;
  // Channel Shield Nominal Thickness
  '300A02B8'?: Element;
  ChannelShieldNominalThickness?: any;
  // Channel Shield Nominal Transmission
  '300A02BA'?: Element;
  ChannelShieldNominalTransmission?: any;
  // Final Cumulative Time Weight
  '300A02C8'?: Element;
  FinalCumulativeTimeWeight?: any;
  // Brachy Control Point Sequence
  '300A02D0'?: Element;
  BrachyControlPointSequence?: any;
  // Control Point Relative Position
  '300A02D2'?: Element;
  ControlPointRelativePosition?: any;
  // Control Point 3D Position
  '300A02D4'?: Element;
  ControlPoint3DPosition?: any;
  // Cumulative Time Weight
  '300A02D6'?: Element;
  CumulativeTimeWeight?: any;
  // Compensator Divergence
  '300A02E0'?: Element;
  CompensatorDivergence?: any;
  // Compensator Mounting Position
  '300A02E1'?: Element;
  CompensatorMountingPosition?: any;
  // Source to Compensator Distance
  '300A02E2'?: Element;
  SourceToCompensatorDistance?: any;
  // Total Compensator Tray Water-Equivalent Thickness
  '300A02E3'?: Element;
  TotalCompensatorTrayWaterEquivalentThickness?: any;
  // Isocenter to Compensator Tray Distance
  '300A02E4'?: Element;
  IsocenterToCompensatorTrayDistance?: any;
  // Compensator Column Offset
  '300A02E5'?: Element;
  CompensatorColumnOffset?: any;
  // Isocenter to Compensator Distances
  '300A02E6'?: Element;
  IsocenterToCompensatorDistances?: any;
  // Compensator Relative Stopping Power Ratio
  '300A02E7'?: Element;
  CompensatorRelativeStoppingPowerRatio?: any;
  // Compensator Milling Tool Diameter
  '300A02E8'?: Element;
  CompensatorMillingToolDiameter?: any;
  // Ion Range Compensator Sequence
  '300A02EA'?: Element;
  IonRangeCompensatorSequence?: any;
  // Compensator Description
  '300A02EB'?: Element;
  CompensatorDescription?: any;
  // Radiation Mass Number
  '300A0302'?: Element;
  RadiationMassNumber?: any;
  // Radiation Atomic Number
  '300A0304'?: Element;
  RadiationAtomicNumber?: any;
  // Radiation Charge State
  '300A0306'?: Element;
  RadiationChargeState?: any;
  // Scan Mode
  '300A0308'?: Element;
  ScanMode?: any;
  // Virtual Source-Axis Distances
  '300A030A'?: Element;
  VirtualSourceAxisDistances?: any;
  // Snout Sequence
  '300A030C'?: Element;
  SnoutSequence?: any;
  // Snout Position
  '300A030D'?: Element;
  SnoutPosition?: any;
  // Snout ID
  '300A030F'?: Element;
  SnoutID?: any;
  // Number of Range Shifters
  '300A0312'?: Element;
  NumberOfRangeShifters?: any;
  // Range Shifter Sequence
  '300A0314'?: Element;
  RangeShifterSequence?: any;
  // Range Shifter Number
  '300A0316'?: Element;
  RangeShifterNumber?: any;
  // Range Shifter ID
  '300A0318'?: Element;
  RangeShifterID?: any;
  // Range Shifter Type
  '300A0320'?: Element;
  RangeShifterType?: any;
  // Range Shifter Description
  '300A0322'?: Element;
  RangeShifterDescription?: any;
  // Number of Lateral Spreading Devices
  '300A0330'?: Element;
  NumberOfLateralSpreadingDevices?: any;
  // Lateral Spreading Device Sequence
  '300A0332'?: Element;
  LateralSpreadingDeviceSequence?: any;
  // Lateral Spreading Device Number
  '300A0334'?: Element;
  LateralSpreadingDeviceNumber?: any;
  // Lateral Spreading Device ID
  '300A0336'?: Element;
  LateralSpreadingDeviceID?: any;
  // Lateral Spreading Device Type
  '300A0338'?: Element;
  LateralSpreadingDeviceType?: any;
  // Lateral Spreading Device Description
  '300A033A'?: Element;
  LateralSpreadingDeviceDescription?: any;
  // Lateral Spreading Device Water Equivalent Thickness
  '300A033C'?: Element;
  LateralSpreadingDeviceWaterEquivalentThickness?: any;
  // Number of Range Modulators
  '300A0340'?: Element;
  NumberOfRangeModulators?: any;
  // Range Modulator Sequence
  '300A0342'?: Element;
  RangeModulatorSequence?: any;
  // Range Modulator Number
  '300A0344'?: Element;
  RangeModulatorNumber?: any;
  // Range Modulator ID
  '300A0346'?: Element;
  RangeModulatorID?: any;
  // Range Modulator Type
  '300A0348'?: Element;
  RangeModulatorType?: any;
  // Range Modulator Description
  '300A034A'?: Element;
  RangeModulatorDescription?: any;
  // Beam Current Modulation ID
  '300A034C'?: Element;
  BeamCurrentModulationID?: any;
  // Patient Support Type
  '300A0350'?: Element;
  PatientSupportType?: any;
  // Patient Support ID
  '300A0352'?: Element;
  PatientSupportID?: any;
  // Patient Support Accessory Code
  '300A0354'?: Element;
  PatientSupportAccessoryCode?: any;
  // Fixation Light Azimuthal Angle
  '300A0356'?: Element;
  FixationLightAzimuthalAngle?: any;
  // Fixation Light Polar Angle
  '300A0358'?: Element;
  FixationLightPolarAngle?: any;
  // Meterset Rate
  '300A035A'?: Element;
  MetersetRate?: any;
  // Range Shifter Settings Sequence
  '300A0360'?: Element;
  RangeShifterSettingsSequence?: any;
  // Range Shifter Setting
  '300A0362'?: Element;
  RangeShifterSetting?: any;
  // Isocenter to Range Shifter Distance
  '300A0364'?: Element;
  IsocenterToRangeShifterDistance?: any;
  // Range Shifter Water Equivalent Thickness
  '300A0366'?: Element;
  RangeShifterWaterEquivalentThickness?: any;
  // Lateral Spreading Device Settings Sequence
  '300A0370'?: Element;
  LateralSpreadingDeviceSettingsSequence?: any;
  // Lateral Spreading Device Setting
  '300A0372'?: Element;
  LateralSpreadingDeviceSetting?: any;
  // Isocenter to Lateral Spreading Device Distance
  '300A0374'?: Element;
  IsocenterToLateralSpreadingDeviceDistance?: any;
  // Range Modulator Settings Sequence
  '300A0380'?: Element;
  RangeModulatorSettingsSequence?: any;
  // Range Modulator Gating Start Value
  '300A0382'?: Element;
  RangeModulatorGatingStartValue?: any;
  // Range Modulator Gating Stop Value
  '300A0384'?: Element;
  RangeModulatorGatingStopValue?: any;
  // Range Modulator Gating Start Water Equivalent Thickness
  '300A0386'?: Element;
  RangeModulatorGatingStartWaterEquivalentThickness?: any;
  // Range Modulator Gating Stop Water Equivalent Thickness
  '300A0388'?: Element;
  RangeModulatorGatingStopWaterEquivalentThickness?: any;
  // Isocenter to Range Modulator Distance
  '300A038A'?: Element;
  IsocenterToRangeModulatorDistance?: any;
  // Scan Spot Tune ID
  '300A0390'?: Element;
  ScanSpotTuneID?: any;
  // Number of Scan Spot Positions
  '300A0392'?: Element;
  NumberOfScanSpotPositions?: any;
  // Scan Spot Position Map
  '300A0394'?: Element;
  ScanSpotPositionMap?: any;
  // Scan Spot Meterset Weights
  '300A0396'?: Element;
  ScanSpotMetersetWeights?: any;
  // Scanning Spot Size
  '300A0398'?: Element;
  ScanningSpotSize?: any;
  // Number of Paintings
  '300A039A'?: Element;
  NumberOfPaintings?: any;
  // Ion Tolerance Table Sequence
  '300A03A0'?: Element;
  IonToleranceTableSequence?: any;
  // Ion Beam Sequence
  '300A03A2'?: Element;
  IonBeamSequence?: any;
  // Ion Beam Limiting Device Sequence
  '300A03A4'?: Element;
  IonBeamLimitingDeviceSequence?: any;
  // Ion Block Sequence
  '300A03A6'?: Element;
  IonBlockSequence?: any;
  // Ion Control Point Sequence
  '300A03A8'?: Element;
  IonControlPointSequence?: any;
  // Ion Wedge Sequence
  '300A03AA'?: Element;
  IonWedgeSequence?: any;
  // Ion Wedge Position Sequence
  '300A03AC'?: Element;
  IonWedgePositionSequence?: any;
  // Referenced Setup Image Sequence
  '300A0401'?: Element;
  ReferencedSetupImageSequence?: any;
  // Setup Image Comment
  '300A0402'?: Element;
  SetupImageComment?: any;
  // Motion Synchronization Sequence
  '300A0410'?: Element;
  MotionSynchronizationSequence?: any;
  // Control Point Orientation
  '300A0412'?: Element;
  ControlPointOrientation?: any;
  // General Accessory Sequence
  '300A0420'?: Element;
  GeneralAccessorySequence?: any;
  // General Accessory ID
  '300A0421'?: Element;
  GeneralAccessoryID?: any;
  // General Accessory Description
  '300A0422'?: Element;
  GeneralAccessoryDescription?: any;
  // General Accessory Type
  '300A0423'?: Element;
  GeneralAccessoryType?: any;
  // General Accessory Number
  '300A0424'?: Element;
  GeneralAccessoryNumber?: any;
  // Source to General Accessory Distance
  '300A0425'?: Element;
  SourceToGeneralAccessoryDistance?: any;
  // Applicator Geometry Sequence
  '300A0431'?: Element;
  ApplicatorGeometrySequence?: any;
  // Applicator Aperture Shape
  '300A0432'?: Element;
  ApplicatorApertureShape?: any;
  // Applicator Opening
  '300A0433'?: Element;
  ApplicatorOpening?: any;
  // Applicator Opening X
  '300A0434'?: Element;
  ApplicatorOpeningX?: any;
  // Applicator Opening Y
  '300A0435'?: Element;
  ApplicatorOpeningY?: any;
  // Source to Applicator Mounting Position Distance
  '300A0436'?: Element;
  SourceToApplicatorMountingPositionDistance?: any;
  // Referenced RT Plan Sequence
  '300C0002'?: Element;
  ReferencedRTPlanSequence?: any;
  // Referenced Beam Sequence
  '300C0004'?: Element;
  ReferencedBeamSequence?: any;
  // Referenced Beam Number
  '300C0006'?: Element;
  ReferencedBeamNumber?: any;
  // Referenced Reference Image Number
  '300C0007'?: Element;
  ReferencedReferenceImageNumber?: any;
  // Start Cumulative Meterset Weight
  '300C0008'?: Element;
  StartCumulativeMetersetWeight?: any;
  // End Cumulative Meterset Weight
  '300C0009'?: Element;
  EndCumulativeMetersetWeight?: any;
  // Referenced Brachy Application Setup Sequence
  '300C000A'?: Element;
  ReferencedBrachyApplicationSetupSequence?: any;
  // Referenced Brachy Application Setup Number
  '300C000C'?: Element;
  ReferencedBrachyApplicationSetupNumber?: any;
  // Referenced Source Number
  '300C000E'?: Element;
  ReferencedSourceNumber?: any;
  // Referenced Fraction Group Sequence
  '300C0020'?: Element;
  ReferencedFractionGroupSequence?: any;
  // Referenced Fraction Group Number
  '300C0022'?: Element;
  ReferencedFractionGroupNumber?: any;
  // Referenced Verification Image Sequence
  '300C0040'?: Element;
  ReferencedVerificationImageSequence?: any;
  // Referenced Reference Image Sequence
  '300C0042'?: Element;
  ReferencedReferenceImageSequence?: any;
  // Referenced Dose Reference Sequence
  '300C0050'?: Element;
  ReferencedDoseReferenceSequence?: any;
  // Referenced Dose Reference Number
  '300C0051'?: Element;
  ReferencedDoseReferenceNumber?: any;
  // Brachy Referenced Dose Reference Sequence
  '300C0055'?: Element;
  BrachyReferencedDoseReferenceSequence?: any;
  // Referenced Structure Set Sequence
  '300C0060'?: Element;
  ReferencedStructureSetSequence?: any;
  // Referenced Patient Setup Number
  '300C006A'?: Element;
  ReferencedPatientSetupNumber?: any;
  // Referenced Dose Sequence
  '300C0080'?: Element;
  ReferencedDoseSequence?: any;
  // Referenced Tolerance Table Number
  '300C00A0'?: Element;
  ReferencedToleranceTableNumber?: any;
  // Referenced Bolus Sequence
  '300C00B0'?: Element;
  ReferencedBolusSequence?: any;
  // Referenced Wedge Number
  '300C00C0'?: Element;
  ReferencedWedgeNumber?: any;
  // Referenced Compensator Number
  '300C00D0'?: Element;
  ReferencedCompensatorNumber?: any;
  // Referenced Block Number
  '300C00E0'?: Element;
  ReferencedBlockNumber?: any;
  // Referenced Control Point Index
  '300C00F0'?: Element;
  ReferencedControlPointIndex?: any;
  // Referenced Control Point Sequence
  '300C00F2'?: Element;
  ReferencedControlPointSequence?: any;
  // Referenced Start Control Point Index
  '300C00F4'?: Element;
  ReferencedStartControlPointIndex?: any;
  // Referenced Stop Control Point Index
  '300C00F6'?: Element;
  ReferencedStopControlPointIndex?: any;
  // Referenced Range Shifter Number
  '300C0100'?: Element;
  ReferencedRangeShifterNumber?: any;
  // Referenced Lateral Spreading Device Number
  '300C0102'?: Element;
  ReferencedLateralSpreadingDeviceNumber?: any;
  // Referenced Range Modulator Number
  '300C0104'?: Element;
  ReferencedRangeModulatorNumber?: any;
  // Approval Status
  '300E0002'?: Element;
  ApprovalStatus?: any;
  // Review Date
  '300E0004'?: Element;
  ReviewDate?: any;
  // Review Time
  '300E0005'?: Element;
  ReviewTime?: any;
  // Reviewer Name
  '300E0008'?: Element;
  ReviewerName?: any;
  // Arbitrary
  '40000010'?: Element;
  Arbitrary?: any;
  // Text Comments
  '40004000'?: Element;
  TextComments?: any;
  // Results ID
  '40080040'?: Element;
  ResultsID?: any;
  // Results ID Issuer
  '40080042'?: Element;
  ResultsIDIssuer?: any;
  // Referenced Interpretation Sequence
  '40080050'?: Element;
  ReferencedInterpretationSequence?: any;
  // Report Production Status (Trial)
  '400800FF'?: Element;
  ReportProductionStatusTrial?: any;
  // Interpretation Recorded Date
  '40080100'?: Element;
  InterpretationRecordedDate?: any;
  // Interpretation Recorded Time
  '40080101'?: Element;
  InterpretationRecordedTime?: any;
  // Interpretation Recorder
  '40080102'?: Element;
  InterpretationRecorder?: any;
  // Reference to Recorded Sound
  '40080103'?: Element;
  ReferenceToRecordedSound?: any;
  // Interpretation Transcription Date
  '40080108'?: Element;
  InterpretationTranscriptionDate?: any;
  // Interpretation Transcription Time
  '40080109'?: Element;
  InterpretationTranscriptionTime?: any;
  // Interpretation Transcriber
  '4008010A'?: Element;
  InterpretationTranscriber?: any;
  // Interpretation Text
  '4008010B'?: Element;
  InterpretationText?: any;
  // Interpretation Author
  '4008010C'?: Element;
  InterpretationAuthor?: any;
  // Interpretation Approver Sequence
  '40080111'?: Element;
  InterpretationApproverSequence?: any;
  // Interpretation Approval Date
  '40080112'?: Element;
  InterpretationApprovalDate?: any;
  // Interpretation Approval Time
  '40080113'?: Element;
  InterpretationApprovalTime?: any;
  // Physician Approving Interpretation
  '40080114'?: Element;
  PhysicianApprovingInterpretation?: any;
  // Interpretation Diagnosis Description
  '40080115'?: Element;
  InterpretationDiagnosisDescription?: any;
  // Interpretation Diagnosis Code Sequence
  '40080117'?: Element;
  InterpretationDiagnosisCodeSequence?: any;
  // Results Distribution List Sequence
  '40080118'?: Element;
  ResultsDistributionListSequence?: any;
  // Distribution Name
  '40080119'?: Element;
  DistributionName?: any;
  // Distribution Address
  '4008011A'?: Element;
  DistributionAddress?: any;
  // Interpretation ID
  '40080200'?: Element;
  InterpretationID?: any;
  // Interpretation ID Issuer
  '40080202'?: Element;
  InterpretationIDIssuer?: any;
  // Interpretation Type ID
  '40080210'?: Element;
  InterpretationTypeID?: any;
  // Interpretation Status ID
  '40080212'?: Element;
  InterpretationStatusID?: any;
  // Impressions
  '40080300'?: Element;
  Impressions?: any;
  // Results Comments
  '40084000'?: Element;
  ResultsComments?: any;
  // Low Energy Detectors
  '40100001'?: Element;
  LowEnergyDetectors?: any;
  // High Energy Detectors
  '40100002'?: Element;
  HighEnergyDetectors?: any;
  // Detector Geometry Sequence
  '40100004'?: Element;
  DetectorGeometrySequence?: any;
  // Threat ROI Voxel Sequence
  '40101001'?: Element;
  ThreatROIVoxelSequence?: any;
  // Threat ROI Base
  '40101004'?: Element;
  ThreatROIBase?: any;
  // Threat ROI Extents
  '40101005'?: Element;
  ThreatROIExtents?: any;
  // Threat ROI Bitmap
  '40101006'?: Element;
  ThreatROIBitmap?: any;
  // Route Segment ID
  '40101007'?: Element;
  RouteSegmentID?: any;
  // Gantry Type
  '40101008'?: Element;
  GantryType?: any;
  // OOI Owner Type
  '40101009'?: Element;
  OOIOwnerType?: any;
  // Route Segment Sequence
  '4010100A'?: Element;
  RouteSegmentSequence?: any;
  // Potential Threat Object ID
  '40101010'?: Element;
  PotentialThreatObjectID?: any;
  // Threat Sequence
  '40101011'?: Element;
  ThreatSequence?: any;
  // Threat Category
  '40101012'?: Element;
  ThreatCategory?: any;
  // Threat Category Description
  '40101013'?: Element;
  ThreatCategoryDescription?: any;
  // ATD Ability Assessment
  '40101014'?: Element;
  ATDAbilityAssessment?: any;
  // ATD Assessment Flag
  '40101015'?: Element;
  ATDAssessmentFlag?: any;
  // ATD Assessment Probability
  '40101016'?: Element;
  ATDAssessmentProbability?: any;
  // Mass
  '40101017'?: Element;
  Mass?: any;
  // Density
  '40101018'?: Element;
  Density?: any;
  // Z Effective
  '40101019'?: Element;
  ZEffective?: any;
  // Boarding Pass ID
  '4010101A'?: Element;
  BoardingPassID?: any;
  // Center of Mass
  '4010101B'?: Element;
  CenterOfMass?: any;
  // Center of PTO
  '4010101C'?: Element;
  CenterOfPTO?: any;
  // Bounding Polygon
  '4010101D'?: Element;
  BoundingPolygon?: any;
  // Route Segment Start Location ID
  '4010101E'?: Element;
  RouteSegmentStartLocationID?: any;
  // Route Segment End Location ID
  '4010101F'?: Element;
  RouteSegmentEndLocationID?: any;
  // Route Segment Location ID Type
  '40101020'?: Element;
  RouteSegmentLocationIDType?: any;
  // Abort Reason
  '40101021'?: Element;
  AbortReason?: any;
  // Volume of PTO
  '40101023'?: Element;
  VolumeOfPTO?: any;
  // Abort Flag
  '40101024'?: Element;
  AbortFlag?: any;
  // Route Segment Start Time
  '40101025'?: Element;
  RouteSegmentStartTime?: any;
  // Route Segment End Time
  '40101026'?: Element;
  RouteSegmentEndTime?: any;
  // TDR Type
  '40101027'?: Element;
  TDRType?: any;
  // International Route Segment
  '40101028'?: Element;
  InternationalRouteSegment?: any;
  // Threat Detection Algorithm and Version
  '40101029'?: Element;
  ThreatDetectionAlgorithmandVersion?: any;
  // Assigned Location
  '4010102A'?: Element;
  AssignedLocation?: any;
  // Alarm Decision Time
  '4010102B'?: Element;
  AlarmDecisionTime?: any;
  // Alarm Decision
  '40101031'?: Element;
  AlarmDecision?: any;
  // Number of Total Objects
  '40101033'?: Element;
  NumberOfTotalObjects?: any;
  // Number of Alarm Objects
  '40101034'?: Element;
  NumberOfAlarmObjects?: any;
  // PTO Representation Sequence
  '40101037'?: Element;
  PTORepresentationSequence?: any;
  // ATD Assessment Sequence
  '40101038'?: Element;
  ATDAssessmentSequence?: any;
  // TIP Type
  '40101039'?: Element;
  TIPType?: any;
  // DICOS Version
  '4010103A'?: Element;
  DICOSVersion?: any;
  // OOI Owner Creation Time
  '40101041'?: Element;
  OOIOwnerCreationTime?: any;
  // OOI Type
  '40101042'?: Element;
  OOIType?: any;
  // OOI Size
  '40101043'?: Element;
  OOISize?: any;
  // Acquisition Status
  '40101044'?: Element;
  AcquisitionStatus?: any;
  // Basis Materials Code Sequence
  '40101045'?: Element;
  BasisMaterialsCodeSequence?: any;
  // Phantom Type
  '40101046'?: Element;
  PhantomType?: any;
  // OOI Owner Sequence
  '40101047'?: Element;
  OOIOwnerSequence?: any;
  // Scan Type
  '40101048'?: Element;
  ScanType?: any;
  // Itinerary ID
  '40101051'?: Element;
  ItineraryID?: any;
  // Itinerary ID Type
  '40101052'?: Element;
  ItineraryIDType?: any;
  // Itinerary ID Assigning Authority
  '40101053'?: Element;
  ItineraryIDAssigningAuthority?: any;
  // Route ID
  '40101054'?: Element;
  RouteID?: any;
  // Route ID Assigning Authority
  '40101055'?: Element;
  RouteIDAssigningAuthority?: any;
  // Inbound Arrival Type
  '40101056'?: Element;
  InboundArrivalType?: any;
  // Carrier ID
  '40101058'?: Element;
  CarrierID?: any;
  // Carrier ID Assigning Authority
  '40101059'?: Element;
  CarrierIDAssigningAuthority?: any;
  // Source Orientation
  '40101060'?: Element;
  SourceOrientation?: any;
  // Source Position
  '40101061'?: Element;
  SourcePosition?: any;
  // Belt Height
  '40101062'?: Element;
  BeltHeight?: any;
  // Algorithm Routing Code Sequence
  '40101064'?: Element;
  AlgorithmRoutingCodeSequence?: any;
  // Transport Classification
  '40101067'?: Element;
  TransportClassification?: any;
  // OOI Type Descriptor
  '40101068'?: Element;
  OOITypeDescriptor?: any;
  // Total Processing Time
  '40101069'?: Element;
  TotalProcessingTime?: any;
  // Detector Calibration Data
  '4010106C'?: Element;
  DetectorCalibrationData?: any;
  // Additional Screening Performed
  '4010106D'?: Element;
  AdditionalScreeningPerformed?: any;
  // Additional Inspection Selection Criteria
  '4010106E'?: Element;
  AdditionalInspectionSelectionCriteria?: any;
  // Additional Inspection Method Sequence
  '4010106F'?: Element;
  AdditionalInspectionMethodSequence?: any;
  // AIT Device Type
  '40101070'?: Element;
  AITDeviceType?: any;
  // QR Measurements Sequence
  '40101071'?: Element;
  QRMeasurementsSequence?: any;
  // Target Material Sequence
  '40101072'?: Element;
  TargetMaterialSequence?: any;
  // SNR Threshold
  '40101073'?: Element;
  SNRThreshold?: any;
  // Image Scale Representation
  '40101075'?: Element;
  ImageScaleRepresentation?: any;
  // Referenced PTO Sequence
  '40101076'?: Element;
  ReferencedPTOSequence?: any;
  // Referenced TDR Instance Sequence
  '40101077'?: Element;
  ReferencedTDRInstanceSequence?: any;
  // PTO Location Description
  '40101078'?: Element;
  PTOLocationDescription?: any;
  // Anomaly Locator Indicator Sequence
  '40101079'?: Element;
  AnomalyLocatorIndicatorSequence?: any;
  // Anomaly Locator Indicator
  '4010107A'?: Element;
  AnomalyLocatorIndicator?: any;
  // PTO Region Sequence
  '4010107B'?: Element;
  PTORegionSequence?: any;
  // Inspection Selection Criteria
  '4010107C'?: Element;
  InspectionSelectionCriteria?: any;
  // Secondary Inspection Method Sequence
  '4010107D'?: Element;
  SecondaryInspectionMethodSequence?: any;
  // PRCS to RCS Orientation
  '4010107E'?: Element;
  PRCSToRCSOrientation?: any;
  // MAC Parameters Sequence
  '4FFE0001'?: Element;
  MACParametersSequence?: any;
  // Curve Dimensions
  '50xx0005'?: Element;
  CurveDimensions?: any;
  // Number of Points
  '50xx0010'?: Element;
  NumberOfPoints?: any;
  // Type of Data
  '50xx0020'?: Element;
  TypeOfData?: any;
  // Curve Description
  '50xx0022'?: Element;
  CurveDescription?: any;
  // Axis Units
  '50xx0030'?: Element;
  AxisUnits?: any;
  // Axis Labels
  '50xx0040'?: Element;
  AxisLabels?: any;
  // Data Value Representation
  '50xx0103'?: Element;
  DataValueRepresentation?: any;
  // Minimum Coordinate Value
  '50xx0104'?: Element;
  MinimumCoordinateValue?: any;
  // Maximum Coordinate Value
  '50xx0105'?: Element;
  MaximumCoordinateValue?: any;
  // Curve Range
  '50xx0106'?: Element;
  CurveRange?: any;
  // Curve Data Descriptor
  '50xx0110'?: Element;
  CurveDataDescriptor?: any;
  // Coordinate Start Value
  '50xx0112'?: Element;
  CoordinateStartValue?: any;
  // Coordinate Step Value
  '50xx0114'?: Element;
  CoordinateStepValue?: any;
  // Curve Activation Layer
  '50xx1001'?: Element;
  CurveActivationLayer?: any;
  // Audio Type
  '50xx2000'?: Element;
  AudioType?: any;
  // Audio Sample Format
  '50xx2002'?: Element;
  AudioSampleFormat?: any;
  // Number of Channels
  '50xx2004'?: Element;
  NumberOfChannels?: any;
  // Number of Samples
  '50xx2006'?: Element;
  NumberOfSamples?: any;
  // Sample Rate
  '50xx2008'?: Element;
  SampleRate?: any;
  // Total Time
  '50xx200A'?: Element;
  TotalTime?: any;
  // Audio Sample Data
  '50xx200C'?: Element;
  AudioSampleData?: any;
  // Audio Comments
  '50xx200E'?: Element;
  AudioComments?: any;
  // Curve Label
  '50xx2500'?: Element;
  CurveLabel?: any;
  // Curve Referenced Overlay Sequence
  '50xx2600'?: Element;
  CurveReferencedOverlaySequence?: any;
  // Curve Referenced Overlay Group
  '50xx2610'?: Element;
  CurveReferencedOverlayGroup?: any;
  // Curve Data
  '50xx3000'?: Element;
  CurveData?: any;
  // Shared Functional Groups Sequence
  '52009229'?: Element;
  SharedFunctionalGroupsSequence?: any;
  // Per-frame Functional Groups Sequence
  '52009230'?: Element;
  PerFrameFunctionalGroupsSequence?: any;
  // Waveform Sequence
  '54000100'?: Element;
  WaveformSequence?: any;
  // Channel Minimum Value
  '54000110'?: Element;
  ChannelMinimumValue?: any;
  // Channel Maximum Value
  '54000112'?: Element;
  ChannelMaximumValue?: any;
  // Waveform Bits Allocated
  '54001004'?: Element;
  WaveformBitsAllocated?: any;
  // Waveform Sample Interpretation
  '54001006'?: Element;
  WaveformSampleInterpretation?: any;
  // Waveform Padding Value
  '5400100A'?: Element;
  WaveformPaddingValue?: any;
  // Waveform Data
  '54001010'?: Element;
  WaveformData?: any;
  // First Order Phase Correction Angle
  '56000010'?: Element;
  FirstOrderPhaseCorrectionAngle?: any;
  // Spectroscopy Data
  '56000020'?: Element;
  SpectroscopyData?: any;
  // Overlay Rows
  '60xx0010'?: Element;
  OverlayRows?: any;
  // Overlay Columns
  '60xx0011'?: Element;
  OverlayColumns?: any;
  // Overlay Planes
  '60xx0012'?: Element;
  OverlayPlanes?: any;
  // Number of Frames in Overlay
  '60xx0015'?: Element;
  NumberOfFramesInOverlay?: any;
  // Overlay Description
  '60xx0022'?: Element;
  OverlayDescription?: any;
  // Overlay Type
  '60xx0040'?: Element;
  OverlayType?: any;
  // Overlay Subtype
  '60xx0045'?: Element;
  OverlaySubtype?: any;
  // Overlay Origin
  '60xx0050'?: Element;
  OverlayOrigin?: any;
  // Image Frame Origin
  '60xx0051'?: Element;
  ImageFrameOrigin?: any;
  // Overlay Plane Origin
  '60xx0052'?: Element;
  OverlayPlaneOrigin?: any;
  // Overlay Compression Code
  '60xx0060'?: Element;
  OverlayCompressionCode?: any;
  // Overlay Compression Originator
  '60xx0061'?: Element;
  OverlayCompressionOriginator?: any;
  // Overlay Compression Label
  '60xx0062'?: Element;
  OverlayCompressionLabel?: any;
  // Overlay Compression Description
  '60xx0063'?: Element;
  OverlayCompressionDescription?: any;
  // Overlay Compression Step Pointers
  '60xx0066'?: Element;
  OverlayCompressionStepPointers?: any;
  // Overlay Repeat Interval
  '60xx0068'?: Element;
  OverlayRepeatInterval?: any;
  // Overlay Bits Grouped
  '60xx0069'?: Element;
  OverlayBitsGrouped?: any;
  // Overlay Bits Allocated
  '60xx0100'?: Element;
  OverlayBitsAllocated?: any;
  // Overlay Bit Position
  '60xx0102'?: Element;
  OverlayBitPosition?: any;
  // Overlay Format
  '60xx0110'?: Element;
  OverlayFormat?: any;
  // Overlay Location
  '60xx0200'?: Element;
  OverlayLocation?: any;
  // Overlay Code Label
  '60xx0800'?: Element;
  OverlayCodeLabel?: any;
  // Overlay Number of Tables
  '60xx0802'?: Element;
  OverlayNumberOfTables?: any;
  // Overlay Code Table Location
  '60xx0803'?: Element;
  OverlayCodeTableLocation?: any;
  // Overlay Bits For Code Word
  '60xx0804'?: Element;
  OverlayBitsForCodeWord?: any;
  // Overlay Activation Layer
  '60xx1001'?: Element;
  OverlayActivationLayer?: any;
  // Overlay Descriptor - Gray
  '60xx1100'?: Element;
  OverlayDescriptorGray?: any;
  // Overlay Descriptor - Red
  '60xx1101'?: Element;
  OverlayDescriptorRed?: any;
  // Overlay Descriptor - Green
  '60xx1102'?: Element;
  OverlayDescriptorGreen?: any;
  // Overlay Descriptor - Blue
  '60xx1103'?: Element;
  OverlayDescriptorBlue?: any;
  // Overlays - Gray
  '60xx1200'?: Element;
  OverlaysGray?: any;
  // Overlays - Red
  '60xx1201'?: Element;
  OverlaysRed?: any;
  // Overlays - Green
  '60xx1202'?: Element;
  OverlaysGreen?: any;
  // Overlays - Blue
  '60xx1203'?: Element;
  OverlaysBlue?: any;
  // ROI Area
  '60xx1301'?: Element;
  ROIArea?: any;
  // ROI Mean
  '60xx1302'?: Element;
  ROIMean?: any;
  // ROI Standard Deviation
  '60xx1303'?: Element;
  ROIStandardDeviation?: any;
  // Overlay Label
  '60xx1500'?: Element;
  OverlayLabel?: any;
  // Overlay Data
  '60xx3000'?: Element;
  OverlayData?: any;
  // Overlay Comments
  '60xx4000'?: Element;
  OverlayComments?: any;
  // Pixel Data
  '7FE00010'?: Element;
  PixelData?: any;
  // Coefficients SDVN
  '7FE00020'?: Element;
  CoefficientsSDVN?: any;
  // Coefficients SDHN
  '7FE00030'?: Element;
  CoefficientsSDHN?: any;
  // Coefficients SDDN
  '7FE00040'?: Element;
  CoefficientsSDDN?: any;
  // Variable Pixel Data
  '7Fxx0010'?: Element;
  VariablePixelData?: any;
  // Variable Next Data Group
  '7Fxx0011'?: Element;
  VariableNextDataGroup?: any;
  // Variable Coefficients SDVN
  '7Fxx0020'?: Element;
  VariableCoefficientsSDVN?: any;
  // Variable Coefficients SDHN
  '7Fxx0030'?: Element;
  VariableCoefficientsSDHN?: any;
  // Variable Coefficients SDDN
  '7Fxx0040'?: Element;
  VariableCoefficientsSDDN?: any;
  // Digital Signatures Sequence
  'FFFAFFFA'?: Element;
  DigitalSignaturesSequence?: any;
  // Data Set Trailing Padding
  'FFFCFFFC'?: Element;
  DataSetTrailingPadding?: any;
  // Item
  'FFFEE000'?: Element;
  Item?: any;
  // Item Delimitation Item
  'FFFEE00D'?: Element;
  ItemDelimitationItem?: any;
  // Sequence Delimitation Item
  'FFFEE0DD'?: Element;
  SequenceDelimitationItem?: any;

}
