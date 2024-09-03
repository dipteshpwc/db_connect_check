/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSysInfo = /* GraphQL */ `
  query GetSysInfo($id: ID!) {
    getSysInfo(id: $id) {
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
export const listSysInfos = /* GraphQL */ `
  query ListSysInfos(
    $filter: ModelSysInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSysInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getJobs = /* GraphQL */ `
  query GetJobs($id: ID!) {
    getJobs(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getLongRunningJobs = /* GraphQL */ `
  query GetLongRunningJobs($id: ID!) {
    getLongRunningJobs(id: $id) {
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
export const listLongRunningJobs = /* GraphQL */ `
  query ListLongRunningJobs(
    $filter: ModelLongRunningJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLongRunningJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getFinishedLongRunningJobs = /* GraphQL */ `
  query GetFinishedLongRunningJobs($id: ID!) {
    getFinishedLongRunningJobs(id: $id) {
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
export const listFinishedLongRunningJobs = /* GraphQL */ `
  query ListFinishedLongRunningJobs(
    $filter: ModelFinishedLongRunningJobsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFinishedLongRunningJobs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUpdates = /* GraphQL */ `
  query GetUpdates($id: ID!) {
    getUpdates(id: $id) {
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
export const listUpdates = /* GraphQL */ `
  query ListUpdates(
    $filter: ModelUpdatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMount = /* GraphQL */ `
  query GetMount($id: ID!) {
    getMount(id: $id) {
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
export const listMounts = /* GraphQL */ `
  query ListMounts(
    $filter: ModelMountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getIostat = /* GraphQL */ `
  query GetIostat($id: ID!) {
    getIostat(id: $id) {
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
export const listIostats = /* GraphQL */ `
  query ListIostats(
    $filter: ModelIostatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIostats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSt22 = /* GraphQL */ `
  query GetSt22($id: ID!) {
    getSt22(id: $id) {
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
export const listSt22s = /* GraphQL */ `
  query ListSt22s(
    $filter: ModelSt22FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSt22s(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTransport = /* GraphQL */ `
  query GetTransport($id: ID!) {
    getTransport(id: $id) {
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
export const listTransports = /* GraphQL */ `
  query ListTransports(
    $filter: ModelTransportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getSMlG = /* GraphQL */ `
  query GetSMlG($id: ID!) {
    getSMlG(id: $id) {
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
export const listSMlGS = /* GraphQL */ `
  query ListSMlGS(
    $filter: ModelSMlGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSMlGS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getHEALTH = /* GraphQL */ `
  query GetHEALTH($id: ID!) {
    getHEALTH(id: $id) {
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
export const listHEALTH = /* GraphQL */ `
  query ListHEALTH(
    $filter: ModelHEALTHFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHEALTH(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTop20mem = /* GraphQL */ `
  query GetTop20mem($id: ID!) {
    getTop20mem(id: $id) {
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
export const listTop20mems = /* GraphQL */ `
  query ListTop20mems(
    $filter: ModelTop20memFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTop20mems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTop20disk = /* GraphQL */ `
  query GetTop20disk($id: ID!) {
    getTop20disk(id: $id) {
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
export const listTop20disks = /* GraphQL */ `
  query ListTop20disks(
    $filter: ModelTop20diskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTop20disks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getTop20rs = /* GraphQL */ `
  query GetTop20rs($id: ID!) {
    getTop20rs(id: $id) {
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
export const listTop20rs = /* GraphQL */ `
  query ListTop20rs(
    $filter: ModelTop20rsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTop20rs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPerformanceIndicator = /* GraphQL */ `
  query GetPerformanceIndicator($id: ID!) {
    getPerformanceIndicator(id: $id) {
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
export const listPerformanceIndicators = /* GraphQL */ `
  query ListPerformanceIndicators(
    $filter: ModelPerformanceIndicatorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerformanceIndicators(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getOverview = /* GraphQL */ `
  query GetOverview($id: ID!) {
    getOverview(id: $id) {
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
export const listOverviews = /* GraphQL */ `
  query ListOverviews(
    $filter: ModelOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOverviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDetailOverview = /* GraphQL */ `
  query GetDetailOverview($id: ID!) {
    getDetailOverview(id: $id) {
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
export const listDetailOverviews = /* GraphQL */ `
  query ListDetailOverviews(
    $filter: ModelDetailOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDetailOverviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAlertOverview = /* GraphQL */ `
  query GetAlertOverview($id: ID!) {
    getAlertOverview(id: $id) {
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
export const listAlertOverviews = /* GraphQL */ `
  query ListAlertOverviews(
    $filter: ModelAlertOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlertOverviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ALERT
        RATING
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const SmlgByTime = /* GraphQL */ `
  query SmlgByTime(
    $SAP_UNIQUENUMBER: String!
    $TIME: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSMlGFilterInput
    $limit: Int
    $nextToken: String
  ) {
    SmlgByTime(
      SAP_UNIQUENUMBER: $SAP_UNIQUENUMBER
      TIME: $TIME
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const healthByTime = /* GraphQL */ `
  query HealthByTime(
    $SAP_UNIQUENUMBER: String!
    $TIME: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHEALTHFilterInput
    $limit: Int
    $nextToken: String
  ) {
    healthByTime(
      SAP_UNIQUENUMBER: $SAP_UNIQUENUMBER
      TIME: $TIME
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
