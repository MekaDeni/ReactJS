import { fakeRequest } from "../fakeRequest.js";

export const fetchComments = () => {
  const mockCommentsData = sessionStorage.getItem("user-comments")
    ? JSON.parse(sessionStorage.getItem("user-comments"))
    : [
    	{	
    		id: 'test',
    		name: 'Имя',
    		comment: 'Комент'
    	}
    ];
  return fakeRequest(mockCommentsData, 3000).then(response => response);
};
