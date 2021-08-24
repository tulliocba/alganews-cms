import { mdiOpenInNew } from '@mdi/js';
import Icon from '@mdi/react';
import { ComponentMeta } from '@storybook/react';
import { ReactNode, useMemo } from 'react';
import { Column, useTable } from 'react-table';

import { Table } from '../components/Table/Table';

export default {
    title: 'Example/Table',
    component: Table,
} as ComponentMeta<typeof Table>;


type Data = {
    preview: ReactNode;
    col1: string;
    col2: string;
    actions: string;
}

export function Default() {

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
                Cell: (row) => <div style={{ textAlign: 'right' }}>{row.value}</div>
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

    const instance = useTable<Data>({ data, columns });

    return <Table<Data> instance={instance} />
}

export function NoData() {

    const data = useMemo<Data[]>(
        () => [],
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
                Cell: (row) => <div style={{ textAlign: 'right' }}>{row.value}</div>
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

    const instance = useTable<Data>({ data, columns });

    return <Table<Data> instance={instance} />
}