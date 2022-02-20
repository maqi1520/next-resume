import React from "react";

export const initialState = {
  profile: {
    name: "狂奔滴小马",
    about: "分享 Javascript 热门框\n架，探索 web 极致优\n化体验。",
    email: "maqi1520@qq.com",
    mobile: "186****1818",
    github: "https://github.com/maqi1520",
    home: "https://www.maqib.cn",
    workExpYear: undefined,
    workPlace: "杭州",
    positionTitle: "高级前端工程师",
  },
  avatar: {
    url: "https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image",
    display: true,
  },
  skillList: [
    { name: "HTML / CSS", desc: "", level: 5 },
    {
      name: "TypeScript / JavaScript",
      desc: "熟悉 TypeScript，丰富的 ts 项目经验",
      level: 4,
    },
    {
      name: "数据可视化",
      desc: "丰富的可视化工程实践以及开源经验",
      level: 5,
    },
    {
      name: "React / 前端工程化",
      desc: "大型前端项目经验以及组件库开发经验",
      level: 4,
    },
  ],
  educationList: [
    {
      time: ["2014.09", "2018.06"],
      school: "华南理工大学",
      major: "网络工程",
      degree: "本科",
    },
  ],
  awardList: [
    { info: "英语 CET6", time: "2015" },
    { info: "蚂蚁近卫军 卓越个人奖", time: "2018.09" },
    { info: "前端练习生 可视化讲师", time: "2020.10" },
    {
      info: "前端早早聊 分享讲师",
      time: "2021.07",
    },
  ],
  workExpList: [
    {
      company: "蚂蚁集团",
      department: "体验技术部",
      time: ["2018.06", "至今"],
      desc: "1. 担任蚂蚁高管决策和管理协同产品 “数据作战室” 的前端负责人\r\n2. 负责蚂蚁敏捷 BI 产品 “DeepInsight” 的可视分析模块产品能力建设\n3. 数据可视化 AntV 团队核心成员，负责 G2、G2Plot 开源技术的建设",
    },
    {
      company: "蚂蚁金服",
      department: "大数据部",
      time: ["2017.06", "2017.12"],
      desc: "前端实习生。使用 React 参与开发多类产品：数据研发平台、数据决策平台、数据分析平台的研发工作，同时也参与大型 BI 产品的重构工作，有良好的编码习惯。",
    },
    {
      company: "数沃信息科技有限公司",
      department: "",
      time: ["2017.03", "2017.05"],
      desc: "前端实习生。使用 Vue 来实现平台功能和逻辑，再用 ECharts 来对数据挖掘分析后的可视化结果进行展示",
    },
  ],
  projectList: [
    {
      name: "数据作战室",
      role: "前端负责人",
      time: ["2017.03", "2017.05"],
      desc: "面向总裁和高管以及决策 BI 的数字化经营决策和管理协同产品。提供一站式的数据化经营决策和管理协同功能，让高管高效获取决策信息，并提升管理效率。",
      content:
        "1. 项目从0到1的框架设计和开发 2. 产品体验精雕细琢的打磨 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率",
    },
    {
      name: "DeepInsight",
      role: "可视分析负责人",
      time: ["2017.03", "2017.05"],
      desc: "DeepInsight 是蚂蚁集团自主研发的自助式 BI 数据洞察分析平台，面向企业分析人员、业务人员和开发人员，帮助蚂蚁集团实现精细化运营。",
      content:
        "BI 平台工具核心部分是报表制作，也就是通过数据连接、可视化配置形成图表物料之后，通过拖拽方式进行页面编排，最终形成报表页面进行发布的过程。\n1. 主导开放能力建设，拉通产品、设计建设和扩展可视化图形，提升丰富度\n2. 产品体验优化，尤其是对 ECharts 的体验顽疾进行攻克\n3. 主导可视化能力建设：业务标准化图表库建设(通用组件设计和开发经验丰富)、促进数据分析能力增强等可视化一体化建设",
    },
    {
      name: "G2、G2Plot",
      role: "核心开发者",
      time: ["2017.03", "2017.05"],
      desc: "G2 是基于图形语法理论的可视化渲染引擎，G2Plot 是在 G2 基础上封装的开箱即用的统计可视化图表库",
      content:
        "AntV 可视化建设，赋能整个蚂蚁和阿里集团统计可视化分析相关业务。负责 AntV 系列: AntV 官网、G 渲染引擎、 G2、G2Plot、ThemeSet 主题构建器等开源项目的研发工作。",
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any };

interface AppContextInterface {
  state: State;
  dispatch: React.Dispatch<ACTIONTYPE>;
}

export const ResumeContext = React.createContext<AppContextInterface>({
  state: initialState,
  dispatch: (action) => action,
});

export function reducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "save":
      return { ...state, ...action.payload };
    default:
      throw new Error();
  }
}
