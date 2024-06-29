// utils/response.ts

export interface ApiResponse<T> {
  success: boolean;
  value: T | null;
  reason: string | null;
}

export function successResponse<T>(value: T, reason:string): ApiResponse<T> {
  return {
    success: true,
    value: value,
    reason: null,
  };
}

export function errorResponse(reason: string): ApiResponse<string> {
  return {
    success: false,
    value: null,
    reason: reason,
  };
}
