import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import { ReactNode, useMemo } from "react";
import { Column, useTable } from "react-table";
import { Body, BodyCell, BodyRow, Heading, HeadingCell, HeadingRow, Wrapper } from "./Table.styles";

export interface TableProps {

}

type Data = {
    preview: ReactNode;
    col1: string;
    col2: string;
    actions: string;
}

export const Table = ({ }: TableProps) => {

    const data = useMemo<Data[]>(
        () => [
            {
                col1: 'Hello',
                col2: 'World',
                actions: 'Ações',
                preview: <Icon
                    size="14px"
                    color="#09f"
                    path={mdiOpenInNew}
                />
            },
            {
                col1: 'react-table',
                col2: 'rocks',
                actions: 'Ações',
                preview: <Icon
                    size="14px"
                    color="#09f"
                    path={mdiOpenInNew}
                />
            },
            {
                col1: 'whatever',
                col2: 'you want',
                actions: 'Ações',
                preview: <Icon
                    size="14px"
                    color="#09f"
                    path={mdiOpenInNew}
                />
            },
        ],
        []
    );

    const columns = useMemo<Column<Data>[]>(
        () => [
            {
                Header: '',
                accessor: 'preview',
            },
            {
                Header: 'Column 1',
                accessor: 'col1',
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
            },
            {
                Header: 'Ações',
                accessor: 'actions',
            },
        ],
        []
    );

    const table = useTable<Data>({ data, columns });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = table;

    console.log(`getTableProps: ${getTableProps}`);
    console.log(`getTableBodyProps: ${getTableBodyProps}`);
    console.log(`headerGroups: ${headerGroups}`);
    console.log(`rows: ${rows}`);
    console.log(`prepareRow: ${prepareRow}`);

    return (
        <Wrapper {...getTableProps()} cellPadding={0} cellSpacing={0}>
            <Heading>
                {
                    headerGroups.map(headerGroup => (
                        <HeadingRow {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <HeadingCell {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </HeadingCell>
                                ))
                            }

                        </HeadingRow>
                    ))
                }
            </Heading>
            <Body {...getTableBodyProps()}>
                {
                    rows.map(row => {

                        prepareRow(row);

                        return <BodyRow {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <BodyCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </BodyCell>
                                })
                            }
                        </BodyRow>
                    })
                }
            </Body>
        </Wrapper>
    );
}