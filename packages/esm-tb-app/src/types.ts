export interface PatientChartProps {
  patientUuid: string;
}

export interface ProgramsFetchResponse {
  results: Array<PatientProgram>;
}

export interface PatientProgram {
  uuid: string;
  patient?: DisplayMetadata;
  program: {
    uuid: string;
    name: string;
    allWorkflows: Array<{
      uuid: string;
      concept: DisplayMetadata;
      retired: boolean;
      states: Array<{}>;
      links?: Links;
    }>;
    concept: {
      display: string;
      uuid: string;
    };
    links: Links;
  };
  display: string;
  dateEnrolled: string;
  dateCompleted: string | null;
  location?: {
    uuid: string;
    display: string;
    links: Links;
  };
  voided?: boolean;
  outcome?: null;
  states?: [];
  links: Links;
  resourceVersion?: string;
}

export type Links = Array<{
  rel: string;
  uri: string;
}>;

export interface DisplayMetadata {
  display?: string;
  links?: Links;
  uuid?: string;
}

export interface DataCaptureComponentProps {
  entryStarted: () => void;
  entrySubmitted: () => void;
  entryCancelled: () => void;
  closeComponent: () => void;
}
export interface Program {
  uuid: string;
  display: string;
  allWorkflows: Array<{
    links?: Links;
  }>;
  concept: {
    uuid: string;
    display: string;
  };
}

export interface LocationData {
  display: string;
  uuid: string;
}

export interface SessionData {
  authenticated: boolean;
  locale: string;
  currentProvider: {
    uuid: string;
    display: string;
    person: DisplayMetadata;
    identifier: string;
    attributes: Array<{}>;
    retired: boolean;
    links: Links;
    resourceVersion: string;
  };
  sessionLocation: {
    uuid: string;
    display: string;
    name: string;
    description?: string;
  };
  user: {
    uuid: string;
    display: string;
    username: string;
  };
  privileges: Array<DisplayMetadata>;
  roles: Array<DisplayMetadata>;
  retired: false;
  links: Links;
}

export interface ConfigurableProgram extends PatientProgram {
  uuid: string;
  display: string;
  enrollment: [
    {
      enrollmentFormUuid: string;
      discontinuationFormUuid: string;
      enrollmentStatus: string;
      dateEnrolled: string;
      dateCompleted: string;
      location: {
        display: string;
      };
    },
  ];
}

export interface ProgramActionButton {
  enrollment: {
    uuid: string;
    display: string;
    enrollment: [
      {
        enrollmentFormUuid: string;
        discontinuationFormUuid: string;
        enrollmentStatus: string;
        dateEnrolled: string;
        dateCompleted: string;
        location: {
          display: string;
        };
      },
    ];
  };
}
