import React, { useContext } from "react";
import { Tabs } from "antd";
import { FormCreator, FormListCreator } from "./FormCreator";
import { ResumeContext } from "../../context/resumeContext";
const { TabPane } = Tabs;

export default function Editor() {
  const { state, dispatch } = useContext(ResumeContext);
  const handleChange = (value) => {
    dispatch({
      type: "save",
      payload: value,
    });
  };
  return (
    <div>
      <Tabs tabPosition="left" defaultActiveKey="1" type="line">
        <Tabs.TabPane tab="头像设置" key="1">
          <FormCreator
            config={[
              {
                type: "input",
                displayName: "头像",
                attributeId: "url",
              },
              {
                type: "checkbox",
                displayName: "显示",
                attributeId: "display",
              },
            ]}
            name="avatar"
            value={state.avatar}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="基本信息" key="2">
          <FormCreator
            config={[
              {
                type: "input",
                displayName: "姓名",
                attributeId: "name",
              },
              {
                type: "textarea",
                displayName: "简介",
                attributeId: "about",
              },
              {
                type: "input",
                displayName: "手机",
                attributeId: "mobile",
              },
              {
                type: "input",
                displayName: "email",
                attributeId: "email",
              },
              {
                type: "input",
                displayName: "github",
                attributeId: "github",
              },
              {
                type: "input",
                displayName: "主页",
                attributeId: "home",
              },
              {
                type: "number",
                displayName: "工作经验",
                attributeId: "workExpYear",
              },
              {
                type: "input",
                displayName: "工作地点",
                attributeId: "workPlace",
              },
              {
                type: "input",
                displayName: "职位",
                attributeId: "positionTitle",
              },
            ]}
            name="profile"
            value={state.profile}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="教育背景" key="3">
          <FormListCreator
            name="educationList"
            config={[
              {
                type: "input",
                displayName: "学校",
                attributeId: "school",
              },
              {
                type: "range",
                displayName: "时间",
                attributeId: "time",
              },
              {
                type: "input",
                displayName: "专业",
                attributeId: "major",
              },
              {
                type: "input",
                displayName: "学位",
                attributeId: "degree",
              },
            ]}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="专业技能" key="4">
          <FormListCreator
            name="skillList"
            config={[
              {
                type: "input",
                displayName: "名称",
                attributeId: "name",
              },
              {
                type: "number",
                displayName: "熟练度",
                attributeId: "level",
              },
              {
                type: "textarea",
                displayName: "描述",
                attributeId: "desc",
              },
            ]}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>

        <Tabs.TabPane tab="工作经历" key="6">
          <FormListCreator
            name="workExpList"
            config={[
              {
                type: "input",
                displayName: "公司名称",
                attributeId: "company",
              },
              {
                type: "input",
                displayName: "部门",
                attributeId: "department",
              },
              {
                type: "range",
                displayName: "时间",
                attributeId: "time",
              },
              {
                type: "textarea",
                displayName: "工作描述",
                attributeId: "desc",
              },
            ]}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="项目经历" key="7">
          <FormListCreator
            name="projectList"
            config={[
              {
                type: "input",
                displayName: "项目名称",
                attributeId: "name",
              },
              {
                type: "input",
                displayName: "担任角色",
                attributeId: "role",
              },
              {
                type: "range",
                displayName: "时间",
                attributeId: "time",
              },
              {
                type: "textarea",
                displayName: "项目描述",
                attributeId: "desc",
              },
              {
                type: "textarea",
                displayName: "项目难点",
                attributeId: "content",
              },
            ]}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="更多信息" key="5">
          <FormListCreator
            name="awardList"
            config={[
              {
                type: "textarea",
                displayName: "信息",
                attributeId: "info",
              },
              {
                type: "input",
                displayName: "时间",
                attributeId: "time",
              },
            ]}
            value={state}
            onChange={handleChange}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
