import React, { Component } from "react";
import { connect } from "react-redux";
import { withWorklogService } from "../hoc";
import { worklogsLoaded } from "../../actions";
import { compose } from "../../utils";

import styled from "styled-components";
import WorklogHead from "./worklog-head";
import Worklog from "../worklog";

const WorklogBase = styled.div`
  width: 70%;
  height: 100px;
  border-right: 1px solid #e9ecf2;
  padding-right: 5%;
`;

class WorklogList extends Component {
  componentDidMount() {
    const { worklogService } = this.props;
    const data = worklogService.getWorklogs();
    console.log(data);
    this.props.worklogsLoaded(data);
  }

  render() {
    const { worklogs } = this.props;

    return (
      <WorklogBase>
        <WorklogHead />
        <ul className="list-group">
          {worklogs.map((worklog) => {
            return (
              <li
                key={worklog.id}
                className="list-group-item list-group-item-primary"
              >
                <Worklog worklog={worklog} />
              </li>
            );
          })}
        </ul>
      </WorklogBase>
    );
  }
}

const mapStateToProps = ({ worklogs }) => {
  return {
    worklogs,
  };
};

const mapDispatchToProps = {
  worklogsLoaded,
};

export default compose(
  withWorklogService(),
  connect(mapStateToProps, mapDispatchToProps)
)(WorklogList);
