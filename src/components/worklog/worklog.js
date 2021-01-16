import React, { Fragment } from "react";

const Worklog = ({ worklog }) => {
  const {
    id,
    worklogName,
    issues,
    date,
    startTime,
    endTime,
    duration,
  } = worklog;
  return (
    <Fragment>
      <span>id: {id}</span>
      <br />
      <span>worklogName: {worklogName}</span>
      <br />
      <span>issues: {issues}</span>
      <br />
      <span>date: {date}</span>
      <br />
      <span>startTime: {startTime}</span>
      <br />
      <span>endTime: {endTime}</span>
      <br />
      <span>duration: {duration}</span>
    </Fragment>
  );
};

export default Worklog;
