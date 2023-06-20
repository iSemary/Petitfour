import React from "react";
function CategoriesTemplate({ activeCategory, categories, totalRecords, setPage, setCategory, type }) {
    return (
        <>
            <button
                className={
                    "btn btn-main-light position-relative " +
                    (activeCategory === null && "active")
                }
                type="button"
                onClick={(e) => {
                    setPage(1);
                    setCategory(null);
                }}
            >
                All <span>{totalRecords}</span>
            </button>
            {categories.map((_category, index) => (
                <button
                    className={
                        "btn btn-main-light position-relative " +
                        (activeCategory ===
                            _category.name.split(" ").join("-").toLowerCase() &&
                            "active")
                    }
                    key={index}
                    onClick={(e) => {
                        setPage(1);
                        setCategory(
                            _category.name.split(" ").join("-").toLowerCase()
                        );
                    }}
                >
                    {_category.name} <span>{_category.counters[type]}</span>
                </button>
            ))}
        </>
    );
}

export default CategoriesTemplate;
