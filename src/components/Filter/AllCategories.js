import Filter from "./Filter";

const AllCategories = () => {
  return (
    <div>
      <h1> Hogwarts Library </h1>
      {['HARRY POTTER', 'FANTASTIC BEASTS', 'HOGWARTS', 'ALL BOOKS']
        .map((category, index) => (
          <Filter key={index} category={category} />
        ))}
    </div>
  );
};

export default AllCategories;
