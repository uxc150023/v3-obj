import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup(props) {
    const state = reactive({
      title: "home",
      value1: "",
      usedList:  [
        {
          id: 0,
          title: "PMCP",
          content: "一站式、全集成的临床研究项目管理协同平台。",
          icon: "",
        },
        {
          id: 1,
          title: "eTMF",
          content: "高效、安全、协作的主文 档管理系统。",
          icon: "",
        },
        {
          id: 2,
          title: "机构榜单",
          content: "机构榜单全前10名。",
          icon: "",
        },
        {
          id: 3,
          title: "研究者榜单",
          content: "研究者榜单全前10名。",
          icon: "",
        },
      ],
    
      missonList:  [
        {
          id: 0,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
        {
          id: 1,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
        {
          id: 2,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
        {
          id: 3,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
        {
          id: 4,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
        {
          id: 5,
          name: "北京协和医院呼吸内科王蒙的研究…",
          yanValue: 120,
          time: "28天12小时",
          labels: ["企业内", "PI星级调研", "@我"],
          author: "尹琪琪",
        },
      ],
    
      expertList:  [
        {
          id: 0,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
        {
          id: 1,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
        {
          id: 2,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
        {
          id: 3,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
        {
          id: 4,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
        {
          id: 5,
          name: "田阿静",
          company: "上海妙一生物科技公司",
          labels: ["药物", "中心启动", "总监", "十年从业经验"],
          services: [
            "中心信息咨询",
            "研究者信息咨询",
            "中心信息调研",
            "研究者调研",
            "中心启动业务承接",
          ],
        },
      ],
    
      piList:  [
        {
          id: 0,
          reference: "汤安邦",
          piPoint: 4,
          piName: "钟南山",
          piProfessional: "主任医师 / 主任",
          piSite: "广州中医院",
          piDepartment: "呼吸科",
          CDECount: 29,
          field: ["药物备案", "器械备案"],
        },
        {
          id: 1,
          reference: "汤安邦",
          piPoint: 4,
          piName: "钟南山",
          piProfessional: "主任医师 / 主任",
          piSite: "广州中医院",
          piDepartment: "呼吸科",
          CDECount: 29,
          field: ["药物备案", "器械备案"],
        },
        {
          id: 2,
          reference: "汤安邦",
          piPoint: 4,
          piName: "钟南山",
          piProfessional: "主任医师 / 主任",
          piSite: "广州中医院",
          piDepartment: "呼吸科",
          CDECount: 29,
          field: ["药物备案", "器械备案"],
        },
      ],
      carouselList:  [
        {
          id: 0,
          content: "找工具、找任务、找专家、找研究者... 你想找到的都在 - Trial.Link",
          img: "",
          isShow: true,
        },
        {
          id: 1,
          content:
            "机构、研究者在Trial.Link获得更多项目需求信息，或发布研究意向供申办方选择，同时在TDC数据库可以进行临研数据分析。",
          img: "",
          isShow: false,
        },
      ],
      searchInputType: "1",
      searchInputValue: "",
    });

    function toLogin(){
      //
    }
    function toRegister(){
      //
    }
    function carouselChange(){
      //
    }
    return {
      ...toRefs(state),
      toLogin,
      toRegister,
      carouselChange
    };
  },
});
