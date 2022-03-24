import { Button, Drawer, Row, Table, Col, Divider } from "antd";
import { useEffect, useState } from "react";
import { BooksDeclare } from "../../models";
function Books() {
  const [books, setBooks] = useState<BooksDeclare[]>([]);
  const [visible, setVisible] = useState(false);
  const [book, setBook] = useState<BooksDeclare>();
  const [loading, setLoading] = useState(true);
  const fetchBooks = async () => {
    const resp = await fetch("https://www.anapioficeandfire.com/api/books");
    const books = await resp.json();
    setBooks(books);
    setLoading(false);
  };
  const showDrawer = (item: BooksDeclare): void => {
    setBook(item);
    setVisible(true);
  };
  const onClose = (): void => {
    setVisible(false);
  };

  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      showSorterTooltip: {
        title: "Click to sort",
      },
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Authors",
      dataIndex: "authors",
      key: "authors",
    },
    {
      title: "Detail",
      dataIndex: "detail",
      key: "detail",
      render: (_: any, item: BooksDeclare) => (
        <Button onClick={() => showDrawer(item)}>Detail</Button>
      ),
    },
  ];
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <Table
        style={{ marginTop: "20px" }}
        dataSource={books}
        columns={columns}
        rowKey={"isbn"}
        loading={loading}
      />
      <Drawer
        title={`Detail of ${book?.name}`}
        placement="right"
        onClose={onClose}
        visible={visible}
        className="drawer-detail"
      >
        <Row>
          <Col span={12}>Name</Col>
          <Col span={12}>{book?.name}</Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>Authors</Col>
          <Col span={12}>{book?.authors}</Col>
        </Row>
        <Divider />

        <Row>
          <Col span={12}>Number of pages</Col>
          <Col span={12}>{book?.numberOfPages}</Col>
        </Row>
        <Divider />

        <Row>
          <Col span={12}>Publisher</Col>
          <Col span={12}>{book?.publisher}</Col>
        </Row>
        <Divider />

        <Row>
          <Col span={12}>Country</Col>
          <Col span={12}>{book?.country}</Col>
        </Row>
        <Divider />

        <Row>
          <Col span={12}>Media Type</Col>
          <Col span={12}>{book?.mediaType}</Col>
        </Row>
        <Divider />

        <Row>
          <Col span={12}>Released</Col>
          <Col span={12}>{book?.released}</Col>
        </Row>
      </Drawer>
    </>
  );
}

export default Books;
