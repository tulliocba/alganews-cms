import { TableInstance } from "react-table";
import { Body, BodyCell, BodyRow, Heading, HeadingCell, HeadingRow, Wrapper } from "./Table.styles";

export function Table<T extends Object> ({ instance }: {instance: TableInstance<T>}){

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = instance;

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