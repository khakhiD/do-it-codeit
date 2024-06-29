import {
  ItemDeleteResponse,
  ItemDetailGetResponse,
  ItemGetResponse,
  ItemPatchRequest,
  ItemPostRequest,
  ItemPostResponse,
} from '@/types/types';

// API URL 및 TENANT ID
const TENANT_ID = 'khakhid';
const API_BASE_URL = new URL('https://assignment-todolist-api.vercel.app/api');

// APIs
export const postItem = async (
  data: ItemPostRequest
): Promise<ItemPostResponse> => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(response);
};

export const getItems = async (): Promise<ItemGetResponse[]> => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/items`);
  return checkResponse(response);
};

export const getItemDetail = async (
  itemId: number
): Promise<ItemDetailGetResponse> => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/items/${itemId}`);
  return checkResponse(response);
};

export const patchItem = async (
  data: ItemPatchRequest,
  itemId: number
): Promise<ItemDeleteResponse> => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/items/${itemId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return checkResponse(response);
};

export const deleteItem = async (itemId: number) => {
  const response = await fetch(`${API_BASE_URL}/${TENANT_ID}/items/${itemId}`, {
    method: 'DELETE',
  });

  return checkResponse(response);
};

const checkResponse = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || '응답 에러 발생!');
  }
  return response.json();
};
