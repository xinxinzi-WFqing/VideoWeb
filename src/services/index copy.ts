import { request } from '@umijs/max';
import { cloneDeep } from 'lodash';
import apis from './apis';

type APIFunctionValue = Function;

/**
 * Parse api string to api object
 * @param {string} api - Defined api
 * @returns {object} - Parsed api object, include method and path
 */
function parseApi(api: string): Record<'method' | 'path', string> {
  let method: string = 'Get';
  let path: string = api;

  const partitionApi: string[] = api.split(' ');
  if (partitionApi.length === 2) {
    method = partitionApi[0];
    path = partitionApi[1];
  }

  return { method, path };
}

/**
 * Checkout path is include path params
 * @param path - Path string
 * @return - result
 */
function isIncludePathParams(path: string): boolean {
  return path.includes('{') && path.includes('}');
}

/**
 * Assemble url and path params
 * @param {string} path - Path string include path params
 * @param {any} data - Request params object
 * @returns {string} - The real request url
 */
function assembleUrl(path: string, data: any): string {
  let realUrl: string = path;
  // 声明正则对象
  const patter: RegExp = new RegExp(/{\s?([a-zA-Z]*?)}/g);
  let key: RegExpExecArray | null;
  const keys: string[] = [];
  // 遍历获取匹配项,保存为key值数组
  do {
    key = patter.exec(path);
    if (key) {
      keys.push(key[1]);
    }
  } while (key);
  // 遍历替换url中path参数,同时从参数对象中删除对应键值对
  keys.forEach((item) => {
    realUrl = realUrl.replace(/{[a-zA-Z]*}/, data[item]);
    delete data[item];
  });
  return realUrl;
}

/**
 * Create request function by count of params
 * @param {object} options - Request params
 */
function genRequest(options: { method: string; path: string; data?: any; headers?: any }) {
  const { method, path, data, headers } = options;
  const cloneData = cloneDeep(data);

  // 不包含path参数
  if (!isIncludePathParams(path)) {
    if (['GET', 'Get', 'get'].includes(method)) {
      return request(path, {
        method: method,
        params: cloneData,
        headers: headers,
      });
    } else {
      return request(path, {
        method: method,
        data: cloneData,
        headers: headers,
      });
    }
  } else {
    const url: string = assembleUrl(path, data);
    if (['GET', 'Get', 'get'].includes(method)) {
      return request(url, {
        method: method,
        params: cloneData,
        headers: headers,
      });
    } else {
      return request(url, {
        method: method,
        data: cloneData,
        headers: headers,
      });
    }
  }
}

/**
 * Create request function by api
 * @param {string} api - Defined api
 * @returns gen request function
 */
function gen(api: string) {
  const apiObject = parseApi(api);
  return function (...options: any[]) {
    /**
     * 根据请求参数数量调用方法
     */
    if (options.length === 0) {
      return genRequest({
        ...apiObject,
      });
    } else if (options.length === 1) {
      const data = options[0];
      return genRequest({
        ...apiObject,
        data,
      });
    } else if (options.length === 2) {
      const data = options[0];
      const headers = options[1];
      return genRequest({
        ...apiObject,
        data,
        headers,
      });
    } else {
      throw new Error('Count of params is illige');
    }
  };
}

const APIFunction: Record<string, APIFunctionValue> = {
  '': () => {
    return new Promise((_, reject) => {
      reject('Api is illige!');
    });
  },
};
for (const key in apis) {
  APIFunction[key] = gen(apis[key]);
}
