import React from "react";
import { WorklogServiceConsumer } from "../../services/worklog-service-context";

const withWorklogService = () => (Wrapped) => {
  return (props) => {
    return (
      <WorklogServiceConsumer>
        {(worklogService) => {
          return <Wrapped {...props} worklogService={worklogService} />;
        }}
      </WorklogServiceConsumer>
    );
  };
};

export default withWorklogService;
