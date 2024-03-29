import { computed } from "vue";

export default computed(() => {
  const adminToken = localStorage.getItem("admin-token");
  const adminTokenData = JSON.parse(atob(adminToken.split(".")[1]));
  const currentTime = Math.floor(Date.now() / 1000);
  return adminTokenData.exp >= currentTime;
});
