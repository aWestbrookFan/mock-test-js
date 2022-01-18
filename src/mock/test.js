import Mock from "mockjs";
export default [
    {
      url: "/api/getUser",
      method: "get",
      response: () => {
        return {
          code: 200,
          message: "ok",
          data: Mock.mock({
            "array|1-10": [
              {
                "name|+1": [
                  "Hello",
                  "Mock.js",
                  "!"
                ]
              }
            ]
          })
        };
      }
    }
  ];
  