import moment from "moment";

import { request } from "../request.js";

export const fetchComments = () => {
  return request({
    url: "comments"
  }).then(response => {
	console.log(response.data);
    return response.data
  });
};
