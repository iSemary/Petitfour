import React, { useState, useEffect } from "react";
import AxiosConfig from "../config/AxiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import { ImSpinner10 } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import BlogTemplate from "./Components/Templates/BlogTemplate";
import BlogLoader from "./Loaders/BlogLoader";
import CategoriesTemplate from "./Components/Templates/CategoriesTemplate";

function Blogs({ categories }) {
    const [page, setPage] = useState(1);
    const [blogs, setBlogs] = useState([]);
    const [category, setCategory] = useState(null);
    const [totalRecords, setTotalRecords] = useState(null);
    const [allRecords, setAllRecords] = useState(0);
    const [loadMore, setLoadMore] = useState(false);

    const getData = () => {
        AxiosConfig.get(
            `/blogs?page=${page}${category && "&category=" + category}`
        )
            .then((response) => {
                if (response.data.success) {
                    setBlogs((prevBlogs) => [
                        ...prevBlogs,
                        ...response.data.data.data,
                    ]);
                    setPage(page + 1);
                    setTotalRecords(response.data.data.total);
                    setLoadMore(false);


                    if (!category) {
                        setAllRecords(response.data.data.total);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
                setLoadMore(false);
            });
    };

    useEffect(() => {
        setBlogs([]);
        setPage(1);
        getData();
    }, [category]);

    const loadMoreData = () => {
        setLoadMore(true);
        getData();
    };

    return (
        <Container className="m-auto">
            <Row className="justify-content-between">
                <Col md={3}>
                    <h1 className="my-4">Blogs</h1>
                </Col>
                <Col
                    md={9}
                    className="blog-filter justify-content-between width-fit-content"
                >
                    {categories && categories.length > 0 && (
                        <CategoriesTemplate
                            activeCategory={category}
                            categories={categories}
                            allRecords={allRecords}
                            setPage={setPage}
                            setCategory={setCategory}
                            type="blogs"
                        />
                    )}
                </Col>
            </Row>

            <Row className="blogs mt-sm-1">
                {blogs && blogs.length > 0 ? (
                    blogs.map((blog, key) => (
                        <BlogTemplate blog={blog} col={4} fade={true} key={key} />
                    ))
                ) : (
                    <>
                        <Col md={4}>
                            <BlogLoader />
                        </Col>
                        <Col md={4}>
                            <BlogLoader />
                        </Col>
                        <Col md={4}>
                            <BlogLoader />
                        </Col>
                    </>
                )}
            </Row>
            {totalRecords > blogs.length && (
                <div className="text-center my-3">
                    <button
                        type="button"
                        onClick={loadMoreData}
                        className="btn btn-main-light"
                        disabled={loadMore ? "disabled" : ""}
                    >
                        {loadMore ? (
                            <>
                                <ImSpinner10 className="spinner" /> Loading...
                            </>
                        ) : (
                            <>
                                <HiOutlineDownload /> Load More
                            </>
                        )}
                    </button>
                </div>
            )}
        </Container>
    );
}

export default Blogs;
