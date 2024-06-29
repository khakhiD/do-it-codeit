// API URL 및 TENANT ID
const TENANT_ID = 'khakhid';
const API_BASE_URL = new URL('https://assignment-todolist-api.vercel.app/api');

// type
type ImagePostResponse = {
  url: string;
};

export const postImage = async (data: FormData): Promise<ImagePostResponse> => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/images/upload`, {
    method: 'POST',
    body: data,
  });

  const responseData = await response.json();

  return responseData.url;
};
