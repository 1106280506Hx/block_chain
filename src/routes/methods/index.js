import { login } from "../../api/login/login";
import { tempGetProjectBrief, tempGetProjectDetails } from "../../api/temp";

const TestMethod = {
  test: () => {
    console.log("hello sugar");
  },

  tempLogin: (idInput, pwdInput, cb) => {
    login(idInput, pwdInput).then((res) => {
      const { pwd } = res.data;
    });
  },

  tempGetProjectBrief: (projectId, cb) => {
    tempGetProjectBrief(projectId).then((res) => {
      console.log("获取简要成功", res);
    });
  },

  tempGetProjectDetails: (projectId, cb) => {
    tempGetProjectDetails(projectId).then((res) => {
      console.log("获取详情成功", res);
    });
  },
};

export default TestMethod;
