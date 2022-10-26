import { RuntimeConfig, RequestConfig, history } from 'umi';
import { getAuthToken, removeAuthToken } from '@/utils/authority';
import services from '@/services';
import { notification } from 'antd';
import { API } from '@/services/typings';
// 运行时配置

const { fetchUserInfo } = services.UserController;

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate

export interface InitialState extends API.UserInfo {
  name: string;
}

export async function getInitialState(): Promise<InitialState> {
  const { user, token } = await fetchUserInfo();
  return { user, token, name: `${user.lastName} ${user.firstName}` };
}

export const layout: RuntimeConfig['layout'] = () => {
  return {
    title: 'czcz',
    layout: 'mix',
    menu: {
      locale: true,
    },
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logout: (initialState) => {
      console.log(`Func: logout - PARAMS: initialState`, initialState);
    },
  };
};

const timeout = 30 * 1000;

const codeMessage: Record<number, string> = {
  200: 'The server successfully returned the requested data. Validating response data...',
  201: 'Create or modify data successfully',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'The data was deleted successfully',
  400: 'The request was sent with an error. The server did not perform any operations to create or modify data',
  401: 'The user does not have permission (token, username, password is incorrect)',
  403: 'User is authorized, but access is forbidden',
  404: 'The request sent is for a record that does not exist and the server is not operating',
  406: 'Not Acceptable',
  410: 'The requested resource is permanently deleted and will not be obtained again',
  422: 'When creating an object, a validation error occurred',
  500: 'The server has an error. Please check the server',
  502: 'Gateway error',
  503: 'The service is unavailable, the server is temporarily overloaded or maintained',
  504: 'The gateway timed out',
};

export const request: RequestConfig = {
  timeout,
  errorConfig: {
    errorHandler: (error) => {
      console.log(`Func: errorHandler - PARAMS: error`, error);
      // @ts-ignore
      const { message, response } = error;
      const { status, statusText } = response;

      if (status) {
        const description = message || codeMessage[status];

        notification.error({
          message: statusText || `${status} Error`,
          description,
        });
      } else {
        notification.error({
          description:
            'Your network has encountered a problem and cannot connect to the server',
          message: 'Network error',
        });
      }
      return response;
    },
  },
  requestInterceptors: [
    (url, { endpoint = API_URL, token = getAuthToken(), ...options }) => {
      if (token) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
      }

      return {
        url: endpoint + url,
        options,
      };
    },
  ],
  responseInterceptors: [
    (response) => {
      if (response.status === 401) {
        removeAuthToken();
        history.push('/');
      }
      return response;
    },
  ],
};
