export namespace Content {
  interface ListRequest {
    /**
     * 内容标题，支持模糊查询复制
     */
    title?: string;
    /**
     * 页码，初始页码为1
     */
    page?: string;
    /**
     * 页大小，默认为20
     */
    pageSize?: string;
  }

  interface ListData {
    contents: Content[];
  }

  interface Content {
    id: number;
    title: string;
    cover: string;
    introduction: string;
    categoryId: number;
    categoryName: string;
    labels: Label[];
    score: number;
    content: string;
    cast: string[];
    createAt: number;
    modifyAt: number;
  }

  interface Label {
    labelId: number;
    labelName: string;
  }

  interface ListResponseData extends ListResponse {
    data: ListData;
  }
}
