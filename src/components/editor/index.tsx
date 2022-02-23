import React, { useCallback, useContext } from "react";
import { Tabs } from "antd";
import debounce from "lodash.debounce";
import { FormCreator, FormListCreator } from "./FormCreator";
import { ResumeContext } from "../../context/resumeContext";
import { config } from "./conifg";

export default function Editor() {
  const { state, dispatch } = useContext(ResumeContext);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSave = useCallback(
    debounce((value) => {
      dispatch({
        type: "save",
        payload: value,
      });
    }, 1000),
    []
  );
  const handleChange = (value, immediately) => {
    if (immediately) {
      dispatch({
        type: "save",
        payload: value,
      });
    } else {
      handleSave(value);
    }
  };
  return (
    <div>
      <Tabs tabPosition="left" defaultActiveKey="1" type="line">
        <Tabs.TabPane tab="头像设置" key="1">
          <FormCreator
            config={config.avatar}
            name="avatar"
            value={state.avatar}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="基本信息" key="2">
          <FormCreator
            config={config.profile}
            name="profile"
            value={state.profile}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="教育背景" key="3">
          <FormListCreator
            name="educationList"
            config={config.educationList}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="专业技能" key="4">
          <FormListCreator
            name="skillList"
            config={config.skillList}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab="工作经历" key="6">
          <FormListCreator
            name="workExpList"
            config={config.workExpList}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="项目经历" key="7">
          <FormListCreator
            name="projectList"
            config={config.projectList}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="更多信息" key="5">
          <FormListCreator
            name="awardList"
            config={config.awardList}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
