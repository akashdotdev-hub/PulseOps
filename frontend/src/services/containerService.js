import { mockContainers } from "../pages/Containers/data/mockContainers";

const delay = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const containerService = {
  async getContainers() {
    await delay(1000);

    return [...mockContainers];
  },

  async startContainer(id) {
    await delay(800);

    console.log("Starting container:", id);

    return {
      success: true,
      message: "Container started successfully",
    };
  },

  async stopContainer(id) {
    await delay(800);

    console.log("Stopping container:", id);

    return {
      success: true,
      message: "Container stopped successfully",
    };
  },

  async restartContainer(id) {
    await delay(800);

    console.log("Restarting container:", id);

    return {
      success: true,
      message: "Container restarted successfully",
    };
  },
};

export default containerService;