interface BasicServerResponse {
  status: boolean;
}

interface SuccessResponse<T> extends BasicServerResponse {
  status: true;
  data: T;
}

interface ErrorResponse extends BasicServerResponse {
  status: false;
  messages: string[];
}

export type ServerResponse<T> = SuccessResponse<T> | ErrorResponse;
