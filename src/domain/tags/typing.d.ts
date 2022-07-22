export namespace TagCategory {
  interface ListRequest {
    /**
     * 页码，起始页码为1
     */
    page?: string;
    /**
     * 页大小，默认为20复制
     */
    pageSize?: string;
  }

  interface ListRersponseData extends ListRersponse {
    code: number;
    msg: string;
    data: Data;
  }

  interface Data {
    list: Item[];
    pageSize: number;
    total: number;
  }

  interface Item {
    id: number;
    name: string;
    labelChosenType: number;
    createAt: number;
    updateAt: number;
  }
  interface CreateRequest {
    name: string;
    labelChosenType: number;
    labels: string[];
  }

  interface CreateResponse {
    data: null;
  }

  interface UpdateRequest {
    id: number;
    name: string;
    labels: Label[];
  }

  interface Label {
    id: number;
    name: string;
  }
}

export namespace Tag {
  interface ListRequest {
    /**
     * 分类id
     */
    categoryId: string;
    /**
     * 页码，起始页码为1
     */
    lastId?: string;
    /**
     * 页大小，默认为20复制
     */
    limit?: string;
  }
  interface ListResponse extends Response {
    data: Data;
  }

  interface Data {
    lastId: number;
    limit: number;
    list: Item[];
  }

  interface Item {
    id: number;
    name: string;
  }
}
