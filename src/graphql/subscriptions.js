/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSysInfo = /* GraphQL */ `
  subscription OnCreateSysInfo($filter: ModelSubscriptionSysInfoFilterInput) {
    onCreateSysInfo(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_CLIENTNAME
      SAP_HOSTING_HARDWARE
      SAP_PRODUCT
      SAP_SYSTEM_TYPE
      SAP_SID
      DB_SID
      SAP_ENVIRONMENT
      OS_VERSION
      SAP_KERNEL_VERSION
      SAP_APPVERSION
      SAP_DBNAME
      SAP_DBVERSION
      SAP_DBSIZE
      SAP_UNICODE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSysInfo = /* GraphQL */ `
  subscription OnUpdateSysInfo($filter: ModelSubscriptionSysInfoFilterInput) {
    onUpdateSysInfo(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_CLIENTNAME
      SAP_HOSTING_HARDWARE
      SAP_PRODUCT
      SAP_SYSTEM_TYPE
      SAP_SID
      DB_SID
      SAP_ENVIRONMENT
      OS_VERSION
      SAP_KERNEL_VERSION
      SAP_APPVERSION
      SAP_DBNAME
      SAP_DBVERSION
      SAP_DBSIZE
      SAP_UNICODE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSysInfo = /* GraphQL */ `
  subscription OnDeleteSysInfo($filter: ModelSubscriptionSysInfoFilterInput) {
    onDeleteSysInfo(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_CLIENTNAME
      SAP_HOSTING_HARDWARE
      SAP_PRODUCT
      SAP_SYSTEM_TYPE
      SAP_SID
      DB_SID
      SAP_ENVIRONMENT
      OS_VERSION
      SAP_KERNEL_VERSION
      SAP_APPVERSION
      SAP_DBNAME
      SAP_DBVERSION
      SAP_DBSIZE
      SAP_UNICODE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateJobs = /* GraphQL */ `
  subscription OnCreateJobs($filter: ModelSubscriptionJobsFilterInput) {
    onCreateJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      JOB_COUNT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateJobs = /* GraphQL */ `
  subscription OnUpdateJobs($filter: ModelSubscriptionJobsFilterInput) {
    onUpdateJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      JOB_COUNT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteJobs = /* GraphQL */ `
  subscription OnDeleteJobs($filter: ModelSubscriptionJobsFilterInput) {
    onDeleteJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      JOB_COUNT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateLongRunningJobs = /* GraphQL */ `
  subscription OnCreateLongRunningJobs(
    $filter: ModelSubscriptionLongRunningJobsFilterInput
  ) {
    onCreateLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateLongRunningJobs = /* GraphQL */ `
  subscription OnUpdateLongRunningJobs(
    $filter: ModelSubscriptionLongRunningJobsFilterInput
  ) {
    onUpdateLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteLongRunningJobs = /* GraphQL */ `
  subscription OnDeleteLongRunningJobs(
    $filter: ModelSubscriptionLongRunningJobsFilterInput
  ) {
    onDeleteLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateFinishedLongRunningJobs = /* GraphQL */ `
  subscription OnCreateFinishedLongRunningJobs(
    $filter: ModelSubscriptionFinishedLongRunningJobsFilterInput
  ) {
    onCreateFinishedLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateFinishedLongRunningJobs = /* GraphQL */ `
  subscription OnUpdateFinishedLongRunningJobs(
    $filter: ModelSubscriptionFinishedLongRunningJobsFilterInput
  ) {
    onUpdateFinishedLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteFinishedLongRunningJobs = /* GraphQL */ `
  subscription OnDeleteFinishedLongRunningJobs(
    $filter: ModelSubscriptionFinishedLongRunningJobsFilterInput
  ) {
    onDeleteFinishedLongRunningJobs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      JOB_NAME
      JOB_ID
      JOB_STATUS
      JOB_USER_SCHEDULED
      JOB_USER_AUTHORIZED
      JOB_STARTDATE
      JOB_STARTTIME
      JOB_ENDDATE
      JOB_ENDTIME
      JOB_RUNTIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUpdates = /* GraphQL */ `
  subscription OnCreateUpdates($filter: ModelSubscriptionUpdatesFilterInput) {
    onCreateUpdates(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUpdates = /* GraphQL */ `
  subscription OnUpdateUpdates($filter: ModelSubscriptionUpdatesFilterInput) {
    onUpdateUpdates(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUpdates = /* GraphQL */ `
  subscription OnDeleteUpdates($filter: ModelSubscriptionUpdatesFilterInput) {
    onDeleteUpdates(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMount = /* GraphQL */ `
  subscription OnCreateMount($filter: ModelSubscriptionMountFilterInput) {
    onCreateMount(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      MOUNT
      PERC_USAGE
      TOTAL
      USED
      AVAILABLE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMount = /* GraphQL */ `
  subscription OnUpdateMount($filter: ModelSubscriptionMountFilterInput) {
    onUpdateMount(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      MOUNT
      PERC_USAGE
      TOTAL
      USED
      AVAILABLE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMount = /* GraphQL */ `
  subscription OnDeleteMount($filter: ModelSubscriptionMountFilterInput) {
    onDeleteMount(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      MOUNT
      PERC_USAGE
      TOTAL
      USED
      AVAILABLE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateIostat = /* GraphQL */ `
  subscription OnCreateIostat($filter: ModelSubscriptionIostatFilterInput) {
    onCreateIostat(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateIostat = /* GraphQL */ `
  subscription OnUpdateIostat($filter: ModelSubscriptionIostatFilterInput) {
    onUpdateIostat(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteIostat = /* GraphQL */ `
  subscription OnDeleteIostat($filter: ModelSubscriptionIostatFilterInput) {
    onDeleteIostat(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSt22 = /* GraphQL */ `
  subscription OnCreateSt22($filter: ModelSubscriptionSt22FilterInput) {
    onCreateSt22(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DUMPID
      RUNTIME_ERROR
      USERID
      CANCELLED_PROGRAM
      Count
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSt22 = /* GraphQL */ `
  subscription OnUpdateSt22($filter: ModelSubscriptionSt22FilterInput) {
    onUpdateSt22(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DUMPID
      RUNTIME_ERROR
      USERID
      CANCELLED_PROGRAM
      Count
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSt22 = /* GraphQL */ `
  subscription OnDeleteSt22($filter: ModelSubscriptionSt22FilterInput) {
    onDeleteSt22(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      DUMPID
      RUNTIME_ERROR
      USERID
      CANCELLED_PROGRAM
      Count
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTransport = /* GraphQL */ `
  subscription OnCreateTransport(
    $filter: ModelSubscriptionTransportFilterInput
  ) {
    onCreateTransport(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      DATE_STAMP
      TIME_STAMP
      TR_NUMBER
      SYSTEM_ID
      PROJECT
      TR_USER
      RETURN_CODE
      TR_MOVED_BY
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTransport = /* GraphQL */ `
  subscription OnUpdateTransport(
    $filter: ModelSubscriptionTransportFilterInput
  ) {
    onUpdateTransport(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      DATE_STAMP
      TIME_STAMP
      TR_NUMBER
      SYSTEM_ID
      PROJECT
      TR_USER
      RETURN_CODE
      TR_MOVED_BY
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTransport = /* GraphQL */ `
  subscription OnDeleteTransport(
    $filter: ModelSubscriptionTransportFilterInput
  ) {
    onDeleteTransport(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      DATE_STAMP
      TIME_STAMP
      TR_NUMBER
      SYSTEM_ID
      PROJECT
      TR_USER
      RETURN_CODE
      TR_MOVED_BY
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateSMlG = /* GraphQL */ `
  subscription OnCreateSMlG($filter: ModelSubscriptionSMlGFilterInput) {
    onCreateSMlG(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateSMlG = /* GraphQL */ `
  subscription OnUpdateSMlG($filter: ModelSubscriptionSMlGFilterInput) {
    onUpdateSMlG(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteSMlG = /* GraphQL */ `
  subscription OnDeleteSMlG($filter: ModelSubscriptionSMlGFilterInput) {
    onDeleteSMlG(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateHEALTH = /* GraphQL */ `
  subscription OnCreateHEALTH($filter: ModelSubscriptionHEALTHFilterInput) {
    onCreateHEALTH(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_SYSTEMTYPE
      SAP_ENVIRONMENT
      SAP_SID
      DB_SID
      DB_HOSTNAME
      APP_HOSTNAME
      APP_IP
      TIME
      SERVER_AVAIL
      DB_AVAIL
      APP_AVAIL
      OS_RAM_TOTAL
      OS_RAM_FREE
      OS_RAM_USAGE
      OS_CPU_CORE
      OS_CPU_USAGE
      OS_SWAP_TOTAL
      OS_SWAP_FREE
      OS_SWAP_PERC
      SAP_DIALOG_TOTAL
      SAP_DIALOG_FREE
      SAP_DIALOG_USAGE
      SAP_BACKGROUND_TOTAL
      SAP_BACKGROUND_FREE
      SAP_BACKGROUND_USAGE
      SAP_UPDATE_TOTAL
      SAP_UPDATE_FREE
      SAP_UPDATE_USAGE
      SAP_TOTAL_JOBS
      SAP_FAILED_JOBS
      SAP_UPDATE_STATUS
      SAP_FAILED_UPDATES
      SAP_LOCK_ENTRIES
      SAP_OLD_LOCKS
      SAP_DB_BACKUP_DATETIME
      SAP_DB_BACKUP_STATUS
      SAP_VM_BACKUP_DATETIME
      SAP_VM_BACKUP_STATUS
      ACTIVE_SESSIONS
      ACTIVE_USERS
      SAP_READ
      SAP_WRIT
      SAP_RECV
      SAP_SEND
      OS_STORAGE_TOTAL
      OS_STORAGE_USED
      OS_STORAGE_AVAILABLE
      SAP_DIALOG_USER
      SAP_SYSTEM_USER
      SAP_COMMUNICATION_USER
      SAP_SERVICE_USER
      SAP_REFERENCE_USER
      RESPONSE_TIME
      SAP_DUMP_COUNT
      EWA_STATUS
      TR_COUNT
      TR_COUNT_SUCCESS
      TR_COUNT_WARNING
      TR_COUNT_ERROR
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateHEALTH = /* GraphQL */ `
  subscription OnUpdateHEALTH($filter: ModelSubscriptionHEALTHFilterInput) {
    onUpdateHEALTH(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_SYSTEMTYPE
      SAP_ENVIRONMENT
      SAP_SID
      DB_SID
      DB_HOSTNAME
      APP_HOSTNAME
      APP_IP
      TIME
      SERVER_AVAIL
      DB_AVAIL
      APP_AVAIL
      OS_RAM_TOTAL
      OS_RAM_FREE
      OS_RAM_USAGE
      OS_CPU_CORE
      OS_CPU_USAGE
      OS_SWAP_TOTAL
      OS_SWAP_FREE
      OS_SWAP_PERC
      SAP_DIALOG_TOTAL
      SAP_DIALOG_FREE
      SAP_DIALOG_USAGE
      SAP_BACKGROUND_TOTAL
      SAP_BACKGROUND_FREE
      SAP_BACKGROUND_USAGE
      SAP_UPDATE_TOTAL
      SAP_UPDATE_FREE
      SAP_UPDATE_USAGE
      SAP_TOTAL_JOBS
      SAP_FAILED_JOBS
      SAP_UPDATE_STATUS
      SAP_FAILED_UPDATES
      SAP_LOCK_ENTRIES
      SAP_OLD_LOCKS
      SAP_DB_BACKUP_DATETIME
      SAP_DB_BACKUP_STATUS
      SAP_VM_BACKUP_DATETIME
      SAP_VM_BACKUP_STATUS
      ACTIVE_SESSIONS
      ACTIVE_USERS
      SAP_READ
      SAP_WRIT
      SAP_RECV
      SAP_SEND
      OS_STORAGE_TOTAL
      OS_STORAGE_USED
      OS_STORAGE_AVAILABLE
      SAP_DIALOG_USER
      SAP_SYSTEM_USER
      SAP_COMMUNICATION_USER
      SAP_SERVICE_USER
      SAP_REFERENCE_USER
      RESPONSE_TIME
      SAP_DUMP_COUNT
      EWA_STATUS
      TR_COUNT
      TR_COUNT_SUCCESS
      TR_COUNT_WARNING
      TR_COUNT_ERROR
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteHEALTH = /* GraphQL */ `
  subscription OnDeleteHEALTH($filter: ModelSubscriptionHEALTHFilterInput) {
    onDeleteHEALTH(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      SAP_SYSTEMTYPE
      SAP_ENVIRONMENT
      SAP_SID
      DB_SID
      DB_HOSTNAME
      APP_HOSTNAME
      APP_IP
      TIME
      SERVER_AVAIL
      DB_AVAIL
      APP_AVAIL
      OS_RAM_TOTAL
      OS_RAM_FREE
      OS_RAM_USAGE
      OS_CPU_CORE
      OS_CPU_USAGE
      OS_SWAP_TOTAL
      OS_SWAP_FREE
      OS_SWAP_PERC
      SAP_DIALOG_TOTAL
      SAP_DIALOG_FREE
      SAP_DIALOG_USAGE
      SAP_BACKGROUND_TOTAL
      SAP_BACKGROUND_FREE
      SAP_BACKGROUND_USAGE
      SAP_UPDATE_TOTAL
      SAP_UPDATE_FREE
      SAP_UPDATE_USAGE
      SAP_TOTAL_JOBS
      SAP_FAILED_JOBS
      SAP_UPDATE_STATUS
      SAP_FAILED_UPDATES
      SAP_LOCK_ENTRIES
      SAP_OLD_LOCKS
      SAP_DB_BACKUP_DATETIME
      SAP_DB_BACKUP_STATUS
      SAP_VM_BACKUP_DATETIME
      SAP_VM_BACKUP_STATUS
      ACTIVE_SESSIONS
      ACTIVE_USERS
      SAP_READ
      SAP_WRIT
      SAP_RECV
      SAP_SEND
      OS_STORAGE_TOTAL
      OS_STORAGE_USED
      OS_STORAGE_AVAILABLE
      SAP_DIALOG_USER
      SAP_SYSTEM_USER
      SAP_COMMUNICATION_USER
      SAP_SERVICE_USER
      SAP_REFERENCE_USER
      RESPONSE_TIME
      SAP_DUMP_COUNT
      EWA_STATUS
      TR_COUNT
      TR_COUNT_SUCCESS
      TR_COUNT_WARNING
      TR_COUNT_ERROR
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTop20mem = /* GraphQL */ `
  subscription OnCreateTop20mem($filter: ModelSubscriptionTop20memFilterInput) {
    onCreateTop20mem(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      RECORD_COUNT
      RECORD_COUNT_IN_MAIN
      RECORD_COUNT_IN_DELTA
      READ_COUNT
      WRITE_COUNT
      MERGE_COUNT
      MEMORY_SIZE_IN_TOTAL
      MEMORY_SIZE_IN_MAIN
      MEMORY_SIZE_IN_DELTA
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTop20mem = /* GraphQL */ `
  subscription OnUpdateTop20mem($filter: ModelSubscriptionTop20memFilterInput) {
    onUpdateTop20mem(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      RECORD_COUNT
      RECORD_COUNT_IN_MAIN
      RECORD_COUNT_IN_DELTA
      READ_COUNT
      WRITE_COUNT
      MERGE_COUNT
      MEMORY_SIZE_IN_TOTAL
      MEMORY_SIZE_IN_MAIN
      MEMORY_SIZE_IN_DELTA
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTop20mem = /* GraphQL */ `
  subscription OnDeleteTop20mem($filter: ModelSubscriptionTop20memFilterInput) {
    onDeleteTop20mem(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      RECORD_COUNT
      RECORD_COUNT_IN_MAIN
      RECORD_COUNT_IN_DELTA
      READ_COUNT
      WRITE_COUNT
      MERGE_COUNT
      MEMORY_SIZE_IN_TOTAL
      MEMORY_SIZE_IN_MAIN
      MEMORY_SIZE_IN_DELTA
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTop20disk = /* GraphQL */ `
  subscription OnCreateTop20disk(
    $filter: ModelSubscriptionTop20diskFilterInput
  ) {
    onCreateTop20disk(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTop20disk = /* GraphQL */ `
  subscription OnUpdateTop20disk(
    $filter: ModelSubscriptionTop20diskFilterInput
  ) {
    onUpdateTop20disk(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTop20disk = /* GraphQL */ `
  subscription OnDeleteTop20disk(
    $filter: ModelSubscriptionTop20diskFilterInput
  ) {
    onDeleteTop20disk(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateTop20rs = /* GraphQL */ `
  subscription OnCreateTop20rs($filter: ModelSubscriptionTop20rsFilterInput) {
    onCreateTop20rs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTop20rs = /* GraphQL */ `
  subscription OnUpdateTop20rs($filter: ModelSubscriptionTop20rsFilterInput) {
    onUpdateTop20rs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTop20rs = /* GraphQL */ `
  subscription OnDeleteTop20rs($filter: ModelSubscriptionTop20rsFilterInput) {
    onDeleteTop20rs(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreatePerformanceIndicator = /* GraphQL */ `
  subscription OnCreatePerformanceIndicator(
    $filter: ModelSubscriptionPerformanceIndicatorFilterInput
  ) {
    onCreatePerformanceIndicator(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePerformanceIndicator = /* GraphQL */ `
  subscription OnUpdatePerformanceIndicator(
    $filter: ModelSubscriptionPerformanceIndicatorFilterInput
  ) {
    onUpdatePerformanceIndicator(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePerformanceIndicator = /* GraphQL */ `
  subscription OnDeletePerformanceIndicator(
    $filter: ModelSubscriptionPerformanceIndicatorFilterInput
  ) {
    onDeletePerformanceIndicator(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateOverview = /* GraphQL */ `
  subscription OnCreateOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onCreateOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOverview = /* GraphQL */ `
  subscription OnUpdateOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onUpdateOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOverview = /* GraphQL */ `
  subscription OnDeleteOverview($filter: ModelSubscriptionOverviewFilterInput) {
    onDeleteOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDetailOverview = /* GraphQL */ `
  subscription OnCreateDetailOverview(
    $filter: ModelSubscriptionDetailOverviewFilterInput
  ) {
    onCreateDetailOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      SUBTOPIC
      SUBTOPIC_RATING
      RECOMMENDATION
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDetailOverview = /* GraphQL */ `
  subscription OnUpdateDetailOverview(
    $filter: ModelSubscriptionDetailOverviewFilterInput
  ) {
    onUpdateDetailOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      SUBTOPIC
      SUBTOPIC_RATING
      RECOMMENDATION
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDetailOverview = /* GraphQL */ `
  subscription OnDeleteDetailOverview(
    $filter: ModelSubscriptionDetailOverviewFilterInput
  ) {
    onDeleteDetailOverview(filter: $filter) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      SUBTOPIC
      SUBTOPIC_RATING
      RECOMMENDATION
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAlertOverview = /* GraphQL */ `
  subscription OnCreateAlertOverview(
    $filter: ModelSubscriptionAlertOverviewFilterInput
  ) {
    onCreateAlertOverview(filter: $filter) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAlertOverview = /* GraphQL */ `
  subscription OnUpdateAlertOverview(
    $filter: ModelSubscriptionAlertOverviewFilterInput
  ) {
    onUpdateAlertOverview(filter: $filter) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAlertOverview = /* GraphQL */ `
  subscription OnDeleteAlertOverview(
    $filter: ModelSubscriptionAlertOverviewFilterInput
  ) {
    onDeleteAlertOverview(filter: $filter) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      __typename
    }
  }
`;
