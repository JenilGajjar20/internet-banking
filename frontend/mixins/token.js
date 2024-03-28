// export default {
//   setup() {
//     const checkTokenExpiry = computed(() => {
//       const token = localStorage.getItem("customer-token");
//       const tokenData = JSON.parse(atob(token.split(".")[1]));
//       const currentTime = Math.floor(Date.now() / 1000);
//       return tokenData.exp >= currentTime;
//     });
//   },
// };
