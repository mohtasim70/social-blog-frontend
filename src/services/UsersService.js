import http from "./HttpService";

const UsersService = () => {
    const getUsers = async () => {
        try {
          const response = await http.get("https://jsonplaceholder.typicode.com/users");
          return await response.data;
        } catch (error) {
          console.log("failed", error);
        }
      };

      const getUser = async (id) => {
        try {
          const response = await http.get("https://jsonplaceholder.typicode.com/users/"+id);
          return await response.data;
        } catch (error) {
          console.log("failed", error);
        }
      };

    return {getUsers, getUser};

};

export default UsersService;