export namespace TagSort {
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
}
