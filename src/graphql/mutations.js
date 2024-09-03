/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createSysInfo = /* GraphQL */ `
  mutation CreateSysInfo(
    $input: CreateSysInfoInput!
    $condition: ModelSysInfoConditionInput
  ) {
    createSysInfo(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateSysInfo = /* GraphQL */ `
  mutation UpdateSysInfo(
    $input: UpdateSysInfoInput!
    $condition: ModelSysInfoConditionInput
  ) {
    updateSysInfo(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteSysInfo = /* GraphQL */ `
  mutation DeleteSysInfo(
    $input: DeleteSysInfoInput!
    $condition: ModelSysInfoConditionInput
  ) {
    deleteSysInfo(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createJobs = /* GraphQL */ `
  mutation CreateJobs(
    $input: CreateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    createJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateJobs = /* GraphQL */ `
  mutation UpdateJobs(
    $input: UpdateJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    updateJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteJobs = /* GraphQL */ `
  mutation DeleteJobs(
    $input: DeleteJobsInput!
    $condition: ModelJobsConditionInput
  ) {
    deleteJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createLongRunningJobs = /* GraphQL */ `
  mutation CreateLongRunningJobs(
    $input: CreateLongRunningJobsInput!
    $condition: ModelLongRunningJobsConditionInput
  ) {
    createLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateLongRunningJobs = /* GraphQL */ `
  mutation UpdateLongRunningJobs(
    $input: UpdateLongRunningJobsInput!
    $condition: ModelLongRunningJobsConditionInput
  ) {
    updateLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteLongRunningJobs = /* GraphQL */ `
  mutation DeleteLongRunningJobs(
    $input: DeleteLongRunningJobsInput!
    $condition: ModelLongRunningJobsConditionInput
  ) {
    deleteLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createFinishedLongRunningJobs = /* GraphQL */ `
  mutation CreateFinishedLongRunningJobs(
    $input: CreateFinishedLongRunningJobsInput!
    $condition: ModelFinishedLongRunningJobsConditionInput
  ) {
    createFinishedLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateFinishedLongRunningJobs = /* GraphQL */ `
  mutation UpdateFinishedLongRunningJobs(
    $input: UpdateFinishedLongRunningJobsInput!
    $condition: ModelFinishedLongRunningJobsConditionInput
  ) {
    updateFinishedLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteFinishedLongRunningJobs = /* GraphQL */ `
  mutation DeleteFinishedLongRunningJobs(
    $input: DeleteFinishedLongRunningJobsInput!
    $condition: ModelFinishedLongRunningJobsConditionInput
  ) {
    deleteFinishedLongRunningJobs(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createUpdates = /* GraphQL */ `
  mutation CreateUpdates(
    $input: CreateUpdatesInput!
    $condition: ModelUpdatesConditionInput
  ) {
    createUpdates(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUpdates = /* GraphQL */ `
  mutation UpdateUpdates(
    $input: UpdateUpdatesInput!
    $condition: ModelUpdatesConditionInput
  ) {
    updateUpdates(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUpdates = /* GraphQL */ `
  mutation DeleteUpdates(
    $input: DeleteUpdatesInput!
    $condition: ModelUpdatesConditionInput
  ) {
    deleteUpdates(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      UPDATE_DATE
      UPDATE_TIME
      UPDATE_TCODE
      UPDATE_USER
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createMount = /* GraphQL */ `
  mutation CreateMount(
    $input: CreateMountInput!
    $condition: ModelMountConditionInput
  ) {
    createMount(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateMount = /* GraphQL */ `
  mutation UpdateMount(
    $input: UpdateMountInput!
    $condition: ModelMountConditionInput
  ) {
    updateMount(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteMount = /* GraphQL */ `
  mutation DeleteMount(
    $input: DeleteMountInput!
    $condition: ModelMountConditionInput
  ) {
    deleteMount(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createIostat = /* GraphQL */ `
  mutation CreateIostat(
    $input: CreateIostatInput!
    $condition: ModelIostatConditionInput
  ) {
    createIostat(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateIostat = /* GraphQL */ `
  mutation UpdateIostat(
    $input: UpdateIostatInput!
    $condition: ModelIostatConditionInput
  ) {
    updateIostat(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteIostat = /* GraphQL */ `
  mutation DeleteIostat(
    $input: DeleteIostatInput!
    $condition: ModelIostatConditionInput
  ) {
    deleteIostat(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      DISK_NAME
      SAP_READ
      WRITE
      PERC_UTIL
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createSt22 = /* GraphQL */ `
  mutation CreateSt22(
    $input: CreateSt22Input!
    $condition: ModelSt22ConditionInput
  ) {
    createSt22(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateSt22 = /* GraphQL */ `
  mutation UpdateSt22(
    $input: UpdateSt22Input!
    $condition: ModelSt22ConditionInput
  ) {
    updateSt22(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteSt22 = /* GraphQL */ `
  mutation DeleteSt22(
    $input: DeleteSt22Input!
    $condition: ModelSt22ConditionInput
  ) {
    deleteSt22(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createTransport = /* GraphQL */ `
  mutation CreateTransport(
    $input: CreateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    createTransport(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateTransport = /* GraphQL */ `
  mutation UpdateTransport(
    $input: UpdateTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    updateTransport(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteTransport = /* GraphQL */ `
  mutation DeleteTransport(
    $input: DeleteTransportInput!
    $condition: ModelTransportConditionInput
  ) {
    deleteTransport(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createSMlG = /* GraphQL */ `
  mutation CreateSMlG(
    $input: CreateSMlGInput!
    $condition: ModelSMlGConditionInput
  ) {
    createSMlG(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateSMlG = /* GraphQL */ `
  mutation UpdateSMlG(
    $input: UpdateSMlGInput!
    $condition: ModelSMlGConditionInput
  ) {
    updateSMlG(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteSMlG = /* GraphQL */ `
  mutation DeleteSMlG(
    $input: DeleteSMlGInput!
    $condition: ModelSMlGConditionInput
  ) {
    deleteSMlG(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      APPL_SERVER
      SAP_RESPONSE_TIME
      TIME
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createHEALTH = /* GraphQL */ `
  mutation CreateHEALTH(
    $input: CreateHEALTHInput!
    $condition: ModelHEALTHConditionInput
  ) {
    createHEALTH(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateHEALTH = /* GraphQL */ `
  mutation UpdateHEALTH(
    $input: UpdateHEALTHInput!
    $condition: ModelHEALTHConditionInput
  ) {
    updateHEALTH(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteHEALTH = /* GraphQL */ `
  mutation DeleteHEALTH(
    $input: DeleteHEALTHInput!
    $condition: ModelHEALTHConditionInput
  ) {
    deleteHEALTH(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createTop20mem = /* GraphQL */ `
  mutation CreateTop20mem(
    $input: CreateTop20memInput!
    $condition: ModelTop20memConditionInput
  ) {
    createTop20mem(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateTop20mem = /* GraphQL */ `
  mutation UpdateTop20mem(
    $input: UpdateTop20memInput!
    $condition: ModelTop20memConditionInput
  ) {
    updateTop20mem(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteTop20mem = /* GraphQL */ `
  mutation DeleteTop20mem(
    $input: DeleteTop20memInput!
    $condition: ModelTop20memConditionInput
  ) {
    deleteTop20mem(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createTop20disk = /* GraphQL */ `
  mutation CreateTop20disk(
    $input: CreateTop20diskInput!
    $condition: ModelTop20diskConditionInput
  ) {
    createTop20disk(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTop20disk = /* GraphQL */ `
  mutation UpdateTop20disk(
    $input: UpdateTop20diskInput!
    $condition: ModelTop20diskConditionInput
  ) {
    updateTop20disk(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTop20disk = /* GraphQL */ `
  mutation DeleteTop20disk(
    $input: DeleteTop20diskInput!
    $condition: ModelTop20diskConditionInput
  ) {
    deleteTop20disk(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      PAGE_COUNT
      DISK_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createTop20rs = /* GraphQL */ `
  mutation CreateTop20rs(
    $input: CreateTop20rsInput!
    $condition: ModelTop20rsConditionInput
  ) {
    createTop20rs(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateTop20rs = /* GraphQL */ `
  mutation UpdateTop20rs(
    $input: UpdateTop20rsInput!
    $condition: ModelTop20rsConditionInput
  ) {
    updateTop20rs(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteTop20rs = /* GraphQL */ `
  mutation DeleteTop20rs(
    $input: DeleteTop20rsInput!
    $condition: ModelTop20rsConditionInput
  ) {
    deleteTop20rs(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      SCHEMA_NAME
      TABLE_NAME
      MEMORY_SIZE
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createPerformanceIndicator = /* GraphQL */ `
  mutation CreatePerformanceIndicator(
    $input: CreatePerformanceIndicatorInput!
    $condition: ModelPerformanceIndicatorConditionInput
  ) {
    createPerformanceIndicator(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updatePerformanceIndicator = /* GraphQL */ `
  mutation UpdatePerformanceIndicator(
    $input: UpdatePerformanceIndicatorInput!
    $condition: ModelPerformanceIndicatorConditionInput
  ) {
    updatePerformanceIndicator(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deletePerformanceIndicator = /* GraphQL */ `
  mutation DeletePerformanceIndicator(
    $input: DeletePerformanceIndicatorInput!
    $condition: ModelPerformanceIndicatorConditionInput
  ) {
    deletePerformanceIndicator(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      AREA
      INDICATOR
      VALUE
      UNIT
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createOverview = /* GraphQL */ `
  mutation CreateOverview(
    $input: CreateOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    createOverview(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateOverview = /* GraphQL */ `
  mutation UpdateOverview(
    $input: UpdateOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    updateOverview(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteOverview = /* GraphQL */ `
  mutation DeleteOverview(
    $input: DeleteOverviewInput!
    $condition: ModelOverviewConditionInput
  ) {
    deleteOverview(input: $input, condition: $condition) {
      id
      SAP_UNIQUENUMBER
      TIME
      TOPIC
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createDetailOverview = /* GraphQL */ `
  mutation CreateDetailOverview(
    $input: CreateDetailOverviewInput!
    $condition: ModelDetailOverviewConditionInput
  ) {
    createDetailOverview(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const updateDetailOverview = /* GraphQL */ `
  mutation UpdateDetailOverview(
    $input: UpdateDetailOverviewInput!
    $condition: ModelDetailOverviewConditionInput
  ) {
    updateDetailOverview(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const deleteDetailOverview = /* GraphQL */ `
  mutation DeleteDetailOverview(
    $input: DeleteDetailOverviewInput!
    $condition: ModelDetailOverviewConditionInput
  ) {
    deleteDetailOverview(input: $input, condition: $condition) {
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
      owner
      __typename
    }
  }
`;
export const createAlertOverview = /* GraphQL */ `
  mutation CreateAlertOverview(
    $input: CreateAlertOverviewInput!
    $condition: ModelAlertOverviewConditionInput
  ) {
    createAlertOverview(input: $input, condition: $condition) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateAlertOverview = /* GraphQL */ `
  mutation UpdateAlertOverview(
    $input: UpdateAlertOverviewInput!
    $condition: ModelAlertOverviewConditionInput
  ) {
    updateAlertOverview(input: $input, condition: $condition) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteAlertOverview = /* GraphQL */ `
  mutation DeleteAlertOverview(
    $input: DeleteAlertOverviewInput!
    $condition: ModelAlertOverviewConditionInput
  ) {
    deleteAlertOverview(input: $input, condition: $condition) {
      id
      ALERT
      RATING
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
