// API types based swagger docs
// https://assignment-todolist-api.vercel.app/docs

export type ItemPostRequest = {
  name: string;
};

export type ItemPostResponse = {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
};

export type ItemGetResponse = {
  id: number;
  isCompleted: boolean;
  name: string;
};

export type ItemDetailGetResponse = {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
};

export type ItemPatchRequest = {
  name?: string;
  memo?: string;
  imageUrl?: string;
  isCompleted?: boolean;
};

export type ItemDeleteResponse = {
  massage: string;
};
