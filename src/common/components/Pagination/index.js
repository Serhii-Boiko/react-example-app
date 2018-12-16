import React from 'react';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class CustomPagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.page || this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.page || this.props.initialPage);
        }
    }

    setPage(page) {
        const items = this.props.items;
        let pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);
        const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        this.setState({ pager: pager });
        this.props.onChangePage(pageOfItems, pager.currentPage);
    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
        pageSize = pageSize || 10;
        const totalPages = Math.ceil(totalItems / pageSize);

        let startPage;
        let endPage;

        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        const pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        const pager = this.state.pager;
        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }

        return (
            <div className="mt-2 mb-2">
                <Pagination aria-label="Pagination" listClassName="justify-content-center">
                    <PaginationItem disabled={pager.currentPage === 1}>
                        <PaginationLink onClick={() => this.setPage(1)}>
                            First
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={pager.currentPage === 1}>
                        <PaginationLink previous onClick={() => this.setPage(pager.currentPage - 1)}>
                            Previous
                        </PaginationLink>
                    </PaginationItem>
                    {pager.pages.map((page, index) =>
                        <PaginationItem key={index} active={pager.currentPage === page}>
                            <PaginationLink onClick={() => this.setPage(page)}>
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                    <PaginationItem disabled={pager.currentPage === pager.totalPages}>
                        <PaginationLink onClick={() => this.setPage(pager.currentPage + 1)}>
                            Next
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled={pager.currentPage === pager.totalPages}>
                        <PaginationLink onClick={() => this.setPage(pager.totalPages)}>
                            Last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }
}

CustomPagination.defaultProps = {
    initialPage: 1
};

export default CustomPagination;
