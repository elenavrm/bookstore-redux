import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
        <h1> What Book Will You Get Today?</h1>

        {['HARRY POTTER', 'FANTASTIC BEASTS', 'HOGWARTS', 'ALL']
        .map(category => <Filter category={category}/>)}
        
        </div>
    )
}
export default AllCategories;