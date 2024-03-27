// const router = useRouter();

// export default {
//   methods: {
//     async tokenExpiry() {
//       const token = localStorage.getItem("customer-token");

//       if (token) {
//         const tokenData = JSON.parse(atob(token.split(".")[1]));
//         const currentTime = Math.floor(Date.now() / 1000);

//         if (tokenData.exp < currentTime) {
//           await router.push({ name: "login" });
//           throw new Error("Token expired");
//         }
//       }
//     },
//   },
// };
