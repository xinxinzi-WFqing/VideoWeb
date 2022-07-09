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
  interface ListResponse extends Response {
    data: Data;
  }

  interface Data {
    pageSize: number;
    total: number;
    list: Item[];
  }

  interface Item {
    id: number;
    name: string;
    createAt: number;
    updateAt: number;
  }

  interface CreateResponse {
    name: string;
  }

  interface CreateResponse extends Response {
    data: null;
  }

  interface UpdateRequest {
    id: number;
    name: string;
  }

  interface UpdateResponse extends Response {
    data: null;
  }
}
