import React from "react";

export const initialState = {
  profile: {
    name: "狂奔滴小马",
    about:
      '关注公众号"JS酷"\n回复"简历"获取源码\n分享 Javascript 热门\n框架，探索 web 极致\n优化体验。',
    email: "maqi1520@qq.com",
    mobile: "186****1818",
    github: "https://github.com/maqi1520",
    home: "https://www.maqib.cn",
    workPlace: "杭州",
    positionTitle: "高级前端工程师",
  },
  avatar: {
    url: "https://p6-passport.byteacctimg.com/img/user-avatar/585e1491713363bc8f67d06c485e8260~300x300.image",
    display: true,
    circle: true,
    theme: "1",
  },
  skillList: [
    {
      name: "HTML / CSS",
      desc: "",
      level: 5,
    },
    {
      name: "TypeScript / JavaScript",
      desc: "熟练 JavaScript，丰富的 ts 项目经验",
      level: 4,
    },
    {
      name: "Express/Koa",
      desc: "丰富的 NodeJS 实践以及开源经验",
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
      time: ["2012.09", "2016.06"],
      school: "华南理工大学",
      major: "计算机科学",
      degree: "本科",
    },
  ],
  awardList: [
    {
      info: "英语 CET6",
      time: "2015",
    },
    {
      info: "前端练习生 分享讲师",
      time: "2020.10",
    },
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
      desc: "1. 使用 React + Dva.js + Ant Design 技术栈开发企业业务管理后台\n2. 负责 XXXX 产品 XXXX 的可视分析模块产品能力建设\n3. 帮助项目工程化，添加 CICD 发布流程，接入页面告警和埋点上报",
    },
    {
      company: "腾讯",
      department: "大数据部",
      time: ["2017.06", "2017.12"],
      desc: "1. 封装企业的 JS-SDK，使开发者可快速上手，结合 React 技术栈作为前端模板\n2. 使用 Next.js 作为中间层，再结合 Redis 和 Docker 做一个 Node 端开发模板\n3. 结合 qiankun 微前端框架，使用微前端的思路管理多个应用\n\n",
    },
    {
      company: "杭州JS酷科技有限公司",
      department: "前端实习生",
      time: ["2017.03", "2017.05"],
      desc: "1. 使用 Vue 来实现平台功能和逻辑\n2. 再用 ECharts 来对数据挖掘分析后的可视化结果进行展示",
    },
  ],
  projectList: [
    {
      name: "在线流程图",
      role: "前端负责人",
      time: ["2017.03", "2017.05"],
      desc: "模仿在线流程图 processon 实现在线流程图工具",
      content:
        "项目难点\n1. 项目从0到1的框架设计和开发 \n 2. 产品体验精雕细琢的打磨 \n 3. 建立稳定性保障机制。目前仍在迭代中，帮助提升高管业务决策效率",
    },
    {
      name: "低代码平台",
      role: "核心开发者",
      time: ["2017.03", "2017.05"],
      desc: "通过拖拽生成代码、集成 ant-design 、@antd/charts 等组件库",
      content:
        "项目难点\n1. 多组件在线层级嵌套拖拽\n2. 将 JSON 转成的 React 组件库、形成可视化一体化建设\n3. JSON 支持双向编辑，读取和写入是一一对应的\n4. 实现在线代码预览和下载",
    },
    {
      name: "在线简历生成器",
      role: "独立开发者",
      time: ["2017.03", "2017.05"],
      desc: "在线填写简历，一键导出 PDF",
      content: "项目难点\n1. 前端在线渲染PDF \n2. PDF 中样式设置",
    },
  ],
};

export type State = typeof initialState;

type ACTIONTYPE = { type: "save"; payload: any } | { type: "restore" };

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
      localStorage.setItem(
        "refuseme_data",
        JSON.stringify({ ...state, ...action.payload })
      );
      return { ...state, ...action.payload };
    case "restore":
      localStorage.removeItem("refuseme_data");
      return initialState;
    default:
      throw new Error();
  }
}
