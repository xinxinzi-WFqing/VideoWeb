export namespace Classification {
  interface ListRequest {
    /**
     * 页码，初始页码为1
     */
    page?: string;
    /**
     * 页大小，默认为20
     */
    pageSize?: string;
  }
  export interface RootType {
    code: number;
    msg: string;
    data: Data;
    traceId: string;
  }

  export interface Data {
    pageSize: number;
    total: number;
    list: Item[];
  }

  export interface Item {
    id: number;
    name: string;
    createAt: number;
    updateAt: number;
  }
}
