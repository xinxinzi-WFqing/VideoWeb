/**
 * Tag category manager list
 */
import { TagCategory } from "@/domain/tags/typing";
import { PageContainer, ProColumns, ProTable } from "@ant-design/pro-components";
import React from "react";

export default () => {
    const [value, setValue] = React.useState<TagCategory.Item | undefined>();
    const [visible, setVisible] = React.useState<boolean>(false);

    const columns: ProColumns<TagCategory.Item>[] = [
        {
            title: "ID",
            dataIndex: "id",
        },
        {
            title: "标签类别",
            dataIndex: "name",
        },
        {
            title: "单选/多选",
            dataIndex: "labelChosenType",
        },
        {
            title: "创建时间",
            dataIndex: "createAt",
        },
        {
            title: "更新时间",
            dataIndex: "updateAt",
        },
        {
            title: "操作",
            render: (_, entity) => {
                return (
                    <a>修改</a>
                );
            }
        }
    ];

    return (
        <PageContainer>
            <ProTable
                columns={columns}
                search={false}

            />
        </PageContainer>
    );
}