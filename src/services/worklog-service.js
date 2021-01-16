export default class WorklogService {
  getWorklogs() {
    return [
      {
        id: 0,
        worklogName: "Dima need write redux app",
        issues: "Redux App",
        date: "15.01.2021",
        startTime: "12:12",
        endTime: "13:13",
        duration: "61",
      },
      {
        id: 1,
        worklogName: "Dima please write redux app",
        issues: "Redux App",
        date: "12.01.2021",
        startTime: "12:12",
        endTime: "13:13",
        duration: "endless",
      },
    ];
  }
}
