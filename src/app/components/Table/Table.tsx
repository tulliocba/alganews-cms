import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import Icon from "@mdi/react";
import { transparentize } from "polished";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { TableInstance } from "react-table";

import { NoData } from "../NoData/NoData";
import { Body, BodyCell, BodyRow, Heading, HeadingCell, HeadingRow, TablePagination, Wrapper } from "./Table.styles";

export interface TableProps<T extends Object> {
    instance: TableInstance<T>,
    onPaginate?: (newPage: number) => any
}

export const Table = <T extends Object>({ instance, onPaginate }: TableProps<T>) => {

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
        pageCount,
        gotoPage,
        state: {
            pageIndex,
        }
    } = instance;

    useEffect(() => {
        onPaginate && onPaginate(pageIndex);
    }, [pageIndex, onPaginate])

    return (
        <>
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
            {!rows.length &&
                <div style={{ backgroundColor: transparentize(0.95, '#274060') }}>
                    <NoData height={360} />
                </div>
            }

            <TablePagination>
                <ReactPaginate
                    pageCount={pageCount}
                    onPageChange={page => gotoPage(page.selected)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={4}
                    nextLabel={<Icon path={mdiChevronRight} size="16px"/>}
                    previousLabel={<Icon path={mdiChevronLeft} size="16px"/>
                }
                />
            </TablePagination>
        </>
    );
}