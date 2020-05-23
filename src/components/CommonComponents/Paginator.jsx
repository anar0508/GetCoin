import React, { Component } from "react";
import PaginatorPageBar from "./PaginatorPageBar";
import { PaginatorMain, Page } from "./stylePaginator";

const PAGE_SIZE = 4;

class Paginator extends Component {
  constructor(props) {
    super(props);
    this.state = { curPage: 1, pageAmount: 0 };
  }

  incrementIndex = (e) => {
    const newPage =
      this.state.curPage + 1 > Math.ceil(this.props.rowElems.length / PAGE_SIZE)
        ? Math.ceil(this.props.rowElems.length / PAGE_SIZE)
        : this.state.curPage + 1;
    this.setState({ curPage: newPage });
  };

  decrementIndex = (e) => {
    const newPage = this.state.curPage - 1 < 1 ? 1 : this.state.curPage - 1;
    this.setState({ curPage: newPage });
  };

  handleChangePage = (selectedPage) => {
    this.setState({ curPage: selectedPage });
  };

  componentDidUpdate() {
    if (
      this.state.curPage >
      Math.ceil(this.props.rowElems.length / PAGE_SIZE) + 1
    )
      this.setState({ curPage: 1 });
  }

  render() {
    return (
      <PaginatorMain>
        <Page>
          {this.props.rowElems.slice(
            (this.state.curPage - 1) * PAGE_SIZE,
            (this.state.curPage - 1) * PAGE_SIZE + PAGE_SIZE
          )}
        </Page>
        <PaginatorPageBar
          pageAmount={Math.ceil(this.props.rowElems.length / PAGE_SIZE)}
          onChange={this.handleChangePage}
          incrCallback={this.incrementIndex}
          decrCallback={this.decrementIndex}
          curSelectedPage={this.state.curPage}
        />
      </PaginatorMain>
    );
  }
}

export default Paginator;
